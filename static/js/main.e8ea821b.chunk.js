(window.webpackJsonpbugzy=window.webpackJsonpbugzy||[]).push([[0],{1163:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(15),l=t.n(o),c=(t(86),t(63)),i=t(71),s=t(25),u=t(28),m=t(47),p=t(48),g=t(1199),d=t(67),f=t.n(d),v=t(1200),b=t(1198),E=t(42),h=t(1193),w=t(1167),y=t(40),O=t.n(y),j=t(1197),x=t(1203),N=t(1202),S=t(1196),k=t(1201),B=t(66),P=t.n(B),W=Object(h.a)((function(e){return{error:{color:e.palette.error.main}}}));function C(e){var a=W(),t=r.a.createElement(S.a,{position:"start"},r.a.createElement(k.a,{className:a.error,title:e.errorMessages,placement:"right-end"},r.a.createElement(P.a,null)));return r.a.createElement(j.a,{fullWidth:e.fullWidth,error:e.errorMessages.length>0||e.error,disabled:e.disabled,className:e.className},r.a.createElement(x.a,{htmlFor:"component-error"},e.label),r.a.createElement(N.a,{id:"component-error",value:e.value,onChange:e.onChange,type:e.type||"text","aria-describedby":"component-error-text",endAdornment:e.errorMessages.length>0?t:r.a.createElement(r.a.Fragment,null)}))}function D(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var I=Object(h.a)((function(e){return{formWrapper:{display:"flex",flexDirection:"column",alignItems:"center",width:"60%",maxWidth:300},textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1),marginTop:e.spacing(1)},wrapper:{marginTop:"20px",margin:e.spacing(1),position:"relative"},buttonProgress:{color:b.a[500],position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12},avatar:{color:"#fff",backgroundColor:E.a[500],marginBottom:e.spacing(3)},spinner:{marginBottom:e.spacing(3)}}}));var F=function(e){var a=I(),t=r.a.useState({username:{value:"",errors:[]},password:{value:"",errors:[]}}),n=Object(u.a)(t,2),o=n[0],l=n[1],c=r.a.useState(!1),i=Object(u.a)(c,2),s=i[0],m=i[1],d=r.a.useState([]),b=Object(u.a)(d,2),E=b[0],h=b[1],y=function(e){return function(a){var t=[];"username"===e&&(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(a.target.value)||(t=["Not a valid email"])),l(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?D(t,!0).forEach((function(a){Object(p.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):D(t).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},o,Object(p.a)({},e,{value:a.target.value,errors:t}))),h([])}},j=E.map((function(e){return r.a.createElement(w.a,{color:"error",variant:"caption"}," ",e," ")})),x=r.a.createElement(O.a,{className:a.avatar},r.a.createElement(f.a,null));return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(g.a,{className:a.spinner}):x,s?"":j,r.a.createElement("form",{className:a.formWrapper,onSubmit:function(a){m(!0),e.handleSubmit(a,o.username.value,o.password.value).then((function(){console.log("Successful resolution"),m(!1)})).catch((function(e){console.log("Unsuccessful resolution"),m(!1),h([e.message])}))}},r.a.createElement(C,{id:"standard-name",label:"Username",fullWidth:!0,error:E.length>0,errorMessages:o.username.errors,disabled:s,className:a.textField,value:o.username.value,onChange:y("username"),margin:"normal"}),r.a.createElement(C,{id:"standard-name",label:"Password",type:"password",fullWidth:!0,error:E.length>0,errorMessages:o.password.errors,disabled:s,className:a.textField,value:o.password.value,onChange:y("password"),margin:"normal"}),r.a.createElement("div",{className:a.wrapper},r.a.createElement(v.a,{variant:"contained",color:"primary",disabled:s,className:a.button,type:"submit"},"Login"))))},T=t(68),M=t.n(T),z=Object(h.a)((function(e){return{paper:{display:"flex",flexDirection:"column",alignItems:"center",width:"80%",marginTop:"5%",marginBottom:"5%",paddingBottom:e.spacing(5),paddingTop:e.spacing(5)}}}));function U(e){var a=z();return r.a.createElement(M.a,{className:a.paper,id:e.id||"paper",elevation:e.elevation||3},e.children)}var A=t(69),J=t.n(A),L=t(70),R=t.n(L),$=Object(h.a)((function(e){return{checkIcon:{backgroundColor:b.a[500],marginBottom:e.spacing(3)}}}));function G(){var e=$();return r.a.createElement(U,null,r.a.createElement(O.a,{className:e.checkIcon},r.a.createElement(J.a,null)),r.a.createElement(R.a,null," Success "))}var H=t(49),q=t.n(H);var K=Object(h.a)((function(e){return{root:{display:"flex",alignItems:"center",flexDirection:"column"},button:{margin:"20px"},checkIcon:{backgroundColor:b.a[500],marginBottom:e.spacing(3)}}}));var Q=function(){var e=K(),a=r.a.useState([]),t=Object(u.a)(a,2),n=t[0],o=t[1],l=r.a.useState(void 0),c=Object(u.a)(l,2),i=c[0],s=c[1],p=r.a.createElement(U,null,r.a.createElement(F,{handleSubmit:function(e,a,t){return e.preventDefault(),m.delay(1e3).then((function(){return new m((function(e,r){n.some((function(e){return e.username===a&&e.password===t}))?(console.log("Good login."),s(!0),e()):(console.log("Bad login."),s(!1),r(new Error("Incorrect username or password")))}))}))}})),g=r.a.createElement(U,null,r.a.createElement(w.a,null,"Existing Users"),r.a.createElement(v.a,{onClick:function(){var e={username:q.a.internet.email(),password:q.a.internet.password()};o(n.concat([e]))},variant:"contained",color:"primary",className:e.button},"Add User"),r.a.createElement(U,{elevation:1,id:"jsonText"},r.a.createElement("pre",null,JSON.stringify(n,null,2))));return r.a.createElement("div",{className:e.root,id:"pageRoot"},i?r.a.createElement(G,null):p,g)};var V=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{path:"/",component:Q}))};var X=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.Helmet,null,r.a.createElement("meta",{charSet:"utf-8"}),r.a.createElement("title",null,"Bugzy"),r.a.createElement("link",{rel:"icon",type:"image/jpg",href:"".concat("/bugzy","/logo.jpg")})),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(X,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},81:function(e,a,t){e.exports=t(1163)},86:function(e,a,t){}},[[81,1,2]]]);
//# sourceMappingURL=main.e8ea821b.chunk.js.map