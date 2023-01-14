import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Home() {

    const [register, setRegister] = useState({
        name: "",
        email:"",
        password:"",
        role: ""
    });

    const[errors, setErrors] = useState("");

    const [fallo,setFallo] = useState(false)

    const history = useNavigate()

    function handleChange(e) {
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    function handleSubmit(e){
        e.preventDefault();

        // console.log(register)

        if(!register.name.trim()){
            setFallo(true)
            setErrors ('*Is required name');
            return;
        }

        if(!register.email.trim()){
            setFallo(true)
            setErrors ('Is required email');
            return;
        }

        if(!register.password.trim()){
            setFallo(true)
            setErrors('*Is requiredpassword');
            return;
        }

        const token = localStorage.getItem("token")

        axios.post('http://localhost:8000/api/login',register, {
            headers: {
            Authorization: 'Bearer ' + token,
            "acceso": token
        }})

            .then(({ data }) => {
                console.log(data.data)
                
            })
            .catch(({ response }) => {
                console.log(response.data)
            })

        setFallo(false)

        Swal.fire({
            title: 'Registered!',
            text: 'Your registration was successful.',
            icon: 'success',
            confirmButtonText: 'OK'
        })

        setRegister({
            name: "",
            email:"",
            password:"",
            role: "",

        })

        history('/ShowProducts')

    }


    return (
        <div className="container m-3 p-3">     
        <div className="container m-2 p-2">
            <h1 className='text-center my-3'>Welcome!!!!!</h1>
        </div>  

        <div className="container">
            <form className="login" onSubmit= {(e) => handleSubmit(e)}>
                <div className="row mb-5">
                    <label htmlFor="name" className="col-sm-4 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input type="text" className="form-control" id="name" name="name"
                            value={register.name}  onChange={(e) => handleChange(e)}/>
                            {/* {fallo ?
                                <p>{errors}</p> :
                                <p></p>
                            } */}
                    </div>
                </div>
                <div className="row mb-5">
                    <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input type="email" className="form-control" id="email" name="email"
                            value={register.email}  onChange={(e) => handleChange(e)}/>
                            {/* {fallo ?
                                <p>{errors}</p> :
                                <p></p>
                            } */}
                    </div>
                </div>
                <div className="row mb-5">
                    <label htmlFor="inputPassword" className="col-sm-4 col-form-label">Password</label>
                    <div className="col-sm-8">
                        <input type="password" className="form-control" id="inputPassword" name="password" 
                        value= {register.password} onChange={(e) => handleChange(e)}/>
                        {/* {errors.password && (
                            <p>{errors.password}</p>
                        )} */}
                    </div>
                </div>
                <fieldset className="row mb-3">
                    <legend className="col-form-label col-sm-2 pt-0">Role</legend>
                    <div className="col-sm-8">
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="role" id="gridRadios1" value="admin" 
                                onChange={(e) => handleChange(e)}/>
                            <label className="form-check-label" htmlFor="gridRadios1">
                                Admin
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="role" id="gridRadios2" value="noadmin"
                                onChange={(e) => handleChange(e)}/>
                            <label className="form-check-label" htmlFor="gridRadios2">
                                No admin
                            </label>
                        </div>
                    </div>
                    {/* {errors.admin && (
                        <p>{errors.admin}</p>
                    )} */}
                </fieldset>
                <button type="submit" className="btn btn-primary">Send</button>
                {fallo ?
                    <p className='alert alert-danger'>{errors}</p> :
                    <p></p>
                }
            </form>
            <span className='py-3'>If you have an account: <Link to='/Register'>Login</Link></span>
        </div>     
        
    </div>
    )
}

export default Home
