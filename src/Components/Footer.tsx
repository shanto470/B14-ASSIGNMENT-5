import Logo from "../assets/logo-text.png"

const Footer = () => {

    return (

        <footer className="border-t border-gray-100 bg-white">

            <div className="container m-auto px-6 py-16">

                <div className="flex flex-col items-center text-center md:hidden">

                    <img src={Logo} alt="" />

                    <p className="mb-5 mt-2 max-w-xs text-sm leading-relaxed text-gray-500">

                        Curated tools, technologies, and resources for developers

                        building modern software.

                    </p>

                    <div className="flex items-center gap-5 text-sm font-medium text-gray-700">

                        <a href="#" className="hover:text-gray-900">GitHub</a>

                        <span>•</span>

                        <a href="#" className="hover:text-gray-900">Twitter</a>

                        <span>•</span>

                        <a href="#" className="hover:text-gray-900">LinkedIn</a>

                    </div>

                </div>




                <div className="hidden md:grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-12">


                    <div>

                        <img src={Logo} alt="" />

                        <p className="mb-5 mt-2 max-w-xs text-sm leading-relaxed text-gray-500">

                            Curated tools, technologies, and resources for developers

                            building modern software.

                        </p>

                        <div className="flex items-center gap-5 text-sm font-medium text-gray-700">

                            <a href="#" className="hover:text-gray-900">GitHub</a>

                            <a href="#" className="hover:text-gray-900">Twitter</a>

                            <a href="#" className="hover:text-gray-900">LinkedIn</a>

                        </div>

                    </div>


                    <div>

                        <h4 className="mb-4 text-xs font-semibold tracking-wider text-gray-900">

                            PRODUCT

                        </h4>

                        <ul className="space-y-3 text-sm text-gray-500">

                            <li><a href="#" className="hover:text-gray-900">Home</a></li>

                            <li><a href="#" className="hover:text-gray-900">Technologies</a></li>

                            <li><a href="#" className="hover:text-gray-900">Projects</a></li>

                        </ul>

                    </div>


                    <div>

                        <h4 className="mb-4 text-xs font-semibold tracking-wider text-gray-900">

                            COMPANY

                        </h4>

                        <ul className="space-y-3 text-sm text-gray-500">

                            <li><a href="#" className="hover:text-gray-900">About</a></li>

                            <li><a href="#" className="hover:text-gray-900">Contact</a></li>

                            <li><a href="#" className="hover:text-gray-900">Careers</a></li>

                        </ul>

                    </div>


                    <div>

                        <h4 className="mb-4 text-xs font-semibold tracking-wider text-gray-900">

                            LEGAL

                        </h4>

                        <ul className="space-y-3 text-sm text-gray-500">

                            <li><a href="#" className="hover:text-gray-900">Privacy Policy</a></li>

                            <li><a href="#" className="hover:text-gray-900">Terms of Service</a></li>

                        </ul>

                    </div>

                </div>


                {/* Bottom bar */}

                <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-gray-100 pt-6 text-sm text-gray-400 md:flex-row">

                    <p>© 2026 Dev Stack. All rights reserved.</p>

                    <div className="flex gap-6">

                        <a href="" className="hover:text-gray-600">Privacy</a>

                        <a href="" className="hover:text-gray-600">Terms</a>

                    </div>

                </div>

            </div>

        </footer>

    );

};

export default Footer;