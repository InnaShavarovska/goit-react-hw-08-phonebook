"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[539],{7539:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,i,a,o,s,c=t(9434),d=t(2791),l=t(9856),u=t(3634),p=function(n){return n.contacts.items},x=function(n){return n.contacts.isLoading},h=function(n){return n.contacts.error},m=function(n){return n.filters.filter},f=t(4768),g=t(168),b=t(5867),j=b.ZP.ul(r||(r=(0,g.Z)(["\n  max-width: calc(100% - 20px);\n  padding: 10px;\n"]))),Z=b.ZP.li(i||(i=(0,g.Z)(["\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  font-weight: 500;\n  margin-bottom: 4px;\n"]))),v=b.ZP.p(a||(a=(0,g.Z)(["\n  font-size: 20px;\n"]))),y=b.ZP.button(o||(o=(0,g.Z)(["\n  color: black;\n  margin-left: 15px;\n  border: none;\n  border-radius: 5px;\n  height: 35px;\n  border: none;\n  font-size: 10px;\n  display: flex;\n  align-items: center;\n\n  svg {\n    width: 25px;\n    height: 25px;\n  }\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 255, 255);\n    background-color: black;\n    cursor: pointer;\n  }\n"]))),w=t(184);function k(){var n=(0,c.v9)(p),e=(0,c.v9)(m).toLowerCase(),t=(0,c.I0)(),r=function(n){t((0,u.GK)(n.currentTarget.id))},i=e&&""!==e?n.filter((function(n){return n.name.toLowerCase().includes(e)})):n;return(0,w.jsx)(j,{children:i.map((function(n){return(0,w.jsxs)(Z,{children:[(0,w.jsxs)(v,{children:[n.name,": ",(0,w.jsx)("span",{children:n.number})]}),(0,w.jsx)(y,{type:"button",id:n.id,onClick:r,children:(0,w.jsx)(f.bjh,{})})]},n.id)}))})}var C=b.ZP.label(s||(s=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n  align-items: center;\n  padding: 10px;\n  font-size: 25px;\n\n  input {\n    padding: 8px;\n  }\n"]))),P=t(3165);function z(){var n=(0,c.I0)();return(0,w.jsxs)(C,{children:["Find contact by name",(0,w.jsx)("input",{type:"text",name:"filter",onChange:function(e){n((0,P.l)(e.target.value))}})]})}var A,L,I,_,F,N=t(8174),q=(b.ZP.section(A||(A=(0,g.Z)(["\n  max-width: 600px;\n"]))),b.ZP.form(L||(L=(0,g.Z)(["\n  margin-top: 20px;\n  margin-bottom: 20px;\n  input {\n    padding: 8px;\n  }\n"])))),K=b.ZP.ul(I||(I=(0,g.Z)(["\n  padding: 0;\n  list-style-type: none;\n"]))),B=b.ZP.li(_||(_=(0,g.Z)(["\n  margin-right: 10px;\n  display: flex;\n  align-items: center;\n  p {\n    margin-right: 10px;\n    margin-bottom: 8px;\n    font-size: 25px;\n  }\n"]))),D=b.ZP.button(F||(F=(0,g.Z)(["\n  border-radius: 5px;\n  height: 40px;\n  border: none;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n\n  &:hover,\n  &:focus {\n    color: rgb(255, 255, 255);\n    background-color: black;\n    cursor: pointer;\n  }\n"]))),E=function(){var n=(0,c.I0)(),e=(0,c.v9)(p);return(0,w.jsxs)(q,{onSubmit:function(t){t.preventDefault();var r=t.target,i=r.name.value,a=r.number.value;if(e.find((function(n){return n.name.toLowerCase()===i.toLowerCase()})))return N.Am.warn("".concat(i," is alredy in contacts."));n((0,u.uK)({name:i,number:a})),r.reset()},children:[(0,w.jsxs)(K,{children:[(0,w.jsxs)(B,{children:[(0,w.jsx)("p",{children:"Name"}),(0,w.jsx)("input",{type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,w.jsxs)(B,{children:[(0,w.jsx)("p",{children:"Contact"}),(0,w.jsx)("input",{type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]})]}),(0,w.jsx)(D,{type:"submit",children:"Add contact"})]})},G=function(){var n=(0,c.I0)(),e=(0,c.v9)(x),t=(0,c.v9)(h);return(0,d.useEffect)((function(){n((0,u.yF)())}),[n]),(0,w.jsxs)("div",{children:[(0,w.jsx)("h1",{children:"Your phonebook"}),(0,w.jsx)(E,{}),(0,w.jsx)("h2",{children:"Contacts"}),(0,w.jsx)(z,{}),e&&!t&&(0,w.jsx)(l.Nx,{width:"200",color:"#4fa94d"}),(0,w.jsx)(k,{})]})}}}]);
//# sourceMappingURL=539.f10f647f.chunk.js.map