import React from 'react';

const DataBaru = props => {
    return(
        <div>
        <h1>Nama = {props.nama}</h1>
        <p>Semester = {props.semester}</p>
        <div>{props.hobi}</div> 
        <p>======================================</p>
        </div>
    );
};

export default DataBaru;