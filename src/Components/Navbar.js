import React, { Component } from 'react';
import './CustomNavbar.css';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

import { NavLink } from 'react-router-dom';



class NavbarMenu extends Component {
    render() {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        Fundamentals of IT
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1}>
                            <NavLink exact to="/">Home</NavLink>
                        </NavItem>
                        <NavItem eventKey={2}>

                            <NavLink to="/topic">Topic</NavLink>
                        </NavItem>
                        <NavItem eventKey={3}>
                            <NavLink to="/IeeeJournal">IEEE Journal</NavLink>
                        </NavItem>


                    </Nav>
                    <Nav pullRight>
                        <NavDropdown eventKey={3} title="TEAM" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1}><NavLink to="/pushkartandon">Pushkar Tandon</NavLink></MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.2}><NavLink to="/hardiksikka">Hardik Sikka</NavLink></MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavbarMenu;