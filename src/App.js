import React, {useState} from 'react';

import './index.css';

import hospitalData from "./hospitals.json";

import Card from './components/Cards';
// import NavBar from "./components/NavBar";

const App = () => {

  console.log(hospitalData);

  return (
    <div className="App">
      {/* <NavBar /> */}
      <div className="hospital-card">
        {hospitalData.map((element, index) => (
          <Card hospitals={element} key={element.id} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default App;
