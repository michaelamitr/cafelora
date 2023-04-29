import './drink.css';
import { Layer } from '../Layer/layer';
export const Drink = (props) => {
  const { name, ordered, image, layers } = props;
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
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
      Objednat
    </button>
  </div>`;
  drinkElm.querySelector('.drink__info').append(
    Layer({
      color: '#feeeca',
      label: 'mléčná pěna',
    }),
  );
  return drinkElm;
};
