import cookie from 'react-cookie'
import { HOSTDOMAIN } from './config.js'
let cookieConfig = {}
if(HOSTDOMAIN !== ''){
  cookieConfig = { domain: HOSTDOMAIN }
}

export function saveCookie(name,value) {
  cookie.save(name, value, cookieConfig)
}

export function getCookie(name) {
  return cookie.load(name)
}

export function removeCookie(name) {
  cookie.remove(name, cookieConfig)
}

export function loginOut() {
  cookie.remove('token', cookieConfig)

}

export function isLogin() {
  return !!cookie.load('erpskey');
  // console.log("auth",!!parseInt(localStorage.getItem("login")));
  // return !!parseInt(localStorage.getItem("login"));
}