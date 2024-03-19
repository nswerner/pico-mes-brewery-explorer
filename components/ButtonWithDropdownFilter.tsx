'use client';

import { useState, useContext } from 'react';
import { TypeFilterContext } from '@/components/TypeFilterContext';
import DropdownFilter from './DropdownFilter';

const ButtonWithDropdownFilter = ({}: {}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { typeFilter, setTypeFilter, setPage } = useContext(TypeFilterContext);

  const handleTypeFilterChange = (value: string) => {
    setTypeFilter(value);
    setPage(1);
    setIsOpen(false);
  };

  return (
    <div>
      {(isOpen || typeFilter) && (
        <DropdownFilter handleTypeFilterChange={handleTypeFilterChange} />
      )}
      {!isOpen && !typeFilter && (
        <button onClick={() => setIsOpen(!isOpen)}>
          <span className="block w-4 h-0.5 bg-gray-400 mt-1 mb-1"></span>
          <span className="block w-4 h-0.5 bg-gray-400 mb-1"></span>
          <span className="block w-4 h-0.5 bg-gray-400"></span>
        </button>
      )}
    </div>
  );
};

export default ButtonWithDropdownFilter;
