var pinchZoom = require('..')
var el = document.querySelector('.wrapper')
var pzoom = pinchZoom(el, {
  draggable: true,
  maxScale: 4
})
pzoom.on('swipe', function (dir) {
  console.log(dir)
})
