$wrapper = $(wrapper)
$float = $(float)
$wrapper.on('click', (e) => {
  $float.css({display: 'block'})
  e.stopPropagation()
  $(document).one('click', () => {
    $float.css({display: 'none'})
})
})
