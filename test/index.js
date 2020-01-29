const assert = require('assert')
const calc = require('../src/index.js')

try {
    assert.equal(calc.result(),0,'El valor inicial no es cero')
    assert.equal(calc.sum(1, 2),3,'El resultado de la suma no es correcto')
    assert.equal(calc.sum(1, 3),4,'El resultado de la suma no es correcto')
} catch (err) {
    console.error(err.message)
}