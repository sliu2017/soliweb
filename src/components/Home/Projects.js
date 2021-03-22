import React from 'react';
import { CarouselProvider, Slider, Slide, Dot } from 'pure-react-carousel';
import ProjectsCaption from './ProjectsCaption';
import ProjectsData from '../../data/projects';
import 'pure-react-carousel/dist/react-carousel.es.css';

function dots(numSlides) {
    var output = [];
    for (var i = 0; i < numSlides; i++) {
        output.push(<Dot key={i} slide={i} />);
    }
    return output;
}

const Projects = (
    <div className="projects-body-container">
        <CarouselProvider
            naturalSlideWidth={720}
            naturalSlideHeight={1080}
            totalSlides={ProjectsData.length}
            touchEnabled={false}
            dragEnabled={false}
        >
            <Slider>
                {ProjectsData.map((x, i) => (
                    <Slide key={x.key} index={i}>
                        <div className="projects-body-slide">
                            <img
                                src={`${process.env.PUBLIC_URL}/images/projects/${x.backgroundImage}`}
                                alt={x.name}
                                className="projects-body-backgroundimage"
                            />
                            <ProjectsCaption
                                name={x.name}
                                summary={x.summary}
                                skills={x.skills}
                                demoExists={x.demoExists}
                                repoExists={x.repoExists}
                                demoLink={x.demoLink}
                                repoLink={x.repoLink}
                            />
                        </div>
                    </Slide>
                ))}
            </Slider>

            <div className="projects-body-dotgroup">
                {dots(ProjectsData.length)}
            </div>
        </CarouselProvider>
    </div>

);

export default Projects;