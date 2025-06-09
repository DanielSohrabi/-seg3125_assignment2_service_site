import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import mechanicImage from "../../assets/mechanic.png";
import heroImg from "../../assets/josh-nuttall-XVTWFHcNIko-unsplash.jpg";

import "./Home.css";
import { Link } from "react-router";

function Home() {
  return (
    <>
      <div>
        <Container
          className="hero"
          fluid
          style={{
            backgroundSize: "cover",
            height: "500px",
            backgroundImage: `url(${heroImg})`,
            marginBottom: "25px",
          }}
        >
          <Row className="hero-row">
            <Col>
              <h1 className="hero-text">Jones Bicycle Repair</h1>
              <Button as={Link} to="/services" className="hero-button">
                View Services
              </Button>
            </Col>
          </Row>
        </Container>

        <Container className="home-introduction text-center" fluid>
          <Row>
            <Col xs={6} className="text-start">
              <h1 className="py-3">Who are we?</h1>
              <p>
                We are Jones Bicycle repair shop and we are repairsman at heart.
                We are here for any of your bicycle needs at any cost! No repair
                is too large for us and we can guarantee that. Come book an
                appointment with us today! Jones has been working with
                automobiles since age 15, with over 30 years experience working
                as a car mechanic. Seeking something new, Jones turned to
                bicycles, and opened up Jones Bike Repair.
              </p>
              <p>
                Whether you need to fix your grandson's bike, or fix your
                commuting bike, we have a service for you! No repair with us
                shall take longer than a day, and we will work for you on short
                notice! Jones is always happy to meet new customers and service
                the community. Book today!
              </p>
            </Col>
            <Col xs={6}>
              <img src={mechanicImage} fluid></img>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Home;
