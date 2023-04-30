import { Header } from '../../components/Header/header.js';
import { Footer } from '../../components/Footer/footer.js';
import { Banner } from './components/Banner/banner.js';
import { Gallery } from './components/Gallery/gallery.js';
import { Contact } from './components/Contact/contact.js';
import { Menu } from './components/Menu/menu.js';

export const HomePage = () => {
  const homepageElm = document.createElement('div');
  homepageElm.classList.add('page');
  const main = document.createElement('main');
  main.append(Banner(), Menu({ drinks: 'loading' }), Gallery(), Contact());
  homepageElm.append(Header({ showMenu: true }), main, Footer());
  return homepageElm;
};
