import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const GraveStone = ({ firstName, lastName }) => (
    <div>
      <Card className='dead-student-card'>
        <CardBody>
          <div className='top-gravestone'></div>
          <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">R.I.P</CardSubtitle>
        </CardBody>
      </Card>
    </div>
);
GraveStone.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default GraveStone;
