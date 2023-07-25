const productList = [];
const email = document.querySelector('.navbar-email');
const menu = document.querySelector('.desktop-menu');
const menuMobile = document.querySelector('.mobile-menu');
const imgMenu = document.querySelector('.menu');
const shoppingCartContainer = document.querySelector('#shoppingCartContainer');
const shoppingCart = document.querySelector('.shopping-cart');
const cardsContainer = document.querySelector('.cards-container');
const productDetailClose = document.querySelector('.product-detail-close');
const productDetail = document.querySelector('#productDetail');

email.addEventListener('click', (e) => {
	shoppingCartContainer.classList.forEach((item) => {
		if (item === 'inactive') {
			return;
		} else {
			shoppingCartContainer.classList.add('inactive');
		}
	});
	menu.classList.toggle('inactive');
});
imgMenu.addEventListener('click', (e) => {
	shoppingCartContainer.classList.add('inactive');
	menuMobile.classList.toggle('inactive');
});
shoppingCart.addEventListener('click', (e) => {
	menu.classList.add('inactive');
	menuMobile.classList.add('inactive');
	shoppingCartContainer.classList.toggle('inactive');
	productDetail.classList.add('inactive');
});
productDetailClose.addEventListener('click', (e) => {
	productDetail.classList.add('inactive');
	shoppingCartContainer.classList.toggle('inactive');
});
productList.push({
	id: 1,
	name: 'Bike',
	imagen:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	precio: 120,
});
productList.push({
	id: 2,
	name: 'Pantalla',
	imagen:
		'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/elige-mejor-monitor-cada-tipo-juego_1.jpg?tf=1200x',
	precio: 320,
});
productList.push({
	id: 3,
	name: 'Escritorio',
	imagen:
		'https://img.freepik.com/foto-gratis/oficina-moderna-vista-ciudad_1340-37540.jpg?size=626&ext=jpg&ga=GA1.1.991922780.1687302473&semt=sph',
	precio: 400,
});

function renderProducts(arr) {
	for (product of arr) {
		const productCard = document.createElement('div');
		productCard.id = product.id;
		productCard.classList.add('product-card');
		const img = document.createElement('img');
		img.classList.add('productImg');
		img.setAttribute('src', product.imagen);
		const productInfoDiv = document.createElement('div');
		const productInfo = document.createElement('div');

		productInfo.classList.add('product-info');

		const productPrice = document.createElement('p');
		productPrice.classList.add('priceProduct');

		productPrice.innerText = '$' + product.precio;
		const productName = document.createElement('p');
		productName.classList.add('nameProduct');
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
const productCard = document.querySelectorAll('.product-card');

productCard.forEach((card) => {
	card.addEventListener('click', (e) => {
		let precio = document.querySelector('.price');
		let nombre = document.querySelector('.name');
		let image = document.querySelector('#image');
		const urlImage = e.currentTarget.children[0].currentSrc;
		let [name, price] = e.currentTarget.children[1].children[0].children;
		nombre.textContent = name.textContent;
		precio.textContent = price.textContent;
		image.setAttribute('src', urlImage);

		productDetail.classList.remove('inactive');
	});
});
