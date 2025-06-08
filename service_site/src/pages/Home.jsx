
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';

function Home() {
  return (
    <>
      <div>
        <Container fluid>

          <h1 className='hero-button'>Heading Text</h1>
          <Button className='view-services'>View Services</Button>
          <Image src="../assets/pexels-luftschnitzel-100582.jpg" fluid></Image>
        </Container>
      </div>
    </>
  )
}

export default Home
