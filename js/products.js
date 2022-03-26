

new Vue({
    el: '#products--items',
    
    data () {
      return {

        productsList: [

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

      }
    }
  })    
