(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{sRRH:function(e,t,a){"use strict";a.r(t);var n=a("tJVT"),c=a("q1tI"),r=a.n(c),i=a("/MKj");function d(e){var t=Object(c["useState"])(0),a=Object(n["a"])(t,2),i=a[0],d=a[1];Object(c["useEffect"])((()=>{var t=e.dispatch;t({type:"friend/getListHttp",payload:{}})}),[0]);var l=e.data,o=void 0===l?[]:l,u=o.map((e=>{var t=e.id,a=e.punchline,n=e.setup;return r.a.createElement("div",{key:t},t,"~",a,"-",n)}));return r.a.createElement("div",{className:"home-page"},"\u8fd9\u662ffriend ",r.a.createElement("div",null,u),r.a.createElement("p",null,"You clicked ",i," times"),r.a.createElement("button",{onClick:()=>{d(i+1),console.log(i)}},"Click me"))}var l=e=>{var t=e.friend,a=void 0===t?{}:t;return{data:a.data}};t["default"]=Object(i["c"])(l)(d)}}]);