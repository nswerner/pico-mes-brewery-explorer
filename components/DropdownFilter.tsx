import React from 'react';

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

const DropdownFilter = ({
  handleTypeFilterChange,
}: {
  handleTypeFilterChange: (type: string) => void;
}) => (
  <div className="w-4 h-4 bg-lightgray rounded-full border border-gray-200">
    <div className="bg-lightgray rounded-lg">
      <select
        defaultValue={''}
        onChange={({ target: { value } }) => {
          handleTypeFilterChange(value);
        }}
        className="rounded-lg"
      >
        <option value="">none</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
);

export default DropdownFilter;
