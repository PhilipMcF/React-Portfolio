import React from 'react';
import PageTransition from '../components/PageTransition'; // Adjust the path if necessary

const Resume: React.FC = () => {
    return (
        <PageTransition>
            <section className="resumeS">
                <h1>Resume</h1>
                <p>
                    <a href="https://www.linkedin.com/in/philip-mcfarland-aa3b4a191/" target="_blank" rel="noopener noreferrer">
                        Download my resume here!
                    </a>
                </p>
                <br />
                <h1>Front-end Proficiencies</h1>
                <ul className="resumeList">
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>React</li>
                    <li>Materialize CSS</li>
                </ul>
                <br />
                <h1>Back-end Proficiencies</h1>
                <ul className="resumeList">
                    <li>APIs</li>
                    <li>Node.js</li>
                    <li>Express.js</li>
                    <li>PostgreSQL</li>
                    <li>REST</li>
                </ul>
            </section>
        </PageTransition>
    );
};

export default Resume;
