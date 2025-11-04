import React from 'react';
import ProductCard from '../components/ProductCard';

// Sample product data, expanded for the "All Products" page
const allProducts = [
  { id: 1, title: 'Yamaha Fz Guitar [ Full Fresh Condition ]', price: '55.99- 75', image: null },
  { id: 2, title: 'Hero Splender Ev - [ 2 Year Used ]', price: '55.99- 75', image: null },
  { id: 3, title: 'Duranta E-Bike  With 97% Battery Life[ 1 Month Used ]', price: '55.99- 75', image: null },
  { id: 4, title: 'Vintage Leather Jacket - Brown', price: '120.00', image: null },
  { id: 5, title: 'Sony WH-1000XM4 Wireless Headphones', price: '278.00', image: null },
  { id: 6, title: 'Mechanical Keyboard with RGB', price: '85.50', image: null },
  { id: 7, title: 'Samsung 27-inch Curved Monitor', price: '249.99', image: null },
  { id: 8, title: 'Apple MacBook Pro 14" (M2)', price: '1899.00', image: null },
  { id: 9, title: 'DJI Mini 3 Pro Drone', price: '759.00', image: null },
];

const AllProducts = () => {
  return (
    <div className="py-16 px-4" style={{ backgroundColor: '#F3F4F6', fontFamily: 'Inter, sans-serif' }}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#1F2937' }}>
          All{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
            Products
          </span>
        </h2>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;