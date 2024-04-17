import React, { useEffect, useState } from "react";
import {Numbers} from "./Numbers.jsx";


const Home = () => {

	const[timer, setTimer] = useState(0)
	const [active, setActive] = useState(false)

	useEffect(()=>{
		if(active){
			setTimeout(()=>{
				setTimer (value => value + 1)
			}, 1000)
		}
			
		},[timer,active])

	const startStop = () => setActive(value => !value)

	const resetTimer = () => setTimer (value => value=0)

	return (
		<div className="text-center bg-primary p-5">
			<h1 className="p-2 text-warning"> Seconds Counter </h1>
			<div className="counter">
				<Numbers number={<i className="far fa-clock"></i>}/>
				<Numbers number={Math.floor(timer/100000)%10}/>
				<Numbers number={Math.floor(timer/10000)%10}/>
				<Numbers number={Math.floor(timer/1000)%10}/>
				<Numbers number={Math.floor(timer/100)%10}/>
				<Numbers number={Math.floor(timer/10)%10}/>
				<Numbers number={Math.floor(timer)%10}/>
			</div>
			<div className="container text-center">
				<button disabled={active} onClick={startStop} type="button" className="btn btn-success mx-2 mt-4">Start</button>
				<button disabled={!active} onClick={startStop} className="btn btn-danger mx-2 mt-4">Stop</button>
				<button onClick={resetTimer} className="btn btn-warning mx-2 mt-4">Reset</button>
			</div>
		</div>
	);
};

export default Home;