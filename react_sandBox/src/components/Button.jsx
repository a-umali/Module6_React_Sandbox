import { useState } from "react";

export const Button = ({label}) =>  {
    // STATES & VARIABLES
    const [count, setCount] = useState(0);

    // FUNCTIONS
    const handleClick = () => {
        setCount((count) => count + 1);
      };
    
    // RETURN

    return(
        <div>
        <button onClick={handleClick}>
            {label} count: {count}
        </button>
        </div>
    );
};