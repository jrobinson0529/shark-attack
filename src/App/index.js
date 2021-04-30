import React, { useState, useEffect } from 'react';
import Graveyard from '../components/Graveyard';
import SharkTank from '../components/SharkTank';
import { dearlyBeloved, livingStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  const [deadStudents, setDeadStudents] = useState([]);
  useEffect(() => {
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  }, []);
  return (
    <div className='App'>
      <header>
        <h1 className='header-title'>Welcome to the SharkTank</h1>
      </header>
      <SharkTank liveStudents={liveStudents} setLiveStudents={setLiveStudents} setDeadStudents={setDeadStudents}/>
        <h1 className='header-title'>The yard of death</h1>
      <Graveyard deadStudents={deadStudents}/>
    </div>
  );
}

export default App;
