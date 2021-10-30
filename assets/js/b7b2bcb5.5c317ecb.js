"use strict";(self.webpackChunkturbowarp_docs=self.webpackChunkturbowarp_docs||[]).push([[78],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),d=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=n,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return r?a.createElement(h,i(i({ref:t},p),{},{components:r})):a.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},4958:(e,t,r)=>{r.r(t),r.d(t,{frontMatter:()=>l,contentTitle:()=>s,metadata:()=>d,toc:()=>p,default:()=>c});var a=r(3117),n=r(102),o=(r(7294),r(3905));const i=["components"],l={slug:"/embedding",hide_table_of_contents:!0},s="Embedding",d={unversionedId:"website/embedding",id:"website/embedding",isDocsHomePage:!1,title:"Embedding",description:"TurboWarp can be embedded with a standard iframe:",source:"@site/docs/website/embedding.md",sourceDirName:"website",slug:"/embedding",permalink:"/embedding",editUrl:"https://github.com/TurboWarp/docs/edit/master/docs/website/embedding.md",tags:[],version:"current",frontMatter:{slug:"/embedding",hide_table_of_contents:!0},sidebar:"sidebar",previous:{title:"Disable Compiler",permalink:"/disable-compiler"},next:{title:"How TurboWarp runs projects faster",permalink:"/how"}},p=[{value:"URL parameters",id:"url-parameters",children:[{value:"Autoplay",id:"autoplay",children:[],level:3}],level:2},{value:"Addons",id:"addons",children:[],level:2},{value:"Sanitize URL parameters",id:"security",children:[],level:2},{value:"License",id:"license",children:[],level:2},{value:"Need more control?",id:"packager",children:[],level:2}],u={toc:p};function c(e){let{components:t}=e,r=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"embedding"},"Embedding"),(0,o.kt)("p",null,"TurboWarp can be embedded with a standard iframe:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<iframe src="https://turbowarp.org/414716080/embed" width="499" height="416" allowtransparency="true" frameborder="0" scrolling="no" allowfullscreen></iframe>\n')),(0,o.kt)("p",null,"Replace ",(0,o.kt)("inlineCode",{parentName:"p"},"414716080")," with the ID of your project. You can change the width and height of the iframe and the player will automatically resize to fit (499x416 will result in the stage rendering at an undistorted 480x360)."),(0,o.kt)("h2",{id:"url-parameters"},"URL parameters"),(0,o.kt)("p",null,"All ",(0,o.kt)("a",{parentName:"p",href:"/url-parameters"},"standard URL Parameters")," are still available. You can use these to control usernames and other things."),(0,o.kt)("p",null,"There are also some special values only available in embeds:"),(0,o.kt)("h3",{id:"autoplay"},"Autoplay"),(0,o.kt)("p",null,"Embeds also support the ",(0,o.kt)("inlineCode",{parentName:"p"},"autoplay")," parameter, which will automatically hit the green flag when the project loads. For example: ",(0,o.kt)("a",{parentName:"p",href:"https://turbowarp.org/15832807/embed?autoplay"},"https://turbowarp.org/15832807/embed?autoplay")),(0,o.kt)("p",null,"Note that sound blocks may not work until the user interacts with the project (for example, by clicking). This is a restriction imposed by browsers. There is nothing TurboWarp can do to work around this."),(0,o.kt)("h2",{id:"addons"},"Addons"),(0,o.kt)("p",null,"By default, embeds have no addons enabled. This can be overridden with the ",(0,o.kt)("inlineCode",{parentName:"p"},"addons")," parameter, which is a comma separated list of addon IDs to enable. For example: ",(0,o.kt)("a",{parentName:"p",href:"https://turbowarp.org/15832807/embed?addons=pause,gamepad,mute-project"},"https://turbowarp.org/15832807/embed?addons=pause,gamepad,mute-project")),(0,o.kt)("p",null,"Useful addons and their IDs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'"Pause button" is ',(0,o.kt)("inlineCode",{parentName:"li"},"pause")),(0,o.kt)("li",{parentName:"ul"},'"Muted project player mode" is ',(0,o.kt)("inlineCode",{parentName:"li"},"mute-project")),(0,o.kt)("li",{parentName:"ul"},'"Remove curved stage border" is ',(0,o.kt)("inlineCode",{parentName:"li"},"remove-curved-stage-border")),(0,o.kt)("li",{parentName:"ul"},'"File drag and drop" is ',(0,o.kt)("inlineCode",{parentName:"li"},"drag-drop")),(0,o.kt)("li",{parentName:"ul"},'"Gamepad support" is ',(0,o.kt)("inlineCode",{parentName:"li"},"gamepad"))),(0,o.kt)("p",null,"Other addons will have no effect on the embed."),(0,o.kt)("h2",{id:"security"},"Sanitize URL parameters"),(0,o.kt)("p",null,"If you use user-supplied information to generate embed links, consider sanitizing any arguments to make sure users can't supply arbitrary arguments as some can lead to unexpected behaviors."),(0,o.kt)("h2",{id:"license"},"License"),(0,o.kt)("p",null,"TurboWarp is licensed under the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/TurboWarp/scratch-gui/blob/develop/LICENSE"},"GPLv3.0"),". We believe that an ",(0,o.kt)("inlineCode",{parentName:"p"},"<iframe>"),' of a GPLv3.0 work doesn\'t create a derivative work under the GPLv3.0, rather, it creates an "aggregate work" (which is not subject to the same requirements as derivative works). However, we are not lawyers and this is not legal advice. Talk to a real lawyer for more information.'),(0,o.kt)("h2",{id:"packager"},"Need more control?"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://packager.turbowarp.org/"},"TurboWarp Packager")," for more control over the loading screen, accent colors, controls, and more. You can also ",(0,o.kt)("a",{parentName:"p",href:"/packager/embedding"},"embed the output of the packager")," very easily."))}c.isMDXComponent=!0}}]);