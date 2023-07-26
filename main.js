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
	carrito.forEach((item) => {
		createProductOfCart(item);
	});
});
productDetailClose.addEventListener('click', (e) => {
	productDetail.classList.add('inactive');
});
productList.push({
	id: 1,
	name: 'Bike',
	imagen:
		'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
	precio: 120,
	cantidad: 0,
});
productList.push({
	id: 2,
	name: 'Pantalla',
	imagen:
		'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2019/10/elige-mejor-monitor-cada-tipo-juego_1.jpg?tf=1200x',
	precio: 320,
	cantidad: 0,
});
productList.push({
	id: 3,
	name: 'Escritorio',
	imagen:
		'https://img.freepik.com/foto-gratis/oficina-moderna-vista-ciudad_1340-37540.jpg?size=626&ext=jpg&ga=GA1.1.991922780.1687302473&semt=sph',
	precio: 400,
	cantidad: 0,
});
productList.push({
	id: 4,
	name: 'Mouse',
	imagen:
		'https://image.dhgate.com/0x0/f2/albu/g20/M01/E9/75/rBVaqWHy4KiAI93RAAPCc2mJ-9I944.jpg',
	precio: 160,
	cantidad: 0,
});

productList.push({
	id: 5,
	name: 'Teclado Gamer',
	imagen:
		'https://http2.mlstatic.com/D_NQ_NP_731595-MLA69000172201_042023-O.webp',
	precio: 600,
	cantidad: 0,
});
productList.push({
	id: 6,
	name: 'Impresora',
	imagen:
		'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2023/05/impresora-canon-3047476.jpg?tf=3840x',
	precio: 1400,
	cantidad: 0,
});
productList.push({
	id: 7,
	name: 'Scanner',
	imagen:
		'https://www.tuexperto.com/wp-content/uploads/2016/10/brother-ADS2400N-04.jpg',
	precio: 1200,
	cantidad: 0,
});
productList.push({
	id: 8,
	name: 'Tablet',
	imagen:
		'https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2020/08/samsung-galaxy-tab-s6-lite-2040253.jpg?tf=3840x',
	precio: 3400,
	cantidad: 0,
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
		productInfoFigure.setAttribute('class', `${product.id}`);
		const productImgCart = document.createElement('img');
		productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
		productImgCart.setAttribute('class', 'btnCart');

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
		shoppingCartContainer.classList.add('inactive');
		productDetail.classList.toggle('inactive');
	});
});
function existeProductoCart(product) {
	// const data = {
	// 	posicion: null,
	// 	id: null,
	// };
	// if (carrito.length > 0) {
	// 	const aNew = carrito.filter((producto, index) => {
	// 		if (producto.name === product.name) {
	// 			data.posicion = index;
	// 			data.id = producto.id;
	// 			return producto;
	// 		}
	// 	});
	// 	return aNew.length > 0 ? { data, resultado: true } : { resultado: false };
	// }
	// return -1;
	// Leemos los datos desde el Local Storage usando la clave "datosUsuario".
	const datosGuardadosString = localStorage.getItem(
		`${productList[product.id - 1].name}`
	);

	// Verificamos si hay datos guardados.
	if (datosGuardadosString) {
		// Si hay datos, los convertimos de nuevo a un objeto usando JSON.parse().
		const datosGuardados = JSON.parse(datosGuardadosString);
		let nuevo = {
			name: datosGuardados.name,
			precio: datosGuardados.precio,
			cantidad: datosGuardados.cantidad + 1,
			id: datosGuardados.id,
			imagen: datosGuardados.imagen,
		};
		return { nuevo, resultado: true };
	} else return;
}
const createProductOfCart = (product) => {
	const pTotal = document.querySelector('.total');
	const order = document.querySelector('.order');
	const myOrderContainer = document.querySelector('.my-order-content');
	const { name, precio, cantidad, imagen } = product;
	const total = precio * cantidad;
	const shoppingCart = document.createElement('div');
	shoppingCart.setAttribute('class', 'shopping-cart');
	const figure = document.createElement('figure');
	const imgProduct = document.createElement('img');
	imgProduct.setAttribute('src', imagen);
	const pPrice = document.createElement('p');
	pPrice.textContent = '$' + precio;

	const pName = document.createElement('p');
	pName.textContent = name + `X ${cantidad}`;
	const imgClose = document.createElement('img');
	imgClose.setAttribute('src', './icons/icon_close.png');
	imgClose.setAttribute('alt', 'close');

	figure.appendChild(imgProduct);
	shoppingCart.append(figure, pName, pPrice, imgClose);
	myOrderContainer.insertBefore(shoppingCart, order);
	pTotal.textContent = `$ ${total}`;
};
const carrito = [];
const addCart = document.querySelectorAll('figure');
addCart.forEach((cart) => {
	cart.addEventListener('click', (e) => {
		shoppingCartContainer.classList.add('inactive');
		e.stopPropagation();
		if (carrito.length < 7) {
			const id = parseInt(e.target.parentNode.parentNode.parentNode.id) - 1;
			let result = existeProductoCart(productList[parseInt(id)]);
			console.log(result);

			if (result.resultado) {
				localStorage.setItem(
					`${result.nuevo.name}`,
					JSON.stringify(result.nuevo)
				);
			} else {
				localStorage.setItem(
					`${productList[parseInt(id)].name}`,
					JSON.stringify({
						...productList[parseInt(id)],
						cantidad: 1,
					})
				);
			}

			console.log(carrito);
		} else {
			alert('Se llenó el carrito!');
		}
	});
});

let iconFlechita = document.querySelector('.iconFlechita');

iconFlechita.addEventListener('click', (e) =>
	shoppingCartContainer.classList.add('inactive')
);
