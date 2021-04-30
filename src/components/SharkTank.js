import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { AnimateGroup } from 'react-animation';
import LiveStudent from './LiveStudent';
import { dearlyBeloved, followTheLight, livingStudents } from '../helpers/data/studentData';

function SharkTank({ liveStudents, setLiveStudents, setDeadStudents }) {
  const handleSharkAttack = () => {
    followTheLight(liveStudents);
    setLiveStudents(livingStudents());
    setDeadStudents(dearlyBeloved());
  };
  return (
  <>
    <div className='shark-tank-container'>
    <Button color='danger' onClick={handleSharkAttack}>SHARK ATTACK</Button>
      <AnimateGroup className='d-flex flex-wrap justify-content-between' animation="bounce">
      {liveStudents.map((studentObject) => <LiveStudent
          key={studentObject.id}
          firstName={studentObject.firstName}
          lastName={studentObject.lastName}
         />)}
      </AnimateGroup>
    </div>
  </>
  );
}
SharkTank.propTypes = {
  liveStudents: PropTypes.array,
  setLiveStudents: PropTypes.func,
  setDeadStudents: PropTypes.func,
};
export default SharkTank;
