datetime = document.getElementById("landing--card-day")

const date = new Date()
const now = new Date()
now.setDate(date.getDate() - 1)

datetime.min = now.toLocaleDateString()

const week = new Date()
week.setDate(date.getDate() + 7)
datetime.max = week.toLocaleDateString()



const productsList = [

    {name : 'Name 1',},
    {name : 'Name 2',},
    {name : 'Name 3',},
    {name : 'Name 4',},

]


datalist = document.getElementById('products')

productsList.forEach(item => {

    product = document.createElement('option')
    product.value = item.name

    datalist.appendChild(product)

})