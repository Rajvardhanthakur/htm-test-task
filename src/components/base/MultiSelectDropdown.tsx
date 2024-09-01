import React, { useState } from 'react';

interface MultiSelectProps {
  options: string[];
  selectedOptions: string[];
  onChange: (selected: string[]) => void;
}

const MultiSelectDropdown: React.FC<MultiSelectProps> = ({ options, selectedOptions, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      onChange(selectedOptions.filter((selected) => selected !== option));
    } else {
      onChange([...selectedOptions, option]);
    }
  };

  return (
    <div className="relative">
      <button
        className="p-2 border rounded w-full"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOptions.length > 0 ? selectedOptions.join(', ') : 'Select Locations'}
      </button>
      {isOpen && (
        <div className="absolute mt-2 w-full bg-white border rounded shadow-lg">
          {options.map((option) => (
            <label key={option} className="block p-2 hover:bg-gray-100">
              <input
                type="checkbox"
                checked={selectedOptions.includes(option)}
                onChange={() => toggleOption(option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelectDropdown