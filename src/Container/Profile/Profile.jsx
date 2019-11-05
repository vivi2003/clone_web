import React from 'react';
import Navigation2 from '../../Component/navigation';
import AppBar1 from '../../Component/Appbar';
import Background from './background';
import Tabs2 from './tabs2';

function App() {
  return (
    <div className="App">
        <Navigation2 />
        <AppBar1 />
        <Background />
        <Tabs2 />
    </div>
  );
}

export default App;