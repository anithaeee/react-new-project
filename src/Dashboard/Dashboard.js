import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import '../../src/Dashboard/Dashboard.css';
import { useState } from "react";
import 'primereact/resources/themes/lara-light-blue/theme.css'; 
const Dashboard = () => {
  const [Tile1, setTile1] = useState({});
  const [Tile2, setTile2] = useState({});
  return (
    <>
      <div className="background">
       <h1>featured tiles</h1>
       <div className="row">

        <div className="box" > 
       <ul className="ul-list">
        <li>Name</li>
        <li>Age</li>
        <li>Employed</li>
        <li>Company</li>
       </ul>
        </div>
        
        <div className="box" > 
        <ul className="ul-list">
        <li>Name</li>
        <li>Age</li>
        <li>Employed</li>
        <li>Company</li>
       </ul>
        </div>

       </div>
      </div>
    </>
  );
};

export default Dashboard;
