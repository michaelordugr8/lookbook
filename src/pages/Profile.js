import NavBar from "../components/navbar"
import "../css/home.css"
import "../css/profile.css"
import avatar from '../images/adventurer-1747301922692.png'

function Profile() {
    return <>
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <a href="/" className="btn-hover text-white absolute top-2 left-2 text-black-700 font-medium text-sm flex gap-2 justify-center items-center bg-purple-500 px-3 py-3 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition duration-300">
                <i className="fa-solid fa-angle-left"></i>       Back to Home
            </a>
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-8 mt-10 profile-header">
                <div className="flex items-end pt-10">
                    <img className="profile-pic w-32 h-32 rounded-full object-cover shadow-lg pt-4" src={avatar} alt="Profile picture" />
                    <div className="ml-6">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">David Francis</h1>
                        <p className="text-gray-600">Fashion enthusiast & stylist</p>
                        <div className="flex items-center mt-2">
                            <i className="fas fa-map-marker-alt text-gray-400 mr-1"></i>
                            <span className="text-sm text-gray-500">New York, USA</span>
                        </div>
                    </div>
                </div>
                <div className="flex space-x-3 mt-4 md:mt-0 profile-actions">
                    <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-200 flex items-center">
                        <i className="fas fa-plus mr-2"></i> Follow
                    </button>
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-full text-sm font-medium transition duration-200 flex items-center">
                        <i className="fas fa-envelope mr-2"></i> Message
                    </button>
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 p-2 rounded-full text-sm font-medium transition duration-200">
                        <i className="fas fa-ellipsis-h"></i>
                    </button>
                </div>
            </div>

            <div className="stats-grid grid grid-cols-4 gap-4 mb-8">
                <div className="stats-item bg-white p-4 rounded-lg text-center hover:shadow-md">
                    <div className="text-2xl font-bold text-purple-500">1,284</div>
                    <div className="text-sm text-gray-500">Posts</div>
                </div>
                <div className="stats-item bg-white p-4 rounded-lg text-center hover:shadow-md">
                    <div className="text-2xl font-bold text-purple-500">24.8k</div>
                    <div className="text-sm text-gray-500">Followers</div>
                </div>
                <div className="stats-item bg-white p-4 rounded-lg text-center hover:shadow-md">
                    <div className="text-2xl font-bold text-purple-500">482</div>
                    <div className="text-sm text-gray-500">Following</div>
                </div>
                <div className="stats-item bg-white p-4 rounded-lg text-center hover:shadow-md">
                    <div className="text-2xl font-bold text-purple-500">86</div>
                    <div className="text-sm text-gray-500">Saved Looks</div>
                </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm mb-8">
                <h2 className="text-lg font-semibold text-gray-900 mb-3">About</h2>
                <p className="text-gray-600 mb-4">
                    Fashion stylist and content creator based in New York. I love creating unique outfits and sharing my style tips with the world. 
                    Let's connect and inspire each other!
                </p>
                <div className="flex flex-wrap gap-2">
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">#streetstyle</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">#ootd</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">#fashionista</span>
                    <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">#newyork</span>
                </div>
            </div>

            <div className="border-b border-gray-200 mb-6">
                <nav className="-mb-px flex space-x-8">
                    <a href="#" className="border-purple-500 text-purple-500 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
                        <i className="fas fa-th-large mr-2"></i> Posts
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
                        <i className="fas fa-heart mr-2"></i> Liked
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
                        <i className="fas fa-bookmark mr-2"></i> Saved
                    </a>
                    <a href="#" className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm flex items-center">
                        <i className="fas fa-tag mr-2"></i> Tagged
                    </a>
                </nav>
            </div>

            <div className="tab-content">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="grid-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fashion post" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                                <span className="text-white flex items-center">
                                    <i className="fas fa-heart mr-1"></i> 248
                                </span>
                                <span className="text-white flex items-center">
                                    <i className="fas fa-comment mr-1"></i> 36
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1542295669297-4d352b042bca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fashion post" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                                <span className="text-white flex items-center">
                                    <i className="fas fa-heart mr-1"></i> 512
                                </span>
                                <span className="text-white flex items-center">
                                    <i className="fas fa-comment mr-1"></i> 42
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1525507119028-ed4c629a60a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fashion post" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                                <span className="text-white flex items-center">
                                    <i className="fas fa-heart mr-1"></i> 324
                                </span>
                                <span className="text-white flex items-center">
                                    <i className="fas fa-comment mr-1"></i> 28
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fashion post" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                                <span className="text-white flex items-center">
                                    <i className="fas fa-heart mr-1"></i> 198
                                </span>
                                <span className="text-white flex items-center">
                                    <i className="fas fa-comment mr-1"></i> 14
                                </span>
                            </div>
                        </div>
                    </div>


                    <div className="grid-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fashion post" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                                <span className="text-white flex items-center">
                                    <i className="fas fa-heart mr-1"></i> 421
                                </span>
                                <span className="text-white flex items-center">
                                    <i className="fas fa-comment mr-1"></i> 31
                                </span>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid-item bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md relative group">
                        <img src="https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" alt="Fashion post" className="w-full h-64 object-cover" />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <div className="flex space-x-4">
                                <span className="text-white flex items-center">
                                    <i className="fas fa-heart mr-1"></i> 387
                                </span>
                                <span className="text-white flex items-center">
                                    <i className="fas fa-comment mr-1"></i> 22
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-6 py-2 rounded-full text-sm font-medium transition duration-200">
                        Load More
                    </button>
                </div>
            </div>
        </main>
    </>
}

export default Profile