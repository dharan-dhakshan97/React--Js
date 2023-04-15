import React from 'react'
import {useState} from "react";

const Delete = () => {

const [students,setStudents]=useState([
    {
        regno:101,
        name:"Venkat",
        age:21
    },
    {
        regno:102,
        name:"Balaji",
        age:21
        
    },
    {
        regno:103,
        name:"Ravi",
        age:21
        
    },
    {
        regno:104,
        name:"Rahul",
        age:21
        
    },
    {
        regno:105,
        name:"karthi",
        age:21,
        
    }
]);


function handleDelete(deletingStudent)
{
    const newStudents=students.filter((student)=>student!==deletingStudent);
    setStudents(newStudents);
}



  return (
    
<mai>
    <ul>
        <h1 style={{textAlign:'center'}}>Delete an Items</h1>
{students.map((student,index)=>

    
   <li key={index}>

<p>{student.regno}</p>
<p>{student.name}</p>


<button onClick={()=>handleDelete(student)}>Delete Item</button></li>)}

    </ul>
</mai>


  )
}

export default Delete;