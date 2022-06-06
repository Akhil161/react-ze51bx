import React ,{useState} from 'react';

// useState is a hook which is used to manage react states
// hooks are predefined function

export default function UseState(){

let [name ,setName] = useState("monday");
let [state,setState] = useState(true);

// condition statement under return we will use ? :
// ? true  ==> do something
// : false => do something
function changeName(){
  // how to more than one state or Change more than one state in a particular event
  setName("tuseday");
  setState(false);
}

  return(
      <div>
        <button onClick={changeName}>Change Name</button>
        
        <button onClick={()=>{setName("monday"); setState(true)}}>reset</button>

        <div>{name}</div>
        {
          state?
          <div style={{backgroundColor:"red"}}>This is Mondat</div>:<></>
        }
      </div>
  )
}