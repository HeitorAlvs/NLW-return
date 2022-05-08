/*alertas e mensagens
alert(1)
console.log("mensagem")*/
/*Funções*/
function onScroll() {
  /*Objetos e funcionalidades*/
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}
function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

/*CRIANDO UM OBJETO EM JS 
    Function ScrollReveal(){
      var options = {
        reveal: function() {}
      }
      return options
    }
    ScrollReveal().reveal()*/
/*Animações na página com ScrollReveal */
ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 900,
}).reveal(`
    #home,
    #home img,
    #home .stats,
    #services,
    #services header,
    #services .card
    #about,
    #about header,
    #about .content`)
