(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[326],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),i=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),y=i(n),d=o,g=y["".concat(c,".").concat(d)]||y[d]||u[d]||l;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,s=new Array(l);s[0]=y;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var i=2;i<l;i++)s[i]=n[i];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}y.displayName="MDXCreateElement"},6213:(e,t,n)=>{"use strict";n.d(t,{Z:()=>Z});var r=n(3117),o=n(7294),l=n(6010);const s={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var a={Prism:n(7410).default,theme:s};function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var p=/\r\n|\r|\n/,u=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},y=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},d=function(e,t){var n=e.plain,r=Object.create(null),o=e.styles.reduce((function(e,n){var r=n.languages,o=n.style;return r&&!r.includes(t)||n.types.forEach((function(t){var n=i({},e[t],o);e[t]=n})),e}),r);return o.root=n,o.plain=i({},n,{backgroundColor:null}),o};function g(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&-1===t.indexOf(r)&&(n[r]=e[r]);return n}const m=function(e){function t(){for(var t=this,n=[],r=arguments.length;r--;)n[r]=arguments[r];e.apply(this,n),c(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?d(e.theme,e.language):void 0;return t.themeDict=n})),c(this,"getLineProps",(function(e){var n=e.key,r=e.className,o=e.style,l=i({},g(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(l.style=s.plain),void 0!==o&&(l.style=void 0!==l.style?i({},l.style,o):o),void 0!==n&&(l.key=n),r&&(l.className+=" "+r),l})),c(this,"getStyleForToken",(function(e){var n=e.types,r=e.empty,o=n.length,l=t.getThemeDict(t.props);if(void 0!==l){if(1===o&&"plain"===n[0])return r?{display:"inline-block"}:void 0;if(1===o&&!r)return l[n[0]];var s=r?{display:"inline-block"}:{},a=n.map((function(e){return l[e]}));return Object.assign.apply(Object,[s].concat(a))}})),c(this,"getTokenProps",(function(e){var n=e.key,r=e.className,o=e.style,l=e.token,s=i({},g(e,["key","className","style","token"]),{className:"token "+l.types.join(" "),children:l.content,style:t.getStyleForToken(l),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?i({},s.style,o):o),void 0!==n&&(s.key=n),r&&(s.className+=" "+r),s})),c(this,"tokenize",(function(e,t,n,r){var o={code:t,grammar:n,language:r,tokens:[]};e.hooks.run("before-tokenize",o);var l=o.tokens=e.tokenize(o.code,o.grammar,o.language);return e.hooks.run("after-tokenize",o),l}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,r=e.code,o=e.children,l=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],r=[0],o=[e.length],l=0,s=0,a=[],c=[a];s>-1;){for(;(l=r[s]++)<o[s];){var i=void 0,d=t[s],g=n[s][l];if("string"==typeof g?(d=s>0?d:["plain"],i=g):(d=y(d,g.type),g.alias&&(d=y(d,g.alias)),i=g.content),"string"==typeof i){var m=i.split(p),f=m.length;a.push({types:d,content:m[0]});for(var h=1;h<f;h++)u(a),c.push(a=[]),a.push({types:d,content:m[h]})}else s++,t.push(d),n.push(i),r.push(0),o.push(i.length)}s--,t.pop(),n.pop(),r.pop(),o.pop()}return u(a),c}(void 0!==s?this.tokenize(t,r,s,n):[r]),className:"prism-code language-"+n,style:void 0!==l?l.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component);var f=n(7594),h=n.n(f);const b={plain:{color:"#bfc7d5",backgroundColor:"#292d3e"},styles:[{types:["comment"],style:{color:"rgb(105, 112, 152)",fontStyle:"italic"}},{types:["string","inserted"],style:{color:"rgb(195, 232, 141)"}},{types:["number"],style:{color:"rgb(247, 140, 108)"}},{types:["builtin","char","constant","function"],style:{color:"rgb(130, 170, 255)"}},{types:["punctuation","selector"],style:{color:"rgb(199, 146, 234)"}},{types:["variable"],style:{color:"rgb(191, 199, 213)"}},{types:["class-name","attr-name"],style:{color:"rgb(255, 203, 107)"}},{types:["tag","deleted"],style:{color:"rgb(255, 85, 114)"}},{types:["operator"],style:{color:"rgb(137, 221, 255)"}},{types:["boolean"],style:{color:"rgb(255, 88, 116)"}},{types:["keyword"],style:{fontStyle:"italic"}},{types:["doctype"],style:{color:"rgb(199, 146, 234)",fontStyle:"italic"}},{types:["namespace"],style:{color:"rgb(178, 204, 214)"}},{types:["url"],style:{color:"rgb(221, 221, 221)"}}]};var v=n(5350),k=n(3773);const j=()=>{const{prism:e}=(0,k.LU)(),{isDarkTheme:t}=(0,v.Z)(),n=e.theme||b,r=e.darkTheme||n;return t?r:n};var O=n(4973);const E="codeBlockContainer_K1bP",x="codeBlockContent_hGly",P="codeBlockTitle_eoMF",T="codeBlock_23N8",w="copyButton_Ue-o",C="codeBlockLines_39YC",N=/{([\d,-]+)}/,S=["js","jsBlock","jsx","python","html"],B={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},python:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}},D=["highlight-next-line","highlight-start","highlight-end"],L=function(e){void 0===e&&(e=S);const t=e.map((e=>{const{start:t,end:n}=B[e];return"(?:"+t+"\\s*("+D.join("|")+")\\s*"+n+")"})).join("|");return new RegExp("^\\s*(?:"+t+")\\s*$")};function Z(e){let{children:t,className:n,metastring:s,title:c}=e;const{prism:i}=(0,k.LU)(),[p,u]=(0,o.useState)(!1),[y,d]=(0,o.useState)(!1);(0,o.useEffect)((()=>{d(!0)}),[]);const g=(0,k.bc)(s)||c,f=(0,o.useRef)(null);let b=[];const v=j(),S=Array.isArray(t)?t.join(""):t;if(s&&N.test(s)){const e=s.match(N)[1];b=h()(e).filter((e=>e>0))}const B=null==n?void 0:n.split(" ").find((e=>e.startsWith("language-")));let D=null==B?void 0:B.replace(/language-/,"");!D&&i.defaultLanguage&&(D=i.defaultLanguage);let Z=S.replace(/\n$/,"");if(0===b.length&&void 0!==D){let e="";const t=(e=>{switch(e){case"js":case"javascript":case"ts":case"typescript":return L(["js","jsBlock"]);case"jsx":case"tsx":return L(["js","jsBlock","jsx"]);case"html":return L(["js","jsBlock","html"]);case"python":case"py":return L(["python"]);default:return L()}})(D),n=S.replace(/\n$/,"").split("\n");let r;for(let o=0;o<n.length;){const l=o+1,s=n[o].match(t);if(null!==s){switch(s.slice(1).reduce(((e,t)=>e||t),void 0)){case"highlight-next-line":e+=l+",";break;case"highlight-start":r=l;break;case"highlight-end":e+=r+"-"+(l-1)+","}n.splice(o,1)}else o+=1}b=h()(e),Z=n.join("\n")}const _=()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const r=document.createElement("textarea"),o=document.activeElement;r.value=e,r.setAttribute("readonly",""),r.style.contain="strict",r.style.position="absolute",r.style.left="-9999px",r.style.fontSize="12pt";const l=document.getSelection();let s=!1;l.rangeCount>0&&(s=l.getRangeAt(0)),n.append(r),r.select(),r.selectionStart=0,r.selectionEnd=e.length;let a=!1;try{a=document.execCommand("copy")}catch(c){}r.remove(),s&&(l.removeAllRanges(),l.addRange(s)),o&&o.focus()}(Z),u(!0),setTimeout((()=>u(!1)),2e3)};return o.createElement(m,(0,r.Z)({},a,{key:String(y),theme:v,code:Z,language:D}),(e=>{let{className:t,style:s,tokens:a,getLineProps:c,getTokenProps:i}=e;return o.createElement("div",{className:(0,l.Z)(E,null==n?void 0:n.replace(/language-[^ ]+/,""))},g&&o.createElement("div",{style:s,className:P},g),o.createElement("div",{className:(0,l.Z)(x,D)},o.createElement("pre",{tabIndex:0,className:(0,l.Z)(t,T,"thin-scrollbar"),style:s},o.createElement("code",{className:C},a.map(((e,t)=>{1===e.length&&"\n"===e[0].content&&(e[0].content="");const n=c({line:e,key:t});return b.includes(t+1)&&(n.className+=" docusaurus-highlight-code-line"),o.createElement("span",(0,r.Z)({key:t},n),e.map(((e,t)=>o.createElement("span",(0,r.Z)({key:t},i({token:e,key:t}))))),o.createElement("br",null))})))),o.createElement("button",{ref:f,type:"button","aria-label":(0,O.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),className:(0,l.Z)(w,"clean-btn"),onClick:_},p?o.createElement(O.Z,{id:"theme.CodeBlock.copied",description:"The copied button label on code blocks"},"Copied"):o.createElement(O.Z,{id:"theme.CodeBlock.copy",description:"The copy button label on code blocks"},"Copy"))))}))}},7594:(e,t)=>{function n(e){let t,n=[];for(let r of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(r))n.push(parseInt(r,10));else if(t=r.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,r,o,l]=t;if(r&&l){r=parseInt(r),l=parseInt(l);const e=r<l?1:-1;"-"!==o&&".."!==o&&"\u2025"!==o||(l+=e);for(let t=r;t!==l;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);