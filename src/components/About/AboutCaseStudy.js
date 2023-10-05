import React, {useContext} from 'react';

import './About.css';
import {ThemeContext} from '../../contexts/ThemeContext';
import {aboutData, DevelopmentData} from '../../data/InsuranceCompanyData'


function About() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color: theme.tertiary80}}>
                        {aboutData.description1}
                        <br/><br/>
                        {aboutData.description2}
                        <br/><br/>
                        {aboutData.description3}
                    </p>
                </div>
                {/*<div style="width: 640px; height: 480px; margin: 10px; position: relative;">*/}

                {/*</div>*/}
                {/*<iframe width="560" height="315" src='https://dbdiagram.io/embed/64855be3722eb77494c054b4'></iframe>*/}
                {/*<div className="about-img">*/}
                {/*    <img*/}
                {/*        src={aboutData.image}*/}
                {/*        alt=""*/}
                {/*    />*/}
                {/*</div>*/}
            </div>
                <iframe allowFullScreen frameBorder="0" width={480} height={360}
                        src="https://lucid.app/documents/embedded/292ad502-d283-4c20-b8b9-f1333301e08e"
                        id="fbYAzp4-iUs1"></iframe>
        </div>
    )
}

function Development() {
    const {theme} = useContext(ThemeContext);
    return (
        <div className="about" id="about" style={{backgroundColor: theme.secondary}}>
            <div className="line-styling">
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-circle" style={{backgroundColor: theme.primary}}></div>
                <div className="style-line" style={{backgroundColor: theme.primary}}></div>
            </div>
            <div className="about-body">
                <div className="about-description">
                    <h2 style={{color: theme.primary}}>{aboutData.title}</h2>
                    <p style={{color: theme.tertiary80}}>
                        {DevelopmentData.description1}
                        <br/><br/>
                        {DevelopmentData.description2}
                        <br/><br/>
                        {DevelopmentData.description3}
                    </p>
                </div>
                <iframe width="560" height="315" src='https://dbdiagram.io/embed/64855be3722eb77494c054b4'></iframe>
            </div>
        </div>

    )
}
export default About
export {Development}