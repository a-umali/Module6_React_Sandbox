import { useState } from "react";

export const Emoji = () => {

const [mood, setMood] = useState("happy");
const happy = '(づ｡◕‿‿◕｡)づ';
const sad = '( ಠ ͜ʖ ರೃ)';

const changeMood = () => {
    console.log("I'm feeling", mood);
        if (mood === "happy") {
            setMood("sad");
            return;
        }

        setMood(happy);
};

const displayHandler = () => {
    if (mood === happy) {
        return happy;
    }

    if (mood === sad) {
        return sad;
    }
};

return (
<>
        <div>
        {displayHandler()}
        <button onClick={changeMood}>Change Mood</button>
        </div>
</>
);
};




//     const emojis = ['(づ｡◕‿‿◕｡)づ', '( ಠ ͜ʖ ರೃ)', 'ಠ_ಠ', '≧◡≦', '(◔_◔)'];
//     const randomEmoji = Math.floor(Math.random() * emojis.length);
//     setEmoji(randomEmoji);
    
//     return <div>{emojis[randomEmoji]}
//     <button onClick={randomEmoji}> Change Mood </button></div>;
// };
