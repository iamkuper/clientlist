(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{167:function(e,t,n){},168:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(54),s=n.n(a),i=n(37),r=n.n(i),u=n(64),o=n.n(u),j=n(71),b=n(60),l=n(29),p=n(48),d=n(65),h=(n(161),n(33)),f=n(30),O=n(43),m=n(41),x=n(46),v=n(12),g=function(e){var t=e.id,n=(e.go,e.list);return Object(v.jsxs)(h.a,{id:t,children:[Object(v.jsx)(f.a,{children:"Clientlist"}),Object(v.jsxs)(m.a,{children:[Object(v.jsx)(O.a,{mode:"secondary",children:"\u0414\u0435\u0444\u043e\u043b\u0442\u043d\u044b\u0439 \u0440\u0430\u0437\u043c\u0435\u0440"}),n&&n.forEach((function(e){return Object(v.jsx)(SimpleCell,{description:e._id,before:Object(v.jsx)(x.a,{src:e.avatar}),children:"\u0410\u0440\u0442\u0443\u0440 \u0421\u0442\u0430\u043c\u0431\u0443\u043b\u044c\u0446\u044f\u043d"})}))]})]})},y=(n(50),n.p,n(167),function(){var e=Object(c.useState)("home"),t=Object(b.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(null),i=Object(b.a)(s,2),u=i[0],h=i[1],f=Object(c.useState)(Object(v.jsx)(p.a,{size:"large"})),O=Object(b.a)(f,2),m=O[0],x=O[1];Object(c.useEffect)((function(){function e(){return(e=Object(j.a)(o.a.mark((function e(){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://clientlist.ru/api/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,h(n),x(null);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}r.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;if("VKWebAppUpdateConfig"===n){var a=document.createAttribute("scheme");a.value=c.scheme?c.scheme:"client_light",document.body.attributes.setNamedItem(a)}})),function(){e.apply(this,arguments)}()}),[]);return Object(v.jsx)(d.a,{children:Object(v.jsx)(d.b,{children:Object(v.jsx)(l.a,{activePanel:n,popout:m,children:Object(v.jsx)(g,{id:"home",list:u,go:function(e){a(e.currentTarget.dataset.to)}})})})})});r.a.send("VKWebAppInit"),s.a.render(Object(v.jsx)(y,{}),document.getElementById("root"))}},[[168,1,2]]]);
//# sourceMappingURL=main.23140535.chunk.js.map