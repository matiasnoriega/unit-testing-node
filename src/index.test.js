const chai = require('chai')
const assert = chai.assert
const calc = require('./index')

describe('index', function(){
    context('inicializacion', function(){
        it('must start on zero', function(){
            assert.equal(calc.result(), 0)
        })

        it('debe devolver la suma de dos valores', function(){
            assert.equal(calc.sum(1,2), 3)
        })
    })
})