import React from 'react';
import './styles/App.scss';
import CustomCard from './components/CustomCard';
import { Container, Row, Col}  from 'react-bootstrap';

function App() {
  return (
    <Container className="App">
      <Row>
        <Col xs={12} sm={5} md={4} lg={2}>
          <CustomCard
            heading='Test heading'
            subheading='subheading'
            background='background'
            image='image'
            price={5000}
          />
        </Col>
        <Col xs={12} sm={5} md={4} lg={2}>
          <CustomCard
            heading='Test heading'
            subheading='subheading'
            background='background'
            image='image'
            price={5000}
          />
        </Col>
        <Col xs={12} sm={5} md={4} lg={2}>
          <CustomCard
            heading='Test heading'
            subheading='subheading'
            background='background'
            image='image'
            price={5000}
          />
        </Col>
        <Col xs={12} sm={5} md={4} lg={2}>
          <CustomCard
            heading='Test heading'
            subheading='subheading'
            background='background'
            image='image'
            price={5000}
          />
        </Col>
        <Col xs={12} sm={5} md={4} lg={2}>
          <CustomCard
            heading='Test heading'
            subheading='subheading'
            background='background'
            image='image'
            price={5000}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
