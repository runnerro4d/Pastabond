import React, { Component } from 'react';
import { Col, Grid, Row } from 'react-bootstrap';
import { NavMenu } from './NavMenu';

export class Layout extends Component {
  displayName = Layout.name

  render() {
    return (
      <Grid fluid>
            <NavMenu />
            <Row>
          <Col sm={2}>
            
                </Col>
                <Col sm={8} style={{ "marginTop": "5%" }}>
            {this.props.children}
                </Col>
                <Col sm={2}>
                    
                </Col>

        </Row>
      </Grid>
    );
  }
}
