import { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Textarea from './Components/Textarea';

function App() {

  const [value, setvalue] = useState("");

  const onchangehandeler = (event)=>{
    setvalue(event.target.value)
  }

  const uppercase = ()=>{
    let upcase = value.toUpperCase();
    setvalue(upcase);
  }

  const lowercase = ()=>{
    let lowcase = value.toLowerCase();
    setvalue(lowcase);
  }

  const cleartext = ()=>{
    let clrtext = "";
    setvalue(clrtext);
  }
  // ------------------------------------>

  const [states, setstates] = useState({
    color: "black",
  });

  const italictext = ()=>{

    if (states.color === "blue" ){
      setstates({
        fontStyle: "italic",
        color: "blue"
      })
    }
    else if (states.color === "red"){
      setstates({
        fontStyle: "italic",
        color: "red"
      })
    }
    else if (states.color === "black"){
      setstates({
        fontStyle: "italic",
        color: "black"
      })
    }

  }

  const red = ()=>{
    if(states.color === "black" || states.color === "blue"){
      setstates({
        color: "red"
      })
    }
  }

  const blue = ()=>{
    if(states.color === "black" || states.color === "red"){
      setstates({
        color: "blue"
      })
    }
  }

  const black = ()=>{
    if(states.color === "red" || states.color === "blue"){
      setstates({
        color: "black",
      })
    }
  }

  const bold = ()=>{
    if(states.color === "red"){
      setstates({
        fontWeight: "bolder",
        color: "red"
      })
    }
    else if(states.color === "blue"){
      setstates({
        fontWeight: "bolder",
        color: "blue"
      })
    }
    else if(states.color === "black"){
      setstates({
        fontWeight: "bolder",
        color: "black"
      })
    }
  }

  // ----------------------------------------------->

  const [mode, setmode] = useState("light");

  const darkmode = ()=>{
    if (mode === "light"){
      setmode("dark");
      document.body.style.backgroundColor = "rgb(27, 27, 65)"
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white"
    }
  }
  

  return (
    <>
    <Navbar mode={mode} darkmode={darkmode}/>

    <Textarea onchange={onchangehandeler} value={value}  uppercase={uppercase} lowercase={lowercase} states={states} italic={italictext} red={red} blue={blue} black={black} bold={bold} clear={cleartext} mode={mode}/>

    </>
  );
}

export default App;
