const path = require('path')

function getPath(base, current) {
  if (current === 1) {
    return path.join(base, 'index.html')
  }
  return path.join(base, 'page', current.toString(), 'index.html')
}

function getPrev(base, current) {
  if (current === 1) {
    return ''
  }
  if (current === 2) {
    return path.join(base, '/')
  }
  return path.join(base, 'page', (current - 1).toString(), '/')
}

function getNext(base, current) {
  return path.join(base, 'page', (current + 1).toString(), '/')
}

function pagination(args, extra = {}) {
  const {
    base,
    perpage,
    posts,
    title,
  } = args

  if (!perpage || posts.length <= perpage) {
    return [Object.assign({
      base,
      title,
      prev: '',
      next: '',
      posts,
      path: getPath(base, 1),
      current: 1,
      total: 1,
    }, extra)]
  }

  const data = []
  const total = Math.ceil(posts.length / perpage)

  let page = 1

  for (let i = 0; i < posts.length; i += perpage) {
    data.push(Object.assign({
      base,
      title,
      prev: getPrev(base, page),
      next: getNext(base, page),
      posts: posts.slice(i, i + perpage),
      path: getPath(base, page),
      current: page,
      total,
    }, extra))

    if (page === total) {
      data[page - 1].next = ''
    }

    page += 1
  }

  return data
}

module.exports = pagination
