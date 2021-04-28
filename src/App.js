import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import WalletsList from "./components/wallets-list.component";
import EditWallet from "./components/edit-wallet.component";
import CreateWallet from "./components/create-wallet.component";
import CreateUser from "./components/create-user.component";
import EditUser from "./components/edit-user.component";
import UsersList from "./components/users-list.component";
import CreateCoin from "./components/create-coin-component";
import EditCoin from "./components/edit-coin.component";
import CoinsList from "./components/coins-list.component";

function App() {
    return (
        <Router>
        <div className ="container">
                <Navbar/>
                <br/>
                <Route path="/walletList" component={WalletsList} />
                <Route path="/edit/:id" component={EditWallet} />
                <Route path="/create" component={CreateWallet} />
                <Route path="/user" component={CreateUser} />
                <Route path="/editUser/:id" component={EditUser} />
                <Route path="/userList" component={UsersList} />
                <Route path="/createCoin" component={CreateCoin} />
                <Route path="/coinList" component={CoinsList} />
                <Route path="/editCoin" component={EditCoin} />
        </div>
        </Router>
    );
}

export default App;
