import React, { useState } from "react";

 const Semaforo = () => {

    const [bright,setBright] = useState(null)


    
    return(
        <div className="text-center container">
            <div class="semaforo">
                <div onClick={()=>setBright("red")} className={"luz roja" + (bright === "red" ? " glow" : "")}></div>
                <div onClick={()=>setBright("yellow")} className={"luz amarilla" + (bright === "yellow" ? " glow" : "")}></div>
                <div onClick={()=>setBright("green")} className={"luz verde" + (bright === "green" ? " glow" : "")}></div>
            </div>
            <button type="button" class="btn btn-success mt-3">Change</button>
        </div>
    )
}

export default Semaforo

    

