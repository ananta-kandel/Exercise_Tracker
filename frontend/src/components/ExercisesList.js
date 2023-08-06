// import React, { useState, useEffect } from 'react'
// import axios from 'axios';
// function ExercisesList() {

// const Exercise = ({exercise}) => (
//   <tr>
//     <td>{exercise.username}</td>
//     <td>{exercise.description}</td>
//     <td>{exercise.duration}</td>
//     <td>{exercise.date.substring(0, 10)}</td>
//   </tr>
// );
//   const [Exercises, setExercises] = useState([]);
//   useEffect(() => {
//     axios
//       .get('http://localhost:9000/exercise/')
//       .then((response) => {
//         setExercises(response.data);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);

//   const exerciseList = () => {
//     return Exercises.map((currentExercise) => (
//       <Exercise
//         key={currentExercise._id}
//         exercise={currentExercise}
//       />
//     ));
//     };

//   return (
//     <div>
//       <h3>Logged Exercises</h3>
//       <table className="table">
//         <thead className="thead-light">
//           <tr>
//             <th>Username</th>
//             <th>Description</th>
//             <th>Duration</th>
//             <th>Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>{exerciseList()}</tbody>
//       </table>
//     </div>
//   );
// };
// export default ExercisesList;

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Exercise = ({ exercise, deleteExercise }) => (
  <tr>
    <td>{exercise.username}</td>
    <td>{exercise.description}</td>
    <td>{exercise.duration}</td>
    <td>{exercise.date.substring(0, 10)}</td>
    <td>
      {/* <Link to={"/edit/" + exercise._id}>edit</Link> |{' '} */}
      <a href="#" onClick={() => deleteExercise(exercise._id)}>delete</a>
    </td>
  </tr>
);

const ExercisesList = () => {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:9000/exercise/')
      .then(response => {
        setExercises(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const deleteExercise = (id) => {
    axios.delete('http://localhost:9000/exercise/' + id)
      .then(response => { console.log(response.data); });

    setExercises(prevExercises => prevExercises.filter(el => el._id !== id));
  };

  const exerciseList = () => {
    return exercises.map(currentexercise => (
      <Exercise exercise={currentexercise} deleteExercise={deleteExercise} key={currentexercise._id} />
    ));
  };

  return (
    <div>
      <h3>Logged Exercises</h3>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th>Username</th>
            <th>Description</th>
            <th>Duration</th>
            <th>Date</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {exerciseList()}
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
