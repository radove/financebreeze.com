(window.webpackJsonpfinancebreeze=window.webpackJsonpfinancebreeze||[]).push([[0],{64:function(e,t,a){e.exports=a.p+"static/media/logo.d9714682.png"},69:function(e,t,a){e.exports=a(95)},74:function(e,t,a){},75:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(10),l=a.n(i),s=(a(74),a(16)),o=a(17),c=a(21),m=a(18),h=a(20),d=(a(75),a(15)),u=a(34),g=a(139),p=a(5),f=a(133),y=a(134),v=a(96),E=a(136),b=a(135),w=a(43),x=a(90),S=a(140),O=a(63),M=a.n(O),P=a(22),j=(a(87),a(14)),k=a.n(j),D=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2}),C=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e)))._onMouseLeave=function(){a.setState({crosshairValues:[]})},a._onNearestX=function(e,t){var n=t.index,r=k()(e.x).format("MMMM Do YYYY");a.setState({crosshairValue:e.y,crosshairDate:r,crosshairValues:[a.state.additionaldata[n]]})},a.state={data:[],crosshairValues:[],additionaldata:[],lastDrawLocation:null,crosshairDate:"",crosshairValue:0,width:0,height:400},a.updateWindowDimensions=a.updateWindowDimensions.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"refreshData",value:function(){for(var e=!1,t=k()(),a=k()(),n=this.props.interest/100/12,r=this.props.remainingBalance,i=this.props.remainingBalance,l=[],s=[],o=0,c=0;r>0;){var m=r*n;o+=m;var h=this.props.currentMortgagePayment-m;h<0?(e=!0,r=0):(r-=h,t=k()(t).add(1,"months").calendar(),l.push({x:k()(t).valueOf(),y:r}))}for(;i>0;){var d=i*n;c+=d;var u=this.props.currentMortgagePayment-d;u<0?(e=!0,i=0):(e=!1,i-=u,i-=this.props.additionalMortgagePayment,a=k()(a).add(1,"months").calendar(),s.push({x:k()(a).valueOf(),y:i}))}var g=k()(t).diff(k()(a),"years"),p=k()(a).diff(k()(),"years");this.setState({upsidedown:e,additionaldata:s,data:l}),this.props.setInterestSaved(o,c),this.props.setYearsSaved(g,p)}},{key:"updateWindowDimensions",value:function(){if(null!==document.getElementById("MortgagePayoffOverTime")){var e=document.getElementById("MortgagePayoffOverTime").clientWidth-50;this.state.width===e&&this.state.height===window.innerHeight||this.setState({width:e})}}},{key:"componentDidMount",value:function(){window.removeEventListener("resize",this.updateWindowDimensions),window.removeEventListener("orientationchange",this.updateWindowDimensions),window.removeEventListener("webkitfullscreenchange",this.handleExitFullscreen,!1),window.removeEventListener("mozfullscreenchange",this.handleExitFullscreen,!1),window.removeEventListener("msfullscreenchange",this.handleExitFullscreen,!1),window.removeEventListener("fullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("orientationchange",this.updateWindowDimensions),window.addEventListener("resize",this.updateWindowDimensions),window.addEventListener("webkitfullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("mozfullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("fullscreenchange",this.handleExitFullscreen,!1),window.addEventListener("msfullscreenchange",this.handleExitFullscreen,!1),this.updateWindowDimensions(),this.refreshData()}},{key:"componentDidUpdate",value:function(e){this.props.additionalMortgagePayment!==e.additionalMortgagePayment&&this.refreshData(),this.props.currentMortgagePayment!==e.currentMortgagePayment&&this.refreshData(),this.props.remainingBalance!==e.remainingBalance&&this.refreshData(),this.props.interest!==e.interest&&this.refreshData()}},{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.lastDrawLocation;return!0===this.state.upsidedown?r.a.createElement("div",null,"You will never pay off the loan in this situation"):r.a.createElement("div",null,r.a.createElement(P.g,{onMouseLeave:this._onMouseLeave,animation:!0,margin:{right:100,left:100},xType:"time",width:this.state.width,height:this.state.height,xDomain:a&&[a.left,a.right],yDomain:a&&[a.bottom,a.top]},r.a.createElement(P.e,{style:{opacity:.05}}),r.a.createElement(P.d,{style:{opacity:.05}}),r.a.createElement(P.f,{style:{fill:"white"},tickTotal:5}),r.a.createElement(P.h,{style:{fill:"white"},tickTotal:5}),r.a.createElement(P.a,{animation:!0,style:{fill:"#ffaaaa",stroke:"#992e24",strokeWidth:"2px",strokeDasharray:5,strokeOpacity:1,fillOpacity:1,pointerEvents:this.props.brushing?"none":"auto"},curve:"curveNatural",data:this.state.data}),r.a.createElement(P.a,{animation:!0,style:{fill:"#9AB9C8",stroke:"#407088",strokeDasharray:5,strokeWidth:"2px",strokeOpacity:1,fillOpacity:1,pointerEvents:this.props.brushing?"none":"auto"},curve:"curveNatural",data:this.state.additionaldata,onNearestX:this._onNearestX}),r.a.createElement(P.b,{values:this.state.crosshairValues,style:{line:{opacity:.25,width:"2px",backgroundColor:"#831613"}}},r.a.createElement(S.a,{avatar:r.a.createElement(x.a,{style:{backgroundColor:"#00e6ac"}},r.a.createElement(M.a,null)),label:this.state.crosshairDate+": "+D.format(this.state.crosshairValue),className:t.chip})),r.a.createElement(P.c,{onBrushEnd:function(t){return e.setState({lastDrawLocation:t})},onDrag:function(t){e.setState({lastDrawLocation:{bottom:a.bottom+(t.top-t.bottom),left:a.left-(t.right-t.left),right:a.right-(t.right-t.left),top:a.top+(t.top-t.bottom)}})}})))}}]),t}(n.Component),L=Object(p.a)(function(e){return{root:{flexGrow:1},paperMain:{flex:1,display:"flex",flexDirection:"column"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},media:{height:150},chip:{margin:e.spacing(1)}}})(C),I=a(138),B=a(64),F=a.n(B),z=(a(93),new Intl.NumberFormat("en-US",{style:"currency",currency:"USD",minimumFractionDigits:2})),N=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).props=e,a.state={data:{},saved:0,years:0,yearsLeft:0,interestPaid:0,currentMortgagePayment:1308.76,remainingBalance:15e4,interest:3.75,additionalMortgagePayment:500},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.interestSaved=a.interestSaved.bind(Object(d.a)(a)),a.saveSession=a.saveSession.bind(Object(d.a)(a)),a.loadSession=a.loadSession.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"interestSaved",value:function(e,t){this.setState({saved:e-t,interestPaid:t})}},{key:"yearsSaved",value:function(e,t){this.setState({years:e,yearsLeft:t})}},{key:"handleChange",value:function(e,t){var a=e.target.value;a=(a=(a=a.replace(/\$/g,"")).replace(/ /g,"")).replace(/,/g,""),"interest"===t&&(e.target.value>7&&(a=7),e.target.value<=0&&(a=.1)),this.setState(Object(u.a)({},t,a),this.saveSession)}},{key:"saveSession",value:function(){localStorage.setItem("financebreeze_currentMortgagePayment",this.state.currentMortgagePayment),localStorage.setItem("financebreeze_remainingBalance",this.state.remainingBalance),localStorage.setItem("financebreeze_interest",this.state.interest),localStorage.setItem("financebreeze_additionalMortgagePayment",this.state.additionalMortgagePayment)}},{key:"loadSession",value:function(){var e=localStorage.getItem("financebreeze_currentMortgagePayment"),t=localStorage.getItem("financebreeze_remainingBalance"),a=localStorage.getItem("financebreeze_interest"),n=localStorage.getItem("financebreeze_additionalMortgagePayment");null!==e&&null!==t&&null!==a&&null!==n&&this.setState({currentMortgagePayment:e,remainingBalance:t,interest:a,additionalMortgagePayment:n})}},{key:"componentDidMount",value:function(){this.loadSession()}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement(f.a,{container:!0,spacing:3},r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(v.a,null,r.a.createElement("div",{style:{float:"left",margin:"5px"}},r.a.createElement("img",{alt:"",src:F.a,width:66})),r.a.createElement("form",{sclassName:t.container,noValidate:!0,autoComplete:"off"},r.a.createElement("div",{align:"center"},r.a.createElement(I.a,{id:"outlined-name",label:"Mortgage Payment (PI)",className:t.textField,value:this.state.currentMortgagePayment,onChange:function(t){return e.handleChange(t,"currentMortgagePayment")},margin:"normal"}),r.a.createElement(I.a,{id:"outlined-name",label:"Remaining Balance",className:t.textField,value:this.state.remainingBalance,onChange:function(t){return e.handleChange(t,"remainingBalance")},margin:"normal"}),r.a.createElement(I.a,{id:"outlined-name",label:"Interest Rate",className:t.textField,value:this.state.interest,onChange:function(t){return e.handleChange(t,"interest")},margin:"normal"}),r.a.createElement(I.a,{id:"outlined-name",label:"Additional Payment",className:t.textField,value:this.state.additionalMortgagePayment,onChange:function(t){return e.handleChange(t,"additionalMortgagePayment")},margin:"normal"}))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement("div",{id:"MortgagePayoffOverTime"},r.a.createElement(y.a,null,r.a.createElement(b.a,{title:"Mortgage Early Payoff Calculator",subheader:"Plan for your future with FinanceBreeze.com"}),r.a.createElement(E.a,null,r.a.createElement(L,{brushing:!1,additionalMortgagePayment:this.state.additionalMortgagePayment,currentMortgagePayment:this.state.currentMortgagePayment,remainingBalance:this.state.remainingBalance,interest:this.state.interest,setInterestSaved:this.interestSaved.bind(this),setYearsSaved:this.yearsSaved.bind(this)}))))),r.a.createElement(f.a,{item:!0,xs:3},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Years Saved"}),r.a.createElement(E.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(w.a,{variant:"h4"}," ",this.state.years+" Years"," "))))),r.a.createElement(f.a,{item:!0,xs:3},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Interest Saved"}),r.a.createElement(E.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(w.a,{variant:"h4"}," ",z.format(this.state.saved)," "))))),r.a.createElement(f.a,{item:!0,xs:3},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Years Left"}),r.a.createElement(E.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(w.a,{variant:"h4"}," ",this.state.yearsLeft+" Years"," "))))),r.a.createElement(f.a,{item:!0,xs:3},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Interest Paid"}),r.a.createElement(E.a,null,r.a.createElement("div",{align:"center"},r.a.createElement(w.a,{variant:"h4"}," ",z.format(this.state.interestPaid)," "))))),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(y.a,null,r.a.createElement(b.a,{subheader:"Powered by Finance Breeze"}),r.a.createElement(E.a,null,r.a.createElement(w.a,null,"Finance Breeze is a hobby website in order to help people pay off real-estate at a faster pace to setup for investment opportunities and cashflow (through rentals or next deal)."))))))}}]),t}(n.Component),W=Object(p.a)(function(e){return{textField:{marginLeft:e.spacing(1),marginRight:e.spacing(1)},root:{flexGrow:1},paperMain:{flex:1,display:"flex",flexDirection:"column"},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},media:{height:150}}})(N),_=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey",r.a.createElement("br",null),"hey hey hey hey hey hey hey hey")}}]),t}(n.Component),Y=a(66),T=Object(Y.a)({palette:{primary:{main:"#f2f6f5"},secondary:{main:"#af0404"}},overrides:{MuiDrawer:{paper:{backgroundColor:"#142033"}},MuiDivider:{root:{backgroundColor:"#404854"}},MuiListItemIcon:{root:{color:"inherit",marginRight:0,"& svg":{fontSize:20}}}},typography:{fontSize:14,fontFamily:['"Titillium Web"',"Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'].join(",")}}),U=a(137),V={button:{margin:"5px",fontSize:"8pt"},root:{display:"flex",minHeight:"100vh"},drawer:Object(u.a)({},T.breakpoints.up("sm"),{width:256,flexShrink:0}),appContent:{flex:1,display:"flex",flexDirection:"column"},mainContent:{flex:1,padding:"15px 15px 0"}},A=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).handleDrawerToggle=function(){a.setState(function(e){return{mobileOpen:!e.mobileOpen}})},a.state={mobileOpen:!1,landing:0},a.handlePageLanding=a.handlePageLanding.bind(Object(d.a)(a)),a}return Object(h.a)(t,e),Object(o.a)(t,[{key:"handlePageLanding",value:function(e){this.setState({landing:e})}},{key:"render",value:function(){var e=this.props.classes,t=this.state.landing,a=[];return 0===t?a.push(r.a.createElement(W,{key:"main"})):1===t&&a.push(r.a.createElement(_,{key:"search"})),r.a.createElement(g.a,{theme:T},r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.appContent},r.a.createElement(U.a,{maxWidth:"lg"},r.a.createElement("main",{className:e.mainContent},a)))))}}]),t}(r.a.Component),R=Object(p.a)(V)(A),H=function(e){function t(){return Object(s.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(R,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(67);l.a.render(r.a.createElement(X.a,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[69,1,2]]]);
//# sourceMappingURL=main.fb3966e3.chunk.js.map