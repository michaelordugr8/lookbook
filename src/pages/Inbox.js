import NavBar from "../components/navbar"
import "../css/inbox.css"


function InBox() {
    return <>

    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-6">
            <div className="flex gap-4">
                <a href="/">
                    <div className="bg-gray-100 flex justify-center items-center rounded-full w-8 h-8">
                        <i className="fas fa-chevron-left"></i>
                    </div>
                </a>
                <h1 className="text-2xl font-bold text-gray-900">Messages</h1>
            </div>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium transition duration-200 flex items-center">
                <i className="fas fa-plus mr-2"></i> New Message
            </button>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden chat-container">
            <div className="flex h-full">
                <div className="w-full md:w-1/3 border-r border-gray-200">
                    <div className="p-4 border-b border-gray-200">
                        <div className="relative">
                            <input type="text" placeholder="Search conversations..." className="bg-gray-100 rounded-full py-2 px-4 pl-10 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white w-full" />
                            <i className="fas fa-search absolute left-3 top-3 text-gray-400"></i>
                        </div>
                    </div>
                    
                    <div className="conversation-list">
                        <div className="p-4 border-b border-gray-200 bg-purple-50 cursor-pointer">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Emma Wilson</p>
                                        <p className="text-xs text-gray-500">12:30 PM</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-500 truncate">I'll make those changes ASAP!</p>
                                        <span className="inline-flex items-center justify-center h-5 w-5 bg-purple-500 text-white text-xs font-medium rounded-full">3</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/25.jpg" alt="User" />
                                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">David Johnson</p>
                                        <p className="text-xs text-gray-500">10:45 AM</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-gray-500 truncate">Where did you get those shoes from?!</p>
                                        <span className="inline-flex items-center justify-center h-5 w-5 bg-purple-500 text-white text-xs font-medium rounded-full">1</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Sophia Lee</p>
                                        <p className="text-xs text-gray-500">Yesterday</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-500 truncate">Let's meet up this weekend to go shopping!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" />
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Michael Brown</p>
                                        <p className="text-xs text-gray-500">2 days ago</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-500 truncate">Found that jacket you were looking for...</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/68.jpg" alt="User" />
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Olivia Martinez</p>
                                        <p className="text-xs text-gray-500">1 week ago</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-500 truncate">Check out my new lookbook post!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-4 hover:bg-gray-50 cursor-pointer">
                            <div className="flex items-center">
                                <div className="relative">
                                    <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/men/75.jpg" alt="User" />
                                    <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white"></span>
                                </div>
                                <div className="ml-3 flex-1">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm font-medium text-gray-900">Daniel Kim</p>
                                        <p className="text-xs text-gray-500">1 week ago</p>
                                    </div>
                                    <div className="flex items-center">
                                        <p className="text-sm text-gray-500 truncate">Thanks for the collaboration!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="hidden md:flex flex-col w-2/3">
                    <div className="p-4 border-b border-gray-200 flex items-center">
                        <img className="h-10 w-10 rounded-full" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-900">Emma Wilson</p>
                            <p className="text-xs text-gray-500">Active now</p>
                        </div>
                        <div className="ml-auto flex space-x-2">
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700">
                                <i className="fas fa-phone"></i>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700">
                                <i className="fas fa-video"></i>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700">
                                <i className="fas fa-ellipsis-h"></i>
                            </button>
                        </div>
                    </div>
                    
                    <div className="flex-1 p-4 overflow-y-auto message-container">
                        <div className="flex items-center my-4">
                            <div className="flex-1 border-t border-gray-200"></div>
                            <span className="px-3 text-xs text-gray-500">Today</span>
                            <div className="flex-1 border-t border-gray-200"></div>
                        </div>
                        
                        <div className="flex mb-4">
                            <img className="h-8 w-8 rounded-full mr-3" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                            <div>
                                <div className="bg-gray-100 rounded-lg py-2 px-4 max-w-xs md:max-w-md">
                                    <p className="text-sm text-gray-800">Hey! I saw your latest outfit post and absolutely loved it! Where did you get that jacket from?</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">10:15 AM</p>
                            </div>
                        </div>
                        
                        <div className="flex mb-4 justify-end">
                            <div className="text-right">
                                <div className="bg-purple-500 text-white rounded-lg py-2 px-4 max-w-xs md:max-w-md inline-block">
                                    <p className="text-sm">Thanks! It's from Zara's new collection. I can send you the link if you want?</p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">10:18 AM</p>
                            </div>
                            <img className="h-8 w-8 rounded-full ml-3" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                        </div>
                        
                        <div className="flex mb-4">
                            <img className="h-8 w-8 rounded-full mr-3" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                            <div>
                                <div className="bg-gray-100 rounded-lg py-2 px-4 max-w-xs md:max-w-md">
                                    <p className="text-sm text-gray-800">Yes please! That would be amazing. Also, what do you think about these shoes I found to pair with it?</p>
                                </div>
                                <div className="mt-2">
                                    <img className="h-32 w-32 rounded-lg object-cover" src="https://images.unsplash.com/photo-1549298916-b41d501d3772?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" alt="Shoes" />
                                </div>
                                <p className="text-xs text-gray-500 mt-1">10:22 AM</p>
                            </div>
                        </div>
                        
                        <div className="flex mb-4 justify-end">
                            <div className="text-right">
                                <div className="bg-purple-500 text-white rounded-lg py-2 px-4 max-w-xs md:max-w-md inline-block">
                                    <p className="text-sm">Those are perfect! The color matches really well. Here's the link to the jacket: <a href="#" class="underline">zara.com/jacket123</a></p>
                                </div>
                                <p className="text-xs text-gray-500 mt-1">10:25 AM</p>
                            </div>
                            <img className="h-8 w-8 rounded-full ml-3" src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" />
                        </div>
                        
                        <div className="flex mb-4">
                            <img className="h-8 w-8 rounded-full mr-3" src="https://randomuser.me/api/portraits/women/32.jpg" alt="User" />
                            <div>
                                <div className="bg-gray-100 rounded-lg py-2 px-4 max-w-xs md:max-w-md">
                                    <div className="flex space-x-1">
                                        <div className="typing-dot h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="typing-dot h-2 w-2 bg-gray-400 rounded-full"></div>
                                        <div className="typing-dot h-2 w-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="p-4 border-t border-gray-200">
                        <div className="flex items-center">
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 mr-2">
                                <i className="fas fa-paperclip"></i>
                            </button>
                            <button className="p-2 rounded-full hover:bg-gray-100 text-gray-500 hover:text-gray-700 mr-2">
                                <i className="fas fa-camera"></i>
                            </button>
                            <input type="text" placeholder="Type a message..." class="flex-1 bg-gray-100 rounded-full py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:bg-white" />
                            <button className="ml-2 p-2 rounded-full bg-purple-500 text-white hover:bg-purple-600">
                                <i className="fas fa-paper-plane"></i>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="md:hidden flex items-center justify-center w-full h-full">
                    <div className="text-center p-6">
                        <i className="fas fa-comments text-4xl text-gray-300 mb-4"></i>
                        <h3 className="text-lg font-medium text-gray-900">Select a conversation</h3>
                        <p className="mt-1 text-sm text-gray-500">Choose a chat from the list to start messaging</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    </>
}

export default InBox