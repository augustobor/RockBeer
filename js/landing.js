datetime = document.getElementById("landing--card-day")

const date = new Date()
const now = new Date()
now.setDate(date.getDate() - 1)

datetime.min = now.toLocaleDateString()

const week = new Date()
week.setDate(date.getDate() + 7)
datetime.max = week.toLocaleDateString()



const productsListCombo = [

    {name : 'Combo 1',},
    {name : 'Combo 2',},
    {name : 'Combo 3',},
    {name : 'Combo 4',},

]


datalist = document.getElementById('products')

productsListCombo.forEach(item => {

    product = document.createElement('option')
    product.value = item.name

    datalist.appendChild(product)

})

const submit = document.getElementById('landing--card-button')

submit.onclick = () => {
    const success = document.createElement('p')
    success.innerHTML = "Reserva realizada con exito!"
}