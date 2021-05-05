/*! For license information please see 16.c1cbe006.chunk.js.LICENSE.txt */
(this.webpackJsonptest=this.webpackJsonptest||[]).push([[16],{315:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return r}));n(0),n(22);var o=n(48),c=n(2),i=n(1);function r(){var e=Object(c.useHistory)();function t(t){localStorage.setItem("type",t),e.push("/displayNotes")}return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o.a,{}),Object(i.jsx)("h1",{className:"subject-heading",children:"What are you looking for ?"}),Object(i.jsxs)("div",{className:"row subject-row type-row",children:[Object(i.jsx)("div",{className:"col-md-4 col-sm-6 col-xs-12 hvr-bounce-to-right type-col",onClick:function(){t("Notes")},children:"Notes"}),Object(i.jsx)("div",{className:"col-md-4 col-sm-6 col-xs-12 hvr-bounce-to-right type-col",onClick:function(){t("Question Papers")},children:"Question Papers"}),Object(i.jsx)("div",{className:"col-md-4 col-sm-6 col-xs-12 hvr-bounce-to-right type-col",onClick:function(){t("Important Questions")},children:"Important Questions"})]})]})}},43:function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return a}));var o=n(46),c=n.n(o),i=function(e){"undefined"!==window&&c.a.remove(e,{expires:1})},r=function(e){"undefined"!==window&&localStorage.removeItem(e)},s=function(e,t){var n,o;console.log("AUTHENTICATE HELPER ON SIGNIN RESPONSE",e),n="token",o=e.data.token,"undefined"!==window&&c.a.set(n,o,{expires:1}),function(e,t){"undefined"!==window&&localStorage.setItem(e,JSON.stringify(t))}("user",e.data.user),t()},a=function(){if("undefined"!==window&&function(e){if("undefined"!==window)return c.a.get(e)}("token"))return!!localStorage.getItem("user")&&JSON.parse(localStorage.getItem("user"))}},46:function(e,t,n){var o,c;!function(i){if(void 0===(c="function"===typeof(o=i)?o.call(t,n,t,e):o)||(e.exports=c),!0,e.exports=i(),!!0){var r=window.Cookies,s=window.Cookies=i();s.noConflict=function(){return window.Cookies=r,s}}}((function(){function e(){for(var e=0,t={};e<arguments.length;e++){var n=arguments[e];for(var o in n)t[o]=n[o]}return t}function t(e){return e.replace(/(%[0-9A-Z]{2})+/g,decodeURIComponent)}return function n(o){function c(){}function i(t,n,i){if("undefined"!==typeof document){"number"===typeof(i=e({path:"/"},c.defaults,i)).expires&&(i.expires=new Date(1*new Date+864e5*i.expires)),i.expires=i.expires?i.expires.toUTCString():"";try{var r=JSON.stringify(n);/^[\{\[]/.test(r)&&(n=r)}catch(u){}n=o.write?o.write(n,t):encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g,decodeURIComponent),t=encodeURIComponent(String(t)).replace(/%(23|24|26|2B|5E|60|7C)/g,decodeURIComponent).replace(/[\(\)]/g,escape);var s="";for(var a in i)i[a]&&(s+="; "+a,!0!==i[a]&&(s+="="+i[a].split(";")[0]));return document.cookie=t+"="+n+s}}function r(e,n){if("undefined"!==typeof document){for(var c={},i=document.cookie?document.cookie.split("; "):[],r=0;r<i.length;r++){var s=i[r].split("="),a=s.slice(1).join("=");n||'"'!==a.charAt(0)||(a=a.slice(1,-1));try{var u=t(s[0]);if(a=(o.read||o)(a,u)||t(a),n)try{a=JSON.parse(a)}catch(d){}if(c[u]=a,e===u)break}catch(d){}}return e?c[e]:c}}return c.set=i,c.get=function(e){return r(e,!1)},c.getJSON=function(e){return r(e,!0)},c.remove=function(t,n){i(t,"",e(n,{expires:-1}))},c.defaults={},c.withConverter=n,c}((function(){}))}))},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(0),n(21);var o=n(43),c=n(2),i=n(1);function r(){var e=Object(c.useHistory)();return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{class:"nav",children:[Object(i.jsx)("input",{type:"checkbox",id:"nav-check"}),Object(i.jsx)("div",{class:"nav-header",children:Object(i.jsx)("div",{class:"nav-title",children:Object(i.jsx)("a",{href:"/",className:"site-logo",children:Object(i.jsx)("img",{src:"data:image/png;base64,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"})})})}),Object(i.jsx)("div",{class:"nav-btn",children:Object(i.jsxs)("label",{for:"nav-check",children:[Object(i.jsx)("span",{}),Object(i.jsx)("span",{}),Object(i.jsx)("span",{})]})}),Object(o.b)()?Object(i.jsxs)("div",{class:"nav-links",children:[Object(i.jsx)("a",{href:"/filter",className:"upload hvr-bounce-to-top",children:"Upload Notes"}),Object(i.jsx)("a",{href:"/",className:"upload hvr-bounce-to-top",onClick:function(){Object(o.c)("token"),Object(o.d)("user"),e.push("/")},children:"Logout"}),Object(i.jsx)("a",{href:"/profile",className:"upload hvr-bounce-to-top",children:"Profile"})]}):Object(i.jsxs)("div",{class:"nav-links",children:[Object(i.jsx)("a",{href:"/filter",className:"upload hvr-bounce-to-top",children:"Upload Notes"}),Object(i.jsx)("a",{href:"/login",className:"upload hvr-bounce-to-top",children:"Login"})]})]})})}}}]);
//# sourceMappingURL=16.c1cbe006.chunk.js.map