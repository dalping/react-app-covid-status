(this["webpackJsonpreact-app-covid-status"]=this["webpackJsonpreact-app-covid-status"]||[]).push([[0],{186:function(e,t,n){},206:function(e,t,n){},207:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),r=n(68),o=n.n(r),i=(n(77),n(78),n(38)),s=n.n(i),d=n(69),l=n(8),u=n(23),f=(n(186),n(72)),b=n.n(f),j=n(1);var h=function(){var e=Object(c.useState)({}),t=Object(l.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({}),o=Object(l.a)(r,2),i=o[0],f=o[1],h=Object(c.useState)({}),p=Object(l.a)(h,2),v=p[0],O=p[1];return Object(c.useEffect)((function(){var e=function(){var e=Object(d.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://api.covid19api.com/total/dayone/country/kr");case 2:n=e.sent,t(n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(e){var t=e.reduce((function(e,t){var n=new Date(t.Date),c=n.getFullYear(),a=n.getMonth(),r=n.getDate(),o=t.Confirmed,i=t.Active,s=t.Deaths,d=t.Recovered,l=e.find((function(e){return e.year===c&&e.month===a}));return l||e.push({year:c,month:a,date:r,confirmed:o,active:i,death:s,recovered:d}),l&&l.date<r&&(l.active=i,l.death=s,l.date=r,l.year=c,l.month=a,l.recovered=d,l.confirmed=o),e}),[]);t=t.filter((function(e){return 2021===e.year})),console.log(t);var n=t.map((function(e){return"".concat(e.month+1,"\uc6d4")}));a({labels:n,datasets:[{label:"\uad6d\ub0b4 \ub204\uc801 \ud655\uc9c4\uc790",backgroundColor:"salmon",fill:!0,data:t.map((function(e){return e.confirmed}))}]}),f({labels:n,datasets:[{label:"\uc6d4\ubcc4 \uaca9\ub9ac\uc790 \ud604\ud669",borderColor:"green",fill:!1,data:t.map((function(e){return e.active}))}]});var c=t[t.length-1];O({labels:["\ud655\uc9c4\uc790","\uaca9\ub9ac\ud574\uc81c","\uc0ac\ub9dd"],datasets:[{label:"\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd \ube44\uc728",backgroundColor:["#ff3d67","#059bff","ffc233"],bordergroundColor:["#ff3d67","#059bff","ffc233"],fill:!1,data:[c.confirmed,c.recovered,c.death]}]})};e()}),[]),Object(j.jsxs)("section",{children:[Object(j.jsx)("h2",{children:"2021 \uad6d\ub0b4 \ucf54\ub85c\ub098 \ud604\ud669"}),Object(j.jsxs)("div",{className:"contents",children:[Object(j.jsx)("div",{children:Object(j.jsx)(u.a,{data:n,options:{legend:{display:!0,position:"bottom"}}})}),Object(j.jsx)("div",{children:Object(j.jsx)(u.c,{data:i,options:{legend:{display:!0,position:"bottom"}}})}),Object(j.jsx)("div",{children:Object(j.jsx)(u.b,{data:v,options:("\ub204\uc801 \ud655\uc9c4, \ud574\uc81c, \uc0ac\ub9dd (".concat((new Date).getMonth()+1,"\uc6d4)"),{legend:{display:!0,position:"bottom"}})})})]})]})};n(206);function p(){return Object(j.jsxs)("header",{className:"header",children:[Object(j.jsx)("h2",{children:"COVID-19"}),Object(j.jsxs)("select",{children:[Object(j.jsx)("option",{children:"\uad6d\ub0b4"}),Object(j.jsx)("option",{children:"\uc138\uacc4"})]})]})}var v=function(){return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(p,{}),Object(j.jsx)(h,{})]})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,208)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),O()},77:function(e,t,n){},78:function(e,t,n){}},[[207,1,2]]]);
//# sourceMappingURL=main.e85b9aa4.chunk.js.map