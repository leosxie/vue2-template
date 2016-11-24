# vue2-template
use vue2+vuex+vue-router+vue-resource搭建的一个比较完整的开发流程
#vue版，遵循react开发习惯，设计结构如下
### 目录结构

```
├── README.md
├───build                     //构建目录
├───config                    //构建相关的配置目录
├── dev                      // 开发目录
├── src                      // 源文件目录
├── store   
|   ├── mutations            // Mutation 以及Mutation事件类型定义提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
│   ├── actions              // Action 提交的是 mutation，而不是直接变更状态，并且可以包含任意异步操作。异步逻辑都应该封装到 action里面
│   ├── modules              //  类似于react中的store,单个module文件类十余react中的reducers
|   |                        // 使用单一状态树，导致应用的所有状态集中到一个很大的对象。但是，当应用变得很大时，
|   |                        //  store 对象会变得臃肿不堪。为了解决以上问题，Vuex 运行我们将 store 分割到模块（module）。
|   |                        //  每个模块拥有自己的 state、mutation、action、getters、甚至是嵌套子模块——从上至下进行类似的分割：
├── assets               // css 和图片资源
├── components           // 组件
├── utils                // 工具函数，全局定义配置
├── views                // 页面相关
└── middlewares          // 中间件主要进行拦截日志性能监控相关
└── index.html           // 主页html（登录，订单列表，添加套餐）
└── routers               // 路由配置
└── index.js             // 入口文件
├── .babelrc                 // babel配置
```
#todo整合mockapi功能
