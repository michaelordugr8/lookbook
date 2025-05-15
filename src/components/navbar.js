import { Link } from "react-router-dom"
import logo from '../images/logo.png'
import avatar from '../images/adventurer-1747301922692.png'

function NavBar() {

    const uploadBtnClick = () => {
        document.getElementById('uploadModal').style.display = 'flex';
    }

    const userMenuButton = () => {
        document.getElementById('user-dropdown').classList.toggle('hidden');
    }

    return (

        <nav className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center">
                        <a href="/">
                            <img src={logo} className="w-[10rem]" />
                        </a>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="/explore" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Explore</a>
                        <a href="/direct/inbox" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">Messages</a>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center">
                    <div className="relative rounded-md shadow-sm w-64">
                    </div>
                    <button id="uploadBtn" className="ml-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-purple-500 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer" onClick={uploadBtnClick}>
                        <i className="fas fa-plus mr-2"></i> Upload
                    </button>
                    <div className="ml-4 relative">
                        <button id="user-menu-button" className="flex items-center space-x-1 focus:outline-none cursor-pointer" onClick={userMenuButton}>
                            <img className="h-10 w-10 rounded-full" src={avatar} alt="User profile" />
                            <i className="fas fa-chevron-down text-xs text-gray-500"></i>
                        </button>
                        <div id="user-dropdown" className="dropdown hidden absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                            <a href="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</a>
                            <div className="border-t border-gray-200"></div>
                            <a href="/" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sign out</a>
                        </div>
                    </div>
                </div>
                <div className="-mr-2 flex items-center sm:hidden">
                    <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500" aria-controls="mobile-menu" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <i className="fas fa-bars"></i>
                    </button>
                </div>
                </div>
            </div>
        </nav>
      )
}

export default NavBar