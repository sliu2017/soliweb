import React from 'react';
import ContactData from '../../data/contact';

class Section extends React.Component {
    render() {
        return (
            <div className="section">
                {/* Header renders title of section */}
                <div className="section-title">
                    <span>{this.props.headerText}</span>
                </div>

                {/* Body */}
                {this.props.bodyContent}

                {/* Footer renders contact links and copyright credit */}
                <ul className="section-links">
                    {ContactData.map((x) => (
                        <li key={x.key}>
                            <a href={x.link}><img src={x.icon} className="svg-icon" alt="logo" /></a>
                        </li>
                    ))}
                </ul>
                <div className="section-credit">
                    <span>&copy; Copyright 2021 Sonny Liu</span>
                </div>
            </div>
        );
    }
}

export default Section;