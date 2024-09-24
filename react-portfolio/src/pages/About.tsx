import React from "react";
import { BsPersonFill } from "react-icons/bs";
import PageTransition from '../components/PageTransition'; 

const About: React.FC = () => {
    return (
        <PageTransition>
            <div className="aboutD">
                <h1>
                    <BsPersonFill size={57} style={styles} /> About Me
                </h1>
                <br />
                <p>
                    Welcome to my portfolio! I'm an aspiring software developer with a Bachelor's degree 
                    in Information Technology from Kennesaw State University. Currently, I'm further honing my skills through a 
                    bootcamp at the University of Minnesota, where I'm diving deeper into both front-end and back-end development. 
                    My passion for coding began in high school, where I was an active member of the web development team, and 
                    it has only grown since then.
                </p>
                <br />
                <p>
                    I have a solid foundation in HTML, CSS, JavaScript, and TypeScript, along with experience in React and PostgreSQL. 
                    My journey also includes dabbling in Java and Python, which has broadened my perspective on different programming 
                    languages. I thrive on solving complex problems and enjoy creating intuitive, user-friendly web applications. 
                    I'm excited to connect with others who share a passion for technology and innovation, and I look forward to bringing 
                    my unique blend of skills to impactful projects.
                </p>
            </div>
        </PageTransition>
    );
};

const styles: React.CSSProperties = {
    position: 'relative',
    top: '7px',
};

export default About;
