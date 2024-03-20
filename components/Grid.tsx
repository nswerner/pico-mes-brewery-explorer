import Image from 'next/image';
import ButtonWithDropdownFilter from './ButtonWithDropdownFilter';

const Grid = ({ breweries }: { breweries: { [k: string]: string }[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {breweries.map(({ id, name, country, brewery_type }) => (
        <div
          key={id}
          className="bg-white border border-gray-200 rounded-lg p-4 h-[200px] flex flex-col justify-end shadow-md"
        >
          <div className="flex justify-center m-2 mb-4">
            <Image src="/beer.png" alt="beer" width={100} height={100} />
          </div>

          <h3 className="text-sm font-bold overflow-clip">{name}</h3>
          <p className="text-gray-600">
            {brewery_type} - {country}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Grid;
