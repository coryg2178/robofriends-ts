import React, { ChangeEventHandler } from 'react';

const SearchBox = ({
  searchChange,
}: {
  searchChange: ChangeEventHandler<HTMLInputElement>;
}) => {
  return (
    <div>
      <input
        className="pa3 ba b--green bg-lightest-blue"
        type="search"
        placeholder="search robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
