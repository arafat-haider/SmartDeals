import React, { useState } from 'react';

const MyProducts = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 2,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 3,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 4,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 5,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 6,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 7,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 8,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 9,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    },
    {
      id: 10,
      image: null,
      name: 'Orange Juice',
      category: 'Beverage',
      price: '$100',
      status: 'Pending'
    }
  ]);

  const handleEdit = (id) => {
    console.log('Edit product:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete product:', id);
    setProducts(products.filter(product => product.id !== id));
  };

  const handleMakeSold = (id) => {
    console.log('Make sold product:', id);
    setProducts(products.map(product => 
      product.id === id ? { ...product, status: 'Sold' } : product
    ));
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F3F4F6', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center" style={{ color: '#1F2937' }}>
            My Products:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {products.length}
            </span>
          </h1>
        </div>
      </div>

      {/* Products Table */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ backgroundColor: '#F9FAFB' }}>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>SL No</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Image</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Product Name</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Category</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Price</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Status</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <tr key={product.id} className="border-b hover:bg-gray-50 transition-colors">
                      <td className="py-4 px-6" style={{ color: '#1F2937' }}>{index + 1}</td>
                      <td className="py-4 px-6">
                        <div className="w-12 h-12 rounded" style={{ backgroundColor: '#D1D5DB' }}>
                          {product.image && (
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded" />
                          )}
                        </div>
                      </td>
                      <td className="py-4 px-6 font-medium" style={{ color: '#1F2937' }}>{product.name}</td>
                      <td className="py-4 px-6" style={{ color: '#1F2937' }}>{product.category}</td>
                      <td className="py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>{product.price}</td>
                      <td className="py-4 px-6">
                        <span 
                          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium"
                          style={{ 
                            backgroundColor: product.status === 'Pending' ? '#FCD34D' : '#10B981',
                            color: product.status === 'Pending' ? '#78350F' : '#FFFFFF'
                          }}
                        >
                          {product.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(product.id)}
                            className="px-4 py-1.5 rounded border-2 font-medium transition-colors"
                            style={{ 
                              borderColor: '#7C3AED',
                              color: '#7C3AED',
                              backgroundColor: 'white'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#7C3AED';
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'white';
                              e.target.style.color = '#7C3AED';
                            }}
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDelete(product.id)}
                            className="px-4 py-1.5 rounded border-2 font-medium transition-colors"
                            style={{ 
                              borderColor: '#EF4444',
                              color: '#EF4444',
                              backgroundColor: 'white'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#EF4444';
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'white';
                              e.target.style.color = '#EF4444';
                            }}
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleMakeSold(product.id)}
                            className="px-4 py-1.5 rounded border-2 font-medium transition-colors"
                            style={{ 
                              borderColor: '#10B981',
                              color: '#10B981',
                              backgroundColor: 'white'
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = '#10B981';
                              e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = 'white';
                              e.target.style.color = '#10B981';
                            }}
                          >
                            Make Sold
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProducts;