import React from 'react';
import Navigation2 from '../../Component/navigation';
import AppBar1 from '../../Component/Appbar';
import MediaCard from '../Kampanye/Cards';
import Card3 from '../../Component/Card3';
import Card4 from '../../Component/Card4';
import Card5 from '../../Component/Card5';
import Buttons from './search';

function App() {
  return (
    <div className="App">
        <Navigation2 />
        <AppBar1 />
        <MediaCard />
        <Buttons />
        <Card3 />
        <Card4 />
        <Card5 />
        <Card3 />
        <Card4 />
        <Card3 />
        <Card4 />
        <Card3 />
        <Card4 />
    </div>
  );
}

export default App;