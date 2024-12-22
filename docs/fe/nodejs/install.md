# nodejs安装与入门

## nvm

> 管理node版本的工具，能很容易切换node版本

### 命令
```bash
nvm ls
nvm ls available
nvm use
```

### 其他
可以配置.nvmrc文件改变使用node的版本
```bash
# .nvmrc
v14.9.0
```

## npm

```bash
npm i
npm i -D
npm i -g
npm uninstall xxx
```


本地模块加载（tarball指的是压缩文件）

```bash
npm install <tarball file>
npm install <uri>
npm install <folder>
```

## nrm

测速：

```bash
nrm test
```

```bash
nrm use <registry>
nrm add <registry> http://registry.npm.frp.trmap.cn/  => 使用定制的源
```

## 调试

code runner插件

.vscode/launch.json