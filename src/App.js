import React from "react";
import Box from "./components/Box";
import Button from "./components/Button"
function App(){
  name="alex"
  return(
  <div className="view-home">
    <h1 style={{color:'red'}}>Bonjour {this.name} </h1>
    <button>Appuyez</button>
    <h2>Rebonjour</h2>
    
    <Box/>
    <Box/>
    <Box/>
    <Box/>
    <Box/>
    <Box/>
    <Box/>
    <Box/>


  </div>
  );
}
export default App