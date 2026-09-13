import logo from "../assets/logo-text.png"

const Navbar = () => {
    return (
        <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
            <div className="navbar container mx-auto px-5 md:px-10">

                {/* Logo */}
                <div className="navbar-start">
                    {/* <div className="flex items-center gap-2">

                        <div className="w-9 h-9 rounded-lg primary-gradient flex items-center justify-center text-white text-sm font-bold">
                            DS
                        </div>

                        <span className="text-lg font-bold text-gray-900">
                            Dev<span className="text-pink-600">Stack</span>
                        </span>

                    </div> */}
                    <img src={logo} alt="" />
                </div>


                {/* Desktop Menu */}
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-2 text-sm">

                        <li>
                            <a className="text-pink-600 font-medium">
                                Home
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-600 hover:text-pink-600">
                                Technologies
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-600 hover:text-pink-600">
                                Projects
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-600 hover:text-pink-600">
                                About
                            </a>
                        </li>

                        <li>
                            <a className="text-gray-600 hover:text-pink-600">
                                Contact
                            </a>
                        </li>

                    </ul>
                </div>


                {/* Right Side */}
                <div className="navbar-end">

                    {/* Desktop Buttons */}
                    <div className="hidden sm:flex items-center gap-4">

                        <button className="text-sm text-gray-700 hover:text-pink-600">
                            Sign In
                        </button>

                        <button className="btn btn-sm rounded-full border-0 text-white primary-gradient">
                            Sign Up
                        </button>

                    </div>


                    {/* Mobile Menu */}
                    <div className="dropdown dropdown-end lg:hidden">

                        <button
                            tabIndex={0}
                            className="btn btn-ghost btn-circle"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>


                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-white rounded-box z-50 mt-3 w-52 p-3 shadow-lg"
                        >

                            <li>
                                <a className="text-pink-600">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a>Technologies</a>
                            </li>

                            <li>
                                <a>Projects</a>
                            </li>

                            <li>
                                <a>About</a>
                            </li>

                            <li>
                                <a>Contact</a>
                            </li>

                            <li>
                                <a>Sign In</a>
                            </li>

                            <li>
                                <a>Sign Up</a>
                            </li>

                        </ul>

                    </div>

                </div>

            </div>
        </div>
    );
};

export default Navbar;