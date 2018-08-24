import React, { Component } from 'react';
import {Button, Icon, Card , Col, Row, CardTitle,Dropdown,NavItem} from 'react-materialize'
import Msg from './msg.js'
class App extends Component {
	constructor(props){
		super(props);
		this.state = {
			box : false
		}
	}
	handleClick(){
		this.setState({
			box: !this.state.box
		})
	}
  render() {
    return (
      <div>
      	<Button floating large className='red' waves='light' onClick={() => {this.handleClick()}} />
	    	<Row>
	    	<Col className='grid-example' s={4} l={4} m={4} xl={4} >
		      	<Card className="small" style = {{visibility: this.state.box?"visible":"hidden"}}
		      	header={[
		      			<div>
		      			<div>
		      			<Dropdown trigger={
    					<Button style={{width: "100%"}}>Chemistry</Button>
						  }>
						  <NavItem href="#">Students</NavItem>
						  <NavItem divider />
						  <NavItem>Student 1</NavItem>
						  <NavItem>Student 2</NavItem>
						</Dropdown>
						</div>
						<div>
		      			<Msg bg="yellow" pos="left" value="this is a msg"/>
		      			<Msg bg="green" pos="right" value="this is a msg"/>
		      			</div>
		      			</div>
		      		]} 
				actions={[<input style={{ marginLeft:"15%",width:"70%"}}></input>]}		
				>
		  			
		  		
				</Card>
			</Col>
			</Row>
      </div>
    );
  }
}

export default App;
