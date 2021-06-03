import React from 'react';

const About = (
    <div className="about-body-container">
        <img
            src={`${process.env.PUBLIC_URL}/images/about/phantom-walk.gif`}
            alt="Spooky Walk"
            className="about-body-foreground"
        ></img>
        <div className="about-body-caption">
            <span className="about-body-caption-first">Hi, I'm Sonny Liu</span><br />
            <span className="about-body-caption-second">IAmA: </span><br />
            <span>Dreamer, Programmer, Gamer, Developer, Writer, and UMD Graduate.</span>
            {/* ["Dreamer", "Programmer", "Gamer", "Developer", "Writer", "UMD Graduate"] */}
        </div>

        <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://drive.google.com/file/d/1qkeizJZMJhKjYjAsMRjtK5wSLpnEDL7i/view?usp=sharing"
            download="SonnyLiuResume"
        >
            <button type="button" className="about-body-resume">
                <span><i className="fa fa-download"></i> Résumé</span>
            </button>
        </a>
    </div >
);

export default About;