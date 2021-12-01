import React from "react";
interface btnProps {
    val: string;
}
const Buton = ({val} :btnProps) => {
    return <div>
        <input type="submit" value={val} onClick={()=>localStorage.setItem("type",val)}  /> &nbsp;&nbsp;
    </div>
}
export default Buton;