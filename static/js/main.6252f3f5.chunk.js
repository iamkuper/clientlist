(this.webpackJsonpminiapp=this.webpackJsonpminiapp||[]).push([[0],{171:function(e,t,n){},172:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(61),r=n.n(c),i=n(31),s=n.n(i),o=n(45),u=n.n(o),p=n(72),d=n(46),l=n(32),b=n(55),j=n(73),h=(n(163),n(65)),m=n.n(h),f=(n(165),n(36)),g=n(33),x=n(49),O=n(52),v=n(50),y=n(42),k=n(53),w=n(59),S=n(57),_=n(13);m.a.locale("ru");var A=function(e){var t=e.id,n=(e.go,e.list),a=e.refresh,c=e.isFetching;return Object(_.jsxs)(f.a,{id:t,children:[Object(_.jsx)(g.a,{children:"Clientlist"}),Object(_.jsx)(S.a,{mode:"image",header:"\u041c\u044b \u0412\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u0435",subheader:"\u041f\u043e\u0434\u043f\u0438\u0441\u044b\u0432\u0430\u0439\u0441\u044f \u043d\u0430 \u0433\u0440\u0443\u043f\u043f\u0443",background:Object(_.jsx)("div",{style:{backgroundColor:"#5b9be6",backgroundImage:"url(https://sun9-31.userapi.com/PQ4UCzqE_jue9hAINefBMorYCdfGXvcuV5nSjA/eYugcFYzdW8.jpg)",backgroundPosition:"right bottom",backgroundSize:"102%",backgroundRepeat:"no-repeat"}}),actions:Object(_.jsx)(y.a,{href:"https://vk.com/clientlist_ru",children:Object(_.jsx)(x.a,{style:{marginTop:"15px",marginBottom:"10px"},mode:"overlay_primary",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 \u0433\u0440\u0443\u043f\u043f\u0443"})})}),Object(_.jsx)(w.a,{onRefresh:a,isFetching:c,children:n&&n.map((function(e){return Object(_.jsx)(y.a,{href:"https://vk.com/id"+e.client.public_id,children:Object(_.jsx)(v.a,{style:{marginLeft:"10px",marginRight:"10px",marginBottom:"10px"},subtitle:m.a.unix(e.public_date).fromNow(),header:Object(_.jsxs)(O.a,{style:{marginLeft:"0px",paddingLeft:"0px"},description:e.client.name,before:Object(_.jsx)(k.a,{style:{marginLeft:"0px",paddingLeft:"0px"},src:e.client.avatar}),children:[e.text," ",e.client.name]}),caption:e.tags.map((function(e){return"#".concat(e)})).join(" ")})})}))})]})},C=(n(58),n.p,n(171),function(){var e=Object(a.useState)("home"),t=Object(d.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(null),i=Object(d.a)(r,2),o=i[0],h=i[1],m=Object(a.useState)(null),f=Object(d.a)(m,2),g=f[0],x=f[1],O=Object(a.useState)(Object(_.jsx)(b.a,{size:"large"})),v=Object(d.a)(O,2),y=v[0],k=v[1];Object(a.useEffect)((function(){function e(){return(e=Object(p.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://clientlist.ru/api/list");case 2:return t=e.sent,e.next=5,t.json();case 5:n=(n=e.sent).map((function(e){return e.client.avatar="https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/message-512.png",e})),h(n),k(null);case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}s.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;if("VKWebAppUpdateConfig"===n){var c=document.createAttribute("scheme");c.value=a.scheme?a.scheme:"client_light",document.body.attributes.setNamedItem(c)}})),h([]),function(){e.apply(this,arguments)}()}),[]);var w=function(){var e=Object(p.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!0),e.next=3,fetch("https://clientlist.ru/api/list");case 3:return n=e.sent,e.next=6,n.json();case 6:a=(a=e.sent).map((function(e){return e.client.avatar="https://cdn4.iconfinder.com/data/icons/gradient-ui-1/512/message-512.png",e})),h(a),x(!1);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(_.jsx)(j.a,{children:Object(_.jsx)(j.b,{children:Object(_.jsx)(l.a,{activePanel:n,popout:y,children:Object(_.jsx)(A,{id:"home",list:o,go:function(e){c(e.currentTarget.dataset.to)},refresh:w,isFetching:g})})})})});s.a.send("VKWebAppInit"),r.a.render(Object(_.jsx)(C,{}),document.getElementById("root"))}},[[172,1,2]]]);
//# sourceMappingURL=main.6252f3f5.chunk.js.map