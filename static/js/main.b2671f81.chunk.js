(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{179:function(e,t,a){},180:function(e,t,a){},181:function(e,t,a){},182:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(32),i=a.n(c),o=a(5),l=a(16),s=a(4),d=a(6),u=function(){var e="object"===typeof window,t=function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}},a=Object(n.useState)(t),r=Object(d.a)(a,2),c=r[0],i=r[1];return Object(n.useEffect)((function(){if(!e)return!1;var a=function(){i(t())};return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),c},v=a(11),f=a.n(v),m=a(15),p="UPDATE_LOG_REQUEST",g="UPDATE_LOG_SUCCESS",E="UPDATE_LOG_FAILURE",h="GET_COVID_COUNT_REQUEST",b="GET_COVID_COUNT_SUCCESS",O="GET_COVID_COUNT_FAILURE",S="SORT_COVID_COUNT_SUCCESS",C="SORT_DISTRICT_COVID_COUNT_SUCCESS",y="GET_COVID_WORLD_STATS_REQUEST",T="GET_COVID_WORLD_STATS_SUCCESS",j="GET_COVID_WORLD_STATS_FAILURE",w="SORT_STATASTICS_SUCCESS",D="SEARCH_STATASTICS_SUCCESS",L="STATE_DATA_REQUEST",A="STATE_DATA_SUCCESS",N="STATE_DATA_FAILURE",_={updateLogActions:{getCovidUpdateLog:function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p}),e.prev=1,e.next=4,fetch("https://api.covid19india.org/updatelog/log.json");case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:g,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:E,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}},getStateCovidCountActions:{getStateCovidCount:function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h}),e.prev=1,e.next=4,fetch("https://api.covid19india.org/data.json");case 4:return a=e.sent,e.next=7,fetch("https://api.covid19india.org/state_district_wise.json");case 7:return n=e.sent,e.next=10,a.json();case 10:return r=e.sent,e.next=13,n.json();case 13:c=e.sent,t({type:b,payload:r,extraData:c}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),t({type:O,payload:e.t0});case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},sortCovidCount:function(e,t){return{type:S,payload:{data:e,sortOrder:t}}},sortDistrictCovidCount:function(e,t){return{type:C,payload:{data:e,sortOrder:t}}}},worldStatasticsAction:{getAllCountryStatastics:function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:y}),e.prev=1,e.next=4,fetch("https://covid-193.p.rapidapi.com/statistics",{headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"72f8bce3f5msh3ff2719a55f3a4ep18cdb0jsne780cae29258",useQueryString:!0}});case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,t({type:T,payload:n}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:j,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},sortStatastics:function(e,t){return console.log(e,t),{type:w,payload:{data:e,sortOrder:t}}},searchStatastics:function(e){return console.log(e),{type:D,payload:e}}},stateDataActions:{getDistrictCovidData:function(){return function(){var e=Object(m.a)(f.a.mark((function e(t){var a,n,r,c;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:L}),e.prev=1,e.next=4,fetch("https://api.covid19india.org/data.json");case 4:return a=e.sent,e.next=7,fetch("https://api.covid19india.org/state_district_wise.json");case 7:return n=e.sent,e.next=10,n.json();case 10:return r=e.sent,e.next=13,a.json();case 13:c=e.sent,t({type:A,payload:c,extraData:r}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),t({type:N,payload:e.t0});case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()}}},k=(a(79),a(80),function(e){var t=e.textToShow;return r.a.createElement("div",{className:"slide-left"},r.a.createElement("p",null,t))}),R=function(){var e=Object(n.useState)(),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(o.c)((function(e){return e.updateLogReducer.updateLogs})),l=Object(o.b)();return Object(n.useEffect)((function(){0===i.length&&l(_.updateLogActions.getCovidUpdateLog())}),[]),Object(n.useEffect)((function(){for(var e=!1,t=function(t){setTimeout((function(){var a=i[t].timestamp,n=a.getFullYear(),r=("0"+(a.getMonth()+1)).slice(-2),o=("0"+a.getDate()).slice(-2),l=("0"+a.getHours()).slice(-2),s=("0"+a.getMinutes()).slice(-2),d=("0"+a.getSeconds()).slice(-2);e||c(i[t].update.concat(" DateTime ",n,"-",r,"-",o," ",l,":",s,":",d))}),3e3*t)},a=0;a<i.length;a+=1)t(a);return function(){e=!0}}),[i.length]),r.a.createElement("div",{className:"update-log-container"},r.a.createElement(k,{textToShow:a}),0===i.length&&r.a.createElement("div",null,"Loading..."))},U=(a(81),function(){return r.a.createElement("div",{className:"quick-log-container"},r.a.createElement("div",{className:"quickLog"},"Quick Update"))}),x=function(){var e=u();return r.a.createElement("div",null,e.width>="900"&&r.a.createElement(R,null),e.width<="900"&&r.a.createElement(U,null))},W=a(10),I=function(e){var t=e.headings,a=e.action,c=Object(n.useState)([]),i=Object(d.a)(c,2),o=i[0],l=i[1];Object(n.useEffect)((function(){var e=[];t.forEach((function(t){e.push("asc")})),l(e)}),[t.length]);return r.a.createElement("thead",null,r.a.createElement("tr",null,t.map((function(e,t){return r.a.createElement("th",{key:"heading-".concat(t),onClick:function(){e.sorting&&function(e,t){console.log(e,o[t]),console.log(o);var n=[];o.forEach((function(e,a){a===t&&n.push("asc"===e?"desc":"asc"),n.push("asc")})),l(n),a(e.ref,o[t])}(e,t)}},e.label,e.sorting&&r.a.createElement("span",{className:"sort-order"},o[t]))}))))},F=(a(82),function(e){var t=e.data,a=e.headings,c=e.subHeadings,i=(e.onlinkClick,e.subAction),o=Object(n.useState)([]),s=Object(d.a)(o,2),u=s[0],v=s[1],f=function(e,t){var n=[r.a.createElement("tr",{onClick:function(){!function(e){if(e.rowClickEnable){var t=u,a=u.includes(e.statecode)?t.filter((function(t){return t!==e.statecode})):t.concat(e.statecode);v(a)}}(e)},key:e.key+t.toString()},a.map((function(t,a){var n="delta".concat(t.ref),c="1m".concat(t.ref);return r.a.createElement("td",{key:e.key+a.toString()},r.a.createElement("div",{className:t.route?"table-body-cell-container table-body-right-content":"table-body-right-content"},r.a.createElement("div",null,r.a.createElement("div",null,e[n]),r.a.createElement("div",null,e[t.ref]),e[c]&&r.a.createElement("div",null,"1M-POP, ",e[c])),t.route&&r.a.createElement("div",null,r.a.createElement("div",{onClick:function(e){e.stopPropagation()}},t.route&&r.a.createElement(l.b,{to:t.route?e.routeLink+"/".concat(e.statecode):""},"Open new")))))})))];return u.includes(e.statecode)&&n.push(r.a.createElement("tr",{key:"row-expanded-"+e.statecode},r.a.createElement("td",{colSpan:a.length,className:"table-expand-cell"},r.a.createElement(H,{headings:c,data:e.districtWiseData,action:i})))),n};return r.a.createElement("tbody",null,function(){var e=[];if(0!==t.length)return t.forEach((function(t,a){var n=f(t,a);e=e.concat(n)})),e}())}),H=function(e){return r.a.createElement("table",null,r.a.createElement(I,{headings:e.headings,action:e.action}),r.a.createElement(F,{headings:e.headings,data:e.data,subHeadings:e.subHeadings,subAction:e.subAction}))},P=[{ref:"state",label:"State",route:!0,sorting:!0},{ref:"confirmed",label:"Confirmed",sorting:!0},{ref:"active",label:"Active",sorting:!0},{ref:"recovered",label:"Recovered",sorting:!0},{ref:"deceased",label:"Deceased",sorting:!0}],V=[{ref:"district",label:"District",sorting:!0},{ref:"confirmed",label:"Confirmed",sorting:!0},{ref:"active",label:"Active",sorting:!0},{ref:"recovered",label:"Recovered",sorting:!0},{ref:"deceased",label:"Deceased",sorting:!0}],G=null,J=null;var M=function(){var e=Object(o.c)((function(e){return e.indiaCovidCountReducer.stateWiseCovidCount})),t=Object(o.b)();return Object(n.useEffect)((function(){console.log("get india covid count"),0===e.length&&t(_.getStateCovidCountActions.getStateCovidCount())}),[]),Object(n.useEffect)((function(){console.log("get india covid count")}),[]),null===G&&(G=Object(W.b)(_.getStateCovidCountActions.sortCovidCount,t)),console.log(G),null===J&&(J=Object(W.b)(_.getStateCovidCountActions.sortDistrictCovidCount,t)),console.log(J),r.a.createElement("div",null,r.a.createElement(H,{headings:P,data:e,subHeadings:V,action:G,subAction:J}))},B=(a(84),function(){var e=Object(o.c)((function(e){return e.indiaCovidCountReducer.stateWiseCovidCount})),t=null;return e.length>=1&&(t=e.filter((function(e){return"Total"===e.state&&"TT"===e.statecode}))),null===t?r.a.createElement("div",null,"Loading total india covid status..."):r.a.createElement("div",{className:"india-covid-status"},r.a.createElement("div",null,r.a.createElement("div",null,"Confirmed"),r.a.createElement("div",null,t[0].confirmed)),r.a.createElement("div",null,r.a.createElement("div",null,"Active"),r.a.createElement("div",null,t[0].active)),r.a.createElement("div",null,r.a.createElement("div",null,"Recovered"),r.a.createElement("div",null,t[0].recovered)),r.a.createElement("div",null,r.a.createElement("div",null,"Deseased"),r.a.createElement("div",null,t[0].deceased)))}),Q=a(2),Y=function(e){var t=e.description,a=e.tableHeadings,n=e.tableData;return r.a.createElement("div",null,r.a.createElement("div",null,t),r.a.createElement("div",null,r.a.createElement(H,{headings:a,data:n})))},q=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,n){if(!a.hasOwnProperty(e)||!n.hasOwnProperty(e))return 0;var r=isNaN(Number(a[e]))?a[e].toUpperCase():Number(a[e]),c=isNaN(Number(n[e]))?n[e].toUpperCase():Number(n[e]),i=0;return r>c?i=1:r<c&&(i=-1),"desc"===t?-1*i:i}},z=(a(85),[{desc:"Top 3 cities with highest ACTIVE covid case",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"active",label:"Active"}],tableData:[],criteria:"active"},{desc:"Top 3 cities with highest covid case FOUND TODAY",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"cases",label:"Cases"}],tableData:[],criteria:"highest"},{desc:"Top 3 cities with highest covid case RECOVERED",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"totalRecovered",label:"Total Recovered"}],tableData:[],criteria:"totalRecovered"},{desc:"Top 3 cities with highest covid case RECOVERED TODAY",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"recoveredToday",label:"Recovered Today"}],tableData:[],criteria:"recoveredToday"}]);function $(e,t){if("active"===t){var a=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){a.push({cityState:"".concat(t.district,", ").concat(e.state),active:t.active})}))})),a.sort(q("active","desc")),a.slice(0,3)}if("highest"===t){var n=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){n.push({cityState:"".concat(t.district,", ").concat(e.state),cases:t.deltaconfirmed})}))})),console.log(n),n.sort(q("cases","desc")),n.slice(0,3)}if("totalRecovered"===t){var r=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){r.push({cityState:"".concat(t.district,", ").concat(e.state),totalRecovered:t.recovered})}))})),console.log(r),r.sort(q("totalRecovered","desc")),r.slice(0,3)}if("recoveredToday"===t){var c=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){c.push({cityState:"".concat(t.district,", ").concat(e.state),recoveredToday:t.deltarecovered})}))})),console.log(c),c.sort(q("recoveredToday","desc")),c.slice(0,3)}}var K=function(){var e=Object(n.useState)(z),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(o.c)((function(e){return e.indiaCovidCountReducer.stateWiseCovidCount})),l=Object(o.c)((function(e){return e.indiaCovidCountReducer.isLoading}));return console.log(l),Object(n.useEffect)((function(){var e;e=a.map((function(e){return Object(Q.a)({},e,{tableData:$(i,e.criteria)})})),c(e)}),[i.length]),r.a.createElement("div",{className:"top-3-state-container"},l&&r.a.createElement("div",null,"Loading short news..."),!l&&r.a.createElement(r.a.Fragment,null,a.map((function(e,t){return r.a.createElement(Y,{key:t,description:e.desc,tableHeadings:e.tableHeading,tableData:e.tableData})}))))};a(86);var X=function(){return r.a.createElement("div",{className:"home-page-container"},r.a.createElement(x,null),r.a.createElement(B,null),r.a.createElement("div",{className:"icc-table-top-3-state"},r.a.createElement("div",{className:"icc-table"},r.a.createElement(M,null)),r.a.createElement("div",null,r.a.createElement(K,null))))};var Z=function(){return r.a.createElement("div",null,r.a.createElement(X,null))};var ee=r.a.memo((function(e){var t=e.headings,a=e.data,n=e.action;return r.a.createElement("div",null,r.a.createElement(H,{headings:t,data:a,action:n}))}),(function(e,t){return!1})),te=a(65),ae={labels:["Red","Green","Yellow"],datasets:[{data:[300,50,100],backgroundColor:["#FF6384","#36A2EB","#FFCE56"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56"]}]},ne=[{ref:"country",label:"Country",sorting:!0},{ref:"total",label:"Total",sorting:!0},{ref:"active",label:"Active",sorting:!0},{ref:"recovered",label:"Recovered",sorting:!0},{ref:"death",label:"Deseased",sorting:!0},{ref:"tests",label:"Total covid tests",sorting:!0},{ref:"population",label:"Population",sorting:!0},{ref:"lastUpdated",label:"Last Updated",sorting:!0}],re=null;var ce=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(o.c)((function(e){return e.worldStatsReducer.worldStats})),l=Object(o.c)((function(e){return e.worldStatsReducer.isLoading})),s=Object(o.b)();return null===re&&(re=Object(W.b)(_.worldStatasticsAction.sortStatastics,s)),Object(n.useEffect)((function(){0===i.length&&s(_.worldStatasticsAction.getAllCountryStatastics())}),[]),r.a.createElement("div",null,l?r.a.createElement("div",null,"Loading world data..."):r.a.createElement("div",null,r.a.createElement("div",null,"search any country: ",r.a.createElement("input",{value:a,onChange:function(e){c(e.target.value),s(_.worldStatasticsAction.searchStatastics(e.target.value))}})),r.a.createElement(ee,{headings:ne,data:i,action:re}),r.a.createElement(te.a,{data:ae})))};a(179);var ie=function(){return r.a.createElement("div",{className:"header-container"},r.a.createElement("div",null,r.a.createElement(l.b,{to:"/homepage"},"Home")),r.a.createElement("div",null,r.a.createElement(l.b,{to:"/world"},"World")),r.a.createElement("div",null,"Space"))},oe=(a(180),function(e){var t=e.stateData;console.log(t);var a=t.state,n=t.lastupdatedtime,c=t.confirmed,i=t.active,o=t.recovered,l=t.deceased,s=t.deltaconfirmed,d=t.deltadeceased,u=t.deltarecovered;return r.a.createElement("div",{className:"state-total-count"},r.a.createElement("div",{className:"container"},r.a.createElement("div",null,a,r.a.createElement("span",{className:"last-update"},"Last updated: ",n)),r.a.createElement("div",{className:"status-grid-container"},r.a.createElement("div",{className:"status-grid"},r.a.createElement("div",{className:"label-grid"},r.a.createElement("div",null,"Confirmed"),r.a.createElement("div",{className:"label-right"},s),r.a.createElement("div",{className:"label-right"},c)),r.a.createElement("div",{className:"label-grid"},r.a.createElement("div",null,"Active"),r.a.createElement("div",null),r.a.createElement("div",{className:"label-right"},i)),r.a.createElement("div",{className:"label-grid"},r.a.createElement("div",null,"Recovered"),r.a.createElement("div",{className:"label-right"},u),r.a.createElement("div",{className:"label-right"},o)),r.a.createElement("div",{className:"label-grid"},r.a.createElement("div",null,"Deceased"),r.a.createElement("div",{className:"label-right"},d),r.a.createElement("div",{className:"label-right"},l))))))}),le=function(){return r.a.createElement("div",null)},se=function(){return r.a.createElement("div",null)},de=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),a=t[0],c=t[1],i=Object(s.f)().stateVal,l=Object(o.c)((function(e){return e.stateTableReducer.stateTableData})),u=Object(o.c)((function(e){return e.stateTableReducer.isLoading})),v=Object(o.b)();return Object(n.useEffect)((function(){if(0===l.length&&v(_.stateDataActions.getDistrictCovidData()),l.length>0){var e=l.filter((function(e){return e.statecode===i}));e.length>0&&c(e[0])}}),[l.length]),r.a.createElement("div",null,u?r.a.createElement("div",null,"Loading State Data..."):r.a.createElement("div",null,r.a.createElement(oe,{stateData:a}),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(le,null)),r.a.createElement("div",null,r.a.createElement(se,null)))))},ue=a(67),ve=a(68),fe=a.n(ve),me={isLoading:!1,updateLogs:[],error:""},pe=function(e,t){return e.concat(t)},ge=function(e){return e.map((function(e){var t,a=e.update.split("\n"),n=(t=e.timestamp,new Date(1e3*t));return{update:a.length>1?a.reduce(pe,""):e.update,timestamp:n}}))},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(Q.a)({},e,{isLoading:!0,error:""});case g:return Object(Q.a)({},e,{isLoading:!1,updateLogs:ge(t.payload)});case E:return Object(Q.a)({},e,{isLoading:!1,updateLogs:[],error:t.payload});default:return e}},he=a(17),be=function(e,t){return Math.random()*(t-e)+e},Oe={isLoading:!1,stateWiseCovidCount:[],statewiseDistrictData:[],error:""},Se=function(e){var t=[];for(var a in e)t.push({district:a,confirmed:e[a].confirmed,active:e[a].active,recovered:e[a].recovered,deceased:e[a].deceased,deltaconfirmed:e[a].delta.confirmed,deltadeceased:e[a].delta.deceased,deltarecovered:e[a].delta.recovered,key:be(1,100)});return t},Ce=function(e,t){var a=[],n=null;return e.statewise.forEach((function(e){if("Total"!==e.state&&"TT"!==e.statecode){var r=t[e.state];a.push({confirmed:e.confirmed,active:e.active,recovered:e.recovered,deceased:e.deaths,deltaconfirmed:e.deltaconfirmed,deltadeceased:e.deltadeaths,deltarecovered:e.deltarecovered,state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,districtWiseData:Se(r.districtData),rowClickEnable:!0,key:be(1e3,1e4),routeLink:"/state"})}else n={confirmed:e.confirmed,active:e.active,recovered:e.recovered,deceased:e.deaths,deltaconfirmed:e.deltaconfirmed,deltadeceased:e.deltadeaths,deltarecovered:e.deltarecovered,state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,key:be(1e3,1e4)}})),a.push(n),a},ye=function(e,t){var a=t.data,n=t.sortOrder;return JSON.parse(JSON.stringify(e)).sort(q(a,n))},Te=function(e,t){var a=t.data,n=t.sortOrder;return console.log(a,n),JSON.parse(JSON.stringify(e)).map((function(e){return console.log(e),"Total"!==e.state&&"TT"!==e.statecode?Object(Q.a)({},e,{districtWiseData:e.districtWiseData.sort(q(a,n))}):Object(Q.a)({},e)}))},je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(Q.a)({},e,{isLoading:!0,error:""});case b:return Object(Q.a)({},e,{isLoading:!1,stateWiseCovidCount:Ce(t.payload,t.extraData),statewiseDistrictData:t.extraData});case O:return Object(Q.a)({},e,{isLoading:!1,stateWiseCovidCount:[],error:t.payload});case S:var a=ye(e.stateWiseCovidCount,t.payload);return Object(Q.a)({},e,{isLoading:!1,stateWiseCovidCount:Object(he.a)(a),error:""});case C:var n=Te(e.stateWiseCovidCount,t.payload);return Object(Q.a)({},e,{isLoading:!1,stateWiseCovidCount:Object(he.a)(n),error:""});default:return e}},we=function(e,t){return Math.random()*(t-e)+e},De={isLoading:!1,worldStats:[],worldStateForSearch:[],error:""},Le=function(e){console.log(e);return e.response.map((function(e){return{country:e.country,total:e.cases.total,active:e.cases.active,recovered:e.cases.recovered,death:e.deaths.total,tests:e.tests.total,population:e.population,lastUpdated:e.time,deltaactive:e.cases.new,deltadeath:e.deaths.new,"1mactive":e.cases["1M_pop"],"1mdeath":e.deaths["1M_pop"],"1mtests":e.tests["1M_pop"],key:we(2e3,3e3)}}))},Ae=function(e,t){var a=t.data,n=t.sortOrder;return JSON.parse(JSON.stringify(e)).sort(q(a,n))},Ne=function(e,t){console.log("asdasdadadsa");var a=JSON.parse(JSON.stringify(e)).filter((function(e){return e.country.toUpperCase().indexOf(t.toUpperCase())>=0}));return console.log(a),a},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return Object(Q.a)({},e,{isLoading:!0,error:""});case T:var a=Le(t.payload);return Object(Q.a)({},e,{isLoading:!1,worldStats:Object(he.a)(a),worldStateForSearch:Object(he.a)(a)});case j:return Object(Q.a)({},e,{isLoading:!1,worldStats:[],worldStateForSearch:[],error:t.payload});case w:var n=Ae(e.worldStats,t.payload);return Object(Q.a)({},e,{isLoading:!1,worldStats:Object(he.a)(n),error:""});case D:var r=Ne(e.worldStateForSearch,t.payload);return Object(Q.a)({},e,{isLoading:!1,worldStats:Object(he.a)(r),error:""});default:return e}},ke={isLoading:!1,stateTableData:[],error:""},Re=function(e,t){return Math.random()*(t-e)+e},Ue=function(e){var t=[];for(var a in e)t.push({district:a,confirmed:e[a].confirmed,active:e[a].active,recovered:e[a].recovered,deceased:e[a].deceased,deltaconfirmed:e[a].delta.confirmed,deltadeceased:e[a].delta.deceased,deltarecovered:e[a].delta.recovered,key:Re(1,100)});return t},xe=function(e,t){var a=[],n=null;return e.statewise.forEach((function(e){if("Total"!==e.state&&"TT"!==e.statecode){var r=t[e.state];a.push({confirmed:e.confirmed,active:e.active,recovered:e.recovered,deceased:e.deaths,deltaconfirmed:e.deltaconfirmed,deltadeceased:e.deltadeaths,deltarecovered:e.deltarecovered,state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,districtWiseData:Ue(r.districtData),rowClickEnable:!0,key:Re(1e3,1e4),routeLink:"/state"})}else n={confirmed:e.confirmed,active:e.active,recovered:e.recovered,deceased:e.deaths,deltaconfirmed:e.deltaconfirmed,deltadeceased:e.deltadeaths,deltarecovered:e.deltarecovered,state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,key:Re(1e3,1e4)}})),a.push(n),console.log(a),a},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case L:return Object(Q.a)({},e,{isLoading:!0,error:""});case A:return Object(Q.a)({},e,{isLoading:!1,stateTableData:xe(t.payload,t.extraData)});case N:return Object(Q.a)({},e,{isLoading:!1,stateTableData:[],error:t.payload});default:return e}},Ie=Object(W.c)({updateLogReducer:Ee,indiaCovidCountReducer:je,worldStatsReducer:_e,stateTableReducer:We}),Fe=Object(W.a)(ue.a,fe.a),He=Object(W.d)(Ie,Fe);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(181);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:He},r.a.createElement(l.a,{basename:"/covid-tracker-world"},r.a.createElement("div",null,r.a.createElement(ie,null),r.a.createElement("div",{className:"not-official-sign"},"THIS IS NOT THE OFFICIAL WEBSITE"),r.a.createElement(s.b,{exact:!0,path:"/"},r.a.createElement(s.a,{from:"/",to:"/homepage"})),r.a.createElement(s.b,{path:"/homepage",component:Z}),r.a.createElement(s.b,{path:"/world",component:ce}),r.a.createElement(s.b,{path:"/state/:stateVal",component:de}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},69:function(e,t,a){e.exports=a(182)},79:function(e,t,a){},80:function(e,t,a){},81:function(e,t,a){},82:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){}},[[69,1,2]]]);
//# sourceMappingURL=main.b2671f81.chunk.js.map