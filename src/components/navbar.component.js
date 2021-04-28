import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/walletList" className="nav-link">Wallet List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">Create wallet</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">Create User</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/userList" className="nav-link">User List</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/createCoin" className="nav-link">Create Coin</Link>
                        </li>

                        <li className="navbar-item">
                            <Link to="/coinList" className="nav-link">Coin List</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}