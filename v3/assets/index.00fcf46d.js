import{c as C,u as f}from"./use-translate.789845f9.js";import{m as b,t as j,w as x}from"./with-install.c13b505f.js";import{C as _}from"./index.bb9b6afa.js";import{z as u,e as a,C as k,r as F,o as B,a as h,w as c,B as t,F as v}from"./vue-libs.1dda7261.js";import{T as m}from"./function-call.20857ce2.js";import"./use-route.dfb37f70.js";import"./index.83a50000.js";import"./mount-component.c8306521.js";import"./use-expose.d54fed8a.js";import"./index.1210a5ca.js";import"./interceptor.4e67a670.js";import"./use-touch.b0c07ae6.js";import"./index.904c4b4d.js";import"./utils.39620306.js";import"./index.0749451f.js";import"./use-lazy-render.e44d61c0.js";import"./on-popup-reopen.1b0dc8ad.js";import"./index.3b26be4c.js";import"./index.423a1a17.js";const[y,p,l]=C("contact-card");var E=u({name:y,props:{tel:String,name:String,type:b("add"),addText:String,editable:j},emits:["click"],setup(e,{emit:n}){const o=i=>{e.editable&&n("click",i)},d=()=>e.type==="add"?e.addText||l("addText"):[a("div",null,[`${l("name")}\uFF1A${e.name}`]),a("div",null,[`${l("tel")}\uFF1A${e.tel}`])];return()=>a(_,{center:!0,icon:e.type==="edit"?"contact":"add-square",class:p([e.type]),border:!1,isLink:e.editable,valueClass:p("value"),onClick:o},{value:d})}});const r=x(E),Q=u({setup(e){const n=f({"zh-CN":{add:"\u65B0\u589E",edit:"\u7F16\u8F91",name:"\u5F20\u4E09",addContact:"\u6DFB\u52A0\u8054\u7CFB\u4EBA",editContact:"\u7F16\u8F91\u8054\u7CFB\u4EBA"},"en-US":{add:"Add",edit:"Edit",name:"John Snow",addContact:"Add Contact",editContact:"Edit Contact"}}),o=k(()=>({name:n("name"),tel:"13000000000"})),d=()=>m(n("add")),i=()=>m(n("edit"));return(w,A)=>{const s=F("demo-block");return B(),h(v,null,[a(s,{title:t(n)("addContact")},{default:c(()=>[a(t(r),{type:"add",onClick:d})]),_:1},8,["title"]),a(s,{title:t(n)("editContact")},{default:c(()=>[a(t(r),{type:"edit",name:t(o).name,tel:t(o).tel,onClick:i},null,8,["name","tel"])]),_:1},8,["title"]),a(s,{title:t(n)("uneditable")},{default:c(()=>[a(t(r),{type:"edit",name:t(o).name,tel:t(o).tel,editable:!1},null,8,["name","tel"])]),_:1},8,["title"])],64)}}});export{Q as default};