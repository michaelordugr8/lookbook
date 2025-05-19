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
    const descriptionRef = useRef(null);
    const tagsInputRef = useRef(null);
    const [images, setImages] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [isFavorite, setIsFavorite] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [selectedTags, setSelectedTags] = useState(['Streetwear']);
    const [uploadedFile, setUploadedFile] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


    const fetchImages = async (page = 1) => {
        try {
            setLoading(true);
            const { data } = await axios.get(
                `${API_URL}?query=${
                    searchInput.current.value || selectedFilter
                }&page=${page}&per_page=${IMAGES_PER_PAGE}&client_id=${
                    process.env.REACT_APP_API_KEY
                }`
            );
            
            if (page === 1) {
                setImages(data.results);
            } else {
                setImages(prevImages => [...prevImages, ...data.results]);
            }
            
            setTotalPages(data.total_pages);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    }

    const handleLoadMore = () => {
        const nextPage = currentPage + 1;
        if (nextPage <= totalPages) {
            setCurrentPage(nextPage);
            fetchImages(nextPage);
        }
    };

    const handleSearch = (event) => {
        event.preventDefault();
        console.log(searchInput.current.value);
        setCurrentPage(1);
        fetchImages(1);
    }

    const handleSelection = (selection) => {
        setSelectedFilter(selection);
        searchInput.current.value = selection;
        setCurrentPage(1);
        fetchImages(1);
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
                    setUploadedFile(file);
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
        setModalVisible(false);
        // Reset the form data
        setPreview(null);
        setUploadedFile(null);
        setSelectedTags(['Streetwear']);
        if (descriptionRef.current) descriptionRef.current.value = '';
        if (tagsInputRef.current) tagsInputRef.current.value = '';
    }

    const uploadModalBtn = (e) => {
        if (e.target === document.getElementById('uploadModal')) {
            setModalVisible(false);
        }
    }

    const openModal = () => {
        setModalVisible(true);
    }

    const [selectedFilter, setSelectedFilter] = useState('outfits');

    useEffect(() => {
        fetchImages(1);
    }, []);

    const filters = [
        { value: 'outfits', label: 'All' },
        { value: 'streetwear outfits', label: 'Streetwear' },
        { value: 'casual outfits', label: 'Casual' },
        { value: 'formal outfits', label: 'Formal' },
        { value: 'vintage outfits', label: 'Vintage' },
        { value: 'bohemian outfits', label: 'Bohemian' },
        { value: 'sporty outfits', label: 'Sporty' }
    ];

    const handleAddToFavorites = (imageId) => {
        // In a real app, you would store this in state or context with the specific image ID
        setIsFavorite(true);
    };

    const handleRemoveFromFavorites = (imageId) => {
        // In a real app, you would remove this specific image ID from state or context
        setIsFavorite(false);
    };

    const handleTagClick = (tag) => {
        if (selectedTags.includes(tag)) {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        } else {
            setSelectedTags([...selectedTags, tag]);
        }
    };

    const handleAddTag = () => {
        if (tagsInputRef.current && tagsInputRef.current.value.trim()) {
            const newTag = tagsInputRef.current.value.trim();
            if (!selectedTags.includes(newTag)) {
                setSelectedTags([...selectedTags, newTag]);
                tagsInputRef.current.value = '';
            }
        }
    };

    const handleTagInputKeyPress = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            handleAddTag();
        }
    };

    const handleShareLook = () => {
        if (!preview) {
            alert('Please select an image first');
            return;
        }

        // Create a new image object to add to the grid
        const newImage = {
            id: `user-upload-${Date.now()}`,
            alt_description: descriptionRef.current ? descriptionRef.current.value : 'User uploaded image',
            urls: {
                small: preview
            },
            user: {
                username: 'me'  // This could be the actual username in a real app
            },
            isUserUploaded: true,
            tags: [...selectedTags]
        };

        // Add the new image to the beginning of the images array
        setImages(prevImages => [newImage, ...prevImages]);
        
        // Close the modal and reset form
        closeModalBtn();
        
        // Show success message
        alert('Your look has been shared successfully!');
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
                                    <label htmlFor="streetwear" className="ml-2 block text-sm text-gray-900">Streetwear</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="vintage" name="vintage" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label htmlFor="vintage" className="ml-2 block text-sm text-gray-900">Vintage</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="minimalist" name="minimalist" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label htmlFor="minimalist" className="ml-2 block text-sm text-gray-900">Minimalist</label>
                                </div>
                                <div className="flex items-center">
                                    <input id="bohemian" name="bohemian" type="checkbox" className="h-4 w-4 text-purple-500 focus:ring-purple-500 border-gray-300 rounded"></input>
                                    <label htmlFor="bohemian" className="ml-2 block text-sm text-gray-900">Bohemian</label>
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
                            <Form.Control type="search" placeholder="Type something to search" ref={searchInput} className=" focus:ring-purple-500 focus:border-purple-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2" />
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

                <div className="text-center mb-6">
                    <button 
                        onClick={openModal}
                        className="inline-flex items-center px-6 py-3 bg-purple-500 text-white font-medium rounded-full hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        <i className="fas fa-upload mr-2"></i>
                        Upload Your Look
                    </button>
                </div>
            </section>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <div className="home-masonry">
                    {
                        images.map((image, index) => {
                            return(
                                <div className="pin" key={`${image.id}-${index}`}>
                                    <img 
                                    src={image.urls.small} 
                                    alt={image.alt_description}
                                    className="pin" 
                                    />
                                    <div className="pin-overlay">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h3 className="font-bold">
                                                    {image.isUserUploaded ? 'My Look' : 'Urban Street Style'}
                                                </h3>
                                                <p className="text-sm">
                                                    {image.isUserUploaded ? 'You' : '@fashionista23'}
                                                </p>
                                                {image.isUserUploaded && image.tags && (
                                                    <div className="flex flex-wrap mt-1 gap-1">
                                                        {image.tags.slice(0, 2).map((tag, tagIndex) => (
                                                            <span key={tagIndex} className="px-1.5 py-0.5 bg-purple-100 text-purple-700 rounded-full text-xs">
                                                                {tag}
                                                            </span>
                                                        ))}
                                                        {image.tags.length > 2 && (
                                                            <span className="px-1.5 py-0.5 bg-gray-100 text-gray-700 rounded-full text-xs">
                                                                +{image.tags.length - 2}
                                                            </span>
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                           <button 
                                            className="bg-white w-8 h-8 rounded-full flex justify-center items-center"
                                            onClick={isFavorite ? () => handleRemoveFromFavorites(image.id) : () => handleAddToFavorites(image.id)}
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
                    {currentPage < totalPages ? (
                        <button 
                            onClick={handleLoadMore}
                            className="bg-white border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                            disabled={loading}
                        >
                            {loading ? 'Loading...' : 'Load More'}
                        </button>
                    ) : images.length > 0 ? (
                        <p className="text-gray-500">You've reached the end of the results</p>
                    ) : null}
                </div>
            </section>

            {modalVisible && (
                <div id="uploadModal" className="upload-modal fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={uploadModalBtn}>
                    <div className="upload-content bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-bold text-gray-900">Upload Your Look</h2>
                            <button id="closeModal" className="text-gray-400 hover:text-gray-500" onClick={closeModalBtn}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                        
                        <div className="flex flex-col items-center">
                        <div 
                            className={`drop-area border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer w-full h-56 ${highlight ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}
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
                                <i className="fas fa-cloud-upload-alt text-4xl text-purple-500 mb-3"></i>
                                <h3 className="text-lg font-medium text-gray-700">Drag & drop your photo here</h3>
                                <p className="text-sm text-gray-500 mt-1">or click to browse files</p>
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
                            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                            <textarea 
                                id="description" 
                                ref={descriptionRef}
                                rows="3" 
                                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" 
                                placeholder="Tell us about your outfit..."
                            ></textarea>
                        </div>
                        
                        <div className="mt-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Tags</label>
                            <div className="mt-1 flex flex-wrap gap-2">
                                {['Streetwear', 'Casual', 'Formal', 'Vintage', 'Bohemian'].map(tag => (
                                    <span 
                                        key={tag}
                                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium cursor-pointer ${
                                            selectedTags.includes(tag) 
                                                ? 'bg-purple-100 text-purple-700' 
                                                : 'bg-gray-100 text-gray-800'
                                        }`}
                                        onClick={() => handleTagClick(tag)}
                                    >
                                        {tag}
                                        {selectedTags.includes(tag) && (
                                            <span className="ml-1 text-purple-500">✓</span>
                                        )}
                                    </span>
                                ))}
                            </div>
                            <div className="flex mt-2">
                                <input 
                                    type="text" 
                                    ref={tagsInputRef}
                                    className="flex-grow border border-gray-300 rounded-l-md shadow-sm py-2 px-3 focus:outline-none focus:ring-purple-400 focus:border-purple-400 sm:text-sm" 
                                    placeholder="Add more tags..."
                                    onKeyPress={handleTagInputKeyPress}
                                />
                                <button 
                                    type="button"
                                    onClick={handleAddTag}
                                    className="px-3 py-2 bg-gray-100 border border-gray-300 border-l-0 rounded-r-md text-gray-700 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                >
                                    Add
                                </button>
                            </div>
                        </div>
                        
                        <div className="mt-6">
                            <button 
                                type="button" 
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-400"
                                onClick={handleShareLook}
                                disabled={!preview}
                            >
                                Share Your Look
                            </button>
                        </div>
                    </div>
                </div>
            )}

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