import React from 'react'

function ProjectCard(props) {
    return (
        <div className="card pb-5">
            <div className="card-header text-center">
                <h6>{props.title}</h6>
            </div>
            <a href={props.deployed} target="_blank" rel="noreferrer">
                <img class="card-img-top" src={props.image}
                    alt={props.alt} />
            </a>
            <div class="project card-body bg-secondary text-white text-center">
                {props.description}</div>
            <a href={props.github} class="btn btn-dark">View Code</a>
        </div>
    )
}

export default ProjectCard;
