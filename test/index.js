/* global test, expect */

const safeChain = require('../src/')

const obj = {
  a: {
    b: {
      c: '1337'
    }
  }
}

test(`dot notation with existing value`, () => {
  expect(safeChain(obj, 'a.b.c')).toBe('1337')
})

test(`dot notation with missing value`, () => {
  expect(safeChain(obj, 'a.b.d')).toBe(undefined)
})

test(`array notation with existing value`, () => {
  expect(safeChain(obj, '[a][b][c]')).toBe('1337')
})

test(`array notation with missing value`, () => {
  expect(safeChain(obj, '[a][b][d]')).toBe(undefined)
})

test(`mixed dot and array notation with existing value`, () => {
  expect(safeChain(obj, '[a].b[c]')).toBe('1337')
})

test(`mixed dot and array notation with missing value`, () => {
  expect(safeChain(obj, '[a].b[d]')).toBe(undefined)
})

test(`invalid query`, () => {
  expect(safeChain(obj, '[a].b*&%$%ˆ')).toBe(undefined)
  expect(safeChain(obj, '[a].b[c]]')).toBe(undefined)
})

test('non-objects input', () => {
  expect(safeChain(undefined, 'a.b.c')).toBe(undefined)
  expect(safeChain(null, 'a.b.c')).toBe(undefined)
  expect(safeChain(false, 'a.b.c')).toBe(undefined)
  expect(safeChain(true, 'a.b.c')).toBe(undefined)
  expect(safeChain(2, 'a.b.c')).toBe(undefined)
  expect(safeChain('lorem ipsum', 'a.b.c')).toBe(undefined)
})
