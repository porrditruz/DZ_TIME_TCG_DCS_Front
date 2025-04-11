(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[177],{6013:(e,t,o)=>{Promise.resolve().then(o.bind(o,7366))},6217:(e,t,o)=>{"use strict";o.d(t,{A:()=>c,s:()=>a}),o(2115);var r=o(5537),l=o(5155);let a={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},c=function(e){return(0,l.jsx)(r.Ay,{...a,...e})}},5537:(e,t,o)=>{"use strict";o.d(t,{Ay:()=>c,EU:()=>a,a$:()=>l}),o(2115);var r=o(5155);let l="mode",a="color-scheme";function c(e){let{defaultMode:t="system",defaultLightColorScheme:o="light",defaultDarkColorScheme:c="dark",modeStorageKey:i=l,colorSchemeStorageKey:s=a,attribute:d="data-color-scheme",colorSchemeNode:n="document.documentElement",nonce:m}=e||{},h="",u=d;if("class"===d&&(u=".%s"),"data"===d&&(u="[data-%s]"),u.startsWith(".")){let e=u.substring(1);h+=`${n}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));
      ${n}.classList.add('${e}'.replace('%s', colorScheme));`}let f=u.match(/\[([^\]]+)\]/);if(f){let[e,t]=f[1].split("=");t||(h+=`${n}.removeAttribute('${e}'.replace('%s', light));
      ${n}.removeAttribute('${e}'.replace('%s', dark));`),h+=`
      ${n}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else h+=`${n}.setAttribute('${u}', colorScheme);`;return(0,r.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?m:"",dangerouslySetInnerHTML:{__html:`(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${i}') || '${t}';
  const dark = localStorage.getItem('${s}-dark') || '${c}';
  const light = localStorage.getItem('${s}-light') || '${o}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${h}
  }
} catch(e){}})();`}},"mui-color-scheme-init")}},5620:(e,t,o)=>{"use strict";o.d(t,{Wi:()=>a,hy:()=>c,qk:()=>l});var r=o(5925);let l=()=>{if("undefined"==typeof document)return{};let e=document.cookie.split("; ").find(e=>e.startsWith(r.A.settingsCookieName));if(e){let t=e.split("=")[1];try{return JSON.parse(decodeURIComponent(t)||"{}")}catch(e){console.error("Invalid cookie JSON",e)}}return{}},a=()=>l().mode||r.A.mode,c=()=>{if("undefined"==typeof document)return"light";let e=a(),t=document.cookie.split("; ").reduce((e,t)=>{let[o,r]=t.split("=");return"colorPref"===o?r:e},"light");return"system"===e?t:e}},7366:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>c});var r=o(5155),l=o(6217);o(9740);var a=o(5620);o(347),o(6442);let c=async e=>{let{children:t}=e,o=await (0,a.hy)();return(0,r.jsx)("html",{id:"__next",lang:"en",dir:"ltr",suppressHydrationWarning:!0,children:(0,r.jsxs)("body",{className:"flex is-full min-bs-full flex-auto flex-col",children:[(0,r.jsx)(l.A,{attribute:"data",defaultMode:o}),t]})})}},5925:(e,t,o)=>{"use strict";o.d(t,{A:()=>r});let r={templateName:"Materialize",homePageUrl:"/home",settingsCookieName:"materialize-mui-next-demo-1",mode:"system",skin:"default",semiDark:!1,layout:"vertical",layoutPadding:24,compactContentWidth:1440,navbar:{type:"fixed",contentWidth:"compact",floating:!1,detached:!0,blur:!0},contentWidth:"compact",footer:{type:"static",contentWidth:"compact",detached:!0},disableRipple:!1}},9740:()=>{},347:()=>{},6442:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[361,99,441,517,358],()=>t(6013)),_N_E=e.O()}]);