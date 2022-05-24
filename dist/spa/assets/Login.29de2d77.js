var C=Object.defineProperty,x=Object.defineProperties;var k=Object.getOwnPropertyDescriptors;var p=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable;var f=(r,e,s)=>e in r?C(r,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):r[e]=s,d=(r,e)=>{for(var s in e||(e={}))Q.call(e,s)&&f(r,s,e[s]);if(p)for(var s of p(e))b.call(e,s)&&f(r,s,e[s]);return r},u=(r,e)=>x(r,k(e));import{u as S,a as B,Q as V,b as z}from"./QBtn.5f354242.js";import{c,h as m}from"./render.f9de160f.js";import{c as g,h,g as D,_ as E,o as w,a as _,d as a,e as t,w as n,t as L,f as M}from"./index.93afb05d.js";import{Q as v}from"./QInput.840693ca.js";import{u as A,a as I}from"./focus-manager.b314ee23.js";import{sanctum as N,api as U}from"./axios.124c3d5e.js";import{m as O}from"./main.c19ad68e.js";var y=c({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(r,{slots:e}){const s=g(()=>`q-card__section q-card__section--${r.horizontal===!0?"horiz row no-wrap":"vert"}`);return()=>h(r.tag,{class:s.value},m(e.default))}}),P=c({name:"QCardActions",props:u(d({},S),{vertical:Boolean}),setup(r,{slots:e}){const s=B(r),i=g(()=>`q-card__actions ${s.value} q-card__actions--${r.vertical===!0?"vert column":"horiz row"}`);return()=>h("div",{class:i.value},m(e.default))}}),R=c({name:"QCard",props:u(d({},A),{tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean}),setup(r,{slots:e}){const s=D(),i=I(r,s.proxy.$q),o=g(()=>"q-card"+(i.value===!0?" q-card--dark q-dark":"")+(r.bordered===!0?" q-card--bordered":"")+(r.square===!0?" q-card--square no-border-radius":"")+(r.flat===!0?" q-card--flat no-shadow":""));return()=>h(r.tag,{class:o.value},m(e.default))}});const j={name:"Login",data(){return{form:{},error:{email:!1,password:!1,auth:!1},loading:!1,store:O()}},methods:{getCookie(){this.loading=!0,N.get("sanctum/csrf-cookie").then(r=>{this.loginUser()})},loginUser(){U({method:"post",url:"login",data:this.form}).then(e=>{this.loading=!1,this.store.$state.user=e.data,this.store.$state.isLogged=!0,localStorage.isLogged=!0,this.$router.push("/")}).catch(e=>{if(this.loading=!1,e.response.data.errors.email){this.error.email=!0,this.error.emailMessage=e.response.data.errors.email[0];return}if(e.response.data.errors.password){this.error.password=!0,this.error.passwordMessage=e.response.data.errors.password[0];return}if(e.response.data.errors.auth){this.error.auth=!0,this.error.authMessage=e.response.data.errors.auth[0];return}})}}},F={class:"Login",style:{height:"100vh"}},G={class:"login-form row justify-center items-center full-height full-width"},J=a("div",{class:"row full-width justify-center"},[a("span",{class:"text-h3 poppins-regular"},"GERENCIADOR DE PROJETOS")],-1),T={class:"row"},H=a("span",{class:"text-h5 text-white dosis-500 q-ml-lg"},"Login",-1),K={class:"row"},W={class:"row"},X={class:"row q-mt-md"},Y={key:0,class:"text-negative",style:{"font-size":"12px"}};function Z(r,e,s,i,o,q){return w(),_("div",F,[a("div",G,[J,a("div",T,[t(R,{class:"my-card",style:{width:"400px"}},{default:n(()=>[t(y,{class:"bg-primary row items-center"},{default:n(()=>[t(V,{color:"white",size:"lg",name:"engineering"}),H]),_:1}),t(y,null,{default:n(()=>[a("div",K,[t(v,{modelValue:o.form.email,"onUpdate:modelValue":e[0]||(e[0]=l=>o.form.email=l),type:"text",label:"E-mail",style:{width:"100%"},error:o.error.email,"error-message":o.error.emailMessage,onFocus:e[1]||(e[1]=l=>o.error.email=!1)},null,8,["modelValue","error","error-message"])]),a("div",W,[t(v,{modelValue:o.form.password,"onUpdate:modelValue":e[2]||(e[2]=l=>o.form.password=l),type:"password",label:"Senha",error:o.error.password,"error-message":o.error.passwordMessage,onFocus:e[3]||(e[3]=l=>o.error.password=!1),style:{width:"100%"}},null,8,["modelValue","error","error-message"])]),a("div",X,[o.error.auth?(w(),_("div",Y,L(o.error.authMessage),1)):M("",!0)])]),_:1}),t(P,{align:"center"},{default:n(()=>[t(z,{class:"q-px-md bg-primary text-white dosis-500",label:"login",loading:o.loading,style:{width:"40%"},onClick:q.getCookie},null,8,["loading","onClick"])]),_:1})]),_:1})])])])}var ie=E(j,[["render",Z]]);export{ie as default};