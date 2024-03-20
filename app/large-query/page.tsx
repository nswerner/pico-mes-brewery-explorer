import PerformantTable from '@/components/PerformantTable';

type Brewery = { name: string; country: string; brewery_type: string };

type BreweriesByType = {
  [type: string]: Brewery[];
};

const LargeQueryPerformantTable = async () => {
  const allBreweries = await fetch(
    `https://api.openbrewerydb.org/breweries?per_page=200`
  ).then(async (response) => {
    if (response.ok) {
      return await response.json();
    }
  });

  const breweriesByType = allBreweries.reduce(
    (acc: BreweriesByType, brewery: Brewery) => {
      if (!acc[brewery.brewery_type]) {
        acc[brewery.brewery_type] = [];
      }
      acc[brewery.brewery_type].push(brewery); // Could be optimized by adding the brewery to its sorted position on this pass
      return acc;
    },
    {}
  ) as BreweriesByType;

  const groupedBreweriesSortedByName = Object.keys(breweriesByType)
    .sort()
    .reduce((acc: Brewery[], type) => {
      acc.push(
        ...breweriesByType[type].sort((a, b) => a.name.localeCompare(b.name))
      );
      return acc;
    }, []);

  return (
    <div>
      <header className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold pb-6">
          Large query, performant table
        </h2>
      </header>
      <PerformantTable allBreweries={groupedBreweriesSortedByName} />
    </div>
  );
};

export default LargeQueryPerformantTable;
