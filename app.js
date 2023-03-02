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

function addFlavor(flavor) {
    console.log(flavor);
    const myFlavor = iceCream.find(x => x.name === flavor)
    myFlavor.quantity++
    console.log(myFlavor);
}

function addTopping(topping) {
    console.log(topping);
    const myTopping = toppings.find(x => x.name === topping)
    myTopping.quantity++
    console.log(myTopping);
}

function addContainer(container) {
    const myContainer = containers.find(x => x.name === container)
    myContainer.quantity++
}

function addCookieDough(){
    const flavorName = iceCream.find(flavor => flavor.name === 'Cookie Dough')

    console.log(flavorName.name);
    // drawFlavors()
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

function drawFlavors(){
    let total = 0
    let template = ''
    iceCream.forEach(flavor => {
        total += flavor.price * flavor.quantity
        if (flavor.quantity) {
        }
        template += `
        <div class="col-md-4 col-sm-12">
            <div class="card border-0">
                <h3>${flavor.name}</h3>
                <img src="${flavor.image}">
                <div class="text-center"><button class="btn btn-outline-primary"
                        onclick="addFlavor('${flavor.name}')">Select</button></div>
            </div>
        </div>
        `
    })
    document.getElementById('flavors').innerHTML = template
}

function drawToppings() {
    let total = 0
    let template = ''
    toppings.forEach(topping => {
        template += `
        <div class="col-md-6 col-sm-12">
            <div class="card border-0">
                <h3>${topping.name}</h3>
                <img src="${topping.image}">
                <div class="text-center"><button class="btn btn-outline-primary"
                        onclick="addTopping('${topping.name}')">Select</button></div>
            </div>
        </div>
        `
    })
    document.getElementById('toppings').innerHTML = template
}

function drawContainers(containers) {
    const containerElem = document.getElementById("containers")
    let template = ''
    containers.forEach(container => {
        template += `${container.price}`
    })
    toppingElem.innerText = template
}

drawFlavors()