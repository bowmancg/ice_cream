const iceCream = [{
    name: 'Cookie Dough',
    image: 'https://celebratingsweets.com/wp-content/uploads/2014/04/Cookie-Dough-Ice-Cream-1-5.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Vanilla',
    image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/ultimate-vanilla-ice-cream-1628511695.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Strawberry',
    image: 'https://www.realfoodwithjessica.com/wp-content/uploads/2017/07/paleostrawberryicecream2.jpg',
    price: 2,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/f6/Sprinkles2.jpg',
    price: 1,
    quantity: 0
}, {
    name: 'Chocolate Chips',
    image: 'https://www.eatthis.com/wp-content/uploads/sites/4/2020/05/chocolate-chips.jpg?quality=82&strip=1&resize=640%2C360',
    price: 2,
    quantity: 0
}]

const containers = [{
    name: 'Waffle Cone',
    image: 'https://m.media-amazon.com/images/I/71VNjBMakfL._SL1500_.jpg',
    price: 2,
    quantity: 0
}, {
    name: 'Waffle Bowl',
    image: 'http://images.wbmason.com/350/L_JOY66050.jpg',
    price: 4,
    quantity: 0
}]

function addCookieDough(iceCream){
    const flavorName = iceCream.find(flavor => flavor.name === 'Cookie Dough')
    console.log(flavorName.name);
    drawFlavors()
}

function addStrawberry(iceCream) {
    const flavorName = iceCream.find(flavor => flavor.name === 'Strawberry')
    console.log(flavorName.name);
    drawFlavors()
}

function addVanilla(iceCream) {
    const flavorName = iceCream.find(flavor => flavor.name === 'Vanilla')
    console.log(flavorName.name);
    drawFlavors()
}

function addChocolateChips(toppings) {
    const toppingName = toppings.find(topping => topping.name === 'Chocolate Chips')
    console.log(toppingName.name);
    drawToppings()
}

function addSprinkles(toppings) {
    const toppingName = toppings.find(topping => topping.name === 'Sprinkles')
    console.log(toppingName.name);
    drawToppings()
}

function addWaffleCone(containers) {
    const containerName = containers.find(container => container.name === 'Waffle Cone')
    drawContainers()
}

function addWaffleBowl(containers) {
    const containerName = containers.find(container => container.name === 'Waffle Bowl')
    drawContainers()
}

function drawFlavors(iceCream){
    let total = 0
    let template = ''
    iceCream.forEach(flavor => {
        total += flavor.price * flavor.quantity
        if (flavor.quantity) {
            template += `${flavor.name}`
        }
    })
    
}

function drawToppings(toppings) {
    const toppingElem = document.getElementById("toppings")
    let template = ''
    toppings.forEach(topping => {
        template += `${topping.price}`
    })
    toppingElem.innerText = template
}

function drawContainers(containers) {
    const containerElem = document.getElementById("containers")
    let template = ''
    containers.forEach(container => {
        template += `${container.price}`
    })
    toppingElem.innerText = template
}

function drawCartFlavor() {
    let total = 0
    let template = ''
    iceCream.forEach(item => {
        total += item.price * item.quantity
        if (item.quantity) {
            template += `
            <div class="col-12 card border-0 p-2">
                <div>${item.image}</div>
                <b>${item.name}</b>
                <b>${item.price}</b>
                <h2>Is this your ice cream</h2>
                <button onclick="">Confirm</button>
            </div>
            `
        }
    })
    document.getElementById('items').innerHTML = template
}