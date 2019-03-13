import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className='mw9 center ph3-ns'>
      <input
        className='pa3 bg-color bn-border'
        type='search'
        placeholder='Search robots..'
        onChange={searchChange}
      />
    </div>
  );
}

export default SearchBox;