
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Searchbar from './Components/Searchbar/Searchbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';

import Product from'./Pages/Product';
import LoginSignup from'./Pages/LoginSignup';
import Cart from './Pages/Cart';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from'./Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'


function App() {
  return (
    <div >
      <BrowserRouter>
     <Navbar/>
     <Searchbar/>
     <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/Arts' element={<ShopCategory banner={men_banner} category="men"/>}/>
        <Route path='/HandiCrafts' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/Plants' element={<ShopCategory  banner={kid_banner} category="kid"/>}/>
         <Route path="/product" element={<Product/>}>
   <Route path=':productId' element={<Product/>}/>
   </Route>
   <Route path='/cart' element={<Cart/>}/>
<Route path='./login' element={<LoginSignup/>}/>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
