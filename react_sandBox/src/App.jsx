import { useState } from 'react';
import './App.css';
import { Greetings, GreetingsHoC } from "./components/Greetings";
import { LabTwo } from './containers/LabTwo';
import { LabOne } from './containers/LabOne';
import { LabThree } from './containers/LabThree';
import { LabFour } from './containers/LabFour';

// COMPONENT FUNCTION NAME -> INITIALISE

  const App = () => {

// STATES & VARIABLES
    const [contentName, setContentName] = useState("");

    const contentDictionary = {
      labOne: "Lab 1",
      labTwo: "Lab 2",
    };

const contentConfig = [{ lab: " Lab 1"},{ lab: " Lab 2"},{ lab: " Lab 3"},{ lab: " Lab 4"},];


// FUNCTIONS
    const displayHandler = () => {
      switch (contentName) {
        case contentConfig[0].lab:
          return <LabOne />;
        case contentConfig[1].lab:
          return <LabTwo />;
        case contentConfig[2].lab:
          return <LabThree />;
        case contentConfig[2].lab:
          return <LabFour />;
        default:
          return <div> Click on a Lab button to see the content</div>;
      }

    };

    const buttonConstructor = () => {
      const buttonElementArray = contentConfig.map((content) => {
        return (
          <button
            key={content.lab}
            onClick={() => setContentName(content.lab)}
            style={{ margin: "5px" }}
          >
            {content.lab}
          </button>
        );
      });

      return buttonElementArray;
    };


// RETURN

const buttonTest = () => {
  return <button>TEST</button>
}

  return (
    <>
    <div className="main-app-container"> 
      <p>
        Welcome page with buttons for each labs
      </p>

        <div style={{display: 'flex', justifyContent: 'space-evenly'}}>

        {buttonConstructor()}

        </div>

        <div style={{display: "flex", width: "90vw", border: "red 1px solid"}}>
          {displayHandler()}
        </div>

    </div>
    </>
  );

};

export default App;
