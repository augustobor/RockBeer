const productsList = [

    {
        combo: 'Combo 1',
        image: '../images/menu/combo1.png',
        description: '🍔 Hamburguesa completa + porción de papas + una cerveza 1L 🍺',
        price: '$8',
    },

    {
        combo: 'Combo 2',
        image: '../images/menu/combo2.png',
        description: '🍟 Papas con cheddar + 2 cervezas de 1L 🍻',
        price: '$5',
    },

    {
        combo: 'Combo 3',
        image: '../images/menu/combo3.png',
        description: '🍔 Hamburguesa completa + 1 pinta 🍺',
        price: '$5',
    },

    {
        combo: 'Combo 4',
        image: '../images/menu/combo4.png',
        description: '🍕 Pizza a elección + 2 pintas 🍺',
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