import React from 'react';
import ProductImage from "../assets/FurBallProduct.jpeg";

function Product() {
    return (
        <div className="container my-5">
            <div className="row">
                {/* First Column: Image Section */}
                <div className="col-md-6">
                    <img
                        src={ProductImage}
                        alt="Description of the image"
                        className="img-fluid"
                    />
                </div>

                {/* Second Column: Description Section */}
                <div className="col-md-6 d-flex flex-column justify-content-center">
                    <h2 className='text-center'>TICK FLEA REPELENT</h2>
                    <p>
                        Fleas and ticks are a source of annoyance and potential health threat for pets all across the world throughout the year. If left untreated, they can lead to potential health issues among dogs, including, skin irritation, infection, rashes, redness, inflamed skin, scales, psychological issues from constant scratching, and even transmission to humans.
                    </p>
                    <p>
                        Tick-free has got all your problems covered! This Tick spray for dogs is free from sulfate and harmful chemicals and is suitable for daily use or in between bath sessions to maintain hygiene levels effectively. Since it even eliminates the eggs of the pests, the spray can work on breaking the cycle of growth of ticks, fleas and lice on your pet’s coat.
                    </p>
                    <button className="btn" style={{backgroundColor: "#e9f1a0"}}>Learn More</button>
                </div>
            </div>
        </div>
    )
}

export default Product
