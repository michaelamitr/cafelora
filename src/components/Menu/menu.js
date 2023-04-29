import { Drink } from './components/Drink/drink';
import './menu.css';
export const Menu = () => {
  const menuElm = document.createElement('section');
  menuElm.classList.add('menu');
  menuElm.id = 'menu';
  menuElm.innerHTML = `
  <div class="container">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    <div class="drinks-list">
    </div>
    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>`;
  menuElm.querySelector('.drinks-list').append(
    Drink({
      name: 'čaj',
      ordered: true,
      image: 'https://cafelora.kodim.app/assets/cups/romano.png',
      layers: [
        {
          color: '#fbdf5b',
          label: 'citrón',
        },
      ],
    }),
  );
  return menuElm;
};
