function renderTip(i, tip) {
  $button[i].setAttribute('data-tip', tip)
}

const $button = document.querySelectorAll('.button')

for (let i = 0; i < $button.length; i++) {
  $button[i].addEventListener('mouseenter', function(event) {
    console.log(event.target)

    const tooltip = () => fetch('/tooltip').then(res => res.json())

    tooltip().then(tip => renderTip(i, tip))
  })
}

/*
const { top, bottom, left, right } = event.target.getBoundingClientRect()
console.log(`${top} px from the top of the window`)
console.log(`${window.innerHeight - bottom}px from the bottom of the window`)
console.log(`${left}px from the left of the window`)
console.log(`${window.innerWidth - right} from the right of the window`)
*/
/*
var $buttons = document.querySelectorAll('.button')
for (var i = 0; i < $buttons.length; i++) {
  $buttons[i].addEventListener('mouseenter', function(event) {
    const tooltip = () => fetch('/tooltip').then(res => res.json())

    tooltip().then(tip => renderTip(tip))
  })
}
*/
