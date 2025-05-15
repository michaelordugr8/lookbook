import { Link } from "react-router-dom"
import logo from '../images/logo.png'

function HomeNavBar() {

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
                        <a href="/sign-up">
                            <button className="ml-4 inline-flex items-center px-6 py-2 text-sm font-medium rounded-md shadow-sm hover:text-purple-700 hover:border-purple-700 text-purple-500 border-solid border-purple-500 border-[2px] transition-all duration-[400ms] ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                                Sign In
                            </button>
                        </a>
                        <a href="/log-in">
                            <button className="ml-4 inline-flex items-center px-6 py-2 text-sm font-medium rounded-md shadow-sm text-white hover:bg-purple-700 bg-purple-500 border-solid hover:border-purple-700 border-purple-500 border-[2px] transition-all duration-[400ms] ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 cursor-pointer">
                                Log In
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
      )
}

export default HomeNavBar