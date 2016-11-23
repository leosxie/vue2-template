import Vue from 'vue'
import VueResource from 'vue-resource'
import {getCookie,loginOut} from '../utils/auth.js'
import {addToken} from '../utils/index.js'
import getLoginApis  from './login'

Vue.use(VueResource);
// HTTP相关
Vue.http.options.crossOrigin = true;
Vue.http.options.credentials = true;
Vue.http.options.emulateJSON = true;
Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  
  next((response) => {
    // 这里可以对响应的结果进行处理
    if (response["ErrCode"] == -1007) {
        loginOut()
      window.location.pathname = '/login'
    }
  })
});
export default {
     Login:getLoginApis(Vue)
}

export function post({url,params,success,fail}){
      debugger
      return Vue.http.post(addToken(url,"pad"),params).then((response)=>{
             success(response);
      },(response)=>{
             fail(response);
      }); 
}

export function get(){

}
