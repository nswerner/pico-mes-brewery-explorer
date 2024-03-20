'use client';

import { useEffect, useState, useMemo } from 'react';
import PageButtons from './PageButtons';
import TypeFilter from './TypeFilter';

const PerformantTable = ({
  allBreweries,
}: {
  allBreweries: { [k: string]: string }[];
}) => {
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState('');
  const [filteredBreweries, setFilteredBreweries] = useState(allBreweries);
  const [selectedBreweries, setSelectedBreweries] = useState(
    filteredBreweries.slice((page - 1) * 10, page * 10)
  );

  useEffect(() => {
    setFilteredBreweries(
      allBreweries.filter(({ brewery_type }) =>
        filter ? brewery_type === filter : true
      )
    );
    setPage(1);
  }, [allBreweries, filter]);

  useEffect(() => {
    setSelectedBreweries(filteredBreweries.slice((page - 1) * 10, page * 10));
  }, [filteredBreweries, page]);

  const handleTypeFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value);
  };

  const rowData = useMemo(() => {
    return selectedBreweries.map(({ id, name, country, brewery_type }) => (
      <tr key={id}>
        <td className="py-2 px-4 border-b border-gray-300 border-l w-[60vw]">
          {name}
        </td>
        <td className="py-2 px-4 border-b border-gray-300 border-l border-r w-[20vw]">
          {country}
        </td>
        <td className="py-2 px-4 border-b border-gray-300 border-r  w-[20vw]">
          {brewery_type}
        </td>
      </tr>
    ));
  }, [selectedBreweries]);

  while (rowData.length < 10) {
    rowData.push(
      <tr key={rowData.length} className="bg-gray-100 opacity-50">
        <td className="py-2 px-4 border-b border-gray-300 border-l w-[60vw]">
          &nbsp;
        </td>
        <td className="py-2 px-4 border-b border-gray-300 border-l border-r w-[20vw]">
          &nbsp;
        </td>
        <td className="py-2 px-4 border-b border-gray-300 border-r  w-[20vw]">
          &nbsp;
        </td>
      </tr>
    );
  }

  return (
    <div>
      <header className="flex flex-row justify-end mb-2">
        <TypeFilter handleTypeFilterChange={handleTypeFilterChange} />
      </header>
      <table className="border-collapse w-full">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b border-gray-300 border-l w-[60vw] text-left">
              Name
            </th>
            <th className="py-2 px-4 border-b border-gray-300 border-l border-r  w-[20vw] text-left">
              Country
            </th>
            <th className="py-2 px-4 border-b border-gray-300 border-r  w-[20vw] text-left">
              Type
            </th>
          </tr>
        </thead>
        <tbody>{rowData}</tbody>
      </table>
      <PageButtons
        page={page}
        setPage={setPage}
        currentResultLength={selectedBreweries.length}
      />
    </div>
  );
};

export default PerformantTable;
