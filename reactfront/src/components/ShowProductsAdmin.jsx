import React, {useEffect, useState} from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';

const endpoint = 'http://localhost:8000/api';

function ShowProductsAdmin() {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }

    useEffect (() => {
        getAllProducts();
    },[])


    return (

        <div>
            <h1>Product Board</h1>
            <div className='container text-end'>
                <Link to="/create" className='btn btn-success btn-lg mt-2 mb-2 text-white'>Create</Link>
                <Link to="/Register" className='btn btn-danger btn-lg mt-2 mb-2 text-white'>Salir</Link>
            </div>

            <table className=' container table table-striped'>
                <thead className='bg-primary text-white'>
                    <tr>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Stock</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product) =>(
                            <tr key={product.id}>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.strock}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-warning'>Edit</Link>
                                    <button onClick={() => deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ShowProductsAdmin
