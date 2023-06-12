import React from 'react';
import NavBar from './NavBar';
import Search from './Search';
import CardVideoGame from './CardVideoGame';
const Home = () => {
  return (
    <div>
      <NavBar />
      <div style={{ marginTop: '10px'}}>
        <Search />
      </div>
      <div>
        <CardVideoGame/>
      </div>
    </div>
  );
};

export default Home;