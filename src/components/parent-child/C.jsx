import D from "./D";
const cStyles={
    width: "300px",
    boxShadow: "0 0 10px blue",
    textAlign: "center",
    margin: "50px auto",
    padding: "50px",
};

function C({info}){
    return(
        <div style={cStyles}>
            <h2>C Component</h2>
            {/* <p>Data: {info}</p> */}
            <D info={info} />
        </div>
    );
}

export default C;