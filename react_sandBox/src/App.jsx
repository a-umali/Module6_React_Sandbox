import { useState } from 'react'
import {Button} from "./components/Button"
import {HoCLabel} from "./components/HoCLabel"
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// COMPONENT FUNCTION NAME -> INITIALISE
// ALTERNATIVE FOR FUNCTION APP ()=====> 
  // const [count, setCount] = useState(0)
  // const [name, setName] = useState("Alvin");

  const App = () => {

// FUNCTIONS

// RETURN

  return (
    <>
      <div className="our-first-container">test</div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{name}'s React page</h1>
      <div className="card">
        <HoCLabel label="My First button"></HoCLabel>
        <Button></Button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  );
};

export default App
