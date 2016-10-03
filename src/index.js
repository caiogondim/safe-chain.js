const quoteQuery = (query) => {
  return query
    .replace(/\[/g,'[\'')
    .replace(/\]/g, '\']')
}

const safeProp = (obj, query) => {
  var prop
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

module.exports = safeProp
