const products = [
    {id: 1, price: 2000, image: 'https://proprikol.ru/wp-content/uploads/2019/09/kartinki-monitora-6.jpg'}, //значение title по умолчанию
    {id: 2, title: 'Mouse', image: 'https://static.galamart.ru/images_1000/6CAIRAD-8.jpg?t=1634626788'}, //значение price по умолчанию
    {id: 3, title: 'Keyboard', price: 200, image: 'https://img.mvideo.ru/Pdb/50049723b.jpg'},
    {id: 4, title: 'Gamepad', price: 50, image: 'https://mgames.ua/upload/catalog_products_photos/images/s_51gnmd2_otl__sl1200_1605539989.jpg'},
    {id: 5, title: 'Тестовый товар', price: 150},
];
//Функция для формирования верстки каждого товара
//Добавить в выводе изображение

const renderProduct = (title = "Монитор", price = 1000, image = 'https://fiftyflowers.ru/image/catalog/%D0%A1%D1%82%D0%B8%D0%BA%D0%B5%D1%80%D1%8B/%D0%9D%D0%B5%D1%82%20%D0%B2%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8.png') => {
    return `<div class="product-item">
                <h3 class ="product-item__title">${title}</h3>
                <img class="product-item__image" src="${image}" alt="product-image">
                <p class ="product-item__price">${price} руб.</p>
                <button class="buy-btn">Купить</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.image));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);