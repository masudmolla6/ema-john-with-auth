import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';

const Header = () => {
    const {user,logOut} = useContext(AuthContext);
    console.log(user);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
            console.log(error)
        })
    }


    return (
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
          <Link>{user && <span>welcome {user.email} <button onClick={handleLogOut}>Sign Out</button></span>}</Link>
        </div>
      </nav>
    );
};

export default Header;