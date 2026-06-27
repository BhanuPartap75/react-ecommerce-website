import {Routes,Route} from 'react-router';

import { HomePage } from './pages/HomePage';
import { CheckoutPage } from './pages/checkout/CheckoutPage';
import {Orders} from './pages/Orders';

import './App.css'
import { Tracking } from './pages/Tracking';

function App() {
  return (
    <Routes>
      <Route index element={<HomePage/>}/>
      <Route path="tracking" element={<Tracking/>}/>
      <Route path="checkout" element={<CheckoutPage/>}/>
      <Route path="orders" element={<Orders/>}></Route>
    </Routes>
  )
}

export default App
