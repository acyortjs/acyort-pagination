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
      title: 'zzz'
    }
    const result = jsonify([ { base: '/xxx/yyy',
    title: 'zzz',
    prev: '',
    next: '',
    posts: [ 1, 2, 3, 4, 5 ],
    path: '/xxx/yyy/index.html',
    current: 1,
    total: 1 } ])

    assert(jsonify(pagination(data)) === result)
  })

  it('width pages', () => {
    const data = {
      base: '/',
      perpage: 2,
      posts: [1, 2, 3, 4, 5],
      title: 'index'
    }
    const result = jsonify([ { base: '/',
    title: 'index',
    prev: '',
    next: '/page/2/',
    posts: [ 1, 2 ],
    path: '/index.html',
    current: 1,
    total: 3 },
  { base: '/',
    title: 'index',
    prev: '/',
    next: '/page/3/',
    posts: [ 3, 4 ],
    path: '/page/2/index.html',
    current: 2,
    total: 3 },
  { base: '/',
    title: 'index',
    prev: '/page/2/',
    next: '',
    posts: [ 5 ],
    path: '/page/3/index.html',
    current: 3,
    total: 3 } ])

    assert(jsonify(pagination(data)) === result)
  })
})
