import{d as k,r as u,a as d,o as i,c as r,b as s,e,w as o,u as v,i as b,S,f as x,g as B,h as g,F as A,t as m,j as w,A as $}from"./vendor.c137d702.js";const C=function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))p(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const n of a.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&p(n)}).observe(document,{childList:!0,subtree:!0});function _(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerpolicy&&(a.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?a.credentials="include":t.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function p(t){if(t.ep)return;t.ep=!0;const a=_(t);fetch(t.href,a)}};C();const z={class:"header p-6 flex justify-between items-center"},L=s("div",{class:"header-logo flex items-center"},[s("div",{class:"logo"}),s("div",{class:"ml-2 text-2xl font-bold"},"Sloth Finance")],-1),N={class:"header-nav"},F=x("Connect to Wallet"),P=x("English "),I=x("\u7B80\u4F53\u4E2D\u6587 "),K=k({setup(h){let c=u("EN");const _=()=>{};return(p,t)=>{const a=d("a-button"),n=d("a-divider"),f=d("a-select-option"),l=d("a-select");return i(),r("div",z,[L,s("div",N,[e(a,{size:"large",type:"primary",ghost:""},{default:o(()=>[F]),_:1}),e(n,{type:"vertical"}),e(l,{ref:"select",size:"large",value:v(c),"onUpdate:value":t[0]||(t[0]=y=>b(c)?c.value=y:c=y),style:{width:"120px"},onFocus:p.focus,onChange:_},{default:o(()=>[e(f,{value:"EN"},{default:o(()=>[P]),_:1}),e(f,{value:"zh-CN"},{default:o(()=>[I]),_:1})]),_:1},8,["value","onFocus"]),e(n,{type:"vertical"}),e(a,{size:"large",shape:"circle",type:"text"},{icon:o(()=>[e(v(S))]),_:1})])])}}});const M=s("span",{class:"text-2xl font-bold pl-4"},"Lend",-1),E=s("span",{class:"text-2xl font-bold pl-4"},"Farm",-1),U=s("span",{class:"text-2xl font-bold pl-4"},"SUSD",-1),D=s("span",{class:"text-2xl font-bold pl-4"},"Portfolio",-1),V=s("span",{class:"text-2xl font-bold pl-4"},"Governance",-1),O=s("span",{class:"text-2xl font-bold pl-4"},"Stake",-1),T=s("span",{class:"text-2xl font-bold pl-4"},"Alpies",-1),j=s("span",{class:"text-2xl font-bold pl-4"},"Graze",-1),Y=k({setup(h){let c=u(["1"]),_=u([]);const p=t=>{console.log("click ",t)};return(t,a)=>{const n=d("a-menu-item"),f=d("a-menu");return i(),B(f,{class:"aside-menu",openKeys:v(_),"onUpdate:openKeys":a[0]||(a[0]=l=>b(_)?_.value=l:_=l),selectedKeys:v(c),"onUpdate:selectedKeys":a[1]||(a[1]=l=>b(c)?c.value=l:c=l),style:{width:"256px","background-color":"transparent"},mode:"vertical",onClick:p},{default:o(()=>[e(n,{key:"1"},{default:o(()=>[M]),_:1}),e(n,{key:"2"},{default:o(()=>[E]),_:1}),e(n,{key:"3"},{default:o(()=>[U]),_:1}),e(n,{key:"4"},{default:o(()=>[D]),_:1}),e(n,{key:"5"},{default:o(()=>[V]),_:1}),e(n,{key:"6"},{default:o(()=>[O]),_:1}),e(n,{key:"7"},{default:o(()=>[T]),_:1}),e(n,{key:"8"},{default:o(()=>[j]),_:1})]),_:1},8,["openKeys","selectedKeys"])}}});const G={class:"lend-card"},W=s("div",{class:"p-2 text-center text-2xl text-green-500 border-b"},"$825,558,743.2",-1),q=s("div",{class:"flex justify-center"},[s("div",{class:"p-2"},"$787.41M"),s("div",{class:"p-2"},"$38.14M")],-1),R={class:"mt-4"},H={key:0},J={class:"text-2xl font-bold"},Q=s("div",{class:"text-sm"},"1 ibALPACA = 1.0168 ALPACA",-1),X={key:1,class:"text-2xl font-bold text-green-500"},Z={key:2,class:"text-xl font-bold"},ee={key:3,class:"text-xl font-bold"},te={key:4,class:"text-xl font-bold"},oe={key:5,class:"text-xl font-bold"},ae=x("Deposit"),se=x("Withdraw"),ne=k({setup(h){const c=u([{name:"Name",dataIndex:"name",key:"name"},{title:"APY",dataIndex:"apy",key:"apy"},{title:"Total Supply",dataIndex:"totalSupply",key:"totalSupply"},{title:"Total Borrowed	",key:"totalBorrowed",dataIndex:"totalBorrowed"},{title:"Utilization",dataIndex:"utilization	",key:"utilization"},{title:"Your Balance",dataIndex:"yourBalance	",key:"yourBalance"},{title:"Action",dataIndex:"action	",key:"action"}]),_=u([{key:"1",name:"Sloth",apy:1.01,totalSupply:"21.91M",totalBorrowed:"4.22M",utilization:"19.25%",yourBalance:"0.00 ibALPACA"},{key:"1",name:"BNB",apy:1.01,totalSupply:"21.91M",totalBorrowed:"4.22M",utilization:"19.25%",yourBalance:"0.00 ibALPACA"},{key:"1",name:"BUSD",apy:1.01,totalSupply:"21.91M",totalBorrowed:"4.22M",utilization:"19.25%",yourBalance:"0.00 ibALPACA"}]);return(p,t)=>{const a=d("a-card"),n=d("a-button"),f=d("a-table");return i(),r("div",G,[e(a,{title:"Total Value Locked",style:{width:"500px"}},{default:o(()=>[W,q]),_:1}),s("div",R,[e(a,null,{default:o(()=>[e(f,{columns:c.value,"data-source":_.value},{headerCell:o(({column:l})=>[l.key==="name"?(i(),r("span",H)):g("",!0)]),bodyCell:o(({column:l,record:y,text:de})=>[l.key==="name"?(i(),r(A,{key:0},[s("div",J,m(y.name),1),Q],64)):l.key==="apy"?(i(),r("div",X,[s("span",null,"APY "+m(y.apy)+" %",1)])):l.key==="totalSupply"?(i(),r("div",Z,m(y.totalSupply),1)):l.key==="totalBorrowed"?(i(),r("div",ee,m(y.totalBorrowed),1)):l.key==="utilization"?(i(),r("div",te,m(y.utilization),1)):l.key==="yourBalance"?(i(),r("div",oe,m(y.yourBalance),1)):l.key==="action"?(i(),r(A,{key:6},[e(n,{type:"primary",ghost:"",block:""},{default:o(()=>[ae]),_:1}),e(n,{class:"mt-2",type:"primary",ghost:"",block:""},{default:o(()=>[se]),_:1})],64)):g("",!0)]),_:1},8,["columns","data-source"])]),_:1})])])}}});const le=s("div",{class:"p-2"},"\xA9 2022 Sloth Finance Labs, Inc",-1),ce=k({setup(h){return u(["2"]),u(["2"]),u(["1"]),u(!1),u(["sub1"]),(c,_)=>{const p=d("a-layout-sider"),t=d("a-layout"),a=d("a-layout-footer");return i(),B(t,{class:"h-screen"},{default:o(()=>[e(K),e(t,null,{default:o(()=>[e(p,{width:"256",style:{background:"none"}},{default:o(()=>[e(Y)]),_:1}),e(t,{style:{padding:"0 24px 24px"}},{default:o(()=>[e(ne)]),_:1})]),_:1}),e(a,{class:"bg-white",style:{"text-align":"center","background-color":"#fff"}},{default:o(()=>[le]),_:1})]),_:1})}}});const ie=w(ce);ie.use($).mount("#app");
