(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{171:function(t,e,n){},172:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(61),r=n.n(c),i=n(31),s=n.n(i),o=n(47),u=n.n(o),p=n(72),l=n(41),d=n(32),j=n(55),b=n(73),h=(n(163),n(65)),f=n.n(h),g=(n(165),n(36)),m=n(33),x=n(50),O=n(53),v=n(51),y=n(44),k=n(43),S=n(59),w=n(57),A=n(12);f.a.locale("ru");var C=function(t){var e=t.id,n=(t.go,t.list),a=t.refresh,c=t.isFetching,r=t.user;return Object(A.jsxs)(g.a,{id:e,children:[Object(A.jsx)(m.a,{left:Object(A.jsx)(k.a,{size:36,src:r.avatar}),children:"Clientlist"}),Object(A.jsx)(w.a,{mode:"image",header:"\u041c\u044b \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",subheader:"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0441\u044f \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443",background:Object(A.jsx)("div",{style:{backgroundColor:"#5b9be6",backgroundImage:"url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)",backgroundPosition:"right bottom",backgroundSize:"102%",backgroundRepeat:"no-repeat"}}),actions:Object(A.jsx)(y.a,{href:"https://vk.com/clientlist_ru",children:Object(A.jsx)(x.a,{style:{marginTop:"15px",marginBottom:"10px"},mode:"overlay_primary",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"})})}),Object(A.jsx)(S.a,{onRefresh:a,isFetching:c,children:n&&n.map((function(t){return Object(A.jsx)(y.a,{href:"https://vk.com/id"+t.client.public_id,children:Object(A.jsx)(v.a,{style:{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"},subtitle:f.a.unix(t.public_date).fromNow(),header:Object(A.jsx)(O.a,{style:{marginLeft:"0px",paddingLeft:"0px"},description:t.tags.map((function(t){return"#".concat(t)})).join(" "),before:Object(A.jsx)(k.a,{style:{marginLeft:"0px",paddingLeft:"0px"},src:t.client.avatar}),children:t.client.name}),caption:t.text})})}))})]})},I=(n(58),n.p,n(171),function(){var t=Object(a.useState)("home"),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(null),i=Object(l.a)(r,2),o=i[0],h=i[1],f=Object(a.useState)(null),g=Object(l.a)(f,2),m=g[0],x=g[1],O=Object(a.useState)(null),v=Object(l.a)(O,2),y=v[0],k=v[1],S=Object(a.useState)(Object(A.jsx)(j.a,{size:"large"})),w=Object(l.a)(S,2),I=w[0],_=w[1];Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(u.a.mark((function t(){var e,n,a,c;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,s.a.send("VKWebAppGetUserInfo");case 2:return e=t.sent,t.next=5,fetch("https://clientlist.ru/login/auto/".concat(e.id),{headers:{Accept:"application/json","Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)});case 5:return n=t.sent,t.next=8,n.json();case 8:return n=t.sent,x(n),t.next=12,fetch("https://clientlist.ru/api/list");case 12:return a=t.sent,t.next=15,a.json();case 15:c=(c=t.sent).map((function(t){return t.tags.includes("\u041a\u0440\u044b\u043c")&&t.tags.length>1&&(t.tags=t.tags.filter((function(t){return"\u041a\u0440\u044b\u043c"!==t}))),t.client.avatar="https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/message-512.png",t})),h(c),_(null);case 19:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.a.subscribe((function(t){var e=t.detail,n=e.type,a=e.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),h([]),function(){t.apply(this,arguments)}()}),[]);var z=function(){var t=Object(p.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return k(!0),t.next=3,fetch("https://clientlist.ru/api/list");case 3:return n=t.sent,t.next=6,n.json();case 6:a=(a=t.sent).map((function(t){return t.tags.includes("\u041a\u0440\u044b\u043c")&&t.tags.length>1&&(t.tags=t.tags.filter((function(t){return"\u041a\u0440\u044b\u043c"!==t}))),t.client.avatar="https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/message-512.png",t})),h(a),k(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(A.jsx)(b.a,{children:Object(A.jsx)(b.b,{children:Object(A.jsx)(d.a,{activePanel:n,popout:I,children:Object(A.jsx)(C,{id:"home",list:o,go:function(t){c(t.currentTarget.dataset.to)},refresh:z,isFetching:y,user:m})})})})});s.a.send("VKWebAppInit"),r.a.render(Object(A.jsx)(I,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.f0bdc701.chunk.js.map