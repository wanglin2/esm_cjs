// 单独导入
// import title, { name1, name2, name3, name1 as name4 } from "./esm.js";
// console.log(title, name1, name2, name3, name4);
// 整体导入
// import title, * as names from './esm.js';
// console.log(title, names);

// export * as ns from "mod";

// import Man from './esm.js';
// const man = new Man()
// man.say()

import res from './esm.js';
console.log(`res`, res.a);