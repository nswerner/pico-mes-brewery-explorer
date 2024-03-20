'use client';
import { useState, useEffect, useCallback } from 'react';
import Table from '@/components/Table';
import Grid from '@/components/Grid';
import TypeFilter from '@/components/TypeFilter';
import PageButtons from '@/components/PageButtons';

const TABLE = 'table';
const GRID = 'grid';

const TableView = ({ params: { view } }: { params: { view: string } }) => {
  const [breweries, setBreweries] = useState<{ [k: string]: string }[]>([]);
  const [typeFilter, setTypeFilter] = useState('');
  const [page, setPage] = useState(1);

  const handleTypeFilterChange = useCallback(
    ({ target: { value } }: { target: { value: string } }) => {
      setTypeFilter(value);
      setPage(1);
    },
    []
  );

  useEffect(() => {
    fetch(
      `https://api.openbrewerydb.org/breweries?per_page=10&page=${page}&sort=type,name` +
        `${typeFilter && `&by_type=${typeFilter}`}`
    ).then(async (response) => {
      if (response.ok) {
        const data = await response.json();
        setBreweries(data);
      }
    });
  }, [page, typeFilter]);

  return (
    <div>
      <header className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold pb-6">
          Breweries by type, sorted by name
        </h2>
        <TypeFilter handleTypeFilterChange={handleTypeFilterChange} />
      </header>
      {view === TABLE && <Table breweries={breweries} />}
      {view === GRID && <Grid breweries={breweries} />}
      <PageButtons
        currentResultLength={breweries.length}
        page={page}
        setPage={setPage}
      />
    </div>
  );
};

export default TableView;
