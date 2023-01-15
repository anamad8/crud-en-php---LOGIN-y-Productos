import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api';

function ShowProducts() {

    const [products, setProducts] = useState([]);

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    useEffect (() => {
        getAllProducts();
    },[])


    return (
        <div>
        <h1>Product Board</h1>
        <div className='container text-end'>
                <Link to="/Register" className='btn btn-danger btn-lg mt-2 mb-2 text-white'>Salir</Link>
            </div>

        <table className=' container table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((product) =>(
                        <tr key={product.id}>
                            <td>{product.description}</td>
                            <td>{product.price}</td>
                            <td>{product.strock}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
    )
}

export default ShowProducts
