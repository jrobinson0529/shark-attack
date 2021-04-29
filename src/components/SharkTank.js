import React from 'react';
import PropTypes from 'prop-types';
import LiveStudent from './LiveStudent';

function SharkTank({ liveStudents }) {
  return (
    <div className='shark-tank-container'>
      {liveStudents.map((studentObject) => <LiveStudent
          key={studentObject.id}
          firstName={studentObject.firstName}
          lastName={studentObject.lastName}
         />)}
    </div>
  );
}
SharkTank.propTypes = {
  liveStudents: PropTypes.array
};
export default SharkTank;
