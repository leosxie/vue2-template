import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../views/App/index.vue';
import Home from '../views/Home/index.vue';
import Login from '../views/Login/index.vue';
import User from '../views/User/index.vue';
import {isLogin} from '../utils/auth.js'
Vue.use(VueRouter);
//个人比较倾向于配置路由
const routes = [
    {
      path:'/login',"name":"login",component:Login,meta: {requiresAuth: false}, 
      beforeEnter: (to, from, next) => {
         if(isLogin()){
             console.log("登录了。。。。。。");
             next(from.fullPath);
         }else{
             next();
         }
      }
    },
    { 
        path: '/', name:'app', component:App,meta: {requiresAuth: true},
        children:[
              {
                  path: 'index', redirect: '/home' 
              },
              {
                  path: 'home', name:'home', component:Home,meta: {requiresAuth: true}
              },
              {
                  path:'user',name:'user',component:User,meta:{requiresAuth: true}
              }
        ]


    }
];
const router = new VueRouter({
    mode: 'history',
    base: __dirname,
    routes:routes,
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true
});
router.beforeEach((to, from, next) => {
    // 所有带有requiresAuth为true的都是要验证登录态的
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //验证是否通过了
    console.log("是否登录了。。",isLogin())
    if (!isLogin()) {
        console.log("没有登录要进行跳转。。。");
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
export default router;