(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(52),i=n.n(a),s=n(36),r=n.n(s),u=n(62),o=n.n(u),l=n(73),j=n(58),b=n(27),p=n(46),d=n(63),h=(n(161),n(32)),f=n(28),O=n(40),m=n(50),x=n(43),v=n(44),g=n(13),y=function(e){var t=e.id,n=(e.go,e.list);return Object(g.jsxs)(h.a,{id:t,children:[Object(g.jsx)(f.a,{children:"Clientlist"}),Object(g.jsx)(O.a,{children:n&&n.map((function(e){return Object(g.jsx)(x.a,{href:"https://vk.com/id"+e.client.public_id,children:Object(g.jsx)(m.a,{description:e.text,before:Object(g.jsx)(v.a,{src:e.client.avatar}),children:e.client.name})})}))})]})},k=(n(48),n.p,n(167),function(){var e=Object(c.useState)("home"),t=Object(j.a)(e,2),n=t[0],a=t[1],i=Object(c.useState)(null),s=Object(j.a)(i,2),u=s[0],h=s[1],f=Object(c.useState)(Object(g.jsx)(p.a,{size:"large"})),O=Object(j.a)(f,2),m=O[0],x=O[1];Object(c.useEffect)((function(){function e(){return(e=Object(l.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://clientlist.ru/api/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,console.log(n),h(n),x(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),h([]),function(){e.apply(this,arguments)}()}),[]);return Object(g.jsx)(d.a,{children:Object(g.jsx)(d.b,{children:Object(g.jsx)(b.a,{activePanel:n,popout:m,children:Object(g.jsx)(y,{id:"home",list:u,go:function(e){a(e.currentTarget.dataset.to)}})})})})});r.a.send("VKWebAppInit"),i.a.render(Object(g.jsx)(k,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.e72b071e.chunk.js.map