

export const Greetings = ({name}) => {

    //STATE & PROPS

    var welcomeString = `${name ? name : "Hello"} World`;

    //array of string

    // FUNCTIONS


    // RETURN

    return (
            <div>
            <h1>{welcomeString}</h1>
            </div>
    );
};

export const GreetingsHoC = ({ name , children}) => {

    // STATE AND VAR

    var welcomeString = `${name},`;

    // FUNCTIONS

    // RETURN
    
    return (
      <div>
        <h1>{welcomeString}</h1>
        {children}
      </div>
    );
  };