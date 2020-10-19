import React from 'react';
import './assets/sass/main.scss';
import Navbar from './components/navbar/Navbar';
import Vintage from './components/vintage/Vintage';
import Animation from './components/animation/Animation';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Vintage />
      <Animation />
    </React.Fragment>
  );
}

export default App;
