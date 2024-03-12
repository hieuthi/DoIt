import ABCJS from 'abcjs'

const abcjsElements = document.getElementsByClassName('abcjs')
if (abcjsElements.length) {
  console.log(ABCJS);

  Array.from(abcjsElements).forEach((e) => {
    ABCJS.renderAbc(e.id, e.textContent, { responsive: "resize" });
  })
}
