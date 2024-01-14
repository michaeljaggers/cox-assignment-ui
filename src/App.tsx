import './styles/App.scss';
import CustomCard from './components/CustomCard';
import { Container, Row, Col}  from 'react-bootstrap';
import Data from './UIE-InterviewProject.json';

function App() {

  const formatPrice = (price: number): string => {
    return price.toLocaleString('en', {useGrouping:true});
  };

  return (
    <Container className="App">
      <div className='d-flex justify-content-center'>
      <Row>
        {
          Data.map((item, key) => {
            return (
              <Col key={key} xs={12} sm={6} md={4} lg={2} >
                <CustomCard
                  heading={item.Heading}
                  subheading={item.Subheading}
                  price={formatPrice(item.Price)}
                  showBridge={item.showBridge}
                />
              </Col>
            )
          })
        }
      </Row>
      </div>
    </Container>
  );
}

export default App;
