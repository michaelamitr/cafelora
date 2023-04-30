import './style.css';
import { HomePage } from './pages/HomePage/homepage.js';
import { OrderPage } from './pages/OrderPage/orderpage';

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
} else if (pathname === '/objednavka') {
  document.querySelector('#app').append(OrderPage());
}
