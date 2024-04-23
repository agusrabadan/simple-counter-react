import React, { useState } from "react";

export const Form = () => {

    const [viewPassword, setViewPassword] = useState(false);
    const [mood,setMood] = useState(false);
    
    function handlePassword(){
        setViewPassword(!viewPassword)
    };
    
    function handleMood (){
        setMood(!mood)
    };


    return (
        <div className={mood ? "bg-primary" : "bg-dark text-white" }>
            <h1 className="text-center"> Formulario </h1>
            <div className="text-center fs-3">
                <span onClick={handleMood} className="mx-2">{mood ? <i className="far fa-regular fa-sun"></i> : <i className="far fa-regular fa-moon"></i>} {mood ? "Day" : "Night"}</span>
                
            </div>
            <form className="mx-4">
                <div className="form-row ">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputEmail4">Email</label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputPassword4">Password</label>
                        <span onClick={handlePassword}> {viewPassword ? <i className="far fa-eye-slash"></i> : <i className="far fa-eye"></i>}</span>
                        <input type={viewPassword ? "password" : "text"} className="form-control" id="inputPassword4" placeholder="Password"/>
                        
                    </div>
                        
                </div>
                
                <div className="form-group col-md-6">
                    <label htmlFor="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                </div>
                
                <div className="form-group col-md-6">
                    <label htmlFor="inputAddress2">Address 2</label>
                    <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor"/>
                </div>
                
                <div className="form-row">
                    <div className="form-group col-md-3">
                        <label htmlFor="inputCity">City</label>
                        <input type="text" className="form-control" id="inputCity"/>
                    </div>
                    <div className="form-group col-md-3">
                        <label htmlFor="inputState">State</label>
                        <select id="inputState" className="form-control">
                            <option selected>Choose...</option>
                            <option>...</option>
                        </select>
                    </div>
                    <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input type="text" className="form-control" id="inputZip"/>
                    </div>
                </div>
                
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                            <label className="form-check-label" htmlFor="gridCheck">
                                Check me out
                            </label>
                    </div>
                </div>
                
                <button type="submit" className={mood ? "btn bg-warning" : "btn bg-white"}>Sign in</button>
            
            </form>
        </div>

    );
};