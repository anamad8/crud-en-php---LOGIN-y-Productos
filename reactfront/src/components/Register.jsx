import React,{useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

const endpoint = 'http://localhost:8000/api/login';

function Register() {

    const [user, setUser] = useState()

    const [register, setRegister] = useState({
        email:"",
        password:""
    });

    console.log(register.password)
    const[errors, setErrors] = useState({});

    const [fallo,setFallo] = useState(false)

    const history = useNavigate()

    const getAllUser = async () => {
        const response = await axios.get(`${endpoint}`)
        setUser(response.data)
    }

    useEffect (() => {
        getAllUser();
        
    },[])


    async function handleChange(e) {
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    async function handleSubmit(e){
        e.preventDefault();

        console.log(register.id)
        const url = 'http://localhost:8000/api/login/' 

        const anEmail = user.find((n) =>(n.email===register.email))

        console.log(anEmail.role==='admin')

            if(anEmail.role==='admin'){
                await axios.get(`${url}${register.id}`)

            .then(( {data} ) => {
                console.log(data)
            })
            .catch(({ response }) => {
                console.log(response.data)
            })

            Swal.fire({
                title: 'Welcome!!!!!',
                text: 'Your registration was successful.',
                icon: 'success',
                confirmButtonText: 'OK'
            })

            history('/ShowProductsAdmin')

            }else{
                history('/ShowProducts')
            }

    }

    return (
        <div className="container m-3 p-3">     
            <div className="container m-2 p-2">
                <h1 className='text-center my-3'>Welcome!!!!!</h1>
            </div>  

            <div className="container">
                <form className="login" onSubmit= {(e) => handleSubmit(e)}>
                    <div className="row mb-5">
                        <label htmlFor="email" className="col-sm-4 col-form-label">Email</label>
                        <div className="col-sm-8">
                            <input type="email" className="form-control" id="email" name="email"
                                value={register.email}  onChange={(e) => handleChange(e)}/>
                        </div>
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Send</button>
                    <span className='py-3'>If you don't have an account: <Link to='/'>Register</Link></span> 
                </form>
            </div>     
            
        </div>
    )

}

export default Register
