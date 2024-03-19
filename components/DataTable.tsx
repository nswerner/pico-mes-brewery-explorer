import React from 'react';
import ButtonWithDropdownFilter from './ButtonWithDropdownFilter';

const DataTable = ({ breweries }: { breweries: { [k: string]: string }[] }) => {
  const rowData = breweries.map(({ id, name, country, brewery_type }) => (
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

  return (
    <div>
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
              <div className="flex flex-row ">
                <span className="mr-6">Type</span>
                <ButtonWithDropdownFilter />
              </div>
            </th>
          </tr>
        </thead>
        <tbody>{rowData}</tbody>
      </table>
    </div>
  );
};

export default DataTable;
