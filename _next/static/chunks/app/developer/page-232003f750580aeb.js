(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[379],{257:(e,t,r)=>{Promise.resolve().then(r.bind(r,6942))},4436:(e,t,r)=>{"use strict";r.d(t,{k5:()=>u});var n=r(2115),s={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},a=n.createContext&&n.createContext(s),c=["attr","size","title"];function l(){return(l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){var n,s,a;n=e,s=t,a=r[t],(s=function(e){var t=function(e,t){if("object"!=typeof e||!e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:t+""}(s))in n?Object.defineProperty(n,s,{value:a,enumerable:!0,configurable:!0,writable:!0}):n[s]=a}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function u(e){return t=>n.createElement(f,l({attr:o({},e.attr)},t),function e(t){return t&&t.map((t,r)=>n.createElement(t.tag,o({key:r},t.attr),e(t.child)))}(e.child))}function f(e){var t=t=>{var r,{attr:s,size:a,title:i}=e,u=function(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r={};for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){if(t.indexOf(n)>=0)continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}(e,c),f=a||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",l({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,s,u,{className:r,style:o(o({color:e.color||t.color},t.style),e.style),height:f,width:f,xmlns:"http://www.w3.org/2000/svg"}),i&&n.createElement("title",null,i),e.children)};return void 0!==a?n.createElement(a.Consumer,null,e=>t(e)):t(s)}},6942:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var n=r(5155),s=r(2115);r(9078);let a=e=>{let{data:t=["TypingArea Example"],delay:r=.35,cursorDisplay:a=!0,flickerDisplay:c=!0,applyColor:l=!1,listColor:i=["#ff4757","#ff6348","#ffa502","#70a1ff","#1e90ff","#3742fa","#2f3542"]}=e,[o,u]=(0,s.useState)(0),[f,p]=(0,s.useState)(0),[m,v]=(0,s.useState)(1),[d,h]=(0,s.useState)(t[f]),[b,j]=(0,s.useState)(""),[y,g]=(0,s.useState)(0),[O,x]=(0,s.useState)(0),[w,N]=(0,s.useState)(!1);(0,s.useEffect)(()=>h(t[f]),[f]);let E=()=>{w?x(O+1):(u(o+m),x(0))};(0,s.useEffect)(()=>{O>=5&&N(!1)},[O]),(0,s.useEffect)(()=>{j(d.substring(0,o)),d.length>0&&(1==m&&o==d.length?(N(!0),v(-1)):-1==m&&0==o&&v(1))},[o]),(0,s.useEffect)(()=>{o==d.length?v(-1):0==o&&p((f+1)%t.length)},[m]),(0,s.useEffect)(()=>{v(1),l&&g((y+1)%i.length)},[f]);let P=function(e,t){let r=(0,s.useRef)();(0,s.useEffect)(()=>{r.current=e},[e]),(0,s.useEffect)(()=>{if(null!==t){let e=setInterval(function(){r.current()},t);return()=>clearInterval(e)}},[t])}(()=>E(),1e3*r);if((0,s.useEffect)(()=>clearInterval(P)),!l)return(0,n.jsx)("span",{className:"typing-area ".concat(a&&"text-cursor"," ").concat(c&&"flicker"),children:b});{let e={color:i[y]};return(0,n.jsx)("span",{style:e,className:"typing-area ".concat(a&&"text-cursor"," ").concat(c&&"flicker"),children:b})}};var c=r(748);function l(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"row mt-4",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsxs)("span",{className:"fs-1",children:[(0,n.jsx)("span",{className:"me-4",children:"우리는"}),(0,n.jsx)(a,{data:["Topwar 열정 플레이어들","3223 Server"],applyColor:"true",listColor:["#0984e3","#6c5ce7"]}),(0,n.jsx)("span",{className:"ms-2",children:"입니다"})]})})}),(0,n.jsx)("hr",{}),(0,n.jsx)("div",{className:"row mt-2",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsxs)("a",{className:"btn btn-outline-primary btn-lg w-100 d-flex align-items-center justify-content-center p-4",href:"https://open.kakao.com/o/sWjtxvXg",children:[(0,n.jsx)(c.sfP,{className:"me-2 fs-1"}),(0,n.jsx)("span",{className:"fs-1",children:"이전 문의"})]})})}),(0,n.jsx)("div",{className:"row mt-4 mb-5 pb-5",children:(0,n.jsx)("div",{className:"col",children:(0,n.jsx)("img",{src:"/images/screen/s3223.png",width:"100%"})})})]})}},9078:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[543,206,441,684,358],()=>t(257)),_N_E=e.O()}]);