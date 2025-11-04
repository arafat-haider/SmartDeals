import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden ">
      {/* Product Image */}
      <div className="w-full h-64 rounded-t-2xl relative">
        {product.image ? (
          <img 
            src={product.image} 
            alt={product.title} 
            className="w-full h-full object-cover rounded-t-2xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center rounded-t-2xl" style={{ backgroundColor: '#D1D5DB' }}>
            <span className="text-gray-500">No Image</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="p-6">
        {/* On Sale Badge */}
        <div className="mb-3">
          <span 
            className="inline-block px-4 py-1.5 rounded-full text-sm font-medium"
            style={{ 
              backgroundColor: 'rgba(124, 58, 237, 0.15)',
              color: '#7C3AED'
            }}
          >
            On Sale
          </span>
        </div>

        <h3 className="text-xl font-semibold mb-3 line-clamp-2" style={{ color: '#1F2937', minHeight: '3.5rem' }}>
          {product.title}
        </h3>
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-xl mb-4">
          $ {product.price}
        </p>
        <Link to={`/product/${product.id}`}>
          <button 
            className="w-full bg-white text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary border-2 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:text-white px-4 py-3 rounded-lg font-medium transition-all"
            style={{ borderColor: '#9F62F2' }}
          >
            View Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;