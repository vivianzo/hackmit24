import React, { useState } from "react";
import data from "../CONSTANTS.json";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredData =
    searchTerm === ""
      ? []
      : (data || [])
          .filter((item) => {
            if (!item || !item.name) {
              return false;
            }
            const searchTermLower = searchTerm.toLowerCase();
            const nameLower = item.name.toLowerCase();
            return nameLower.startsWith(searchTermLower);
          })
          .slice(0, 10);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = (item) => {
    alert(`You selected ${item.name}`);
  };

  return (
    <div className="relative w-full max-w-md p-5">
      <input
        type="text"
        placeholder="Search medical equipment..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border p-2 w-full"
      />
      {searchTerm && (
        <div className="absolute top-full left-0 w-full max-h-60 overflow-auto bg-white border mt-1 z-10">
          {filteredData.length > 0 ? (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="p-2 border-b cursor-pointer"
                onClick={() => handleSearch(item)}
              >
                {item.name}
              </div>
            ))
          ) : (
            <p className="p-2">No results found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
