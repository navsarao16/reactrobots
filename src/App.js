import React,{ Component } from 'react';
import Card from "./Card";
import SearchBox from "./SearchBox";
import { robots } from "./robots";
import "./App.css";


class App extends Component{
	constructor(){
		super()
		this.state ={
			robots: robots,
			searchfield: ""
		}
	}

onSearchChange = (event)=>{
	this.setState({searchfield: event.target.value})
}

	render(){
		const filteredRobo = this.state.robots.filter(robot=>{
		return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
	})
		return(
			<div className="tc">
			<h1 className="f1"> ROBOFRIENDS </h1>
			<SearchBox searchChange={this.onSearchChange}/>
		    <Card robots={filteredRobo} />
			</div>
			)
	}
}
export default App;