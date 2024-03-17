import './Searchbar.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Searchbar = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (value) => {
    if (value === 'arts'||value==='Arts') {
      navigate('/HandiCrafts');
    } else if (value === 'plants'||value==='Plants') {
      navigate('/Plants');
    } else {
      navigate('/HandiCrafts');
    }
  };

  return (
    <div className='search'>
      <input
        type="text"
        placeholder="Search Arts or Plants or HandiCrafts"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={() => handleSearch(searchQuery)}>Search</button>
    </div>
  );
};

export default Searchbar;
