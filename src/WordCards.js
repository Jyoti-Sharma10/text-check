import { Card, Container, Row, Col } from 'react-bootstrap';
import './global.css';

function WordCards({ data }) {
  return (
    <Container>
    <h2 className='text-center my-5'>Showing Top 5 mostly</h2>
    <Row className="my-2">
      <Col xs={12} sm={6} md={6} lg={6}>
        <h3 className="my-3 text-center">1. Occurring Words</h3>
        {data.top5Words.map((word, index) => (
          <Card key={index} className="rectangular-card" >
            <Card.Body style={{ textAlign: 'center' }}>{word}</Card.Body>
          </Card>
        ))}
      </Col>
      <Col xs={12} sm={6} md={6} lg={6}>
        <h3 className="my-3 text-center">2. Co-occurring Word Pairs</h3>
        {data.top5CooccurringWordPairs.map((wordPair, index) => (
          <Card key={index} className="rectangular-card">
            <Card.Body style={{ textAlign: 'center' }}>{wordPair}</Card.Body>
          </Card>
        ))}
      </Col>
    </Row>
  </Container>
  
  );
}

export default WordCards;
