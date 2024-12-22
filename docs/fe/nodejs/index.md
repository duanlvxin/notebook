# nodejs初识

## nodejs是什么？

nodejs是javascript运行时环境

## nodejs的构成（结构）

1、`js接口库`，如fs等（对接底层c语言）

2、运行在`chrome V8`引擎上，解释、执行javascript代码
(一般是chrome v8,可能是别的)

3、I/O操作通过`libuv`实现


*Chrome VS Node*

![](/static/img/node/nodejs.png)

## nodejs的特点

- 适合构建web应用
- 高性能（I/O密集型）
- 简单
- 可扩展性强（编写c/c++扩展实现cpu密集型任务）

## 单线程的优缺点

优点：

1.不用像多线程编程那样处处在意<mark style="background: #FFB8EBA6;">状态的同步</mark>问题

2.不存在<mark style="background: #FFB8EBA6;">死锁</mark>（`进程、线程、死锁`）

3.没有<mark style="background: #FFB8EBA6;">线程上下文交换</mark>所带来的性能开销

缺点：

1.无法利用<mark style="background: #FFB8EBA6;">多核CPU</mark>(`cluster模块?`)

2.<mark style="background: #FFB8EBA6;">错误</mark>会导致整个应用退出，应用的健壮性值得考验

3.<mark style="background: #FFB8EBA6;">大量计算占用CPU</mark>导致无法继续调用异步I/O(web workers -> child_process)

## 关于libuv

nodejs是通过Libuv实现跨平台的。

## 其他

node.js是单线程的。更深的解释是，node.js接收任务是单线程的，但是执行任务是多线程的（如执行I/O任务时）