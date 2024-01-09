import React from 'react';

const ClassFeature = ({ text }) => (
    <li className="inline-flex items-center space-x-2">
        <svg className="flex-shrink-0 w-5 h-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="text-base font-medium text-gray-900">{text}</span>
    </li>
);

const ClassPricing = ({ type, features }) => (
    <div className={`bg-white border-4 ${type === 'online' ? 'border-transparent' : 'border-blue-600'} rounded-md`}>
        <div className="p-6 md:py-10 md:px-9">
            <div className={`inline-block px-4 py-2 ${type === 'online' ? 'bg-green-100' : 'bg-blue-100'} rounded-full`}>
                <h3 className="text-sm font-semibold">{type}</h3>
            </div>
            <p className="mt-5 text-5xl font-bold text-black">
                {type === 'online' ? (
                    <>
                        Online+ <span className="text-red-600">Live</span>
                    </>
                ) : (
                    'Offline'
                )}
            </p>

            <p className="mt-2 text-base text-gray-600">Per month</p>

            <ul className="flex flex-col mt-8 space-y-4">
                {features.map((feature, index) => (
                    <ClassFeature key={index} {...feature} />
                ))}
            </ul>

            <a
                href="#"
                className="inline-flex items-center justify-center w-full px-4 py-4 mt-8 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
                role="button"
            >
                Enroll now
            </a>

            <p className="mt-5 text-sm text-gray-500">No Credit Card Required</p>
        </div>
    </div>
);

const ClassSection = () => {
    const onlineFeatures = [
        { text: 'Unlimited Domain License' },
        { text: 'Full Celebration Library' },
        { text: '120+ Coded Blocks' },
        { text: 'Design Files Included' },
        { text: 'Premium Support' },
    ];

    const offlineFeatures = [
        { text: 'Unlimited Domain License' },
        { text: 'Full Celebration Library' },
        { text: '120+ Coded Blocks' },
        { text: 'Design Files Included' },
        { text: 'Premium Support' },
    ];

    return (
        <section id="features"  className="py-10 bg-gray-50 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        Online & Onsite <span className="text-red-600">Live</span> class
                    </h2>
                </div>

                <div className="grid max-w-3xl grid-cols-1 gap-6 mx-auto mt-8 sm:mt-16 sm:grid-cols-2">
                    <ClassPricing type="online" features={onlineFeatures} />
                    <ClassPricing type="offline" features={offlineFeatures} />
                </div>
            </div>
        </section>
    );
};

export default ClassSection;
