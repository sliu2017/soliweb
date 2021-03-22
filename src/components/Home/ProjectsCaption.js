import React from 'react';

class ProjectsCaption extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: true,
        }
        this.toggleCollapsed = this.toggleCollapsed.bind(this);
    }

    toggleCollapsed() {
        const prevState = this.state;
        this.setState({
            collapsed: !prevState.collapsed,
        });
    }

    render() {
        return (
            <div className="projcap">
                <button
                    type="button"
                    onClick={this.toggleCollapsed}
                    className={`projcap-title ${this.state.collapsed ? 'projcap-title-collapsed' : 'projcap-title-expanded'}`}
                >
                    <span>{this.props.name}</span>
                </button>
                <div className={`projcap-detail ${this.state.collapsed ? 'projcap-detail-collapsed' : 'projcap-detail-expanded'}`}>
                    {this.props.skills.map((x, i) => {
                        return (i !== (this.props.skills.length - 1))
                            ? <span key={x}>{x} | </span>
                            : <span key={x}>{x}</span>
                    })}
                    <p>{this.props.summary}</p>
                    <div className="projcap-links">
                        {this.props.demoExists &&
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={this.props.demoLink}
                            >
                                <button type="button">
                                    <span>Demo</span>
                                </button>
                            </a>
                        }
                        {this.props.repoExists &&
                            <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={this.props.repoLink}
                            >
                                <button type="button">
                                    <span>Repo</span>
                                </button>
                            </a>
                        }
                    </div>
                </div>
                <div className={`projcap-background ${this.state.collapsed ? 'projcap-background-collapsed' : 'projcap-background-expanded'}`}></div>
            </div>
        );
    }
}

export default ProjectsCaption;