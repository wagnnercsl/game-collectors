(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[0],{36:function(e,a,t){e.exports=t(73)},41:function(e,a,t){},42:function(e,a,t){},5:function(e,a,t){e.exports=t.p+"static/media/logo.43193307.png"},66:function(e,a,t){},67:function(e,a,t){},68:function(e,a,t){},69:function(e,a,t){},70:function(e,a,t){},71:function(e,a,t){},72:function(e,a,t){},73:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(34),r=t.n(c),m=(t(41),t(3)),i=t(2),s=(t(42),t(5)),u=t.n(s),o=function(){return l.a.createElement("div",{id:"page-home"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("div",{className:"header-container"},l.a.createElement("img",{src:u.a,alt:"Games",width:50}),l.a.createElement("h2",null,"Games"))),l.a.createElement("main",null,l.a.createElement("h1",null,"Seu portal de games preferido."),l.a.createElement("p",null,"Conectamos colecionadores de todas as gera\xe7\xf5es."),l.a.createElement("div",{className:"buttons-container"},l.a.createElement(m.b,{to:"/create-user"},l.a.createElement("strong",null,"Cadastrar usu\xe1rio")),l.a.createElement(m.b,{to:"/create-console"},l.a.createElement("strong",null,"Cadastrar videogame")),l.a.createElement(m.b,{to:"/create-game"},l.a.createElement("strong",null,"Cadastrar jogos"))))))},E=t(11),d=t.n(E),p=t(15),f=t(16),b=t(13),g=t(12),h=t(1),v=t(19),j=t.n(v),O=j.a.create({baseURL:"http://localhost:3333"}),y=(t(66),t(6)),N=(t(67),function(){return l.a.createElement("header",null,l.a.createElement("img",{src:u.a,alt:"Games",width:50}),l.a.createElement(m.b,{to:"/"},l.a.createElement(y.a,null),"Voltar para a home"))}),S=function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=(a[0],a[1],Object(n.useState)([])),c=Object(h.a)(t,2),r=c[0],m=c[1],s=Object(n.useState)([]),u=Object(h.a)(s,2),o=u[0],E=u[1],f=Object(n.useState)({name:"",email:"",whatsapp:""}),v=Object(h.a)(f,2),y=v[0],S=v[1],w=Object(n.useState)("0"),x=Object(h.a)(w,2),C=x[0],F=x[1],k=Object(n.useState)("0"),G=Object(h.a)(k,2),D=G[0],V=G[1],I=Object(n.useState)([]),z=Object(h.a)(I,2),A=z[0],U=(z[1],Object(i.e)());function J(e){var a=e.target,t=a.name,n=a.value;S(Object(g.a)(Object(g.a)({},y),{},Object(b.a)({},t,n)))}function M(){return(M=Object(p.a)(d.a.mark((function e(a){var t,n,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=y.name,n=y.email,l=y.whatsapp,A,c={name:t,email:n,whatsapp:l,uf:C,city:D},e.next=8,O.post("users",c);case 8:alert("Cadastro realizado com sucesso!"),U.push("/");case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){j.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados").then((function(e){var a=e.data.map((function(e){return e.sigla}));m(a)}))})),Object(n.useEffect)((function(){"0"!==C&&j.a.get("https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(C,"/municipios")).then((function(e){var a=e.data.map((function(e){return e.nome}));E(a)}))}),[C]),l.a.createElement("div",{id:"page-create-point"},l.a.createElement(N,null),l.a.createElement("form",{onSubmit:function(e){return M.apply(this,arguments)}},l.a.createElement("h1",null,"Cadastro de ",l.a.createElement("br",null)," usu\xe1rios"),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome"),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:J}))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"email"},"E-mail"),l.a.createElement("input",{type:"email",name:"email",id:"email",onChange:J})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"whatsapp"},"Whatsapp"),l.a.createElement("input",{type:"text",name:"whatsapp",id:"whatsapp",onChange:J}))))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Endere\xe7o")),l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"uf"},"Estado (UF)"),l.a.createElement("select",{name:"uf",id:"uf",value:C,onChange:function(e){var a=e.target.value;F(a)}},l.a.createElement("option",{value:"0"},"Selecione uma UF"),r.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"city"},"Cidade"),l.a.createElement("select",{name:"city",id:"city",value:D,onChange:function(e){var a=e.target.value;V(a)}},l.a.createElement("option",{value:"0"},"Selecione uma cidade"),o.map((function(e){return l.a.createElement("option",{key:e,value:e},e)})))))),l.a.createElement("button",{type:"submit"},"Salvar")))},w=(t(68),function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){O.get("users").then((function(e){t(e.data)}))}),[]),l.a.createElement("div",{id:"page-users"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:u.a,alt:"Games",width:40})),l.a.createElement("main",null,l.a.createElement("div",{className:"users-container"},l.a.createElement("ul",{className:"user-list"},[{id:1,name:"Wagnner",email:"wagnner.leivas@gmail.com"},{id:2,name:"Pablo",email:"vidarte@gmail.com"}].map((function(e){return l.a.createElement("li",{key:e.id,className:""},l.a.createElement("div",null,l.a.createElement("span",null,e.email),l.a.createElement("span",null,l.a.createElement(y.b,null))))})))),l.a.createElement(m.b,{to:"/"},l.a.createElement("span",null,l.a.createElement(y.a,null)),l.a.createElement("strong",null,"Voltar")))))}),x=(t(69),function(){var e=Object(n.useState)({name:"",year:"",image:""}),a=Object(h.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)("0"),s=Object(h.a)(r,2),o=(s[0],s[1],Object(n.useState)("0")),E=Object(h.a)(o,2),f=(E[0],E[1],Object(n.useState)([])),v=Object(h.a)(f,2),j=(v[0],v[1],Object(i.e)());function N(e){var a=e.target,n=a.name,l=a.value;c(Object(g.a)(Object(g.a)({},t),{},Object(b.a)({},n,l)))}function S(){return(S=Object(p.a)(d.a.mark((function e(a){var n,l,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),n=t.name,l=t.year,c=t.image,r={name:n,year:l,image:c},e.next=5,O.post("consoles",r);case 5:alert("Cadastro realizado com sucesso!"),j.push("/");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return l.a.createElement("div",{id:"page-create-point"},l.a.createElement("header",null,l.a.createElement("img",{src:u.a,alt:"Games",width:50}),l.a.createElement(m.b,{to:"/"},l.a.createElement(y.a,null),"Voltar para a home")),l.a.createElement("form",{onSubmit:function(e){return S.apply(this,arguments)}},l.a.createElement("h1",null,"Cadastro de ",l.a.createElement("br",null)," consoles"),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"name"},"Nome"),l.a.createElement("input",{type:"text",name:"name",id:"name",onChange:N}))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"year"},"Ano de lan\xe7amento"),l.a.createElement("input",{type:"text",name:"year",id:"year",onChange:N})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"whatsapp"},"Imagem"),l.a.createElement("input",{type:"text",name:"whatsapp",id:"whatsapp",onChange:N}))))),l.a.createElement("button",{type:"submit"},"Salvar")))}),C=(t(70),function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){O.get("consoles").then((function(e){t(e.data)}))}),[]),l.a.createElement("div",{id:"page-consoles"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:u.a,alt:"Games",height:50})),l.a.createElement("main",null,l.a.createElement("div",{className:"consoles-container"},l.a.createElement("ul",{className:"consoles-list"},[{id:1,title:"Atari",year:"1972"}].map((function(e){return l.a.createElement("li",{key:e.id,className:""},l.a.createElement("div",null,l.a.createElement("p",null,e.title),l.a.createElement("p",null,e.year)))})))),l.a.createElement(m.b,{to:"/"},l.a.createElement("span",null,l.a.createElement(y.a,null)),l.a.createElement("strong",null,"Voltar")))))}),F=(t(71),function(){var e=Object(n.useState)(),a=Object(h.a)(e,2),t=(a[0],a[1],Object(n.useState)()),c=Object(h.a)(t,2),r=(c[0],c[1],Object(n.useState)([])),s=Object(h.a)(r,2),o=s[0],E=s[1],v=Object(n.useState)({title:"",year:"",image:""}),j=Object(h.a)(v,2),N=j[0],S=j[1],w=Object(n.useState)([]),x=Object(h.a)(w,2),C=x[0],F=x[1],k=Object(i.e)();function G(e){var a=e.target,t=a.name,n=a.value;S(Object(g.a)(Object(g.a)({},N),{},Object(b.a)({},t,n)))}function D(){return(D=Object(p.a)(d.a.mark((function e(a){var t,n,l,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),t=N.title,n=N.year,l=N.image,c={title:t,year:n,image:l},e.next=5,O.post("games",c);case 5:alert("Cadastro realizado com sucesso!"),k.push("/");case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(n.useEffect)((function(){O.get("consoles").then((function(e){E(e.data)}))}),[]),l.a.createElement("div",{id:"page-create-point"},l.a.createElement("header",null,l.a.createElement("img",{src:u.a,alt:"Games",width:50}),l.a.createElement(m.b,{to:"/"},l.a.createElement(y.a,null),"Voltar para a home")),l.a.createElement("form",{onSubmit:function(e){return D.apply(this,arguments)}},l.a.createElement("h1",null,"Cadastro de ",l.a.createElement("br",null)," games"),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Dados")),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"title"},"T\xedtulo"),l.a.createElement("input",{type:"text",name:"title",id:"title",onChange:G}))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("div",{className:"field-group"},l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"year"},"Ano de lan\xe7amento"),l.a.createElement("input",{type:"text",name:"year",id:"year",onChange:G})),l.a.createElement("div",{className:"field"},l.a.createElement("label",{htmlFor:"image"},"Imagem"),l.a.createElement("input",{type:"text",name:"image",id:"image",onChange:G}))))),l.a.createElement("fieldset",null,l.a.createElement("legend",null,l.a.createElement("h2",null,"Console do game"),l.a.createElement("span",null,"Selecione um item abaixo")),l.a.createElement("ul",{className:"items-grid"},o.map((function(e){return l.a.createElement("li",{className:C.includes(e.id)?"selected":"",key:e.id,onClick:function(){return function(e){if(C.findIndex((function(a){return a===e}))>=0){var a=C.filter((function(a){return a!==e}));F(a)}else F([].concat(Object(f.a)(C),[e]));console.log(C)}(e.id)}},l.a.createElement("img",{src:e.image,alt:e.image}),l.a.createElement("span",null,e.name))})))),l.a.createElement("button",{type:"submit"},"Salvar")))}),k=(t(72),function(){var e=Object(n.useState)([]),a=Object(h.a)(e,2),t=(a[0],a[1]);return Object(n.useEffect)((function(){O.get("games").then((function(e){t(e.data)}))}),[]),l.a.createElement("div",{id:"page-users"},l.a.createElement("div",{className:"content"},l.a.createElement("header",null,l.a.createElement("img",{src:u.a,alt:"Games",width:40})),l.a.createElement("main",null,l.a.createElement("div",{className:"users-container"},l.a.createElement("ul",{className:"user-list"},[{id:1,title:"Pac Man",year:"1980"}].map((function(e){return l.a.createElement("li",{key:e.id,className:""},l.a.createElement("div",null,l.a.createElement("span",null,e.title),l.a.createElement("span",null,l.a.createElement(y.b,null))))})))),l.a.createElement(m.b,{to:"/"},l.a.createElement("span",null,l.a.createElement(y.a,null)),l.a.createElement("strong",null,"Voltar")))))}),G=function(){return l.a.createElement(m.a,null,l.a.createElement(i.a,{component:o,exact:!0,path:"/"}),l.a.createElement(i.a,{component:S,exact:!0,path:"/create-user"}),l.a.createElement(i.a,{component:w,exact:!0,path:"/users"}),l.a.createElement(i.a,{component:x,exact:!0,path:"/create-console"}),l.a.createElement(i.a,{component:C,exact:!0,path:"/consoles"}),l.a.createElement(i.a,{component:F,exact:!0,path:"/create-game"}),l.a.createElement(i.a,{component:k,exact:!0,path:"/games"}))};var D=function(){return l.a.createElement(G,null)};r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(D,null)),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.3739eb03.chunk.js.map