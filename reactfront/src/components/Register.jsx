import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import {useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Register() {

    const [user, setUser] = useState(
        window.localStorage.getItem([])
    )

    const [register, setRegister] = useState({
        id:""
    });
    const[errors, setErrors] = useState({});

    const [fallo,setFallo] = useState(false)

    const history = useNavigate()

    async function handleChange(e) {
        setRegister({
            ...register,
            [e.target.name] : e.target.value
        })
    }

    const setLocalStorage = value => {
        try{
            window.localStorage.setItem("user", [value])
        }catch(error){
            console.log(error)
        }
    }

    async function handleSubmit(e){
        e.preventDefault();

        // console.log(register)
        const url = 'http://localhost:8000/api/login/' 

        // console.log(url+register.id )
        // console.log(url+register.id === ('http://localhost:8000/api/login/17' || 'http://localhost:8000/api/login/14'))
        
        if(url+register.id === ('http://localhost:8000/api/login/17' || 'http://localhost:8000/api/login/14')){
            
            await axios.get(`${url}${register.id}`)
            // console.log(url+register.id)

            .then(( data ) => {
                setLocalStorage(data.data)
                console.log(data.data)
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

            history('/ShowProducts')
            setFallo(true)
            setErrors ('*Is required Id');
            return;

        }else{
            setFallo(true)
            setErrors ('*Is required Id');
            return;
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
                        <label htmlFor="name" className="col-sm-4 col-form-label">Id</label>
                        <div className="col-sm-8">
                            <input type="number" className="form-control" id="id" name="id"
                                value={register.id}  onChange={(e) => handleChange(e)}/>
                                {fallo ?
                                    <p className='alert alert-danger'>{errors}</p> :
                                    <p></p>
                                }
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
