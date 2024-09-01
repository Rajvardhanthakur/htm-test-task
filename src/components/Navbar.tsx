import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Accommodation');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex justify-start space-x-4">
        <li
          onClick={() => handleClick('Accommodation')}
          className={`text-lg font-semibold cursor-pointer px-4 py-2 rounded ${activeTab === 'Accommodation'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-200'
            }`}
        >
          Accommodation
        </li>
        <li
          onClick={() => handleClick('Special Deals')}
          className={`text-lg font-semibold cursor-pointer px-4 py-2 rounded ${activeTab === 'Special Deals'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-200'
            }`}
        >
          Special Deals
        </li>
        <li
          onClick={() => handleClick('FAQ')}
          className={`text-lg font-semibold cursor-pointer px-4 py-2 rounded ${activeTab === 'FAQ'
              ? 'bg-blue-500 text-white'
              : 'hover:bg-blue-200'
            }`}
        >
          FAQ
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
