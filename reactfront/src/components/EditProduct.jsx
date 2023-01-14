import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const endpoint = 'http://localhost:8000/api/product/';

function EditProduct() {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [strock, setStrock] = useState(0);
    const navigete = useNavigate();
    const {id} = useParams();

    const update = async (e) => {
        e.preventDefault();
        await axios.put(`${endpoint}${id}`, {
            description: description,
            price: price,
            strock:strock
        } )
        navigete('/ShowProducts')
    }

    useEffect(() =>{
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStrock(response.data.strock)
        }
        getProductById()
        // eslint-disable-next-lone react-hooks/exhastive-deps
    },[])

    return (
        <div>
            <h3>Edit Product</h3>
            <form onSubmit={update}>
                <div className='mb-3'>
                    <label className='form-label'>Description</label>
                    <input
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                        type="text" 
                        className='from-control'/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Price</label>
                    <input
                        value={price} 
                        onChange={(e) => setPrice(e.target.value)}
                        type="number" 
                        className='from-control'/>
                </div>

                <div className='mb-3'>
                    <label className='form-label'>Strock</label>
                    <input
                        value={strock} 
                        onChange={(e) => setStrock(e.target.value)}
                        type="number" 
                        className='from-control'/>
                </div>
                <button type='submit' className='btn btn-primary'>Update</button>

            </form>
        </div>
    )
}

export default EditProduct
