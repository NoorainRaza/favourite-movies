import React from "react";
import { Link } from "react-router-dom";
// useHistory instead of Link 
const Header = () => {
    return (
        <div>
            <Link to="/">Movies List</Link>
            <br />
            <Link to="/favourite-movies">Favourite Movies</Link>
        </div>
    );
};

export default Header;
