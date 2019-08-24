import React, { Component } from 'react';

export class Auth extends Component {
    displayName = Auth.name

    constructor(props) {
        super(props);
        this.state = { currentCount: 0 };
        this.incrementCounter = this.incrementCounter.bind(this);
    }

    incrementCounter() {
        this.setState({
            currentCount: this.state.currentCount + 1
        });
    }

    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6">
                        <form>
                                <label>
                                    <div class="row">
                                    <div class="col">
                                        Email:
                                    </div>
                                    <div class="col">
                                        <input type="email" name="email" />
                                        </div>
                                        </div>
                                </label>
                            <div class="row">
                                <label>
                                    Password:
                                    <input type="password" name="password" />
                                </label>
                            </div>
                            <div class="row">
                            <lable>
                                Remember me:
                                <input type="checkbox" name="rememberMe" />
                                </lable>
                            </div>
                            <div class="row">
                                <input type="submit" value="Log in" />
                            </div>
                        </form>
                    </div>

                    <div class="col-md-6">
                        <form>
                            <label>
                                Email:
                                <input type="email" name="email" />
                            </label>
                            <label>
                                Password:
                                <input type="password" name="password" />
                            </label>
                            <label>
                                Name:
                                <input type="text" name="name" />
                            </label>
                            <label>
                                Age:
                                <input type="text" name="age" />
                            </label>
                            <label>
                                Phone number:
                                <input type="text" name="" />
                            </label>
                            <lable>
                                Remember me:
                                <input type="checkbox" name="rememberMe" />
                            </lable>
                            <select value={this.state.gender} onChange={this.handleChange}>
                                <option name="male">Male</option>
                                <option name="female">Female</option>
                            </select>
                            <input type="submit" value="Sign up" />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
