import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getIncrementAction } from "../actions/ScoreActions";
import { MyScore } from "./MyScore";

export function ScoreBoard(){
    const score=useSelector(state=>state.scoreReducer); 
    const dispatch=useDispatch();

    const increaseScore= ()=>{
        dispatch(getIncrementAction());
    }
    const decreaseScore= ()=>{
        
    }
    return (
        <div>
            <h1>{score}</h1>
            <input type='button' value='+' onClick={increaseScore}></input>
            <input type='button' value='-' onClick={decreaseScore}></input>
            <MyScore></MyScore>
        </div>        
    );
}
// import { Component } from "react";

// export class ScoreBoard extends Component{
//     constructor(){
//         super();
//         this.state={
//             score:0
//         }
//     }
//     handlePlusClick = ()=>{
//         this.setState({score:this.state.score+1})
//     }
//     handleMinusClick = ()=>{
//         this.setState({score:this.state.score-1});
//     }
//     render(){
//         return (
//             <div>
//                 <h1>{this.state.score}</h1>
//                 <input type='button' value='+' 
//                     onClick={this.handlePlusClick}></input>
//                 <input type='button' value='-' 
//                     onClick={this.handleMinusClick}></input>
//             </div>
//         )
//     }
// }
