const userInfoList = [

    {
        profile: '../images/main/icons/augusIcon.webp',
        name : 'Augusto',
        opinion: 'Excellent quality and atention',
    },

    {
        profile: '../images/main/icons/sebaIcon.webp',
        name : 'Seba',
        opinion: 'Best pub in La Plata',
    },

    {
        profile: '../images/main/icons/belIcon.webp',
        name : 'Belen',
        opinion: 'I always go and I recomend because the variety of the menu and their prices is so high!',
    },

    {
        profile: '../images/main/icons/valenIcon.webp',
        name : 'Valen',
        opinion: 'A very comfortable place',
    },

    {
        profile: '../images/main/icons/sajiIcon.webp',
        name : 'Saji',
        opinion: 'Excellent atention and great service',
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
   profile.alt = "image icon"
   name.textContent = item.name

   subContainer.appendChild(profile)
   subContainer.appendChild(name)

   description.textContent = item.opinion

   article.appendChild(subContainer)
   article.appendChild(description)
   cont.appendChild(article)
   
})
