(this["webpackJsonpjumbo-material"]=this["webpackJsonpjumbo-material"]||[]).push([[9],{733:function(e,t,n){"use strict";n.d(t,"a",(function(){return y}));var a=n(9),l=n(0),i=n.n(l),r=n(693),c=n(20),o=n(272),m=n(778),u=n(780),s=n(776),h=n(777),d=n(779),g=n(775),p=n(642),b=Object(r.a)((function(e){return{root:{width:"100%",backgroundColor:Object(c.f)(e.palette.background.paper,.1)},container:{maxHeight:440,border:"10px"},linkUnderLine:{cursor:"pointer","&:hover":{textDecoration:"underline"}},tbContainer:{overflow:"auto",maxHeight:"calc(100vh - 191px)",fontSize:"14px"}}})),f=Object(p.a)((function(e){return{root:{"&:nth-of-type(even)":{backgroundColor:"#fafafa"},"&:nth-of-type(odd)":{backgroundColor:"#fff"}}}}))(g.a);function y(e){var t=e.rows,n=e.columns,l=e.viewDetail,r=e.handleViewDetail,c=e.titleTable,p=e.handleDuyetPhep,y=e.handleDongY,E=e.handleKhongDuyet,k=b(),v=i.a.useState(0),x=Object(a.a)(v,2),N=x[0],j=(x[1],i.a.useState(10)),T=Object(a.a)(j,2),C=T[0],S=(T[1],i.a.useState("asc")),D=Object(a.a)(S,2),O=(D[0],D[1],i.a.useState("calories")),w=Object(a.a)(O,2);w[0],w[1];return i.a.createElement(o.a,{className:k.root},i.a.createElement(h.a,{className:k.tbcontainer},i.a.createElement(m.a,{stickyHeader:!0,"aria-label":"sticky table"},i.a.createElement(d.a,{style:{height:"20px"}},i.a.createElement(g.a,null,n.map((function(e){return i.a.createElement(s.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})),l&&i.a.createElement(s.a,null),"Danh s\xe1ch c\u1ea7n duy\u1ec7t"===c&&i.a.createElement(s.a,null))),i.a.createElement(u.a,null,t.slice(N*C,N*C+C).map((function(e,t){return i.a.createElement(f,{hover:!0,tabIndex:-1,key:t},function(e){return n&&n.map((function(t,n){switch(t.id){case"trangThai":return i.a.createElement(s.a,{key:n,align:"center"},e.trangThai?i.a.createElement("p",{style:{color:"rgb(52, 199, 89)"}},e.trangThai?"\u0110\u1ed3ng \xfd":"T\u1eeb ch\u1ed1i"):i.a.createElement("p",{style:{color:"rgb(255, 193, 14)"}},e.trangThai?"\u0110\u1ed3ng \xfd":"T\u1eeb ch\u1ed1i"));default:return i.a.createElement(s.a,{key:n,align:t.align},e[t.id])}}))}(e),l&&i.a.createElement(s.a,{key:t,className:k.linkUnderLine},i.a.createElement("p",{onClick:function(){r(e)},style:{color:"rgb(0, 122, 255)"},className:k.linkUnderLine},"Xem th\xeam")),"Danh s\xe1ch c\u1ea7n duy\u1ec7t"===c&&i.a.createElement(s.a,{key:t,style:{display:"flex"}},i.a.createElement("p",{onClick:function(){p(e)},style:{color:"rgb(0, 122, 255)",padding:"5px"},className:k.linkUnderLine},"Xem"),i.a.createElement("p",{onClick:function(){y(e)},style:{color:"rgb(0, 255, 15)",padding:"5px"},className:k.linkUnderLine},"Duy\u1ec7t"),i.a.createElement("p",{onClick:function(){E(e)},style:{color:"rgb(255, 23, 0)",padding:"5px"},className:k.linkUnderLine},"Kh\xf4ng duy\u1ec7t")))}))))))}},758:function(e,t,n){"use strict";var a=n(0),l=n(63);t.a=Object(l.a)(a.createElement("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"}),"Search")},788:function(e,t,n){"use strict";n.r(t);var a,l=n(181),i=n(272),r=n(774),c=n(730),o=n(733),m=n(0),u=n(738),s=n(693),h=Object(s.a)((function(e){return{}})),d=n(758),g=Object(u.a)(i.a)(a||(a=Object(l.a)(["\n  -webkit-backdrop-filter: blur(10px);\n  backdrop-filter: blur(10px);\n  background-color: rgba(255, 255, 255, 0.5);\n"])));function p(e,t,n,a,l,i){return{stt:e,hoTen:t,namSinh:n,quanHe:a,tuNgay:l,denNgay:i}}var b=[p("01","Nguy\xean Th\u1ecb B\xe9","1960","M\u1eb9 ru\u1ed9t","01/01/2021",""),p("02","D\u01b0\u01a1ng Minh Khang","2020","Con ru\u1ed9t","01/01/2021","")],f=[{id:"stt",label:"STT",minWidth:10,align:"left"},{id:"hoTen",label:"H\u1ecd v\xe0 t\xean",minWidth:100,align:"left"},{id:"namSinh",label:"N\u0103m sinh",minWidth:100,align:"left"},{id:"quanHe",label:"Quan h\u1ec7",minWidth:100,align:"left"},{id:"tuNgay",label:"T\u1eeb ng\xe0y",minWidth:100,align:"left"},{id:"denNgay",label:"\u0110\xean ng\xe0y",minWidth:100,align:"left"}];t.default=function(){h();return m.createElement(m.Fragment,null,m.createElement(g,{style:{margin:"20px"}},m.createElement(r.a,{item:!0,xs:12,style:{position:"relative"}},m.createElement("h3",{className:"title"},"Danh s\xe1ch nh\xe2n vi\xean ph\xf2ng ph\xe1t tri\u1ec3n \u1ee9ng d\u1ee5ng"),m.createElement("div",{style:{position:"absolute",right:20,top:12}},m.createElement(c.a,{placeholder:"Nh\u1eadp th\xf4ng tin c\u1ea7n t\xecm\u2026",className:"btnSearch",onChange:function(e){},inputProps:{"aria-label":"search"}}),m.createElement("div",{className:"searchIcon"},m.createElement(d.a,null)))),m.createElement(r.a,{item:!0,xs:12,style:{padding:20}},m.createElement(o.a,{rows:b,columns:f})),m.createElement(r.a,{item:!0,xs:12},m.createElement("p",{className:"pr-title"},"M\u1ecdi th\xf4ng tin th\u1eafc m\u1eafc v\u1ec1 l\u01b0\u01a1ng & ph\xe9p vui l\xf2ng g\u1eedi v\u1ec1 email:",m.createElement("a",{href:"mailto:totienluong@vietbank.com.vn"}," ","totienluong@vietbank.com.vn")))))}}}]);
//# sourceMappingURL=9.53dd0ef0.chunk.js.map