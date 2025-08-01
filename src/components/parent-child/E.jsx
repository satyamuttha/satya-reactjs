
const eStyles={
    width: "150px",
    boxShadow: "0 0 10px maroon",
    textAlign: "center",
    margin: "50px auto",
    padding: "30px",
};

function E({info}){
    return(
        <div style={eStyles}>
            <h2>E Component</h2>
            <p>Data: {info}</p>
        </div>
    );
}

export default E;