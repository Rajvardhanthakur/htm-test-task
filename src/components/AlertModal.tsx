import React from 'react';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  heading: string;
  description: string;
}

const AlertModal: React.FC<AlertModalProps> = ({
  isOpen,
  onClose,
  heading,
  description,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-bold mb-4">{heading}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default AlertModal;
