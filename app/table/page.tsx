'use client';
import { useState, useEffect } from 'react';
import { TypeFilterContext } from '@/components/TypeFilterContext';
import DataTable from '@/components/DataTable';
import PageButtons from '@/components/PageButtons';

const TableView = () => {
  const [breweries, setBreweries] = useState<{ [k: string]: string }[]>([]);
  const [page, setPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState('');

  useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?per_page=10&page=${page}&sort=type,name` +
        `${typeFilter && `&by_type=${typeFilter}`}`
    ).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        if (page === 1) data[1].name = 'Cafe Okei';
        setBreweries(data);
      }
    });
  }, [page, typeFilter]);

  return (
    <TypeFilterContext.Provider value={{ typeFilter, setTypeFilter, setPage }}>
      <div>
        <h2 className="text-2xl font-bold pb-6">
          Breweries by type, sorted by name
        </h2>
        <DataTable breweries={breweries} />
        <PageButtons
          currentResultLength={breweries.length}
          page={page}
          setPage={setPage}
        />
      </div>
    </TypeFilterContext.Provider>
  );
};

export default TableView;
