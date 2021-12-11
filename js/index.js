
const userInfoList = [

    {
        profile: '../images/main/icons/augusIcon.png',
        name : 'Augusto',
        opinion: 'Excelente calidad y atención.',
    },

    {
        profile: '../images/main/icons/sebaIcon.png',
        name : 'Seba',
        opinion: 'La mejor cervecería de La Plata.',
    },

    {
        profile: '../images/main/icons/belIcon.png',
        name : 'Belen',
        opinion: 'Voy siempre y la recomiendo por la variedad del menú y sus precios.',
    },

    {
        profile: '../images/main/icons/valenIcon.png',
        name : 'Valen',
        opinion: 'Un lugar muy confortable',
    },

    {
        profile: '../images/main/icons/sajiIcon.png',
        name : 'Saji',
        opinion: 'Excelente atención y gran servicio',
    },
]


const cont = document.getElementById("main--carrusel-opinions")


userInfoList.forEach(item => {

   const article = document.createElement('article')
   const subContainer = document.createElement('div')
   const profile = document.createElement('img')
   const name = document.createElement('b')
   const description = document.createElement('p')

   profile.src = item.profile
   name.textContent = item.name
   subContainer.appendChild(profile)
   subContainer.appendChild(name)

   description.textContent = item.opinion

   article.appendChild(subContainer)
   article.appendChild(description)
   cont.appendChild(article)
   
})




    