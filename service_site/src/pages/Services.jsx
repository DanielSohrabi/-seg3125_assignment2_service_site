import "./Services.css";
import ServiceCards from "../components/ServiceCards";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import wrenchIcon from "../../assets/wrench.png";
import tireIcon from "../../assets/tire.png";
import paintIcon from "../../assets/paint.png";
import { Link } from "react-router-dom";

import "./Services.css";

export default function Services() {
  const cardData = [
    {
      title: "General Repair",
      image: wrenchIcon,
      bullets: ["Gears", "Chain replacement", "Pedals", "Handle Bars"],
    },
    {
      title: "Tire Services",
      image: tireIcon,
      bullets: ["Rotation", "Pressure check", "Puncture Repair"],
    },
    {
      title: "Paint",
      image: paintIcon,
      bullets: ["Respray", "Wrapping", "Rust Removal", "Cleaning"],
    },
    {
      title: "Brakes",
      image: wrenchIcon,
      bullets: [
        "Pad Replacement",
        "Brake Line Reattachment",
        "Seized Brake Repair",
      ],
    },
  ];
  return (
    <Container fluid style={{ height: "calc(100vh - 50px)" }}>
      <h1 className="text-center servicesHeader">Services</h1>
      <Row className="d-flex justify-content-center gap-5 cardRow">
        {cardData.map((item, index) => {
          return (
            <ServiceCards
              key={index}
              title={item.title}
              image={item.image}
              bullets={item.bullets}
            />
          );
        })}
      </Row>
      <Row className="justify-content-center mt-8">
        <div className="d-grid" style={{ width: "70%" }}>
          <Button
            as={Link}
            to="/appointments"
            variant="primary"
            size="lg"
            className="bookButton"
          >
            Book an Appointment
          </Button>
        </div>
      </Row>
    </Container>
  );
}
