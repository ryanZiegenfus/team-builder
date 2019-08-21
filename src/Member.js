import React from 'react';
import './index.css';

export default function MemberMod (props) {
    return (
        <div>
            <div>{props.value.name}</div>
            <div>{props.value.email}</div>
            <div>{props.value.role}</div>
        </div>
    )
}