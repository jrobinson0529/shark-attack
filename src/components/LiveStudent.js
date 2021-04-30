import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle
} from 'reactstrap';

const LiveStudent = ({ firstName, lastName }) => (
    <div>
      <Card className='student-card y x'>
        <CardBody>
          <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
        </CardBody>
      </Card>
    </div>
);
LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
