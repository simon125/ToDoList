(this.webpackJsonpToDoList=this.webpackJsonpToDoList||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var i=n(1),c=n.n(i),s=n(7),r=n.n(s),u=(n(12),n(4)),o=n(6),a=n(0),l=function(t){var e=t.value,n=t.onChange,i=t.onSubmit,c=t.onClickEnter;return Object(a.jsxs)("div",{children:[Object(a.jsx)("input",{type:"text",onKeyPress:function(t){return c(t)},value:e,onChange:function(t){return n(t)}}),Object(a.jsx)("input",{type:"submit",value:"Dodaj",onClick:function(){return i()}})]})},j=function(t){var e=t.id,n=t.text,i=t.onClick;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("li",{children:n},e),Object(a.jsx)("button",{onClick:function(){return i(e)},children:"Usu\u0144"})]})},b=function(t){var e=t.items,n=t.handleClick,i=t.onClickEnter,c=e.map((function(t){return t.isVisible?Object(a.jsx)(j,{onClickEnter:i,onClick:n,id:t.id,text:t.text},t.id):null}));return Object(a.jsx)("ul",{children:c})},d=[{id:0,text:"Zadanie 1",isVisible:!0},{id:1,text:"Zadanie 2",isVisible:!0},{id:2,text:"Zadanie 3",isVisible:!0}],x=function(){var t=Object(i.useState)(""),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(i.useState)(d),r=Object(o.a)(s,2),j=r[0],x=r[1];return Object(a.jsxs)("div",{children:[Object(a.jsx)(l,{onClickEnter:function(t){if("Enter"===t.key){var e=j[j.length-1].id,i={id:++e,text:n,isVisible:!0},s=Object(u.a)(j);s.push(i),x(s),c("")}},value:n,onSubmit:function(){var t=j[j.length-1].id,e={id:++t,text:n,isVisible:!0},i=Object(u.a)(j);i.push(e),x(i),c("")},onChange:function(t){c(t.target.value)}}),Object(a.jsx)(b,{items:j,handleClick:function(t){var e=Object(u.a)(j);e[t].isVisible=!1,x(e)}})]})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(x,{})}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d7cd463a.chunk.js.map