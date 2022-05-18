/* Add um evento na janela */
window.addEventListener('scroll', onScroll)

onScroll()

/*alertas e mensagens
alert(1)
console.log("mensagem")*/
/*Funções*/
function onScroll() {
  /*Objetos e funcionalidades*/
  showNavOnScroll()
  showBackToTopButtonOnScroll()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight
  const sectionTopReachOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight
  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  const sectionBoundaries =
    sectionTopReachOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')

  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}
/* Função para mostrar o navigation onscroll */
function showNavOnScroll() {
  if (scrollY > 0) {
    navigation.classList.add('scroll')
  } else {
    navigation.classList.remove('scroll')
  }
}
/* Monstrar o botão back to top on scroll  */
function showBackToTopButtonOnScroll() {
  if (scrollY > 600) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/*Abrir o menu */
function openMenu() {
  document.body.classList.add('menu-expanded')
}
/* Fechar o menu */
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
  duration: 900
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
