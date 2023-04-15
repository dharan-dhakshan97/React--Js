import {useState} from 'react';
import "../Styles/Styles.css";
const Delete = () => {

const labour=[{

id:101,
name:"Venkat",
age:24
},
{
    id:102,
    name:"Ravi",
    age:22
},
{
    id:103,
    name:"Charan",
    age:34
},
{
    id:104,
    name:"Rahul",
    age:45
},
{
    id:105,
    name:"Arun",
    age:44
},];



const [candidates,setCandidates]=useState(labour);


const handleChange=id=>
{
    setCandidates((current)=>{
    
     return  current.filter((candidate)=>candidate.id !==id)
});
}

  return (
    <>
    
    <main>
        <h1 style={{textAlign:"center"}}>Delete a Item</h1>
        <ul>
{ candidates.map((candidate)=>
    (
        <li key={candidate.id}>
            <p>Id:{candidate.id}</p>
        <p>Name:{candidate.name}</p>
        <p>Age:{candidate.age}</p>
        </li>
    ))}
<button onClick={()=>handleChange(candidate.id)}>Delete Item</button>
        </ul>
</main>
    </>
  )
}

export default Delete;