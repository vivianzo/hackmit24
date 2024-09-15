import React, { useState } from 'react';
import data from './CONSTANTS.json'; 

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');  // Manage the search term state

  // Filter the data based on the search term
  const filteredData = data.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    const nameLower = item.name.toLowerCase();
    return searchTerm && nameLower.startsWith(searchTermLower);
  }).slice(0, 10);  // Limit the results to 10

  // Handle input changes
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Handle search selection
  const handleSearch = (item) => {
    alert(`You selected ${item.name}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search medical equipment..."
        value={searchTerm}
        onChange={handleInputChange}
      />
      <div className="dropdown">
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <div
              key={item.id}
              className="dropdown-row"
              onClick={() => handleSearch(item)}
            >
              {item.name}
            </div>
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};
export default SearchBar;
