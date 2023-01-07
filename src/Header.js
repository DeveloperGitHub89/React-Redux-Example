import { Component } from "react";

export class Header extends Component{
    render(){
        return (
            <div>
                <h1>{this.props.headingText}</h1>
                <p>{this.props.description}</p>
            </div>
        )
    }
}