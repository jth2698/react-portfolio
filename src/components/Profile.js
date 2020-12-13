import React from "react";

function Profile(props) {
    return (
        <div className="container pt-5">
            <div className="d-flex justify-content-around">
                <div className="align-self-end">
                    <img src={props.profilePicture} alt={props.profileAlt}
                        className="img-thumbnail" />
                </div>
                <div className="text-center">
                    <h4>Hi, I'm</h4>
                    <h2 className="text-uppercase">James Howard,</h2>
                    <p>lawyer and full-stack developer*.</p>
                    <p className="mt-n3 small text-muted">*in progress</p>
                    <div>
                        <a href={props.resumeLink} target="_blank" rel="noreferrer">
                            <h5 className="text-uppercase">Resume</h5>
                        </a>
                        <a href={props.resumeLink}>
                            <img src={props.resumeScreenshot} target="_blank"
                                alt={props.resumeAlt} className="img-thumbnail" />
                        </a>
                    </div>
                    <div className="pt-3">
                        <ul className="social-list list-inline ml-auto">
                            <li className="list-inline-item"><a className="text-black"
                                href={props.twitter} target="_blank" rel="noreferrer"><i
                                    className="fab fa-twitter fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item"><a className="text-black"
                                href={props.linkedin} target="_blank" rel="noreferrer"><i
                                    className="fab fa-linkedin-in fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item"><a className="text-black" href={props.github}
                                target="_blank" rel="noreferrer"><i className="fab fa-github-alt fa-lg"></i></a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <a href={props.email} className="font-weight-bold">Email Me</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile;
