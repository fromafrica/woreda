import{S as h,i as B,h as v,I as S,J as p,K as d,k as w,L as m,M as L,N as j,O as b,n as O,P as T}from"./vendor-64026506.js";import"./vendor_react-df9eb6b4.js";function q(s){let e,n,i,a,l,o;return{c(){e=S("button"),n=p(s[0]),i=p(`
  What is happening`),d(e,"type","button"),d(e,"class",a=["p-5","rounded","bg-red-300",s[1]].join(" "))},m(t,r){w(t,e,r),m(e,n),m(e,i),l||(o=L(e,"click",s[3]),l=!0)},p(t,[r]){r&1&&j(n,t[0]),r&2&&a!==(a=["p-5","rounded","bg-red-300",t[1]].join(" "))&&d(e,"class",a)},i:b,o:b,d(t){t&&O(e),l=!1,o()}}}function C(s,e,n){let i,{size:a}=e,{label:l=""}=e;function o(t){T.call(this,s,t)}return s.$$set=t=>{"size"in t&&n(2,a=t.size),"label"in t&&n(0,l=t.label)},s.$$.update=()=>{s.$$.dirty&4&&n(1,i=a)},[l,i,a,o]}class x extends h{constructor(e){super(),B(this,e,C,q,v,{size:2,label:0})}}x.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};const J={title:"Test/Button",component:x,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},c={args:{size:"text-2xl",label:"Button"}},u={args:{size:"text-sm",label:"Button"}};var y,f,g;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: 'text-2xl',
    label: 'Button'
  }
}`,...(g=(f=c.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};var k,z,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'text-sm',
    label: 'Button'
  }
}`,...(_=(z=u.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const K=["Large","Small"];export{c as Large,u as Small,K as __namedExportsOrder,J as default};
//# sourceMappingURL=Button.stories-80403092.js.map
