(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{15:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},20:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=n(10),i=n(2),l=n(3),u=n(4),b=n(6),j=n(5),d=n(8),m=n(22),h=(n(15),n(0)),p={name:"",number:""},f=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state=Object(d.a)({},p),t.handleInput=function(e){var n=e.target.name;t.setState(Object(i.a)({},n,e.target.value))},t.handleSubmit=function(e){e.preventDefault();var n=t.state,a=n.name,c=n.number;if(a&&c){var r={id:Object(m.a)(),name:a,number:c};t.props.addContact(r),t.clearInput()}else alert("Complete the form please")},t.clearInput=function(){t.setState(Object(d.a)({},p))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.name,n=t.number,a=this.handleInput,c=this.handleSubmit;return Object(h.jsxs)("form",{onSubmit:c,className:"ContactForm",children:[Object(h.jsxs)("label",{children:[Object(h.jsx)("p",{className:"ContactForm__label",children:"Name"}),Object(h.jsx)("input",{className:"ContactForm__text-input",type:"text",value:e,onChange:a,name:"name"})]})," ",Object(h.jsxs)("label",{children:[Object(h.jsx)("p",{className:"ContactForm__label",children:"Number"}),Object(h.jsx)("input",{className:"ContactForm__text-input",type:"tel",value:n,onChange:a,name:"number"})]}),Object(h.jsx)("div",{className:"ContactForm__btnWrapper",children:Object(h.jsx)("button",{className:"ContactForm__btn",type:"submit",children:"Add contact"})})]})}}]),n}(a.Component),O=(n(17),function(t){var e=t.value,n=t.handleInput;return Object(h.jsxs)("label",{children:[Object(h.jsx)("p",{children:"Find contacts by name"}),Object(h.jsx)("input",{className:"Filter__input",type:"text",onChange:n,name:"filter",value:e})]})}),v=(n(18),function(t){var e=t.contact,n=t.deleteContact,a=e.id,c=e.name,r=e.number;return Object(h.jsxs)("li",{className:"ListItem",children:[Object(h.jsxs)("span",{children:[c,": ",r]}),Object(h.jsx)("button",{className:"ListItem__button",type:"button",onClick:function(){return n(a)},children:"Delete"})]})}),C=(n(19),function(t){var e=t.contacts,n=t.deleteContact;return Object(h.jsx)("ul",{className:"ContactsList",children:e.map((function(t){return Object(h.jsx)(v,{contact:t,deleteContact:n},t.id)}))})}),x=function(t){Object(b.a)(n,t);var e=Object(j.a)(n);function n(){var t;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleInput=function(e){var n=e.target.name;t.setState(Object(i.a)({},n,e.target.value))},t.addContact=function(e){var n=e.name;t.state.contacts.find((function(t){return t.name===n}))?alert("".concat(n," is already in contacts")):t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.deleteContact=function(e){var n=t.state.contacts;t.setState({contacts:n.filter((function(t){return t.id!==e}))})},t.filteredContacts=function(){var e=t.state,n=e.contacts,a=e.filter.toLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(a)}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=JSON.parse(localStorage.getItem("contacts"));t&&this.setState({contacts:t})}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contacts;n!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(n))}},{key:"render",value:function(){var t=this.handleInput,e=this.addContact,n=this.filteredContacts,a=this.deleteContact,c=n();return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Phonebook"}),Object(h.jsx)(f,{addContact:e}),Object(h.jsx)(O,{handleInput:t}),Object(h.jsx)("h2",{children:"Contacts"}),Object(h.jsx)(C,{contacts:c,deleteContact:a})]})}}]),n}(a.Component);o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(x,{})}),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.deb6ef73.chunk.js.map