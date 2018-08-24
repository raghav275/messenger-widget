import React, { Component } from 'react';

class Msg extends Component{
	render(){
		return(
			<div style={{backgroundColor : this.props.bg, margin:"1%" , marginLeft: this.props.pos == "left" ? "10%": "0%",marginRight: this.props.pos == "left" ? "0%": "10%" , textAlign:this.props.pos == "right"?"left":"right"}}>	
			{this.props.value}	
			</div>
			);
	}
}
export default Msg;