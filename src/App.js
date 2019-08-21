import React, {useState} from 'react';
import './App.css';
import FormMod from "./Form";
import MemberMod from "./Member"

function App() {

  const [members, setMembers] = useState([
    {name: "Tyler", email: "hello@aol.com", role: "student"},
    {name: "Ryan", email: "hi@aol.com", role: "TL"}
  ]);

  function addMember (event) {
    return setMembers([...members, event]);
  }

  return (
    <div className="App">
      <FormMod addMember={addMember}/>
      {members.map((element, index)=> <MemberMod key={index} value={element} />)} 
    </div>
  );
}

export default App;
