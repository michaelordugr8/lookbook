import HomeNavBar from "../components/homeNavbar";
import "../css/home.css"
import React, { useState, useRef } from 'react';

function Home() {
    const [highlight, setHighlight] = useState(false);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);

    const preventDefaults = (e) => {
        e.preventDefault();
        e.stopPropagation();
    };
    
    const handleHighlight = () => {
        setHighlight(true);
    };
    
    const handleUnhighlight = () => {
        setHighlight(false);
    };
    
    const handleDrop = (e) => {
        preventDefaults(e);
        handleUnhighlight();
        const dt = e.dataTransfer;
        const files = dt.files;
        handleFiles(files);
    };
    
    const handleFiles = (files) => {
    if (files.length) {
        const file = files[0];
        if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
            setPreview(e.target.result);
        };
        reader.readAsDataURL(file);
        } else {
        alert('Please select an image file.');
        }
    }
    };
    
    const handleClick = () => {
    fileInputRef.current.click();
    };
    
    const handleChange = (e) => {
    handleFiles(e.target.files);
    };

    return <>
        <HomeNavBar></HomeNavBar>
        <main>
            <section>
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                            Discover Fashion Inspiration
                        </h1>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
                            Browse thousands of styles from our community of fashion enthusiasts
                        </p>
                    </div>
                </div>
            </section>

            <div className="home-masonry max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/ad/9d/0d/ad9d0ddaadfbcf2cdea13410641fc285.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">teni_ola</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/76/a2/30/76a2303c4a13231fe1f99756fbfe102b.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">real_gab3</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/c9/63/dd/c963dd3293bb741485ef65e0b9c0203a.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">monisooo</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/34/ed/3d/34ed3db54a4136fccacfcc40cecef844.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">favour.exe</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/01/fe/25/01fe25b36ac1704020848ea4f2c6cfeb.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">mama_mendy</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/87/2f/d6/872fd65484d3f2ec3e69d001cd06595a.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">jupiterayo</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/a2/6e/ee/a26eee6cf656293b67ded5220e6ff62d.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">vilementality</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pin">
                    <img src="https://i.pinimg.com/736x/c5/73/64/c573640b785a97fa1890813b1f41a08a.jpg" alt="Streetwear outfit" className="pin-image"></img>
                    <div className="pin-overlay">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="font-bold">7even.stf</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-8 text-center">
                <a href="/explore">
                    <button className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                        Explore
                    </button>
                </a>
            </div>

            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                    <div className="lg:text-center">
                        <h2 className="text-base text-purple-500 font-semibold tracking-wide uppercase">How it works</h2>
                        <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Share your style in 3 simple steps
                        </p>
                    </div>

                    <div className="mt-10">
                        <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                                    <span className="text-xl font-bold">1</span>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Upload Your Look</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Snap a photo of your outfit or browse your gallery to share your fashion style with the community.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                                    <span className="text-xl font-bold">2</span>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Add Details</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Give your look a title, description, and tags to help others discover your style inspiration.
                                    </p>
                                </div>
                            </div>

                            <div className="relative">
                                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-purple-500 text-white">
                                    <span className="text-xl font-bold">3</span>
                                </div>
                                <div className="ml-16">
                                    <h3 className="text-lg leading-6 font-medium text-gray-900">Share & Connect</h3>
                                    <p className="mt-2 text-base text-gray-500">
                                        Get likes, comments, and followers who appreciate your fashion sense. Discover and be discovered!
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
          
            <section className="bg-purple-600">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                                Ready to share your style?
                            </h2>
                            <p className="mt-3 max-w-3xl text-lg leading-6 text-pink-100">
                                Join thousands of fashion enthusiasts showcasing their unique styles and discovering inspiration every day.
                            </p>
                            <div className="mt-8 sm:flex">
                                <div className="rounded-md shadow">
                                    <a href="/sign-up" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-purple-700 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10">
                                        Sign up for free
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 lg:mt-0">
                            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                                    <div>
                                        <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-purple-100 text-purple-600">
                                            Popular Tags
                                        </h3>
                                    </div>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#streetwear</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#vintage</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#minimalist</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#boho</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#summer</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#workwear</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#formal</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#casual</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#accessories</a>
                                        <a href="#" className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 hover:bg-gray-200">#shoes</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="bg-white">
                <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
                    <div className="mt-8 flex justify-center space-x-6">
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Facebook</span>
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Instagram</span>
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Pinterest</span>
                            <i className="fab fa-pinterest"></i>
                        </a>
                    </div>
                    <p className="mt-8 text-center text-base text-gray-400">
                        &copy; 2025 LookBook. All rights reserved.
                    </p>
                </div>
            </footer>
        </main>
    </>
}

export default Home