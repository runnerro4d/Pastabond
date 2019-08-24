import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';
import logo from '../PastaBond.png'

export class NavMenu extends Component {
  displayName = NavMenu.name

  render() {
      return (
          <Navbar fixedTop collapseOnSelect >
        <Navbar.Header>
                  <Navbar.Brand >
                      <Link to={'/'}><img className="img-fluid" src={logo} alt="" style={{ "width": "inherit", "height": "inherit","margin":"0%"}} /></Link>
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        </Navbar.Header>
            <Navbar.Collapse id="responsive-navbar-nav">
           <Nav className="mr-auto w-100 justify-content-end"> 
            <LinkContainer to={'/'} exact>
              <NavItem>
                <Glyphicon glyph='home' /> Home
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/loginandsignup'}>
              <NavItem>
               <Glyphicon glyph='search' /> Login and Signup 
              </NavItem>
            </LinkContainer>
            <LinkContainer to={'/fetchdata'}>
              <NavItem>
                <Glyphicon glyph='th-list' /> Fetch data
              </NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
