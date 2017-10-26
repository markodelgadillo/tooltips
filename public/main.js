function renderTip(tip) {
  $button.setAttribute('data-tip', tip)
}

const $button = document.querySelector('.button')

$button.addEventListener('mouseenter', function(event) {
  const { top, bottom, left, right } = event.target.getBoundingClientRect()
  console.log(event.target)
  const target = () => event.target
  const tooltip = () => fetch('/tooltip').then(res => res.json())
  tooltip().then(tip => renderTip(tip))

  console.log(`${top} px from the top of the window`)
  console.log(`${window.innerHeight - bottom}px from the bottom of the window`)
  console.log(`${left}px from the left of the window`)
  console.log(`${window.innerWidth - right} from the right of the window`)
})
