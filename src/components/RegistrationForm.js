import { useState } from "react";

export function RegistrationForm(){

    const [formData,setFormData]=useState({});
    const handleChange = (e)=>{
        setFormData(
            {...formData,[e.target.name]:e.target.value}
        );
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
                <form onSubmit={handleSubmit}>
                    <input type='text' name="name" placeholder="enter name" onChange={handleChange}></input>
                    <br></br><br></br>
                    <input type='password' name="password" placeholder="enter password" onChange={handleChange}></input>
                    <br></br><br></br>
                    <input type='text' name="phone" placeholder="enter phone" onChange={handleChange}></input>
                    <br></br><br></br>
                    <input type='email' name='email' placeholder="enter email" onChange={handleChange}></input>
                    <br></br><br></br>
                    <input type='submit' value='Register'></input>
                </form>
        </>
    );

}