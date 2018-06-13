import './index.scss';
let obj = {name: 'lanpangzhi'};
let obj2 = {blog: 'http://blog.langpz.com'};
let newObj = {...obj, ...obj2};  // es7语法
console.log(newObj);