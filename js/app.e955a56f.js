(function(t){function n(n){for(var r,u,l=n[0],c=n[1],a=n[2],f=0,p=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(n);while(p.length)p.shift()();return i.push.apply(i,a||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],r=!0,l=1;l<e.length;l++){var c=e[l];0!==o[c]&&(r=!1)}r&&(i.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},o={app:0},i=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var a=0;a<l.length;a++)n(l[a]);var s=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"146b":function(t,n,e){"use strict";e("cb6b")},"56d7":function(t,n,e){"use strict";e.r(n);e("e260"),e("e6cf"),e("cca6"),e("a79d");var r=e("2b0e"),o=function(){var t=this,n=t._self._c;return n("div",{attrs:{id:"app"}},[n("img",{attrs:{alt:"Vue logo",src:e("cf05")}}),n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],u=function(){var t=this,n=t._self._c;return n("div",{staticClass:"hello"},[n("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(n){return t.login()}}},[t._v("twitter")]),n("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(n){return t.logout()}}},[t._v("logout")])])},l=[],c=e("616b"),a=e.n(c),s={name:"HelloWorld",mounted:function(){this.twws()},methods:{twws:function(){a.a.init({twitter:"ZEsISTnjlBPwuPhzhaFL739Gr"},{})},logout:function(){a()("twitter").logout().then((function(){alert("Signed out")}),(function(t){alert("Signed out error: "+t.error.message)}))},login:function(){a()("twitter").login().then((function(){alert("You are signed in to Facebook")}),(function(t){alert("Signin error: "+t.error.message)}))}}},f=s,p=e("2877"),d=Object(p["a"])(f,u,l,!1,null,null,null),b=d.exports,g={name:"app",components:{HelloWorld:b}},h=g,v=(e("146b"),Object(p["a"])(h,o,i,!1,null,null,null)),w=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},cb6b:function(t,n,e){},cf05:function(t,n,e){t.exports=e.p+"img/logo.82b9c7a5.png"}});