import React, {useState} from 'react';
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


return (
    <div>
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
                Toggle age
        </button>
    </div>
  );

}
 
export default Room;
