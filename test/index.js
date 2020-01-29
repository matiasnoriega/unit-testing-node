const assert = require('assert');

try {
    assert.equal(1,2,'No son iguales');
} catch (err) {
    console.error(err.message);
}