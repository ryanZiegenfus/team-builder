import React, {useState} from "react";
import './index.css';

export default function FormMod (props) {
    const [formState, setFormState] = useState({name: "", email: "", role: ""});

    return (
  
        <form onSubmit={(event) => {event.preventDefault(); return props.addMember(formState)}}>
            <label htmlFor="title">Name:</label>
            <input
                type="text"
                name="name"
                placeholder="Enter Name"
                value={formState.name}
                onChange={event => {console.log(formState); return setFormState({...formState, name: event.target.value})}}
            />
            <label htmlFor="title">Email:</label>
            <input
                type="text"
                name="email"
                placeholder="Enter Email"
                value={formState.email}
                onChange={event => {console.log(formState); return setFormState({...formState, email: event.target.value})}}
            />
            <label htmlFor="title">Role:</label>
            <input
                type="text"
                name="role"
                placeholder="Enter Role"
                value={formState.role}
                onChange={event => {console.log(formState); return setFormState({...formState, role: event.target.value})}}
            />
            <button>Submit!</button>
        </form>
    )
}