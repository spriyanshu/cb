import React from 'react';

const Courses = () => {
    return (
        <section id="courses" className="pt-10 py-10 sm:py-16 lg:py-24 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
                    <div className="flex flex-col justify-between  mx-6 lg:py-5">
                        <h2 className="text-3xl font-bold leading-tight text-gray-800 sm:text-4xl lg:leading-tight lg:text-5xl">Join <span className="text-red-600">Live.🚀</span> And Unlock Your Data Science Journey  </h2>

                        <div className="mt-auto">
                            <div className="flex items-center">
                                {/* Your SVG icons here */}
                                <svg className="w-6 h-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    {/* Your path here */}
                                </svg>
                                {/* Repeat for other icons */}
                            </div>

                            <blockquote className="mt-6">
                                <p className="text-lg text-justify  leading-relaxed text-gray-800">The heart of CraftingBrain lies in the expertise of our faculty. Our instructors are industry leaders, drawn from the top echelons of world-renowned EdTech companies. We have transformed the careers of over a thousand students, bringing real-world experience into the virtual classroom.</p>
                            </blockquote>

                            <div className="flex items-center mt-8">
                                <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://lh3.googleusercontent.com/a/ACg8ocK2hxZCcfESWK12NpdM03l89KE72PZE0Le1cNrXjSa2Nrg=s9999" alt="" />
                                <div className="ml-4">
                                    <p className="text-base font-semibold text-gray-800">Priyanshu Singh</p>
                                    <p className="mt-px text-sm text-gray-400">Data scientist</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="overflow-hidden bg-white rounded-md">
                            <div className="p-10">
                                <h3 className="text-xs font-bold tracking-widest text-red-600 uppercase">Enroll Today</h3>
                                <p className="mt-4 text-6xl font-bold text-black">Data Science</p>

                                <ul class="flex flex-col mt-8 space-y-4">
                                    <li class="inline-flex items-center space-x-2">
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="text-base font-medium text-gray-900"> 6-Month Advanced Data Science Course </span>
                                    </li>

                                    <li class="inline-flex items-center space-x-2">
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="text-base font-medium text-gray-900"> Expert-led Sessions and Hands-on Projects </span>
                                    </li>

                                    <li class="inline-flex items-center space-x-2">
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="text-base font-medium text-gray-900"> Flexible Online Learning Experience </span>
                                    </li>

                                    <li class="inline-flex items-center space-x-2">
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="text-base font-medium text-gray-900"> Real-world Internship with AI Home Automation Company </span>
                                    </li>

                                    <li class="inline-flex items-center space-x-2">
                                        <svg class="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                                        </svg>
                                        <span class="pb-0.5 text-base font-medium text-gray-900 border-b border-black border-dashed"> Scholarship Discounts Based on Talent </span>
                                    </li>
                                </ul>

                                <a href="#" title="" className="inline-flex items-center justify-center w-full px-8 py-4 mt-10 font-semibold text-white transition-all duration-200 rounded-full bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80" role="button"> Enroll Now </a>

                                <div className="flex items-center mt-5">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                    </svg>
                                    <span className="ml-2 text-sm text-gray-500"> 7 Days Moneyback Guarantee </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;
