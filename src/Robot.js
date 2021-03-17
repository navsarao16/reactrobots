import React from "react";

function Robot(props){
	return(
		
		<div className= "tc bg-washed-green dib br3 ma3" > 
		<img alt="robots" src={`https://robohash.org/${props.id}?200*200`}/>
		<div> 
		<h1>{props.name}</h1>
		<p> {props.email}</p>
		</div>
		</div>
		)
}
export default Robot;