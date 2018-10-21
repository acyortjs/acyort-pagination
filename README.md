# acyort-pagination

[![Build Status](https://travis-ci.org/acyortjs/paginator.svg?branch=master)](https://travis-ci.org/acyortjs/paginator)
[![codecov](https://codecov.io/gh/acyortjs/paginator/branch/master/graph/badge.svg)](https://codecov.io/gh/acyortjs/paginator)

pagination utilities

## Install

```bash
$ npm i @acyort/paginator -S
```

## Usage

```js
const pagination = require('@acyort/paginator')

let data = {
  base: '/xxx/yyy',             // base url
  perpage: 0,                   // per page
  posts: [1, 2, 3, 4, 5],       // posts data
  prefix: 'nav'                 // page prefix, default 'page'
}

const extra = { title: 'zzz' }  // extra data

pagination(data, extra)
/*
[ { base: '/xxx/yyy',
    title: 'zzz',
    prev: '',
    next: '',
    posts: [ 1, 2, 3, 4, 5 ],
    currentPath: '/xxx/yyy',
    current: 1,
    total: 1, type: 'index' } ]
*/

data = {
  base: '/',
  perpage: 2,
  posts: [1, 2, 3, 4, 5],
}

pagination(data)
/*
[ { base: '/',
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
    total: 3 } ]
*/
```
