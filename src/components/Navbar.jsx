import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <Link to="/list">See users</Link>
            <Link to="/">Register</Link>
            <Link to="/break">Break</Link>
        </nav>
    );
};

export default Navbar;