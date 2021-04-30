import React from 'react';
import { AnimateGroup } from 'react-animation';
import PropTypes from 'prop-types';
import GraveStone from './GraveStone';

function Graveyard({ deadStudents }) {
  return (
    <AnimateGroup className='graveyard-container' animation='bounce'>
      {deadStudents.map((studentObject) => <GraveStone
          key={studentObject.id}
          firstName={studentObject.firstName}
          lastName={studentObject.lastName}
         />)}
    </AnimateGroup>
  );
}
Graveyard.propTypes = {
  deadStudents: PropTypes.array
};
export default Graveyard;
