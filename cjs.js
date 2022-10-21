// // 方式一
// module.exports.name1 = '周杰伦'
// exports.name2 = '朴树'
// 方式二
// module.exports = {
//     name1: '周杰伦',
//     name2: '朴树'
// }


// let name = '周杰伦'
// const setName = (newName) => {
//     name = newName
// }
// module.exports = {
//     name,
//     setName
// }

// class Person {
// 	say() {
// 		console.log(`我是人`);
// 	}
// }

// class Man extends Person {

// }


// module.exports = Man

// module.exports = 1

// const obj = Object.create({a: 1})

// module.exports = obj

const res = {
    name1: '周杰伦'
}
module.exports = res
if (Math.random() > 0.5) {
    console.log(`1`, 1);
    res.name2 = '许巍'
} else {
    console.log(`1`, 2);
    res.name3 = '朴树'
}
