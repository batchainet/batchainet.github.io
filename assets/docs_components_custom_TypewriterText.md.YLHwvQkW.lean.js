import{_ as o,a7 as A,h as D,l as C,o as r,c as d,m as t,Q as u,t as B,J as x,a as m,W as f}from"./chunks/framework.BDLh4cc2.js";const S={class:"typewriter-text"},b={__name:"TypewriterText",props:{color:{type:String,default:"#389e0d"},fontSize:{type:String,default:"46px"},fontWeight:{type:String,default:"700"},maxSpeed:{type:Number,default:150},minSpeed:{type:Number,default:50},list:{type:Array,default:()=>[]},delSpeed:{type:Number,default:2},cursorText:{type:String,default:"|"},wait:{type:Number,default:2e3},waitInput:{type:Number,default:0},isStop:{type:Boolean,default:!1}},setup(n){const i=n,s=A({listIndex:0,text:"",indexes:0,tempText:"",timer:null}),g=()=>{s.timer||(clearTimeout(s.timer),s.timer=null)},y=()=>Math.floor(Math.random()*(i.maxSpeed-i.minSpeed+1))+i.minSpeed,c=a=>(s.indexes=typeof a=="number"?a:s.indexes,s.text.substr(0,s.indexes)),l=a=>new Promise((p,I)=>{g(),s.timer=setTimeout(p,a)}),e=D(),h=a=>{e.value=c()+(a?"":i.cursorText)},k=()=>{s.indexes>0?l(i.delSpeed).then(()=>{s.indexes--,h(),k()}):(s.listIndex>=i.list.length&&(s.listIndex=0),s.text=i.list[s.listIndex],s.listIndex++,l(i.waitInput).then(E))},E=()=>{s.text&&(s.text.length<=s.indexes?(h(!0),l(i.wait).then(k)):(s.indexes++,h(),l(y()).then(E)))},F=()=>{k()};return C(()=>{F()}),(a,p)=>(r(),d("div",S,[t("p",null,[t("span",{style:u({color:n.color,fontSize:n.fontSize,fontWeight:n.fontWeight})},B(e.value),5)])]))}},T=o(b,[["__scopeId","data-v-c507c032"]]),_=t("h1",{id:"打印机效果",tabindex:"-1"},[m("打印机效果 "),t("a",{class:"header-anchor",href:"#打印机效果","aria-label":'Permalink to "打印机效果"'},"​")],-1),w={class:"m-[50px_0]"},v=f("",4),P=JSON.parse('{"title":"打印机效果","description":"","frontmatter":{},"headers":[],"relativePath":"docs/components/custom/TypewriterText.md","filePath":"docs/components/custom/TypewriterText.md","lastUpdated":1708964888000}'),N={name:"docs/components/custom/TypewriterText.md"},V=Object.assign(N,{setup(n){return(i,s)=>(r(),d("div",null,[_,t("div",w,[x(T,{color:"#32c5ff",delSpeed:1,list:["大家好","给大家拜年了"]})]),v]))}});export{P as __pageData,V as default};
