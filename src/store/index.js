import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from '../middlewares'
import login from './modules/login.js'
const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false;
const store = new Vuex.Store({
  modules:{
      login
  },
  middlewares
});
export default store;
