import React from 'react';

function Navbar() {
    return (
        <div className="nav-div">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <h3 class="pl-5 text-white">James Howard</h3>
                <div class="ml-auto pt-3 pr-5 font-weight-bold">
                    <ul class="list-inline">
                        <li class="list-inline-item">
                            <a class="text-black" href="#Overview">Overview</a>
                        </li>
                        <li class="list-inline-item">
                            <a class="text-black" href="#Projects">Projects</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
