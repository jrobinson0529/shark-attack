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
      <main className='d-flex'>
        <SharkTank liveStudents={liveStudents} setLiveStudents={setLiveStudents} setDeadStudents={setDeadStudents}/>
        <Graveyard deadStudents={deadStudents}/>
      </main>
    </div>
  );
}

export default App;
