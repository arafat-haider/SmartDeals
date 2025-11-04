import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    condition: 'Brand New',
    usageTime: '',
    productImageURL: '',
    sellerName: '',
    sellerEmail: '',
    sellerContact: '',
    sellerImageURL: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Creating product:', formData);
    // Add your product creation logic here
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F3F4F6', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-6 text-gray-700 hover:text-black transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span className="font-medium">Back To Products</span>
          </button>
          <h1 className="text-4xl md:text-5xl font-bold text-center" style={{ color: '#1F2937' }}>
            Create{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              A Product
            </span>
          </h1>
        </div>
      </div>

      {/* Form */}
      <div className="px-4 pb-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-lg shadow-md p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title and Category Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Title
                  </label>
                  <input
                    type="text"
                    name="title"
                    placeholder="e.g. Yamaha Fz Guitar for Sale"
                    value={formData.title}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Category
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#6B7280' }}
                    required
                  >
                    <option value="">Select a Category</option>
                    <option value="Electronics">Electronics</option>
                    <option value="Fashion">Fashion</option>
                    <option value="Home & Living">Home & Living</option>
                    <option value="Groceries">Groceries</option>
                    <option value="Beverage">Beverage</option>
                  </select>
                </div>
              </div>

              {/* Min Price and Max Price Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Min Price You want to Sale ($)
                  </label>
                  <input
                    type="number"
                    name="minPrice"
                    placeholder="e.g. 18.5"
                    value={formData.minPrice}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Max Price You want to Sale ($)
                  </label>
                  <input
                    type="number"
                    name="maxPrice"
                    placeholder="Optional (default = Min Price)"
                    value={formData.maxPrice}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#6B7280' }}
                  />
                </div>
              </div>

              {/* Product Condition and Usage Time Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Product Condition
                  </label>
                  <div className="flex gap-6 mt-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="condition"
                          value="Brand New"
                          checked={formData.condition === 'Brand New'}
                          onChange={handleChange}
                          className="w-5 h-5 appearance-none border-2 rounded-full cursor-pointer checked:border-[#7C3AED] checked:border-[6px]"
                          style={{ 
                            borderColor: formData.condition === 'Brand New' ? '#7C3AED' : '#9CA3AF'
                          }}
                        />
                      </div>
                      <span style={{ color: '#1F2937' }}>Brand New</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <div className="relative">
                        <input
                          type="radio"
                          name="condition"
                          value="Used"
                          checked={formData.condition === 'Used'}
                          onChange={handleChange}
                          className="w-5 h-5 appearance-none border-2 rounded-full cursor-pointer checked:border-[#7C3AED] checked:border-[6px]"
                          style={{ 
                            borderColor: formData.condition === 'Used' ? '#7C3AED' : '#9CA3AF'
                          }}
                        />
                      </div>
                      <span style={{ color: '#1F2937' }}>Used</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Product Usage time
                  </label>
                  <input
                    type="text"
                    name="usageTime"
                    placeholder="e.g. 1 year 3 month"
                    value={formData.usageTime}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                  />
                </div>
              </div>

              {/* Product Image URL */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                  Your Product Image URL
                </label>
                <input
                  type="url"
                  name="productImageURL"
                  placeholder="https://..."
                  value={formData.productImageURL}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                  style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                  required
                />
              </div>

              {/* Seller Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Seller Name
                  </label>
                  <input
                    type="text"
                    name="sellerName"
                    placeholder="e.g. Artisan Roasters"
                    value={formData.sellerName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Seller Email
                  </label>
                  <input
                    type="email"
                    name="sellerEmail"
                    placeholder="leil31955@ntsod.com"
                    value={formData.sellerEmail}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                    required
                  />
                </div>
              </div>

              {/* Seller Contact and Image URL Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Seller Contact
                  </label>
                  <input
                    type="tel"
                    name="sellerContact"
                    placeholder="e.g. +1-555-1234"
                    value={formData.sellerContact}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                    Seller image URL
                  </label>
                  <input
                    type="url"
                    name="sellerImageURL"
                    placeholder="https://..."
                    value={formData.sellerImageURL}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                    style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                    required
                  />
                </div>
              </div>

              {/* Location */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="City, Country"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg focus:outline-none bg-white"
                  style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2" style={{ color: '#1F2937' }}>
                  Simple Description about your Product
                </label>
                <textarea
                  name="description"
                  placeholder="e.g. I bought this product 3 month ago, did not used more than 1/2 time, actually learning guitar is so tough....."
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-3 rounded-lg focus:outline-none resize-none bg-white"
                  style={{ border: '1px solid #E5E7EB', color: '#1F2937' }}
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                Create A Product
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateProduct;