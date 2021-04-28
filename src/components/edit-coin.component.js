import React, { Component } from 'react';
import axios from 'axios';

export default class EditCoin extends Component {
    constructor(props){
        super(props);

        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeAmount = this.onChangeAmount.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCoinType = this.onChangeCoinType.bind(this);
        this.onChangeMarketCap = this.onChangeMarketCap.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeGenreType = this.onChangeGenreType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            address: '',
            amount: 0,
            price: 0,
            coinType: '',
            marketCap: 0,
            name: '',
            genreType: '',
            wallets: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/coins/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    address: response.data.address,
                    amount: response.data.amount,
                    price: response.data.price,
                    coinType: response.data.coinType,
                    marketCap: response.data.marketCap,
                    name: response.data.name,
                    genreType: response.data.genreType,
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/wallets/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        wallets: response.data.map(wallet => wallet.address),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }
    onChangeAmount(e) {
        this.setState({
            amount: e.target.value
        })
    }
    onChangePrice(e) {
        this.setState({
            price: e.target.value
        })
    }
    onChangeMarketCap(e) {
        this.setState({
            marketCap: e.target.value
        })
    }
    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    onChangeGenreType(e) {
        this.setState({
            genreType: e.target.value
        })
    }
    onChangeCoinType(e) {
        this.setState({
            coinType: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const coin = {
            address: this.state.address,
            amount: this.state.amount,
            price: this.state.price,
            coinType: this.state.coinType,
            marketCap: this.state.marketCap,
            name: this.state.name,
            genreType: this.state.genreType
        }
        console.log(coin);

        axios.post('http://localhost:5000/coins/update/', + this.props.match.params.id, coin)
            .then(res => console.log(res.data));

        // window.location = '/';
    }
    render() {
        return (
            <div>
                <h3>Edit New Coin</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Wallet Address: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}>
                            {
                                this.state.wallets.map(function(wallet) {
                                    return <option
                                        key={wallet}
                                        value={wallet}>{wallet}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Amount: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.amount}
                                onChange={this.onChangeAmount}
                        />
                    </div>
                    <div className="form-group">
                        <label>Price: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.price}
                                onChange={this.onChangePrice}
                        />
                    </div>
                    <div className="form-group">
                        <label>Coin Type: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.coinType}
                                onChange={this.onChangeCoinType}
                        />
                    </div>
                    <div className="form-group">
                        <label>marketCap: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.marketCap}
                                onChange={this.onChangeMarketCap}
                        />
                    </div>
                    <div className="form-group">
                        <label>name: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.name}
                                onChange={this.onChangeName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Genre: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.genreType}
                                onChange={this.onChangeGenreType}
                        />
                    </div>



                    <div className="form-group">
                        <input type="submit" value="Edit Coin" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }

}