const safeChain = require('../src/')
const tap = require('tap')

const obj = {
  a: {
    b: {
      c: '1337'
    }
  }
}

tap.test(`dot notation with existing value`, (test) => {
  test.ok(safeChain(obj, 'a.b.c') === '1337')
  test.end()
})

tap.test(`dot notation with missing value`, (test) => {
  test.ok(safeChain(obj, 'a.b.d') === undefined)
  test.end()
})

tap.test(`array notation with existing value`, (test) => {
  test.ok(safeChain(obj, '[a][b][c]') === '1337')
  test.end()
})

tap.test(`array notation with missing value`, (test) => {
  test.ok(safeChain(obj, '[a][b][d]') === undefined)
  test.end()
})

tap.test(`mixed dot and array notation with existing value`, (test) => {
  test.ok(safeChain(obj, '[a].b[c]') === '1337')
  test.end()
})

tap.test(`mixed dot and array notation with missing value`, (test) => {
  test.ok(safeChain(obj, '[a].b[d]') === undefined)
  test.end()
})

tap.test(`invalid query`, (test) => {
  test.ok(safeChain(obj, '[a].b*&%$%ˆ') === undefined)
  test.ok(safeChain(obj, '[a].b[c]]') === undefined)
  test.end()
})
