import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Signin = () => {
  const steps = [
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    }, {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },
    {
      title: 'Week 1: Introduction to Python for Data Science',
      description: 'Overview of Python, Setting Up Environment, and Basic Syntax, Variables, Data Types, and Operators, Control Flow: If-Else Statements and Loops, 2 Internship Session (AI Automation)      ',
    },


  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />

      <div style={{ flex: 1 }}>
        <div className="p-4 max-w-xl mx-auto">
          <h2 className="font-heading mb-8 text-3xl font-bold lg:text-4xl">AI-Driven Data Science: Master Skills with Professional Internship</h2>

          {steps.map((step, index) => (
            <div key={index} className="flex">
              <div className="mr-4 flex flex-col items-center">
                <div>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 border-blue-900 ${index === steps.length - 1 ? 'bg-blue-900' : ''}`}>
                    {index !== steps.length - 1 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-blue-800">
                        <path d="M12 5l0 14"></path>
                        <path d="M18 13l-6 6"></path>
                        <path d="M6 13l6 6"></path>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-white">
                        <path d="M5 12l5 5l10 -10"></path>
                      </svg>
                    )}
                  </div>
                </div>
                {index !== steps.length - 1 && <div className="h-full w-px bg-gray-300 dark:bg-slate-500"></div>}
              </div>
              <div className="pt-1 pb-8">
                <p className="mb-2 text-xl font-bold text-gray-900 dark:text-slate-300">{step.title}</p>
                <p className="text-gray-600 dark:text-slate-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Signin;
