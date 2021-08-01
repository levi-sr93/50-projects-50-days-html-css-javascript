const panels = document.querySelectorAll('.panel') //returns nodeList

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses();
    panel.classList.add("active");
  })
})

function removeActiveClasses(){
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}