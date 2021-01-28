import React, {useState} from 'react';
import './Room.css';
//console.log("State = ",state);
//const state=useState(true);

function Room() {

    let [islit, setIslit] = useState(false);
    let [age, setAge]=useState(23)  ;

function buttonUpdated(){
     console.log("Button Clicked"); 
     setIslit(!islit)
     }

function ageUpdated(){
     console.log("age is being updated")
     setAge(++age)
}
//methods to include dynamic values to strings

//(1)
//this line was used in ES6 for concatenation of string
//let hello= 'hello' + islit + 'world';      

//(2)
// now the following line is used
// let hello= 'hello ${islit} world' ;


return (
    <div className={`room ${islit? "lighted": "darken"}`}>
       this room is {islit? "lighted": "Darken"};
       <br/>

       age: {age}

       <br/>

       <button onClick={()=>setIslit(!islit)}>Toggle light</button>

       <br/>

        <button onClick={() => {
                console.log("age is being updated");
                setAge(++age);
                }} > 
                <strong>Increaseage</strong> 
        </button>

        <br/>

        <button onClick={()=>{setAge(--age)}}>Decrease Age</button>

    </div>
  );

}
 
export default Room;
