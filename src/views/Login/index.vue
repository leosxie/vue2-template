<template>
     <div>
             <input v-model="formParams.mobile" placeholder="请输入手机号码"/>
             <input  v-model="formParams.password" placeholder="请输入密码"/>
             <button @click="login">登录</button>
             <div>{{action}}</div>

     </div>
     
</template>
<script>
import { mapActions,mapState } from 'vuex'
     export default {
           data:()=>{
                 return {
                        
                        startLogin:false,
                        formParams:{
                            mobile:"",
                            password:"",
                        }
                    }
           },
           methods:{
               ...mapActions([
                   "LOGIN"
               ]),
               ...mapActions([
                   "LOGIN_SUCCESS"
               ]),
               login(){
                   this.startLogin = true;
                   this.LOGIN(this.formParams)
               }
           },
           computed:{
               ...mapState({
                  action:(state)=>{
                      if(state.login.action == "LOGIN_SUCCESS"){
                          console.log("登录成功。。。")
                          debugger
                          console.log("mapState action",this);
                          router.replace(state.route.query.redirect || "/home");
                          //在这里可以对state进行改造。。。this.$data可以获取限制的$data的东西
                      }
                      return state.login.action;
                    }
               })
           },
           watch:{
               action:(newAction)=>{
                   console.log("新的action：",newAction);
                   debugger
               }
           }
               
           
     }
</script>