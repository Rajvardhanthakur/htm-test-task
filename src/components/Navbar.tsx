import React, { useState } from 'react';

interface Tab {
  name: string;
}

const tabs: Tab[] = [
  { name: 'Accommodation' },
  { name: 'Special Deals' },
  { name: 'FAQ' }
];

const Navbar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Accommodation');

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  const TabItem: React.FC<{ tab: Tab }> = ({ tab }) => (
    <li
      onClick={() => handleClick(tab.name)}
      className={`text-lg font-semibold cursor-pointer px-4 py-2 rounded ${activeTab === tab.name
        ? 'bg-blue-500 text-white'
        : 'hover:bg-blue-200'
        }`}
    >
      {tab.name}
    </li>
  );

  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex justify-start space-x-4">
        {tabs.map((tab) => (
          <TabItem key={tab.name} tab={tab} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
