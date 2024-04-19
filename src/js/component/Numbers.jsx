import React, { useState } from "react";

export const Numbers = () => {

    const [number,setNumber] = useState(0);
    const [color, setColor] = useState("btn btn-warning mx-2 mt-3")
    const [background, setBackground] = useState("alert alert-primary")

    function sum1(){
        setNumber(number+1)
    };

    function dup(){
        setNumber(number*2)
    };

    function changeColor(){
        setColor("btn btn-danger mx-2 mt-3")
    }

    function reset(){
        setNumber(0)
    }

    const fondo = (theme) => {
        if (theme ==1){
            setBackground("alert alert-danger")
            }
        if (theme ==2){
            setBackground("alert alert-success")
        }
    }


    return (

        <div container class={background} role="alert">
            <h1>{number}</h1>
            <div className="buttons">
            <button onClick={sum1} type="button" class="btn btn-primary mx-2 mt-3">+1</button>
            <button onClick={dup} type="button" class="btn btn-secondary mx-2 mt-3">*2</button>
            <button onClick={changeColor} type="button" class={color}>Change color</button>
            <button onClick={reset} type="button" class={color}>Reset</button>
            <button onClick= {()=> fondo(1)} type="button" class="btn btn-danger mx-2 mt-3">Fondo Rojo</button>
            <button onClick={()=> fondo(2)} type="button" class="btn btn-success mx-2 mt-3">Fondo verde</button>
            </div>
        </div>

    );
};