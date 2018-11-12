学习笔记

## 目录

- [export与export default](#export与export-default)


## export与export default
* 1、export与export default均可用于导出常量、函数、文件、模块等。
* 2、你可以在其它文件或模块中通过import+(常量 | 函数 | 文件 | 模块)名的方式，将其导入，以便能够对其进行使用。
* 3、在一个文件或模块中，export、import可以有多个，export default仅有一个。
* 4、通过export方式导出，在导入时要加{ }，export default则不需要。
```javascript
var name="李四";
export { name }
//import { name } from "/.a.js" 
可以写成：
var name="李四";
export default name
//import name from "/.a.js" 这里name不需要大括号

/*第三条*/
var name1="李四";
var name2="张三";
export { name1 ,name2 }
//也可以写成如下，也是可以的，import跟他类似。
var name1="李四";
var name2="张三";
export name1;
export name2;
```
* 5.使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名
```javascript
//a.js
let sex = "boy";
export default sex（sex不能加大括号）
//原本直接export sex外部是无法识别的，加上default就可以了.但是一个文件内最多只能有一个export default。
//其实此处相当于为sex变量值"boy"起了一个系统默认的变量名default，自//然default只能有一个值，所以一个文件内不能有多个export default。

// b.js
//本质上，a.js文件的export default输出一个叫做default的变量，然后系统允许你为它取任意名字。所以可以为import的模块起任何变量名，且不需要用大括号包含
import any from "./a.js"
import any12 from "./a.js" 
console.log(any,any12)   // boy,boy
```
