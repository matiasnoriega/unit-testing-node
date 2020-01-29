const assert = require('assert')
const calc = require('../src/index.js')

try {
    assert.equal(calc.result(),0,'El valor inicial no es cero')
} catch (err) {
    console.error(err.message)
}