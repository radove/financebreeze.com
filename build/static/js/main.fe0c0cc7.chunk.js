(window.webpackJsonpfinancebreeze=window.webpackJsonpfinancebreeze||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),s=(a(101),a(18)),o=a(19),c=a(22),m=a(20),d=a(21),u=(a(102),a(16)),h=a(47),g=a(190),p=a(5),f=a(178),y=a(179),E=a(126),v=a(181),b=a(180),w=a(69),x=a.n(w),S=a(71),P=a.n(S),O=a(70),k=a.n(O),D=a(68),C=a.n(D),M=a(185),j=a(170),z=(a(103),a(172)),B=a(173),L=a(175),I=a(188),F=a(174),N=a(187),W=a(59);r.a.Component;function Y(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0}var A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleChangePage=function(e,t){a.setState({page:t})},a.handleChangeRowsPerPage=function(e){a.setState({rowsPerPage:e.target.value})},a.props=e,a.state={rowsPerPage:10,q:"",order:"desc",categories:[],orderBy:"",page:0},a.handleRequestSort=a.handleRequestSort.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.setState({rowsPerPage:this.props.rowsPerPage,order:this.props.order,orderBy:this.props.orderBy})}},{key:"handleRequestSort",value:function(e){var t=e,a="desc";this.state.orderBy===e&&"desc"===this.state.order&&(a="asc"),this.setState({order:a,orderBy:t})}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowsPerPage,n=t.page,i=t.order,l=t.orderBy,s=this.props.data;s||(s=[{data:!1}]);var o=0;return r.a.createElement("div",null,r.a.createElement(z.a,{style:{margin:"0px"}},r.a.createElement(B.a,null,r.a.createElement(F.a,{style:{height:"10px",padding:"0px"}},this.props.headers.map(function(t){return r.a.createElement(L.a,{style:{fontWeight:"bold",fontSize:"10pt",margin:"5px"},key:t.name+"tabletitle",sortDirection:l===t.orderbyname&&i},r.a.createElement(I.a,{title:"Sort by "+t.display,placement:"top",mouseEnterDelay:"0.3"},r.a.createElement(N.a,{active:l===t.orderbyname,direction:i,onClick:function(){return e.handleRequestSort(t.orderbyname)}},t.display)))})),function(e,t){var a=e.map(function(e,t){return[e,t]});return a.sort(function(e,a){var n=t(e[0],a[0]);return 0!==n?n:e[1]-a[1]}),a.map(function(e){return e[0]})}(s,function(e,t){return"desc"===e?function(e,a){return Y(e,a,t)}:function(e,a){return-Y(e,a,t)}}(i,l)).slice(n*a,n*a+a).map(function(t){o++;var a=[];return e.props.columns.forEach(function(e){var n=!0;this.props.widgets&&this.props.widgets.forEach(function(i){var l=this;this.props.onClickColumn&&this.props.onClickColumn===e?i.name===e&&(""===i.widget?a.push(r.a.createElement(L.a,{key:e+"DataTableCell"+o}," ",r.a.createElement(W.a,{onClick:function(){return l.props.onClickFunction(t[e])},style:{padding:"0px",fontSize:"10pt",color:"blue",cursor:"pointer",textDecoration:"underline"}},t[e]))):a.push(r.a.createElement(L.a,{key:e+"DataTableCell"+o}," ",r.a.createElement(W.a,{style:{padding:"0px",fontSize:"10pt"}},r.a.createElement(j.a,{onClick:function(){return l.props.onClickFunction(t[e])},style:{width:"20px",height:"20px",padding:0,margin:0}},i.widget)))),n=!1):i.name===e&&(a.push(r.a.createElement(L.a,{key:e+"DataTableCell"+o}," ",r.a.createElement(W.a,{style:{padding:"0px",fontSize:"10pt"}},i.widget))),n=!1)},this),!0===n&&a.push(r.a.createElement(L.a,{key:e+"DataTableCell"+o}," ",r.a.createElement(W.a,{style:{padding:"0px",fontSize:"10pt"}},t[e])))},e),r.a.createElement(F.a,{style:{fontSize:"10pt",height:"0px",padding:"0px"},key:"DataTable"+o},a)}))),r.a.createElement("div",{align:"center"},r.a.createElement(M.a,{colSpan:10,count:s.length,rowsPerPage:a,page:n,onChangePage:this.handleChangePage,onChangeRowsPerPage:this.handleChangeRowsPerPage})))}}]),t}(r.a.Component),R=Object(p.a)(function(e){return{}})(A),T=a(121),_=a(189),U=a(85),V=a.n(U),q=a(28),H=(a(120),a(14)),X=a.n(H),G=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),J=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e)))._onMouseLeave=function(){a.setState({crosshairValues:[]})},a._onNearestX=function(e,t){var n=t.index,r=X()(e.x).format("MMMM Do YYYY");a.setState({crosshairValue:e.y,crosshairDate:r,crosshairValues:[a.state.additionaldata[n]]})},a.state={data:[],crosshairValues:[],additionaldata:[],lastDrawLocation:null,crosshairDate:"",crosshairValue:0,width:0,height:400},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"refreshData",value:function(){for(var e=[],t=!1,a=X()(),n=X()(),r=this.props.interest/100/12,i=this.props.remainingBalance,l=this.props.remainingBalance,s=[],o=[],c=0,m=0;i>0;){var d=i*r;c+=d;var u=this.props.currentMortgagePayment-d;u<0?(t=!0,i=0):(i-=u,a=X()(a).add(1,"months").calendar(),s.push({x:X()(a).valueOf(),y:i}))}for(;l>0;){var h=l*r;m+=h;var g=this.props.currentMortgagePayment-h;g<0?(t=!0,l=0):(t=!1,l-=g,l-=this.props.additionalMortgagePayment,n=X()(n).add(1,"months").calendar(),o.push({x:X()(n).valueOf(),y:l}));var p={};p.timestampraw=X()(n).valueOf(),p.timestamp=X()(n).format("MMMM Do YYYY"),p.interest=G.format(h),p.interestraw=h,p.principle=G.format(g),p.principleraw=g,p.remaining=G.format(l),p.remainingraw=l,e.push(p)}var f=X()(a).diff(X()(n),"years"),y=X()(n).diff(X()(),"years");this.setState({upsidedown:t,additionaldata:o,data:s}),this.props.setInterestSaved(c,m),this.props.setYearsSaved(f,y),this.props.setAmortizationSchedule(e)}},{key:"updateWindowDimensions",value:function(){if(null!==document.getElementById("MortgagePayoffOverTime")){var e=document.getElementById("MortgagePayoffOverTime").clientWidth-50;this.state.width===e&&this.state.height===window.innerHeight||this.setState({width:e})}}},{key:"componentDidMount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("orientationchange",this.updateWindowDimensions),window.removeEventListener("webkitfullscreenchange",this.handleExitFullscreen,!1),window.removeEventListener("mozfullscreenchange",this.handleExitFullscreen,!1),window.removeEventListener("msfullscreenchange",this.handleExitFullscreen,!1),window.removeEventListener("fullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("orientationchange",this.updateWindowDimensions),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("webkitfullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("mozfullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("fullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("msfullscreenchange",this.handleExitFullscreen,!1),this.updateWindowDimensions(),this.refreshData()}},{key:"componentDidUpdate",value:function(e){this.props.additionalMortgagePayment!==e.additionalMortgagePayment&&this.refreshData(),this.props.currentMortgagePayment!==e.currentMortgagePayment&&this.refreshData(),this.props.remainingBalance!==e.remainingBalance&&this.refreshData(),this.props.interest!==e.interest&&this.refreshData()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.lastDrawLocation;return!0===this.state.upsidedown?r.a.createElement("div",null,"You will never pay off the loan in this situation"):r.a.createElement("div",null,r.a.createElement(q.g,{onMouseLeave:this._onMouseLeave,animation:!0,margin:{right:100,left:100},xType:"time",width:this.state.width,height:this.state.height,xDomain:a&&[a.left,a.right],yDomain:a&&[a.bottom,a.top]},r.a.createElement(q.e,{style:{opacity:.05}}),r.a.createElement(q.d,{style:{opacity:.05}}),r.a.createElement(q.f,{style:{fill:"white"},tickTotal:5}),r.a.createElement(q.h,{style:{fill:"white"},tickTotal:5}),r.a.createElement(q.a,{animation:!0,style:{fill:"#ffaaaa",stroke:"#992e24",strokeWidth:"2px",strokeDasharray:5,strokeOpacity:1,fillOpacity:1,pointerEvents:this.props.brushing?"none":"auto"},curve:"curveNatural",data:this.state.data}),r.a.createElement(q.a,{animation:!0,style:{fill:"#9AB9C8",stroke:"#407088",strokeDasharray:5,strokeWidth:"2px",strokeOpacity:1,fillOpacity:1,pointerEvents:this.props.brushing?"none":"auto"},curve:"curveNatural",data:this.state.additionaldata,onNearestX:this._onNearestX}),r.a.createElement(q.b,{values:this.state.crosshairValues,style:{line:{opacity:.25,width:"2px",backgroundColor:"#831613"}}},r.a.createElement(_.a,{avatar:r.a.createElement(T.a,{style:{backgroundColor:"#00e6ac"}},r.a.createElement(V.a,null)),label:this.state.crosshairDate+": "+G.format(this.state.crosshairValue),className:t.chip})),r.a.createElement(q.c,{onBrushEnd:function(t){return e.setState({lastDrawLocation:t})},onDrag:function(t){e.setState({lastDrawLocation:{bottom:a.bottom+(t.top-t.bottom),left:a.left-(t.right-t.left),right:a.right-(t.right-t.left),top:a.top+(t.top-t.bottom)}})}})))}}]),t}(n.Component),$=Object(p.a)(function(e){return{root:{flexGrow:1},paperMain:{flex:1,display:"flex",flexDirection:"column"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},media:{height:150},chip:{margin:e.spacing(1)}}})(J),K=a(184),Q=a(86),Z=a.n(Q),ee=(a(122),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})),te=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).props=e,a.state={data:{},saved:0,years:0,yearsLeft:0,amortization:[],interestPaid:0,currentMortgagePayment:1308.76,remainingBalance:15e4,interest:3.75,additionalMortgagePayment:500},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a.interestSaved=a.interestSaved.bind(Object(u.a)(a)),a.saveSession=a.saveSession.bind(Object(u.a)(a)),a.loadSession=a.loadSession.bind(Object(u.a)(a)),a.setAmortization=a.setAmortization.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"setAmortization",value:function(e){this.setState({amortization:e})}},{key:"interestSaved",value:function(e,t){this.setState({saved:e-t,interestPaid:t})}},{key:"yearsSaved",value:function(e,t){this.setState({years:e,yearsLeft:t})}},{key:"handleChange",value:function(e,t){var a=e.target.value;a=(a=(a=a.replace(/\$/g,"")).replace(/ /g,"")).replace(/,/g,""),"interest"===t&&(e.target.value>7&&(a=7),e.target.value<=0&&(a=.1)),this.setState(Object(h.a)({},t,a),this.saveSession)}},{key:"saveSession",value:function(){localStorage.setItem("financebreeze_currentMortgagePayment",this.state.currentMortgagePayment),localStorage.setItem("financebreeze_remainingBalance",this.state.remainingBalance),localStorage.setItem("financebreeze_interest",this.state.interest),localStorage.setItem("financebreeze_additionalMortgagePayment",this.state.additionalMortgagePayment)}},{key:"loadSession",value:function(){var e=localStorage.getItem("financebreeze_currentMortgagePayment"),t=localStorage.getItem("financebreeze_remainingBalance"),a=localStorage.getItem("financebreeze_interest"),n=localStorage.getItem("financebreeze_additionalMortgagePayment");null!==e&&null!==t&&null!==a&&null!==n&&this.setState({currentMortgagePayment:e,remainingBalance:t,interest:a,additionalMortgagePayment:n})}},{key:"componentDidMount",value:function(){this.loadSession()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(E.a,null,r.a.createElement("div",{align:"center"},r.a.createElement("img",{alt:"",src:Z.a,width:66})),r.a.createElement("form",{sclassName:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{align:"center"},r.a.createElement(f.a,{container:!0,spacing:0},r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:6,xs:6},r.a.createElement(K.a,{id:"outlined-name",label:"Mortgage Payment (PI)",className:t.textField,value:this.state.currentMortgagePayment,onChange:function(t){return e.handleChange(t,"currentMortgagePayment")},margin:"normal"})),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:6,xs:6},r.a.createElement(K.a,{id:"outlined-name",label:"Remaining Balance",className:t.textField,value:this.state.remainingBalance,onChange:function(t){return e.handleChange(t,"remainingBalance")},margin:"normal"})),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:6,xs:6},r.a.createElement(K.a,{id:"outlined-name",label:"Interest Rate",className:t.textField,value:this.state.interest,onChange:function(t){return e.handleChange(t,"interest")},margin:"normal"})),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:6,xs:6},r.a.createElement(K.a,{id:"outlined-name",label:"Additional Payment",className:t.textField,value:this.state.additionalMortgagePayment,onChange:function(t){return e.handleChange(t,"additionalMortgagePayment")},margin:"normal"}))))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement("div",{id:"MortgagePayoffOverTime"},r.a.createElement(y.a,null,r.a.createElement(b.a,{title:"Mortgage Early Payoff Calculator",subheader:"Plan for your future with FinanceBreeze.com"}),r.a.createElement(v.a,null,r.a.createElement($,{brushing:!1,additionalMortgagePayment:this.state.additionalMortgagePayment,currentMortgagePayment:this.state.currentMortgagePayment,remainingBalance:this.state.remainingBalance,interest:this.state.interest,setInterestSaved:this.interestSaved.bind(this),setYearsSaved:this.yearsSaved.bind(this),setAmortizationSchedule:this.setAmortization.bind(this)}))))),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:12,xs:12},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Years Saved"}),r.a.createElement(v.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(W.a,{variant:"h4"}," ",this.state.years+" Years"," "))))),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:12,xs:12},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Interest Saved"}),r.a.createElement(v.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(W.a,{variant:"h4"}," ",ee.format(this.state.saved)," "))))),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:12,xs:12},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Years Left"}),r.a.createElement(v.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(W.a,{variant:"h4"}," ",this.state.yearsLeft+" Years"," "))))),r.a.createElement(f.a,{item:!0,xl:3,lg:3,md:6,sm:12,xs:12},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Interest Paid"}),r.a.createElement(v.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(W.a,{variant:"h4"}," ",ee.format(this.state.interestPaid)," "))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Amortization Schedule"}),r.a.createElement(v.a,null,r.a.createElement(R,{order:"asc",orderBy:"timestampraw",allowOrdering:!1,rowsPerPage:25,headers:[{name:"timestamp",display:"Date",orderbyname:"timestampraw"},{name:"interest",display:"Interest",orderbyname:"interestraw"},{name:"principle",display:"Principle",orderbyname:"principleraw"},{name:"remaining",display:"Remaining",orderbyname:"remainingraw"}],data:this.state.amortization,columns:["timestamp","interest","principle","remaining"]}))))))}}]),t}(n.Component),ae=Object(p.a)(function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},root:{flexGrow:1},paperMain:{flex:1,display:"flex",flexDirection:"column"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},media:{height:150}}})(te),ne=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey hey hey hey hey hey hey hey")}}]),t}(n.Component),re=a(88),ie=Object(re.a)({palette:{primary:{main:"#f2f6f5"},secondary:{main:"#af0404"}},overrides:{MuiDrawer:{paper:{backgroundColor:"#142033"}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}}},typography:{fontSize:14,fontFamily:['"Titillium Web"',"Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),le=a(182),se={button:{margin:"5px",fontSize:"8pt"},root:{display:"flex",minHeight:"100vh"},drawer:Object(h.a)({},ie.breakpoints.up("sm"),{width:256,flexShrink:0}),appContent:{flex:1,display:"flex",flexDirection:"column"},mainContent:{flex:1,padding:"15px 15px 0"}},oe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a.state={mobileOpen:!1,landing:0},a.handlePageLanding=a.handlePageLanding.bind(Object(u.a)(a)),a}return Object(d.a)(t,e),Object(o.a)(t,[{key:"handlePageLanding",value:function(e){this.setState({landing:e})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.landing,a=[];return 0===t?a.push(r.a.createElement(ae,{key:"main"})):1===t&&a.push(r.a.createElement(ne,{key:"search"})),r.a.createElement(g.a,{theme:ie},r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.appContent},r.a.createElement(le.a,{maxWidth:"lg"},r.a.createElement("main",{className:e.mainContent},a)))))}}]),t}(r.a.Component),ce=Object(p.a)(se)(oe),me=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ce,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var de=a(89);l.a.render(r.a.createElement(de.a,null,r.a.createElement(me,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},86:function(e,t,a){e.exports=a.p+"static/media/logo.d9714682.png"},96:function(e,t,a){e.exports=a(124)}},[[96,1,2]]]);
//# sourceMappingURL=main.fe0c0cc7.chunk.js.map