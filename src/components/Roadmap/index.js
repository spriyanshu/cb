import React from 'react';

const StepItem = ({ icon, title, description, isLast }) => (
    <li className="relative flex items-start ">
        {icon && !isLast && (
            <div className="-ml-0.5 absolute mt-0.5 top-14 left-8 w-px border-l-4 border-dotted border-gray-300 h-full" aria-hidden="true"></div>
        )}

        {icon && (
            <div className="relative flex items-center justify-center flex-shrink-0 w-16 h-16 bg-white rounded-full shadow">
                {icon}
            </div>
        )}

        <div className={icon ? 'ml-6' : 'ml-0'}>
            <h3 className="text-lg font-semibold text-black">{title}</h3>
            <p className="mt-4 text-base text-gray-600">{description}</p>
        </div>
    </li>
);

// let RoadmapList = []

const Roadmap = () => {
    const steps = [
        {
            icon: (
                <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 14s1.5 1.5 4 1.5s4-1.5 4-1.5" />
                    <path d="M9.5 3l-2 4h11l-2-4" />
                </svg>

            ),
            title: 'Engaging Curriculum Design',
            description: 'Craft a comprehensive and industry-relevant curriculum that covers a wide range of data science technologies over the six-month period.',
        },
        {
            icon: (
                <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 6v4l3-3M12 18v-4l3 3M6 12h4l-3-3M18 12h-4l3 3" />
              </svg>
              
            ),
            title: 'Interactive Online Sessions',
            description: 'Prioritize live sessions with a duration of 3.5 hours daily to enhance student-teacher interaction and foster a collaborative learning environment.',
        },
        {
            icon: (
                <svg className="text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M8 12h8M12 8v8M7 7l10 10M17 7L7 17" />
                </svg>
            ),
            title: 'Focus on Peer Learning',
            description: 'Encourage peer-to-peer sessions to promote knowledge sharing, collaboration, and a sense of community among students.',
        },
        {
            icon: (
                <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
                    <line x1="19.07" y1="4.93" x2="4.93" y2="19.07" />
                </svg>

            ),
            title: 'Regular Evaluations',
            description: 'Implement weekly evaluations to track student progress, identify areas for improvement, and provide timely feedback for continuous learning.',
        },
        // {
        //     icon: (
        //         <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        //             <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
        //             <circle cx="12" cy="12" r="3" />
        //             <line x1="12" y1="15" x2="12" y2="18" />
        //             <line x1="15" y1="12" x2="18" y2="12" />
        //             <line x1="12" y1="9" x2="12" y2="6" />
        //             <line x1="9" y1="12" x2="6" y2="12" />
        //         </svg>
        //     ),
        //     title: 'Mock Assessments',
        //     description: 'Conduct regular mock assessments to simulate real-world scenarios, helping students apply their knowledge and build confidence.',
        // },
        {
            icon: (
                <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                    <line x1="12" y1="2" x2="12" y2="22" />
                    <line x1="4" y1="12" x2="20" y2="12" />
                    <line x1="8" y1="16" x2="16" y2="16" />
                    <line x1="8" y1="8" x2="16" y2="8" />
                </svg>
              
            ),
            title: 'Internship Opportunities',
            description: 'Establish partnerships with AI automation companies to provide valuable internship opportunities, enabling students to gain practical experience in the data science domain.',
        },
        {
            icon: (
                <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2" ry="2" />
                <line x1="4" y1="14" x2="20" y2="14" />
                <line x1="4" y1="18" x2="20" y2="18" />
                <line x1="10" y1="4" x2="10" y2="12" />
                <line x1="14" y1="4" x2="14" y2="12" />
              </svg>
              
            ),
            title: 'Certification and Experience Letter',
            description: 'Issue course certifications upon successful completion and provide a formal experience letter documenting the six months of hands-on experience in data science.',
        },
        // {
        //     icon: (
        //         <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
        //             <circle cx="12" cy="12" r="10" />
        //             <rect x="3" y="10" width="18" height="4" />
        //             <line x1="12" y1="18" x2="12" y2="22" />
        //             <line x1="8" y1="14" x2="8" y2="18" />
        //             <line x1="16" y1="14" x2="16" y2="18" />
        //         </svg>

        //     ),
        //     title: 'Online Platform Optimization',
        //     description: 'Ensure a user-friendly and efficient online learning platform that supports seamless navigation, resource access, and live session participation.',
        // },
        {
            icon: (
                <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="6" x2="12" y2="18" />
                    <line x1="6" y1="12" x2="18" y2="12" />
                </svg>

                ),
                title: 'Emphasize Interaction',
                description: 'Foster a culture of engagement through discussion forums, Q&A sessions, and collaborative projects to enhance the overall learning experience.',
            },
            {
                icon: (
                    <svg className=" text-fuchsia-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45" height="45" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                        <polygon points="12 2 2 7 12 12 22 7 12 2" />
                        <line x1="12" y1="22" x2="12" y2="12" />
                        <line x1="2" y1="7" x2="12" y2="12" />
                        <line x1="22" y1="7" x2="12" y2="12" />
                    </svg>
                  
                ),
                title: 'Performance Incentives',
                description: 'Motivate students by offering compensation of up to $10,000 for top performers, recognizing and rewarding their dedication and achievements throughout the course.',
            },
        ];
    
    

    return (
        <section className="py-10 px-10 bg-gray-100 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto text-center">
                    <h2 className="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                        How do we create <span className="text-green-700"> Success</span>
                    </h2>
                    <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        The Role of Persistence in Succes
                    </p>
                </div>

                <ul className="max-w-md mx-auto mt-16 space-y-12">
                    {steps.map((step, index) => (
                        <StepItem key={index} {...step} isLast={index === steps.length - 1} />
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Roadmap;
