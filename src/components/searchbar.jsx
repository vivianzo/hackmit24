import React, {useState, useEffect} from 'react'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);  
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //ADD API
    fetch('https://api.example.com/medical-equipment')
      .then((response) => response.json())
      .then((data) => {
        setData(data);  
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []); 

  const filteredData = data.filter((item) => {
    const searchTermLower = searchTerm.toLowerCase();
    const nameLower = item.name.toLowerCase();
    return searchTerm && nameLower.startsWith(searchTermLower);
  }).slice(0, 10);


  const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
  };
  const handleSearch = (item) => {
    alert(`You selected ${item.name}`);
  };
  if (loading) {
    return <p>Loading data...</p>; 
  }

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