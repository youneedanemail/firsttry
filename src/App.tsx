import React from 'react';
import './App.css';

// define interface
interface DanceProps {
  name: string;
  firstClassTaught: string;
  courseProgression: number;
  classInstructor: string;
}

// json object
const BallroomDances = [
  {
    name: 'Waltz',
    firstClassTaught: 'Bronze',
    courseProgression: 1,
    classInstructor: 'Adam Benson',
  },
  {
    name: 'Tango',
    firstClassTaught: 'Silver',
    courseProgression: 2,
    classInstructor: 'Ryan Podaouski',
  },
  {
    name: 'Quickstep',
    firstClassTaught: 'Bronze',
    courseProgression: 1,
    classInstructor: 'Adam Benson',
  },
  {
    name: 'foxtrot',
    firstClassTaught: 'Gold',
    courseProgression: 3,
    classInstructor: 'Natalie Shultz',
  },
];

function Welcome() {
  return <h1>Standard Ballroom Dances</h1>;
}

// create class component     interface name goes in <>
class Dance extends React.Component<DanceProps> {
  // calls return statement
  render() {
    const oneDance = this.props;

    return (
      <div>
        <img />
        <h2>{oneDance.name}</h2>
        <h2>Level: {oneDance.firstClassTaught}</h2>
        <h2>Class Order: {oneDance.courseProgression}</h2>
        <h2>Teacher: {oneDance.classInstructor}</h2>
      </div>
    );
  }
}

function StandardList() {
  return (
    <div>
      {BallroomDances.map((DanceNumber) => (
        <Dance {...DanceNumber} />
      ))}
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <Welcome />
      <StandardList />
    </div>
  );
}

export default App;
