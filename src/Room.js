import { findAllByTitle } from '@testing-library/react';
import React, {useState} from 'react';
import './Room.css';
//console.log("State = ",state);
//const state=useState(true);

function Room() {

    let [islit, setIslit] = useState(true);
    let [age, setAge]=useState(23)  ;
    let [roomtemp, setRoomtemp]= useState(22);

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

//(2) ES6 template string
// now the following line is used
// let hello= 'hello ${islit} world' ;


return (
    <div className={`room ${islit? "lighted": "darken"}`}>
       this room is {islit? "lighted": "Darken"};
       
       <br/>
       <br/>

       <button onClick={()=>setIslit(!islit)}>Toggle light</button>

       <br/>
       <br/>

        <p> Initially my age is {age}</p>

        <button onClick={() => {
                console.log("age is being updated");
                setAge(++age);
                }} > 
                <strong>Increase Age</strong> 
        </button>

        <br/>
        <br/>

        <button onClick={()=>{setAge(--age)}}>Decrease Age</button>

        <br/>
        <br/>

      <h1>The Room Temperature is {roomtemp}</h1>

        <br/>
        <br/>

        <button onClick= {()=>{setRoomtemp(++roomtemp)}}>Increase Temperature</button>

        <br/>
        <br/>

        <button onClick= {()=>{setRoomtemp(--roomtemp)}}>Decrease Temperature</button>

    </div>
  );

}
 
export default Room;
