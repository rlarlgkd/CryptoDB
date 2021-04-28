import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class EditWallet extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeCreated = this.onChangeCreated.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            address: '',
            created: new Date(),
            users: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:5000/wallets/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    username: response.data.username,
                    address: response.data.address,
                    created: new Date(response.data.created)
                })
            })
            .catch(function (error) {
                console.log(error);
            })

        axios.get('http://localhost:5000/users/')
            .then(response => {
                if (response.data.length > 0) {
                    this.setState({
                        users: response.data.map(user => user.username),
                    })
                }
            })
            .catch((error) => {
                console.log(error);
            })

    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        })
    }

    onChangeCreated(date) {
        this.setState({
            created: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const wallet = {
            username: this.state.username,
            address: this.state.address,
            created: this.state.created
        }

        console.log(wallet);

        axios.post('http://localhost:5000/wallets/update/' + this.props.match.params.id, wallet)
            .then(res => console.log(res.data));

        window.location = '/';
    }

    render() {
        return (
            <div>
                <h3>Edit Wallet Log</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <select ref="userInput"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}>
                            {
                                this.state.users.map(function(user) {
                                    return <option
                                        key={user}
                                        value={user}>{user}
                                    </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Address: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.address}
                                onChange={this.onChangeAddress}
                        />
                    </div>

                    <div className="form-group">
                        <label>Created Date: </label>
                        <div>
                            <DatePicker
                                selected={this.state.created}
                                onChange={this.onChangeCreated}
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Edit Wallet Log" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}