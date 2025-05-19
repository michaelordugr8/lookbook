import NavBar from "../components/navbar"
import "../css/home.css"
import "../css/signup.css"
import logo from '../images/logo.png'
import preview from '../images/preview.png'
import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

function LogIn() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [serverErrors, setServerErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");
    const navigate = useNavigate();

    const { register, handleSubmit, formState: { errors } } = useForm();

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };

    const submitForm = async (data) => {
        setIsSubmitting(true);
        setServerErrors({});
        setSuccessMessage("");
        
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });
            
            const result = await response.json();
            
            if (response.ok) {
                setSuccessMessage(result.message || "Login successful!");
                // Store auth token or user data in localStorage/sessionStorage if applicable
                if (result.token) {
                    localStorage.setItem('authToken', result.token);
                }
                if (result.user) {
                    localStorage.setItem('user', JSON.stringify(result.user));
                }
                
                // Redirect to explore page after successful login
                setTimeout(() => {
                    navigate('/explore'); // Redirect to explore page
                }, 1500);
            } else {
                setServerErrors(result.errors || { general: result.message || "Login failed" });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setServerErrors({ general: 'Network error. Please try again later.' });
        } finally {
            setIsSubmitting(false);
        }
    };

    return <>
            <div className="flex items-center justify-center p-4 h-screen w-full relative">
                <a href="/" className="btn-hover text-white absolute top-2 left-2 text-black-700 font-medium text-sm flex gap-2 justify-center items-center bg-purple-500 px-3 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300">
                    <i className="fa-solid fa-angle-left"></i>       Back to Home
                </a>
                <div className="w-[25%] ml-[5%]">
                    <img src={preview} alt="" className="w-[100%]" />
                </div>
                <div className="shadow-xl w-[30%] h-screen flex-col flex justify-center items-center">
                    <div className="p-4 flex justify-center items-center">
                        <img src={logo} className="w-[12rem]" alt="Logo" />
                    </div>
                    
                    {successMessage && (
                        <div className="w-full px-8 mb-4">
                            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative">
                                <span className="block sm:inline">{successMessage}</span>
                            </div>
                        </div>
                    )}
                    
                    {serverErrors.general && (
                        <div className="w-full px-8 mb-4">
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                                <span className="block sm:inline">{serverErrors.general}</span>
                            </div>
                        </div>
                    )}
                    
                    <div className="px-8 w-full">
                        <form className="space-y-6" onSubmit={handleSubmit(submitForm)}>
                            <Form.Group>
                                <Form.Label className="block text-sm font-medium text-gray-700 mb-1">Username</Form.Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fa-solid fa-user text-purple-500"></i>
                                    </div>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter username"
                                        className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                        {...register("username", {required: true})}
                                    />
                                </div>
                                {errors.username?.type === "required" && <p className="text-red-500 text-xs mt-1">Username is required</p>}
                                {serverErrors.username && <p className="text-red-500 text-xs mt-1">{serverErrors.username}</p>}
                            </Form.Group>
                            
                            <Form.Group>
                                <Form.Label className="block text-sm font-medium text-gray-700 mb-1">Password</Form.Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-lock text-purple-500"></i>
                                    </div>
                                    <Form.Control 
                                        type={passwordVisible ? "text" : "password"}
                                        placeholder="••••••••"
                                        className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                        {...register("password", {required: true})}
                                    />
                                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="text-purple-500 hover:text-purple-700"
                                            aria-label={passwordVisible ? "Hide password" : "Show password"}
                                        >
                                            <i className={passwordVisible ? "fas fa-eye-slash" : "fas fa-eye"}></i>
                                        </button>
                                    </div>
                                </div>
                                {errors.password?.type === "required" && <p className="text-red-500 text-xs mt-1">Password is required</p>}
                                {serverErrors.password && <p className="text-red-500 text-xs mt-1">{serverErrors.password}</p>}
                            </Form.Group>

                            <Form.Group>
                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="btn-hover w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
                                >
                                    {isSubmitting ? 'Logging In...' : 'Log In'}
                                </Button>
                            </Form.Group>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Don't have an account?{' '}
                                <a href="/sign-up" className="font-medium text-purple-600 hover:text-purple-500">
                                    Sign Up
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
}

export default LogIn