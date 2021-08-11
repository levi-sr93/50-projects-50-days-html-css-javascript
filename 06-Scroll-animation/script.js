const boxes = document.querySelectorAll('.box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  //taking a trigger point
  const triggerBottom = window.innerHeight / 5 * 4;

  boxes.forEach((box) => {
    //see getBoundingClientRect in MDN
    const boxTop = box.getBoundingClientRect().top;

    if(boxTop < triggerBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}