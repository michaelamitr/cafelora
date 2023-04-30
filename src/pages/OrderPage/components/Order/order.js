import { OrderItem } from '../OrderItem/orderitem';

export const Order = (props) => {
  const { items } = props;
  const orderElm = document.createElement('div');
  orderElm.classList.add('order__content');
  orderElm.classList.add('container');
  orderElm.innerHTML = `
  <h1>Vaše objedávnka</h1>
  <p class="empty-order empty-order--hide">Zatím nemáte nic objednáno</p>
  <div class="order__items"></div>`;

  if (items === 'loading') {
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
        const dataArray = data.result.filter((drink) => drink.ordered === true);
        console.log(dataArray);
        if (dataArray.length === 0) {
          console.log('Prázdná objednávka');
          orderElm
            .querySelector('.empty-order')
            .classList.remove('empty-order--hide');
        } else {
          orderElm.replaceWith(Order({ items: dataArray }));
        }
      });
  } else {
    orderElm
      .querySelector('.order__items')
      .append(
        ...items.map((item) =>
          OrderItem({ name: item.name, image: item.image }),
        ),
      );
  }
  return orderElm;
};
