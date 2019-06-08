import React, { Component } from 'react'
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  class Nave extends React.Component {

    render() {
      return (
        <div className="Nave" class="nave">
          <Navbar light expand="md" >
            <NavbarBrand style={{color: 'white', textDecoration: 'none'}} className="NavbarBrand" href = "/" >IntegraTI</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="/" >Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="/sejavisto/"> Seja Visto</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="/atualizese/"> Atualize-se</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="/aboutus/"> About us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="/faqs/"> FAQs</NavLink>
                </NavItem>
                {/*<UncontrolledDropdown nav inNavbar >
                  <DropdownToggle nav caret style={{color: 'white', textDecoration: 'none'}}>
                    Opções
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>1</DropdownItem>
                    <DropdownItem>2</DropdownItem>
                    <DropdownItem>3</DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>*/}
              </Nav>
            
          </Navbar>
        </div>
      );
    }
  }
  
  export default Nave