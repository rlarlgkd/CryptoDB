import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateUser extends Component {
    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeFirstName = this.onChangeFirstName.bind(this);
        this.onChangeLastName = this.onChangeLastName.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDateOfBirth = this.onChangeDateOfBirth.bind(this);
        this.onChangeAsset = this.onChangeAsset.bind(this);
        this.onChangeProofOfWork = this.onChangeProofOfWork.bind(this);
        this.onChangeUserType = this.onChangeUserType.bind(this);
        this.onSubmit = this.onSubmit.bind(this);


        this.state = {
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            dateOfBirth:new Date(),
            proofOfWork: 0,
            asset: 0,
            userType: ''
        }
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        })
    }

    onChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }

    onChangePassword(e) {
        this.setState({
            password: e.target.value
        })
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onChangeUserType(e) {
        this.setState({
            userType: e.target.value
        })
    }

    onChangeAsset(e) {
        this.setState({
            asset: e.target.value
        })
    }

    onChangeProofOfWork(e) {
        this.setState({
            proofOfWork: e.target.value
        })
    }

    onChangeDateOfBirth(date) {
        this.setState({
            DateOfBirth: date
        })
    }

    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            password: this.state.password,
            email: this.state.email,
            dateOfBirth: this.state.dateOfBirth,
            proofOfWork: this.state.proofOfWork,
            asset: this.state.asset,
            userType: this.state.userType
        }

        console.log(user);
        axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        this.setState({
            username: '',
            firstName: '',
            lastName: '',
            password: '',
            email: '',
            dateOfBirth:new Date(),
            proofOfWork: 0,
            asset: 0,
            userType: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Create New User</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Username: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.username}
                                onChange={this.onChangeUsername}
                        />
                    </div>

                    <div className="form-group">
                        <label>First Name: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.onChangeFirstName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Last Name: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.onChangeLastName}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.email}
                                onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date of birth: </label>
                        <div>
                            <DatePicker
                                selected={this.state.dateOfBirth}
                                onChange={this.onChangeDateOfBirth}
                            />
                        </div>
                    </div>
                    {/*<div className="form-group">*/}
                    {/*    <label>User type: </label>*/}
                    {/*    <select ref="usertype"*/}
                    {/*            required*/}
                    {/*            className="form-control"*/}
                    {/*            value={this.state.userType}*/}
                    {/*            onChange={this.onChangeUserType}>*/}
                    {/*        {*/}
                    {/*            this.state.userType.map(function(user) {*/}
                    {/*                return <option*/}
                    {/*                    key={user}*/}
                    {/*                    value={user}>{user}*/}
                    {/*                </option>;*/}
                    {/*            })*/}
                    {/*        }*/}
                    {/*    </select>*/}
                    {/*</div>*/}
                    <div className="form-group">
                        <label>user type: </label>
                        <input  type="text"
                                required
                                className="form-control"
                                value={this.state.userType}
                                onChange={this.onChangeUserType}
                        />
                    </div>
                    <div className="form-group">
                        <label>Asset: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.asset}
                                onChange={this.onChangeAsset}
                        />
                    </div>
                    <div className="form-group">
                        <label>Proof of Work: </label>
                        <input  type="text"

                                className="form-control"
                                value={this.state.proofOfWork}
                                onChange={this.onChangeProofOfWork}
                        />
                    </div>




                    <div className="form-group">
                        <input type="submit" value="Create User" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}