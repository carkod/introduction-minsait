export default function changeSection () {
  const findButtons = document.querySelectorAll('.btn');
  const findTabs = document.querySelectorAll('.tab')
  const handleClick = (e) => {
    e.preventDefault();
    for (let i = 0; i < findButtons.length; i++) {
        findButtons[i].classList.remove('active');
    }

    // 2. Gestionar elemento cliqueado
    const clickedElement = e.currentTarget.classList;
    if (!clickedElement.contains('active')) {
      clickedElement.add('active');

    }

    // 3. Quitar las clases activas de los tabs
    for (let i = 0; i < findButtons.length; i++) {
        findTabs[i].classList.remove('active');
    }
    const tabRef = e.target.getAttribute('href');
    const activateTab = document.querySelector(tabRef);
    console.log()
    activateTab.classList.add('active');

  }

  // 1. Añadir evento a elementos
  window.addEventListener("load", function() {
    for (let i = 0; i < findButtons.length; i++) {
		    findButtons[i].addEventListener('click', handleClick)
	  }

  });
}
