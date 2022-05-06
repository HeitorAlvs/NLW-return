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
