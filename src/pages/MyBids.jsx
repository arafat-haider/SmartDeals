import React, { useState } from 'react';

const MyBids = () => {
  const [bids, setBids] = useState([
    {
      id: 1,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 2,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 3,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 4,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 5,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 6,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 7,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 8,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 9,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    },
    {
      id: 10,
      productImage: null,
      productName: 'Orange Juice',
      productPrice: '$22.5',
      sellerName: 'Sara Chen',
      sellerEmail: 'crafts.by.sara@shop.net',
      sellerImage: null,
      bidPrice: '$10',
      status: 'Pending'
    }
  ]);

  const handleRemoveBid = (id) => {
    console.log('Remove bid:', id);
    setBids(bids.filter(bid => bid.id !== id));
  };

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#F3F4F6', minHeight: '100vh' }}>
      {/* Page Header */}
      <div className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center" style={{ color: '#1F2937' }}>
            My Bids:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              {bids.length}
            </span>
          </h1>
        </div>
      </div>

      {/* Bids Table */}
      <div className="px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b" style={{ backgroundColor: '#F9FAFB' }}>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>SL No</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Product</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Seller</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Bid Price</th>
                    <th className="text-left py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>Status</th>
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
                            {bid.productImage && (
                              <img src={bid.productImage} alt={bid.productName} className="w-full h-full object-cover rounded" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold" style={{ color: '#1F2937' }}>{bid.productName}</p>
                            <p className="text-sm" style={{ color: '#6B7280' }}>{bid.productPrice}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full flex-shrink-0" style={{ backgroundColor: '#D1D5DB' }}>
                            {bid.sellerImage && (
                              <img src={bid.sellerImage} alt={bid.sellerName} className="w-full h-full object-cover rounded-full" />
                            )}
                          </div>
                          <div>
                            <p className="font-semibold" style={{ color: '#1F2937' }}>{bid.sellerName}</p>
                            <p className="text-sm" style={{ color: '#6B7280' }}>{bid.sellerEmail}</p>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-6 font-semibold" style={{ color: '#1F2937' }}>{bid.bidPrice}</td>
                      <td className="py-4 px-6">
                        <span 
                          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium"
                          style={{ 
                            backgroundColor: '#FCD34D',
                            color: '#78350F'
                          }}
                        >
                          {bid.status}
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <button
                          onClick={() => handleRemoveBid(bid.id)}
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
                          Remove Bid
                        </button>
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

export default MyBids;