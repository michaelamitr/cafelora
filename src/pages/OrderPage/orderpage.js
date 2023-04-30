import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import './orderpage.css';
import { Order } from './components/Order/order';

export const OrderPage = () => {
  const orderPageElm = document.createElement('div');
  orderPageElm.classList.add('page');
  orderPageElm.append(Header({ showMenu: false }));
  const main = document.createElement('main');
  main.classList.add('order');
  main.append(Order({ items: 'loading' }));
  orderPageElm.append(main);
  orderPageElm.append(Footer());
  return orderPageElm;
};
