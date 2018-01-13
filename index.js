const path = require('path')

function getPath(base, current) {
  if (current === 1) {
    return path.join(base, 'index.html')
  }
  return path.join(base, current.toString(), 'index.html')
}

function getPrev(base, current) {
  if (current === 1) {
    return ''
  }
  return path.join(base, 'page', (current - 1).toString(), '/')
}

function getNext(base, current) {
  return path.join(base, 'page', (current + 1).toString(), '/')
}

function pagination(args) {
  const {
    base,
    perpage,
    posts,
    title,
  } = args

  if (perpage === 0 || posts.length <= perpage) {
    return [{
      base,
      title,
      prev: '',
      next: '',
      posts,
      path: getPath(base, 1),
      current: 1,
      total: 1,
    }]
  }

  const data = []
  const total = Math.ceil(posts.length / perpage)

  let page = 1

  for (let i = 0; i < posts.length; i += perpage) {
    data.push({
      base,
      title,
      prev: getPrev(base, page),
      next: getNext(base, page),
      posts: posts.slice(i, i + perpage),
      path: getPath(base, page),
      current: page,
      total,
    })

    if (page === total) {
      data[page - 1].next = ''
    }

    page += 1
  }

  return data
}

module.exports = pagination
