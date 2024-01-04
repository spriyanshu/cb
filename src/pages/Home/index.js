import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Courses from '../../components/Course'
import ClassSection from '../../components/Class'
import Roadmap from '../../components/Roadmap'
import InstructorSection from '../../components/YourInstructor'
import FaqSection from '../../components/Questions'
import ContactSection from '../../components/ContactUs'
import Footer from '../../components/Footer'

function Home() {
    return (
        <><Header /><Hero />
            <Courses />
            <ClassSection />
            <Roadmap />
            <InstructorSection />
            <FaqSection />
            <ContactSection />
            <Footer />
        </>
    )
}

export default Home