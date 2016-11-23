import Vue from 'vue';
import VueRouter from 'vue-router';
import App from '../views/App/index.vue';
import Home from '../views/Home/index.vue';
import Login from '../views/Login/index.vue';
import User from '../views/User/index.vue';
import {isLogin} from '../utils/auth.js'
Vue.use(VueRouter);
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
    routes:routes, // short for routes: routes
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true
});
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    console.log("是否登录了。。",isLogin());
    if (!isLogin()) {
        console.log("没有登录要进行跳转。。。");
      next({
        path: '/login',
        query: {redirect: to.fullPath}
      })
    } else {
      next();
    }
  } else {
    next(); // 确保一定要调用 next()
  }
});
export default router;