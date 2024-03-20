'use client';

import { ChangeEventHandler } from 'react';

const options = [
  'micro',
  'nano',
  'regional',
  'brewpub',
  'large',
  'planning',
  'bar',
  'contract',
  'proprietor',
  'closed',
];

const TypeFilter = ({
  handleTypeFilterChange,
}: {
  handleTypeFilterChange: ChangeEventHandler<HTMLSelectElement>;
}) => {
  return (
    <div>
      <label htmlFor="typeFilter" className="mr-4">
        Filter by brewery type
      </label>
      <select
        id="typeFilter"
        defaultValue={'Filter by brewery type'}
        className="rounded-lg w-[10vw] border border-gray-200 p-1"
        onChange={handleTypeFilterChange}
      >
        <option value="">none</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default TypeFilter;
