(function(t){function e(e){for(var o,i,a=e[0],l=e[1],c=e[2],p=0,f=[];p<a.length;p++)i=a[p],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in l)Object.prototype.hasOwnProperty.call(l,o)&&(t[o]=l[o]);s&&s(e);while(f.length)f.shift()();return u.push.apply(u,c||[]),n()}function n(){for(var t,e=0;e<u.length;e++){for(var n=u[e],o=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(o=!1)}o&&(u.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},u=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var s=l;u.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3db4":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),t._m(0),e("router-link",{attrs:{to:"/auth"}},[t._v("auth callback")]),e("router-view"),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},u=[function(){var t=this,e=t._self._c;return e("p",[e("a",{attrs:{href:"peoplesapp://ChooseLanguageScreen",id:"jumpApp"}},[t._v("跳转安卓-APP")])])}],i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(e){return t.login()}}},[t._v("twitter")]),e("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(e){return t.logout()}}},[t._v("logout")]),t._m(0)])},a=[function(){var t=this,e=t._self._c;return e("p",[e("a",{attrs:{href:"peoplesapp://ChooseLanguageScreen"}},[t._v("跳转安卓-APP")])])}],l=n("616b"),c=n.n(l),s={name:"HelloWorld",mounted:function(){this.twws()},methods:{twws:function(){c.a.init({twitter:"ZEsISTnjlBPwuPhzhaFL739Gr"},{redirect_uri:"https://ritsuyan.github.io/testTwitterHello/?auth=1"})},logout:function(){c()("twitter").logout().then((function(){alert("Signed out")}),(function(t){alert("Signed out error: "+t.error.message)}))},login:function(){c()("twitter",{display:"page",redirect_uri:"https://baidu.com"}).login().then((function(t){console.log(t),console.log(window.location.href),alert("You are signed in to Facebook")}),(function(t){alert("Signin error: "+t.error.message)}))}}},p=s,f=n("2877"),h=Object(f["a"])(p,i,a,!1,null,null,null),d=h.exports,g={name:"app",components:{HelloWorld:d},mounted:function(){window.location.href.indexOf("auth=1")>0&&(window.location.href="peoplesapp://ChooseLanguageScreen")},methods:{}},b=g,v=(n("ba8e"),Object(f["a"])(b,r,u,!1,null,null,null)),m=v.exports,w=n("8c4f"),_=function(){var t=this;t._self._c;return t._m(0)},y=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("p",[e("a",{attrs:{href:"peoplesapp://ChooseLanguageScreen"}},[t._v("跳转安卓-APP")])])])}],j={name:"Auth"},O=j,P=Object(f["a"])(O,_,y,!1,null,null,null),S=P.exports;o["a"].use(w["a"]);var x=[{path:"/auth",name:"Auth",component:S},{path:"/home",name:"Home",component:d}],k=new w["a"]({mode:"history",base:"",routes:x});o["a"].config.productionTip=!1,new o["a"]({router:k,render:function(t){return t(m)}}).$mount("#app")},ba8e:function(t,e,n){"use strict";n("3db4")},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});