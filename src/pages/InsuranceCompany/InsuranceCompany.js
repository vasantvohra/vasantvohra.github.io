import React from 'react'
import { Helmet } from 'react-helmet'

import {
    Navbar,
    Footer,
    Landing,
    Testimonials,
    Blog,
    Education,
    Experience,
    Contacts,
    Projects,
    Services,
    Achievement,
    AboutCaseStudy,
    TechStack, Consultancy
} from '../../components'
import { headerData } from '../../data/InsuranceCompanyData'

function InsuranceCompany() {
    return (
        <div>
            <Helmet>
                <title>{headerData.name}</title>
            </Helmet>
            <Navbar/>
            <Landing/>
            <AboutCaseStudy/>
            <Consultancy/>
            <TechStack />
            <Achievement/>
            <Experience/>
            <Education/>
            <Projects/>
            <Blog/>
            <Testimonials/>
            <Contacts />
            <Footer />
        </div>
    )
}

export default InsuranceCompany
