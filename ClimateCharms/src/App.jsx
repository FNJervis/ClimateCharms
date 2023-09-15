import './App.css'
import NavigationBar from "./assets/Navbar.jsx";
import {Route,Routes} from "react-router-dom"
import {BrowserRouter} from "react-router-dom"
import Login from './Login.jsx';
import {Shop} from "./pages/shop/shop.jsx";
import {Cart} from "./pages/cart/cart.jsx";
import { ShopContextProvider } from "./context/shop-context";

function App() {
  return (
      <div>
          <ShopContextProvider>
          <BrowserRouter>
              <NavigationBar/>
          <Routes> {/*Agregar ruta de home y tienda*/}
              <Route path="/" element={<Login/>}/>
              <Route path="/shop" element={<Shop/>}/>
              <Route path="/cart" element={<Cart/>}/>
          </Routes>
          </BrowserRouter>
          </ShopContextProvider>
      </div>

  )
}

export default App
