import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Coin = props => (
    <tr>
        <td>{props.coin.address}</td>
        <td>{props.coin.coinType}</td>
        <td>{props.coin.amount}</td>
        <td>{props.coin.price}</td>
        <td>
            <Link to={"/editCoin/"+props.coin._id}>edit</Link> | <a href="#" onClick={() => { props.deleteCoin(props.coin._id) }}>delete</a>
        </td>
    </tr>
)

export default class CoinsList extends Component {
    constructor(props) {
        super(props);

        this.deleteCoin = this.deleteCoin.bind(this)

        this.state = {coins: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/coins/')
            .then(response => {
                this.setState({ coins: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteCoin(id) {
        axios.delete('http://localhost:5000/coins/'+id)
            .then(response => { console.log(response.data)});
        this.setState({
            coins: this.state.coins.filter(el => el._id !== id)
        })
    }

    coinList() {
        return this.state.coins.map(currentcoin => {
            return <Coin coin={currentcoin} deleteCoin={this.deleteCoin} key={currentcoin._id}/>;
        })
    }

    render() {
        return (
            <div>
                <h3>Logged Coins</h3>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th>Address</th>
                        <th>Coin Type</th>
                        <th>Amount</th>
                        <th>Price</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    { this.coinList() }
                    </tbody>
                </table>
            </div>
        )
    }
}