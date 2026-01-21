import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import HomeMain from './Components/HomeMain/HomeMain';

function App() {

  return (
    <>
      <Header>
        <NavBar/>
      </Header>
      <HomeMain/>
    </>
  );
}

export default App
