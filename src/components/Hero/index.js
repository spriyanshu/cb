import React from 'react';

const Hero = () => {
    return (
        <section className="bg-[rgba(252, 248, 241, 0.3)] py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                    <div>
                        <p className="text-base font-semibold tracking-wider text-blue-600 uppercase">CRAFING BRAIN PRESENTS</p>
                        <h1 className="mt-4  text-6xl font-bold text-black lg:mt-8 sm:text-6xl xl:text-8xl">Data Science Internship <span className="text-red-600">Pro</span>.</h1>
                        <p className="mt-4 text-base text-black lg:mt-8 sm:text-xl">AI-Driven Data Science: Master Skills with Professional Internship.</p>
                    </div>

                    <div>
                        <img className="w-full" src="https://www.algoprep.in/img/hero-img.png" alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
