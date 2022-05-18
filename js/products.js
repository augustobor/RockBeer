const productsList = [

    {
        combo: 'Combo 1',
        image: '../images/menu/combo1.webp',
        description: '🍔 XL hamburguese + 🍟 Chips + 1L beer 🍺',
        price: '$8',
    },

    {
        combo: 'Combo 2',
        image: '../images/menu/combo2.webp',
        description: '🍟 Chips with cheddar + 2L beer 🍻',
        price: '$5',
    },

    {
        combo: 'Combo 3',
        image: '../images/menu/combo3.webp',
        description: '🍔 XL hamburguese + 1 glass of beer 🍺',
        price: '$5',
    },

    {
        combo: 'Combo 4',
        image: '../images/menu/combo4.webp',
        description: '🍕 Choose your pizza + 2 glasses of beer 🍺',
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

    const description = document.createElement('p')
    const price = document.createElement('p')
    const button = document.createElement('a')
 
    title.textContent = item.combo

    image.src = item.image
    image.alt = "combo"

    description.textContent = item.description
    price.textContent = item.price
    price.className = "product--items-price"
    button.id = "products--items-button"
    button.textContent = "Reservar"

    button.onclick = () => {
        button.href = "./landing.html"
    }

    container.appendChild(article)

    article.appendChild(title)
    article.appendChild(subContainer)

    subContainer.appendChild(image)
    subContainer.appendChild(subSubContainer)


    subSubContainer.appendChild(description)
    subSubContainer.appendChild(price)
    subSubContainer.appendChild(button)
    
 })