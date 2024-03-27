const { createApp } = Vue

createApp({
  data() {
    return {
        slides: [
            {
                image: 'img/01.webp',
                title: 'Marvel\'s Spiderman Miles Morale',
                text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
            }, {
                image: 'img/02.webp',
                title: 'Ratchet & Clank: Rift Apart',
                text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
            }, {
                image: 'img/03.webp',
                title: 'Fortnite',
                text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
            }, {
                image: 'img/04.webp',
                title: 'Stray',
                text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
            }, {
                image: 'img/05.webp',
                title: "Marvel's Avengers",
                text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
            }
        ],
        // Stabiliamo l'indice 0 che ci aiuta a stabilire quale scorrere nell'array 
        activeImage: 0,
        // Stabiliamo una variabile per l'autoplay che ci permette di etichettare il setInterval e di conseguenza stopparlo con il clearInterval
        controlAutoplay: null
    }
  },

  methods: {
    // Al click l'immagine del carosello cambia e diventa l'immagine successiva all'incrementare dell'indice
    nextImage: function() {
        if (this.activeImage < this.slides.length - 1) {
            this.activeImage++
        } else {
            this.activeImage = 0
        }
    },
    // Al click l'immagine del carosello cambia e diventa l'immagine precedente al decremento dell'indice
    previousImage: function() {
        if (this.activeImage > 0) {
            this.activeImage--
        } else {
            this.activeImage = this.slides.length - 1
        }
    },

    // Stabiliamo un setInterval che attivi l'autolpay e lo mettiamo dentro una variabile che in precedenza abbiamo stabilito sia "null"
    autoplayCarousel() {
        this.controlAutoplay = setInterval(this.nextImage, 3000);
    },

    // Poniamo un clearInterval che disattiva l'autoplay del carosello
    stopAutoplay() {
        clearInterval(this.controlAutoplay);
        this.controlAutoplay = null
    }

  },
  // Al caricamento della pagina il mounted viene caricato un leggero delay
  mounted() {
    this.autoplayCarousel()
}

}).mount('#app')

