import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';

import EmailLogo from './email-icon.svg';
import LinkedInLogo from './linkedin-icon.svg';
import GitHubLogo from './github-icon.svg';

import './Home.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            windowDimensions: '{width:0, height:0}',
        }
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions.bind(this));
    }

    updateWindowDimensions() {
        let windowWidth = window.innerWidth;
        let windowHeight = window.innerHeight;
        this.setState({
            windowDimensions: { width: windowWidth, height: windowHeight },
        });
    }

    render() {
        const anchors = ["cover", "about", "projects"];

        return (
            <div className="home">
                <ul id="menu">
                    <li data-menuanchor="cover"><a href="#cover"><i className="fa fa-home"></i></a></li>
                    <li data-menuanchor="about"><a href="#about"><i className="fa fa-info"></i></a></li>
                    <li data-menuanchor="projects"><a href="#projects"><i className="fa fa-folder"></i></a></li>
                </ul>
                <ReactFullpage
                    //licenseKey = {'YOUR_KEY_HERE'}
                    anchors={anchors}
                    menu="#menu"
                    dragAndMove="true"
                    sectionsColor={["#cccccc", "#999999", "#666666"]}
                    onLeave={(origin, destination, direction) => {
                        console.log("onLeave event", { origin, destination, direction });
                    }}
                    render={({ state, fullpageApi }) => {
                        console.log("render prop change", state, fullpageApi);
                        return (
                            <ReactFullpage.Wrapper>
                                <Section headerText={"sonny liu"} />
                                <Section headerText={"about"} />
                                <Section headerText={"projects"} />
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}

class Section extends React.Component {
    render() {
        return (
            <div className="section">
                {header(this.props.headerText)}
                {footer}
            </div>
        );
    }
}

function header(title) {
    return (
        <div>
            <div className="section-title">
                <span>{title}</span>
            </div>
        </div>
    );
}

const footer = (
    <div>
        <ul className="section-links">
            <li><a href="mailto:liu.sonnys@gmail.com"><img src={EmailLogo} className="svg-icon" alt="logo" /></a></li>
            <li><a href="https://www.linkedin.com/in/sonny-liu/"><img src={LinkedInLogo} className="svg-icon" alt="logo" /></a></li>
            <li><a href="https://github.com/thescigeek"><img src={GitHubLogo} className="svg-icon" alt="logo" /></a></li>
        </ul>
        <div className="section-credit">
            <span>&copy; Copyright 2021 Sonny Liu</span>
        </div>
    </div>
);

export default Home;