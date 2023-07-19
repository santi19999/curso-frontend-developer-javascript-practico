const productList = [];
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const imgMenu = document.querySelector('.menu');
const productDetail = document.querySelector('.product-detail');
const shoppingCart = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const fragment = document.createDocumentFragment();
email.addEventListener('click', (e) => {
	productDetail.classList.forEach((item) => {
		if (item === 'inactive') {
			return;
		} else {
			productDetail.classList.add('inactive');
		}
	});
	menu.classList.toggle('inactive');
});
imgMenu.addEventListener('click', (e) => {
	productDetail.classList.add('inactive');
	menuMobile.classList.toggle('inactive');
});
shoppingCart.addEventListener('click', (e) => {
	menu.classList.add('inactive');
	menuMobile.classList.add('inactive');
	productDetail.classList.toggle('inactive');
});

productList.push({
	name: 'Bike',
	imagen:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	precio: 120,
});
productList.push({
	name: 'Pantalla',
	imagen:
		'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/elige-mejor-monitor-cada-tipo-juego_1.jpg?tf=1200x',
	precio: 320,
});
productList.push({
	name: 'Escritorio',
	imagen:
		'https://img.freepik.com/foto-gratis/oficina-moderna-vista-ciudad_1340-37540.jpg?size=626&ext=jpg&ga=GA1.1.991922780.1687302473&semt=sph',
	precio: 400,
});

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement('div');
		productCard.classList.add('product-card');
		const img = document.createElement('img');
		img.setAttribute('src', product.imagen);
		const productInfoDiv = document.createElement('div');
		const productInfo = document.createElement('div');

		productInfo.classList.add('product-info');

		const productPrice = document.createElement('p');

		productPrice.innerText = '$' + product.precio;
		const productName = document.createElement('p');
		productName.innerText = product.name;
		productInfoDiv.appendChild(productPrice);
		productInfoDiv.appendChild(productName);

		const productInfoFigure = document.createElement('figure');
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');

		productInfoFigure.appendChild(productImgCart);
		productInfo.appendChild(productInfoDiv);
		productInfo.appendChild(productInfoFigure);
		productCard.appendChild(img);
		productCard.appendChild(productInfo);

		cardsContainer.appendChild(productCard);
	}
}

renderProducts(productList);
