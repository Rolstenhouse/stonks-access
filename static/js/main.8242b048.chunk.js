(this["webpackJsonpstonks-access"]=this["webpackJsonpstonks-access"]||[]).push([[0],{117:function(e,t,a){"use strict";a.r(t);var n=a(3),i=a(0),c=a.n(i),o=a(11),r=a.n(o),s=(a(85),a(86),a(66)),l=a(158),d=a(10),u=a(18),j=a.n(u),h=a(61),b=a(147),p=a(29),g=a(48),m=a.n(g),O=a(47),f=a.n(O),x=a(69),v=a(159),y=a(152),w=a(151),k=a(154),S=a(163),C=a(150),E=a(162),I=a(155),_=a(161),A=a(156),D=a(157),T=a(160),F=function(e){var t=e.advanceStep,a=Object(i.useState)(""),c=Object(d.a)(a,2),o=c[0],r=c[1],s=Object(i.useState)(!1),l=Object(d.a)(s,2),u=l[0],h=l[1],g=Object(p.a)(),m=function(){h(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(x.a,{variant:"h4",children:"Enter your early access code"}),Object(n.jsxs)("form",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)(v.a,{label:"Early Access Code",error:u,value:o,onChange:function(e){return r(e.target.value)},placeholder:"OPEN SESAME",helperText:u&&"Invalid access code. Please try again :)"}),Object(n.jsx)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginLeft:g.spacing(4)},onClick:function(e){h(!1),j.a.get("https://api.withlaguna.com/stonks/access/code/".concat(o)).then((function(e){e.data.allow?t():m()})).catch((function(){m()}))},children:"Enter"})]})]})},P=function(e){var t=e.advanceStep,a=e.setUserId,c=e.editId,o=e.editDetails,r=e.setEditDetails,s=e.refresh,l=Object(p.a)(),u=Object(i.useState)(!1),h=Object(d.a)(u,2),b=h[0],g=h[1],m=function(){g(!0)},O=Object(i.useState)(o.title),f=Object(d.a)(O,2),A=f[0],D=f[1],F=Object(i.useState)(o.description),P=Object(d.a)(F,2),W=P[0],U=P[1],L=Object(i.useState)(o.link),B=Object(d.a)(L,2),R=B[0],z=B[1],N=Object(i.useState)(o.subdomain),Y=Object(d.a)(N,2),M=Y[0],H=Y[1],J=Object(i.useState)(o.name),V=Object(d.a)(J,2),q=V[0],G=V[1],K=Object(i.useState)(o.email),Q=Object(d.a)(K,2),X=Q[0],Z=Q[1],$=Object(i.useState)(o.phone),ee=Object(d.a)($,2),te=ee[0],ae=ee[1],ne=Object(i.useState)(o.show_amounts),ie=Object(d.a)(ne,2),ce=ie[0],oe=ie[1];Object(i.useEffect)((function(){D(o.title),U(o.description),z(o.link),H(o.subdomain),G(o.name),Z(o.email),ae(o.phone),oe(o.show_amounts)}),[o]);var re=o.plaid_connected!=!!o.subdomain,se=function(e){g(!1),j.a.post("https://api.withlaguna.com/stonks/access/form",{title:A,description:W,link:R,subdomain:M,name:q,email:X,phone:te,show_amounts:"yes"===ce,edit_id:c}).then((function(e){e.data.allow?(a(e.data.id),r({title:A,description:W,link:R,subdomain:M,show_amounts:ce?"yes":"no",name:q,email:X,phone:te,plaid_connected:o.plaid_connected}),t()):m()})).catch((function(){m()}))},le=Object(i.useState)(""),de=Object(d.a)(le,2),ue=de[0],je=de[1],he=Object(i.useState)(""),be=Object(d.a)(he,2),pe=be[0],ge=be[1],me=Object(i.useState)(""),Oe=Object(d.a)(me,2),fe=Oe[0],xe=Oe[1],ve=function(e){if(c){if(e.subdomain&&e.subdomain==o.subdomain)return;if(e.email&&e.email===o.email)return;if(e.phone&&e.phone===o.phone)return}j.a.get("https://api.withlaguna.com/stonks/access/check_unique",{params:e}).then((function(e){})).catch((function(){e.subdomain?je("Subdomain has already been claimed"):e.email?ge("Email has already been claimed"):e.phone&&xe("Phone has already been claimed")}))},ye="https://".concat(o.subdomain,".withlaguna.com");return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"h4",children:"Account creation and configuration"}),re&&Object(n.jsxs)("div",{style:{padding:l.spacing(4)},children:[Object(n.jsx)(T.a,{severity:"error",children:"Your page is live, but your brokerage hasn't been connected yet"}),Object(n.jsx)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:se,children:"Import your trades"})]}),s&&Object(n.jsxs)("div",{style:{padding:l.spacing(4)},children:[Object(n.jsx)(T.a,{severity:"warning",children:"Your brokerage credentials have expired. Please re-log them"}),Object(n.jsx)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:se,children:"Reconnect"})]}),Object(n.jsxs)("form",{children:[Object(n.jsxs)(w.a,{style:{padding:l.spacing(6),marginBottom:l.spacing(2)},children:[Object(n.jsx)(x.a,{variant:"h6",children:"Your page information"}),Object(n.jsxs)(x.a,{variant:"caption",children:["Used to customize your page :)"," ",Object(n.jsx)(k.a,{href:"https://rob.withlaguna.com",children:"Sample Site"})]}),Object(n.jsx)(v.a,{value:A,onChange:function(e){return D(e.target.value)},label:"Title",helperText:"Ex) Rob's Stonks",fullWidth:!0}),Object(n.jsx)(v.a,{value:W,onChange:function(e){return U(e.target.value)},label:"Description",helperText:"Ex) Trading on long-term horizons",fullWidth:!0}),Object(n.jsx)(v.a,{value:R,onChange:function(e){return z(e.target.value)},label:"Personal Bio Link (optional)",helperText:"Twitter handle, website, Linkedin, etc. Write as https://withterra.com",fullWidth:!0}),Object(n.jsx)(v.a,{value:M,onChange:function(e){H(e.target.value),je("")},onBlur:function(e){return ve({subdomain:M})},label:"Desired subdomain",helperText:ue||"i.e enter 'rob' if you want, rob.withlaguna.com",error:!!ue,fullWidth:!0}),Object(n.jsxs)(S.a,{component:"fieldset",margin:"none",fullWidth:!0,size:"small",style:{textAlign:"left",marginTop:l.spacing(1)},children:[Object(n.jsx)(C.a,{component:"legend",children:"Portfolio privacy setting"}),Object(n.jsxs)(E.a,{"aria-label":"show amounts",name:"Show portfolio amounts",value:ce,onChange:function(e){return oe(e.target.value)},children:[Object(n.jsx)(I.a,{value:"no",control:Object(n.jsx)(_.a,{color:"primary",size:"small"}),label:"Show portfolio percentage only"}),Object(n.jsx)(I.a,{value:"yes",control:Object(n.jsx)(_.a,{color:"primary",size:"small"}),label:"Show portfolio amounts in USD"})]})]})]}),Object(n.jsxs)(w.a,{style:{padding:l.spacing(6),marginBottom:l.spacing(2)},children:[Object(n.jsx)(x.a,{variant:"h6",children:"Confidential information"}),Object(n.jsx)(x.a,{variant:"caption",children:"Information entered in this section will NEVER be revealed on your site"}),Object(n.jsx)(v.a,{value:q,onChange:function(e){return G(e.target.value)},label:"Full name",fullWidth:!0}),Object(n.jsx)(v.a,{value:X,onChange:function(e){Z(e.target.value),ge("")},onBlur:function(){ve({email:X})},helperText:pe||"",error:!!pe,label:"Email",fullWidth:!0}),Object(n.jsx)(v.a,{value:te,onChange:function(e){ae(e.target.value),xe("")},onBlur:function(e){return ve({phone:te})},helperText:fe||"",error:!!fe,label:"Phone",fullWidth:!0})]}),b&&Object(n.jsx)(x.a,{color:"red",children:"Something went wrong :(. Please double check your information"}),Object(n.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},children:[!!o.subdomain&&Object(n.jsxs)("div",{children:[Object(n.jsx)(x.a,{children:"Check out your page: "}),Object(n.jsx)(k.a,{href:ye,children:ye})]}),Object(n.jsxs)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:se,children:[c?"Update":"Submit"," Information"]})]})]})]})},W=function(e){var t=e.advanceStep,a=e.userId,c=e.refresh,o=e.title,r=Object(i.useState)(""),s=Object(d.a)(r,2),l=s[0],u=s[1],b=Object(i.useState)(!1),g=Object(d.a)(b,2),m=g[0],O=g[1],f=Object(p.a)(),v=Object(i.useState)(!1),w=Object(d.a)(v,2),k=(w[0],w[1],Object(i.useState)({})),S=Object(d.a)(k,2),C=S[0],E=S[1],I=Object(i.useState)(!1),_=Object(d.a)(I,2),D=_[0],T=_[1],F=Object(i.useState)({preview:"",raw:"",name:""}),P=Object(d.a)(F,2),W=P[0],U=P[1];Object(i.useEffect)((function(){j.a.get("https://api.withlaguna.com/stonks/access/plaid_token/".concat(a),{params:{refresh:c}}).then((function(e){e.data.link_token?u(e.data.link_token):L()})).catch((function(){L()}))}),[]);var L=function(){O(!0)},B={token:l,onSuccess:Object(i.useCallback)((function(e,n){c?t():j.a.post("https://api.withlaguna.com/stonks/access/plaid/".concat(a),{token:e,metadata:n}).then((function(e){e.data.allow?t():L()}))}))},R=Object(h.usePlaidLink)(B),z=R.open,N=(R.ready,R.plaidError),Y=function(e){var t=e.replace(/[^\w\d_\-.]+/gi,"");j.a.get("https://api.withlaguna.com/stonks/access/sign/".concat(a),{params:{file_name:t}}).then((function(e){E(e.data)}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"h5",children:o}),Object(n.jsx)(x.a,{variant:"h4",children:"Connect your investment brokerage"}),Object(n.jsx)(x.a,{children:"Your portfolio is automatically monitored, and trades are immediately updated using Plaid, the standard in banking connections."}),Object(n.jsx)(x.a,{variant:"caption",children:"Only read access is allowed"}),(m||N)&&Object(n.jsx)(x.a,{children:" Something went wrong :( "}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:f.spacing(2),alignItems:"center"},children:[Object(n.jsx)(y.a,{onClick:function(){z()},style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},disabled:!!W.preview,children:"Connect bank account"}),Object(n.jsx)("div",{style:{marginLeft:f.spacing(2),marginRight:f.spacing(2)},children:"or"}),W.preview?D?Object(n.jsx)(A.a,{}):Object(n.jsxs)(y.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",fontWeight:800},onClick:function(e){T(!0),e.preventDefault(),console.log(C),console.log(W);var a=new FormData;Object.keys(C.fields).forEach((function(e){var t=C.fields[e];a.append(e,t)})),a.append("file",W.raw);var n={headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){!function(e){console.log(e)}(parseInt(Math.round(100*e.loaded/e.total)))}};j.a.post("".concat(C.url),a,n).then((function(e){t()})).catch(console.error("Uploading problemo")).finally(T(!1))},children:["Upload ",W.name]}):Object(n.jsxs)(y.a,{component:"label",style:{color:"linear-gradient(to top right, #A01A7D, #EC4067)"},children:["Manually upload trades(CSV)",Object(n.jsx)("input",{type:"file",hidden:!0,onChange:function(e){if(e.target.files.length){var t=e.target.value.split("\\").pop();U({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0],name:t}),Y(t)}}})]})]})]})},U=function(){var e=m()(),t=e.width,a=e.height;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a,{width:t,height:a}),Object(n.jsx)(x.a,{variant:"h4",children:"Your page is building! We'll send you an email when it's ready"}),Object(n.jsx)(x.a,{variant:"p1",children:"We've gotten reports that our emails are ending in your spam box. Please double-check there as well after ~5 min"}),Object(n.jsx)(x.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},L=function(){var e=m()(),t=e.width,a=e.height;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(f.a,{width:t,height:a}),Object(n.jsx)(x.a,{variant:"h4",children:"Thanks for updating your page :)"}),Object(n.jsx)(x.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},B=function(){var e=Object(i.useState)(1),t=Object(d.a)(e,2),a=t[0],c=t[1],o=Object(i.useState)(!1),r=Object(d.a)(o,2),s=r[0],l=r[1],u=Object(i.useState)(),h=Object(d.a)(u,2),b=h[0],g=h[1],m=Object(i.useState)(),O=Object(d.a)(m,2),f=O[0],x=O[1],v=Object(i.useState)({title:"",description:"",link:"",subdomain:"",show_amounts:"no",name:"",email:"",phone:"",plaid_connected:!1}),y=Object(d.a)(v,2),k=y[0],S=y[1],C=Object(p.a)();return Object(i.useEffect)((function(){var e=window.location.search,t=new URLSearchParams(e);t.get("plaid_refresh")&&(c(1),l(!0));var a=t.get("edit");a&&(c(1),x(a),j.a.get("https://api.withlaguna.com/stonks/access/edit_info",{params:{edit_id:a}}).then((function(e){var t=Object.assign({},e.data);t.show_amounts=t.show_amounts?"yes":"no",S(t)})).catch((function(e){console.log(e)})))}),[]),Object(n.jsx)(D.a,{container:!0,justify:"center",alignItems:"center",style:{minHeight:"100vh",backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)"},children:Object(n.jsx)(D.a,{item:!0,xs:11,sm:8,md:6,children:Object(n.jsx)(w.a,{style:{paddingTop:C.spacing(12),paddingBottom:C.spacing(12)},children:a>=0&&(0===a?Object(n.jsx)(F,{advanceStep:function(){return c(1)}}):1===a?Object(n.jsx)(P,{advanceStep:function(){return k.plaid_connected?"":c(2)},setUserId:g,refresh:s,editId:f,editDetails:k,setEditDetails:S}):2===a?Object(n.jsx)(W,{userId:b,advanceStep:function(){return c(3)},refresh:s,title:k.title}):3===a?Object(n.jsx)(U,{}):4===a?Object(n.jsx)(L,{}):Object(n.jsx)(n.Fragment,{}))})})})},R=Object(s.a)({typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")},palette:{secondary:{main:"#ffffff"}}});var z=function(){return Object(n.jsx)(l.a,{theme:R,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(B,{})})})},N=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,164)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),i(e),c(e),o(e)}))};r.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(z,{})}),document.getElementById("root")),N()},85:function(e,t,a){},86:function(e,t,a){}},[[117,1,2]]]);
//# sourceMappingURL=main.8242b048.chunk.js.map