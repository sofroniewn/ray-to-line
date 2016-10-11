var assert = require('assert')

var raytoline = require('../index.js')

function close(x, y) {
  return (x - y) < .01 & (x - y) > -.01
}

function check(x, y) {
  assert.equal(close(x[0], y[0]), true)
  assert.equal(close(x[1], y[1]), true)
}

point = [0,0]
angle = 90
lines = [[-1,1],[1,1],[1,3],[-1,3]]
results = raytoline(point, angle, lines)
console.log(results)
assert.equal(close(results.distance, 1), true)
assert.equal(close(results.angle, 90), true)
check(results.intersection, [0, 1])
