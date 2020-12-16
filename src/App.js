import React from 'react';
import Biodata from './components/Biodata';
import DataBaru from './components/DataBaru';

function App() {
  return (
    <div>
      <Biodata nama="Deni Gunawan" semester="10" hobi={<Hobi />}/> 
      <DataBaru nama="Ahmad Zaelani" semester="7" hobi={<Hobi />} />
    </div>
  );
}

const Hobi = ()=>{
  return(
    <ul>
      <li>Belajar</li>
      <li>Ngulik</li>
      <li>Bercanda</li>
    </ul>
  );
}

export default App;
