 import {getCookie} from './auth'
 function time33(str) {
        for (var i = 0, len = str.length, hash = 5381; i < len; ++i) {
            hash += (hash << 5) + str.charCodeAt(i);
        }
        return hash & 0x7fffffff;
    }
  
	
 function getToken() {
        var skey = getCookie('erpskey'),
            token = skey == null ? "" : time33(encodeURIComponent(skey));
        return token;
}	

  export  function addToken(url, type) {
        type = type ||"";
        var token = getToken();
        if (url == "" || (url.indexOf("://") < 0 ? location.href : url).indexOf("http") != 0) {
            return url;
        }
        if (url.indexOf("#") != -1) {
            var f1 = url.match(/\?.+\#/);
            if (f1) {
                var t = f1[0].split("#"),
                    newPara = [t[0], "&g_tk=", token, "&g_ty=", type, "#", t[1]].join("");
                return url.replace(f1[0], newPara);
            } else {
                var t = url.split("#");
                return [t[0], "?g_tk=", token, "&g_ty=", type, "#", t[1]].join("");
            }
        }
        return token == "" ? (url + (url.indexOf("?") != -1 ? "&" : "?") + "g_ty=" + type) : (url + (url.indexOf("?") != -1 ? "&" : "?") + "g_tk=" + token + "&g_ty=" + type);
}