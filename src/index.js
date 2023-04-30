import './style.css';
import { HomePage } from './pages/HomePage/homepage.js';

const { pathname } = window.location;

if (pathname === '/') {
  document.querySelector('#app').append(HomePage());
}
