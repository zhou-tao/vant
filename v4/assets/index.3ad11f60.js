import{c,a as _}from"./use-translate.60ccbb8c.js";import{t as m,m as f,w as h}from"./with-install.dc8e3787.js";import{A as r,e as a,r as p,o as x,a as C,w as n,C as t,h as s,t as l,F as P}from"./vue-libs.73c42632.js";const[v,y]=c("divider"),g={dashed:Boolean,hairline:m,contentPosition:f("center")},w=r({name:v,props:g,setup(d,{slots:e}){return()=>{var u;return a("div",{role:"separator",class:y({dashed:d.dashed,hairline:d.hairline,[`content-${d.contentPosition}`]:!!e.default})},[(u=e.default)==null?void 0:u.call(e)])}}}),o=h(w),b=r({__name:"index",setup(d){const e=_({"zh-CN":{text:"\u6587\u672C",dashed:"\u865A\u7EBF",withText:"\u5C55\u793A\u6587\u672C",contentPosition:"\u5185\u5BB9\u4F4D\u7F6E",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F"},"en-US":{text:"Text",dashed:"Dashed",withText:"With Text",contentPosition:"Content Position",customStyle:"Custom Style"}});return(u,B)=>{const i=p("demo-block");return x(),C(P,null,[a(i,{title:t(e)("basicUsage")},{default:n(()=>[a(t(o))]),_:1},8,["title"]),a(i,{title:t(e)("withText")},{default:n(()=>[a(t(o),null,{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("contentPosition")},{default:n(()=>[a(t(o),{"content-position":"left"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1}),a(t(o),{"content-position":"right"},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("dashed")},{default:n(()=>[a(t(o),{dashed:"",hairline:!1},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"]),a(i,{title:t(e)("customStyle")},{default:n(()=>[a(t(o),{style:{borderColor:"#1989fa",color:"#1989fa",padding:"0 16px"}},{default:n(()=>[s(l(t(e)("text")),1)]),_:1})]),_:1},8,["title"])],64)}}});export{b as default};
