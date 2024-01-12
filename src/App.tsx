import React from 'react';
import './styles/App.scss';
import CustomCard from './components/CustomCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomCard
          heading='Test heading'
          subheading='subheading'
          background='background'
          image='image'
          price={5000}
        />
      </header>
    </div>
  );
}

export default App;
