import React from 'react'

function Profile(props) {
    return (
        <div classNameName="container">
            <div className="row">
                <div className="col-md-8">
                    <img src={props.profilePicture} alt="James putting on suit jacket"
                        className="img-thumbnail" />
                </div>
                <div className="col-md-4 text-center">
                    <br />
                    <h4>Hi, I'm</h4>
                    <h2 className="text-uppercase">James Howard,</h2>
                    <p>lawyer and full-stack developer*.</p>
                    <p className="mt-n3 small text-muted">*in progress</p>
                    <div>
                        <a href={props.resumeLink} target="_blank" rel="noreferrer">
                            <h5 className="text-uppercase">Resume</h5>
                        </a>
                        <a href="./site-assets/resume.pdf">
                            <img src={props.resumePicture} target="_blank"
                                alt={props.resumePictureAlt} className="img-thumbnail" />
                        </a>
                    </div>
                    <div className="pt-3">
                        <ul className="social-list list-inline ml-auto">
                            <li className="list-inline-item"><a className="text-black"
                                href={props.twitterProfile} target="_blank" rel="noreferrer"><i
                                    className="fab fa-twitter fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item"><a className="text-black"
                                href={props.linkedinProfile} target="_blank" rel="noreferrer"><i
                                    className="fab fa-linkedin-in fa-lg"></i></a>
                            </li>
                            <li className="list-inline-item"><a className="text-black" href={props.githubProfile}
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
