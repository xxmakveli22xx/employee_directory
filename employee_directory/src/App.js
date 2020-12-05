import React from "react";
import './App.css';
import Wrapper from "./components/Wrapper.js";
import Main from "./components/Main.js";
import Header from "./components/Header.js";
//import seeds from "./components/seeds/seeds.json";

function App() {
  return (
    <div>
      <Wrapper>
        <Header/>
    
        <Main/>
      </Wrapper>
    </div>
  );
}

export default App;
