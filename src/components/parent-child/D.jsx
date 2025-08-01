import E from "./E";
const dStyles={
    width: "200px",
    boxShadow: "0 0 10px maroon",
    textAlign: "center",
    margin: "50px auto",
    padding: "50px",
};

function D({info}){
    return(
        <div style={dStyles}>
            <h2>D Component</h2>
            {/* <p>Data: {info}</p> */}
            <E info={info} />
        </div>
    );
}

export default D;