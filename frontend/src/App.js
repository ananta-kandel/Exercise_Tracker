import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import ExercisesList from "./components/ExercisesList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";

function App() {
  return (
    <>
  <Router>
      <div>
      <Navbar />
      <Routes>
      <Route path="/" element={< ExercisesList/>} />
      <Route path="/edit/:id" element={<EditExercise/>} />
      <Route path="/create" element={<CreateExercise />} />
      <Route path="/user" element={<CreateUser/>} />
      {/* <Route path='/edit' element={<EditExercise/>} /> */}
      </Routes>
      </div>
    </Router>
    
    </>
  );
}

export default App;
