(function(t){function e(e){for(var o,u,l=e[0],a=e[1],c=e[2],p=0,f=[];p<l.length;p++)u=l[p],Object.prototype.hasOwnProperty.call(r,u)&&r[u]&&f.push(r[u][0]),r[u]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(t[o]=a[o]);s&&s(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,l=1;l<n.length;l++){var a=n[l];0!==r[a]&&(o=!1)}o&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={app:0},i=[];function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var s=a;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3b11":function(t,e,n){"use strict";n("3cc0")},"3cc0":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e("router-link",{attrs:{to:"/auth"}},[t._v("auth callback")]),e("router-view"),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(e){return t.login()}}},[t._v("twitter")]),e("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(e){return t.logout()}}},[t._v("logout")]),t._m(0)])},l=[function(){var t=this,e=t._self._c;return e("p",[e("a",{attrs:{href:"peoplesapp://ChooseLanguageScreen"}},[t._v("跳转安卓-APP")])])}],a=n("616b"),c=n.n(a),s={name:"HelloWorld",mounted:function(){this.twws()},methods:{twws:function(){c.a.init({twitter:"ZEsISTnjlBPwuPhzhaFL739Gr"},{redirect_uri:"https://ritsuyan.github.io/testTwitterHello/?auth=1"})},logout:function(){c()("twitter").logout().then((function(){alert("Signed out")}),(function(t){alert("Signed out error: "+t.error.message)}))},login:function(){c()("twitter",{display:"page",redirect_uri:"https://baidu.com"}).login().then((function(t){console.log(t),console.log(window.location.href),alert("You are signed in to Facebook")}),(function(t){alert("Signin error: "+t.error.message)}))}}},p=s,f=n("2877"),h=Object(f["a"])(p,u,l,!1,null,null,null),d=h.exports,g={name:"app",components:{HelloWorld:d},mounted:function(){console.log("authcallback",window.location.href),window.alert(window.location.href)}},b=g,w=(n("3b11"),Object(f["a"])(b,r,i,!1,null,null,null)),v=w.exports,m=n("8c4f"),_=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("p",[e("a",{attrs:{href:"peoplesapp://ChooseLanguageScreen"}},[t._v("跳转安卓-APP")])])])}],j={name:"Auth"},O=j,P=Object(f["a"])(O,_,y,!1,null,null,null),S=P.exports;o["a"].use(m["a"]);var x=[{path:"/auth",name:"Auth",component:S},{path:"/home",name:"Home",component:d}],k=new m["a"]({mode:"history",base:"",routes:x});o["a"].config.productionTip=!1,new o["a"]({router:k,render:function(t){return t(v)}}).$mount("#app")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});