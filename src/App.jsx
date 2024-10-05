'use client'
import React, { useState } from 'react'
import './all.min.css'
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Trips from "./components/Trips/Trips";
import Footer from './components/Footer/Footer';
import Details from './components/Details/Details';
const App = () => {

  const [search, setSearch] = useState("")

  const [showDetails, setShowDetails] = useState(false);

  const toggleDetiles = () => {
    setShowDetails(!showDetails)
  }

  const [detailsItem, setDetailsItem] = useState();

  return (
    <>
      {
        showDetails && <Details setShowDetails={setShowDetails} detailsItem={detailsItem} />
      }
      <div className="app">
        <NavBar />
        <Header setSearch={setSearch} />
        <Trips search={search} toggleDetiles={toggleDetiles} setDetailsItem={setDetailsItem} />
        <Footer />
    </div>
    </>
  );
}

export default App