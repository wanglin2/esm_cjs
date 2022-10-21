// // 方式一
// export let name1 = '周杰伦'
// export const setName1 = (name) => {
// 	name1 = name
// }
// // 方式二
// let name2 = '蔡依林'
// export {
// 	name2
// }
// // 重命名
// export {
// 	name1 as name3
// }
// // 默认导出
// export default '华语乐坛经典人物'

// class Person {
// 	say() {
// 		console.log(`我是人`);
// 	}
// }

// class Man extends Person {

// }

// export default Man

// const fn = () => {
// 	return {
// 		name: '周杰伦'
// 	}
// }
// export default fn()

const obj = Object.create({a: 1})

export default obj