import {NavLink} from "react-router-dom";

const Toolbar = () => {
    return (
        <nav className="navbar">
            <NavLink to="/">
            <p className="navbar-brand">
                Tv Search
            </p>
            </NavLink>
        </nav>
    );
};

export default Toolbar;