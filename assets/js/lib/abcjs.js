import ABCJS from 'abcjs'

const abcjsElements = document.getElementsByClassName('abcjs')
Array.from(abcjsElements).forEach((e) => {
  ABCJS.renderAbc(e.id, e.textContent, { responsive: "resize" });
})
