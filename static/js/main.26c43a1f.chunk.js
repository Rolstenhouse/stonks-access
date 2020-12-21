(this["webpackJsonpstonks-access"]=this["webpackJsonpstonks-access"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(4),c=a(0),i=a.n(c),o=a(10),r=a.n(o),s=(a(81),a(82),a(64)),l=a(151),u=a(11),j=a(28),d=a.n(j),b=a(57),h=a(142),m=a(29),g=a(63),O=a.n(g),f=a(58),p=a.n(f),x=a(67),v=a(152),w=a(147),S=a(146),y=a(148),k=a(155),C=a(145),E=a(154),I=a(149),T=a(153),_=a(150),A=function(e){var t=e.advanceStep,a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],r=i[1],s=Object(c.useState)(!1),l=Object(u.a)(s,2),j=l[0],b=l[1],g=Object(m.a)(),O=function(){b(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(h.a,{}),Object(n.jsx)(x.a,{variant:"h4",children:"Enter your early access code"}),Object(n.jsxs)("form",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)(v.a,{label:"Early Access Code",error:j,value:o,onChange:function(e){return r(e.target.value)},placeholder:"OPEN SESAME",helperText:j&&"Invalid access code. Please try again :)"}),Object(n.jsx)(w.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginLeft:g.spacing(4)},onClick:function(e){b(!1),d.a.get("https://api.withlaguna.com/stonks/access/code/".concat(o)).then((function(e){e.data.allow?t():O()})).catch((function(){O()}))},children:"Enter"})]})]})},F=function(e){var t=e.advanceStep,a=e.setUserId,i=e.editId,o=e.editDetails,r=Object(m.a)(),s=Object(c.useState)(!1),l=Object(u.a)(s,2),j=l[0],b=l[1],h=function(){b(!0)},g=Object(c.useState)(o.title),O=Object(u.a)(g,2),f=O[0],p=O[1],_=Object(c.useState)(o.description),A=Object(u.a)(_,2),F=A[0],P=A[1],D=Object(c.useState)(o.link),W=Object(u.a)(D,2),B=W[0],L=W[1],z=Object(c.useState)(o.subdomain),N=Object(u.a)(z,2),U=N[0],R=N[1],Y=Object(c.useState)(o.name),H=Object(u.a)(Y,2),J=H[0],M=H[1],q=Object(c.useState)(o.email),V=Object(u.a)(q,2),G=V[0],K=V[1],Q=Object(c.useState)(o.phone),X=Object(u.a)(Q,2),Z=X[0],$=X[1],ee=Object(c.useState)(o.show_amounts),te=Object(u.a)(ee,2),ae=te[0],ne=te[1];Object(c.useEffect)((function(){p(o.title),P(o.description),L(o.link),R(o.subdomain),M(o.name),K(o.email),$(o.phone),ne(o.show_amounts)}),[o]);var ce=Object(c.useState)(""),ie=Object(u.a)(ce,2),oe=ie[0],re=ie[1],se=Object(c.useState)(""),le=Object(u.a)(se,2),ue=le[0],je=le[1],de=Object(c.useState)(""),be=Object(u.a)(de,2),he=be[0],me=be[1],ge=function(e){if(i){if(e.subdomain&&e.subdomain==o.subdomain)return;if(e.email&&e.email===o.email)return;if(e.phone&&e.phone===o.phone)return}d.a.get("https://api.withlaguna.com/stonks/access/check_unique",{params:e}).then((function(e){})).catch((function(){e.subdomain?re("Subdomain has already been claimed"):e.email?je("Email has already been claimed"):e.phone&&me("Phone has already been claimed")}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"h4",children:"Account creation and configuration"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)(S.a,{style:{padding:r.spacing(6),marginBottom:r.spacing(2)},children:[Object(n.jsx)(x.a,{variant:"h6",children:"Your page information"}),Object(n.jsxs)(x.a,{variant:"caption",children:["Used to customize your page :)"," ",Object(n.jsx)(y.a,{href:"https://rob.withlaguna.com",children:"Sample Site"})]}),Object(n.jsx)(v.a,{value:f,onChange:function(e){return p(e.target.value)},label:"Title",helperText:"Ex) Rob's Stonks",fullWidth:!0}),Object(n.jsx)(v.a,{value:F,onChange:function(e){return P(e.target.value)},label:"Description",helperText:"Ex) Trading on long-term horizons",fullWidth:!0}),Object(n.jsx)(v.a,{value:B,onChange:function(e){return L(e.target.value)},label:"Personal Bio Link (optional)",helperText:"Twitter handle, website, Linkedin, etc. Write as https://withterra.com",fullWidth:!0}),Object(n.jsx)(v.a,{value:U,onChange:function(e){R(e.target.value),re("")},onBlur:function(e){return ge({subdomain:U})},label:"Desired subdomain",helperText:oe||"i.e enter 'rob' if you want, rob.withlaguna.com",error:!!oe,fullWidth:!0}),Object(n.jsxs)(k.a,{component:"fieldset",margin:"none",fullWidth:!0,size:"small",style:{textAlign:"left",marginTop:r.spacing(1)},children:[Object(n.jsx)(C.a,{component:"legend",children:"Portfolio privacy setting"}),Object(n.jsxs)(E.a,{"aria-label":"show amounts",name:"Show portfolio amounts",value:ae,onChange:function(e){return ne(e.target.value)},children:[Object(n.jsx)(I.a,{value:"no",control:Object(n.jsx)(T.a,{color:"primary",size:"small"}),label:"Show portfolio percentage only"}),Object(n.jsx)(I.a,{value:"yes",control:Object(n.jsx)(T.a,{color:"primary",size:"small"}),label:"Show portfolio amounts in USD"})]})]})]}),Object(n.jsxs)(S.a,{style:{padding:r.spacing(6),marginBottom:r.spacing(2)},children:[Object(n.jsx)(x.a,{variant:"h6",children:"Confidential information"}),Object(n.jsx)(x.a,{variant:"caption",children:"Information entered in this section will NEVER be revealed on your site"}),Object(n.jsx)(v.a,{value:J,onChange:function(e){return M(e.target.value)},label:"Full name",fullWidth:!0}),Object(n.jsx)(v.a,{value:G,onChange:function(e){K(e.target.value),je("")},onBlur:function(){ge({email:G})},helperText:ue||"",error:!!ue,label:"Email",fullWidth:!0}),Object(n.jsx)(v.a,{value:Z,onChange:function(e){$(e.target.value),me("")},onBlur:function(e){return ge({phone:Z})},helperText:he||"",error:!!he,label:"Phone",fullWidth:!0})]}),j&&Object(n.jsx)(x.a,{color:"red",children:"Something went wrong :(. Please double check your information"}),Object(n.jsx)(w.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:function(e){b(!1),d.a.post("https://api.withlaguna.com/stonks/access/form",{title:f,description:F,link:B,subdomain:U,name:J,email:G,phone:Z,show_amounts:"yes"===ae,edit:i}).then((function(e){e.data.allow?(a(e.data.id),t()):h()})).catch((function(){h()}))},children:"Submit Information"})]})]})},P=function(e){var t=e.advanceStep,a=e.userId,i=e.refresh,o=Object(c.useState)(""),r=Object(u.a)(o,2),s=r[0],l=r[1],j=Object(c.useState)(!1),h=Object(u.a)(j,2),g=h[0],O=h[1],f=Object(m.a)();Object(c.useEffect)((function(){d.a.get("https://api.withlaguna.com/stonks/access/plaid_token/".concat(a),{params:{refresh:i}}).then((function(e){e.data.link_token?l(e.data.link_token):p()})).catch((function(){p()}))}),[]);var p=function(){O(!0)},v={token:s,onSuccess:Object(c.useCallback)((function(e,n){i?t():d.a.post("https://api.withlaguna.com/stonks/access/plaid/".concat(a),{token:e,metadata:n}).then((function(e){e.data.allow?t():p()}))}))},S=Object(b.usePlaidLink)(v),y=S.open,k=(S.ready,S.plaidError);return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"h4",children:"Connect your investment brokerage"}),Object(n.jsx)(x.a,{children:"Your portfolio is automatically monitored, and trades are immediately updated using Plaid, the standard in banking connections."}),Object(n.jsx)(x.a,{variant:"caption",children:"Only read access is allowed"}),(g||k)&&Object(n.jsx)(x.a,{children:" Something went wrong :( "}),Object(n.jsx)(w.a,{onClick:function(){y()},style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",display:"flex",margin:"auto",marginTop:f.spacing(2)},children:"Connect bank account"})]})},D=function(){var e=O()(),t=e.width,a=e.height;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(p.a,{width:t,height:a}),Object(n.jsx)(x.a,{variant:"h4",children:"Your page is building! We'll send you an email when it's ready"}),Object(n.jsx)(x.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},W=function(){var e=Object(c.useState)(1),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!1),r=Object(u.a)(o,2),s=r[0],l=r[1],j=Object(c.useState)(),b=Object(u.a)(j,2),h=b[0],g=b[1],O=Object(c.useState)(),f=Object(u.a)(O,2),p=f[0],x=f[1],v=Object(c.useState)({title:"",description:"",link:"",subdomain:"",show_amounts:"no",name:"",email:"",phone:""}),w=Object(u.a)(v,2),y=w[0],k=w[1],C=Object(m.a)();return Object(c.useEffect)((function(){var e=window.location.search,t=new URLSearchParams(e),a=t.get("plaid_refresh");a&&(i(2),l(!0),g(a));var n=t.get("plaid_login");n&&(i(2),g(n));var c=t.get("edit");c&&(i(1),x(c),d.a.get("https://api.withlaguna.com/stonks/access/edit_info",{params:{edit:c}}).then((function(e){var t=Object.assign({},e.data);t.show_amounts=t.show_amounts?"yes":"no",console.log(t),k(t)})).catch((function(e){console.log(e)})))}),[]),Object(n.jsx)(_.a,{container:!0,justify:"center",alignItems:"center",style:{minHeight:"100vh",backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)"},children:Object(n.jsx)(_.a,{item:!0,xs:11,sm:8,md:6,children:Object(n.jsx)(S.a,{style:{paddingTop:C.spacing(12),paddingBottom:C.spacing(12)},children:a>=0&&(0===a?Object(n.jsx)(A,{advanceStep:function(){return i(1)}}):1===a?Object(n.jsx)(F,{advanceStep:function(){return i(2)},setUserId:g,editId:p,editDetails:y}):2===a?Object(n.jsx)(P,{userId:h,advanceStep:function(){return i(3)},refresh:s}):3===a?Object(n.jsx)(D,{}):Object(n.jsx)(n.Fragment,{}))})})})},B=Object(s.a)({typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")},palette:{secondary:{main:"#ffffff"}}});var L=function(){return Object(n.jsx)(l.a,{theme:B,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(W,{})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,156)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(L,{})}),document.getElementById("root")),z()},81:function(e,t,a){},82:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.26c43a1f.chunk.js.map