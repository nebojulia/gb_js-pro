class Hamburger {
    constructor(size, filling, additives) { 
        this.size = size;
        this.filling = filling;
        this.additives = additives;
    }
    addAdditives() { // Добавить добавку

    }
    removeAdditives() { // Убрать добавку 
    
    }
    getAdditives() { // Получить список добавок 
    
    }
    getSize() { // Узнать размер гамбургера 
    
    }
    getStuffing() { // Узнать начинку гамбургера 
    
    }
    calculatePrice() { // Узнать цену 
        let menu = document.querySelectorAll('.menu');
        let price = 0;
        for(let i = 0; i < menu.length; i++) {
            if (menu[i].checked) {
                price += +menu[i].getAttribute('data-price');
            }
        }
        document.querySelector('.price').innerHTML = price;
    }
    calculateCalories() { // Узнать калорийность 
        let menu = document.querySelectorAll('.menu');
        let calories = 0;
        for(let i = 0; i < menu.length; i++) {
            if (menu[i].checked) {
                calories += +(menu[i].getAttribute('data-calories'));
            }
        }
        document.querySelector('.calories').innerHTML = calories;
    }
}

let burg = new Hamburger();
burg.calculatePrice()
burg.calculateCalories()