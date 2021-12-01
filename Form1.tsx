import React from "react";
import { useState } from "react";
import FormField from './FormField';
import Buton from './Buton';

const Form1 =() => {
    
    const [num1, setNum1]= React.useState(()=>{
        return parseInt(localStorage.getItem("num1")||'');
    });
    
    const [num2, setNum2]= React.useState(()=>{
        return parseInt(localStorage.getItem("num2")||'');
    }); 
const sampData1 ={
    title : "Number 1",
    value : num1,
    name:"num1"
  }
  const sampData2 ={
    title : "Number 2",
    value : num2,
    name: "num2"
  }
 return (
    <form>
        <fieldset>
            <legend>Calculator</legend>
            <FormField data={sampData1}/>
            <FormField data={sampData2}/>
           <div className="flex-style"> 
            <Buton val="Add" />
            <Buton val="Subtract"  />
            <Buton val="Multiply"  />
            <Buton val="Division"  /> </div>
        </fieldset> 
   
     </form>
 )
}
export default Form1;