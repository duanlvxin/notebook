# Nodejs模块实现

node.js模块管理是基于commonjs的

## 模块分类

模块包括：
1、核心模块（在Node源代码编译过程中，就编译进了二进制执行文件，所以不需要文件定位和编译执行，只需要路径分析这一步；并且在路径分析中优先判断，执行速度最快）

2、文件模块（路径分析、文件定位、编译执行）

执行步骤：
路径分析、文件定位、编译执行

## 优先从缓存加载
加载过的文件会缓存起来,不会重复执行里面的代码

## 路径分析和文件定位

### 路径分析

基于模块标识符
分为：
1、核心模块，如http
2、相对路径模块（转为绝对路径）
3、绝对路径模块
4、自定义模块

自定义模块路径生成规则：
1、当前目录的node_modules
2、父级的node_modules
3、父级的父级的node_modules
4、一直往上找，知道找到根目录

### 文件定位

扩展名分析、目录和包的处理

- 扩展名分析：.js, .json, .node(.json和.node最好带上后缀，加快速度)
- 目录和包的处理：（如果分析出路径是目录）
  1、在当前目录下查找package.json => 得到main => 定位
   2、否则，将index作为默认文件名，查找index.js,index.json,index.node

.node是c++扩展文件，如何编写？

## 编译执行

Module(文件模块)

每个js文件：

```
1、初始化module对象
2、(function(exports,xxx){})()
3、返回module.exports

所以改exports={xxx}没有用
```

![](/static/img/node/module.png)

NativeModule(核心模块)

核心模块分为Javascript核心模块和C/C++核心模块

javascript核心模块：
1、转存为C/C++代码
2、编译为javascript核心模块（require的时候和引入js模块类似，只不过获取源代码是在内存，使用的是nativeModule)：源文件通过process.binding('natives')取出，缓存结果放在`NativeModule._cache`.

```js
function nativeModule(id) {
	this.filename = id + '.js';
	this.id = id;
	this.exports = {};
	this.loaded = false;
}
NativeModule._source = process.binding('natives');
NativeModule._cache = {}
```

```
1、require('Math')
2、NativeModule.require('Math')
3、process.bind('Math')
```

c/c++核心模块：

```
1、require('os')
2、NativeModule.require('os')
3、process.bind('os')
4、get_builtin_module('node_os') // 注意这一步
5、NODE_MODULE(node_os, reg_func) // 注意这一步
```

那些是javascript核心模块，那些是c/c++核心模块呢？？？

## 其他模块规范

- Commonjs同步
- AMD 异步
- CMD 按需加载
- UMD 各种场景

## 模块实现-源码

#todo

https://www.jb51.net/article/262690.htm  c++源码！