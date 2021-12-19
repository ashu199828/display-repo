(this["webpackJsonpappointy-screening"]=this["webpackJsonpappointy-screening"]||[]).push([[0],{248:function(e,n,t){},249:function(e,n,t){},322:function(e,n,t){"use strict";var r=function(){var e=[{defaultValue:null,kind:"LocalArgument",name:"usr"}],n=[{kind:"Variable",name:"login",variableName:"usr"}],t={kind:"Literal",name:"orderBy",value:{direction:"DESC",field:"CREATED_AT"}},r=[{kind:"Literal",name:"first",value:100},t],a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},l={kind:"Literal",name:"first",value:10},s=[l],o=[l,t],c={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d={alias:null,args:null,kind:"ScalarField",name:"createdAt",storageKey:null},u={alias:null,args:null,kind:"ScalarField",name:"url",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{fragment:{argumentDefinitions:e,kind:"Fragment",metadata:null,name:"HomeRepositoryNameQuery",selections:[{alias:null,args:n,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:r,concreteType:"RepositoryConnection",kind:"LinkedField",name:"repositories",plural:!1,selections:[{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"nodes",plural:!0,selections:[a,i,{alias:null,args:s,concreteType:"RepositoryCollaboratorConnection",kind:"LinkedField",name:"collaborators",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[a],storageKey:null}],storageKey:"collaborators(first:10)"},{alias:null,args:o,concreteType:"IssueConnection",kind:"LinkedField",name:"issues",plural:!1,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"nodes",plural:!0,selections:[c],storageKey:null}],storageKey:'issues(first:10,orderBy:{"direction":"DESC","field":"CREATED_AT"})'},d,u],storageKey:null}],storageKey:'repositories(first:100,orderBy:{"direction":"DESC","field":"CREATED_AT"})'}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:e,kind:"Operation",name:"HomeRepositoryNameQuery",selections:[{alias:null,args:n,concreteType:"User",kind:"LinkedField",name:"user",plural:!1,selections:[{alias:null,args:r,concreteType:"RepositoryConnection",kind:"LinkedField",name:"repositories",plural:!1,selections:[{alias:null,args:null,concreteType:"Repository",kind:"LinkedField",name:"nodes",plural:!0,selections:[a,i,{alias:null,args:s,concreteType:"RepositoryCollaboratorConnection",kind:"LinkedField",name:"collaborators",plural:!1,selections:[{alias:null,args:null,concreteType:"User",kind:"LinkedField",name:"nodes",plural:!0,selections:[a,j],storageKey:null}],storageKey:"collaborators(first:10)"},{alias:null,args:o,concreteType:"IssueConnection",kind:"LinkedField",name:"issues",plural:!1,selections:[{alias:null,args:null,concreteType:"Issue",kind:"LinkedField",name:"nodes",plural:!0,selections:[c,j],storageKey:null}],storageKey:'issues(first:10,orderBy:{"direction":"DESC","field":"CREATED_AT"})'},d,u,j],storageKey:null}],storageKey:'repositories(first:100,orderBy:{"direction":"DESC","field":"CREATED_AT"})'},j],storageKey:null}]},params:{cacheID:"b258f42d69128e61871bd13f8cad28f2",id:null,metadata:{},name:"HomeRepositoryNameQuery",operationKind:"query",text:"query HomeRepositoryNameQuery(\n  $usr: String!\n) {\n  user(login: $usr) {\n    repositories(first: 100, orderBy: {field: CREATED_AT, direction: DESC}) {\n      nodes {\n        name\n        description\n        collaborators(first: 10) {\n          nodes {\n            name\n            id\n          }\n        }\n        issues(first: 10, orderBy: {field: CREATED_AT, direction: DESC}) {\n          nodes {\n            __typename\n            id\n          }\n        }\n        createdAt\n        url\n        id\n      }\n    }\n    id\n  }\n}\n"}}}();r.hash="4eefc8a216225692fcb60765fe4c6b4c",e.exports=r},323:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),i=t(77),l=t.n(i),s=(t(248),t(249),t(390)),o=t(333),c=t(133),d=t(89),u=t(206),j=t.n(u),p=t(97),b=new p.a,h=Object(r.createContext)(),y=t(4);function m(){var e=Object(r.useContext)(h);return Object(y.jsx)(s.a,{fixed:!0,sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"80vh"},children:Object(y.jsxs)(o.a,{children:[Object(y.jsx)(c.a,{color:"mintcream",my:3,sx:{fontSize:100,fontWeight:300},children:"OAuth App with React Relay (GraphQl)"}),Object(y.jsxs)(d.a,{onClick:function(){return e.signInAuth(b)},size:"large",variant:"contained",sx:{fontSize:18,backgroundColor:"black","&:hover":{backgroundColor:"gray",color:"black"}},children:["GitHub Login",Object(y.jsx)(j.a,{})]})]})})}var f=t(391),g=t(392),x=t(80),O=t(207),k=t.n(O);function v(){return Object(y.jsx)(o.a,{children:Object(y.jsx)(f.a,{position:"static",sx:{backgroundColor:"black"},children:Object(y.jsx)(g.a,{children:Object(y.jsx)(s.a,{sx:{display:"flex",justifyContent:"center",flexGrow:1},children:Object(y.jsxs)(o.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center"},children:[Object(y.jsx)(x.a,{color:"inherit",children:Object(y.jsx)(k.a,{size:"large"})}),Object(y.jsx)(c.a,{mx:1,sx:{fontWeight:700,fontSize:18,letterSpacing:2},children:"OAuth-Application"})]})})})})})}var w=t(10),C=t(208),S=function(e){var n=Object(r.useState)(""),t=Object(w.a)(n,2),a=t[0],i=t[1],l=Object(C.a)({apiKey:"AIzaSyB-TnbDW8qEy1hVheKEgnMPh-k4h1crlkM",authDomain:"new-project-14322.firebaseapp.com",projectId:"new-project-14322",storageBucket:"new-project-14322.appspot.com",messagingSenderId:"833403576500",appId:"1:833403576500:web:ac80aab6b55402cf75f7e1",measurementId:"G-24DQS8N4BT"});return Object(y.jsx)(h.Provider,{value:{tokenValue:a,signInAuth:function(e){var n=Object(p.b)(l);Object(p.c)(n,e).then((function(e){var n,t,r=p.a.credentialFromResult(e).accessToken;i(r),localStorage.setItem("token",r);var a=null===e||void 0===e||null===(n=e.user)||void 0===n||null===(t=n.reloadUserInfo)||void 0===t?void 0:t.screenName;console.log(a),localStorage.setItem("user",a),window.location=a?"/home":"/"})).catch((function(e){window.location="/"}))}},children:e.children})};var T=function(){return Object(y.jsx)("div",{className:"App",children:Object(y.jsxs)(S,{children:[Object(y.jsx)(v,{}),Object(y.jsx)(m,{})]})})},D=t(213),R=t(25),A=t(209),E=t(210),K=t(389),F=t(383),I=t(385),L=t(395),N=t(212),_=t.n(N),B=t(378),Q=r.forwardRef((function(e,n){return Object(y.jsx)(B.a,Object(A.a)({direction:"up",ref:n},e))})),z=[{field:"name",headerName:"Name",width:500},{field:"createDate",headerName:"Created Date",width:165},{field:"url",headerName:"Github Repo Url",width:200}];function q(e){var n,t=r.useState(!1),a=Object(w.a)(t,2),i=a[0],l=a[1],s=r.useState({}),o=Object(w.a)(s,2),d=o[0],u=o[1],j=null===e||void 0===e||null===(n=e.data)||void 0===n?void 0:n.map((function(e,n){return Object.assign({id:n,name:e.name,createDate:e.createdAt,url:e.url})})),p=function(){l(!1)};return Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)("div",{style:{height:400,width:"100%"},children:Object(y.jsx)(E.a,{rows:j,columns:z,pageSize:5,rowsPerPageOptions:[5],onRowClick:function(e){console.log(e),l(!0),u(e.row)}})}),Object(y.jsxs)(K.a,{fullScreen:!0,open:i,onClose:p,TransitionComponent:Q,children:[Object(y.jsx)(f.a,{sx:{position:"relative"},children:Object(y.jsxs)(g.a,{children:[Object(y.jsx)(x.a,{edge:"start",color:"inherit",onClick:p,"aria-label":"close",children:Object(y.jsx)(_.a,{})}),Object(y.jsx)(c.a,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:d.name})]})}),Object(y.jsxs)(L.a,{children:[Object(y.jsx)(I.a,{children:Object(y.jsx)(F.a,{primary:"Repository Name",secondary:d.name})}),Object(y.jsx)(I.a,{children:Object(y.jsx)(F.a,{primary:"Created Date",secondary:d.createDate})}),Object(y.jsx)(I.a,{children:Object(y.jsx)(F.a,{primary:"Repository Url",secondary:Object(y.jsx)("a",{href:d.url,rel:"noreferrer",target:"_blank",children:d.url})})})]})]})]})}var P=t(129),U=t(5),G=t(3),H=t.n(G),J=t(31);function V(){return(V=Object(U.a)(H.a.mark((function e(n,t){var r,a;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=localStorage.getItem("token"),console.log(r),e.next=4,fetch("https://api.github.com/graphql",{method:"POST",headers:{Authorization:"bearer  ".concat(r),"Content-Type":"application/json"},body:JSON.stringify({query:n,variables:t})});case 4:return a=e.sent,e.abrupt("return",a.json());case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var W=function(e,n){return V.apply(this,arguments)};function M(){return(M=Object(U.a)(H.a.mark((function e(n,t){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("fetching query ".concat(n.name," with ").concat(JSON.stringify(n.id))),e.next=3,W(n.text,t);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var $,X=new J.Environment({network:J.Network.create((function(e,n){return M.apply(this,arguments)})),store:new J.Store(new J.RecordSource)}),Y=X,Z=t(335),ee=a.a.Suspense,ne=void 0!==$?$:$=t(322),te=Object(P.loadQuery)(Y,ne,{usr:localStorage.getItem("user")});function re(e){var n,t,r=Object(P.usePreloadedQuery)(ne,e.preloadedQuery);return Object(y.jsx)("div",{id:"home",children:Object(y.jsx)(s.a,{fluid:!0,children:r?Object(y.jsxs)(o.a,{children:[Object(y.jsxs)(o.a,{sx:{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"},children:[Object(y.jsx)(c.a,{color:"#757575",my:5,variant:"h2",children:"Repositories"}),Object(y.jsx)(d.a,{size:"large",variant:"text",onClick:function(){localStorage.clear(),window.location="/"},children:"Sign Out"})]}),Object(y.jsx)("hr",{}),Object(y.jsx)("br",{}),Object(y.jsx)(o.a,{sx:{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between",alignItems:"stretch"},children:Object(y.jsx)(q,{data:null===r||void 0===r||null===(n=r.user)||void 0===n||null===(t=n.repositories)||void 0===t?void 0:t.nodes})})]}):Object(y.jsx)("h1",{children:"no data found"})})},"i")}var ae=function(e){return Object(y.jsx)(P.RelayEnvironmentProvider,{environment:Y,children:Object(y.jsx)(ee,{fallback:Object(y.jsx)(o.a,{sx:{value:"user.id",display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",height:"100vh"},children:Object(y.jsx)(Z.a,{color:"inherit"})}),children:Object(y.jsx)(re,{preloadedQuery:te})})})};l.a.render(Object(y.jsx)(a.a.StrictMode,{children:Object(y.jsx)(D.a,{children:Object(y.jsxs)(R.c,{children:[Object(y.jsx)(R.a,{path:"/",element:Object(y.jsx)(T,{})}),Object(y.jsx)(R.a,{path:"home",element:Object(y.jsx)(ae,{})})]})})}),document.getElementById("root"))}},[[323,1,2]]]);
//# sourceMappingURL=main.d15e7f2d.chunk.js.map