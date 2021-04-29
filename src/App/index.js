import React, { useState, useEffect } from 'react';
import SharkTank from '../components/SharkTank';
import { livingStudents } from '../helpers/data/studentData';
import './App.scss';

function App() {
  const [liveStudents, setLiveStudents] = useState([]);
  useEffect(() => {
    setLiveStudents(livingStudents());
  }, []);
  console.warn(liveStudents);
  return (
    <div className='App'>
      <header>
        <h1 className='header-title'>Welcome to the SharkTank</h1>
      </header>
      <SharkTank liveStudents={liveStudents}/>
    </div>
  );
}

export default App;
