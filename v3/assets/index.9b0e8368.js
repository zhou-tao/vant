import{c as o}from"./use-translate.789845f9.js";import{t as c,w as m}from"./with-install.c13b505f.js";import{d}from"./constant.4d85ecb9.js";import{z as u,e as r,I as f,F as b}from"./vue-libs.1dda7261.js";const[p,a]=o("cell-group");var g=u({name:p,inheritAttrs:!1,props:{title:String,inset:Boolean,border:c},setup(e,{slots:t,attrs:l}){const i=()=>{var n;return r("div",f({class:[a({inset:e.inset}),{[d]:e.border&&!e.inset}]},l),[(n=t.default)==null?void 0:n.call(t)])},s=()=>r("div",{class:a("title",{inset:e.inset})},[t.title?t.title():e.title]);return()=>e.title||t.title?r(b,null,[s(),i()]):i()}});const O=m(g);export{O as C};