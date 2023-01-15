import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const endpoint = 'http://localhost:8000/api/product';

function CreateProduct() {
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [strock, setStrock] = useState(0);
    const navigete = useNavigate();

    const store = async (e) => {
        e.preventDefault();
        await axios.post(endpoint,{description:description, price:price, strock:strock,})
        navigete('/ShowProductsAdmin')
    }

    return (
        <div>
            <h3>Create Product</h3>
            <form onSubmit={store}>
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
                <button type='submit' className='btn btn-primary'>Store</button>

            </form>
        </div>
    )
}

export default CreateProduct
