const pagination = require('../')
const assert = require('power-assert')

function jsonify(data) {
  return JSON.stringify(data)
}

describe('pagination', () => {
  it('no pages', () => {
    const data = {
      base: '/xxx/yyy',
      perpage: 0,
      posts: [1, 2, 3, 4, 5],
    }
    const extra = { title: 'zzz', base: 1 }
    const result = jsonify([ {
    title: 'zzz',
    base: '/xxx/yyy',
    prev: '',
    next: '',
    posts: [ 1, 2, 3, 4, 5 ],
    currentPath: '/xxx/yyy',
    current: 1,
    total: 1 } ])

    assert(jsonify(pagination(data, extra)) === result)
  })

  it('width pages', () => {
    const data = {
      base: '/',
      perpage: 2,
      posts: [1, 2, 3, 4, 5],
    }
    const result = jsonify([ { base: '/',
    prev: '',
    next: '/page/2/',
    posts: [ 1, 2 ],
    currentPath: '/',
    current: 1,
    total: 3 },
  { base: '/',
    prev: '/',
    next: '/page/3/',
    posts: [ 3, 4 ],
    currentPath: '/page/2',
    current: 2,
    total: 3 },
  { base: '/',
    prev: '/page/2/',
    next: '',
    posts: [ 5 ],
    currentPath: '/page/3',
    current: 3,
    total: 3 } ])

    assert(jsonify(pagination(data)) === result)
  })

  it('prefix', () => {
    const data = {
      base: '/',
      perpage: 2,
      posts: [1, 2, 3],
      prefix: 'nav',
    }
    const result = jsonify([ { base: '/',
    prev: '',
    next: '/nav/2/',
    posts: [ 1, 2 ],
    currentPath: '/',
    current: 1,
    total: 2 },
  { base: '/',
    prev: '/',
    next: '',
    posts: [ 3 ],
    currentPath: '/nav/2',
    current: 2,
    total: 2 } ])

    assert(jsonify(pagination(data)) === result)
  })
})
