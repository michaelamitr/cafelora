import './menu.css';
export const Menu = () => {
  const menuElm = document.createElement('section');
  menuElm.classList.add('menu');
  menuElm.innerHTML = `
  <div class="container">
    <h2>Naše nabídka</h2>
    <p class="menu-intro">
      Vyberte si z našeho interaktivního menu a nemusíte čekat na obsluhu
    </p>
    <div class="drinks-list">
      <div class="drink">
        <div class="drink__product">
          <div class="drink__cup">
            <img src="https://cafelora.kodim.app/assets/cups/espresso.png">
          </div>
          <div class="drink__info">
            <h3>Espresso</h3>
            <div class="layer">
              <div class="layer__color" style="background-color: #613916"></div>
              <div class="layer__label">espresso</div>
            </div>
          </div>
        </div>
        <div class="drink__controls">
          <button class="order-btn">
            Objednat
          </button>
        </div>
      </div>

      <div class="drink">
        <div class="drink__product">
          <div class="drink__cup">
            <img src="https://cafelora.kodim.app/assets/cups/doppio.png">
          </div>
          <div class="drink__info">
            <h3>Doppio</h3>
            <div class="layer">
              <div class="layer__color" style="background-color: #613916"></div>
              <div class="layer__label">espresso</div>
            </div>
          </div>
        </div>
        <div class="drink__controls">
          <button class="order-btn">
            Objednat
          </button>
        </div>
      </div>

      <div class="drink">
        <div class="drink__product">
          <div class="drink__cup">
            <img src="https://cafelora.kodim.app/assets/cups/lungo.png">
          </div>
          <div class="drink__info">
            <h3>Lungo</h3>
            <div class="layer">
              <div class="layer__color" style="background-color: #b0dee1"></div>
              <div class="layer__label">voda</div>
            </div>
            <div class="layer">
              <div class="layer__color" style="background-color: #613916"></div>
              <div class="layer__label">espresso</div>
            </div>
          </div>
        </div>
        <div class="drink__controls">
          <button class="order-btn">
            Objednat
          </button>
        </div>
      </div>
    </div>

    <div class="order-detail">
      <a href="/objednavka">Detail objednávky</a>
    </div>
  </div>`;
  return menuElm;
};
