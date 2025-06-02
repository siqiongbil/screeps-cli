# Screeps 私服部署项目

本项目用于将 Screeps 代码部署到私人服务器。

## 项目结构

- `src/`: 存放 Screeps 代码
- `Gruntfile.js`: Grunt 配置文件
- `package.json`: 项目依赖配置
- `.gitignore`: Git 忽略文件

## 安装步骤

1. 确保已安装 Node.js 和 npm
2. 克隆项目后，在项目根目录运行以下命令安装依赖：

   ```bash
   npm install
   ```

## 使用方法

1. 在 `src/` 目录下编写或修改 Screeps 代码
2. 使用以下命令将代码部署到私服：

   ```bash
   grunt deploy
   ```

## 注意事项

- 请确保 `Gruntfile.js` 中的服务器配置正确
- 如需修改部署配置，请参考 `Gruntfile.js` 中的注释 