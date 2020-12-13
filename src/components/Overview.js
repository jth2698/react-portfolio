import React from 'react'

function Overview(props) {
    return (
        <div className="container pt-5" id="Overview">
            <h2 className="pb-3 border-bottom text-uppercase">Overview</h2>
            <div className="card">
                <div className="card-body bg-secondary text-white">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text">
                        {props.text}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Overview;
