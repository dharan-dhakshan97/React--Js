import {useState} from 'react';
import "../Styles/Styles.css";

const Update=()=>
{

//add a object
const object=[
{
    
id:104,
name:"Venkat"
},
{
    id:105,
    name:"Ravi"
}

];

const [updates,setUpdates]=useState(object);

function handleChange()
{
    setUpdates((preUpdate)=>[
    ...preUpdate,
    {
        id:106,
        name:"Charan"
    }
    ])
}

    return(
        <>
<main>
    
    <ul>
        <h1 style={{textAlign:'center'}}>Update a Items</h1>
{
updates.map((update,index)=>
<li key={index}>
<p>id:{update.id}</p>
<p>name:{update.name}</p>
</li>
)
}
</ul>
<button onClick={handleChange}>Add Item</button>
    
    </main>   
        </>
    )
}


export default Update;