import{S as h,i as B,a as v,P as S,Q as p,R as d,b as w,T as m,U as T,V as j,W as b,f as L,X as V}from"./vendor-7a16d8b9.js";import"./vendor_react-c5672fb2.js";function W(s){let e,n,i,a,l,o;return{c(){e=S("button"),n=p(s[0]),i=p(`
  What is happening`),d(e,"type","button"),d(e,"class",a=["p-5","rounded","bg-red-300",s[1]].join(" "))},m(t,r){w(t,e,r),m(e,n),m(e,i),l||(o=T(e,"click",s[3]),l=!0)},p(t,[r]){r&1&&j(n,t[0]),r&2&&a!==(a=["p-5","rounded","bg-red-300",t[1]].join(" "))&&d(e,"class",a)},i:b,o:b,d(t){t&&L(e),l=!1,o()}}}function q(s,e,n){let i,{size:a}=e,{label:l=""}=e;function o(t){V.call(this,s,t)}return s.$$set=t=>{"size"in t&&n(2,a=t.size),"label"in t&&n(0,l=t.label)},s.$$.update=()=>{s.$$.dirty&4&&n(1,i=a)},[l,i,a,o]}class x extends h{constructor(e){super(),B(this,e,q,W,v,{size:2,label:0})}}x.__docgen={version:3,name:"Button.svelte",data:[{visibility:"public",description:null,keywords:[],name:"size",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"any",type:"any"}},{visibility:"public",description:null,keywords:[],name:"label",kind:"let",static:!1,readonly:!1,type:{kind:"type",text:"string",type:"string"},defaultValue:""}],computed:[],methods:[],components:[],description:null,keywords:[],events:[{keywords:[],visibility:"public",description:"",name:"click",parent:"button",modificators:[],locations:null}],slots:[],refs:[]};const O={title:"Test/Button",component:x,tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:["small","medium","large"]}}},c={args:{size:"text-2xl",label:"Button"}},u={args:{size:"text-sm",label:"Button"}};var f,y,g;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    size: 'text-2xl',
    label: 'Button'
  }
}`,...(g=(y=c.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var k,z,_;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    size: 'text-sm',
    label: 'Button'
  }
}`,...(_=(z=u.parameters)==null?void 0:z.docs)==null?void 0:_.source}}};const P=["Large","Small"];export{c as Large,u as Small,P as __namedExportsOrder,O as default};
//# sourceMappingURL=Button.stories-5e7047d2.js.map
