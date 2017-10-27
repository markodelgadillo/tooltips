function renderTip(i, tip) {
  $button[i].setAttribute('data-tip', tip)
}

const $button = document.querySelectorAll('.button')
const $topRight = document.querySelector('#top-right')
const $topLeft = document.querySelector('#top-left')
const $bottomright = document.querySelector('#bottom-right')
const $bottomLeft = document.querySelector('#bottom-left')

for (let i = 0; i < $button.length; i++) {
  $button[i].addEventListener('mouseenter', function(event) {
    const { top, bottom, left, right } = event.target.getBoundingClientRect()

    console.log(`${top} px from the top of the window`)
    console.log(
      `${window.innerHeight - bottom}px from the bottom of the window`
    )
    console.log(`${left}px from the left of the window`)
    console.log(`${window.innerWidth - right} from the right of the window`)
    console.log(event.target)

    if (
      top < `${window.innerHeight - top}` &&
      left < `${window.innerWidth - left}`
    ) {
      event.target.classList = 'button top-left'
    } else if (
      top < `${window.innerHeight - top}` &&
      right > `${window.innerWidth - right}`
    ) {
      event.target.classList = 'button top-right'
    } else if (
      bottom > `${window.innerHeight - bottom}` &&
      left < `${window.innerWidth - left}`
    ) {
      event.target.classList = 'button bottom-left'
    } else if (
      bottom > `${window.innerHeight - bottom}` &&
      right > `${window.innerWidth - right}`
    ) {
      event.target.classList = 'button bottom-right'
    }

    const tooltip = () => fetch('/tooltip').then(res => res.json())

    tooltip().then(tip => renderTip(i, tip))
  })
}
