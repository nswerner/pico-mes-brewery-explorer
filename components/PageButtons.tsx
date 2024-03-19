import React from 'react';

type PageButtonsProps = {
  page: number;
  setPage: (page: number) => void;
  currentResultLength: number;
};

const enabledStlye =
  'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded';

const disabledStyle = 'bg-gray-500 text-white font-bold py-2 px-4 rounded';

const PageButtons: React.FC<PageButtonsProps> = ({
  page,
  setPage,
  currentResultLength,
}) => {
  return (
    <div className="w-full flex justify-around mt-8">
      <button
        disabled={page === 1}
        className={page === 1 ? disabledStyle : enabledStlye}
        onClick={() => setPage(page - 1)}
      >
        &lt;
      </button>
      <span>page {page}</span>
      <button
        disabled={currentResultLength < 10}
        className={currentResultLength < 10 ? disabledStyle : enabledStlye}
        onClick={() => setPage(page + 1)}
      >
        &gt;
      </button>
    </div>
  );
};

export default PageButtons;
