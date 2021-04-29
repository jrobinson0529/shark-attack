import React from 'react';
import PropTypes from 'prop-types';
import {
  Card, CardBody,
  CardTitle, CardSubtitle
} from 'reactstrap';

const LiveStudent = ({ firstName, lastName }) => (
    <div>
      <Card className='student-card'>
        <CardBody>
          <CardTitle tag="h5">{firstName} {lastName}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Student of the Sharks</CardSubtitle>
        </CardBody>
      </Card>
    </div>
);
LiveStudent.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired
};

export default LiveStudent;
