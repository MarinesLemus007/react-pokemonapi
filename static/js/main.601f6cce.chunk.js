(this["webpackJsonpapp-pokemonapi"]=this["webpackJsonpapp-pokemonapi"]||[]).push([[0],{118:function(e,t,a){},119:function(e,t,a){},121:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(17),r=a.n(c),i=a(156),s=a.p+"static/media/img-pokemonlogo.380d8431.png",o=a(142),l=a(141),j=a(2),d=Object(l.a)({bannercontainer:{background:"#313131",height:250,overflow:"hidden"}}),b=function(){var e=d();return Object(j.jsx)(o.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"center",wrap:"nowrap",className:e.bannercontainer,children:Object(j.jsx)(i.a,{color:"text.primary",clone:!0,children:Object(j.jsx)("img",{src:s,alt:"logo pokemon",style:{width:"40%"}})})})},p=a(45),h=a(143),m=a(144),x=a(145),u=a(157),O=a(8),g=a(71),f=a.n(g),v=Object(l.a)((function(e){return{root:{flexGrow:1,marginBottom:48},menuButton:{marginRight:e.spacing(2)},title:Object(p.a)({flexGrow:1,display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(p.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(O.c)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(O.c)(e.palette.common.white,.25)},marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(1),width:"auto"}),searchIcon:{padding:e.spacing(0,2),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(p.a)({padding:e.spacing(1,1,1,0),paddingLeft:"calc(1em + ".concat(e.spacing(4),"px)"),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("sm"),{width:"12ch","&:focus":{width:"20ch"}})}})),y=function(){var e=v();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(h.a,{position:"static",style:{backgroundColor:"#ffc107"},children:Object(j.jsxs)(m.a,{children:[Object(j.jsx)(x.a,{className:e.title,variant:"h6",noWrap:!0,children:"Find pokemon by number or name"}),Object(j.jsxs)("div",{className:e.search,children:[Object(j.jsx)("div",{className:e.searchIcon,children:Object(j.jsx)(f.a,{})}),Object(j.jsx)(u.a,{placeholder:"Search\u2026",classes:{root:e.inputRoot,input:e.inputInput},inputProps:{"aria-label":"search"}})]})]})})})},k=a(27),w=a.n(k),z=a(41),N=a(24),C=a(9),I=a(42),S=a.n(I),E=a(146),R=a(149),B=a(150),T=a(151),W=a(152),F=a(5),G=a(74),A=a(148),L=a(159),M=a(147),J=a(26),K=Object(F.a)((function(e){return{root:{height:10,borderRadius:5,width:"70%",marginTop:11.2},colorPrimary:{backgroundColor:e.palette.grey["light"===e.palette.type?200:700]},bar:{borderRadius:5,backgroundColor:"#1a90ff"}}}))(E.a),P=Object(l.a)((function(e){return{root:{backgroundColor:"#302d31",color:"#cecece"},media:{height:245,backgroundSize:240,backgroundColor:"#696969"},cardshadowless:{boxShadow:"none"},textcapitalize:{textTransform:"capitalize"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"},buttongroup:{marginTop:"100px !important",display:"flex",flexDirection:"row",justifyContent:"center"},textalign:{textAlign:"center"}}})),D=Object(G.a)({palette:{primary:M.a}}),H=function(){var e=P(),t=Object(C.f)().id,a=Object(n.useState)([]),c=Object(N.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(!1),l=Object(N.a)(s,2),d=l[0],b=l[1];return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(w.a.mark((function e(){var a;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.get("https://pokeapi.co/api/v2/pokemon/".concat(t));case 3:a=e.sent,console.log(a.data),i(a.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,b(!0),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}})()()}),[t]),Object(j.jsx)(j.Fragment,{children:!0===d?Object(j.jsxs)(o.a,{container:!0,spacing:1,direction:"row",justify:"center",alignItems:"center",alignContent:"center",children:[Object(j.jsx)(o.a,{container:!0,spacing:1,className:e.buttongroup,children:Object(j.jsxs)(A.a,{theme:D,children:[Object(j.jsx)(o.a,{item:!0,xs:6,md:4,children:Object(j.jsx)(R.a,{variant:"contained",color:"primary",size:"large",fullWidth:!0,children:"1SEE MORE"})}),Object(j.jsx)(o.a,{item:!0,xs:6,md:4,children:Object(j.jsx)(R.a,{variant:"contained",color:"primary",size:"large",fullWidth:!0,children:"2SEE MORE"})})]})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,children:Object(j.jsx)(B.a,{className:e.cardshadowless,children:Object(j.jsx)(T.a,{className:e.media,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(t,".png"),title:r.name})})}),Object(j.jsx)(o.a,{item:!0,xs:12,sm:6,md:4,children:Object(j.jsx)(B.a,{className:e.root,children:Object(j.jsxs)(W.a,{children:[Object(j.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.textcapitalize,children:r.name}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{variant:"body2",component:"p",children:"Height:"}),Object(j.jsx)(L.a,{label:r.height/10+"m",color:"default",size:"small"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{variant:"body2",component:"p",children:"Weight:"}),Object(j.jsx)(L.a,{label:r.weight/10+"Kg",color:"default",size:"small"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{variant:"body2",component:"p",children:"Types:"}),r.types.length>1?r.types.map((function(e,t){return Object(j.jsx)(L.a,{label:e.type.name,color:"secondary",size:"small"},t)})):Object(j.jsx)(L.a,{label:r.types[0].type.name,color:"secondary",size:"small"})]})]}),Object(j.jsxs)("div",{className:"d-flex",children:[Object(j.jsx)(x.a,{variant:"body2",component:"p",children:"Abilities:"}),r.abilities.length>1?r.abilities.map((function(e,t){return Object(j.jsx)(L.a,{label:e.ability.name,color:"primary",size:"small"},t)})):Object(j.jsx)(L.a,{label:r.abilities.name,color:"primary",size:"small"})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)(x.a,{variant:"body2",component:"p",children:"Stats:"}),r.stats.map((function(e,t){return Object(j.jsxs)("div",{className:"barprogress",children:[Object(j.jsxs)("p",{children:[e.stat.name,":"]}),Object(j.jsx)(K,{variant:"determinate",value:e.base_stat})]},t)}))]})]})})}),Object(j.jsx)(o.a,{item:!0,xs:12,className:e.textalign,children:Object(j.jsx)(J.b,{className:"anchor-goback",to:"/",children:"GO BACK"})})]}):null})},_=a(153),q=a(154),Q=a(158),U=a(155),V=a(72),X=a.n(V),Y=Object(l.a)((function(e){return{root:{maxWidth:300,minWidth:205,margin:"auto"},media:{height:205,backgroundSize:150,backgroundColor:"#f2f2f2"},textcapitalize:{textTransform:"capitalize"},backdrop:{zIndex:e.zIndex.drawer+1,color:"#fff"}}})),Z=Object(G.a)({palette:{primary:M.a}}),$=function(){var e=Y(),t=Object(n.useState)([]),a=Object(N.a)(t,2),c=a[0],r=a[1],s=Object(n.useState)(20),l=Object(N.a)(s,2),d=l[0],b=l[1],p=Object(n.useState)(!1),h=Object(N.a)(p,2),m=h[0],u=h[1];return Object(n.useEffect)((function(){(function(){var e=Object(z.a)(w.a.mark((function e(){var t;return w.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(!0),e.next=4,S.a.get("https://pokeapi.co/api/v2/pokemon?offset=0&limit=".concat(d));case 4:t=e.sent,r(t.data.results),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:return e.prev=11,u(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[0,8,11,14]])})));return function(){return e.apply(this,arguments)}})()()}),[d]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(o.a,{container:!0,spacing:1,children:c.map((function(t,a){return Object(j.jsx)(o.a,{item:!0,xs:12,sm:4,md:3,lg:3,xl:2,children:Object(j.jsx)(B.a,{className:e.root,children:Object(j.jsxs)(_.a,{children:[Object(j.jsx)(T.a,{className:e.media,image:"https://pokeres.bastionbot.org/images/pokemon/".concat(a+1,".png"),title:t.name}),Object(j.jsxs)(W.a,{children:[Object(j.jsxs)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:["N.\xba ",a+1]}),Object(j.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",className:e.textcapitalize,children:t.name})]}),Object(j.jsx)(q.a,{children:Object(j.jsx)(x.a,{children:Object(j.jsx)(J.b,{className:"anchor",to:"/detail/".concat(a+1),children:"GO TO"})})})]})})},a)}))}),Object(j.jsx)(o.a,{container:!0,direction:"row",justify:"center",alignItems:"center",alignContent:"center",wrap:"nowrap",children:Object(j.jsx)(i.a,{my:6,children:Object(j.jsx)(A.a,{theme:Z,children:Object(j.jsx)(R.a,{variant:"contained",color:"primary",size:"large",endIcon:Object(j.jsx)(X.a,{}),onClick:function(){b(d+20)},children:"SEE MORE"})})})}),Object(j.jsx)(Q.a,{className:e.backdrop,open:m,children:Object(j.jsx)(U.a,{color:"inherit"})})]})},ee=a(73);var te=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(J.a,{children:Object(j.jsxs)(C.c,{children:[Object(j.jsx)(C.a,{path:"/detail/:id",children:Object(j.jsx)(H,{})}),Object(j.jsxs)(C.a,{path:"/",exact:!0,children:[Object(j.jsx)(b,{}),Object(j.jsx)(y,{}),Object(j.jsx)($,{}),Object(j.jsx)(ee.TinyButton,{})]})]})})})};a(118),a(119);r.a.render(Object(j.jsx)(te,{}),document.getElementById("root"))}},[[121,1,2]]]);
//# sourceMappingURL=main.601f6cce.chunk.js.map