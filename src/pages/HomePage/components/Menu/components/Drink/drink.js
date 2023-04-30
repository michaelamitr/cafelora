import './drink.css';
import { Layer } from '../Layer/layer';
export const Drink = (props) => {
  const { id, name, ordered, image, layers } = props;
  console.log(layers);
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');

  let isordered = '';
  if (ordered) {
    isordered = 'Zrušit';
  } else {
    isordered = 'Objednat';
  }
  drinkElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="${image}">
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      ${isordered}
    </button>
  </div>`;

  if (ordered) {
    drinkElm.querySelector('.order-btn').classList.add('order-btn--ordered');
  }

  drinkElm.querySelector('.drink__info').append(
    ...layers.map((layer) => {
      return Layer(layer);
    }),
  );

  const updateOrder = () => {
    fetch(`https://cafelora.kodim.app/api/me/drinks/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        ordered: !ordered,
      }),
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        drinkElm.replaceWith(Drink(data.result));
      });
  };

  drinkElm.querySelector('.order-btn ').addEventListener('click', updateOrder);

  return drinkElm;
};
