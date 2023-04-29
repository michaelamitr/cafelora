import './drink.css';
export const Drink = (props) => {
  const { name, ordered, image, layers } = props;
  const { color, label } = layers[0];
  const drinkElm = document.createElement('div');
  drinkElm.classList.add('drink');
  drinkElm.innerHTML = `
  <div class="drink__product">
    <div class="drink__cup">
      <img src="${image}">
    </div>
    <div class="drink__info">
      <h3>${name}</h3>
      <div class="layer">
        <div class="layer__color" style="background-color: ${color}"></div>
        <div class="layer__label">${label}</div>
      </div>
    </div>
  </div>
  <div class="drink__controls">
    <button class="order-btn">
      Objednat
    </button>
  </div>`;
  return drinkElm;
};
