import NavBar from "../components/navbar"
import "../css/home.css"
import "../css/signup.css"
import logo from '../images/logo.png'
import preview from '../images/preview.png'
import React, { useState } from "react"
import { Form, Button } from 'react-bootstrap'

function SignUp() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(prevState => !prevState);
    };
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const submitForm = () => {
        console.log("Form Submitted")
        console.log(username)
        console.log(email)
        console.log(password)
        console.log(confirmPassword)

        setUsername('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')
    }

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
                        <img src={logo} className="w-[12rem]" />
                    </div>
                    
                    <div className="px-8 w-full">
                        {/* <form id="loginForm" className="space-y-6">
                            <div>
                                <label for="email" class="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-envelope text-purple-500"></i>
                                    </div>
                                    <input type="email" id="email" name="email" required 
                                        className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300" 
                                        placeholder="your@email.com" />
                                </div>
                            </div>

                            <div>
                                <label for="email" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fa-solid fa-user text-purple-500"></i>
                                    </div>
                                    <input type="email" id="email" name="email" required 
                                        className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300" 
                                        placeholder="Username" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-purple-500"></i>
                                    </div>
                                    <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                    placeholder="••••••••"
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
                            </div>
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                                    Confirm Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <i className="fas fa-lock text-purple-500"></i>
                                    </div>
                                    <input
                                    type={passwordVisible ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    required
                                    className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                    placeholder="••••••••"
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
                            </div>
                            
                            <div>
                                <button type="submit" 
                                        className="btn-hover w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300">
                                    Log in
                                </button>
                            </div>
                        </form> */}
                        <form className="space-y-6">
                            <Form.Group>
                                <Form.Label className="block text-sm font-medium text-gray-700 mb-1">Username</Form.Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fa-solid fa-user text-purple-500"></i>
                                    </div>
                                    <Form.Control type="text" 
                                    placeholder="Enter username"
                                    value={username}
                                    name="username"
                                    className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                    onChange={(e)=>{setUsername(e.target.value)}}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="block text-sm font-medium text-gray-700 mb-1">Email</Form.Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-envelope text-purple-500"></i>
                                    </div>
                                    <Form.Control type="email" 
                                    placeholder="Enter email"
                                    value={email}
                                    name="email"
                                    className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                    onChange={(e)=>{setEmail(e.target.value)}}
                                    />
                                </div>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="block text-sm font-medium text-gray-700 mb-1">Password</Form.Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-lock text-purple-500"></i>
                                    </div>
                                    <Form.Control type="password" 
                                    placeholder="••••••••"
                                    value={password}
                                    name="password"
                                    className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                    onChange={(e)=>{setPassword(e.target.value)}}
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
                            </Form.Group>
                            <Form.Group>
                                <Form.Label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</Form.Label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <i className="fas fa-lock text-purple-500"></i>
                                    </div>
                                    <Form.Control type="password" 
                                    placeholder="••••••••"
                                    value={confirmPassword}
                                    name="confirmPassword"
                                    className="pl-10 input-focus block w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none transition duration-300"
                                    onChange={(e)=>{setConfirmPassword(e.target.value)}}
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
                            </Form.Group>

                            <Form.Group>
                                <a href="/explore">
                                    <Button as="sub" variant="primary"
                                    className="btn-hover w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300"
                                    onClick={submitForm}>
                                        SignUp
                                    </Button>
                                </a>
                            </Form.Group>
                        </form>
                        
                        <div className="mt-6 text-center">
                            <p className="text-sm text-gray-600">
                                Already have an account? 
                                <a href="/log-in" className="font-medium text-purple-600 hover:text-purple-500">
                                    Log In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
}

export default SignUp