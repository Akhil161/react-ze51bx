import React ,{useState}from "react";
import "./style.css";
import UseStates from './component/UseState'

export default function App() {
  let [test,setTest] = useState(0);
  // test is a state variable
  // setTest is a function which will manage my values of state variable
  // useState(' ') ==> deafult value of your state variable

function increment(){
  setTest(test+1);
}

function decrement(){
  setTest(test-1);
}

  return (
    <div>
      <button onClick={increment}>+</button>
      <div>{test}</div>
      <button onClick={decrement}>-</button>
       <br/>
       <br/>
       <br/>
       <br/>
      <UseStates/>
    </div>
  );
}
