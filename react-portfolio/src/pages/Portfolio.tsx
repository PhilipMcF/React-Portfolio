import React from 'react';
import PageTransition from '../components/PageTransition'; 

const Portfolio: React.FC = () => {
    return (
        <PageTransition>
            <section className="page-section" id="work">
                <h2>Portfolio</h2>
                <div className="flex-container">
                    <a href="https://github.com/PhilipMcF/Project-1-Note-Taking-App" target="_blank" rel="noopener noreferrer"
                        className="flex-item" id="firstproject"
                        title="Note Taking App - image of someone taking notes on an ipad.">
                        <h3>Note Taking App</h3>
                    </a>
                    <a href="https://github.com/PhilipMcF/Weather-Dashboard" target="_blank" rel="noopener noreferrer"
                        className="flex-item" id="secondproject" title="Second project - image of different weather types.">
                        <h3>Weather Dashboard</h3>
                    </a>
                    <a href="https://github.com/PhilipMcF/Module-7-README-Generator" target="_blank" rel="noopener noreferrer"
                        className="flex-item" id="thirdproject"
                        title="Third project - image of a computer monitor graphic.">
                        <h3>README Generator</h3>
                    </a>
                    <a href="https://github.com/PhilipMcF/Employee-Tracker" target="_blank" rel="noopener noreferrer"
                        className="flex-item" id="fourthproject"
                        title="Fourth project - image of a magnifying glass focussed on a employee graphic.">
                        <h3>Employee Tracker</h3>
                    </a>
                    <a href="https://github.com/PhilipMcF/Vehicle-Builder" target="_blank" rel="noopener noreferrer"
                        className="flex-item" id="fifthproject"
                        title="Fifth project - image of cgi car with a person examining it.">
                        <h3>Vehicle Builder</h3>
                    </a>
                </div>
            </section>
        </PageTransition>
    );
};

export default Portfolio;
