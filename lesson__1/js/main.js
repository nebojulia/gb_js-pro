class GoodsItem {
    //constructor(title = "Монитор", price = 1000, image = 'https://fiftyflowers.ru/image/catalog/%D0%A1%D1%82%D0%B8%D0%BA%D0%B5%D1%80%D1%8B/%D0%9D%D0%B5%D1%82%20%D0%B2%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8.png') 
    constructor({title = "Монитор", price = 7, image = 'https://fiftyflowers.ru/image/catalog/%D0%A1%D1%82%D0%B8%D0%BA%D0%B5%D1%80%D1%8B/%D0%9D%D0%B5%D1%82%20%D0%B2%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8.png'}
    = {title: "Монитор", price: 1000, image: 'https://fiftyflowers.ru/image/catalog/%D0%A1%D1%82%D0%B8%D0%BA%D0%B5%D1%80%D1%8B/%D0%9D%D0%B5%D1%82%20%D0%B2%20%D0%BD%D0%B0%D0%BB%D0%B8%D1%87%D0%B8%D0%B8.png'}) {
        this.title = title;
        this.price = price;
        this.image = image;
        this.renderProduct();
    }
    renderProduct() {
        return `<div class="product-item">
                <h3 class ="product-item__title">${this.title}</h3>
                <img class="product-item__image" src="${this.image}" alt="product-image">
                <p class ="product-item__price">${this.price} руб.</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

class GoodsList {
    constructor() {
        this.goods = [];
        this.fetchGoods();
        this.render();
        this.getTotalPrice();
    }
    fetchGoods() {
        this.goods = products;
    }
    render() {
        let listHTML = '';
        this.goods.forEach(good => {
            //const goodItem = new GoodsItem(good.title, good.price, good.image);
            listHTML += good.renderProduct();
        });
        document.querySelector('.products').innerHTML = listHTML;
    }
    getTotalPrice() {
        let totalPrice = document.querySelector('.products__totalPrice');
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
        })
        //console.log(sum);
        //for(let good of this.goods) {
            //    sum += good.price;
            //} оба способа работают
        totalPrice.innerText = sum;
        return sum;
    }
}

class Cart {
    constructor (initialValue = 0, cartItem) {
        this.item = cartItem;
        this.count = initialValue;
    }
    render() {}
    addGood() {}
    removeGood() {}
    reset() {}
    sendOrder() {}
    getInfo() {}
}

class cartItem {
    constructor(id, name, image, price) {
        this.id = id;
        this.name = name;
        this.image - image;
        this.price = price;
    }
    render() {}
    deleteItem() {}
    increment() {}
    decrement() {}
}

const products = [
    new GoodsItem({price: 2000, image: 'https://proprikol.ru/wp-content/uploads/2019/09/kartinki-monitora-6.jpg'}),
    new GoodsItem({title: 'Mouse', image: 'https://static.galamart.ru/images_1000/6CAIRAD-8.jpg?t=1634626788'}),
    new GoodsItem({title: 'Keyboard', price: 200, image: 'https://img.mvideo.ru/Pdb/50049723b.jpg'}),
    new GoodsItem({title: 'Gamepad', price: 50, image: 'https://mgames.ua/upload/catalog_products_photos/images/s_51gnmd2_otl__sl1200_1605539989.jpg'}),
    new GoodsItem({title: 'Тестовый товар', price: 150})]

const catalogItem = new GoodsItem();
const list = new GoodsList("Abcd", catalogItem);
console.log(list.getTotalPrice());
console.log(list);