
import React from 'react';
import companiesImage from '../assets/images/companies.webp';

const TrustBar: React.FC = () => {
  return (
    <div className="bg-white py-24 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Companies Image */}
        <div className="flex justify-center reveal">
          <img
            src={companiesImage}
            alt="Top Companies"
            className="w-full max-w-6xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default TrustBar;
