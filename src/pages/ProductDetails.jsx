import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  // Sample product data
  const product = {
    id: id,
    title: 'Yamaha Fz Guitar For Sale',
    category: 'All And Includes',
    priceMin: 22.5,
    priceMax: 30,
    image: null,
    productId: '60f7c53a0214c3c369cc9874',
    postedDate: '10/19/2024',
    condition: 'New',
    usageTime: '3 Month',
    description: 'It Is A Long Established Fact That A Reader Will Be Distracted By The Readable Content Of A Page When Looking At Its Layout. The Point Of Using Lorem Ipsum Is That It Has A More-Or-Less Normal Distribution Of Letters, As Opposed To Using "Content Here, Content Here", Making It Look Like Readable English. Many Desktop Publishing Packages And Web Page Editors Now Use Lorem Ipsum As Their Default Model Text, And A Search For "Lorem Ipsum" Will Uncover Many Web Sites Still In Their Infancy. Various Versions Have Evolved Over The Years, Sometimes By Accident, Sometimes On Purpose (Injected Humour And The Like).',
    seller: {
      name: 'Sara Chen',
      email: 'crafts.by.sara@shop.net',
      location: 'Los Angeles, CA',
      contact: 'sara.chen_contact'
    },
    status: 'On Sale'
  };

  const [bids, setBids] = useState([
    {
      id: 1,
      product: {
        name: 'Orange Juice',
        price: '$22.5',
        image: null
      },
      seller: {
        name: 'Sara Chen',
        email: 'crafts.by.sara@shop.net',
        image: null
      },
      bidPrice: '$10'
    },
    {
      id: 2,
      product: {
        name: 'Orange Juice',
        price: '$22.5',
        image: null
      },
      seller: {
        name: 'Sara Chen',
        email: 'crafts.by.sara@shop.net',
        image: null
      },
      bidPrice: '$10'
    },
    {
      id: 3,
      product: {
        name: 'Orange Juice',
        price: '$22.5',
        image: null
      },
      seller: {
        name: 'Sara Chen',
        email: 'crafts.by.sara@shop.net',
        image: null
      },
      bidPrice: '$10'
    }
  ]);

  const handleAcceptOffer = (bidId) => {
    console.log('Accept offer:', bidId);
  };

  const handleRejectOffer = (bidId) => {
    console.log('Reject offer:', bidId);
  };

  const handleBuyProduct = () => {
    console.log('Buy product:', product.id);
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F3F4F6', minHeight: '100vh' }}>
      {/* Product Details Section */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Left Column - Product Image and Description */}
            <div>
              {/* Product Image */}
              <div className="w-full h-80 rounded-lg mb-6" style={{ backgroundColor: '#D1D5DB' }}>
                {product.image ? (
                  <img src={product.image} alt={product.title} className="w-full h-full object-cover rounded-lg" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="text-gray-500">No Image</span>
                  </div>
                )}
              </div>

              {/* Product Description */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-xl font-bold mb-4" style={{ color: '#1F2937' }}>
                  Product Description
                </h3>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">
                      Condition:
                    </span>
                    <span className="ml-2" style={{ color: '#1F2937' }}>{product.condition}</span>
                  </div>
                  <div>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-semibold">
                      Usage Time:
                    </span>
                    <span className="ml-2" style={{ color: '#1F2937' }}>{product.usageTime}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              <button
                onClick={() => navigate(-1)}
                className="flex items-center gap-2 mb-4 text-gray-700 hover:text-black transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                <span className="font-medium">Back To Products</span>
              </button>

              <h1 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#1F2937' }}>
                {product.title}
              </h1>

              <span 
                className="inline-block px-3 py-1 rounded-full text-xs font-medium mb-4"
                style={{ 
                  backgroundColor: 'rgba(124, 58, 237, 0.15)',
                  color: '#7C3AED'
                }}
              >
                {product.category}
              </span>

              <div className="mb-6">
                <p className="text-3xl font-bold" style={{ color: '#10B981' }}>
                  ${product.priceMin} - {product.priceMax}
                </p>
                <p className="text-sm text-gray-500">Price starts from</p>
              </div>

              {/* Product Details Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1F2937' }}>
                  Product Details
                </h3>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>Product ID:</span>
                    <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {product.productId}
                    </span>
                  </p>
                  <p>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>Posted:</span>
                    <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {product.postedDate}
                    </span>
                  </p>
                </div>
              </div>

              {/* Seller Information Card */}
              <div className="bg-white rounded-lg shadow-md p-6 mb-4">
                <h3 className="text-lg font-bold mb-4" style={{ color: '#1F2937' }}>
                  Seller Information
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full" style={{ backgroundColor: '#D1D5DB' }}>
                    {product.seller.image && (
                      <img src={product.seller.image} alt={product.seller.name} className="w-full h-full object-cover rounded-full" />
                    )}
                  </div>
                  <div>
                    <p className="font-semibold" style={{ color: '#1F2937' }}>{product.seller.name}</p>
                    <p className="text-sm text-gray-500">{product.seller.email}</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <p>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>Location:</span>
                    <span className="ml-2 text-gray-600">{product.seller.location}</span>
                  </p>
                  <p>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>Contact:</span>
                    <span className="ml-2 text-gray-600">{product.seller.contact}</span>
                  </p>
                  <p>
                    <span className="font-semibold" style={{ color: '#1F2937' }}>Status:</span>
                    <span 
                      className="ml-2 inline-block px-3 py-1 rounded-full text-xs font-medium"
                      style={{ 
                        backgroundColor: '#FCD34D',
                        color: '#78350F'
                      }}
                    >
                      {product.status}
                    </span>
                  </p>
                </div>
              </div>

              {/* Buy Button */}
              <button
                onClick={handleBuyProduct}
                className="w-full bg-gradient-to-r from-primary to-secondary text-white font-medium py-4 rounded-lg hover:opacity-90 transition-opacity"
              >
                I Want Buy This Product
              </button>
            </div>
          </div>

          {/* Bids Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ color: '#1F2937' }}>
              Bids For This Products:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                {bids.length.toString().padStart(2, '0')}
              </span>
            </h2>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b" style={{ backgroundColor: '#F9FAFB' }}>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>SL No</th>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Product</th>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Seller</th>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Bid Price</th>
                      <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bids.map((bid, index) => (
                      <tr key={bid.id} className="border-b hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-6" style={{ color: '#1F2937' }}>{index + 1}</td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }}>
                              {bid.product.image && (
                                <img src={bid.product.image} alt={bid.product.name} className="w-full h-full object-cover rounded" />
                              )}
                            </div>
                            <div>
                              <p className="font-semibold" style={{ color: '#1F2937' }}>{bid.product.name}</p>
                              <p className="text-sm" style={{ color: '#6B7280' }}>{bid.product.price}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }}>
                              {bid.seller.image && (
                                <img src={bid.seller.image} alt={bid.seller.name} className="w-full h-full object-cover rounded-full" />
                              )}
                            </div>
                            <div>
                              <p className="font-semibold" style={{ color: '#1F2937' }}>{bid.seller.name}</p>
                              <p className="text-sm" style={{ color: '#6B7280' }}>{bid.seller.email}</p>
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>{bid.bidPrice}</td>
                        <td className="py-4 px-6">
                          <div className="flex gap-2">
                            <button
                              onClick={() => handleAcceptOffer(bid.id)}
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
                              Accept Offer
                            </button>
                            <button
                              onClick={() => handleRejectOffer(bid.id)}
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
                              Reject Offer
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
    </div>
  );
};

export default ProductDetails;