import React, { Component } from 'react';

export class LandingPageContent extends Component {
    render() {
        return (
            <div className="justify-content-center">
                <h1 style={{"textAlign":"center"}}>Find a roommate:</h1>
                <div className="row">
                    <button className="btn btn-primary dropdown-toggle mr-4" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Basic dropdown</button>

                    <div className="dropdown-menu">
                        <a className="dropdown-item" >Action</a>
                        <a className="dropdown-item" >Another action</a>
                        <a className="dropdown-item" >Something else here</a>
                        <div className="dropdown-divider"></div>
                        <a className="dropdown-item" >Separated link</a>
                    </div>
                    </div>
                   
                <input type="text" className="form-control" />
                </div>
            );
    }
}