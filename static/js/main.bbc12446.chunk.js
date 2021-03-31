(this["webpackJsonpstonks-access"]=this["webpackJsonpstonks-access"]||[]).push([[0],{238:function(e,t,n){},239:function(e,t,n){},371:function(e,t){},373:function(e,t){},390:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n(0),i=n.n(c),r=n(14),s=n.n(r),o=(n(238),n(239),n(219)),l=n(465),d=n(207),j=n(26),b=n(50),u=n(8),h=n(16),p=n.n(h),O=n(208),g=n(19),m=n(121),x=n.n(m),f=n(120),v=n.n(f),y=n(51),k=(n(221),n(426)),w=n(430),C=n(472),S=n(437),I=n(438),_=n(439),E=n(440),F=n(63);var A=n(113),D=n(114),T=n(119),P=n(118),N=n(441),B=function(e){Object(T.a)(n,e);var t=Object(P.a)(n);function n(e){return Object(A.a)(this,n),t.call(this,e)}return Object(D.a)(n,[{key:"render",value:function(){var e=this;return Object(a.jsxs)(k.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{value:this.props.ticker,placeholder:"AAPL/CASH",InputProps:{style:{color:""==this.props.ticker?void 0:this.props.color}},inputProps:{style:{textTransform:"uppercase"}},onChange:function(t){e.props.handleEdit(t.target.value.toUpperCase(),parseFloat(e.props.weight),e.props.index)}})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(F.a,{allowNegative:!1,decimalScale:"1",customInput:C.a,placeholder:this.props.weightPlace,InputProps:{endAdornment:Object(a.jsx)(N.a,{position:"start",children:"%"})},value:this.props.weight,onValueChange:function(t){e.props.handleEdit(e.props.ticker,t.floatValue,e.props.index)}})})]})}}]),n}(i.a.Component),U=n(213),W=["#0074D9","#FF4136","#2ECC40","#FF851B","#7FDBFF","#B10DC9","#FFDC00","#001f3f","#39CCCC","#01FF70","#85144b","#F012BE","#3D9970","#111111","#AAAAAA"],M="#f1f5f8",L="#719bb9",R="#F4EAF2",H="#932b7a",Y=n(65),z="https://api.withlaguna.com",V=function(e){Object(T.a)(n,e);var t=Object(P.a)(n);function n(e){var a;return Object(A.a)(this,n),(a=t.call(this,e)).componentDidMount=function(){p.a.get("".concat(z,"/stonks/holdings/manual"),{params:{edit_id:a.props.editId}}).then((function(e){a.setState({trades:[].concat(Object(b.a)(e.data.holdings),[{ticker:"",weight:null}])},(function(){a.calculateWeight()}))}))},a.handleCreate=function(){p.a.post("".concat(z,"/stonks/holdings/create"),{user_id:a.props.userId,edit_id:a.props.editId,portfolio:a.state.trades.filter((function(e){return!isNaN(e.weight)&&""!=e.ticker}))}).then((function(e){a.props.advanceStep&&a.props.advanceStep(8)})).catch((function(e){if(e.response){var t=e.response.data.errMsg;a.setState({errMsg:t})}}))},a.calculateWeight=function(){var e=!0,t=a.state.trades.reduce((function(e,t){return e+(t.weight?parseFloat(t.weight):0)}),0);100!=t&&(e=!1),a.setState({total_weight:t,validPortfolio:e})},a.handleHoldingEdit=function(e,t,n){var c=!0,i=a.state.trades;n+1>=i.length&&""!=e&&!isNaN(t)&&i.push({ticker:"",weight:null}),i[n]={weight:t,ticker:e};var r=i.reduce((function(e,t){return e+(t.weight?parseFloat(t.weight):0)}),0);100!=r&&(c=!1);var s=void 0;i.reduce((function(t,a,c){return t||a.ticker==e&&n!=c&&""!=e}),!1)&&(s="Duplicate ticker: ".concat(e),c=!1),a.setState({trades:i,total_weight:r,errMsg:s,validPortfolio:c})},a.state={trades:[{ticker:"",weight:null}],total_weight:0,validPortfolio:!1},a}return Object(D.a)(n,[{key:"render",value:function(){var e=this,t=this.state.trades.map((function(e,t){var n=isNaN(e.weight)?0:e.weight;return{title:e.ticker,value:n,color:W[t%W.length]}}));return Object(a.jsxs)("div",{children:[Object(a.jsx)(Y.a,{variant:"h4",children:"Manual holdings"}),Object(a.jsx)(Y.a,{style:{color:"gray"},variant:"subtitle1",children:"Ensure your percentages add up to 100%"}),Object(a.jsxs)("div",{style:{display:"flex",alignItems:"flex-start",marginTop:20},children:[Object(a.jsxs)("div",{style:{flexGrow:"1",marginLeft:20},children:[Object(a.jsxs)(I.a,{children:[Object(a.jsx)(_.a,{children:Object(a.jsx)(k.a,{style:{backgroundColor:M},children:["Ticker","Percent"].map((function(e){return Object(a.jsx)(w.a,{children:Object(a.jsx)("b",{children:e})})}))})}),Object(a.jsx)(E.a,{children:this.state.trades.map((function(t,n){return Object(a.jsx)(B,{weightPlace:(100-e.state.total_weight).toFixed(1),handleEdit:e.handleHoldingEdit,ticker:t.ticker,weight:t.weight,index:n,color:W[n%W.length]})}))}),void 0!=this.state.errMsg&&Object(a.jsx)(Y.a,{variant:"caption",style:{color:"red",textAlign:"left",marginTop:5},children:this.state.errMsg})]}),Object(a.jsxs)("div",{style:{textAlign:"right",marginTop:5},children:["Total:"," ",Object(a.jsxs)("span",{style:{color:this.state.total_weight<=100?"green":"red"},children:[this.state.total_weight,"%"," "]})," ","of 100%"]}),Object(a.jsx)(S.a,{disabled:!this.state.validPortfolio,onClick:this.handleCreate,style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",opacity:this.state.validPortfolio?1:.5,marginTop:20},children:this.props.editId?"Update Portfolio":"Create Portfolio"})]}),Object(a.jsx)(U.PieChart,{style:{flexGrow:"1"},radius:20,lineWidth:15,viewBoxSize:[100,100],center:[50,30],lengthAngle:Math.min(this.state.total_weight/100*360,360),data:t})]})]})}}]),n}(i.a.Component),G=n(442),J=n(443),q=n(444),K=n(445),Q=n(447),X=n(454),Z=n(466),$=n(446),ee=n(448),te=n(391),ne=n(433),ae=n(434),ce=n(473),ie=n(450),re=n(468),se=n(451),oe=n(452),le=n(453),de=n(449),je=n(469),be="https://api.withlaguna.com",ue={twitter:G.a,youtube:J.a,general:q.a,newsletter:K.a},he=function(e){var t=e.links,n=e.setLinks,i=Object.keys(ue).map((function(e){return{link_type:e,url:""}})).filter((function(e){return!t.map((function(e){return e.link_type})).includes(e.link_type)})),r=Object(c.useState)({link_type:"",url:""}),s=Object(u.a)(r,2),o=s[0],l=s[1];return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(I.a,{children:[Object(a.jsx)(_.a,{children:Object(a.jsx)(k.a,{children:["Social media links (up to 4)","URL",""].map((function(e){return Object(a.jsx)(w.a,{children:e})}))})}),Object(a.jsxs)(E.a,{children:[t.map((function(e,c){var i=ue[e.link_type];return Object(a.jsxs)(k.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(i,{})}),Object(a.jsx)(w.a,{children:e.url}),Object(a.jsx)(w.a,{children:Object(a.jsx)(S.a,{style:{backgroundColor:"#EC4067",color:"white"},onClick:function(){return function(e){var a=t;a.splice(e,1),n(Object(b.a)(a))}(c)},children:"Delete"})})]})})),t.length<4&&Object(a.jsxs)(k.a,{children:[Object(a.jsxs)(w.a,{children:[Object(a.jsx)(Z.a,{value:o.link_type,onChange:function(e){return l(Object(j.a)(Object(j.a)({},o),{},{link_type:e.target.value}))},children:i.map((function(e){var t=ue[e.link_type];return Object(a.jsx)($.a,{value:e.link_type,children:Object(a.jsx)(t,{})})}))}),Object(a.jsx)(Y.a,{variant:"caption",children:o.link_type})]}),Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{value:o.url,onChange:function(e){return l(Object(j.a)(Object(j.a)({},o),{},{url:e.target.value}))}})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(S.a,{onClick:function(){n([].concat(Object(b.a)(t),[o])),l({link_type:"",url:""})},style:{backgroundColor:"#729FBF",color:"white"},children:"Add"})})]})]})]})})},pe=function(e){var t=e.advanceStep,n=Object(c.useState)(""),i=Object(u.a)(n,2),r=i[0],s=i[1],o=Object(c.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(g.a)(),h=function(){j(!0)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Q.a,{}),Object(a.jsx)(Y.a,{variant:"h4",children:"Enter your early access code"}),Object(a.jsxs)("form",{style:{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"},children:[Object(a.jsx)(C.a,{label:"Early Access Code",error:d,value:r,onChange:function(e){return s(e.target.value)},placeholder:"OPEN SESAME",helperText:d&&"Invalid access code. Please try again :)"}),Object(a.jsx)(S.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginLeft:b.spacing(4)},onClick:function(e){j(!1),p.a.get("".concat(be,"/stonks/access/code/").concat(r)).then((function(e){e.data.allow?t():h()})).catch((function(){h()}))},children:"Enter"})]})]})},Oe=function(e){var t=e.onFormSubmit,n=e.setUserId,i=e.editId,r=e.editDetails,s=e.setEditDetails,o=e.refresh,l=Object(g.a)(),d=Object(c.useState)(!1),j=Object(u.a)(d,2),b=j[0],h=j[1],O=Object(c.useState)(r.title),m=Object(u.a)(O,2),x=m[0],f=m[1],v=Object(c.useState)(r.description),y=Object(u.a)(v,2),k=y[0],w=y[1],I=Object(c.useState)(r.link),_=Object(u.a)(I,2),E=_[0],F=_[1],A=Object(c.useState)(r.subdomain),D=Object(u.a)(A,2),T=D[0],P=D[1],N=Object(c.useState)(r.name),B=Object(u.a)(N,2),U=B[0],W=B[1],M=Object(c.useState)(r.email),L=Object(u.a)(M,2),R=L[0],H=L[1],z=Object(c.useState)(r.phone),V=Object(u.a)(z,2),G=V[0],J=V[1],q=Object(c.useState)(r.show_amounts),K=Object(u.a)(q,2),Q=K[0],X=K[1],Z=Object(c.useState)(""),$=Object(u.a)(Z,2),se=($[0],$[1]),oe=Object(c.useState)(r.links),le=Object(u.a)(oe,2),de=le[0],ue=le[1];Object(c.useEffect)((function(){f(r.title),w(r.description),F(r.link),P(r.subdomain),W(r.name),H(r.email),J(r.phone),X(r.show_amounts),ue(r.links),i&&p.a.post("".concat(be,"/stonks/access/exchange"),{edit_id:i}).then((function(e){se(e.data.user)}))}),[r]);var pe=r.plaid_connected!=!!r.subdomain,Oe=function(e){h(!1),p.a.post("".concat(be,"/stonks/access/form"),{title:x,description:k,link:E,subdomain:T,name:U,email:R,phone:G,show_amounts:"yes"===Q,edit_id:i,links:de}).then((function(e){e.data.allow?(n(e.data.id),s({title:x,description:k,link:E,subdomain:T,show_amounts:Q?"yes":"no",name:U,email:R,phone:G,plaid_connected:r.plaid_connected,editUrl:e.data.editUrl,links:de}),t()):h("An undescribed error occurred")})).catch((function(e){e.response?h(e.response.data.err):h("Please email support@withlaguna.com")}))},ge=Object(c.useState)(""),me=Object(u.a)(ge,2),xe=me[0],fe=me[1],ve=Object(c.useState)(""),ye=Object(u.a)(ve,2),ke=ye[0],we=ye[1],Ce=Object(c.useState)(""),Se=Object(u.a)(Ce,2),Ie=Se[0],_e=Se[1],Ee=function(e){if(i){if(e.subdomain&&e.subdomain==r.subdomain)return;if(e.email&&e.email===r.email)return;if(e.phone&&e.phone===r.phone)return}p.a.get("".concat(be,"/stonks/access/check_unique"),{params:e}).then((function(e){})).catch((function(){e.subdomain?fe("Subdomain has already been claimed"):e.email?we("Email has already been claimed"):e.phone&&_e("Phone has already been claimed")}))},Fe="https://".concat(r.subdomain,".withlaguna.com");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y.a,{variant:"h4",style:{marginBottom:l.spacing(2)},children:Object(a.jsx)("b",{children:"Account creation and configuration"})}),!i&&Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(Y.a,{variant:"h6",children:Object(a.jsx)(ee.a,{href:"/#/signin",children:"Sign in"})})}),pe&&Object(a.jsxs)("div",{style:{padding:l.spacing(4)},children:[Object(a.jsx)(je.a,{severity:"error",children:"Your page is live, but your brokerage hasn't been connected yet"}),Object(a.jsx)(S.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:Oe,children:"Import your trades"})]}),o&&Object(a.jsxs)("div",{style:{padding:l.spacing(4)},children:[Object(a.jsx)(je.a,{severity:"warning",children:"Your brokerage credentials have expired. Please re-log them"}),Object(a.jsx)(S.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:Oe,children:"Reconnect"})]}),Object(a.jsxs)("form",{children:[Object(a.jsxs)(te.a,{style:{padding:l.spacing(6),marginBottom:l.spacing(2)},children:[Object(a.jsx)(Y.a,{variant:"h6",children:"Your page information"}),Object(a.jsxs)(Y.a,{variant:"caption",children:[Object(a.jsx)("b",{children:"Used to customize your page :) "}),Object(a.jsx)(ee.a,{href:"https://rob.withlaguna.com",children:"Sample Site"})]}),Object(a.jsx)(C.a,{value:x,onChange:function(e){return f(e.target.value)},label:"Title",helperText:"Ex) Rob's Stonks",fullWidth:!0,style:{marginTop:l.spacing(2)}}),Object(a.jsx)(C.a,{value:k,onChange:function(e){return w(e.target.value)},label:"Description",helperText:"Ex) Trading on long-term horizons",fullWidth:!0,style:{marginTop:l.spacing(2)}}),Object(a.jsx)(he,{links:de,setLinks:ue}),Object(a.jsx)(C.a,{value:T,onChange:function(e){var t=e.target.value;t=t.replace(/\W/g,""),P(t),fe("")},onBlur:function(e){return Ee({subdomain:T})},label:"Desired subdomain",helperText:xe||"i.e 'rob' would look like, rob.withlaguna.com",error:!!xe,fullWidth:!0,style:{marginTop:l.spacing(2)}}),Object(a.jsxs)(ne.a,{component:"fieldset",margin:"none",fullWidth:!0,size:"small",style:{textAlign:"left",marginTop:l.spacing(1)},children:[Object(a.jsx)(ae.a,{component:"legend",children:"Portfolio privacy setting"}),Object(a.jsxs)(ce.a,{"aria-label":"show amounts",name:"Show portfolio amounts",value:Q,onChange:function(e){return X(e.target.value)},children:[Object(a.jsx)(ie.a,{value:"no",control:Object(a.jsx)(re.a,{color:"primary",size:"small"}),label:"Show portfolio percentage only"}),Object(a.jsx)(ie.a,{value:"yes",control:Object(a.jsx)(re.a,{color:"primary",size:"small"}),label:"Show portfolio amounts in USD"})]})]})]}),Object(a.jsxs)(te.a,{style:{padding:l.spacing(6),marginBottom:l.spacing(2)},children:[Object(a.jsx)(Y.a,{variant:"h6",children:"Confidential information"}),Object(a.jsx)(Y.a,{variant:"caption",children:"Information entered in this section will NEVER be revealed on your site"}),Object(a.jsx)(C.a,{value:U,onChange:function(e){return W(e.target.value)},label:"Full name",fullWidth:!0,style:{marginTop:l.spacing(2)}}),Object(a.jsx)(C.a,{value:R,style:{marginTop:l.spacing(2)},onChange:function(e){H(e.target.value),we("")},onBlur:function(){Ee({email:R})},helperText:ke||"",error:!!ke,label:"Email",fullWidth:!0}),Object(a.jsx)(C.a,{style:{marginTop:l.spacing(2)},value:G,onChange:function(e){J(e.target.value),_e("")},onBlur:function(e){return Ee({phone:G})},helperText:Ie||"",error:!!Ie,label:"Phone",fullWidth:!0})]}),b&&Object(a.jsx)(Y.a,{color:"red",children:b}),Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-around",alignItems:"center"},children:[!!r.subdomain&&Object(a.jsxs)("div",{children:[Object(a.jsx)(Y.a,{children:"Check out your page: "}),Object(a.jsx)(ee.a,{href:Fe,children:Fe})]}),Object(a.jsxs)(S.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:Oe,children:[i?"Update":"Submit"," Information"]})]})]})]})},ge=function(e){var t=e.userId,n=e.advanceStep,i=Object(c.useState)(!1),r=Object(u.a)(i,2),s=(r[0],r[1],Object(c.useState)({})),o=Object(u.a)(s,2),l=o[0],d=o[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),h=b[0],O=b[1],g=Object(c.useState)({preview:"",raw:"",name:""}),m=Object(u.a)(g,2),x=m[0],f=m[1],v=function(e){var n=e.replace(/[^\w\d_\-.]+/gi,"");p.a.get("".concat(be,"/stonks/access/sign/").concat(t),{params:{file_name:n}}).then((function(e){d(e.data)}))};return Object(a.jsx)(a.Fragment,{children:x.preview?h?Object(a.jsx)(se.a,{}):Object(a.jsxs)(S.a,{style:{backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)",color:"white",fontWeight:800},onClick:function(e){O(!0),e.preventDefault(),console.log(l),console.log(x);var a=new FormData;Object.keys(l.fields).forEach((function(e){var t=l.fields[e];a.append(e,t)})),a.append("file",x.raw);var c={headers:{"content-type":"multipart/form-data"},onUploadProgress:function(e){!function(e){console.log(e)}(parseInt(Math.round(100*e.loaded/e.total)))}};p.a.post("".concat(l.url),a,c).then((function(e){n(3),p.a.get("".concat(be,"/stonks/access/uploaded/").concat(t)).then((function(e){console.log(e)})).catch(console.error("Did not set manual trade issue"))})).catch(console.error("Uploading problemo")).finally(O(!1))},children:["Upload ",x.name]}):Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[Object(a.jsxs)(S.a,{component:"label",style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},children:["Upload a screenshot of your positions",Object(a.jsx)("input",{type:"file",hidden:!0,onChange:function(e){if(e.target.files.length){var t=e.target.value.split("\\").pop();f({preview:URL.createObjectURL(e.target.files[0]),raw:e.target.files[0],name:t}),v(t)}}})]}),Object(a.jsx)(Y.a,{variant:"caption",children:"We'll automatically process the data for you"})]})})},me=function(e){var t=e.advanceStep,n=e.userId,i=e.refresh,r=e.title,s=Object(c.useState)(""),o=Object(u.a)(s,2),l=o[0],d=o[1],j=Object(c.useState)(!1),b=Object(u.a)(j,2),h=b[0],m=b[1],x=Object(c.useState)(!1),f=Object(u.a)(x,2),v=f[0],y=(f[1],Object(g.a)()),k=Object(c.useState)([]),w=Object(u.a)(k,2),C=w[0],I=w[1];Object(c.useEffect)((function(){p.a.get("".concat(be,"/stonks/access/plaid_token/").concat(n),{params:{refresh:i}}).then((function(e){e.data.link_token?d(e.data.link_token):_()})).catch((function(){_()})),p.a.get("https://api.withlaguna.com/stonks/access/plaid_status").then((function(e){var t;I((null===(t=e.data)||void 0===t?void 0:t.brokers)||[])}))}),[]);var _=function(){m(!0)},E={token:l,onSuccess:Object(c.useCallback)((function(e,a){i?t(3):p.a.post("".concat(be,"/stonks/access/plaid/").concat(n),{token:e,metadata:a}).then((function(e){e.data.allow?t(3):_()}))}))},F=Object(O.usePlaidLink)(E),A=F.open,D=(F.ready,F.plaidError);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y.a,{variant:"h5",children:r}),Object(a.jsx)(Y.a,{variant:"h4",children:"Connect your investment brokerage"}),Object(a.jsx)(Y.a,{children:"Your portfolio is automatically monitored, and trades are immediately updated using Plaid, the standard in brokerage connections."}),Object(a.jsx)(Y.a,{variant:"caption",children:"Only read access is allowed"}),(h||D||!r)&&Object(a.jsx)(Y.a,{children:" Something went wrong :( "}),Object(a.jsxs)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:y.spacing(2),flexDirection:"column"},children:[Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",maxWidth:"400px"},children:[Object(a.jsxs)(S.a,{onClick:function(){A()},style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},children:[Object(a.jsx)("b",{style:{marginRight:"4px"},children:"Auto"})," Connect brokerage"]}),C.map((function(e){return Object(a.jsx)(je.a,{style:{marginTop:y.spacing(2)},severity:"warning",children:e})}))]}),Object(a.jsx)("div",{style:{marginLeft:y.spacing(2),marginRight:y.spacing(2)},children:"or"}),Object(a.jsxs)(S.a,{component:"label",style:{backgroundImage:"linear-gradient(to top right, #bd5fa4, #f27995)",color:"white"},onClick:function(){t(5)},children:[Object(a.jsx)("b",{style:{marginRight:"4px"},children:"EASIEST"})," Upload a screenshot of your positions"]}),Object(a.jsx)(Y.a,{variant:"caption",children:"We'll automatically process the data for you"}),Object(a.jsx)("div",{style:{marginLeft:y.spacing(2),marginRight:y.spacing(2)},children:"or"}),Object(a.jsxs)(S.a,{component:"label",style:{backgroundImage:"linear-gradient(to top right, #bd5fa4, #f27995)",color:"white"},onClick:function(){t(7)},children:[Object(a.jsx)("b",{style:{marginRight:"4px"},children:"Manual"})," Enter trades"]})]}),Object(a.jsx)(a.Fragment,{children:v&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(V,{userId:n}),Object(a.jsx)(S.a,{onClick:function(){t()},style:{backgroundImage:"linear-gradient(to top right, #729FBF, #E0CDE1)",color:"white"},children:"CONTINUE"})]})})]})},xe=function(){var e=x()(),t=e.width,n=e.height;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{width:t,height:n}),Object(a.jsx)(Y.a,{variant:"h4",children:"Your page is building! We'll send you an email when it's ready"}),Object(a.jsx)(Y.a,{variant:"p1",children:"We've gotten reports that our emails are ending in your spam box. Please double-check there as well after ~5 min"}),Object(a.jsx)(Y.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},fe=function(e){var t=e.displayDetail,n=x()(),c=n.width,i=n.height;console.log("in finish with display",t);var r="".concat("https://").concat(t.subdomain).concat(".withlaguna.com/");return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{width:c,height:i}),Object(a.jsxs)(Y.a,{variant:"h4",children:["Congrats ",t.name,"!"]}),Object(a.jsx)(Y.a,{variant:"h5",children:"Your page is ready at"}),Object(a.jsx)(Y.a,{children:Object(a.jsxs)(ee.a,{href:r,children:[t.subdomain,".withLaguna.com"]})}),Object(a.jsxs)(Y.a,{style:{marginTop:30},children:["You can edit your profile at ",Object(a.jsx)("br",{}),Object(a.jsx)(ee.a,{href:t.editUrl,children:t.editUrl})]}),Object(a.jsx)(S.a,{href:r,style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white",marginTop:50},children:"View Page"})]})},ve=function(){var e=x()(),t=e.width,n=e.height;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(v.a,{width:t,height:n}),Object(a.jsx)(Y.a,{variant:"h4",children:"Thanks for updating your page :)"}),Object(a.jsx)("br",{}),Object(a.jsx)(Y.a,{variant:"caption",children:"Feedback? Email team@withlaguna.com"})]})},ye=function(e){var t=e.userId,n=e.advanceStep;return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("img",{width:"800px",src:"/upload_robinhood.png"}),Object(a.jsx)(ge,{userId:t,advanceStep:n})]})},ke=function(e){Object(d.a)(e);var t=Object(c.useState)(!1),n=Object(u.a)(t,2),i=n[0],r=n[1],s=Object(c.useState)(!1),o=Object(u.a)(s,2),l=o[0],j=o[1],b=Object(c.useState)(""),h=Object(u.a)(b,2),O=h[0],m=h[1],x=Object(c.useState)(""),f=Object(u.a)(x,2),v=f[0],y=f[1],k=Object(g.a)();return Object(a.jsxs)("div",{style:{marginLeft:k.spacing(12),marginRight:k.spacing(12)},children:[Object(a.jsx)(Y.a,{variant:"h5",children:"Enter your email address to get your sign-in link"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),!i&&Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},children:[Object(a.jsx)(C.a,{value:v,onChange:function(e){return y(e.target.value)},label:"Email",error:!!O,helperText:O}),Object(a.jsx)("br",{}),l&&Object(a.jsx)(oe.a,{}),Object(a.jsx)(S.a,{component:"label",style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:function(){j(!0),p.a.get("".concat(be,"/stonks/access/send"),{params:{email:v}}).then((function(){r(!0)})).catch((function(e){e.response?m(e.response.data.err):m("Please email support@withlaguna.com")})).finally((function(){j(!1)}))},children:"Submit"})]}),!!i&&Object(a.jsx)(Y.a,{varian:"body",children:"You've been sent an email. Click it to access your admin page"}),Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),Object(a.jsxs)(Y.a,{variant:"caption",children:["Having an issue? ",Object(a.jsx)("a",{href:"mailto:team@withlaguna.com",children:"Contact us"})]})]})},we=function(){var e=Object(c.useState)(1),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1],d=Object(c.useState)(),j=Object(u.a)(d,2),b=j[0],h=j[1],O=Object(c.useState)(),m=Object(u.a)(O,2),x=m[0],f=m[1],v=Object(c.useState)(!1),y=Object(u.a)(v,2),k=y[0],w=y[1],C=Object(c.useState)({title:"",description:"",link:"",subdomain:"",show_amounts:"no",name:"",email:"",phone:"",plaid_connected:!1,links:[]}),S=Object(u.a)(C,2),I=S[0],_=S[1],E=Object(g.a)();return Object(c.useEffect)((function(){"#/signin"==window.location.hash&&i(6);var e=window.location.search,t=new URLSearchParams(e);t.get("plaid_refresh")&&l(!0);var n=t.get("plaid_login"),a=t.get("edit");a&&(i(1),f(a),n&&(p.a.post("".concat(be,"/stonks/access/exchange"),{edit_id:a}).then((function(e){h(e.data.user)})),i(2)),p.a.get("".concat(be,"/stonks/access/edit_info"),{params:{edit_id:a}}).then((function(e){var t=Object.assign({},e.data);t.show_amounts=t.show_amounts?"yes":"no",_(t)})).catch((function(e){console.log(e),w(!0)})))}),[]),Object(a.jsx)(le.a,{container:!0,justify:"center",alignItems:"center",style:{minHeight:"100vh",backgroundImage:"linear-gradient(to top right, #669bbc, #ecd1e5)"},className:"App",children:Object(a.jsxs)(le.a,{item:!0,xs:11,sm:8,md:6,children:[(7==n||5==n)&&Object(a.jsxs)(de.a,{size:"small",style:{float:"left",marginTop:E.spacing(3)},onClick:function(){return i(2)},children:[Object(a.jsx)(X.a,{}),"Back"]}),Object(a.jsx)(te.a,{style:{paddingTop:E.spacing(12),paddingBottom:E.spacing(12)},children:n>=0&&(k?Object(a.jsx)("div",{children:"Something went wrong with laguna"}):0===n?Object(a.jsx)(pe,{advanceStep:function(){return i(1)}}):1===n?Object(a.jsx)(Oe,{onFormSubmit:function(){return I.plaid_connected&&!o?"":i(2)},setUserId:h,refresh:o,editId:x,editDetails:I,setEditDetails:_}):2===n?Object(a.jsx)(me,{userId:b,advanceStep:i,refresh:o,title:I.title}):3===n?Object(a.jsx)(xe,{}):4===n?Object(a.jsx)(ve,{}):5===n?Object(a.jsx)(ye,{userId:b,advanceStep:i}):6==n?Object(a.jsx)(ke,{}):7==n?Object(a.jsx)(V,{userId:b,advanceStep:i}):8==n?Object(a.jsx)(fe,{displayDetail:I}):Object(a.jsx)(a.Fragment,{}))})]})})},Ce=n(220),Se=n(18),Ie=n(455),_e=n(474),Ee=n(436),Fe=n(392),Ae=n(459),De=n(460),Te=n(461),Pe=n(462),Ne=n(463),Be=n(470),Ue=n(471),We=n(456),Me=n(457),Le=n(458),Re=n(464),He=n(214),Ye=n(76),ze=n(215),Ve=n.n(ze),Ge=(n(358),n(216)),Je=n.n(Ge),qe=200,Ke="https://api.withlaguna.com",Qe=Object(Ie.a)((function(e){return{root:{display:"flex"},drawer:Object(y.a)({},e.breakpoints.up("sm"),{width:qe,flexShrink:0}),appBar:Object(y.a)({},e.breakpoints.up("sm"),{width:"calc(100% - ".concat(qe,"px)"),marginLeft:qe}),menuButton:Object(y.a)({marginRight:e.spacing(2)},e.breakpoints.up("sm"),{display:"none"}),toolbar:e.mixins.toolbar,drawerPaper:{width:qe},content:{flexGrow:1,padding:e.spacing(3)}}})),Xe=function(e){var t=e.editId,n=e.editDetails,i=e.setEditDetails,r=Object(c.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1],d=function(e,t){"clickaway"!==t&&l(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Oe,{editId:t,editDetails:n,setEditDetails:i,onFormSubmit:function(){l(!0)}}),Object(a.jsx)(_e.a,{open:o,autoHideDuration:6e3,onClose:d,children:Object(a.jsx)(je.a,{onClose:d,severity:"success",children:"Updated succesfully!"})})]})},Ze=function(e){var t=e.h,n=e.editId,i="<div>".concat(t.memo?t.memo:"","</div>"),r=Object(Ye.convertFromHTML)(i),s=Ye.ContentState.createFromBlockArray(r.contentBlocks,r.entityMap),o=Object(c.useState)(!1),l=Object(u.a)(o,2),d=l[0],j=l[1],b=Object(c.useState)(Ye.EditorState.createWithContent(s)),h=Object(u.a)(b,2),O=h[0],g=h[1];return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(w.a,{children:t.ticker_symbol}),Object(a.jsx)(w.a,{children:Je()(i)}),Object(a.jsx)(w.a,{children:Object(a.jsx)(S.a,{style:{backgroundColor:d?H:L,color:"white"},onClick:function(){d&&p.a.post("".concat(Ke,"/stonks/access/memo/update"),{holding_id:t.id,edit_id:n,memo:Ve()(Object(Ye.convertToRaw)(O.getCurrentContent()))}).then((function(e){})),j(!d)},children:d?"Save":"Edit memo"})}),Object(a.jsx)(w.a,{children:t.plaid_security_id?"plaid":"self"})]}),d&&Object(a.jsx)(k.a,{style:{backgroundColor:M},children:Object(a.jsx)(w.a,{colSpan:4,children:Object(a.jsx)(He.Editor,{editorState:O,toolbarClassName:"toolbarClassName",wrapperClassName:"wrapperClassName",editorClassName:"editorClassName",onEditorStateChange:function(e){g(e)},onContentStateChange:function(e){}})})})]})},$e=function(e){var t=e.editId,n=e.subdomain;Object(c.useEffect)((function(){l()}),[n]);var i=Object(c.useState)([]),r=Object(u.a)(i,2),s=r[0],o=r[1],l=function(){p.a.get("".concat(Ke,"/stonks/holdings/").concat(n)).then((function(e){o(e.data.holdings)}))};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y.a,{variant:"h4",children:Object(a.jsx)("b",{children:"Holdings & memos"})}),Object(a.jsx)(Y.a,{style:{color:"gray"},variant:"subtitle1",children:"Holdings below are imported from plaid and manual trades"}),Object(a.jsxs)(I.a,{style:{margin:20},children:[Object(a.jsx)(_.a,{children:Object(a.jsx)(k.a,{style:{backgroundColor:R},children:["Ticker","Memo","Action","Source"].map((function(e){return Object(a.jsx)(w.a,{children:Object(a.jsx)("b",{children:e})})}))})}),Object(a.jsx)(E.a,{children:s.map((function(e){return Object(a.jsx)(Ze,{h:e,editId:t})}))})]})]})},et=function(e){var t=e.editId,n=e.subdomain;return Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)(le.a,{container:!0,spacing:8,children:[Object(a.jsx)(le.a,{item:!0,md:12,children:!!n&&Object(a.jsx)($e,{editId:t,subdomain:n})}),Object(a.jsx)(le.a,{item:!0,md:12,children:Object(a.jsx)(V,{editId:t})})]})})},tt=function(e){var t=e.editId,n=Object(c.useState)([]),i=Object(u.a)(n,2),r=i[0],s=i[1],o=Object(c.useState)({name:"",phone:""}),l=Object(u.a)(o,2),d=l[0],h=l[1],O=Object(c.useState)(""),g=Object(u.a)(O,2),m=g[0],x=g[1];Object(c.useEffect)((function(){p.a.get("".concat(Ke,"/stonks/access/subscribers"),{params:{edit_id:t}}).then((function(e){s(e.data.subscribers)}))}),[]);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Y.a,{variant:"h4",children:Object(a.jsxs)("b",{children:["Manage subscribers (",r.length?r.length:0,")"]})}),Object(a.jsxs)(I.a,{style:{margin:20},children:[Object(a.jsx)(_.a,{children:Object(a.jsx)(k.a,{style:{backgroundColor:M},children:["Name","Phone","Date added"].map((function(e){return Object(a.jsx)(w.a,{children:Object(a.jsx)("b",{children:e})})}))})}),Object(a.jsxs)(E.a,{children:[Object(a.jsxs)(k.a,{children:[Object(a.jsx)(w.a,{children:Object(a.jsx)(C.a,{label:"name",value:d.name,onChange:function(e){return h(Object.assign({},d,{name:e.target.value}))}})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(F.a,{value:d.phone,format:"(###) ###-####",customInput:C.a,onValueChange:function(e){var t=e.value;h(Object.assign({},d,{phone:t}))},placeholder:"(555)-123-4567",label:"phone",helperText:m||"",err:!!m})}),Object(a.jsx)(w.a,{children:Object(a.jsx)(S.a,{style:{backgroundImage:"linear-gradient(to top right, #A01A7D, #EC4067)",color:"white"},onClick:function(){p.a.post("".concat(Ke,"/stonks/submit"),Object(j.a)(Object(j.a)({},d),{},{edit_id:t})).then((function(){s([].concat(Object(b.a)(r),[d])),h({name:"",phone:""})})).catch((function(e){e.response?x(e.response.data.err):x("Please email support@withlaguna.com")}))},children:"Add new sub"})})]}),r.map((function(e){return Object(a.jsxs)(k.a,{children:[Object(a.jsx)(w.a,{children:e.name}),Object(a.jsx)(w.a,{children:Object(a.jsx)(F.a,{displayType:"text",value:e.phone,format:"(###) ###-####"})}),Object(a.jsx)(w.a,{children:e.created_date})]})}))]})]})]})};var nt=function(e){var t=e.window,n=Qe(),i=Object(g.a)(),r=Object(c.useState)(!1),s=Object(u.a)(r,2),o=s[0],l=s[1],d=function(){l(!o)},j=Object(c.useState)(1),b=Object(u.a)(j,2),h=b[0],O=b[1],m=Object(c.useState)({title:"",description:"",link:"",subdomain:"",show_amounts:"no",name:"",email:"",phone:"",plaid_connected:!1,links:[]}),x=Object(u.a)(m,2),f=x[0],v=x[1],y=new URLSearchParams(e.location.search).get("edit");if(Object(c.useEffect)((function(){!function(e,t){p.a.get("".concat(be,"/stonks/access/edit_info"),{params:{edit_id:e}}).then((function(e){var n=Object.assign({},e.data);n.show_amounts=n.show_amounts?"yes":"no",t(n)})).catch((function(e){t("err")}))}(y,(function(e){console.log(e),v(e)}))}),[]),!y)return"Access not allowed. If you believe this was in error please contact support";var k=[{title:"My profile",component:Object(a.jsx)(Xe,{editId:y,editDetails:f,setEditDetails:v}),icon:Object(a.jsx)(We.a,{})},{title:"Portfolios",component:Object(a.jsx)(et,{editId:y,subdomain:f.subdomain}),icon:Object(a.jsx)(Me.a,{})},{title:"Subscribers",component:Object(a.jsx)(tt,{editId:y}),icon:Object(a.jsx)(Le.a,{})}],w=Object(a.jsxs)("div",{children:[Object(a.jsx)("div",{className:n.toolbar,children:Object(a.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",marginTop:i.spacing(2)},children:Object(a.jsx)("a",{href:"https://withlaguna.com",children:Object(a.jsx)("img",{src:"FullLogoBlack.png",width:"80"})})})}),Object(a.jsx)(Ee.a,{children:k.map((function(e,t){return Object(a.jsxs)(Fe.a,{button:!0,onClick:function(){return O(t)},selected:h==t,children:[Object(a.jsx)(Ae.a,{children:e.icon}),Object(a.jsx)(De.a,{primary:e.title})]},e.title)}))})]}),C=void 0!==t?function(){return t().document.body}:void 0;return Object(a.jsx)(le.a,{container:!0,children:Object(a.jsx)(le.a,{item:!0,children:Object(a.jsxs)("div",{className:n.root,children:[Object(a.jsx)(Te.a,{}),Object(a.jsx)(Pe.a,{color:"transparent",elevation:0,position:"fixed",className:n.appBar,children:Object(a.jsx)(Ne.a,{children:Object(a.jsx)(de.a,{color:"inherit","aria-label":"open drawer",edge:"start",onClick:d,className:n.menuButton,children:Object(a.jsx)(Re.a,{})})})}),Object(a.jsxs)("nav",{className:n.drawer,"aria-label":"mailbox folders",children:[Object(a.jsx)(Be.a,{smUp:!0,implementation:"css",children:Object(a.jsx)(Ue.a,{container:C,variant:"temporary",anchor:"rtl"===i.direction?"right":"left",open:o,onClose:d,classes:{paper:n.drawerPaper},ModalProps:{keepMounted:!0},children:w})}),Object(a.jsx)(Be.a,{xsDown:!0,implementation:"css",children:Object(a.jsx)(Ue.a,{classes:{paper:n.drawerPaper},variant:"permanent",open:!0,children:w})})]}),Object(a.jsxs)("main",{className:n.content,children:[Object(a.jsx)("div",{className:n.toolbar}),k[h].component]})]})})})},at=Object(o.a)({typography:{fontFamily:["-apple-system","BlinkMacSystemFont","Inter","Nunito","Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(","),h4:{fontWeight:700},h5:{fontWeight:700},h6:{fontWeight:700},b:{fontWeight:800}},palette:{secondary:{main:"#ffffff"}},overrides:{MuiTextField:{marginTop:4}}});function ct(){return Object(a.jsx)(l.a,{theme:at,children:Object(a.jsx)(Ce.a,{basename:"",children:Object(a.jsxs)(Se.c,{children:[Object(a.jsx)(Se.a,{exact:!0,path:"/",component:we}),Object(a.jsx)(Se.a,{exact:!0,path:"/admin",component:nt}),Object(a.jsx)(Se.a,{component:function(){return Object(a.jsx)("div",{children:"404 Not found"})}})]})})})}var it=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,476)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),i(e),r(e)}))};s.a.render(Object(a.jsx)(i.a.StrictMode,{children:Object(a.jsx)(ct,{})}),document.getElementById("root")),it()}},[[390,1,2]]]);
//# sourceMappingURL=main.bbc12446.chunk.js.map