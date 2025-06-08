
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './Home.css'


function Home() {
  return (
    <>
      <div>
        <Container className="hero" fluid>
            <Row className="hero-row">
                <Col>
                    <h1 className='hero-text'>Heading Text</h1>
                    <Button className='hero-button'>View Services</Button>
                </Col>

            </Row>
        </Container>

        <Container className="home-introduction">
            <Row>
                <Col xs={6}>
                    <h1>Who are we?</h1>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </Col>
                <Col xs={6}>
                    <Image src="../assets/mechanic.png" fluid></Image>
                </Col>
            </Row>
            
            
        </Container>
      </div>
    </>
  )
}

export default Home
