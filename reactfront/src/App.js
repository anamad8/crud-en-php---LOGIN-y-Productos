import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import ShowProductsAdmin from './components/ShowProductsAdmin';
import ShowProducts from './components/ShowProducts';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Home from './components/Home';
import Register from './components/Register';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Register' element={<Register/>}/>
          <Route path='/ShowProductsAdmin' element={<ShowProductsAdmin />} />
          <Route path='/ShowProducts' element={<ShowProducts/>}/>
          <Route path='/create' element={<CreateProduct/>}/>
          <Route path='/edit/:id' element={<EditProduct/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
  
}

export default App;
