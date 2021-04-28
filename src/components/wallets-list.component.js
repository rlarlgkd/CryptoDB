import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Wallet = props => (
    <tr>
        <td>{props.wallet.username}</td>
        <td>{props.wallet.address}</td>
        <td>{props.wallet.created.substring(0,10)}</td>
        <td>
            <Link to={"/edit/"+props.wallet._id}>edit</Link> | <a href="#" onClick={() => { props.deleteWallet(props.wallet._id) }}>delete</a>
        </td>
    </tr>
)

export default class WalletsList extends Component {
    constructor(props) {
        super(props);

        this.deleteWallet = this.deleteWallet.bind(this)

        this.state = {wallets: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/wallets/')
            .then(response => {
                this.setState({ wallets: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteWallet(id) {
        axios.delete('http://localhost:5000/wallets/'+id)
            .then(response => { console.log(response.data)});
        this.setState({
            wallets: this.state.wallets.filter(el => el._id !== id)
        })
    }

    walletList() {
        return this.state.wallets.map(currentwallet => {
            return <Wallet wallet={currentwallet} deleteWallet={this.deleteWallet} key={currentwallet._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Wallets</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Username</th>
                        <th>Address</th>
                        <th>Created Date</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.walletList() }
                    </tbody>
                </table>
            </div>
        )
    }
}