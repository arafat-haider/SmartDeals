import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Sample product data
  const recentProducts = [
    {
      id: 1,
      title: 'Yamaha Fz Guitar [ Full Fresh Condition ]',
      price: '55.99- 75',
      image: null
    },
    {
      id: 2,
      title: 'Hero Splender Ev - [ 2 Year Used ]',
      price: '55.99- 75',
      image: null
    },
    {
      id: 3,
      title: 'Duranta E-Bike  With 97% Battery Life[ 1 Month Used ]',
      price: '55.99- 75',
      image: null
    },
    {
      id: 4,
      title: 'Yamaha Fz Guitar [ Full Fresh Condition ]',
      price: '55.99- 75',
      image: null
    },
    {
      id: 5,
      title: 'Hero Splender Ev - [ 2 Year Used ]',
      price: '55.99- 75',
      image: null
    },
    {
      id: 6,
      title: 'Duranta E-Bike  With 97% Battery Life[ 1 Month Used ]',
      price: '55.99- 75',
      image: null
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" style={{ 
        background: 'linear-gradient(135deg, #FFE6FD 0%, #E0F8F5 100%)',
      }}>
        {/* Left Vector */}
        <div className="absolute left-0 top-0 bottom-0 w-64 opacity-20 pointer-events-none hidden lg:block">
          <svg className="h-full w-full" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <g>
              {[...Array(40)].map((_, i) => (
                <path
                  key={i}
                  d={`M ${i * 6} 0 Q ${50 + i * 8} ${150 + i * 5} ${i * 6} 600`}
                  stroke="#632EE3"
                  strokeWidth="1.5"
                  fill="none"
                />
              ))}
            </g>
          </svg>
        </div>

        {/* Right Vector */}
        <div className="absolute right-0 top-0 bottom-0 w-64 opacity-20 pointer-events-none hidden lg:block">
          <svg className="h-full w-full" viewBox="0 0 200 600" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <g>
              {[...Array(40)].map((_, i) => (
                <path
                  key={i}
                  d={`M ${200 - i * 6} 0 Q ${150 - i * 8} ${150 + i * 5} ${200 - i * 6} 600`}
                  stroke="#9F62F2"
                  strokeWidth="1.5"
                  fill="none"
                />
              ))}
            </g>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: '#1F2937' }}>
            Deal Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Products
            </span>
            <br />
            In A{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Smart
            </span>{' '}
            Way !
          </h1>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            SmartDeals helps you sell, resell, and shop from trusted local sellers — all in one place!
          </p>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="max-w-2xl mx-auto mb-6">
            <div className="relative flex items-center bg-white rounded-full shadow-lg overflow-hidden">
              <input
                type="text"
                placeholder="search For Products, Categories..."
                className="flex-1 px-6 py-3 text-gray-700 placeholder-gray-400 focus:outline-none bg-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full hover:opacity-90 transition-opacity flex items-center justify-center"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </form>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/all-products">
              <button className="bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 px-6 py-3 rounded-lg font-medium transition-opacity">
                Watch All Products
              </button>
            </Link>
            <Link to="/create-product">
              <button className="bg-white text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary border-2 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white px-6 py-3 rounded-lg font-medium transition-all" style={{ borderColor: '#7C3AED' }}>
                Post an Product
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Products Section */}
      <section className="py-16 px-4" style={{ backgroundColor: '#F3F4F6' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1F2937' }}>
            Recent{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Products
            </span>
          </h2>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Show All Button */}
          <div className="text-center">
            <Link to="/all-products">
              <button className="bg-gradient-to-r from-primary to-secondary text-white border-none hover:opacity-90 px-8 py-3 rounded-lg font-medium transition-opacity">
                Show All
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;