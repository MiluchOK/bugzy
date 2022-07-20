(window.webpackJsonpbugzy=window.webpackJsonpbugzy||[]).push([[0],{103:function(e,a,t){e.exports=t(1185)},108:function(e,a,t){},1185:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(9),l=t.n(o),c=(t(108),t(79)),i=t(89),s=t(34),u=t(26),m=t(57),p=t(58),d=t(1224),g=t(83),f=t.n(g),b=t(1227),v=t(1223),E=t(52),h=t(1216),w=t(1187),y=t(50),O=t.n(y),j=t(1221),x=t(1230),N=t(1222),k=t(1219),S=t(1229),C=t(82),B=t.n(C),P=Object(h.a)((function(e){return{error:{color:e.palette.error.main}}}));function W(e){var a=P(),t=r.a.createElement(k.a,{position:"start",className:"field-error"},r.a.createElement(S.a,{className:a.error,title:e.errorMessages,placement:"right-end"},r.a.createElement(B.a,null)));return r.a.createElement(j.a,{id:e.id,fullWidth:e.fullWidth,error:e.errorMessages.length>0||e.error,disabled:e.disabled,className:e.className},r.a.createElement(x.a,{htmlFor:"component-error"},e.label),r.a.createElement(N.a,{id:"component-error",value:e.value,onChange:e.onChange,type:e.type||"text","aria-describedby":"component-error-text",endAdornment:e.errorMessages.length>0?t:r.a.createElement(r.a.Fragment,null)}))}function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var I=Object(h.a)((function(e){return{formWrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"60%",maxWidth:300},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(1)},wrapper:{marginTop:"20px",margin:e.spacing(1),position:"relative"},buttonProgress:{color:v.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},avatar:{color:"#fff",backgroundColor:E.a[500],marginBottom:e.spacing(3)},spinner:{marginBottom:e.spacing(3)}}}));var L=function(e){var a=I(),t=r.a.useState({username:{value:"",errors:[]},password:{value:"",errors:[]}}),n=Object(u.a)(t,2),o=n[0],l=n[1],c=r.a.useState(!1),i=Object(u.a)(c,2),s=i[0],m=i[1],g=r.a.useState([]),v=Object(u.a)(g,2),E=v[0],h=v[1],y=function(e){return function(a){var t=[];"username"===e&&(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a.target.value)||(t=["Not a valid email"])),l(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},o,Object(p.a)({},e,{value:a.target.value,errors:t}))),h([])}},j=E.map((function(e){return r.a.createElement(w.a,{className:"error-message",color:"error",variant:"caption"}," ",e," ")})),x=r.a.createElement(O.a,{className:a.avatar},r.a.createElement(f.a,null));return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(d.a,{className:"".concat(a.spinner," loading-spinner")}):x,s?"":j,r.a.createElement("form",{className:a.formWrapper,onSubmit:function(a){e.brokenLoadingLock||m(!0),e.handleSubmit(a,o.username.value,o.password.value).then((function(){console.log("Successful resolution"),m(!1)})).catch((function(e){console.log("Unsuccessful resolution"),m(!1),h([e.message])}))}},r.a.createElement(W,{id:"username-field",label:"Username",fullWidth:!0,error:E.length>0,errorMessages:e.brokenEmailVerification?[]:o.username.errors,disabled:s,className:a.textField,value:o.username.value,onChange:y("username"),margin:"normal"}),r.a.createElement(W,{id:"password-field",label:"Password",type:"password",fullWidth:!0,error:E.length>0,errorMessages:o.password.errors,disabled:s,className:a.textField,value:o.password.value,onChange:y("password"),margin:"normal"}),r.a.createElement("div",{className:a.wrapper},r.a.createElement(b.a,{id:"login-button",variant:"contained",color:"primary",disabled:s,className:a.button,type:"submit"},"Login"))))},T=t(84),F=t.n(T),M=t(85),z=t.n(M),U=Object(h.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",width:"80%",marginTop:"5%",marginBottom:"5%",paddingBottom:e.spacing(5),paddingTop:e.spacing(5)}}}));function V(e){var a=U();return r.a.createElement(z.a,{className:a.paper,id:e.id||"paper",elevation:e.elevation||3},e.children)}var A=t(86),J=t.n(A),R=t(87),$=t.n(R),G=Object(h.a)((function(e){return{checkIcon:{backgroundColor:v.a[500],marginBottom:e.spacing(3)}}}));function H(){var e=G();return r.a.createElement(V,null,r.a.createElement(O.a,{className:e.checkIcon},r.a.createElement(J.a,null)),r.a.createElement($.a,{id:"status"}," Success "))}var X=t(59),Y=t.n(X);var q=Object(h.a)((function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column"},button:{margin:"20px"},checkIcon:{backgroundColor:v.a[500],marginBottom:e.spacing(3)}}}));var K=function(e){var a=q(),t=r.a.useState([]),n=Object(u.a)(t,2),o=n[0],l=n[1],c=r.a.useState(void 0),i=Object(u.a)(c,2),s=i[0],p=i[1],d=F.a.parse(e.location.search),g="1"===d.bug,f="2"===d.bug,v="3"===d.bug,E="4"===d.bug,h="5"===d.bug,y=r.a.createElement(V,null,r.a.createElement(L,{handleSubmit:function(e,a,t){return e.preventDefault(),m.delay(1e3).then((function(){return new m((function(e,n){h||o.some((function(e){return e.username===a&&e.password===t}))&&!E?(console.log("Good login."),p(!0),e()):(console.log("Bad login."),p(!1),n(new Error("Incorrect username or password")))}))}))},brokenEmailVerification:g,brokenLoadingLock:f})),O=r.a.createElement(V,null,r.a.createElement(w.a,null,"Existing Users"),r.a.createElement(b.a,{id:"add-user",onClick:v?function(){}:function(){var e={username:Y.a.internet.email(),password:Y.a.internet.password()};l(o.concat([e]))},variant:"contained",color:"primary",className:a.button},"Add User"),r.a.createElement(V,{elevation:1,id:"jsonText"},r.a.createElement("pre",null,JSON.stringify(o,null,2))));return r.a.createElement("div",{className:a.root,id:"pageRoot"},s?r.a.createElement(H,null):y,O)},Q=t(1225),Z=t(1226),_=t(88),ee=t.n(_),ae=Object(h.a)((function(e){return{elem:{margin:"20px"},root:{margin:"50px"},inputControlls:{display:"flex",justifyContent:"center"},container:{display:"flex",marginTop:"20%",marginRight:"30px",marginLeft:"30px",justifyContent:"space-between",flexWrap:"wrap"}}}));function te(e){for(var a=Object(n.useState)(0),t=Object(u.a)(a,2),o=t[0],l=t[1],c=Object(n.useState)(0),i=Object(u.a)(c,2),s=i[0],m=i[1],p=Object(Q.a)(ee.a)({position:"absolute",left:"".concat(o,"px"),top:"".concat(s,"px"),color:"red"}),d=ae(),g=[],f=0;f<10;f++)g.push(r.a.createElement(b.a,{variant:"contained",color:"primary",className:d.elem},"Button ",f+1));return r.a.createElement("div",{className:d.root},r.a.createElement("div",{className:d.inputControlls},r.a.createElement(Z.a,{className:d.elem,variant:"outlined",label:"X",defaultValue:o,onChange:function(e){return l(e.target.value)}}),r.a.createElement(Z.a,{className:d.elem,variant:"outlined",label:"Y",defaultValue:s,onChange:function(e){return m(e.target.value)}})),r.a.createElement("div",{className:d.container},g,r.a.createElement(p,null)))}var ne=function(){return r.a.createElement(i.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/locatorsOverview",exact:!0,component:te}),r.a.createElement(s.a,{path:"/",component:K})))};var re=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Bugzy"),r.a.createElement("link",{rel:"icon",type:"image/jpg",href:"".concat("/bugzy","/logo.jpg")})),r.a.createElement(ne,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[103,1,2]]]);
//# sourceMappingURL=main.1371d12c.chunk.js.map