const students = [
  {
    id: 1,
    firstName: 'Jesse',
    lastName: 'Robinson',
    isDead: false,
  },
  {
    id: 2,
    firstName: 'Ben',
    lastName: 'Jarrett',
    isDead: false,
  },
  {
    id: 3,
    firstName: 'Casey',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 4,
    firstName: 'Chie',
    lastName: 'Stroud',
    isDead: false,
  },
  {
    id: 5,
    firstName: 'Chris',
    lastName: 'M',
    isDead: false,
  },
  {
    id: 6,
    firstName: 'Dani',
    lastName: 'Crosby',
    isDead: false,
  },
  {
    id: 7,
    firstName: 'Ellie',
    lastName: 'Walker',
    isDead: false,
  },
  {
    id: 8,
    firstName: 'Martin',
    lastName: 'Sisk',
    isDead: false,
  },
  {
    id: 9,
    firstName: 'Gabby',
    lastName: 'Tobermann',
    isDead: false,
  },
  {
    id: 10,
    firstName: 'Matthew',
    lastName: 'Gonzales',
    isDead: false,
  },
  {
    id: 11,
    firstName: 'John',
    lastName: 'Maple',
    isDead: false,
  },
  {
    id: 12,
    firstName: 'Holly',
    lastName: 'Parsons',
    isDead: false,
  },
  {
    id: 13,
    firstName: 'Hunter',
    lastName: 'Juneau',
    isDead: false,
  },
  {
    id: 14,
    firstName: 'Jim',
    lastName: 'Connor',
    isDead: false,
  },
  {
    id: 15,
    firstName: 'Juan',
    lastName: 'Davila',
    isDead: false,
  },
  {
    id: 16,
    firstName: 'Katy',
    lastName: 'Fry',
    isDead: false,
  },
  {
    id: 17,
    firstName: 'Sara',
    lastName: 'Schnoover',
    isDead: false,
  },
  {
    id: 18,
    firstName: 'Sean',
    lastName: 'Rossettie',
    isDead: false,
  },
  {
    id: 19,
    firstName: 'Honey-Rae',
    lastName: 'Swan',
    isDead: false,
  },
  {
    id: 20,
    firstName: 'Tad',
    lastName: 'Sekeres',
    isDead: false,
  },
];
const livingStudents = () => {
  const livingStudentsArray = students.filter((obj) => obj.isDead === false);
  return livingStudentsArray;
};
const dearlyBeloved = () => {
  const deadStudentsArray = students.filter((obj) => obj.isDead);
  return deadStudentsArray;
};
const followTheLight = (arr) => {
  const studentsArr = arr;
  const ranIndex = Math.floor(Math.random() * studentsArr.length);
  if (studentsArr[ranIndex].isDead === false) {
    studentsArr[ranIndex].isDead = true;
  }
};
export {
  dearlyBeloved,
  livingStudents,
  followTheLight,
};
