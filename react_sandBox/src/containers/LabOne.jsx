import { Greetings, GreetingsHoC } from "../components/Greetings"


 export const LabOne = () => {

        const labQuestionContainerStyle = {
        backgroundcolor: "blue", 
        color: "black", 
        padding: "5px"
        }

    return (
        <div style={{margin: "5px"}}>
            <LabelAndContent labelText={"Lab 1a & b"}>
                <Greetings name={Alvin} />
            </LabelAndContent>

            <LabelAndContent labelText={"Lab 1c"}>
                <GreetingsHoC name={"Alvin"}>
                <p>I want to Welcome you</p>
            </GreetingsHoC>
            </LabelAndContent>
        </div>
    );
};

const LabelAndContent = ({labelText, children}) => {

    const labelStyle = {
        textAlign: "left",
        };


    return(
        <>
            <h6 style={labelStyle}>{labelText}</h6>
            {children}
        </>
    );
};