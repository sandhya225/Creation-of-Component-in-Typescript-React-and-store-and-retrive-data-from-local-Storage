import React from "react";
import { useState,useEffect  } from "react";
const Form2= ()=>{
   
    const [res,setRes]=React.useState(0);
    useEffect(()=>{
        const type=localStorage.getItem("type");
        const numb1=parseInt(localStorage.getItem("num1")||'');
        const numb2=parseInt(localStorage.getItem("num2")||'');
        switch (type){
            case "Add":
                setRes(numb1 + numb2);
                break;
            case "Subtract":
                setRes(numb1 - numb2);
                break;
            case "Multiply":
                setRes(numb1 * numb2);
                break;
            case "Division":
                setRes(numb1 / numb2);
                break;
         }
        
    })    
 return <div>
     The Result is : {res}
 </div>;
}
export default Form2;