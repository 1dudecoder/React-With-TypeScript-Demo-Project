import * as React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
        <>
            <Navbar bg="black" fixed='top' variant='dark'>
                <Container>
                <Navbar.Brand href="#home">React Notes App with typescript</Navbar.Brand>
                </Container>
            </Navbar>

            <br />


            </>
  );
};

export default Header;
