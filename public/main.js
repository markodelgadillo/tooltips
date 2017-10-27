function renderTip(i, tip) {
  $button[i].setAttribute('data-tip', tip)
}

const $button = document.querySelectorAll('.button')

for (let i = 0; i < $button.length; i++) {
  $button[i].addEventListener('mouseenter', function(event) {
    const { top, bottom, left, right } = event.target.getBoundingClientRect()

    if (
      top < `${window.innerHeight - top}` &&
      left < `${window.innerWidth - left}`
    ) {
      event.target.className = 'button top-left'
    } else if (
      top < `${window.innerHeight - top}` &&
      right > `${window.innerWidth - right}`
    ) {
      event.target.className = 'button top-right'
    } else if (
      bottom > `${window.innerHeight - bottom}` &&
      left < `${window.innerWidth - left}`
    ) {
      event.target.className = 'button bottom-left'
    } else if (
      bottom > `${window.innerHeight - bottom}` &&
      right > `${window.innerWidth - right}`
    ) {
      event.target.className = 'button bottom-right'
    }

    const tooltip = () => fetch('/tooltip').then(res => res.json())

    tooltip().then(tip => renderTip(i, tip))
  })
}
