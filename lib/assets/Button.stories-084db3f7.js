import{S as B,m as h,n as v,o as S,q as p,r as d,u as w,v as m,w as j,x as q,y as b,z as L,B as T}from"./vendor-bd530588.js";import"./vendor_react-759835e8.js";import"./vendor_lodash-514fa5a6.js";function C(s){let e,n,i,a,l,o;return{c(){e=S("button"),n=p(s[0]),i=p(`
  What is happening`),d(e,"type","button"),d(e,"class",a=["p-5","rounded","bg-red-300",s[1]].join(" "))},m(t,r){w(t,e,r),m(e,n),m(e,i),l||(o=j(e,"click",s[3]),l=!0)},p(t,[r]){r&1&&q(n,t[0]),r&2&&a!==(a=["p-5","rounded","bg-red-300",t[1]].join(" "))&&d(e,"class",a)},i:b,o:b,d(t){t&&L(e),l=!1,o()}}}function E(s,e,n){let i,{size:a}=e,{label:l=""}=e;function o(t){T.call(this,s,t)}return s.$$set=t=>{"size"in t&&n(2,a=t.size),"label"in t&&n(0,l=t.label)},s.$$.update=()=>{s.$$.dirty&4&&n(1,i=a)},[l,i,a,o]}class _ extends B{constructor(e){super(),h(this,e,E,C,v,{size:2,label:0})}}_.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};const A={title:"Test/Button",component:_,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},c={args:{size:"text-2xl",label:"Button"}},u={args:{size:"text-sm",label:"Button"}};var y,f,g;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'text-2xl',
    label: 'Button'
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var z,k,x;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'text-sm',
    label: 'Button'
  }
}`,...(x=(k=u.parameters)==null?void 0:k.docs)==null?void 0:x.source}}};const D=["Large","Small"];export{c as Large,u as Small,D as __namedExportsOrder,A as default};
//# sourceMappingURL=Button.stories-084db3f7.js.map