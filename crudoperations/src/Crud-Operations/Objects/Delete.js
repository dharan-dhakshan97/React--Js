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


// const handleChange=(a)=>
// {
//     setCandidates(candidates.filter(a => a.id!==candidate.id));

// }

  return (
    <>
    
    <main>
       
        <h1 style={{textAlign:"center"}}>Delete a Item</h1>
        
{/* {candidates.map((candidate)=>
        <li key={candidate.id}> {candidate.name} {' '} {candidate.age}
        
        <p>Id:{candidate.id}</p> 
        <p>Name:{candidate.name}</p>
        <p>Age:{candidate.age}</p>
        </li>
    )}
    </ul>
<button onClick={handleChange}>Delete Item</button> */}



 <ul>

{candidates.map(candidates=>(
    <li key={candidates.id}>
    {candidates.name}{' '}
<button onClick={()=>{setCandidates(candidates.fiter(a=>a.id !==candidates.id));

}}>Delete Item</button>
</li>
))}
</ul>

</main>
    </>
  );
}

export default Delete;