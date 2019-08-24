import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';




export class LoginandSignup extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Col md={6}><div className="card" style={{ "backgroundColor": "#edeae5", "paddingLeft": "5%", "paddingTop":"1%" }}>
                    <h1>Login</h1>
                    <p>Log in to meet future room mates</p>

                    <form className="form-group">

                    <Col md={3}><label for="email">Email</label></Col>
                    <Col md={9}><input className=" form-control" type="text" placeholder="Enter Email" name="email" required /></Col><br />

                    <Col md={3}><label for="psw">Password</label></Col>
                    <Col md={9}><input className=" form-control"type="password" placeholder="Enter Password" name="psw" required /></Col><br />


                        <Col md={7}><button type="submit" className="btn btn-primary">Login</button></Col>
                    <label>
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me </label><br /><br/>
                    </form>

                </div>
                </Col>

                <Col md={6}><div className="card" style={{ "backgroundColor": "#edeae5", "paddingLeft": "5%", "paddingTop": "1%" }}>
                    <h1>Sign Up</h1>
                    <p>Please fill in this form to create an account.</p>
                    <form className="form-group">
                        <Col md={3}><label >Email</label></Col>
                        <Col md={9}><input className=" form-control" type="text" placeholder="Enter Email" name="email" required /></Col><br />

                        <Col md={3}><label >Name</label></Col>
                        <Col md={9}><input className=" form-control" type="text" placeholder="Enter Name" name="name" required /></Col><br />

                        <Col md={3}><label >Age</label></Col>
                        <Col md={9}><input className=" form-control" type="number" placeholder="Enter Age" name="age" required /></Col><br />

                        <Col md={3}><label >Address</label></Col>
                        <Col md={9}><input className=" form-control" type="text" placeholder="Enter Address" name="address" required /></Col><br />

                        <Col md={3}><label >Occupation</label></Col>
                        <Col md={9}><input className=" form-control" type="text" placeholder="Enter Occupation" name="psw" required /></Col><br />

                        <Col md={3}><label >Gender</label></Col>
                        <Col md={9} style={{ "padding": "0%", "paddingRight":"5%"}}>
                            <Col md={3}><label className="radio-inline"><input type="radio" name="optradio" /> Male </label></Col>
                            <Col md={3}><label className="radio-inline"><input type="radio" name="optradio" /> Female </label></Col>
                            <Col md={3}><label className="radio-inline"><input type="radio" name="optradio" /> Other </label></Col>
                        </Col>


                        <Col md={7}><button type="submit" className="btn btn-primary">Submit</button></Col>
                        <label>
                            <input className="form-check-input" type="checkbox" name="remember" /> Remember me </label><br /><br />
                    </form>

                </div></Col>


                </div>
            );
    }
}
