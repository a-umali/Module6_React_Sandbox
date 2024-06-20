import { useState } from 'react';
import './App.css';
import { Greetings, GreetingsHoC } from "./components/Greetings";

// COMPONENT FUNCTION NAME -> INITIALISE

  const App = () => {

// FUNCTIONS

// RETURN

  return (
    <>
        <GreetingsHoC name={"Alvin"}/>
        <p>I want to Welcome you</p>
        <GreetingsHoC/>
    </>
  );
};

export default App;
