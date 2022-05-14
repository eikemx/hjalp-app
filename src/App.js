import React, { useState, useEffect } from "react";
import "./index.css";

import Card from "./components/Cards";
import Searchbar from "./Searchbar";
import NavBar from "./components/NavBar";

const App = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [hospitals, setHospitals] = useState()

  useEffect(() => {
    let url = `https://yelpbackend.herokuapp.com/api/hospitals`;
    if (search) {
      url += `/search/${search}`
    }

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Random 404");
        }
        return response.json();
      })
      .then((data) => {setHospitals(data)
      ;});
  }, [search]);


  if (!hospitals) return <h1>Loading...</h1>
  return (
    <>
    <div className="App">

     <div className="nav-bar">
      <NavBar />
    </div>
      <Searchbar setSearch={setSearch} />
      <div className="hospital-card">
        {hospitals.map((element, index) => (
          <Card hospitals={element} key={element._id} index={index}/>
        ))}
          <div className="searchbar">
            <Searchbar setSearch={setSearch} />
          </div>
        <div className="hospital-card">
          {hospitals.map((element, index) => (
            <Card hospitals={element} key={element.id} index={index}/>
          ))}
        </div>
    </div>
    </>

  );
};

export default App;
