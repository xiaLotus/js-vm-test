const vm = require('vm')

const a = 5
global.a = 11

vm.runInThisContext("console.log('ok', a)")
vm.runInThisContext("console.log(global)")

console.log(a)
// console.log(global.a)
// 11