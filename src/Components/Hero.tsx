import banner from "../assets/banner-stack.png";

const Hero = () => {
    return (
        <section className="container mx-auto p-4 md:p-0 lg;p-0  ">

            <div className="hero min-h-[calc(100vh-73px)]">

                <div className="hero-content max-w-none w-full p-0 flex-col lg:flex-row-reverse justify-between gap-12 lg:gap-20">


                    {/* Hero Image */}
                    <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">

                        <div className="relative">

                            {/* Glow */}
                            <div className="absolute inset-0 bg-purple-500/20 blur-3xl rounded-full"></div>

                            <img
                                src={banner}
                                alt="Development Stack"
                                className="relative  sm:w-87 md:w-100 lg:w-115 object-contain"
                            />

                        </div>

                    </div>


                    {/* Hero Content */}
                    <div className="w-full lg:w-1/2 text-center lg:text-left">

                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">

                            Build Your Ideal

                            <span className="block gradient-text">
                                Development Stack
                            </span>

                        </h1>


                        <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-gray-600 text-base md:text-lg leading-7">
                            Explore frontend, backend, database, and tooling options,
                            compare them side by side, and put together the stack that
                            fits your next project.
                        </p>


                        {/* Buttons */}
                        <div className="mt-8 flex flex-row  justify-center lg:justify-start gap-3">

                            <button className="btn border-0 rounded-lg py-3 px-3 text-white primary-gradient">
                                Explore Technologies
                            </button>

                            <button className="btn btn-outline border-gray-200  py-3 px-9  text-gray-600 rounded-lg  hover:bg-gray-50">
                                Learn More
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default Hero;