import React from 'react';
import Robot from "./Robot";
import robots from "./robots";
 
const Card = ({robots}) =>{
	return(
		<div> 
	     {robots.map((user,i) =>{
	     	return 	(
	     	<Robot 
	     	key= {i}
	     	id ={robots[i].id} 
	     	name={robots[i].name} 
	     	email={robots[i].email} 
	     	/>
	     	);
		})
	 }
         </div>
	)
}

	export default Card;