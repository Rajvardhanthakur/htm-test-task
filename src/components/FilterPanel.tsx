import React from 'react';
import { MultiSelectDropdown } from './base';

interface FilterPanelProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  filterBy: 'name' | 'description';
  setFilterBy: (filter: 'name' | 'description') => void;
  locationOptions: string[];
  selectedLocations: string[];
  handleLocationChange: (selected: string[]) => void;
  resetFilters: () => void;
}

const FilterPanel: React.FC<FilterPanelProps> = ({
  searchTerm,
  setSearchTerm,
  filterBy,
  setFilterBy,
  locationOptions,
  selectedLocations,
  handleLocationChange,
  resetFilters
}) => {
  return (
    <div className="w-full md:w-1/4 p-4 bg-gray-50 border border-gray-200 rounded-lg">
      <h2 className="text-2xl font-bold mb-6">Filter Options</h2>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Search Term</label>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search properties..."
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Filter By</label>
        <div className="flex items-center space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="name"
              checked={filterBy === 'name'}
              onChange={() => setFilterBy('name')}
              className="form-radio text-blue-500"
            />
            <span className="ml-2 text-gray-700">Name</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="description"
              checked={filterBy === 'description'}
              onChange={() => setFilterBy('description')}
              className="form-radio text-blue-500"
            />
            <span className="ml-2 text-gray-700">Description</span>
          </label>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 font-semibold mb-2">Location</label>
        <MultiSelectDropdown
          options={locationOptions}
          selectedOptions={selectedLocations}
          onChange={handleLocationChange}
        />
      </div>
      <button
        onClick={resetFilters}
        className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterPanel;
