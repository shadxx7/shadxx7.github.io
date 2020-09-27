var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function c(t){t.forEach(n)}function o(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function $(t,e,n,r){if(t){const c=l(t,e,n,r);return t[0](c)}}function l(t,n,r,c){return t[1]&&c?e(r.ctx.slice(),t[1](c(n))):r.ctx}function a(t,e,n,r,c,o,s){const $=function(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(void 0===e.dirty)return c;if("object"==typeof c){const t=[],n=Math.max(e.dirty.length,c.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|c[r];return t}return e.dirty|c}return e.dirty}(e,r,c,o);if($){const c=l(e,n,r,s);t.p(c,$)}}function i(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function d(t){return document.createElement(t)}function p(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function h(){return g(" ")}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function w(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let v;function b(t){v=t}const y=[],z=[],k=[],M=[],L=Promise.resolve();let _=!1;function B(t){k.push(t)}let H=!1;const V=new Set;function C(){if(!H){H=!0;do{for(let t=0;t<y.length;t+=1){const e=y[t];b(e),E(e.$$)}for(b(null),y.length=0;z.length;)z.pop()();for(let t=0;t<k.length;t+=1){const e=k[t];V.has(e)||(V.add(e),e())}k.length=0}while(y.length);for(;M.length;)M.pop()();_=!1,H=!1,V.clear()}}function E(t){if(null!==t.fragment){t.update(),c(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(B)}}const A=new Set;function S(t,e){t&&t.i&&(A.delete(t),t.i(e))}function j(t,e,n,r){if(t&&t.o){if(A.has(t))return;A.add(t),undefined.c.push(()=>{A.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function T(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const s=t[o],$=e[o];if($){for(const t in s)t in $||(r[t]=1);for(const t in $)c[t]||(n[t]=$[t],c[t]=1);t[o]=$}else for(const t in s)c[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function N(t){return"object"==typeof t&&null!==t?t:{}}function D(t){t&&t.c()}function G(t,e,r){const{fragment:s,on_mount:$,on_destroy:l,after_update:a}=t.$$;s&&s.m(e,r),B(()=>{const e=$.map(n).filter(o);l?l.push(...e):c(e),t.$$.on_mount=[]}),a.forEach(B)}function O(t,e){const n=t.$$;null!==n.fragment&&(c(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function I(t,e){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,L.then(C)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function P(e,n,o,s,$,l,a=[-1]){const i=v;b(e);const u=n.props||{},f=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:$,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(i?i.$$.context:[]),callbacks:r(),dirty:a,skip_bound:!1};let d=!1;if(f.ctx=o?o(e,u,(t,n,...r)=>{const c=r.length?r[0]:n;return f.ctx&&$(f.ctx[t],f.ctx[t]=c)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](c),d&&I(e,t)),n}):[],f.update(),d=!0,c(f.before_update),f.fragment=!!s&&s(f.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();n.intro&&S(e.$$.fragment),G(e,n.target,n.anchor),C()}b(i)}class W{$destroy(){O(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(e){let n,r,c,o,s,$,l,a,i=(new Date).getFullYear()+"";return{c(){n=d("footer"),r=d("p"),c=d("a"),c.textContent="Snake Game |",o=h(),s=d("a"),s.textContent="MIT License",$=g(" | Copyright (c) "),l=g(i),a=g(" Mohamed Shadab"),x(c,"href","https://statebait.github.io/snake-game/"),x(c,"class","lg:inline hidden"),x(c,"aria-label","Snake game link"),x(s,"target","_blank"),x(s,"rel","noopener"),x(s,"href","https://github.com/statebait/statebait.github.io/blob/master/LICENSE.md"),x(s,"aria-label","License link"),x(n,"class","text-primary w-full text-center text-sm my-10")},m(t,e){f(t,n,e),u(n,r),u(r,c),u(r,o),u(r,s),u(r,$),u(r,l),u(r,a)},p:t,i:t,o:t,d(t){t&&m(n)}}}class q extends W{constructor(t){super(),P(this,t,null,R,s,{})}}function F(t){let e,n;return{c(){e=p("title"),n=g(t[0])},m(t,r){f(t,e,r),u(e,n)},p(t,e){1&e&&w(n,t[0])},d(t){t&&m(e)}}}function Y(t){let e,n,r,c=t[0]&&F(t);const o=t[3].default,s=$(o,t,t[2],null);return{c(){e=p("svg"),c&&c.c(),n=g(""),s&&s.c(),x(e,"xmlns","http://www.w3.org/2000/svg"),x(e,"viewBox",t[1]),x(e,"class","svelte-c8tyih")},m(t,o){f(t,e,o),c&&c.m(e,null),u(e,n),s&&s.m(e,null),r=!0},p(t,[$]){t[0]?c?c.p(t,$):(c=F(t),c.c(),c.m(e,n)):c&&(c.d(1),c=null),s&&s.p&&4&$&&a(s,o,t,t[2],$,null,null),(!r||2&$)&&x(e,"viewBox",t[1])},i(t){r||(S(s,t),r=!0)},o(t){j(s,t),r=!1},d(t){t&&m(e),c&&c.d(),s&&s.d(t)}}}function J(t,e,n){let{$$slots:r={},$$scope:c}=e,{title:o=null}=e,{viewBox:s}=e;return t.$$set=t=>{"title"in t&&n(0,o=t.title),"viewBox"in t&&n(1,s=t.viewBox),"$$scope"in t&&n(2,c=t.$$scope)},[o,s,c,r]}class K extends W{constructor(t){super(),P(this,t,J,Y,s,{title:0,viewBox:1})}}function Q(t){let e;return{c(){e=p("path"),x(e,"d","M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function U(t){let n,r;const c=[{viewBox:"0 0 496 512"},t[0]];let o={$$slots:{default:[Q]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function X(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class Z extends W{constructor(t){super(),P(this,t,X,U,s,{})}}function tt(t){let e;return{c(){e=p("path"),x(e,"d","M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function et(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[tt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function nt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class rt extends W{constructor(t){super(),P(this,t,nt,et,s,{})}}function ct(t){let e;return{c(){e=p("path"),x(e,"d","M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function ot(t){let n,r;const c=[{viewBox:"0 0 448 512"},t[0]];let o={$$slots:{default:[ct]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function st(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class $t extends W{constructor(t){super(),P(this,t,st,ot,s,{})}}function lt(t){let e;return{c(){e=p("path"),x(e,"d","M71.5 142.3c.6-5.9-1.7-11.8-6.1-15.8L20.3 72.1V64h140.2l108.4 237.7L364.2 64h133.7v8.1l-38.6 37c-3.3 2.5-5 6.7-4.3 10.8v272c-.7 4.1 1 8.3 4.3 10.8l37.7 37v8.1H307.3v-8.1l39.1-37.9c3.8-3.8 3.8-5 3.8-10.8V171.2L241.5 447.1h-14.7L100.4 171.2v184.9c-1.1 7.8 1.5 15.6 7 21.2l50.8 61.6v8.1h-144v-8L65 377.3c5.4-5.6 7.9-13.5 6.5-21.2V142.3z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function at(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[lt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function it(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class ut extends W{constructor(t){super(),P(this,t,it,at,s,{})}}function ft(t){let e;return{c(){e=p("path"),x(e,"d","M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function mt(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[ft]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function dt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class pt extends W{constructor(t){super(),P(this,t,dt,mt,s,{})}}function gt(t){let e;return{c(){e=p("path"),x(e,"d","M120.12 208.29c-3.88-2.9-7.77-4.35-11.65-4.35H91.03v104.47h17.45c3.88 0 7.77-1.45 11.65-4.35 3.88-2.9 5.82-7.25 5.82-13.06v-69.65c-.01-5.8-1.96-10.16-5.83-13.06zM404.1 32H43.9C19.7 32 .06 51.59 0 75.8v360.4C.06 460.41 19.7 480 43.9 480h360.2c24.21 0 43.84-19.59 43.9-43.8V75.8c-.06-24.21-19.7-43.8-43.9-43.8zM154.2 291.19c0 18.81-11.61 47.31-48.36 47.25h-46.4V172.98h47.38c35.44 0 47.36 28.46 47.37 47.28l.01 70.93zm100.68-88.66H201.6v38.42h32.57v29.57H201.6v38.41h53.29v29.57h-62.18c-11.16.29-20.44-8.53-20.72-19.69V193.7c-.27-11.15 8.56-20.41 19.71-20.69h63.19l-.01 29.52zm103.64 115.29c-13.2 30.75-36.85 24.63-47.44 0l-38.53-144.8h32.57l29.71 113.72 29.57-113.72h32.58l-38.46 144.8z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function ht(t){let n,r;const c=[{viewBox:"0 0 448 512"},t[0]];let o={$$slots:{default:[gt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function xt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class wt extends W{constructor(t){super(),P(this,t,xt,ht,s,{})}}function vt(t){let e;return{c(){e=p("path"),x(e,"d","M496 448H16c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h480c8.84 0 16-7.16 16-16v-32c0-8.84-7.16-16-16-16zm-304-64l-64-32 64-32 32-64 32 64 64 32-64 32-16 32h208l-86.41-201.63a63.955 63.955 0 0 1-1.89-45.45L416 0 228.42 107.19a127.989 127.989 0 0 0-53.46 59.15L64 416h144l-16-32zm64-224l16-32 16 32 32 16-32 16-16 32-16-32-32-16 32-16z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function bt(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[vt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function yt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class zt extends W{constructor(t){super(),P(this,t,yt,bt,s,{})}}function kt(t){let e;return{c(){e=p("path"),x(e,"d","M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Mt(t){let n,r;const c=[{viewBox:"0 0 384 512"},t[0]];let o={$$slots:{default:[kt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function Lt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class _t extends W{constructor(t){super(),P(this,t,Lt,Mt,s,{})}}function Bt(t){let e,n,r,c,o,s;const l=t[3].default,i=$(l,t,t[2],null);return{c(){e=d("a"),i&&i.c(),n=h(),r=d("div"),c=g(t[1]),x(r,"class","tooltiptext"),x(e,"href",t[0]),x(e,"target","_blank"),x(e,"rel","noopener"),x(e,"class","w-8 h-8 block m-3 tooltip hover:text-white"),x(e,"aria-label",o=t[1]+" link")},m(t,o){f(t,e,o),i&&i.m(e,null),u(e,n),u(e,r),u(r,c),s=!0},p(t,[n]){i&&i.p&&4&n&&a(i,l,t,t[2],n,null,null),(!s||2&n)&&w(c,t[1]),(!s||1&n)&&x(e,"href",t[0]),(!s||2&n&&o!==(o=t[1]+" link"))&&x(e,"aria-label",o)},i(t){s||(S(i,t),s=!0)},o(t){j(i,t),s=!1},d(t){t&&m(e),i&&i.d(t)}}}function Ht(t,e,n){let{$$slots:r={},$$scope:c}=e,{href:o}=e,{name:s}=e;return t.$$set=t=>{"href"in t&&n(0,o=t.href),"name"in t&&n(1,s=t.name),"$$scope"in t&&n(2,c=t.$$scope)},[o,s,c,r]}class Vt extends W{constructor(t){super(),P(this,t,Ht,Bt,s,{href:0,name:1})}}function Ct(t){let e,n;return e=new Z({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Et(t){let e,n;return e=new rt({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function At(t){let e,n;return e=new $t({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function St(t){let e,n;return e=new ut({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function jt(t){let e,n;return e=new pt({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Tt(t){let e,n;return e=new wt({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Nt(t){let e,n;return e=new zt({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Dt(t){let e,n;return e=new _t({}),{c(){D(e.$$.fragment)},m(t,r){G(e,t,r),n=!0},i(t){n||(S(e.$$.fragment,t),n=!0)},o(t){j(e.$$.fragment,t),n=!1},d(t){O(e,t)}}}function Gt(t){let e,n,r,c,o,s,$,l,a,i,p,g,w,v,b,y,z;return n=new Vt({props:{href:"https://github.com/statebait",name:"GitHub",$$slots:{default:[Ct]},$$scope:{ctx:t}}}),c=new Vt({props:{href:"https://twitter.com/statebait",name:"Twitter",$$slots:{default:[Et]},$$scope:{ctx:t}}}),s=new Vt({props:{href:"https://www.linkedin.com/in/mohamedshadab/",name:"LinkedIn",$$slots:{default:[At]},$$scope:{ctx:t}}}),l=new Vt({props:{href:"https://medium.com/@mohamedshadab78",name:"Medium",$$slots:{default:[St]},$$scope:{ctx:t}}}),i=new Vt({props:{href:"/blog",name:"Blog",$$slots:{default:[jt]},$$scope:{ctx:t}}}),g=new Vt({props:{href:"https://dev.to/statebait",name:"dev.to",$$slots:{default:[Tt]},$$scope:{ctx:t}}}),v=new Vt({props:{href:"https://sourcerer.io/statebait",name:"sourcerer.io",$$slots:{default:[Nt]},$$scope:{ctx:t}}}),y=new Vt({props:{href:"/assets/Mohamed_Shadab_Resume.pdf",name:"Resume",$$slots:{default:[Dt]},$$scope:{ctx:t}}}),{c(){e=d("div"),D(n.$$.fragment),r=h(),D(c.$$.fragment),o=h(),D(s.$$.fragment),$=h(),D(l.$$.fragment),a=h(),D(i.$$.fragment),p=h(),D(g.$$.fragment),w=h(),D(v.$$.fragment),b=h(),D(y.$$.fragment),x(e,"class","container mx-auto text-primary flex space-x-8 justify-center mt-6\n  flex-wrap")},m(t,m){f(t,e,m),G(n,e,null),u(e,r),G(c,e,null),u(e,o),G(s,e,null),u(e,$),G(l,e,null),u(e,a),G(i,e,null),u(e,p),G(g,e,null),u(e,w),G(v,e,null),u(e,b),G(y,e,null),z=!0},p(t,[e]){const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r);const o={};1&e&&(o.$$scope={dirty:e,ctx:t}),c.$set(o);const $={};1&e&&($.$$scope={dirty:e,ctx:t}),s.$set($);const a={};1&e&&(a.$$scope={dirty:e,ctx:t}),l.$set(a);const u={};1&e&&(u.$$scope={dirty:e,ctx:t}),i.$set(u);const f={};1&e&&(f.$$scope={dirty:e,ctx:t}),g.$set(f);const m={};1&e&&(m.$$scope={dirty:e,ctx:t}),v.$set(m);const d={};1&e&&(d.$$scope={dirty:e,ctx:t}),y.$set(d)},i(t){z||(S(n.$$.fragment,t),S(c.$$.fragment,t),S(s.$$.fragment,t),S(l.$$.fragment,t),S(i.$$.fragment,t),S(g.$$.fragment,t),S(v.$$.fragment,t),S(y.$$.fragment,t),z=!0)},o(t){j(n.$$.fragment,t),j(c.$$.fragment,t),j(s.$$.fragment,t),j(l.$$.fragment,t),j(i.$$.fragment,t),j(g.$$.fragment,t),j(v.$$.fragment,t),j(y.$$.fragment,t),z=!1},d(t){t&&m(e),O(n),O(c),O(s),O(l),O(i),O(g),O(v),O(y)}}}class Ot extends W{constructor(t){super(),P(this,t,null,Gt,s,{})}}function It(e){let n;return{c(){n=d("picture"),n.innerHTML='<source type="image/webp" srcset="/assets/mainpic.webp"/> \n  <img class="rounded-full shadow-2xl" width="200" height="200" src="/assets/mainpic.png" alt="mohamed shadab"/>'},m(t,e){f(t,n,e)},p:t,i:t,o:t,d(t){t&&m(n)}}}class Pt extends W{constructor(t){super(),P(this,t,null,It,s,{})}}function Wt(t){let e;return{c(){e=p("path"),x(e,"d","M505.05 19.1a15.89 15.89 0 0 0-12.2-12.2C460.65 0 435.46 0 410.36 0c-103.2 0-165.1 55.2-211.29 128H94.87A48 48 0 0 0 52 154.49l-49.42 98.8A24 24 0 0 0 24.07 288h103.77l-22.47 22.47a32 32 0 0 0 0 45.25l50.9 50.91a32 32 0 0 0 45.26 0L224 384.16V488a24 24 0 0 0 34.7 21.49l98.7-49.39a47.91 47.91 0 0 0 26.5-42.9V312.79c72.59-46.3 128-108.4 128-211.09.1-25.2.1-50.4-6.85-82.6zM384 168a40 40 0 1 1 40-40 40 40 0 0 1-40 40z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Rt(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[Wt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function qt(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class Ft extends W{constructor(t){super(),P(this,t,qt,Rt,s,{})}}function Yt(e){let n,r,c,o,s,$,l,a,i;return $=new Ft({}),{c(){n=d("div"),r=d("h1"),r.textContent="Mohamed Shadab",c=h(),o=d("div"),s=d("div"),D($.$$.fragment),l=h(),a=d("div"),a.textContent="Software Engineer",x(r,"class","text-3xl sm:text-4xl montserrat font-effect-anaglyph text-bold\n      text-primary mt-5"),x(s,"class","w-5 h-5"),x(o,"class","text-2xl text-primary flex space-x-3 items-center font-semibold\n      justify-center mt-5"),x(n,"class","text-center")},m(t,e){f(t,n,e),u(n,r),u(n,c),u(n,o),u(o,s),G($,s,null),u(o,l),u(o,a),i=!0},p:t,i(t){i||(S($.$$.fragment,t),i=!0)},o(t){j($.$$.fragment,t),i=!1},d(t){t&&m(n),O($)}}}class Jt extends W{constructor(t){super(),P(this,t,null,Yt,s,{})}}function Kt(t){let e;return{c(){e=p("path"),x(e,"d","M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function Qt(t){let n,r;const c=[{viewBox:"0 0 448 512"},t[0]];let o={$$slots:{default:[Kt]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function Ut(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class Xt extends W{constructor(t){super(),P(this,t,Ut,Qt,s,{})}}function Zt(t){let e,n,r,c,o,s,l,i,p,v;const b=t[5].default,y=$(b,t,t[4],null);return{c(){e=d("a"),n=d("div"),y&&y.c(),r=h(),c=d("div"),o=d("div"),s=g(t[1]),l=h(),i=d("div"),p=g(t[2]),x(n,"class","flex items-center h-20 w-16"),x(o,"class","font-bold text-xl"),x(e,"class","card text-primary border-primary flex rounded-lg border-2 bg-black\n    space-x-4 p-5 border-opacity-25 hover:border-white hover:text-white svelte-1nxr2v7"),x(e,"target","_blank"),x(e,"rel","noopener"),x(e,"aria-label",t[0]),x(e,"href",t[3])},m(t,$){f(t,e,$),u(e,n),y&&y.m(n,null),u(e,r),u(e,c),u(c,o),u(o,s),u(c,l),u(c,i),u(i,p),v=!0},p(t,[n]){y&&y.p&&16&n&&a(y,b,t,t[4],n,null,null),(!v||2&n)&&w(s,t[1]),(!v||4&n)&&w(p,t[2]),(!v||1&n)&&x(e,"aria-label",t[0]),(!v||8&n)&&x(e,"href",t[3])},i(t){v||(S(y,t),v=!0)},o(t){j(y,t),v=!1},d(t){t&&m(e),y&&y.d(t)}}}function te(t,e,n){let{$$slots:r={},$$scope:c}=e,{airaLabel:o}=e,{name:s}=e,{description:$}=e,{link:l}=e;return t.$$set=t=>{"airaLabel"in t&&n(0,o=t.airaLabel),"name"in t&&n(1,s=t.name),"description"in t&&n(2,$=t.description),"link"in t&&n(3,l=t.link),"$$scope"in t&&n(4,c=t.$$scope)},[o,s,$,l,c,r]}class ee extends W{constructor(t){super(),P(this,t,te,Zt,s,{airaLabel:0,name:1,description:2,link:3})}}function ne(t){let e;return{c(){e=p("path"),x(e,"d","M256 18.365L50.14 136 256 253.635 461.86 136 256 18.365zm-154 168L50.14 216 256 333.635 461.86 216 410 186.365l-154 88-154-88zm0 80L50.14 296 256 413.635 461.86 296 410 266.365l-154 88-154-88zm0 80L50.14 376 256 493.635 461.86 376 410 346.365l-154 88-154-88z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function re(t){let n,r;const c=[{viewBox:"0 0 512 512"},t[0]];let o={$$slots:{default:[ne]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function ce(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class oe extends W{constructor(t){super(),P(this,t,ce,re,s,{})}}function se(t){let e;return{c(){e=p("path"),x(e,"d","M287.9 112c18.6 0 36.2 3.8 52.8 9.6 13.3-10.3 23.6-24.3 29.5-40.7-25.2-10.9-53-17-82.2-17-29.1 0-56.9 6-82.1 16.9 5.9 16.4 16.2 30.4 29.5 40.7 16.5-5.7 34-9.5 52.5-9.5zM163.6 438.7c12-11.8 20.4-26.4 24.5-42.4-32.9-26.4-54.8-65.3-58.9-109.6-8.5-2.8-17.2-4.6-26.4-4.6-7.6 0-15.2 1-22.5 3.1 4.1 62.8 35.8 118 83.3 153.5zm224.2-42.6c4.1 16 12.5 30.7 24.5 42.5 47.4-35.5 79.1-90.7 83-153.5-7.2-2-14.7-3-22.2-3-9.2 0-18 1.9-26.6 4.7-4.1 44.2-26 82.9-58.7 109.3zm113.5-205c-17.6-10.4-36.3-16.6-55.3-19.9 6-17.7 10-36.4 10-56.2 0-41-14.5-80.8-41-112.2-2.5-3-6.6-3.7-10-1.8-3.3 1.9-4.8 6-3.6 9.7 4.5 13.8 6.6 26.3 6.6 38.5 0 67.8-53.8 122.9-120 122.9S168 117 168 49.2c0-12.1 2.2-24.7 6.6-38.5 1.2-3.7-.3-7.8-3.6-9.7-3.4-1.9-7.5-1.2-10 1.8C134.6 34.2 120 74 120 115c0 19.8 3.9 38.5 10 56.2-18.9 3.3-37.7 9.5-55.3 19.9-34.6 20.5-61 53.3-74.3 92.4-1.3 3.7.2 7.7 3.5 9.8 3.3 2 7.5 1.3 10-1.6 9.4-10.8 19-19.1 29.2-25.1 57.3-33.9 130.8-13.7 163.9 45 33.1 58.7 13.4 134-43.9 167.9-10.2 6.1-22 10.4-35.8 13.4-3.7.8-6.4 4.2-6.4 8.1.1 4 2.7 7.3 6.5 8 39.7 7.8 80.6.8 115.2-19.7 18-10.6 32.9-24.5 45.3-40.1 12.4 15.6 27.3 29.5 45.3 40.1 34.6 20.5 75.5 27.5 115.2 19.7 3.8-.7 6.4-4 6.5-8 0-3.9-2.6-7.3-6.4-8.1-13.9-2.9-25.6-7.3-35.8-13.4-57.3-33.9-77-109.2-43.9-167.9s106.6-78.9 163.9-45c10.2 6.1 19.8 14.3 29.2 25.1 2.5 2.9 6.7 3.6 10 1.6s4.8-6.1 3.5-9.8c-13.1-39.1-39.5-72-74.1-92.4zm-213.4 129c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function $e(t){let n,r;const c=[{viewBox:"0 0 576 512"},t[0]];let o={$$slots:{default:[se]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function le(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class ae extends W{constructor(t){super(),P(this,t,le,$e,s,{})}}function ie(t){let e;return{c(){e=p("path"),x(e,"d","M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z")},m(t,n){f(t,e,n)},d(t){t&&m(e)}}}function ue(t){let n,r;const c=[{viewBox:"0 0 24 24"},t[0]];let o={$$slots:{default:[ie]},$$scope:{ctx:t}};for(let t=0;t<c.length;t+=1)o=e(o,c[t]);return n=new K({props:o}),{c(){D(n.$$.fragment)},m(t,e){G(n,t,e),r=!0},p(t,[e]){const r=1&e?T(c,[c[0],N(t[0])]):{};2&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){O(n,t)}}}function fe(t,n,r){return t.$$set=t=>{r(0,n=e(e({},n),i(t)))},[n=i(n)]}class me extends W{constructor(t){super(),P(this,t,fe,ue,s,{})}}function de(t){let e,n,r;return n=new oe({}),{c(){e=d("div"),D(n.$$.fragment),x(e,"class","w-16")},m(t,c){f(t,e,c),G(n,e,null),r=!0},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&m(e),O(n)}}}function pe(t){let e,n,r;return n=new ae({}),{c(){e=d("div"),D(n.$$.fragment),x(e,"class","w-16")},m(t,c){f(t,e,c),G(n,e,null),r=!0},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&m(e),O(n)}}}function ge(t){let e,n,r;return n=new me({}),{c(){e=d("div"),D(n.$$.fragment),x(e,"class","w-16")},m(t,c){f(t,e,c),G(n,e,null),r=!0},i(t){r||(S(n.$$.fragment,t),r=!0)},o(t){j(n.$$.fragment,t),r=!1},d(t){t&&m(e),O(n)}}}function he(t){let e,n,r,c,o,s,$,l,a,i;return o=new ee({props:{name:"Darkrai",description:"Darkrai is a browser extension that enables you to chat with the people visiting the same website.",link:"https://github.com/darkraichat",$$slots:{default:[de]},$$scope:{ctx:t}}}),$=new ee({props:{name:"Bio-modelling Web App",description:"A Web Pipeline for visualizing and simulating kinetic(ODE-based) biological models.",link:"https://github.com/HelikarLab/ode-app",$$slots:{default:[pe]},$$scope:{ctx:t}}}),a=new ee({props:{name:"Al Gafry Consulting Website",description:"A blazing fast project display website for Al Gafry Consulting.",link:"https://www.algafryconsulting.com/",$$slots:{default:[ge]},$$scope:{ctx:t}}}),{c(){e=d("div"),n=d("h1"),n.textContent="Projects",r=h(),c=d("div"),D(o.$$.fragment),s=h(),D($.$$.fragment),l=h(),D(a.$$.fragment),x(n,"class","text-3xl sm:text-4xl montserrat text-bold text-primary mt-5"),x(c,"class","grid mt-10 gap-8 lg:grid-cols-2"),x(e,"class","flex flex-col items-center mt-24 h-screen")},m(t,m){f(t,e,m),u(e,n),u(e,r),u(e,c),G(o,c,null),u(c,s),G($,c,null),u(c,l),G(a,c,null),i=!0},p(t,[e]){const n={};1&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n);const r={};1&e&&(r.$$scope={dirty:e,ctx:t}),$.$set(r);const c={};1&e&&(c.$$scope={dirty:e,ctx:t}),a.$set(c)},i(t){i||(S(o.$$.fragment,t),S($.$$.fragment,t),S(a.$$.fragment,t),i=!0)},o(t){j(o.$$.fragment,t),j($.$$.fragment,t),j(a.$$.fragment,t),i=!1},d(t){t&&m(e),O(o),O($),O(a)}}}class xe extends W{constructor(t){super(),P(this,t,null,he,s,{})}}function we(e){let n,r,c,o,s,$,l,a,i,p,g,w;return r=new Pt({}),o=new Jt({}),$=new Ot({}),i=new Xt({}),{c(){n=d("div"),D(r.$$.fragment),c=h(),D(o.$$.fragment),s=h(),D($.$$.fragment),l=h(),a=d("div"),D(i.$$.fragment),x(a,"class","mt-16 w-8 h-8 text-primary animate-bounce cursor-pointer"),x(n,"class","flex flex-col items-center mt-24 h-screen")},m(t,e){var m,d,h,x;f(t,n,e),G(r,n,null),u(n,c),G(o,n,null),u(n,s),G($,n,null),u(n,l),u(n,a),G(i,a,null),p=!0,g||(d="click",h=ve,(m=a).addEventListener(d,h,x),w=()=>m.removeEventListener(d,h,x),g=!0)},p:t,i(t){p||(S(r.$$.fragment,t),S(o.$$.fragment,t),S($.$$.fragment,t),S(i.$$.fragment,t),p=!0)},o(t){j(r.$$.fragment,t),j(o.$$.fragment,t),j($.$$.fragment,t),j(i.$$.fragment,t),p=!1},d(t){t&&m(n),O(r),O(o),O($),O(i),g=!1,w()}}}function ve(){window.scrollTo({top:window.innerHeight,behavior:"smooth"})}class be extends W{constructor(t){super(),P(this,t,null,we,s,{})}}function ye(e){let n,r,c,o,s,$;return n=new be({}),c=new xe({}),s=new q({}),{c(){D(n.$$.fragment),r=h(),D(c.$$.fragment),o=h(),D(s.$$.fragment)},m(t,e){G(n,t,e),f(t,r,e),G(c,t,e),f(t,o,e),G(s,t,e),$=!0},p:t,i(t){$||(S(n.$$.fragment,t),S(c.$$.fragment,t),S(s.$$.fragment,t),$=!0)},o(t){j(n.$$.fragment,t),j(c.$$.fragment,t),j(s.$$.fragment,t),$=!1},d(t){O(n,t),t&&m(r),O(c,t),t&&m(o),O(s,t)}}}return new class extends W{constructor(t){super(),P(this,t,null,ye,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
