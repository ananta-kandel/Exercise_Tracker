// import React from 'react'
// import { useState } from 'react';
// function CreateUser() {
//   const [username, setUsername] = useState('');
  
//   const onChange = (e)=>{
//       setUsername(e.target.value)
//   }
  
//   console.log(username);

//   const onSubmit = (e) =>{
      
//   }
//   return(
//     <>
//     <form onSubmit={onSubmit}>
//     <div className="form">
//       <label htmlFor="exampleInputEmail1">Username</label>
//       <input type="text" onChange={onChange} placeholder='Input Your UserName'></input>
//       <br></br>
//       <button type="submit"  className="btn btn-primary">Submit</button>
//       </div>
//     </form>
//     </>
//   )
// }

// export default CreateUser;

// import React, { useState } from 'react';
// import axios from 'axios';

// const CreateUser = () => {
//   const [username, setUsername] = useState('');

//   const onChangeUsername = (e) => {
//     setUsername(e.target.value);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();

//     const user = {
//       username: username,
//     };

//     console.log(user);

//     axios.post('http://localhost:9000/user/add', user)
//       .then((res) => console.log(res.data));

//     setUsername('');
//   };

//   return (
//     <div>
//       <h3>Create New User</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group">
//           <label>Username: </label>
//           <input
//             type="text"
//             required
//             className="form-control"
//             // value={username}
//             onChange={onChangeUsername}
//           />
//         </div>
//         <div className="form-group">
//           <input type="submit" value="Create User" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//   );
// };

// export default CreateUser;



import React from 'react'
import { useState } from 'react'
import axios from 'axios';


 function CreateUser() {
  const [usernames , setUsername] = useState([]);
 const onChange = (e)=>{
     setUsername(e.target.value)
 }
 const onSubmit = (e)=>{
  e.preventDefault();
    const user = {
      username :  usernames,
      // password : "hhh"
    };
    axios.post("http://localhost:9000/user/add",user)
        .then((res) => console.log(res.data));
 }
  return (
    <form onSubmit={onSubmit}>
      <label>UserName:</label>
      <input type="text"  onChange={onChange}placeholder='UserName'></input>
      {/* <label>password</label>
      <input type="password" placeholder='password'></input> */}
    </form>
  )
}

export default CreateUser;
