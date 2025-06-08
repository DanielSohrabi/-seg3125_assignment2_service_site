import Card from 'react-bootstrap/Card';
import './ServiceCards.css'

export default function ServiceCards({title, image, bullets}){
    return (
    <>
             
    <Card style={{ width: '18rem', height: '24rem' }}>
      <Card.Body>
        <div className="text-center">
        <Card.Title className='cardTitle'>{title}</Card.Title>
        <img src={image} alt="Wrench Icon" className='cardIcon'/>
      </div>
        <Card.Text className='cardText'>
          <ul>
            {bullets.map((item, index) => (
              <li key={index} className='cardListItem'>{item}</li>
            ))}
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
      </>
    )
}