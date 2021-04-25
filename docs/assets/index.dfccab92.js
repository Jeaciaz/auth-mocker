var e=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.propertyIsEnumerable,s=Object.assign,r=(s,r)=>{var n={};for(var c in s)e.call(s,c)&&r.indexOf(c)<0&&(n[c]=s[c]);if(null!=s&&t)for(var c of t(s))r.indexOf(c)<0&&a.call(s,c)&&(n[c]=s[c]);return n};import{C as n,a as c,b as l,c as o}from"./vendor.a34fc0f4.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(a){const s=new URL(e,location),r=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((a,n)=>{const c=new URL(e,s);if(self[t].moduleMap[c])return a(self[t].moduleMap[c]);const l=new Blob([`import * as m from '${c}';`,`${t}.moduleMap['${c}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){n(new Error(`Failed to import: ${e}`)),r(o)},onload(){a(self[t].moduleMap[c]),r(o)}});document.head.appendChild(o)})),self[t].moduleMap={}}}("/auth-mocker/assets/");var m="_page_qqtsd_1",i="_container_qqtsd_17",u="_sidebar_qqtsd_33",d="_main_qqtsd_47",p="_logo_qqtsd_59",_="_title_qqtsd_71",E="_tabs_qqtsd_83",b="_tab_qqtsd_83",h="_active_qqtsd_123",f="_tab-icon_qqtsd_135";var v="_error_1v744_1",g="_success_1v744_9",w="/auth-mocker/assets/icon-user.13ddaa0e.svg",y="/auth-mocker/assets/icon-password.7c4fdd78.svg";const N=e=>{switch(e.type){case"checkbox":case"radio":return e.checked;case"file":return e.files;default:return e.value}},q=(e,t)=>Object.keys(e.target.elements).filter((e=>t.includes(e))).map((t=>({key:t,value:N(e.target.elements[t])}))).reduce(((e,{key:t,value:a})=>s(s({},e),{[t]:a})),{}),j=n.create({baseURI:"localhost:3000"}),k="requestStatus/idle",S="requestStatus/loading",x="requestStatus/success",O="requestStatus/error";var P="_input-box_wbjzi_1",M="_error_wbjzi_27",A="_loading_wbjzi_35",F="_input-icon_wbjzi_53",R="_hint_wbjzi_67",T="_input-text_wbjzi_89",U="_error-message_wbjzi_157";const L=e=>{var{status:t,name:a,icon:n,error:o,children:m}=e,i=r(e,["status","name","icon","error","children"]);return c.createElement(c.Fragment,null,o&&c.createElement("div",{className:U},o),c.createElement("label",{className:l(P,t===O&&M,t===S&&A)},c.createElement("img",{className:F,src:n,alt:`${a} icon`}),c.createElement("input",s({className:T,type:"text",name:a,disabled:t===S},i)),c.createElement("span",{className:R},m)))};L.defaultProps={status:k,placeholder:" "};var z="_input-checkbox_1h897_1",$="_input-checkbox-label_1h897_15";const C=e=>{var{name:t,children:a}=e,n=r(e,["name","children"]);return c.createElement("label",{className:z},c.createElement("input",s({type:"checkbox",name:t},n)),c.createElement("span",{className:$},a))};var I="_btn_c01se_1";const D=e=>{var{children:t,className:a}=e,n=r(e,["children","className"]);return c.createElement("button",s({className:l(I,a)},n),t)};var B="_title_153e2_1",W="_text_153e2_17";const G=e=>{var{children:t,className:a}=e,n=r(e,["children","className"]);return c.createElement("h2",s({className:l(B,a)},n),t)},H=e=>{var{children:t,className:a}=e,n=r(e,["children","className"]);return c.createElement("p",s({className:l(W,a)},n),t)};var J="_btn-submit_cpd9b_1",K="_error_cpd9b_9",Q="_success_cpd9b_17",V="/auth-mocker/assets/icon-email.528ad2f9.svg";var X="_btn-submit_1d3n3_1",Y="_error_1d3n3_9",Z="_success_1d3n3_17";const ee=[{text:"Sign in",icon:"/auth-mocker/assets/icon-sign-in.f3e86e1e.svg",component:()=>{const[e,t]=c.useState(k),[a,s]=c.useState(null);return c.createElement(c.Fragment,null,c.createElement(G,null,"Sign in"),c.createElement(H,null,"Welcome back to %APPNAME%, please sign in your account to continue."),null!==a&&c.createElement(H,{className:l(e===O&&v,e===x&&g)},a),c.createElement("form",{onSubmit:e=>{e.preventDefault();const a=q(e,["username","password","remember-device"]);var r;t(S),(r=a,new Promise(((e,t)=>setTimeout((()=>j.post("/login",r).then(e).catch(t)),500)))).then((()=>{s("Logged in!"),t(x)})).catch((e=>{s(e.response.data.message),t(O)}))}},c.createElement(L,{status:e,icon:w,name:"username",placeholder:"Type your username"},"Username"),c.createElement(L,{type:"password",status:e,icon:y,name:"password",placeholder:"Type your password"},"Password"),c.createElement(C,{name:"remember-device"},"Remember this device"),c.createElement(D,{type:"submit"},"Sign in")))}},{text:"Create account",icon:"/auth-mocker/assets/icon-create-account.20d09d41.svg",component:()=>{const[e,t]=c.useState({}),[a,r]=c.useState(k),[n,o]=c.useState(null),m=e=>{const a=(r=s({email:/^.+@.+\..+$/.test(e.email)?null:"Invalid email format","confirm-password":e.password!==e["confirm-password"]?"Passwords don't match":null},Object.fromEntries(Object.entries(e).filter((([,e])=>""===e)).map((([e])=>[e,"This field is required"])))),Object.fromEntries(Object.entries(r).filter((([,e])=>null!=e))));var r;return t(a),0===Object.keys(a).length},i=t=>null!=e[t]?O:a;return c.createElement(c.Fragment,null,c.createElement(G,null,"Create account"),c.createElement(H,null,"Provide the information to register your %APPNAME% account"),n&&c.createElement(H,{className:l(a===O&&K,a===x&&Q)},n),c.createElement("form",{onSubmit:e=>{e.preventDefault();const t=q(e,["full-name","email","username","password","confirm-password"]);var a;m(t)&&(r(S),(a=t,j.post("/register",a)).then((()=>{o("Account created!"),r(x)})).catch((e=>{o(e.response.data.message),r(O)})))}},c.createElement(L,{status:i("full-name"),error:e["full-name"],name:"full-name",icon:"/auth-mocker/assets/icon-full-name.597acb4b.svg",placeholder:"Type your name"},"Full name"),c.createElement(L,{status:i("email"),error:e.email,name:"email",icon:V,placeholder:"Type your email",type:"email"},"Email"),c.createElement(L,{status:i("username"),error:e.username,name:"username",icon:w,placeholder:"Type your username"},"Username"),c.createElement(L,{status:i("password"),error:e.password,name:"password",icon:y,placeholder:"Type your password",type:"password"},"Password"),c.createElement(L,{status:i("confirm-password"),error:e["confirm-password"],name:"confirm-password",icon:y,placeholder:"Type your password again",type:"password"},"Confirm password"),c.createElement(D,{className:J,type:"submit"},"Sign up")))}},{text:"Forgot password",icon:"/auth-mocker/assets/icon-forgot-password.4a324755.svg",component:()=>{const[e,t]=c.useState(k),[a,s]=c.useState(null);return c.createElement(c.Fragment,null,c.createElement(G,null,"Forgot password"),c.createElement(H,null,"Enter your account email to reset the account password"),a&&c.createElement(H,{className:l(e===O&&Y,e===x&&Z)},a),c.createElement("form",{onSubmit:e=>{e.preventDefault();const a=q(e,["email"]);var r;t(S),(r=a,j.post("/reset-password",r)).then((()=>{s("If this address exists, we sent it a recovery letter!"),t(x)})).catch((e=>{s(e.response.data.message),t(O)}))}},c.createElement(L,{icon:V,name:"email",status:e},"Email"),c.createElement(D,{className:X},"Reset password")))}}];function te(){const[e,t]=c.useState(ee[0]),a=e.component;return c.createElement("section",{className:m},c.createElement("div",{className:i},c.createElement("aside",{className:u},c.createElement("img",{className:p,src:"/auth-mocker/assets/img-logo.1d858264.png",alt:"%APPNAME% Logo"}),c.createElement("h1",{className:_},"%APPNAME%"),c.createElement("ul",{className:E,role:"tablist"},ee.map((a=>c.createElement("li",{key:a.text},c.createElement("button",{onClick:()=>t(a),className:l(b,e===a&&h),tabIndex:0,role:"tab","aria-selected":e===a},c.createElement("img",{className:f,src:a.icon,alt:`${a.text} icon`}),c.createElement("span",null,a.text))))))),c.createElement("main",{className:d},c.createElement(a,null))))}o.render(c.createElement(c.StrictMode,null,c.createElement(te,null)),document.getElementById("root"));