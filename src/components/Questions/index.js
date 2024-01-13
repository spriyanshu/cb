import React, { useState } from 'react';

const FaqItem = ({ faqNumber, question, answer }) => {
    const [isOpen, setOpen] = useState(false);

    return (
        <div className="w-full p-4 mb-8 bg-white rounded-lg shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)] dark:bg-dark-2 sm:p-8 lg:px-6 xl:px-8">
            <button
                className="flex w-full text-left faq-btn"
                onClick={() => setOpen((prev) => !prev)}
            >
                <div className="bg-primary/5 dark:bg-white/5 text-primary mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg">
                    <svg
                        className={isOpen && 'rotate-180'}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M11 15.675C10.7937 15.675 10.6219 15.6062 10.45 15.4687L2.54374 7.69998C2.23436 7.3906 2.23436 6.90935 2.54374 6.59998C2.85311 6.2906 3.33436 6.2906 3.64374 6.59998L11 13.7844L18.3562 6.53123C18.6656 6.22185 19.1469 6.22185 19.4562 6.53123C19.7656 6.8406 19.7656 7.32185 19.4562 7.63123L11.55 15.4C11.3781 15.5719 11.2062 15.675 11 15.675Z"
                            fill="currentColor"
                        />
                    </svg>
                </div>
                <div className="w-full">
                    <h4 className="mt-1 text-lg font-semibold text-dark">{question}</h4>
                </div>
            </button>
            <div style={{ display: isOpen ? 'block' : 'none' }} className="faq-content pl-[62px]">
                <p className="py-3 text-base leading-relaxed text-body-color">{answer}</p>
            </div>
        </div>
    );
};

const FaqSection = () => {
    const faqs = [
        {
            question: "Do I need to know Java to Join this program?",
            answer: "No, we will start from the basics. Even if you never coded a single line, you will be able to understand everything and become interview ready for your dream companies like Google, Microsoft, Amazon. All you need to do is be consistent.",
        },
        {
            question: "What are the timings? Can I do this course with my college class or job?",
            answer: "Yes, you can. We will have 3 classes a week, and the timing of the classes is 9 PM. So your college class or job won’t be a problem.",
        },
        {
            question: "I am from a non-CSE branch. Can I take this course and crack my dream company?",
            answer: "One of our instructors is from a mechanical background and is working with Google India as SWE 2. Yes, you will be prepared for the interview with any company after completing this course.",
        },
        {
            question: "Will this course be taught in Hindi or English?",
            answer: "You will get the recorded part in both Hindi as well as English (LevelUp will be in English only). If you choose DSA Elite, then the live classes will be in Hindi.",
        },
        {
            question: "Do I need a computer for this course?",
            answer: "It is tough to do coding on any device other than a laptop. Yes, you are required to have a decent laptop/computer with an internet connection.",
        },
        {
            question: "What is the duration of this program?",
            answer: "The course duration is 7-8 months. You can start your interviews after 60 days as we will be done with the first iteration of DSA. The rest of the time is for practicing DSA and Core Subjects if you missed that in college.",
        },
        {
            question: "How long is the course access?",
            answer: "You will have access to the course for 2 years from the start of the course.",
        },
    ];
    

    return (
        <section className="relative z-20 overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
            <div className="container mx-auto px-8 py-8">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4">
                        <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
                            <span className="block mb-2 text-lg font-semibold text-primary">FAQ</span>
                            <h2 className="text-dark mb-4 text-3xl font-bold sm:text-[40px]/[48px]">
                                Any Questions? Look Here
                            </h2>
                            <p className="text-base text-body-color ">
                                There are many variations of passages of Lorem Ipsum available but the majority have
                                suffered alteration in some form.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full px-4 lg:w-1/2">
                        {faqs.filter(function (_,number) {return number % 2 === 0;}).map((faq, index) => (
                            <FaqItem key={index} faqNumber={index + 1} {...faq} />
                        ))}
                    </div>
                    <div className="w-full px-4 lg:w-1/2">
                        {faqs.filter(function (_,number) {return number % 2 !== 0;}).map((faq, index) => (
                            <FaqItem key={index} faqNumber={index + 1} {...faq} />
                        ))}
                    </div>

                </div>
            </div>
            <div class="absolute bottom-0 right-0 z-[-1]">
                <svg width="1440" height="886" viewBox="0 0 1440 886" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path opacity="0.5" d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z" fill="url(#paint0_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="1308.65" y1="1142.58" x2="602.827" y2="-418.681" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#3056D3" stop-opacity="0.36" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
                            <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </section>
    );
};

export default FaqSection;
