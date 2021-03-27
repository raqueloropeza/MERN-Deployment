import React, {useState} from 'react';
import {Router} from '@reach/router';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import AllPets from './views/AllPets';
import CreatePet from './views/CreatePet';
import SinglePet from './views/SinglePet';
import EditPet from './views/EditPet';

function App() {
  const [loaded, setLoaded] =useState(false);
  return (
    <div className="App">
      <Router>
        <AllPets path="/" />
        <CreatePet path="/pets/new" loaded={loaded} setLoaded={setLoaded}/>
        <SinglePet path="/pets/:id" loaded={loaded} setLoaded={setLoaded}/>
        <EditPet path="/pets/update/:id" loaded={loaded} setLoaded={setLoaded}/>
      </Router>
    </div>
  );
}

export default App;
