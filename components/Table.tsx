import React from 'react';

const Table = ({ breweries }: { breweries: { [k: string]: string }[] }) => {
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
  );
};

export default Table;
