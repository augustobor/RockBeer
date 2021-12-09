const productsList = [

    {
        combo: 'Combo 1',
        image: '../images/menu/phone/combo1.png',
        name : 'Name 1',
        description: 'Some description',
        price: '$10',
    },

    {
        combo: 'Combo 2',
        image: '../images/menu/phone/combo2.png',
        name : 'Name 2',
        description: 'Some description',
        price: '$10',
    },

    {
        combo: 'Combo 3',
        image: '../images/menu/phone/combo3.png',
        name : 'Name 3',
        description: 'Some description',
        price: '$10',
    },

    {
        combo: 'Combo 4',
        image: '../images/menu/phone/combo4.png',
        name : 'Name 4',
        description: 'Some description',
        price: '$10',
    },
]


const container = document.getElementById("products--items")


productsList.forEach(item => {

    const article = document.createElement('article')
    const title = document.createElement('p')
    const subContainer = document.createElement('div')
    const image = document.createElement('img')
    const subSubContainer = document.createElement('div')
    const name = document.createElement('p')
    const description = document.createElement('p')
    const price = document.createElement('p')
    const button = document.createElement('a')
 
    title.textContent = item.combo

    image.src = item.image

    name.textContent = item.name
    description.textContent = item.description
    price.textContent = item.price
    button.id = "products--items-button"
    button.href = "./landing.html"
    button.textContent = "Reservar"

    container.appendChild(article)

    article.appendChild(title)
    article.appendChild(subContainer)

    subContainer.appendChild(image)
    subContainer.appendChild(subSubContainer)

    subSubContainer.appendChild(name)
    subSubContainer.appendChild(description)
    subSubContainer.appendChild(price)
    subSubContainer.appendChild(button)

    
 })