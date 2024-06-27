import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function BasicExample({cardTitle,Description,ButtonLink,imageAddress}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageAddress} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>
          {Description}
        </Card.Text>
        <Button variant="dark" href={ButtonLink}>Visit Project</Button>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;