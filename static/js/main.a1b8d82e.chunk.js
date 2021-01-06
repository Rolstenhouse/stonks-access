(this["webpackJsonpstonks-access"]=this["webpackJsonpstonks-access"]||[]).push([[0],{110:function(e,t,a){"use strict";a.r(t);var n=a(3),c=a(0),i=a.n(c),o=a(11),r=a.n(o),s=(a(81),a(82),a(64)),l=a(152),u=a(10),d=a(18),j=a.n(d),h=a(59),b=a(142),g=a(29),p=a(47),m=a.n(p),f=a(46),O=a.n(f),x=a(67),v=a(153),w=a(147),y=a(146),S=a(148),k=a(156),C=a(145),E=a(155),I=a(149),A=a(154),T=a(150),F=a(151),_=function(e){var t=e.advanceStep,a=Object(c.useState)(""),i=Object(u.a)(a,2),o=i[0],r=i[1],s=Object(c.useState)(!1),l=Object(u.a)(s,2),d=l[0],h=l[1],p=Object(g.a)(),m=function(){h(!0)};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(b.a,{}),Object(n.jsx)(x.a,{variant:"h4",children:"Enter your early access code"}),Object(n.jsxs)("form",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(n.jsx)(v.a,{label:"Early Access Code",error:d,value:o,onChange:function(e){return r(e.target.value)},placeholder:"OPEN SESAME",helperText:d&&"Invalid access code. Please try again :)"}),Object(n.jsx)(w.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginLeft:p.spacing(4)},onClick:function(e){h(!1),j.a.get("https://api.withlaguna.com/stonks/access/code/".concat(o)).then((function(e){e.data.allow?t():m()})).catch((function(){m()}))},children:"Enter"})]})]})},D=function(e){var t=e.advanceStep,a=e.setUserId,i=e.editId,o=e.editDetails,r=Object(g.a)(),s=Object(c.useState)(!1),l=Object(u.a)(s,2),d=l[0],h=l[1],b=function(){h(!0)},p=Object(c.useState)(o.title),m=Object(u.a)(p,2),f=m[0],O=m[1],T=Object(c.useState)(o.description),F=Object(u.a)(T,2),_=F[0],D=F[1],P=Object(c.useState)(o.link),W=Object(u.a)(P,2),L=W[0],U=W[1],B=Object(c.useState)(o.subdomain),R=Object(u.a)(B,2),z=R[0],N=R[1],M=Object(c.useState)(o.name),Y=Object(u.a)(M,2),H=Y[0],J=Y[1],V=Object(c.useState)(o.email),q=Object(u.a)(V,2),G=q[0],K=q[1],Q=Object(c.useState)(o.phone),X=Object(u.a)(Q,2),Z=X[0],$=X[1],ee=Object(c.useState)(o.show_amounts),te=Object(u.a)(ee,2),ae=te[0],ne=te[1];Object(c.useEffect)((function(){O(o.title),D(o.description),U(o.link),N(o.subdomain),J(o.name),K(o.email),$(o.phone),ne(o.show_amounts)}),[o]);var ce=Object(c.useState)(""),ie=Object(u.a)(ce,2),oe=ie[0],re=ie[1],se=Object(c.useState)(""),le=Object(u.a)(se,2),ue=le[0],de=le[1],je=Object(c.useState)(""),he=Object(u.a)(je,2),be=he[0],ge=he[1],pe=function(e){if(i){if(e.subdomain&&e.subdomain==o.subdomain)return;if(e.email&&e.email===o.email)return;if(e.phone&&e.phone===o.phone)return}j.a.get("https://api.withlaguna.com/stonks/access/check_unique",{params:e}).then((function(e){})).catch((function(){e.subdomain?re("Subdomain has already been claimed"):e.email?de("Email has already been claimed"):e.phone&&ge("Phone has already been claimed")}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"h4",children:"Account creation and configuration"}),Object(n.jsxs)("form",{children:[Object(n.jsxs)(y.a,{style:{padding:r.spacing(6),marginBottom:r.spacing(2)},children:[Object(n.jsx)(x.a,{variant:"h6",children:"Your page information"}),Object(n.jsxs)(x.a,{variant:"caption",children:["Used to customize your page :)"," ",Object(n.jsx)(S.a,{href:"https://rob.withlaguna.com",children:"Sample Site"})]}),Object(n.jsx)(v.a,{value:f,onChange:function(e){return O(e.target.value)},label:"Title",helperText:"Ex) Rob's Stonks",fullWidth:!0}),Object(n.jsx)(v.a,{value:_,onChange:function(e){return D(e.target.value)},label:"Description",helperText:"Ex) Trading on long-term horizons",fullWidth:!0}),Object(n.jsx)(v.a,{value:L,onChange:function(e){return U(e.target.value)},label:"Personal Bio Link (optional)",helperText:"Twitter handle, website, Linkedin, etc. Write as https://withterra.com",fullWidth:!0}),Object(n.jsx)(v.a,{value:z,onChange:function(e){N(e.target.value),re("")},onBlur:function(e){return pe({subdomain:z})},label:"Desired subdomain",helperText:oe||"i.e enter 'rob' if you want, rob.withlaguna.com",error:!!oe,fullWidth:!0}),Object(n.jsxs)(k.a,{component:"fieldset",margin:"none",fullWidth:!0,size:"small",style:{textAlign:"left",marginTop:r.spacing(1)},children:[Object(n.jsx)(C.a,{component:"legend",children:"Portfolio privacy setting"}),Object(n.jsxs)(E.a,{"aria-label":"show amounts",name:"Show portfolio amounts",value:ae,onChange:function(e){return ne(e.target.value)},children:[Object(n.jsx)(I.a,{value:"no",control:Object(n.jsx)(A.a,{color:"primary",size:"small"}),label:"Show portfolio percentage only"}),Object(n.jsx)(I.a,{value:"yes",control:Object(n.jsx)(A.a,{color:"primary",size:"small"}),label:"Show portfolio amounts in USD"})]})]})]}),Object(n.jsxs)(y.a,{style:{padding:r.spacing(6),marginBottom:r.spacing(2)},children:[Object(n.jsx)(x.a,{variant:"h6",children:"Confidential information"}),Object(n.jsx)(x.a,{variant:"caption",children:"Information entered in this section will NEVER be revealed on your site"}),Object(n.jsx)(v.a,{value:H,onChange:function(e){return J(e.target.value)},label:"Full name",fullWidth:!0}),Object(n.jsx)(v.a,{value:G,onChange:function(e){K(e.target.value),de("")},onBlur:function(){pe({email:G})},helperText:ue||"",error:!!ue,label:"Email",fullWidth:!0}),Object(n.jsx)(v.a,{value:Z,onChange:function(e){$(e.target.value),ge("")},onBlur:function(e){return pe({phone:Z})},helperText:be||"",error:!!be,label:"Phone",fullWidth:!0})]}),d&&Object(n.jsx)(x.a,{color:"red",children:"Something went wrong :(. Please double check your information"}),Object(n.jsx)(w.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:function(e){h(!1),j.a.post("https://api.withlaguna.com/stonks/access/form",{title:f,description:_,link:L,subdomain:z,name:H,email:G,phone:Z,show_amounts:"yes"===ae,edit:i}).then((function(e){e.data.allow?(a(e.data.id),t()):b()})).catch((function(){b()}))},children:"Submit Information"})]})]})},P=function(e){var t=e.advanceStep,a=e.userId,i=e.refresh,o=Object(c.useState)(""),r=Object(u.a)(o,2),s=r[0],l=r[1],d=Object(c.useState)(!1),b=Object(u.a)(d,2),p=b[0],m=b[1],f=Object(g.a)(),O=Object(c.useState)(!1),v=Object(u.a)(O,2),y=(v[0],v[1],Object(c.useState)({})),S=Object(u.a)(y,2),k=S[0],C=S[1],E=Object(c.useState)(!1),I=Object(u.a)(E,2),A=I[0],F=I[1],_=Object(c.useState)({preview:"",raw:"",name:""}),D=Object(u.a)(_,2),P=D[0],W=D[1];Object(c.useEffect)((function(){j.a.get("https://api.withlaguna.com/stonks/access/plaid_token/".concat(a),{params:{refresh:i}}).then((function(e){e.data.link_token?l(e.data.link_token):L()})).catch((function(){L()}))}),[]);var L=function(){m(!0)},U={token:s,onSuccess:Object(c.useCallback)((function(e,n){i?t():j.a.post("https://api.withlaguna.com/stonks/access/plaid/".concat(a),{token:e,metadata:n}).then((function(e){e.data.allow?t():L()}))}))},B=Object(h.usePlaidLink)(U),R=B.open,z=(B.ready,B.plaidError),N=function(e){var t=e.replace(/[^\w\d_\-.]+/gi,"");j.a.get("https://api.withlaguna.com/stonks/access/sign/".concat(a),{file_name:t}).then((function(e){C(e.data)}))};return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(x.a,{variant:"h4",children:"Connect your investment brokerage"}),Object(n.jsx)(x.a,{children:"Your portfolio is automatically monitored, and trades are immediately updated using Plaid, the standard in banking connections."}),Object(n.jsx)(x.a,{variant:"caption",children:"Only read access is allowed"}),(p||z)&&Object(n.jsx)(x.a,{children:" Something went wrong :( "}),Object(n.jsxs)("div",{style:{display:"flex",justifyContent:"center",marginTop:f.spacing(2),alignItems:"center"},children:[Object(n.jsx)(w.a,{onClick:function(){R()},style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},disabled:!!P.preview,children:"Connect bank account"}),Object(n.jsx)("div",{style:{marginLeft:f.spacing(2),marginRight:f.spacing(2)},children:"or"}),P.preview?A?Object(n.jsx)(T.a,{}):Object(n.jsxs)(w.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",fontWeight:800},onClick:function(e){F(!0),e.preventDefault(),console.log(k),console.log(P);var a=new FormData;Object.keys(k.fields).forEach((function(e){var t=k.fields[e];a.append(e,t)})),a.append("file",P.raw);var n={headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){!function(e){console.log(e)}(parseInt(Math.round(100*e.loaded/e.total)))}};j.a.post("".concat(k.url),a,n).then((function(e){t()})).catch(console.error("Uploading problemo")).finally(F(!1))},children:["Upload ",P.name]}):Object(n.jsxs)(w.a,{component:"label",style:{color:"linear-gradient(to top right, #A01A7D, #EC4067)"},children:["Manually upload trades(CSV)",Object(n.jsx)("input",{type:"file",hidden:!0,onChange:function(e){if(e.target.files.length){var t=e.target.value.split("\\").pop();W({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0],name:t}),N(t)}}})]})]})]})},W=function(){var e=m()(),t=e.width,a=e.height;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O.a,{width:t,height:a}),Object(n.jsx)(x.a,{variant:"h4",children:"Your page is building! We'll send you an email when it's ready"}),Object(n.jsx)(x.a,{variant:"p1",children:"We've gotten reports that our emails are ending in your spam box. Please double-check there as well after ~5 min"}),Object(n.jsx)(x.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},L=function(){var e=m()(),t=e.width,a=e.height;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O.a,{width:t,height:a}),Object(n.jsx)(x.a,{variant:"h4",children:"Thanks for updating your page :)"}),Object(n.jsx)(x.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},U=function(){var e=Object(c.useState)(1),t=Object(u.a)(e,2),a=t[0],i=t[1],o=Object(c.useState)(!1),r=Object(u.a)(o,2),s=r[0],l=r[1],d=Object(c.useState)(),h=Object(u.a)(d,2),b=h[0],p=h[1],m=Object(c.useState)(),f=Object(u.a)(m,2),O=f[0],x=f[1],v=Object(c.useState)({title:"",description:"",link:"",subdomain:"",show_amounts:"no",name:"",email:"",phone:""}),w=Object(u.a)(v,2),S=w[0],k=w[1],C=Object(g.a)();return Object(c.useEffect)((function(){var e=window.location.search,t=new URLSearchParams(e),a=t.get("plaid_refresh");a&&(i(2),l(!0),p(a));var n=t.get("plaid_login");n&&(i(2),p(n));var c=t.get("edit");c&&(i(1),x(c),j.a.get("https://api.withlaguna.com/stonks/access/edit_info",{params:{edit:c}}).then((function(e){var t=Object.assign({},e.data);t.show_amounts=t.show_amounts?"yes":"no",console.log(t),k(t)})).catch((function(e){console.log(e)})))}),[]),Object(n.jsx)(F.a,{container:!0,justify:"center",alignItems:"center",style:{minHeight:"100vh",backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)"},children:Object(n.jsx)(F.a,{item:!0,xs:11,sm:8,md:6,children:Object(n.jsx)(y.a,{style:{paddingTop:C.spacing(12),paddingBottom:C.spacing(12)},children:a>=0&&(0===a?Object(n.jsx)(_,{advanceStep:function(){return i(1)}}):1===a?Object(n.jsx)(D,{advanceStep:function(){return i(O?4:2)},setUserId:p,editId:O,editDetails:S}):2===a?Object(n.jsx)(P,{userId:b,advanceStep:function(){return i(3)},refresh:s}):3===a?Object(n.jsx)(W,{}):4===a?Object(n.jsx)(L,{}):Object(n.jsx)(n.Fragment,{}))})})})},B=Object(s.a)({typography:{fontFamily:["Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")},palette:{secondary:{main:"#ffffff"}}});var R=function(){return Object(n.jsx)(l.a,{theme:B,children:Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(U,{})})})},z=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,157)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),i(e),o(e)}))};r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(R,{})}),document.getElementById("root")),z()},81:function(e,t,a){},82:function(e,t,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.a1b8d82e.chunk.js.map