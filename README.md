# acyort-pagination

[![Build Status](https://travis-ci.org/acyortjs/acyort-pagination.svg?branch=master)](https://travis-ci.org/acyortjs/acyort-pagination)
[![codecov](https://codecov.io/gh/acyortjs/acyort-pagination/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/acyort-pagination)

Pagination utilities for [AcyOrt](https://github.com/acyortjs/acyort)

## Install

```bash
$ npm i acyort-pagination -S
```

## Usage

```js
const pagination = require('acyort-pagination')

let data = {
  base: '/xxx/yyy',
  perpage: 0,
  posts: [1, 2, 3, 4, 5],
  title: 'zzz'
}

const extra = { type: 'index' }

pagination(data, extra)
/*
[ { base: '/xxx/yyy',
    title: 'zzz',
    prev: '',
    next: '',
    posts: [ 1, 2, 3, 4, 5 ],
    path: '/xxx/yyy/index.html',
    current: 1,
    total: 1, type: 'index' } ]
*/

data = {
  base: '/',
  perpage: 2,
  posts: [1, 2, 3, 4, 5],
  title: 'index'
}

pagination(data)
/*
[ { base: '/',
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
    total: 3 } ]
*/
```
