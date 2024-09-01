import React from 'react';

interface PropertyCardProps {
  id: number;
  name: string;
  description: string;
  location: string;
  images: string[];
  onBookNow: () => void;
  onEnquiry: () => void;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  name,
  description,
  location,
  images,
  onBookNow,
  onEnquiry
}) => {
  return (
    <div className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
      <div className="md:w-1/3">
        <img
          src={images[0]}
          alt={name}
          className="w-full h-64 object-cover"
        />
      </div>
      <div className="md:w-2/3 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <p className="text-gray-500">Location : {location}</p>
        </div>
        <div className="mt-4 flex space-x-4">
          <button
            className="flex-1 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            onClick={onBookNow}
          >
            Book Now
          </button>
          <button
            className="flex-1 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={onEnquiry}
          >
            Enquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
