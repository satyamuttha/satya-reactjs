import "./Nav.css";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <div className="nav flexContainer">
            <div className="leftPanel flexContainer">React Routing</div>
            <div className="rightPanel flexContainer">
                <Link to="/">Home</Link>

                <Link to="/products">Products</Link>
                <Link to="/allproducts">AllProducts</Link> 
                <Link to="/counter">Counter</Link>

                {/* <Link to="/counter2">Counter2</Link> */}
                {/* <Link to="/imagecomp">ImageComp</Link> */}
                <Link to="/usernames">UserNames</Link>
            </div>
        </div>
    );
}
export default Nav;

