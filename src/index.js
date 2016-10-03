//
// Decorator
//

const decorateObj = (obj) => {
  return new Proxy(obj, {
    get: (target, prop) => {
      return queryObj(target, prop)
    }
  })
}

//
// Query
//

const quoteQuery = (query) => {
  return query
    .replace(/\[/g,'[\'')
    .replace(/\]/g, '\']')
}

const queryObj = (obj, query) => {
  let prop
  const quotedQuery = quoteQuery(query)

  try {
    if (query[0] === '[') {
      prop = eval(`obj${quotedQuery}`)
    } else {
      prop = eval(`obj.${query}`)
    }
  } catch (error) {
    prop = undefined
  }

  return prop
}

//
// API
//

const safeProp = (obj, query) => {
  if (query === undefined) {
    return decorateObj(obj)
  } else {
    return queryObj(obj, query)
  }
}

module.exports = safeProp
