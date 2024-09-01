import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import {
  Navbar,
  PropertyCard,
  FilterPanel,
  AlertModal
} from '../components'
import propertiesData from "../data/propertiesJson.json"
import { useDebounce } from '../hooks';

interface Property {
  id: number;
  name: string;
  description: string;
  locationId: number;
  images: string[];
  location: string;
}

const locationOptions = [
  'Hirafu House',
  'Hirafu Woods',
  'Horizon',
  'J House',
  'Kashi Lodge',
  'Deep Tracks'
];

export const Home: React.FC = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filterBy, setFilterBy] = useState<'name' | 'description'>('name');
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalHeading, setModalHeading] = useState<string>('');
  const [modalDescription, setModalDescription] = useState<string>('');


  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  useEffect(() => {
    setProperties(propertiesData);
    setFilteredProperties(propertiesData);
  }, []);

  useEffect(() => {
    const filtered = properties.filter((property) => {
      const matchesSearchTerm = property[filterBy].toLowerCase().includes(debouncedSearchTerm.toLowerCase());
      const matchesLocation = selectedLocations.length === 0 || selectedLocations.includes(property.location);
      return matchesSearchTerm && matchesLocation;
    });
    console.log("filterd :- ", filterBy)
    setFilteredProperties(filtered);
  }, [debouncedSearchTerm, filterBy, selectedLocations, properties]);

  const handleLocationChange = (selected: string[]) => {
    setSelectedLocations(selected);
  };

  const resetFilters = () => {
    setSearchTerm('');
    setFilterBy('name');
    setSelectedLocations([]);
  };

  const openModal = (heading: string, description: string) => {
    setModalHeading(heading);
    setModalDescription(description);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };




  return (
    <Fragment>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-12 text-center">
          <h1 className="text-5xl font-extrabold">Discover Your Perfect Stay</h1>
          <p className="mt-4 text-xl">Find the best properties tailored to your needs</p>
        </header>
        <Navbar />

        <main className="container mx-auto py-8 px-4 md:px-0">
          <div className="flex flex-col md:flex-row md:space-x-8">
            <FilterPanel
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
              filterBy={filterBy}
              setFilterBy={setFilterBy}
              locationOptions={locationOptions}
              selectedLocations={selectedLocations}
              handleLocationChange={handleLocationChange}
              resetFilters={resetFilters}
            />

            <div className="w-full md:w-3/4 mt-8 md:mt-0">
              {filteredProperties.length > 0 ? (
                <div className="grid grid-cols-1 gap-6">
                  {filteredProperties.map((property) => (
                    <PropertyCard
                      key={property.id}
                      {...property}
                      onBookNow={() => openModal('Book Now Feature Coming Soon', 'This feature is under development and will be available soon.')}
                      onEnquiry={() => openModal('Enquiry Feature Coming Soon', 'This feature is under development and will be available soon.')}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center text-red-500 text-xl">
                  No properties match your search.
                </div>
              )}
            </div>
          </div>
        </main>

        <AlertModal
          isOpen={isModalOpen}
          onClose={closeModal}
          heading={modalHeading}
          description={modalDescription}
        />
      </div>
    </Fragment>g
  );
};

export default Home;
