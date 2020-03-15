(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{24:function(e,a,t){e.exports=t(37)},34:function(e,a,t){},37:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(21),c=t.n(r),s=t(9),i=t(10),o=t(12),u=t(4),m=t.n(u),d=t(1),p=t(7),E=t(3),f=function(){var e=Object(n.useState)(!1),a=Object(E.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(null),c=Object(E.a)(r,2),s=c[0],i=c[1];return{loading:t,req:Object(n.useCallback)(function(){var e=Object(p.a)(m.a.mark((function e(a){var t,n,r,c,s,o=arguments;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"GET",n=o.length>2&&void 0!==o[2]?o[2]:null,r=o.length>3&&void 0!==o[3]?o[3]:{},l(!0),e.prev=4,n&&(n=JSON.stringify(n)),e.next=8,fetch("https://react-tracker-task.herokuapp.com".concat(a),{headers:r,method:t,body:n});case 8:return c=e.sent,e.next=11,c.json();case 11:return s=e.sent,c.ok||i(s.msg),l(!1),e.abrupt("return",s);case 17:e.prev=17,e.t0=e.catch(4),l(!1),i(e.t0.message);case 21:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(a){return e.apply(this,arguments)}}(),[]),errors:s,clearErrors:Object(n.useCallback)((function(){return i(null)}),[])}},v=Object(n.createContext)({token:null,admin:!1,userId:null,isAuth:!1}),b=function(){var e=f(),a=e.req,t=e.loading,r=e.errors,c=Object(n.useState)({username:"",password:""}),s=Object(E.a)(c,2),i=s[0],u=s[1],b=Object(n.useContext)(v),g=function(){var e=Object(p.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,a("/auth/login","POST",Object(d.a)({},i),{"Content-Type":"application/json"});case 3:n=e.sent,b.login(n.tkn,n.id,n.isAdmin);case 5:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),N=function(e){u(Object(d.a)({},i,Object(o.a)({},e.target.name,e.target.value)))};return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col s6 offset-s3"},l.a.createElement("h2",{className:"offset-s4 col"},"LogIn"),l.a.createElement("form",{onSubmit:g},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"username",type:"text",name:"username",className:"validate",onChange:N}),l.a.createElement("label",{htmlFor:"first_name",className:"active"},"Username")),l.a.createElement("div",{className:"input-field col s6"},l.a.createElement("input",{id:"password",type:"password",name:"password",onChange:N}),l.a.createElement("label",{htmlFor:"last_name",className:"active "},"Password")),l.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn col s4 offset-s4",disabled:t},"Sign In")))),l.a.createElement("p",{className:"col s12 red-text"},r))},g=t(13),N=t.n(g),h=Object(n.createContext)(),O=function(){var e=Object(n.useContext)(h),a=e.state,t=e.dispatch,r=Math.ceil(a.task.all/a.perPage)||1,c=1===a.currentPage,s=a.currentPage===r;return l.a.createElement("ul",{className:"pagination"},l.a.createElement("li",{className:N()("waves-effect",{disabled:c})},l.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),t({type:"PREV_PAGE"})},className:N()({disabled:c})},l.a.createElement("i",{className:"material-icons"},"chevron_left"))),new Array(r).fill(0).map((function(e,n){var r=n+1;return l.a.createElement("li",{key:r,className:N()({active:r===a.currentPage})},l.a.createElement("a",{href:"#!",onClick:function(){return t({type:"SET_PAGE",payload:r})}},r))})),l.a.createElement("li",{className:N()("waves-effect",{disabled:s})},l.a.createElement("a",{href:"/",onClick:function(e){e.preventDefault(),t({type:"NEXT_PAGE"})},className:N()({disabled:s})},l.a.createElement("i",{className:"material-icons"},"chevron_right"))))},j=function(){var e=Object(n.useState)({username:"",email:""}),a=Object(E.a)(e,2),t=a[0],r=a[1],c=f().req,s=function(e){r(Object(d.a)({},t,Object(o.a)({},e.target.name,e.target.value)))},i=function(){var e=Object(p.a)(m.a.mark((function e(a){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),e.next=3,c("/tasks/create","POST",Object(d.a)({},t),{"Content-Type":"application/json"});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("form",{onSubmit:i,className:"row valign-wrapper"},l.a.createElement("div",{className:"col s2"},l.a.createElement("input",{id:"username",placeholder:"Username",type:"text",className:"validate",name:"username",onChange:s})),l.a.createElement("div",{className:"col s3"},l.a.createElement("input",{id:"email",placeholder:"Email",type:"email",className:"validate",name:"email",onChange:s})),l.a.createElement("div",{className:"col s6"},l.a.createElement("textarea",{id:"text",placeholder:"Task Text",className:"materialize-textarea",name:"text",onChange:s})),l.a.createElement("div",{className:"col s1"},l.a.createElement("button",{type:"submit",className:"waves-effect waves-light btn"},"Add Task")))},k=function(){var e=Object(n.useRef)(null),a=Object(n.useRef)(null),t=Object(n.useContext)(h),r=t.state,c=t.dispatch;Object(n.useEffect)((function(){window.M.FormSelect.init(e.current),window.M.FormSelect.init(a.current)}),[]);return l.a.createElement("div",{className:"row valign-wrapper"},l.a.createElement("div",{className:"input-field col"},l.a.createElement("select",{ref:e,onChange:function(e){return c({type:"CHANGE_FILTER_NAME",payload:e.target.value})},value:""},l.a.createElement("option",{value:"",disabled:!0},"Sort By:"),l.a.createElement("option",{value:"email"},"Email"),l.a.createElement("option",{value:"username"},"Username"),l.a.createElement("option",{value:"completed"},"Status")),l.a.createElement("label",null)),l.a.createElement("button",{className:"btn-floating btn-large waves-effect waves-light teal lighten-2 ".concat("DESC"===r.filterDir?"rotate180":""),onClick:function(e){return c({type:"CHANGE_FILTER_DIRECTION",payload:"ASC"===r.filterDir?"DESC":"ASC"})}},l.a.createElement("i",{className:"material-icons dp48"},"arrow_upward")),l.a.createElement("div",{className:"input-field col"},l.a.createElement("select",{ref:a,onChange:function(e){c({type:"CHANGE_TASKS_PER_PAGE",payload:e.target.value})},value:r.perPage},l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"5"},"5")),l.a.createElement("label",null,"\u041f\u043e\u043a\u0430\u0437\u044b\u0432\u0430\u0442\u044c \u043f\u043e:")))},y=function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col offset-s5"},l.a.createElement("div",{className:"preloader-wrapper active"},l.a.createElement("div",{className:"spinner-layer spinner-red-only"},l.a.createElement("div",{className:"circle-clipper left"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"gap-patch"},l.a.createElement("div",{className:"circle"})),l.a.createElement("div",{className:"circle-clipper right"},l.a.createElement("div",{className:"circle"}))))))},w=function(e){var a=e.id,t=e.email,r=e.text,c=e.completed,s=e.username,i=e.edited,o=Object(n.useState)(!1),u=Object(E.a)(o,2),b=u[0],g=u[1],N=Object(n.useState)({text:r,completed:c}),h=Object(E.a)(N,2),O=h[0],j=h[1],k=Object(n.useContext)(v),y=k.admin,w=k.token,C=f().req,S=function(){var e=Object(p.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!1),e.next=3,C("/tasks/".concat(a),"PUT",Object(d.a)({},O),{"Content-Type":"application/json",Authorization:"Bearer ".concat(w)});case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return l.a.createElement("tr",{className:"row valign-wrapper"},l.a.createElement("td",{className:"col s3"},t),l.a.createElement("td",{className:"col s2"},s),l.a.createElement("td",{className:"col s4"},l.a.createElement("textarea",{id:"id",name:"text",disabled:!y,className:"materialize-textarea",value:O.text,onChange:function(e){j(Object(d.a)({},O,{text:e.target.value})),g(!0)}})),l.a.createElement("td",{className:"col s1 valign-wrapper"},l.a.createElement("label",{className:""},l.a.createElement("input",{type:"checkbox",name:"completed",className:"filled-in",defaultChecked:O.completed,disabled:!y,onChange:function(e){j(Object(d.a)({},O,{completed:!c})),g(!0)}}),l.a.createElement("span",null," "))),l.a.createElement("td",{className:"col s2"},l.a.createElement("button",{className:"btn waves-effect waves-light  ".concat(b?"":"none"),type:"submit",name:"action",onClick:S},"Save",l.a.createElement("i",{className:"material-icons dp48"},"autorenew")),i?"\u041e\u0442\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043e \u0410\u0434\u043c\u0438\u043d\u0438\u0441\u0442\u0440\u0430\u0442\u043e\u0440\u043e\u043c":""))},C=function(){var e=Object(n.useContext)(h).state;return e.loading?l.a.createElement(y,null):l.a.createElement("table",null,l.a.createElement("thead",null,l.a.createElement("tr",{className:"row"},l.a.createElement("th",{className:"col s3"},"Email"),l.a.createElement("th",{className:"col s2"},"Username"),l.a.createElement("th",{className:"col s4"},"Task Text"),l.a.createElement("th",{className:"col s2"},"Completed"),l.a.createElement("th",{className:"col s1"}))),e.task.list&&l.a.createElement("tbody",null,e.task.list.map((function(e){return l.a.createElement(w,Object.assign({key:e.id},e))}))))};function S(e,a){switch(a.type){case"CHANGE_FILTER_NAME":return Object(d.a)({},e,{filterName:a.payload});case"CHANGE_FILTER_DIRECTION":return Object(d.a)({},e,{filterDir:a.payload});case"NEXT_PAGE":return Object(d.a)({},e,{currentPage:e.currentPage+1});case"PREV_PAGE":return Object(d.a)({},e,{currentPage:e.currentPage-1});case"SET_PAGE":return Object(d.a)({},e,{currentPage:a.payload});case"FETCH_TASKS":var t=a.payload,n=t.list,l=t.all;return Object(d.a)({},e,{task:{list:n,all:l}});case"SET_LOADING":return Object(d.a)({},e,{loading:a.payload});case"QUERY_CHANGED":return Object(d.a)({},e,{},a.payload);case"CHANGE_TASKS_PER_PAGE":return Object(d.a)({},e,{perPage:parseInt(a.payload,10)});default:return e}}var x=function(){var e=function(){var e=Object(i.g)(),a=Object(i.h)(),t=f(),l=t.req,r=t.loading,c=Object(n.useReducer)(S,{task:{list:[],all:0},filterName:"",filterDir:"ASC",currentPage:1,loading:!1,perPage:3}),s=Object(E.a)(c,2),o=s[0],u=s[1],d=Object(n.useCallback)((function(){e.push("/tasks/?page=".concat(o.currentPage,"&filter=").concat(o.filterName,"&dir=").concat(o.filterDir,"&perPage=").concat(o.perPage))}),[o.filterDir,o.filterName,o.currentPage,o.perPage]);return Object(n.useEffect)((function(){d()}),[d]),Object(n.useEffect)((function(){u({type:"SET_LOADING",payload:r})}),[r]),Object(n.useEffect)((function(){(function(){var e=Object(p.a)(m.a.mark((function e(){var t;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l("/tasks/".concat(a.search));case 2:t=e.sent,u({type:"FETCH_TASKS",payload:{list:t.tasks||[],all:t.all}});case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[a.search]),{state:o,dispatch:u,filter:d}}(),a=e.dispatch,t=e.state,r=e.filter;return Object(n.useEffect)((function(){r()}),[]),l.a.createElement(h.Provider,{value:{state:t,dispatch:a}},l.a.createElement("div",{className:"container"},l.a.createElement(j,null),l.a.createElement(k,null),l.a.createElement(C,null),l.a.createElement(O,null)))},P=function(){var e=Object(n.useContext)(v);return l.a.createElement("nav",null,l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"nav-wrapper"},l.a.createElement(s.b,{to:"/",className:"brand-logo"},"Task Tracker"),l.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},l.a.createElement("li",null,l.a.createElement(s.c,{to:"/tasks/1"},"Tasks")),l.a.createElement("li",null,l.a.createElement(s.c,{to:"/about"},"About")),l.a.createElement("li",null,e.isAuth?l.a.createElement("a",{href:"/logout",onClick:function(a){a.preventDefault(),e.logout()}},"Log out"):l.a.createElement(s.c,{to:"/auth"},"Log In"))))))},A=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("h5",null,"Developed By Kondrev Georgy ","<george.kondrev@yandex.ru>"),l.a.createElement("p",null," Special for Deltaplan"),l.a.createElement("p",null," Provided By React - Node.js - Express - MySql "))};var T=function(){var e=function(){var e=Object(n.useState)(null),a=Object(E.a)(e,2),t=a[0],l=a[1],r=Object(n.useState)(null),c=Object(E.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(null),u=Object(E.a)(o,2),m=u[0],d=u[1],p=Object(n.useCallback)((function(e,a,t){l(e),i(a),d(t),localStorage.setItem("userdata",JSON.stringify({token:e,admin:t,userId:a}))}),[]),f=Object(n.useCallback)((function(){l(null),i(null),d(null),localStorage.removeItem("userdata")}),[]);return Object(n.useEffect)((function(){var e=JSON.parse(localStorage.getItem("userdata"));e&&e.token&&p(e.token,e.userId,e.admin)}),[p]),{login:p,logout:f,token:t,admin:m,userId:s}}(),a=e.token,t=e.userId,r=e.admin,c=e.login,o=e.logout,u=!!a;return l.a.createElement(v.Provider,{value:{token:a,admin:r,userId:t,isAuth:u,login:c,logout:o}},l.a.createElement(s.a,null,l.a.createElement(P,null),l.a.createElement(i.d,null,l.a.createElement(i.b,{path:"/tasks"},l.a.createElement(x,null)),l.a.createElement(i.b,{path:"/about"},l.a.createElement(A,null)),!u&&l.a.createElement(i.b,{exact:!0,path:"/auth"},l.a.createElement(b,null)),l.a.createElement(i.a,{to:"/tasks/"}))))};t(34),t(35),t(36);c.a.render(l.a.createElement(T,null),document.getElementById("root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.d43be4b3.chunk.js.map