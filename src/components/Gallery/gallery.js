import './gallery.css';
export const Gallery = () => {
  const galleryElm = document.createElement('section');
  galleryElm.id = 'gallery';
  galleryElm.classList.add('gallery');
  galleryElm.innerHTML = `
        <div class="container">
          <div class="gallery__content">
            <h2>Nově otevřeno!</h2>
            <div class="gallery__cols">
              <p class="gallery__col">
                Máte chuť na trochu nostalgie? Rádi vás u nás uvidíme. Atmosféra podniku Vás pohltí a přivede do
                uvolněné nálady.
              </p>
              <p class="gallery__col">
                V přízemí Cafe Lóra se nachází nově vystavěný bar a restaurant, kde Vám nabízíme koktejly z nově
                navržené řady "Cocktails &amp; Desires". V suterénu najdete music club se světelnou disco podlahou,
                barem, VIP loungem, a hrají tam ti nejlepší DJ's!
              </p>
              <p class="gallery__col">
                Jsme podnik pro všechny generace. Součástí kavárny je dětský koutek, který zabaví vaše ratolesti
                abyste si mohli v klidu vychutnat šálek Vaší oblíbené kávy.
              </p>
            </div>
          </div>
        </div>
`;
  return galleryElm;
};
