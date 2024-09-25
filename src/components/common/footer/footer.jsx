import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const textColor = { color: "#e9f1a0" };
    return (
        <footer className="text-light pt-5 pb-3" style={{ backgroundColor: "#36bfd0" }}>
            <div className="container">
                <div className="row">
                    {/* Explore Section */}
                    <div className="col-md-3">
                        <h5 className="mb-4" style={textColor}>EXPLORE</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Products</a></li>
                            <li><a href="#" className="text-light">Careers</a></li>
                            <li><a href="#" className="text-light">Contact Us</a></li>
                            <li><a href="#" className="text-light">Track Order</a></li>
                            <li><a href="#" className="text-light">Associate With Us</a></li>
                        </ul>
                    </div>

                    {/* Corporate Office Section */}
                    <div className="col-md-3">
                        <h5 className="mb-4" style={textColor}>CORPORATE OFFICE</h5>
                        <ul className="list-unstyled">
                            <li className="text-light">B-504, Unitech Business Zone</li>
                            <li className="text-light">Sector-50, Gurugram</li>
                            <li className="text-light">Haryana – 122018</li>
                            <li className="text-light">Email: info@furballstory.com</li>
                            <li className="text-light">Contact No: +91 - 9958180564</li>
                        </ul>
                    </div>

                    {/* Quick Links Section */}
                    <div className="col-md-3">
                        <h5 className="mb-4" style={textColor}>QUICK LINKS</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Search</a></li>
                            <li><a href="#" className="text-light">Terms of Service</a></li>
                            <li><a href="#" className="text-light">Privacy Policy</a></li>
                            <li><a href="#" className="text-light">Return Policy</a></li>
                            <li><a href="#" className="text-light">Shipping Policy</a></li>
                            <li><a href="#" className="text-light">Contact Information</a></li>
                            <li><a href="#" className="text-light">Store Partners</a></li>
                        </ul>
                    </div>

                    {/* Subscribe Section */}
                    <div className="col-md-3">
                        <h5 className="mb-4" style={textColor}>SUBSCRIBE TO OUR NEWSLETTER</h5>
                        <p className="text-light">Stay ahead of the curve with updates on our latest launches, exclusive offers, and industry insights. Enter your email below!</p>
                        <form className="d-flex flex-column">
                            <input type="email" className="form-control mb-2" placeholder="Your email" />
                            <button className="btn text-dark" style={{ backgroundColor: "#fbf6e9" }}>Subscribe</button>
                        </form>
                        <div className="mt-4">
                            <h6 className="text-light">Follow Us</h6>
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                            <a href="#" className="text-light me-3">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="row mt-5">
                    <div className="col-md-6 text-start">
                        <select className="form-select w-auto text-dark">
                            <option>English</option>
                            <option>Hindi</option>
                        </select>
                    </div>
                    <div className="col-md-6 text-end">
                        <p className="mb-0 text-light">&copy; 2024 Fur Ball Story</p>
                        <p className="mb-0 text-light">A brand of Cannis Lupus Services India Private Limited</p>
                        <p className="mb-0 text-light">Powered by Shopify</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
