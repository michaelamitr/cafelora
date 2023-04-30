import { Header } from '../../components/Header/header';
import { Footer } from '../../components/Footer/footer';
import './orderpage.css';

export const OrderPage = () => {
  const orderPageElm = document.createElement('div');
  orderPageElm.classList.add('page');
  orderPageElm.append(Header({ showMenu: false }));
  orderPageElm.innerHTML += `<main class="order">
<div class="order__content container">
  <h1>Vaše objedávnka</h1>
  <p class="empty-order empty-order--hide">
    Zatím nemáte nic objednáno
  </p>
  <div class="order__items">
    <div class="order-item">
      <img
        src="https://cafelora.kodim.app/assets/cups/vienna-coffee.png"
        class="order-item__image"
      />
      <div class="order-item__name">Vídeňská káva</div>
    </div>

    <div class="order-item">
      <img
        src="https://cafelora.kodim.app/assets/cups/chocolate-milk.png"
        class="order-item__image"
      />
      <div class="order-item__name">Čokoláda s mlékem</div>
    </div>
  </div>
</div>
</main>`;
  orderPageElm.append(Footer());
  return orderPageElm;
};
