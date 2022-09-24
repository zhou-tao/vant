import{C as s}from"./index.65dbdad3.js";import{C as D}from"./index.eaf2ff63.js";import{a as g}from"./use-translate.60ccbb8c.js";import{r as k,o as x,c as b,w as p,e as n,C as o,A as R,H as T,a as w,F as S}from"./vue-libs.73c42632.js";import"./with-install.dc8e3787.js";import"./use-route.3f983808.js";import"./index.b51190a6.js";import"./index.642bbd48.js";import"./use-refs.7352ad87.js";import"./use-expose.a60c2de9.js";import"./index.5fab1dc6.js";import"./constant.80c6de18.js";import"./interceptor.fee10c5b.js";import"./use-touch.53b51ffa.js";import"./use-lazy-render.0515f8b3.js";import"./on-popup-reopen.3f7ea527.js";import"./index.889c8729.js";import"./index.a602decc.js";import"./index.81e89703.js";import"./index.4cd3469b.js";import"./mount-component.cf730ff6.js";import"./utils.3b41e119.js";import"./Picker.2fda4282.js";import"./index.ddf1d8fa.js";import"./use-id.66688fd9.js";import"./index.dad2b25c.js";import"./index.7d43f3bb.js";import"./use-height.5ae4b1d8.js";const F={__name:"TiledDisplay",setup(v){const l=new Date(2012,0,10),e=new Date(2012,2,20),f=g({"zh-CN":{calendar:"\u65E5\u5386",tiledDisplay:"\u5E73\u94FA\u5C55\u793A"},"en-US":{calendar:"Calendar",tiledDisplay:"Tiled display"}});return(C,a)=>{const c=k("demo-block");return x(),b(c,{card:"",title:o(f)("tiledDisplay")},{default:p(()=>[n(o(D),{title:o(f)("calendar"),poppable:!1,"show-confirm":!1,"min-date":o(l),"max-date":o(e),"default-date":o(l),style:{height:"500px"}},null,8,["title","min-date","max-date","default-date"])]),_:1},8,["title"])}}},ie=R({__name:"index",setup(v){const l=g({"zh-CN":{in:"\u5165\u5E97",out:"\u79BB\u5E97",today:"\u4ECA\u5929",laborDay:"\u52B3\u52A8\u8282",youthDay:"\u9752\u5E74\u8282",maxRange:"\u65E5\u671F\u533A\u95F4\u6700\u5927\u8303\u56F4",selectCount:t=>`\u9009\u62E9\u4E86 ${t} \u4E2A\u65E5\u671F`,selectSingle:"\u9009\u62E9\u5355\u4E2A\u65E5\u671F",selectMultiple:"\u9009\u62E9\u591A\u4E2A\u65E5\u671F",selectRange:"\u9009\u62E9\u65E5\u671F\u533A\u95F4",quickSelect:"\u5FEB\u6377\u9009\u62E9",confirmText:"\u5B8C\u6210",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customRange:"\u81EA\u5B9A\u4E49\u65E5\u671F\u8303\u56F4",customConfirm:"\u81EA\u5B9A\u4E49\u6309\u94AE\u6587\u5B57",customDayText:"\u81EA\u5B9A\u4E49\u65E5\u671F\u6587\u6848",customPosition:"\u81EA\u5B9A\u4E49\u5F39\u51FA\u4F4D\u7F6E",customCalendar:"\u81EA\u5B9A\u4E49\u65E5\u5386",confirmDisabledText:"\u8BF7\u9009\u62E9\u7ED3\u675F\u65F6\u95F4",firstDayOfWeek:"\u81EA\u5B9A\u4E49\u5468\u8D77\u59CB\u65E5"},"en-US":{in:"In",out:"Out",today:"Today",laborDay:"Labor day",youthDay:"Youth Day",maxRange:"Max Range",selectCount:t=>`${t} dates selected`,selectSingle:"Select Single Date",selectMultiple:"Select Multiple Date",selectRange:"Select Date Range",quickSelect:"Quick Select",confirmText:"OK",customColor:"Custom Color",customRange:"Custom Date Range",customConfirm:"Custom Confirm Text",customDayText:"Custom Day Text",customPosition:"Custom Position",customCalendar:"Custom Calendar",firstDayOfWeek:"Custom First Day Of Week",confirmDisabledText:"Select End Time"}}),e=T({date:{maxRange:[],selectSingle:null,selectRange:[],selectMultiple:[],quickSelect1:null,quickSelect2:[],customColor:[],customConfirm:[],customRange:null,customDayText:[],customPosition:null},type:"single",round:!0,color:void 0,minDate:void 0,maxDate:void 0,maxRange:void 0,position:void 0,formatter:void 0,showConfirm:!1,showCalendar:!1,confirmText:void 0,confirmDisabledText:void 0,firstDayOfWeek:0}),f=()=>{e.round=!0,e.color=void 0,e.minDate=void 0,e.maxDate=void 0,e.maxRange=void 0,e.position=void 0,e.formatter=void 0,e.showConfirm=!0,e.confirmText=void 0,e.confirmDisabledText=void 0,e.firstDayOfWeek=0},C=t=>{if(!t.date)return t;const i=t.date.getMonth()+1,r=t.date.getDate();return i===5&&(r===1?t.topInfo=l("laborDay"):r===4?t.topInfo=l("youthDay"):r===11&&(t.text=l("today"))),t.type==="start"?t.bottomInfo=l("in"):t.type==="end"&&(t.bottomInfo=l("out")),t},a=(t,i)=>{switch(f(),e.id=i,e.type=t,e.showCalendar=!0,i){case"quickSelect1":case"quickSelect2":e.showConfirm=!1;break;case"customColor":e.color="#ee0a24";break;case"customConfirm":e.confirmText=l("confirmText"),e.confirmDisabledText=l("confirmDisabledText");break;case"customRange":e.minDate=new Date(2010,0,1),e.maxDate=new Date(2010,0,31);break;case"customDayText":e.minDate=new Date(2010,4,1),e.maxDate=new Date(2010,4,31),e.formatter=C;break;case"customPosition":e.round=!1,e.position="right";break;case"maxRange":e.maxRange=3;break;case"firstDayOfWeek":e.firstDayOfWeek=1;break}},c=t=>{if(t)return`${t.getMonth()+1}/${t.getDate()}`},d=t=>{if(t)return`${t.getFullYear()}/${c(t)}`},E=t=>{if(t.length)return l("selectCount",t.length)},m=t=>{if(t.length){const[i,r]=t;return`${c(i)} - ${c(r)}`}},y=t=>{e.showCalendar=!1,e.date[e.id]=t};return(t,i)=>{const r=k("demo-block");return x(),w(S,null,[n(r,{card:"",title:o(l)("basicUsage")},{default:p(()=>[n(o(s),{"is-link":"",title:o(l)("selectSingle"),value:d(e.date.selectSingle),onClick:i[0]||(i[0]=u=>a("single","selectSingle"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("selectMultiple"),value:E(e.date.selectMultiple),onClick:i[1]||(i[1]=u=>a("multiple","selectMultiple"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("selectRange"),value:m(e.date.selectRange),onClick:i[2]||(i[2]=u=>a("range","selectRange"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:o(l)("quickSelect")},{default:p(()=>[n(o(s),{"is-link":"",title:o(l)("selectSingle"),value:d(e.date.quickSelect1),onClick:i[3]||(i[3]=u=>a("single","quickSelect1"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("selectRange"),value:m(e.date.quickSelect2),onClick:i[4]||(i[4]=u=>a("range","quickSelect2"))},null,8,["title","value"])]),_:1},8,["title"]),n(r,{card:"",title:o(l)("customCalendar")},{default:p(()=>[n(o(s),{"is-link":"",title:o(l)("customColor"),value:m(e.date.customColor),onClick:i[5]||(i[5]=u=>a("range","customColor"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("customRange"),value:d(e.date.customRange),onClick:i[6]||(i[6]=u=>a("single","customRange"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("customConfirm"),value:m(e.date.customConfirm),onClick:i[7]||(i[7]=u=>a("range","customConfirm"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("customDayText"),value:m(e.date.customDayText),onClick:i[8]||(i[8]=u=>a("range","customDayText"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("customPosition"),value:d(e.date.customPosition),onClick:i[9]||(i[9]=u=>a("single","customPosition"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("maxRange"),value:m(e.date.maxRange),onClick:i[10]||(i[10]=u=>a("range","maxRange"))},null,8,["title","value"]),n(o(s),{"is-link":"",title:o(l)("firstDayOfWeek"),onClick:i[11]||(i[11]=u=>a("single","firstDayOfWeek"))},null,8,["title"])]),_:1},8,["title"]),n(F),n(o(D),{show:e.showCalendar,"onUpdate:show":i[12]||(i[12]=u=>e.showCalendar=u),type:e.type,color:e.color,round:e.round,position:e.position,"min-date":e.minDate,"max-date":e.maxDate,"max-range":e.maxRange,formatter:e.formatter,"show-confirm":e.showConfirm,"confirm-text":e.confirmText,"first-day-of-week":e.firstDayOfWeek,"confirm-disabled-text":e.confirmDisabledText,onConfirm:y},null,8,["show","type","color","round","position","min-date","max-date","max-range","formatter","show-confirm","confirm-text","first-day-of-week","confirm-disabled-text"])],64)}}});export{ie as default};
