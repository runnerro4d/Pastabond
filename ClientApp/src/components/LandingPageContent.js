import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { fetchData } from './FetchData';

export class LandingPageContent extends Component {
    render() {
        return (
            <div className="justify-content-center">
                <h1 style={{"textAlign":"center"}}>Find a roommate:</h1>
                <Col md={3}><label >Preferences:</label></Col>
                <Col md={9} style={{ "padding": "0%", "paddingRight": "5%" }}>
                    <Col md={3}><label id= "No Smokers" className="radio-inline"><input className="form-check-input" type="checkbox"  /> No Smokers </label></Col>
                    <Col md={3}><label id= "Neat freaks" className="radio-inline"><input className="form-check-input" type="checkbox"  /> Neat freaks </label></Col>
                    <Col md={3}><label id= "No Pets" className="radio-inline"><input className="form-check-input" type="checkbox" /> No Pets </label></Col>
                    <Col md={3}><label id= "Vegans" className="radio-inline"><input className="form-check-input" type="checkbox" /> Vegans </label></Col>
                    <Col md={3}><label id= "Halal" className="radio-inline"><input className="form-check-input" type="checkbox" /> Halal </label></Col>
                    
                </Col>

                <input className="form-control" type="text" placeholder="Suburb" />

                <Col md={3}><button type="submit" className="btn btn-primary" onClick={fetchData()} style={{ "width": "" }}> <Glyphicon glyph='search' /> Search</button></Col>
            </div>
            );
    }
}