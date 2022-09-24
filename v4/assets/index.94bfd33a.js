import{c as g,e as m,w as C,a as D}from"./use-translate.60ccbb8c.js";import{w as S}from"./with-install.dc8e3787.js";import{C as B}from"./index.65dbdad3.js";import{F as w}from"./index.9ee452bb.js";import{F as b}from"./index.73f8a057.js";import{B as _}from"./index.a602decc.js";import{S as x}from"./index.7ffbd4e4.js";import{A as v,H as E,y,e as a,x as V,r as k,o as F,c as A,w as L,C as u}from"./vue-libs.73c42632.js";import{s as h}from"./index.4cd3469b.js";import"./use-route.3f983808.js";import"./index.b51190a6.js";import"./index.642bbd48.js";import"./constant.80c6de18.js";import"./use-expose.a60c2de9.js";import"./use-id.66688fd9.js";import"./index.81e89703.js";import"./index.5fab1dc6.js";import"./interceptor.fee10c5b.js";import"./use-touch.53b51ffa.js";import"./use-lazy-render.0515f8b3.js";import"./on-popup-reopen.3f7ea527.js";import"./index.889c8729.js";import"./mount-component.cf730ff6.js";const[T,s,n]=g("contact-edit"),d={tel:"",name:""},U={isEdit:Boolean,isSaving:Boolean,isDeleting:Boolean,showSetDefault:Boolean,setDefaultLabel:String,contactInfo:{type:Object,default:()=>m({},d)},telValidator:{type:Function,default:C}},I=v({name:T,props:U,emits:["save","delete","changeDefault"],setup(t,{emit:l}){const e=E(m({},d,t.contactInfo)),i=()=>{t.isSaving||l("save",e)},c=()=>l("delete",e),f=()=>a("div",{class:s("buttons")},[a(_,{block:!0,round:!0,type:"primary",text:n("save"),class:s("button"),loading:t.isSaving,nativeType:"submit"},null),t.isEdit&&a(_,{block:!0,round:!0,text:n("delete"),class:s("button"),loading:t.isDeleting,onClick:c},null)]),p=()=>a(x,{modelValue:e.isDefault,"onUpdate:modelValue":o=>e.isDefault=o,onChange:o=>l("changeDefault",o)},null),r=()=>{if(t.showSetDefault)return a(B,{title:t.setDefaultLabel,class:s("switch-cell"),border:!1},{"right-icon":p})};return y(()=>t.contactInfo,o=>m(e,d,o)),()=>a(w,{class:s(),onSubmit:i},{default:()=>[a("div",{class:s("fields")},[a(b,{modelValue:e.name,"onUpdate:modelValue":o=>e.name=o,clearable:!0,label:n("name"),rules:[{required:!0,message:n("nameEmpty")}],maxlength:"30",placeholder:n("name")},null),a(b,{modelValue:e.tel,"onUpdate:modelValue":o=>e.tel=o,clearable:!0,type:"tel",label:n("tel"),rules:[{validator:t.telValidator,message:n("telInvalid")}],placeholder:n("tel")},null)]),r(),f()]})}}),N=S(I),se=v({__name:"index",setup(t){const l=D({"zh-CN":{defaultLabel:"\u8BBE\u4E3A\u9ED8\u8BA4\u8054\u7CFB\u4EBA"},"en-US":{defaultLabel:"Set as the default contact"}}),e=V({tel:"",name:""}),i=()=>h(l("save")),c=()=>h(l("delete"));return(f,p)=>{const r=k("demo-block");return F(),A(r,{title:u(l)("basicUsage")},{default:L(()=>[a(u(N),{"is-edit":"","show-set-default":"","contact-info":e.value,"set-default-label":u(l)("defaultLabel"),onSave:i,onDelete:c},null,8,["contact-info","set-default-label"])]),_:1},8,["title"])}}});export{se as default};
