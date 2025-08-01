import C from "./C";
const bStyles={
    width: "400px",
    boxShadow: "0 0 10px green",
    textAlign: "center",
    margin: "50px auto",
    padding: "50px",
};

function B({info}){
    return(
        <div style={bStyles}>
            <h2>B Component</h2>
            {/* <p>Data: {info}</p> */}
            <C info={info} />
        </div>
    );
}

export default B;