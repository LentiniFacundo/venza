import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import HomeMain from './Components/HomeMain/HomeMain';
import Services from './Components/Services/Services';

function App() {

  return (
    <>
      <Header>
        <NavBar/>
      </Header>
      <HomeMain/>
      <Services/>
    </>
  );
}

export default App
