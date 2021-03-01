import React from 'react';
import './Header.css'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";


const Header = () => {
    return (
        <div className="headerStyle">

        <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/home">Home</Nav.Link>
                    <Nav.Link href="/cricketer">Cricketer</Nav.Link>
                    <Nav.Link href="/team">Team</Nav.Link>
                </Nav>

            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
        
        <h1>IPL Auction 2021</h1>
        
 
          {/* <nav>
               <a href="/home">Home</a>
               <a href="/cricketer">Cricketer</a>
               <a href="/team">Team</a>
           </nav> */}
        </div>
    );
};

export default Header;