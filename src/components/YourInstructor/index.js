import React from 'react';
// import instructor from '/public/instructor.png';
const statItems = [
    { value: '1000+', label: 'STUDENTS TAUGHT' },
    { value: '4y+', label: 'Experience' },
    // { value: '4k', label: 'STUDENTS PLACED' },
];

const InstructorSection = () => {
    return (
        <section id="mentors" className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Know Your Instructor</h2>
            </div>
            <div className="px-4 mx-auto mt-8 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hey 👋 I am Aman
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                        Introducing Aman, a seasoned Data Scientist and Corporate Trainer with over 4 years of expertise. Renowned for training 1000+ students at premier edtech giants like Great Learning and Upgrad, Aman boasts a stellar 4.8+ rating. His comprehensive knowledge and engaging teaching style make him a sought-after professional in the field. Elevate your learning experience with Aman, as he brings real-world insights and practical skills to the forefront. Uncover the world of data science through the lens
                        </p>
                        <div className="py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl ">
                            <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
                                {statItems.map((item, index) => (
                                    <div key={index} className={`text-center ${index < 3 ? 'md:border-r' : ''}`}>
                                        <h6 className="text-2xl font-bold lg:text-3xl xl:text-4xl">{item.value}</h6>
                                        <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
                                            {item.label}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative flex items-center justify-center h-full ">
                        <div class="relative">
                            <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

                            <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="./instructor.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;


// <section class="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
//     <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
//         <div class="grid items-center grid-cols-1 md:grid-cols-2">
//             <div>
//                 <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Hey 👋 I am <br class="block sm:hidden" />Jenny Carter</h2>
//                 <p class="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>

//                 <p class="mt-4 text-xl text-gray-600 md:mt-8">
//                     <span class="relative inline-block">
//                         <span class="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300"></span>
//                         <span class="relative"> Have a question? </span>
//                     </span>
//                     <br class="block sm:hidden" />Ask me on <a href="#" title="" class="transition-all duration-200 text-sky-500 hover:text-sky-600 hover:underline">Twitter</a>
//                 </p>
//             </div>

//             <div class="relative">
//                 <img class="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg" alt="" />

//                 <img class="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110" src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png" alt="" />
//             </div>
//         </div>
//     </div>
// </section>
