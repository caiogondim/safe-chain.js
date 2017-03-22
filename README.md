<img src="http://rawgit.com/caiogondim/safe-chain.js/master/img/icon.svg">

<h1 align="center">safe-chain.js</h1>


<div align="center">
<img src="http://travis-ci.org/caiogondim/safe-chain.js.svg?branch=master" alt="Travis CI"> <img src="http://img.badgesize.io/caiogondim/safe-chain.js/master/src/index.js?compression=gzip"> <img src="https://codecov.io/gh/caiogondim/obstructed.js/branch/master/graph/badge.svg" alt="Codecov">
</div>

<br>

No more crazy checks to safely get a nested value inside an object.

Think of it as [Ruby safe operator](https://irb.rocks/ruby-safe-operator/) or
[CoffeeScript existential
operator](http://valve.github.io/blog/2013/07/13/existential-operator-in-coffeescript/),
implemented as a simple function in JavaScript.

## Usage

### Nested value

```js
// Before
const nestedVal = (
  obj &&
  obj.lorem &&
  obj.lorem.ipsum &&
  obj.lorem.ipsum.dolor
)

// After
const nestedVal = safeChain(obj, `lorem.ipsum.dolor`)
```

### Nested function

```js
// Before
const nestedFuncVal = (
  obj &&
  obj.lorem &&
  obj.lorem.ipsum &&
  obj.lorem.ipsum.dolor &&
  typeof obj.lorem.ipsum.dolor === 'function'
    ? obj.lorem.ipsum.dolor()
    : undefined
)

// After
const nestedFuncVal = safeChain(obj, `lorem.ipsum.dolor`)()
```

## Installation

```bash
npm install safe-chain
```


## Credits

- [Ruby safe operator](https://irb.rocks/ruby-safe-operator/)
- [CoffeeScript existential operator](http://valve.github.io/blog/2013/07/13/existential-operator-in-coffeescript/)
- Icon by Martin Chapman Fromm from the Noun Project

---

[caiogondim.com](https://caiogondim.com) &nbsp;&middot;&nbsp;
GitHub [@caiogondim](https://github.com/caiogondim) &nbsp;&middot;&nbsp;
Twitter [@caio_gondim](https://twitter.com/caio_gondim)
