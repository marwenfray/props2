import React from 'react';
import './App.css';
import Profile from './Profile/profile component'
let fullName="John Doe";
let bio= "I can do almost everything";
let profession="professional employee"
let source="https://directemployers.org/wp-content/uploads/2018/08/avatar-JohnDoe.jpg"
let handleName=(name) => {
  alert(name);};
function App() {
  return (
    <div style={{backgroundColor:"lightgrey"}}>
   <Profile fullName = {fullName} bio={bio} profession={profession} handleName={handleName} >
     <img  src={source}/>

   </Profile>
   </div>
  );
}

export default App;
