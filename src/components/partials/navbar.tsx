import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <div id="brand-logo">Eather</div>

            <nav>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
            </nav>
        </header>
    );
}

export default Navbar;