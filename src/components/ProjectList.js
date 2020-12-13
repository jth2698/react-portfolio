import React from 'react';
import ProjectCard from "./ProjectCard";

function ProjectList(props) {
    return (
        <div className="container">
            <div className="d-flex justify-content-around flex-wrap">
                {props.projects.map((project, index) => {
                    return (
                        <div>
                            <ProjectCard
                                key={index}
                                title={project.title}
                                deployed={project.deployed}
                                image={project.image}
                                alt={project.alt}
                                description={project.description}
                                github={project.github}
                            />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectList;
