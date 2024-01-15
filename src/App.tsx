import { useState } from 'react';
import { Container, Row, Col, Button}  from 'react-bootstrap';
import CustomCard from './components/CustomCard';
import JsonData from './UIE-InterviewProject.json';
import './styles/App.scss';

interface JsonDataType {
  Heading: string;
  Subheading: string;
  Price: number;
  showBridge?: boolean;
};

function App() {
  const [ cardData, setCardData ] = useState<Array<JsonDataType>>(JsonData);

  const sortHighLow = (data: JsonDataType[]): void => {
    const sortedData = [...data].sort((a, b) => {
      if ( a.Price > b.Price ){
        return -1;
      }
      if ( a.Price < b.Price ){
        return 1;
      }
      return 0;
    });

    setCardData(sortedData);
  };

  const sortLowHigh = (data: JsonDataType[]): void => {
    const sortedData = [...data].sort((a, b) => {
      if ( a.Price < b.Price ){
        return -1;
      }
      if ( a.Price > b.Price ){
        return 1;
      }
      return 0;
    });

    setCardData(sortedData);
  };

  const formatPrice = (price: number): string => {
    return price.toLocaleString('en', {useGrouping:true});
  };

  return (
    <Container className="App">
      <div className='button-container'>
        <Button
          variant='dark'
          onClick={() => {
            sortHighLow(cardData)
            console.log("Clicked HighToLow sort")
          }}
        >
          Sort Price: High to Low
        </Button>
        <Button
          variant='dark'
          onClick={() => {
            sortLowHigh(cardData)
            console.log("Clicked LowToHigh sort")
          }}
        >
            Sort Price: Low to High
        </Button>
      </div>
      <div className='d-flex justify-content-center'>
      <Row>
        {
          cardData.map((item: JsonDataType, key: number) => {
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
