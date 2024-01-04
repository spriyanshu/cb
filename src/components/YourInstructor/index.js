import React from 'react';

const statItems = [
    { value: '5K+', label: 'STUDENTS TAUGHT' },
    { value: '4y+', label: 'Teaching Experience' },
    { value: '4k', label: 'STUDENTS PLACED' },
];

const InstructorSection = () => {
    return (
        <section className="pt-10 overflow-hidden bg-gray-50 md:pt-0 sm:pt-16 2xl:pt-16">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">Know Your Instructor</h2>
            </div>
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid items-center grid-cols-1 md:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                            Hey 👋 I am <br className="block sm:hidden" />Aman
                        </h2>
                        <p className="max-w-lg mt-3 text-xl leading-relaxed text-gray-600 md:mt-8">
                            Aman NSUT, Instructor at Grate Learning, 300k+ on Youtube.
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

                    <div className="relative">
                        <img
                            className="absolute inset-x-0 bottom-0 -mb-48 -translate-x-1/2 left-1/2"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/blob-shape.svg"
                            alt=""
                        />

                        <img
                            className="relative w-full xl:max-w-lg xl:mx-auto 2xl:origin-bottom 2xl:scale-110"
                            src="https://cdn.rareblocks.xyz/collection/celebration/images/team/1/business-woman.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InstructorSection;
