if(!self.define){let e,r={};const i=(i,s)=>(i=new URL(i+".js",s).href,r[i]||new Promise((r=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=r,document.head.appendChild(e)}else e=i,importScripts(i),r()})).then((()=>{let e=r[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(s,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(r[c])return;let n={};const o=e=>i(e,c),f={module:{uri:c},exports:n,require:o};r[c]=Promise.all(s.map((e=>f[e]||o(e)))).then((e=>(t(...e),n)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.js",revision:"ceeb462f56243fb3b17e68e8412cc48c"},{url:"index.js.LICENSE.txt",revision:"7a745f65e8ba20cc269c523bbf0fd5a3"},{url:"index.worker.js",revision:"c2f3aeaf628b81657c7e6cf1322e13bf"},{url:"index.worker.js.LICENSE.txt",revision:"c1a19abb78cf9cde35b8b3bd4cf9adc0"}],{})}));
