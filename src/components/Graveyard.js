import React from 'react';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function Graveyard({ deadStudents }) {
  return (
    <div className='graveyard-container'>
      {deadStudents.map((studentObject) => <GraveStone
          key={studentObject.id}
          firstName={studentObject.firstName}
          lastName={studentObject.lastName}
         />)}
    </div>
  );
}
Graveyard.propTypes = {
  deadStudents: PropTypes.array
};
export default Graveyard;
