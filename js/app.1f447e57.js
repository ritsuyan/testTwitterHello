(function(t){function e(e){for(var r,u,l=e[0],c=e[1],a=e[2],f=0,p=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);s&&s(e);while(p.length)p.shift()();return i.push.apply(i,a||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,l=1;l<n.length;l++){var c=n[l];0!==o[c]&&(r=!1)}r&&(i.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},i=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var a=0;a<l.length;a++)e(l[a]);var s=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"146b":function(t,e,n){"use strict";n("cb6b")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),e("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},i=[],u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"hello"},[e("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(e){return t.login()}}},[t._v("twitter")]),e("button",{staticClass:"profile",attrs:{id:"twitter"},on:{click:function(e){return t.logout()}}},[t._v("logout")]),t._m(0)])},l=[function(){var t=this,e=t._self._c;return e("p",[e("a",{attrs:{href:"peoplesapp://ChooseLanguageScreen"}},[t._v("跳转安卓-APP")])])}],c=n("616b"),a=n.n(c),s={name:"HelloWorld",mounted:function(){this.twws()},methods:{twws:function(){a.a.init({twitter:"ZEsISTnjlBPwuPhzhaFL739Gr"},{})},logout:function(){a()("twitter").logout().then((function(){alert("Signed out")}),(function(t){alert("Signed out error: "+t.error.message)}))},login:function(){a()("twitter").login().then((function(){alert("You are signed in to Facebook")}),(function(t){alert("Signin error: "+t.error.message)}))}}},f=s,p=n("2877"),d=Object(p["a"])(f,u,l,!1,null,null,null),g=d.exports,b={name:"app",components:{HelloWorld:g}},h=b,v=(n("146b"),Object(p["a"])(h,o,i,!1,null,null,null)),w=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(w)}}).$mount("#app")},cb6b:function(t,e,n){},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"}});