(this["webpackJsonpreact-todo"]=this["webpackJsonpreact-todo"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),d=n(7),r=n.n(d),i=n(0),a=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("h2",{children:"Todo List"})})},s=n(8),j=n(6),l=n(3),u=function(e){var t=e.inputTodo,n=e.setInputTodo,c=e.enterTodo,o=e.addTodo;return Object(i.jsxs)("div",{className:"add-todo",children:[Object(i.jsx)("input",{type:"text",placeholder:"\u270d add your item",className:"input-todo",value:t,onChange:function(e){return n(e.target.value)},onKeyUp:c}),Object(i.jsx)("button",{className:"add-btn",onClick:o,children:"\u2795"})]})},b=function(e){var t=e.removeAll;return Object(i.jsx)("div",{children:Object(i.jsx)("button",{className:"remove-btn",onClick:t,children:"Remove All"})})},O=function(e){var t=e.todos,n=e.editTodo,c=e.deleteTodo;return Object(i.jsx)("div",{className:"show-todo",children:t.map((function(e){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"each-todo",children:[Object(i.jsx)("h3",{children:e.name}),Object(i.jsxs)("div",{className:"wrapper",children:[Object(i.jsx)("button",{onClick:function(){return n(e.id)},children:"\u270f\ufe0f"}),Object(i.jsx)("span",{children:Object(i.jsx)("button",{onClick:function(){return c(e.id)},children:"\u274c"})})]})]}),Object(i.jsx)("div",{className:"space"})]},e.id)}))})},h=(n(14),function(){var e=Object(c.useState)(""),t=Object(l.a)(e,2),n=t[0],o=t[1],d=Object(c.useState)([]),r=Object(l.a)(d,2),a=r[0],h=r[1],m=Object(c.useState)(),f=Object(l.a)(m,2),x=f[0],v=f[1],p=Object(c.useState)(!1),T=Object(l.a)(p,2),N=T[0],k=T[1],y=function(e){var t=a.find((function(t){return t.id===e}));o(t.name),v(e),k(!0)};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(u,{inputTodo:n,setInputTodo:o,enterTodo:function(e){13===e.keyCode&&(e.preventDefault(),document.querySelector(".add-btn").click())},addTodo:function(){if(n)if(n.length&&N)h(a.map((function(e){return e.id===x?Object(j.a)(Object(j.a)({},e),{},{name:n}):e}))),o([]),v(),k(!1);else{var e={id:Math.floor(1e3*Math.random())+1,name:n};h([].concat(Object(s.a)(a),[e])),o("")}else alert("Add your Todo")},editTodo:y}),Object(i.jsx)(O,{todos:a,editTodo:y,deleteTodo:function(e){var t=a.filter((function(t){return t.id!==e}));h(t)}}),Object(i.jsx)(b,{removeAll:function(){window.confirm("Delete all Todos?")&&h([])}})]})})});var m=function(){return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(a,{}),Object(i.jsx)(h,{})]})};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(m,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.120eade6.chunk.js.map