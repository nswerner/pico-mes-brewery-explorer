import React from 'react';

// Define the shape of the context
type TypeFilterContextProps = {
  typeFilter: string;
  setTypeFilter: React.Dispatch<React.SetStateAction<string>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

// Create the context with default values
export const TypeFilterContext = React.createContext<TypeFilterContextProps>({
  typeFilter: '',
  setTypeFilter: () => {},
  setPage: () => {},
});
