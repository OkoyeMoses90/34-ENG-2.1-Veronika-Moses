import React from 'react';
import './App.css';
import Tile from './components/Tile';
import Card from './components/Card';
import Item from './components/Item';
//TODO: Remember to import components you use

function App(props:any) {
  return ( //TODO:  Add multiple Card components inside the <Tile> 
           //       Add several Item components to each <Card>
           //       (see the screenshot for the completed My TNT Exercise)
    <div>  
      <h1 className="App-header">My TNT</h1>
      <Tile title="Contacts">
          <Card title="New technologist" description ="Friends from the TNT program" website="https://newtechnologists.com/">
            <Item name="Zara Thomas" team={16} email="zthomas@home.com"></Item>
            <Item name="Mica Lujan" team={29} email="mica.l03@song.com"></Item>
          </Card>
          <Card title="Instructor" description ="Connect on Linkedin to keep in touch" website="http://linkedin.com">
            <Item name="Sylvan Frone" email="sylvan@forest.com"></Item>
          </Card>
          <Card title="Coach" description ="Incredible upport" website="">
            <Item name="Nadie Hu" team={16} email="nadia.hu@microsoft.com"></Item>
            <Item name="Sam Stiles" team={16} email="sam.stiles@microsoft.com"></Item>
          </Card>
      </Tile>
    </div>
    )
}

export default App;
