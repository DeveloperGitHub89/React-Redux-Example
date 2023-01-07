import { Component } from "react";

export class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            formData: {}
        }
    }
    handleChange = (e)=>{
        this.setState(
            {
                formData:
                    {
                        ...this.state.formData,
                        [e.target.name]:e.target.value
                    }
            }
        );
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        console.log(this.state.formData);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' name="name" placeholder="enter name" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type='password' name="password" placeholder="enter password" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type='text' name="phone" placeholder="enter phone" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type='email' name='email' placeholder="enter email" onChange={this.handleChange}></input>
                    <br></br><br></br>
                    <input type='submit' value='Register'></input>
                </form>
            </div>
        );
    }
}