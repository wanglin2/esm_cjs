// const names = require('./cjs.js')
// console.log(`names`, names.name1);
// names.name1 = 1
// console.log(`names`, names.name1);

// let { name, setName } = require("./cjs.js")
// console.log(name)
// setName('许巍')
// console.log(name)

const res = require('./cjs.js')
console.log(res);

const res2 = require('./cjs2.js')
console.log(res2);

module.exports = {
    res,
    res2
}