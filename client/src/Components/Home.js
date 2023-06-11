import React from 'react';
import NavBar from './NavBar';
import Search from './Search';

const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '10px'}}>
        <Search />
      </div>
    </div>
  );
};

export default Home;