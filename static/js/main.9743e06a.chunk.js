(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{167:function(t,e,n){},168:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(54),i=n.n(a),s=n(35),r=n.n(s),o=n(65),u=n.n(o),l=n(75),p=n(60),b=n(29),j=n(48),d=n(66),h=(n(161),n(32)),f=n(30),O=n(52),m=n(42),x=n(41),v=n(46),g=n(13),y=function(t){var e=t.id,n=(t.go,t.list);return Object(g.jsxs)(h.a,{id:e,children:[Object(g.jsx)(f.a,{children:"Clientlist"}),n&&n.map((function(t){return Object(g.jsx)(x.a,{href:"https://vk.com/id"+t.client.public_id,children:Object(g.jsx)(m.a,{style:{paddingBottom:"5px"},subtitle:"\u041d\u043e\u0432\u044b\u0439 \u043a\u043b\u0438\u0435\u043d\u0442",header:Object(g.jsx)(O.a,{description:t.text,before:Object(g.jsx)(v.a,{src:t.client.avatar}),children:t.client.name}),caption:t.text})})}))]})},k=(n(50),n.p,n(167),function(){var t=Object(c.useState)("home"),e=Object(p.a)(t,2),n=e[0],a=e[1],i=Object(c.useState)(null),s=Object(p.a)(i,2),o=s[0],h=s[1],f=Object(c.useState)(Object(g.jsx)(j.a,{size:"large"})),O=Object(p.a)(f,2),m=O[0],x=O[1];Object(c.useEffect)((function(){function t(){return(t=Object(l.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://clientlist.ru/api/list");case 2:return e=t.sent,t.next=5,e.json();case 5:n=t.sent,console.log(n),h(n),x(null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}r.a.subscribe((function(t){var e=t.detail,n=e.type,c=e.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),h([]),function(){t.apply(this,arguments)}()}),[]);return Object(g.jsx)(d.a,{children:Object(g.jsx)(d.b,{children:Object(g.jsx)(b.a,{activePanel:n,popout:m,children:Object(g.jsx)(y,{id:"home",list:o,go:function(t){a(t.currentTarget.dataset.to)}})})})})});r.a.send("VKWebAppInit"),i.a.render(Object(g.jsx)(k,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.9743e06a.chunk.js.map