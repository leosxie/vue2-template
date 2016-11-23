import Vue from 'vue'
import { sync } from 'vuex-router-sync'
import store from './store/index.js'
import router from './routers/index'
Vue.config.debug = true;
window.log = console.log;
sync(store, router);
window.router = router;
const app = new Vue({
  router,
  store,
  el:"#root",
  render:h=>h(require("./views/index.vue"))
});