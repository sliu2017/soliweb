import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Section from '../../components/Home/Section';
import SectionsData from '../../data/sections';
import './Home.css';

class Home extends React.Component {
    
    render() {
        const anchors = [];
        const colors = [];

        SectionsData.map(function (x) {
            anchors.push(x.anchor);
            colors.push(x.color);
            return 0;
        })

        return (
            <div className="home">
                <ul id="menu">
                    {SectionsData.map((x) => (
                        <li key={x.anchor} data-menuanchor={x.anchor}>
                            <a href={x.path}>
                                <i className={x.icon}></i>
                            </a>
                        </li>
                    ))}
                </ul>
                <ReactFullpage
                    //licenseKey = {'YOUR_KEY_HERE'}
                    anchors={anchors}
                    menu="#menu"
                    dragAndMove="true"
                    sectionsColor={colors}
                    onLeave={(origin, destination, direction) => {
                        // console.log("onLeave event", { origin, destination, direction });
                    }}
                    render={({ state, fullpageApi }) => {
                        // console.log("render prop change", state, fullpageApi);
                        return (
                            <ReactFullpage.Wrapper>
                                {SectionsData.map((x) => (
                                    <Section
                                        key={x.anchor}
                                        headerText={x.header}
                                        bodyContent={x.body}
                                    />
                                ))}
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        );
    }
}

export default Home;