(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{171:function(t,e,n){},172:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n(61),r=n.n(c),i=n(31),s=n.n(i),o=n(45),u=n.n(o),p=n(72),l=n(46),b=n(32),d=n(55),j=n(73),h=(n(163),n(65)),m=n.n(h),f=(n(165),n(36)),g=n(33),v=n(49),x=n(52),O=n(50),k=n(42),y=n(53),_=n(59),w=n(57),S=n(13);m.a.locale("ru");var A=function(t){var e=t.id,n=(t.go,t.list),a=t.refresh,c=t.isFetching;return Object(S.jsxs)(f.a,{id:e,children:[Object(S.jsx)(g.a,{children:"Clientlist"}),Object(S.jsx)(k.a,{href:"https://vk.com/clientlist_ru",children:Object(S.jsx)(w.a,{mode:"image",header:"\u041c\u044b \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",subheader:"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0441\u044f \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443",background:Object(S.jsx)("div",{style:{backgroundColor:"#5b9be6",backgroundImage:"url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)",backgroundPosition:"right bottom",backgroundSize:"102%",backgroundRepeat:"no-repeat"}}),actions:Object(S.jsx)(v.a,{mode:"overlay_primary",children:"\u041f\u043e\u0434\u0440\u043e\u0431\u043d\u0435\u0435"})})}),Object(S.jsx)(_.a,{onRefresh:a,isFetching:c,children:n&&n.map((function(t){return Object(S.jsx)(k.a,{href:"https://vk.com/id"+t.client.public_id,children:Object(S.jsx)(O.a,{style:{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"},subtitle:m.a.unix(t.public_date).fromNow(),header:Object(S.jsx)(x.a,{description:t.tags.map((function(t){return"#".concat(t)})).join(" "),before:Object(S.jsx)(y.a,{src:t.client.avatar}),children:t.client.name}),caption:t.text})})}))})]})},C=(n(58),n.p,n(171),function(){var t=Object(a.useState)("home"),e=Object(l.a)(t,2),n=e[0],c=e[1],r=Object(a.useState)(null),i=Object(l.a)(r,2),o=i[0],h=i[1],m=Object(a.useState)(null),f=Object(l.a)(m,2),g=f[0],v=f[1],x=Object(a.useState)(Object(S.jsx)(d.a,{size:"large"})),O=Object(l.a)(x,2),k=O[0],y=O[1];Object(a.useEffect)((function(){function t(){return(t=Object(p.a)(u.a.mark((function t(){var e,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://clientlist.ru/api/list");case 2:return e=t.sent,t.next=5,e.json();case 5:n=(n=t.sent).map((function(t){return"https://vk.com/images/camera_50.png"===t.client.avatar&&(t.client.avatar="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"),t})),h(n),y(null);case 9:case"end":return t.stop()}}),t)})))).apply(this,arguments)}s.a.subscribe((function(t){var e=t.detail,n=e.type,a=e.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),h([]),function(){t.apply(this,arguments)}()}),[]);var _=function(){var t=Object(p.a)(u.a.mark((function t(e){var n,a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return v(!0),t.next=3,fetch("https://clientlist.ru/api/list");case 3:return n=t.sent,t.next=6,n.json();case 6:a=(a=t.sent).map((function(t){return"https://vk.com/images/camera_50.png"===t.client.avatar&&(t.client.avatar="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"),t})),h(a),v(!1);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(S.jsx)(j.a,{children:Object(S.jsx)(j.b,{children:Object(S.jsx)(b.a,{activePanel:n,popout:k,children:Object(S.jsx)(A,{id:"home",list:o,go:function(t){c(t.currentTarget.dataset.to)},refresh:_,isFetching:g})})})})});s.a.send("VKWebAppInit"),r.a.render(Object(S.jsx)(C,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.6bf17b53.chunk.js.map