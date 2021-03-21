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
            <span>Dreamer, Programmer, Gamer, Developer, Writer, and Soon-to-be UMD Graduate.</span>
            {/* ["Dreamer", "Programmer", "Gamer", "Developer", "Writer", "Soon-to-be UMD Graduate"] */}
        </div>
        <button type="button" className="about-body-resume">
            <a
                href={`${process.env.PUBLIC_URL}/resumedl/SonnyLiu_ResumeVer1.pdf`}
                download="SonnyLiuResume"
            >
                <i className="fa fa-download"></i> Résumé
            </a>
        </button>
    </div>
);

export default About;