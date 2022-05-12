import './App.css';
import Login from './Pages/login/login';
import Register from './Pages/login/register';
import ProtectedPages from './component/protectPages/protecPages';
import Shop from './Pages/shop/shop';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Product from './Pages/product/product';
import Cart from './Pages/cart/cart';

function App() {
  return (
    <HashRouter>
       <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/singUp' element={<Register/>}/>
          <Route element={<ProtectedPages/>}>
            <Route path='/' element={<Shop/>} />
            <Route path='/shop' element={<Shop/>}/>
            <Route path='/shop/:id' element={<Product/>} />
            <Route path='/cart' element={<Cart/>}/>
          </Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
