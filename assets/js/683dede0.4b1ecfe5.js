"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[759],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return t?r.createElement(h,i(i({ref:n},c),{},{components:t})):r.createElement(h,i({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1483:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(7462),a=(t(7294),t(3905));const o={},i="Running Backend Server",l={unversionedId:"running/running_locally/backend",id:"running/running_locally/backend",title:"Running Backend Server",description:"Installation",source:"@site/docs/2-running/running_locally/1-backend.mdx",sourceDirName:"2-running/running_locally",slug:"/running/running_locally/backend",permalink:"/yacine-tv-docs/running/running_locally/backend",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/2-running/running_locally/1-backend.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Creating A Database",permalink:"/yacine-tv-docs/running/running_locally/database"},next:{title:"Creating Admin Credential",permalink:"/yacine-tv-docs/running/running_locally/create_admin"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Verification",id:"verification",level:2},{value:"When I should Go To Next Step ?",id:"when-i-should-go-to-next-step-",level:2}],c={toc:s};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"running-backend-server"},"Running Backend Server"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"/server")," folder.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a terminal (cmd or powershell..) in the path of that folder (",(0,a.kt)("inlineCode",{parentName:"p"},"/server"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"npm install")," to install the required dependencies."))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This will install the rest of the required dependencies for the server such as Express.js, MangoDB Driver...")),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"Now, look inside the ",(0,a.kt)("inlineCode",{parentName:"li"},"/server")," that you did opened, you should find a ",(0,a.kt)("inlineCode",{parentName:"li"},".env.example")," file which contains those variables:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JS"},"MANGODB_URI=YOUR_MANGODB_CLUSTER_URI\nPORT=8080\n")),(0,a.kt)("ol",{start:5},(0,a.kt)("li",{parentName:"ol"},"Replace ",(0,a.kt)("inlineCode",{parentName:"li"},"YOUR_MANGODB_CLUSTER_URI")," with your MangoDB cluster URI.")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"The MangoDB cluster URI looks something like : ",(0,a.kt)("inlineCode",{parentName:"p"},"mongodb+srv://gwhyyy:password@cluster0.ktg0sfb.mongodb.net/..."),".")),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"If you don't know how to get your cluster, please follow the ",(0,a.kt)("a",{parentName:"p",href:"/yacine-tv-docs/how_to/cluster"},(0,a.kt)("inlineCode",{parentName:"a"},"How To Get MangoDB Cluster URI")),", it contains a step-by-step tutorial about it.")),(0,a.kt)("ol",{start:6},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Optional: Replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"PORT")," with that you want to open a localhost with, Example when running the server locally, it's url will be ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:8080"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Rename the ",(0,a.kt)("inlineCode",{parentName:"p"},".env.example")," file name to ",(0,a.kt)("inlineCode",{parentName:"p"},".env"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the command ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start")," to run the Express.js server."))),(0,a.kt)("h2",{id:"verification"},"Verification"),(0,a.kt)("p",null,"To ensure that the backend server is running correctly, you can perform the following verification steps:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Open a browser and navigate to ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:<port>")," (replace ",(0,a.kt)("inlineCode",{parentName:"p"},"<port>")," with the port number specified in the ",(0,a.kt)("inlineCode",{parentName:"p"},".env")," file).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You should see a message indicating that the server is running."))),(0,a.kt)("h2",{id:"when-i-should-go-to-next-step-"},"When I should Go To Next Step ?"),(0,a.kt)("p",null,"When you have in your hands the ",(0,a.kt)("inlineCode",{parentName:"p"},"localhost:<PORT>")," running successfully, then ",(0,a.kt)("strong",{parentName:"p"},"congratulations"),", you can now pass to the next step where you will learn how to create an admin account to use it."))}u.isMDXComponent=!0}}]);