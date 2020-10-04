(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{187:function(e,t,a){e.exports=a(389)},197:function(e,t,a){},198:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){},202:function(e,t,a){},203:function(e,t,a){},204:function(e,t,a){},205:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},387:function(e,t,a){},388:function(e,t,a){},389:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),c=a(38),i=a.n(c),s=a(9),o=a(28),d=a(10),l=a(12),u=function(){var e="object"===typeof window,t=function(){return{width:e?window.innerWidth:void 0,height:e?window.innerHeight:void 0}},a=Object(r.useState)(t),n=Object(l.a)(a,2),c=n[0],i=n[1];return Object(r.useEffect)((function(){if(!e)return!1;var a=function(){i(t())};return window.addEventListener("resize",a),function(){return window.removeEventListener("resize",a)}}),[]),c},v=a(14),m=a.n(v),f=a(23),p="UPDATE_LOG_REQUEST",h="UPDATE_LOG_SUCCESS",E="UPDATE_LOG_FAILURE",g="GET_COVID_COUNT_REQUEST",b="GET_COVID_COUNT_SUCCESS",y="GET_COVID_COUNT_FAILURE",S="SORT_COVID_COUNT_SUCCESS",O="SORT_DISTRICT_COVID_COUNT_SUCCESS",C="GET_COVID_WORLD_STATS_REQUEST",T="GET_COVID_WORLD_STATS_SUCCESS",D="GET_COVID_WORLD_STATS_FAILURE",w="SORT_STATASTICS_SUCCESS",j="SEARCH_STATASTICS_SUCCESS",N="STATE_DATA_REQUEST",L="STATE_DATA_SUCCESS",A="STATE_DATA_FAILURE",_="TIME_SERIES_DATA_REQUEST",R="TIME_SERIES_DATA_SUCCESS",k="TIME_SERIES_DATA_FAILURE",x={updateLogActions:{getCovidUpdateLog:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:p}),e.prev=1,e.next=4,fetch("https://api.covid19india.org/updatelog/log.json");case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t({type:h,payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:E,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()}},getStateCovidCountActions:{getStateCovidCount:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:g}),e.prev=1,e.next=4,fetch("https://api.covid19india.org/data.json");case 4:return a=e.sent,e.next=7,fetch("https://api.covid19india.org/state_district_wise.json");case 7:return r=e.sent,e.next=10,a.json();case 10:return n=e.sent,e.next=13,r.json();case 13:c=e.sent,t({type:b,payload:n,extraData:c}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),t({type:y,payload:e.t0});case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},sortCovidCount:function(e,t){return{type:S,payload:{data:e,sortOrder:t}}},sortDistrictCovidCount:function(e,t){return{type:O,payload:{data:e,sortOrder:t}}}},worldStatasticsAction:{getAllCountryStatastics:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:C}),e.prev=1,e.next=4,fetch("https://covid-193.p.rapidapi.com/statistics",{headers:{"x-rapidapi-host":"covid-193.p.rapidapi.com","x-rapidapi-key":"72f8bce3f5msh3ff2719a55f3a4ep18cdb0jsne780cae29258",useQueryString:!0}});case 4:return a=e.sent,e.next=7,a.json();case 7:r=e.sent,t({type:T,payload:r}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),t({type:D,payload:e.t0});case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}()},sortStatastics:function(e,t){return{type:w,payload:{data:e,sortOrder:t}}},searchStatastics:function(e){return{type:j,payload:e}}},stateDataActions:{getDistrictCovidData:function(){return function(){var e=Object(f.a)(m.a.mark((function e(t){var a,r,n,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:N}),e.prev=1,e.next=4,fetch("https://api.covid19india.org/data.json");case 4:return a=e.sent,e.next=7,fetch("https://api.covid19india.org/state_district_wise.json");case 7:return r=e.sent,e.next=10,r.json();case 10:return n=e.sent,e.next=13,a.json();case 13:c=e.sent,t({type:L,payload:c,extraData:n}),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(1),t({type:A,payload:e.t0});case 20:case"end":return e.stop()}}),e,null,[[1,17]])})));return function(t){return e.apply(this,arguments)}}()},getDistrictTimeseries:function(e){return function(){var t=Object(f.a)(m.a.mark((function t(a){var r,n;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a({type:_}),t.prev=1,t.next=4,fetch("https://api.covid19india.org/v4/min/timeseries-".concat(e,".min.json"));case 4:return r=t.sent,t.next=7,r.json();case 7:n=t.sent,a({type:R,payload:n,statecode:e}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(1),a({type:k,payload:t.t0});case 14:case"end":return t.stop()}}),t,null,[[1,11]])})));return function(e){return t.apply(this,arguments)}}()}}},U=(a(197),a(198),function(e){var t=e.textToShow;return n.a.createElement("div",{className:"slide-left"},n.a.createElement("p",null,t))}),W=function(){var e=Object(r.useState)(),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(s.c)((function(e){return e.updateLogReducer.updateLogs})),o=Object(s.b)();return Object(r.useEffect)((function(){0===i.length&&o(x.updateLogActions.getCovidUpdateLog())}),[]),Object(r.useEffect)((function(){for(var e=!1,t=function(t){setTimeout((function(){var a=i[t].timestamp,r=a.getFullYear(),n=("0"+(a.getMonth()+1)).slice(-2),s=("0"+a.getDate()).slice(-2),o=("0"+a.getHours()).slice(-2),d=("0"+a.getMinutes()).slice(-2),l=("0"+a.getSeconds()).slice(-2);e||c(i[t].update.concat(" DateTime ",r,"-",n,"-",s," ",o,":",d,":",l))}),3e3*t)},a=0;a<i.length;a+=1)t(a);return function(){e=!0}}),[i.length]),n.a.createElement("div",{className:"update-log-container"},n.a.createElement(U,{textToShow:a}),0===i.length&&n.a.createElement("div",null,"Loading..."))},I=(a(199),function(){return n.a.createElement("div",{className:"quick-log-container"},n.a.createElement("div",{className:"quickLog"},"Quick Update"))}),P=function(){var e=u();return n.a.createElement("div",null,e.width>="900"&&n.a.createElement(W,null),e.width<="900"&&n.a.createElement(I,null))},H=a(17),F=function(e){var t=e.headings,a=e.action,c=Object(r.useState)([]),i=Object(l.a)(c,2),s=i[0],o=i[1];Object(r.useEffect)((function(){var e=[];t.forEach((function(t){e.push("asc")})),o(e)}),[t.length]);return n.a.createElement("thead",null,n.a.createElement("tr",null,t.map((function(e,t){return n.a.createElement("th",{key:"heading-".concat(t),onClick:function(){e.sorting&&function(e,t){var r=[];s.forEach((function(e,a){a===t&&r.push("asc"===e?"desc":"asc"),r.push("asc")})),o(r),a(e.ref,s[t])}(e,t)}},e.label,e.sorting&&n.a.createElement("span",{className:"sort-order"},s[t]))}))))},M=(a(200),function(e){var t=e.data,a=e.headings,c=e.subHeadings,i=(e.onlinkClick,e.subAction),s=Object(r.useState)([]),d=Object(l.a)(s,2),u=d[0],v=d[1],m=function(e,t){var r=[n.a.createElement("tr",{onClick:function(){!function(e){if(e.rowClickEnable){var t=u,a=u.includes(e.statecode)?t.filter((function(t){return t!==e.statecode})):t.concat(e.statecode);v(a)}}(e)},key:e.key+t.toString()},a.map((function(t,a){var r="delta".concat(t.ref),c="1m".concat(t.ref);return n.a.createElement("td",{key:e.key+a.toString()},n.a.createElement("div",{className:t.route?"table-body-cell-container table-body-right-content":"table-body-right-content"},n.a.createElement("div",null,n.a.createElement("div",null,e[r]),n.a.createElement("div",null,e[t.ref]),e[c]&&n.a.createElement("div",null,"1M-POP, ",e[c])),t.route&&n.a.createElement("div",null,n.a.createElement("div",{onClick:function(e){e.stopPropagation()}},t.route&&n.a.createElement(o.b,{to:t.route?e.routeLink+"/".concat(e.statecode):""},"Open new")))))})))];return u.includes(e.statecode)&&r.push(n.a.createElement("tr",{key:"row-expanded-"+e.statecode},n.a.createElement("td",{colSpan:a.length,className:"table-expand-cell"},n.a.createElement(V,{headings:c,data:e.districtWiseData,action:i})))),r};return n.a.createElement("tbody",null,function(){var e=[];if(0!==t.length)return t.forEach((function(t,a){var r=m(t,a);e=e.concat(r)})),e}())}),V=function(e){return n.a.createElement("table",null,n.a.createElement(F,{headings:e.headings,action:e.action}),n.a.createElement(M,{headings:e.headings,data:e.data,subHeadings:e.subHeadings,subAction:e.subAction}))},J=[{ref:"state",label:"State",route:!0,sorting:!0},{ref:"confirmed",label:"Confirmed",sorting:!0},{ref:"active",label:"Active",sorting:!0},{ref:"recovered",label:"Recovered",sorting:!0},{ref:"deceased",label:"Deceased",sorting:!0}],G=[{ref:"district",label:"District",sorting:!0},{ref:"confirmed",label:"Confirmed",sorting:!0},{ref:"active",label:"Active",sorting:!0},{ref:"recovered",label:"Recovered",sorting:!0},{ref:"deceased",label:"Deceased",sorting:!0}],K=null,Q=null;var B=function(){var e=Object(s.c)((function(e){return e.indiaCovidCountReducer.stateWiseCovidCount})),t=Object(s.b)();return Object(r.useEffect)((function(){0===e.length&&t(x.getStateCovidCountActions.getStateCovidCount())}),[]),Object(r.useEffect)((function(){}),[]),null===K&&(K=Object(H.b)(x.getStateCovidCountActions.sortCovidCount,t)),null===Q&&(Q=Object(H.b)(x.getStateCovidCountActions.sortDistrictCovidCount,t)),n.a.createElement("div",null,n.a.createElement(V,{headings:J,data:e,subHeadings:G,action:K,subAction:Q}))},Y=(a(202),function(){var e=Object(s.c)((function(e){return e.indiaCovidCountReducer.stateWiseCovidCount})),t=null;return e.length>=1&&(t=e.filter((function(e){return"Total"===e.state&&"TT"===e.statecode}))),null===t?n.a.createElement("div",null,"Loading total india covid status..."):n.a.createElement("div",{className:"india-covid-status-container"},n.a.createElement("div",{className:"india-covid-status"},n.a.createElement("div",{className:"status-grid-container"},n.a.createElement("div",{className:"status-label"},"Confirmed"),n.a.createElement("div",{className:"status-center"},t[0].confirmed)),n.a.createElement("div",{className:"status-grid-container"},n.a.createElement("div",{className:"status-label"},"Active"),n.a.createElement("div",{className:"status-center"},t[0].active)),n.a.createElement("div",{className:"status-grid-container"},n.a.createElement("div",{className:"status-label"},"Recovered"),n.a.createElement("div",{className:"status-center"},t[0].recovered)),n.a.createElement("div",{className:"status-grid-container"},n.a.createElement("div",{className:"status-label"},"Deseased"),n.a.createElement("div",{className:"status-center"},t[0].deceased))))}),q=a(8),z=(a(203),function(e){var t=e.description,a=e.tableHeadings,r=e.tableData;return n.a.createElement("div",{className:"top-3-card-container"},n.a.createElement("div",{className:"label"},t),n.a.createElement("div",null,n.a.createElement(V,{headings:a,data:r})))}),X=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"asc";return function(a,r){if(!a.hasOwnProperty(e)||!r.hasOwnProperty(e))return 0;var n=isNaN(Number(a[e]))?a[e].toUpperCase():Number(a[e]),c=isNaN(Number(r[e]))?r[e].toUpperCase():Number(r[e]),i=0;return n>c?i=1:n<c&&(i=-1),"desc"===t?-1*i:i}},$=(a(204),[{desc:"Top 3 cities with highest ACTIVE covid case",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"active",label:"Active"}],tableData:[],criteria:"active"},{desc:"Top 3 cities with highest covid case FOUND TODAY",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"cases",label:"Cases"}],tableData:[],criteria:"highest"},{desc:"Top 3 cities with highest covid case RECOVERED",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"totalRecovered",label:"Total Recovered"}],tableData:[],criteria:"totalRecovered"},{desc:"Top 3 cities with highest covid case RECOVERED TODAY",tableHeading:[{ref:"cityState",label:"City,State"},{ref:"recoveredToday",label:"Recovered Today"}],tableData:[],criteria:"recoveredToday"}]);function Z(e,t){if("active"===t){var a=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){a.push({cityState:"".concat(t.district,", ").concat(e.state),active:t.active})}))})),a.sort(X("active","desc")),a.slice(0,3)}if("highest"===t){var r=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){r.push({cityState:"".concat(t.district,", ").concat(e.state),cases:t.deltaconfirmed})}))})),r.sort(X("cases","desc")),r.slice(0,3)}if("totalRecovered"===t){var n=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){n.push({cityState:"".concat(t.district,", ").concat(e.state),totalRecovered:t.recovered})}))})),n.sort(X("totalRecovered","desc")),n.slice(0,3)}if("recoveredToday"===t){var c=[];return e.forEach((function(e){e.hasOwnProperty("districtWiseData")&&e.districtWiseData.forEach((function(t){c.push({cityState:"".concat(t.district,", ").concat(e.state),recoveredToday:t.deltarecovered})}))})),c.sort(X("recoveredToday","desc")),c.slice(0,3)}}var ee=function(){var e=Object(r.useState)($),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(s.c)((function(e){return e.indiaCovidCountReducer.stateWiseCovidCount})),o=Object(s.c)((function(e){return e.indiaCovidCountReducer.isLoading}));return Object(r.useEffect)((function(){var e;e=a.map((function(e){return Object(q.a)({},e,{tableData:Z(i,e.criteria)})})),c(e)}),[i.length]),n.a.createElement("div",{className:"top-3-state-container"},o&&n.a.createElement("div",null,"Loading short news..."),!o&&n.a.createElement(n.a.Fragment,null,a.map((function(e,t){return n.a.createElement(z,{key:t,description:e.desc,tableHeadings:e.tableHeading,tableData:e.tableData})}))))};a(205);var te=function(){return n.a.createElement("div",{className:"home-page-container"},n.a.createElement(P,null),n.a.createElement(Y,null),n.a.createElement("div",{className:"icc-table-top-3-state"},n.a.createElement("div",{className:"icc-table"},n.a.createElement(B,null)),n.a.createElement("div",null,n.a.createElement(ee,null))))};var ae=function(){return n.a.createElement("div",null,n.a.createElement(te,null))};var re=n.a.memo((function(e){var t=e.headings,a=e.data,r=e.action;return n.a.createElement("div",null,n.a.createElement(V,{headings:t,data:a,action:r}))}),(function(e,t){return!1})),ne=(a(206),[{ref:"country",label:"Country",sorting:!0},{ref:"total",label:"Total",sorting:!0},{ref:"active",label:"Active",sorting:!0},{ref:"recovered",label:"Recovered",sorting:!0},{ref:"death",label:"Deseased",sorting:!0},{ref:"tests",label:"Total covid tests",sorting:!0},{ref:"population",label:"Population",sorting:!0},{ref:"lastUpdated",label:"Last Updated",sorting:!0}]),ce=null;var ie=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(s.c)((function(e){return e.worldStatsReducer.worldStats})),o=Object(s.c)((function(e){return e.worldStatsReducer.isLoading})),d=Object(s.b)();return null===ce&&(ce=Object(H.b)(x.worldStatasticsAction.sortStatastics,d)),Object(r.useEffect)((function(){0===i.length&&d(x.worldStatasticsAction.getAllCountryStatastics())}),[]),n.a.createElement("div",{className:"world-container"},o?n.a.createElement("div",null,"Loading world data..."):n.a.createElement("div",{className:"basic-layout"},n.a.createElement("div",{className:"search-container"},n.a.createElement("span",{className:"search-label"},"search any country:")," ",n.a.createElement("input",{className:"search-field",value:a,placeholder:"Search for countries",onChange:function(e){c(e.target.value),d(x.worldStatasticsAction.searchStatastics(e.target.value))}})),n.a.createElement(re,{headings:ne,data:i,action:ce})))};a(207);var se=function(){return n.a.createElement("div",{className:"header-container"},n.a.createElement("div",null,n.a.createElement(o.b,{to:"/homepage"},"Home")),n.a.createElement("div",null,n.a.createElement(o.b,{to:"/world"},"World")),n.a.createElement("div",null,"Space"))},oe=(a(208),function(e){var t=e.stateData,a=t.state,r=t.lastupdatedtime,c=t.confirmed,i=t.active,s=t.recovered,o=t.deceased,d=t.deltaconfirmed,l=t.deltadeceased,u=t.deltarecovered;return n.a.createElement("div",{className:"state-total-count"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"status-grid-container"},n.a.createElement("div",{className:"state-last-upate"},n.a.createElement("div",{className:"state-name"},a),n.a.createElement("div",{className:"state-update-time"},"Last updated: ",r)),n.a.createElement("div",{className:"status-grid"},n.a.createElement("div",{className:"label-grid"},n.a.createElement("div",{className:"label-action"},"Confirmed"),n.a.createElement("div",{className:"label-right"},d),n.a.createElement("div",{className:"label-right"},c)),n.a.createElement("div",{className:"label-grid"},n.a.createElement("div",{className:"label-action"},"Active"),n.a.createElement("div",null),n.a.createElement("div",{className:"label-right"},i)),n.a.createElement("div",{className:"label-grid"},n.a.createElement("div",{className:"label-action"},"Recovered"),n.a.createElement("div",{className:"label-right"},u),n.a.createElement("div",{className:"label-right"},s)),n.a.createElement("div",{className:"label-grid"},n.a.createElement("div",{className:"label-action"},"Deceased"),n.a.createElement("div",{className:"label-right"},l),n.a.createElement("div",{className:"label-right"},o))))))}),de=a(19),le=function(e){var t=e.height,a=e.width,r=e.data,c=e.XDataKey,i=e.barDataKey,s=e.color,o={};return e.responsive||(o.width=a,o.height=t),n.a.createElement(de.g,{width:a,height:t},n.a.createElement(de.b,Object.assign({data:r,margin:{top:5,right:30,left:20,bottom:5}},o),n.a.createElement(de.d,{strokeDasharray:"3 3"}),n.a.createElement(de.i,{dataKey:c}),n.a.createElement(de.j,null),n.a.createElement(de.h,null),n.a.createElement(de.e,{verticalAlign:"top",wrapperStyle:{lineHeight:"40px"}}),n.a.createElement(de.f,{y:0,stroke:"#000"}),n.a.createElement(de.c,{dataKey:c,height:30,stroke:"#8884d8"}),n.a.createElement(de.a,{dataKey:i,fill:s})))},ue=(a(387),[{type:"confirmed",color:"blue"},{type:"recovered",color:"green"},{type:"deceased",color:"grey"},{type:"tested",color:"red"}]),ve=function(e){var t=e.stateTimeSeriesData;return n.a.createElement("div",{className:"state-graph-container"},ue.map((function(e){return n.a.createElement("div",{key:e.type},n.a.createElement(le,{width:"100%",height:250,data:t.stateDailyCases,XDataKey:"date",barDataKey:e.type,color:e.color,responsive:!0}))})))},me=function(){return n.a.createElement("div",null)},fe=function(){var e=Object(r.useState)({}),t=Object(l.a)(e,2),a=t[0],c=t[1],i=Object(d.f)().stateVal,o=Object(s.c)((function(e){return e.stateTableReducer.stateTableData})),u=Object(s.c)((function(e){return e.stateTableReducer.isLoading})),v=Object(s.c)((function(e){return e.stateTableReducer.isLoadingTimeSeries})),m=Object(s.c)((function(e){return e.stateTableReducer.stateTimeseriesData})),f=Object(s.b)();return Object(r.useEffect)((function(){if(0===o.length&&f(x.stateDataActions.getDistrictCovidData()),o.length>0){var e=o.filter((function(e){return e.statecode===i}));e.length>0&&c(e[0])}}),[o.length]),Object(r.useEffect)((function(){f(x.stateDataActions.getDistrictTimeseries(i))}),[]),n.a.createElement("div",null,u?n.a.createElement("div",null,"Loading State Data..."):n.a.createElement("div",null,n.a.createElement(oe,{stateData:a}),n.a.createElement("div",null,!v&&n.a.createElement(ve,{stateTimeSeriesData:m})),n.a.createElement("div",null,n.a.createElement(me,null))))},pe=a(158),he=a(159),Ee=a.n(he),ge={isLoading:!1,updateLogs:[],error:""},be=function(e,t){return e.concat(t)},ye=function(e){return e.map((function(e){var t,a=e.update.split("\n"),r=(t=e.timestamp,new Date(1e3*t));return{update:a.length>1?a.reduce(be,""):e.update,timestamp:r}}))},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(q.a)({},e,{isLoading:!0,error:""});case h:return Object(q.a)({},e,{isLoading:!1,updateLogs:ye(t.payload)});case E:return Object(q.a)({},e,{isLoading:!1,updateLogs:[],error:t.payload});default:return e}},Oe=a(30),Ce=function(e){if(null===e)return null;for(var t=0,a="",r=e.toString(),n=r.length-1;n>=0;n--)t+=1,a+=r[n],3===t&&t!==r.length&&(a+=","),t>4&&t%2!==0&&t!==r.length&&(a+=",");return a.split("").reverse().join("")},Te=function(e,t){return Math.random()*(t-e)+e},De={isLoading:!1,stateWiseCovidCount:[],statewiseDistrictData:[],error:""},we=function(e){var t=[];for(var a in e)t.push({district:a,confirmed:Ce(e[a].confirmed),active:Ce(e[a].active),recovered:Ce(e[a].recovered),deceased:Ce(e[a].deceased),deltaconfirmed:Ce(e[a].delta.confirmed),deltadeceased:Ce(e[a].delta.deceased),deltarecovered:Ce(e[a].delta.recovered),key:Te(1,100)});return t},je=function(e,t){var a=[],r=null;return e.statewise.forEach((function(e){if("Total"!==e.state&&"TT"!==e.statecode){var n=t[e.state];a.push({confirmed:Ce(e.confirmed),active:Ce(e.active),recovered:Ce(e.recovered),deceased:Ce(e.deaths),deltaconfirmed:Ce(e.deltaconfirmed),deltadeceased:Ce(e.deltadeaths),deltarecovered:Ce(e.deltarecovered),state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,districtWiseData:we(n.districtData),rowClickEnable:!0,key:Te(1e3,1e4),routeLink:"/state"})}else r={confirmed:Ce(e.confirmed),active:Ce(e.active),recovered:Ce(e.recovered),deceased:Ce(e.deaths),deltaconfirmed:Ce(e.deltaconfirmed),deltadeceased:Ce(e.deltadeaths),deltarecovered:Ce(e.deltarecovered),state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,key:Te(1e3,1e4)}})),a.push(r),a},Ne=function(e,t){var a=t.data,r=t.sortOrder;return JSON.parse(JSON.stringify(e)).sort(X(a,r))},Le=function(e,t){var a=t.data,r=t.sortOrder;return JSON.parse(JSON.stringify(e)).map((function(e){return"Total"!==e.state&&"TT"!==e.statecode?Object(q.a)({},e,{districtWiseData:e.districtWiseData.sort(X(a,r))}):Object(q.a)({},e)}))},Ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(q.a)({},e,{isLoading:!0,error:""});case b:return Object(q.a)({},e,{isLoading:!1,stateWiseCovidCount:je(t.payload,t.extraData),statewiseDistrictData:t.extraData});case y:return Object(q.a)({},e,{isLoading:!1,stateWiseCovidCount:[],error:t.payload});case S:var a=Ne(e.stateWiseCovidCount,t.payload);return Object(q.a)({},e,{isLoading:!1,stateWiseCovidCount:Object(Oe.a)(a),error:""});case O:var r=Le(e.stateWiseCovidCount,t.payload);return Object(q.a)({},e,{isLoading:!1,stateWiseCovidCount:Object(Oe.a)(r),error:""});default:return e}},_e=function(e,t){return Math.random()*(t-e)+e},Re={isLoading:!1,worldStats:[],worldStateForSearch:[],error:""},ke=function(e){return e.response.map((function(e){return{country:e.country,total:Ce(e.cases.total),active:Ce(e.cases.active),recovered:Ce(e.cases.recovered),death:Ce(e.deaths.total),tests:Ce(e.tests.total),population:Ce(e.population),lastUpdated:e.time,deltaactive:Ce(e.cases.new),deltadeath:Ce(e.deaths.new),"1mactive":Ce(e.cases["1M_pop"]),"1mdeath":Ce(e.deaths["1M_pop"]),"1mtests":Ce(e.tests["1M_pop"]),key:_e(2e3,3e3)}}))},xe=function(e,t){var a=t.data,r=t.sortOrder;return JSON.parse(JSON.stringify(e)).sort(X(a,r))},Ue=function(e,t){console.log("asdasdadadsa");var a=JSON.parse(JSON.stringify(e)).filter((function(e){return e.country.toUpperCase().indexOf(t.toUpperCase())>=0}));return console.log(a),a},We=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:return Object(q.a)({},e,{isLoading:!0,error:""});case T:var a=ke(t.payload);return Object(q.a)({},e,{isLoading:!1,worldStats:Object(Oe.a)(a),worldStateForSearch:Object(Oe.a)(a)});case D:return Object(q.a)({},e,{isLoading:!1,worldStats:[],worldStateForSearch:[],error:t.payload});case w:var r=xe(e.worldStats,t.payload);return Object(q.a)({},e,{isLoading:!1,worldStats:Object(Oe.a)(r),error:""});case j:var n=Ue(e.worldStateForSearch,t.payload);return Object(q.a)({},e,{isLoading:!1,worldStats:Object(Oe.a)(n),error:""});default:return e}},Ie={isLoading:!1,stateTableData:[],error:"",isLoadingTimeSeries:!1,stateTimeseriesData:{stateDailyCases:[],districtDailyCases:[]}},Pe=function(e,t){return Math.random()*(t-e)+e},He=function(e){var t=[];for(var a in e)t.push({district:a,confirmed:Ce(e[a].confirmed),active:Ce(e[a].active),recovered:Ce(e[a].recovered),deceased:Ce(e[a].deceased),deltaconfirmed:Ce(e[a].delta.confirmed),deltadeceased:Ce(e[a].delta.deceased),deltarecovered:Ce(e[a].delta.recovered),key:Pe(1,100)});return t},Fe=function(e,t){var a=[],r=null;return e.statewise.forEach((function(e){if("Total"!==e.state&&"TT"!==e.statecode){var n=t[e.state];a.push({confirmed:Ce(e.confirmed),active:Ce(e.active),recovered:Ce(e.recovered),deceased:Ce(e.deaths),deltaconfirmed:Ce(e.deltaconfirmed),deltadeceased:Ce(e.deltadeaths),deltarecovered:Ce(e.deltarecovered),state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,districtWiseData:He(n.districtData),rowClickEnable:!0,key:Pe(1e3,1e4),routeLink:"/state"})}else r={confirmed:Ce(e.confirmed),active:Ce(e.active),recovered:Ce(e.recovered),deceased:Ce(e.deaths),deltaconfirmed:Ce(e.deltaconfirmed),deltadeceased:Ce(e.deltadeaths),deltarecovered:Ce(e.deltarecovered),state:e.state,statecode:e.statecode,lastupdatedtime:e.lastupdatedtime,key:Pe(1e3,1e4)}})),a.push(r),a},Me=function(e,t){var a=JSON.parse(JSON.stringify(e)),r=a[t].dates,n=[];for(var c in r)n.push({date:c,confirmed:r[c].hasOwnProperty("delta")&&r[c].delta.confirmed||0,recovered:r[c].hasOwnProperty("delta")&&r[c].delta.recovered||0,deceased:r[c].hasOwnProperty("delta")&&r[c].delta.deceased||0,tested:r[c].hasOwnProperty("delta")&&r[c].delta.tested||0});var i=a[t].districts,s=[];for(var o in i){var d=i[o].dates,l=[];for(var u in d)l.push({date:u,confirmed:d[u].hasOwnProperty("delta")&&d[u].delta.confirmed||0,recovered:d[u].hasOwnProperty("delta")&&d[u].delta.recovered||0,deceased:d[u].hasOwnProperty("delta")&&d[u].delta.deceased||0,tested:d[u].hasOwnProperty("delta")&&d[u].delta.tested||0});s.push({name:o,dailyChanges:l})}return{stateDailyCases:n,districtDailyCases:s}},Ve=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(q.a)({},e,{isLoading:!0,error:""});case L:return Object(q.a)({},e,{isLoading:!1,stateTableData:Fe(t.payload,t.extraData)});case A:return Object(q.a)({},e,{isLoading:!1,stateTableData:[],error:t.payload});case _:return Object(q.a)({},e,{isLoadingTimeSeries:!0,errorTimeSeries:""});case R:return Object(q.a)({},e,{isLoadingTimeSeries:!1,stateTimeseriesData:Me(t.payload,t.statecode)});case k:return Object(q.a)({},e,{isLoadingTimeSeries:!1,stateTimeseriesData:{},errorTimeSeries:t.payload});default:return e}},Je=Object(H.c)({updateLogReducer:Se,indiaCovidCountReducer:Ae,worldStatsReducer:We,stateTableReducer:Ve}),Ge=Object(H.a)(pe.a,Ee.a),Ke=Object(H.d)(Je,Ge);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(388);i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s.a,{store:Ke},n.a.createElement(o.a,{basename:"/covid-tracker-world"},n.a.createElement("div",null,n.a.createElement(se,null),n.a.createElement("div",{className:"not-official-sign"},"THIS IS NOT THE OFFICIAL WEBSITE"),n.a.createElement(d.b,{exact:!0,path:"/"},n.a.createElement(d.a,{from:"/",to:"/homepage"})),n.a.createElement(d.b,{path:"/homepage",component:ae}),n.a.createElement(d.b,{path:"/world",component:ie}),n.a.createElement(d.b,{path:"/state/:stateVal",component:fe}))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[187,1,2]]]);
//# sourceMappingURL=main.b3a02851.chunk.js.map