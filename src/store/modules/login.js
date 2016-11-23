import {
	  LOGIN_FAILURE,
    LOGIN_PENDDING,
    LOGIN_SUCCESS,
    LOGIN,
    LOGINOUT_FAILURE,
    LOGINOUT_PENDDING,
    LOGINOUT_SUCCESS,
    LOGINOUT
} from '../types/login.js'
import Apis from '../../apis'
const state = {
  isLogin:false,//是否登录
  action:"init",//当前执行的action
  msg:"" // 错误提示
};

//mutation相当于reduces
const mutations = {
       [LOGIN_SUCCESS](state,payload){
          //成功的时候变更state
          console.log("success",payload);
          state.action = LOGIN_SUCCESS;
       },
       [LOGIN_FAILURE](state,payload){
         state.action = LOGIN_FAILURE;
         console.log("LOGIN_FAILURE",payload);

       },
       [LOGIN_PENDDING](state,payload){
            state.action = LOGIN_PENDDING;
            console.log("LOGIN_PENDDING",payload);
       }

};

//异步操作Action，最终通过mutations更改state
const actions = {
   LOGIN ({ commit, state,dispatch }, payload) {    
     commit(LOGIN_PENDDING,payload);//请求开始
     debugger 
     return Apis.Login.loginIn(
       {
         mobile:payload.mobile,
         password:payload.password,
         platform:"3"
       },
      (response) => commit(LOGIN_SUCCESS,response),
      (response) => commit(LOGIN_FAILURE,response)
    )
  },
  LOGINOUT({commit,state,dipatch},payload){
       
  }
}

const getters = {
      
}

export default {
  state,
  mutations,
  actions
}