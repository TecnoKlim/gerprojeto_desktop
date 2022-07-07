var _=Object.defineProperty,v=Object.defineProperties;var y=Object.getOwnPropertyDescriptors;var d=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var m=(s,e,r)=>e in s?_(s,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):s[e]=r,u=(s,e)=>{for(var r in e||(e={}))x.call(e,r)&&m(s,r,e[r]);if(d)for(var r of d(e))C.call(e,r)&&m(s,r,e[r]);return s},c=(s,e)=>v(s,y(e));import{u as Q,a as V,Q as k,b as S}from"./QBtn.3102aaf7.js";import{Q as p}from"./QCardSection.28389923.js";import{Q as h}from"./QInput.0f8681f4.js";import{c as b,h as E}from"./render.3d38f399.js";import{c as L,h as M,_ as q,o as g,a as f,d as a,e as t,w as l,t as A,f as B}from"./index.9d8ba1a3.js";import{Q as N}from"./QCard.51c552d3.js";import{sanctum as U,api as z}from"./axios.fb064f01.js";import{m as D}from"./main.2abc5231.js";import"./focus-manager.2ace230d.js";var I=b({name:"QCardActions",props:c(u({},Q),{vertical:Boolean}),setup(s,{slots:e}){const r=V(s),n=L(()=>`q-card__actions ${r.value} q-card__actions--${s.vertical===!0?"vert column":"horiz row"}`);return()=>M("div",{class:n.value},E(e.default))}});const O={name:"Login",data(){return{form:{},error:{email:!1,password:!1,auth:!1},loading:!1,store:D()}},methods:{getCookie(){this.loading=!0,U.get("sanctum/csrf-cookie").then(s=>{this.loginUser()})},loginUser(){z({method:"post",url:"login",data:this.form}).then(e=>{this.loading=!1,this.store.$state.user=e.data,this.store.$state.isLogged=!0,localStorage.isLogged=!0,this.$router.push("/")}).catch(e=>{if(this.loading=!1,e.response.data.errors.email){this.error.email=!0,this.error.emailMessage=e.response.data.errors.email[0];return}if(e.response.data.errors.password){this.error.password=!0,this.error.passwordMessage=e.response.data.errors.password[0];return}if(e.response.data.errors.auth){this.error.auth=!0,this.error.authMessage=e.response.data.errors.auth[0];return}})}}},R={class:"Login",style:{height:"100vh"}},j={class:"login-form row justify-center items-center full-height full-width"},F=a("div",{class:"row full-width justify-center"},[a("span",{class:"text-h3 poppins-regular"},"GERENCIADOR DE PROJETOS")],-1),P={class:"row"},G=a("span",{class:"text-h5 text-white dosis-500 q-ml-lg"},"Login",-1),J={class:"row"},T={class:"row"},H={class:"row q-mt-md"},K={key:0,class:"text-negative",style:{"font-size":"12px"}};function W(s,e,r,n,o,w){return g(),f("div",R,[a("div",j,[F,a("div",P,[t(N,{class:"my-card",style:{width:"400px"}},{default:l(()=>[t(p,{class:"bg-primary row items-center"},{default:l(()=>[t(k,{color:"white",size:"lg",name:"engineering"}),G]),_:1}),t(p,null,{default:l(()=>[a("div",J,[t(h,{modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=i=>o.form.email=i),type:"text",label:"E-mail",style:{width:"100%"},error:o.error.email,"error-message":o.error.emailMessage,onFocus:e[1]||(e[1]=i=>o.error.email=!1)},null,8,["modelValue","error","error-message"])]),a("div",T,[t(h,{modelValue:o.form.password,"onUpdate:modelValue":e[2]||(e[2]=i=>o.form.password=i),type:"password",label:"Senha",error:o.error.password,"error-message":o.error.passwordMessage,onFocus:e[3]||(e[3]=i=>o.error.password=!1),style:{width:"100%"}},null,8,["modelValue","error","error-message"])]),a("div",H,[o.error.auth?(g(),f("div",K,A(o.error.authMessage),1)):B("",!0)])]),_:1}),t(I,{align:"center"},{default:l(()=>[t(S,{class:"q-px-md bg-primary text-white dosis-500",label:"login",loading:o.loading,style:{width:"40%"},onClick:w.getCookie},null,8,["loading","onClick"])]),_:1})]),_:1})])])])}var ie=q(O,[["render",W]]);export{ie as default};