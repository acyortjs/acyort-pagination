const { join } = require('path')

function getPath(base, current, prefix) {
  if (current === 1) {
    return base
  }
  return join(base, prefix, current.toString(), '/')
}

function getPrev(base, current, prefix) {
  if (current === 1) {
    return ''
  }
  if (current === 2) {
    return join(base, '/')
  }
  return join(base, prefix, (current - 1).toString(), '/')
}

function getNext(base, current, prefix) {
  return join(base, prefix, (current + 1).toString(), '/')
}

module.exports = (args, extra = {}) => {
  const {
    base,
    perpage,
    posts,
    prefix = 'page',
  } = args

  if (!perpage || posts.length <= perpage) {
    return [{
      ...extra,
      base,
      prev: '',
      next: '',
      posts,
      currentPath: getPath(base, 1, prefix),
      current: 1,
      total: 1,
    }]
  }

  const data = []
  const total = Math.ceil(posts.length / perpage)

  let page = 1

  for (let i = 0; i < posts.length; i += perpage) {
    data.push({
      ...extra,
      base,
      prev: getPrev(base, page, prefix),
      next: getNext(base, page, prefix),
      posts: posts.slice(i, i + perpage),
      currentPath: getPath(base, page, prefix),
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
