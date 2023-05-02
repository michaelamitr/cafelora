import { Drink } from './components/Drink/drink';
import './menu.css';
export const Menu = (props) => {
  const { drinks } = props;
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
      <a href="objednavka">Detail objednávky</a>
    </div>
  </div>`;

  if (drinks === 'loading') {
    fetch('https://cafelora.kodim.app/api/me/drinks', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + localStorage.getItem('token'),
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const dataArray = data.result;
        console.log(data);
        menuElm.replaceWith(Menu({ drinks: dataArray }));
      });
  } else {
    menuElm
      .querySelector('.drinks-list')
      .append(...drinks.map((drink) => Drink(drink)));
    //Možno rozepsat jako takhle:
    // const poleDrinku = drinks.map((drink) => Drink(drink));
    // menuElm.querySelector('.drinks-list').append(...poleDrinku);
  }
  return menuElm;
};
