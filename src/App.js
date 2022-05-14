import React, { useState, useEffect } from "react";
import {Routes, Route } from "react-router-dom";
import "./index.css";

import Card from "./components/Cards";
import Searchbar from "./components/Searchbar";
import NavBar from "./components/NavBar";
import Error from "./components/Error";
import LoadingSpinner from "./components/LoadingSpinner";
import HospitalPage from "./components/HospitalPage";
import HospitalsWrapper from "./components/HospitalsWrapper"

const App = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [hospitals, setHospitals] = useState()

  useEffect(() => {
    
    setIsLoading(true);
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
      .then((data) => {
        setHospitals(data);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, [search]);


  const handleLogoClick = () => {
    setSearch("")

  }

  
  if (isError) {
    return <Error />;
  }


  if (!hospitals) return <p className="loader"><LoadingSpinner /></p>
  return (
    <>
    <div className="App">
     <div className="nav-bar">
      <NavBar handleLogoClick={handleLogoClick}/>
      </div>
          <div className="searchbar">
            <Searchbar setSearch={setSearch} />
          </div>
          {/* {isLoading && <LoadingSpinner />} */}
        <div className="hospital-card">
{        <Routes>
            <Route path="/" element={<HospitalsWrapper hospitals={hospitals} />} />
            <Route path="/hospitals/:id" element={<HospitalsWrapper hospitals={hospitals} />} />

            {/* <Route
              path="/hospitals/:studentId"
              element={<HospitalPage students={students} />}
            /> */}
            </Routes>}
    
        </div>
    </div>
    </>

  );
};

export default App;
