import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

  class Nave extends React.Component {

    render() {
      return (
        <div className="Nave" class="nave">
          <Navbar light expand="md" >
            <NavbarBrand style={{color: 'white', textDecoration: 'none'}} className="NavbarBrand" href = "/" >IntegraTI</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem >
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="#/home" >Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="#/sejavisto"> Seja Visto</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="#/atualizese"> Atualize-se</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="#/aboutus"> About us</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink style={{color: 'white', textDecoration: 'none'}} href="#/faqs"> FAQs</NavLink>
                </NavItem>
              </Nav>  
          </Navbar>
        </div>
      );
    }
  }
  
  export default Nave