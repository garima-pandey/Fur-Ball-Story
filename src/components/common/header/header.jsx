import React from 'react';
import Logo from "../../../assets/FurBallStoryV1.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="py-3" style={{ backgroundColor: "#36bfd0"}}>
            <div className="container">
                <div className="row align-items-center">

                    {/* Logo Section */}
                    <div className="col-lg-2 col-md-3 d-flex justify-content-start">
                        <a href="/" className="d-flex align-items-center">
                            <img
                                src={Logo}
                                alt="Fur Ball Story"
                                style={{ height: '40px' }}
                            />
                        </a>
                    </div>

                    {/* Search Bar with Dropdown */}
                    <div className="col-lg-6 col-md-5">
                        <form className="d-flex align-items-center">
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search..."
                                aria-label="Search"
                                style={{ maxWidth: '60%' }}
                            />
                            <select className="form-select w-auto ms-2">
                                <option>All categories</option>
                                <option value="1">Category 1</option>
                                <option value="2">Category 2</option>
                                <option value="3">Category 3</option>
                            </select>
                            <button className="btn btn-dark ms-2">
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </form>
                    </div>

                    {/* Language, Account, and Cart Section */}
                    <div className="col-lg-4 col-md-4 d-flex justify-content-end">
                        <div className="d-flex align-items-center">
                            <div className="me-5">
                                <h6 className='p-0 m-0'>Language</h6>
                                <a href="#" className="text-dark">English</a>
                            </div>

                            {/* Login/Signup and Account */}
                            <div className="me-5">
                                <h6 className='p-0 m-0'>My Account</h6>
                                <a href="#" className="text-dark">Login / Signup</a>
                            </div>

                            {/* Cart */}
                            <div>
                                <a href="#" className="text-dark d-flex align-items-center">
                                    <FontAwesomeIcon icon={faCartShopping} />
                                    <span className="ms-1">Cart</span>
                                    <span className="badge bg-dark text-white ms-1">0</span>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;
