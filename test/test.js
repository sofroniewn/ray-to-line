var assert = require('assert')

var raytoline = require('../index.js')

function close(x, y) {
  return (x - y) < .01 & (x - y) > -.01 
}

function check(x, y) {
  assert.equal(close(x[0], y[0]), true)
  assert.equal(close(x[1], y[1]), true)
}

ray = [0, 1]
line = [[-1, 0.5], [1, 0.5]]
result = raytoline(ray, line)
check(result.point, [0, 0.5])

ray = [0, 1]
line = [[-1, 1], [1, 1]]
result = raytoline(ray, line)
check(result.point, [0, 1])

ray = [0, 1]
line = [[0, 0.5], [0, 1.5]]
result = raytoline(ray, line)
check(result.point, [0, 0.5])

ray = [0, 1]
line = [[0, 1], [0, 2]]
result = raytoline(ray, line)
check(result.point, [0, 1])

ray = [0, 1]
line = [[0, 0], [0, 1]]
result = raytoline(ray, line)
check(result.point, [0, 0])

ray = [0, 1]
line = [[0, -1], [0, 1]]
result = raytoline(ray, line)
check(result.point, [0, 0])

ray = [0, 1]
line = [[0, 2], [0, 5]]
result = raytoline(ray, line)
check(result.point, [0, 2])

ray = [0, 1]
line = [[0.1, -1], [0.1, 1]]
result = raytoline(ray, line)
assert.equal(result, false)


ray = [0.7071, 0.7071]
line = [[2, 0], [2, 10]]
result = raytoline(ray, line)
check(result.point, [2, 2])