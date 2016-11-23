import {API_ROOT} from '../../utils/config.js'
import {post} from "../index.js"
export default function getLoginApis (){
       return {
              loginIn:(params,success,fail)=>{
                    
                    return post({
                          url:API_ROOT+"free/static/login",
                          params:params,
                          success:success,
                          fail:fail
                    });
              },
              loginOut:(url,params)=>{
                    return post(options);
              }

       }
}
