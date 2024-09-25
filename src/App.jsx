import React from 'react';
import Header from './components/common/header/header';
import Navigation from './components/navigation';
import Footer from './components/common/footer/footer';
import Banner from './components/banner';
import Product from './components/product';

const FurBallStory = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row">
        <div className="col-12">
          {/* Header */}
          <Header />
          <Navigation />

          {/* Banner Section */}
          <Banner />

          {/* Main Section */}
          <Product />

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default FurBallStory;
