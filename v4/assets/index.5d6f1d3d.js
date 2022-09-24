import{c as L,L as b,n as w,J as A,l as _}from"./use-translate.60ccbb8c.js";import{c as f,n as $,w as N}from"./with-install.dc8e3787.js";import{u as R}from"./use-touch.53b51ffa.js";import{L as B}from"./index.81e89703.js";import{A as I,x as v,H as M,y as U,e as l,q as Y}from"./vue-libs.73c42632.js";const[q,r,C]=L("pull-refresh"),x=50,F=["pulling","loosing","success"],G={disabled:Boolean,modelValue:Boolean,headHeight:f(x),successText:String,pullingText:String,loosingText:String,loadingText:String,pullDistance:$,successDuration:f(500),animationDuration:f(300)},J=I({name:q,props:G,emits:["change","refresh","update:modelValue"],setup(a,{emit:d,slots:n}){let u;const g=v(),m=v(),H=b(g),e=M({status:"normal",distance:0,duration:0}),i=R(),P=()=>{if(a.headHeight!==x)return{height:`${a.headHeight}px`}},h=()=>e.status!=="loading"&&e.status!=="success"&&!a.disabled,k=t=>{const s=+(a.pullDistance||a.headHeight);return t>s&&(t<s*2?t=s+(t-s)/2:t=s*1.5+(t-s*2)/4),Math.round(t)},o=(t,s)=>{const c=+(a.pullDistance||a.headHeight);e.distance=t,s?e.status="loading":t===0?e.status="normal":t<c?e.status="pulling":e.status="loosing",d("change",{status:e.status,distance:t})},T=()=>{const{status:t}=e;return t==="normal"?"":a[`${t}Text`]||C(t)},p=()=>{const{status:t,distance:s}=e;if(n[t])return n[t]({distance:s});const c=[];return F.includes(t)&&c.push(l("div",{class:r("text")},[T()])),t==="loading"&&c.push(l(B,{class:r("loading")},{default:T})),c},E=()=>{e.status="success",setTimeout(()=>{o(0)},+a.successDuration)},S=t=>{u=A(H.value)===0,u&&(e.duration=0,i.start(t))},V=t=>{h()&&S(t)},y=t=>{if(h()){u||S(t);const{deltaY:s}=i;i.move(t),u&&s.value>=0&&i.isVertical()&&(_(t),o(k(s.value)))}},D=()=>{u&&i.deltaY.value&&h()&&(e.duration=+a.animationDuration,e.status==="loosing"?(o(+a.headHeight,!0),d("update:modelValue",!0),Y(()=>d("refresh"))):o(0))};return U(()=>a.modelValue,t=>{e.duration=+a.animationDuration,t?o(+a.headHeight,!0):n.success||a.successText?E():o(0,!1)}),w("touchmove",y,{target:m}),()=>{var s;const t={transitionDuration:`${e.duration}ms`,transform:e.distance?`translate3d(0,${e.distance}px, 0)`:""};return l("div",{ref:g,class:r()},[l("div",{ref:m,class:r("track"),style:t,onTouchstartPassive:V,onTouchend:D,onTouchcancel:D},[l("div",{class:r("head"),style:P()},[p()]),(s=n.default)==null?void 0:s.call(n)])])}}}),Q=N(J);export{Q as P};
