import './style.css';
import { Header } from './components/Header/header.js';
import { Footer } from './components/Footer/footer.js';
import { Banner } from './pages/HomePage/components/Banner/banner.js';
import { Gallery } from './pages/HomePage/components/Gallery/gallery.js';
import { Contact } from './pages/HomePage/components/Contact/contact.js';
import { Menu } from './pages/HomePage/components/Menu/menu.js';

console.log('funguju!');

const pageElement = document.createElement('div');
pageElement.classList.add('page');

const main = document.createElement('main');
main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());

pageElement.append(Header(), main, Footer());

document.querySelector('#app').append(pageElement);
