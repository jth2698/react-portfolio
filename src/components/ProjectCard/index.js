import React from 'react'

export default function ProjectCard(props) {
    return (
        <div>
            <div className="col mb-4">
                <div className="card">
                    <div className="card-header">
                        <h6>{props.title}</h6>
                    </div>
                    <a href={props.deployed} target="_blank" rel="noreferrer">
                        <img class="card-img-top" src={props.image}
                            alt={props.alt} />
                    </a>
                    <div class="project card-body bg-secondary text-white">
                        {props.description}</div>
                    <a href={props.github} class="btn btn-dark">View Code</a>
                </div>
            </div>

        </div>
    )
}
