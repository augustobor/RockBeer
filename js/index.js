
const userInfoList = [

    {
        profile: '../images/main/icons/augusIcon.png',
        name : 'Augusto',
        opinion: 'Muy buen lugar',
    },

    {
        profile: '../images/main/icons/sebaIcon.png',
        name : 'Seba',
        opinion: 'Muy buen lugar',
    },

    {
        profile: '../images/main/icons/belIcon.png',
        name : 'Belen',
        opinion: 'Muy buen lugar',
    },

    {
        profile: '../images/main/icons/valenIcon.png',
        name : 'Valen',
        opinion: 'Muy buen lugar',
    },
]


const container = document.getElementById("main--carrusel-opinions")


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
   container.appendChild(article)
   
})




    