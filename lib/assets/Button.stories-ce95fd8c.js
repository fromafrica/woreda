import{S as B,w as h,x as v,y as S,z as p,B as d,E as w,F as m,G as L,I as j,J as b,K as E,L as T}from"./vendor-a349760e.js";import"./vendor_react-168bb33f.js";import"./vendor_polished-d8162575.js";import"./vendor_lodash-905b21b4.js";import"./vendor_markdown-to-jsx-3d134af4.js";import"./vendor_doctrine-f497d4f7.js";import"./vendor_esutils-76c41383.js";import"./vendor_telejson-94e4d5ec.js";import"./vendor_color-convert-b139d62a.js";function q(s){let e,n,o,a,i,l;return{c(){e=S("button"),n=p(s[0]),o=p(`
  What is happening`),d(e,"type","button"),d(e,"class",a=["p-5","rounded","bg-red-300",s[1]].join(" "))},m(t,r){w(t,e,r),m(e,n),m(e,o),i||(l=L(e,"click",s[3]),i=!0)},p(t,[r]){r&1&&j(n,t[0]),r&2&&a!==(a=["p-5","rounded","bg-red-300",t[1]].join(" "))&&d(e,"class",a)},i:b,o:b,d(t){t&&E(e),i=!1,l()}}}function C(s,e,n){let o,{size:a}=e,{label:i=""}=e;function l(t){T.call(this,s,t)}return s.$$set=t=>{"size"in t&&n(2,a=t.size),"label"in t&&n(0,i=t.label)},s.$$.update=()=>{s.$$.dirty&4&&n(1,o=a)},[i,o,a,l]}class _ extends B{constructor(e){super(),h(this,e,C,q,v,{size:2,label:0})}}_.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};const D={title:"Test/Button",component:_,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},c={args:{size:"text-2xl",label:"Button"}},u={args:{size:"text-sm",label:"Button"}};var y,f,g;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'text-2xl',
    label: 'Button'
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var z,k,x;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'text-sm',
    label: 'Button'
  }
}`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const H=["Large","Small"];export{c as Large,u as Small,H as __namedExportsOrder,D as default};
//# sourceMappingURL=Button.stories-ce95fd8c.js.map
