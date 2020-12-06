import React from 'react';
import employeeSeeds from "./seeds/seeds.json";
import "../styles/Wrapper.css";
function Wrapper({ employeeSeeds }) {
  return (
      <div className="wrapper">
        { employeeSeeds }
        
      </div>
  );
}
export default Wrapper;