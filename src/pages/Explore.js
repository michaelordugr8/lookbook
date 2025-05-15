import NavBar from "../components/navbar"
import "../css/explore.css"
import React, { useState, useRef, useEffect } from 'react';
import { Form } from 'react-bootstrap'
import axios from "axios";

const API_URL = 'https://api.unsplash.com/search/photos';
let IMAGES_PER_PAGE = 20;

function Explore() {
    const [highlight, setHighlight] = useState(false);
    const [preview, setPreview] = useState(null);
    const fileInputRef = useRef(null);
    const searchInput = useRef(null);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);


    const fetchImages = async () => {
        try {
            const {data} = await axios.get(
                `${API_URL}?query=${
                    searchInput.current.value
                }&page=1&per_page=${IMAGES_PER_PAGE}&client_id=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            setImages(data.results);
            setTotalPages(data.total_pages);
        } catch (error) {
            console.log(error);
        }
    }

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchInput.current.value);
        fetchImages();
    }

    const handleSelection = (selection) => {
        setSelectedFilter(selection);
        searchInput.current.value = selection;
        fetchImages();
    }

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

    const closeModalBtn = () => {
        document.getElementById('uploadModal').style.display = 'none';
    }
    const uploadModalBtn = (e) => {
        if (e.target === document.getElementById('uploadModal')) {
            document.getElementById('uploadModal').display = 'none';
        }
    }
    const [selectedFilter, setSelectedFilter] = useState('all');

    const filters = [
        { value: 'outfits', label: 'All' },
        { value: 'streetwear outfits', label: 'Streetwear' },
        { value: 'casual outfits', label: 'Casual' },
        { value: 'formal outfits', label: 'Formal' },
        { value: 'vintage outfits', label: 'Vintage' },
        { value: 'bohemian outfits', label: 'Bohemian' },
        { value: 'sporty outfits', label: 'Sporty' }
    ];

    const handleAddToFavorites = () => {
        setIsFavorite(true);
    };

    const handleRemoveFromFavorites = () => {
        setIsFavorite(false);
    };


    return <>
        <NavBar></NavBar>
        <main>
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col gap-4">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <select id="sort-by" className="appearance-none bg-white border border-gray-300 rounded-full py-2 pl-4 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500">
                                <option>Most Popular</option>
                                <option>Newest First</option>
                                <option>Most Liked</option>
                                <option>Most Saved</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <i className="fas fa-chevron-down text-xs"></i>
                            </div>
                        </div>
                        
                        <button id="toggle-filters" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                            <i className="fas fa-sliders-h mr-2"></i>
                            Advanced Filters
                        </button>
                    </div>
                </div>
                
                <div id="advanced-filters" className="hidden mt-6 bg-white p-4 rounded-lg shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Style Categories</label>
                            <div className="space-y-2">
                                <div className="flex items-center">
                                    <input id="streetwear" name="streetwear" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label for="streetwear" className="ml-2 block text-sm text-gray-900">Streetwear</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="vintage" name="vintage" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label for="vintage" class="ml-2 block text-sm text-gray-900">Vintage</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="minimalist" name="minimalist" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label for="minimalist" className="ml-2 block text-sm text-gray-900">Minimalist</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="bohemian" name="bohemian" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label for="bohemian" className="ml-2 block text-sm text-gray-900">Bohemian</label>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Color Palette</label>
                            <div className="flex flex-wrap gap-2">
                                <button className="w-6 h-6 rounded-full bg-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-red-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-blue-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-green-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-yellow-300 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-purple-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                                <button className="w-6 h-6 rounded-full bg-purple-500 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"></button>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Season</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Spring</button>
                                <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Summer</button>
                                <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Fall</button>
                                <button className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-xs hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">Winter</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="mt-6 flex justify-end space-x-3">
                        <button id="reset-filters" className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Reset
                        </button>
                        <button id="apply-filters" className="px-4 py-2 border border-transparent rounded-md text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
                            Apply Filters
                        </button>
                    </div>
                </div>
                <div className=" w-full flex items-center justify-center sm:ml-6 sm:flex sm:items-center ">
                    <div className="search-section relative rounded-md shadow-sm w-[50%]">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i className="fas fa-search text-gray-400"></i>
                        </div>
                        <Form onSubmit={handleSearch}>
                            <Form.Control type="search" placeholder="Type something to search" ref={searchInput} className="focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2" />
                        </Form>
                    </div>
                </div>
                
                <div className="flex overflow-x-auto pb-4 mb-6 hide-scrollbar">
                    <div className="flex space-x-4">
                        {filters.map((filter) => (
                        <div key={filter.value} className="relative">
                            <input
                            type="radio"
                            id={`filter-${filter.value}`}
                            name="outfit-filter"
                            value={filter.value}
                            checked={selectedFilter === filter.value}
                            onChange={() => handleSelection(filter.value)}
                            className="absolute opacity-0 w-0 h-0"
                            />
                            
                            <label
                            htmlFor={`filter-${filter.value}`}
                            className={`px-4 py-2 rounded-full cursor-pointer block text-sm font-medium transition-colors
                                ${selectedFilter === filter.value 
                                ? 'bg-purple-500 text-white' 
                                : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                            >
                            {filter.label}
                            </label>
                        </div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="home-masonry">
                    {
                        images.map(image => {
                            return(
                                <div className="pin">
                                    <img 
                                    key={image.id} 
                                    src={image.urls.small} 
                                    alt={image.alt_description}
                                    className="pin" 
                                    />
                                    <div className="pin-overlay">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-bold">Urban Street Style</h3>
                                                <p className="text-sm">@fashionista23</p>
                                            </div>
                                           <button 
                                            className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
                                            onClick={isFavorite ? handleRemoveFromFavorites : handleAddToFavorites}
                                            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                                            >
                                                {isFavorite ? (
                                                    <i className="fas fa-heart text-lg text-red-500"></i>
                                                ) : (
                                                    <i className="fa-regular fa-heart text-lg text-black"></i>
                                                )}
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                
                <div className="mt-8 text-center">
                    <button id="load-more" className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500" >
                        Load More
                    </button>
                </div>
            </section>

            <div id="uploadModal" className="upload-modal" onClick={uploadModalBtn}>
                <div className="upload-content">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-xl font-bold text-gray-900">Upload Your Look</h2>
                        <button id="closeModal" class="text-gray-400 hover:text-gray-500" onClick={closeModalBtn}>
                            <i className="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div className="flex flex-col items-center">
                    <div 
                        className= 'drop-area'
                        onDragEnter={preventDefaults}
                        onDragOver={(e) => { preventDefaults(e); handleHighlight(); }}
                        onDragLeave={(e) => { preventDefaults(e); handleUnhighlight(); }}
                        onDrop={handleDrop}
                        onClick={handleClick}
                    >
                        {preview ? (
                        <img src={preview} className="max-h-56 max-w-full rounded-lg" alt="Preview" />
                        ) : (
                        <>
                            <i class="fas fa-cloud-upload-alt text-4xl text-purple-500 mb-3"></i>
                            <h3 class="text-lg font-medium text-gray-700">Drag & drop your photo here</h3>
                            <p class="text-sm text-gray-500 mt-1">or click to browse files</p>
                        </>
                        )}
                    </div>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept="image/*" 
                        onChange={handleChange}
                    />
                    </div>
                    
                    <div className="mt-4">
                        <label for="description" className="block text-sm font-medium text-gray-700">Description</label>
                        <textarea id="description" rows="3" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" placeholder="Tell us about your outfit..."></textarea>
                    </div>
                    
                    <div className="mt-4">
                        <label className="block text-sm font-medium text-gray-700">Tags</label>
                        <div className="mt-1 flex flex-wrap gap-2">
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-700">Streetwear</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Casual</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Formal</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Vintage</span>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">Bohemian</span>
                        </div>
                        <input type="text" className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" placeholder="Add more tags..."></input>
                    </div>
                    
                    <div className="mt-6">
                        <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400">
                            Share Your Look
                        </button>
                    </div>
                </div>
            </div>

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

export default Explore