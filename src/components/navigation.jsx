import React from 'react';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item me-3">
                            <a className="nav-link" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="shopByProductsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop By Products
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="shopByProductsDropdown">
                                <li><a className="dropdown-item" href="#">Product 1</a></li>
                                <li><a className="dropdown-item" href="#">Product 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="shopByConcernsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Shop By Health Concerns
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="shopByConcernsDropdown">
                                <li><a className="dropdown-item" href="#">Concern 1</a></li>
                                <li><a className="dropdown-item" href="#">Concern 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Our Story</a>
                        </li>
                        <li className="nav-item dropdown mx-3">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="eventsDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Events
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="eventsDropdown">
                                <li><a className="dropdown-item" href="#">Event 1</a></li>
                                <li><a className="dropdown-item" href="#">Event 2</a></li>
                            </ul>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">FAQs</a>
                        </li>
                        <li className="nav-item mx-3">
                            <a className="nav-link" href="#">Blogs</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;
