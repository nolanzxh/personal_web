(this.webpackJsonppresonal_web=this.webpackJsonppresonal_web||[]).push([[0],{31:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),s=n.n(a),c=n(16),o=n.n(c),l=(n(40),n(5)),r=n(6),d=n(23),h=n(8),j=n(7),m=(n(41),n(42),n(43),n(4)),p=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).onPageChange=function(){e.props.history.push(e.props.to)},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isSmallScreen,n=e.active;return Object(i.jsxs)("div",{className:t?"menuitem_small":"menuitem",children:[Object(i.jsx)("div",{className:"".concat(t?"icon_button_small":"icon_button"," ").concat(n?"menuitem_active":null),onClick:this.onPageChange,children:Object(i.jsx)("span",{className:"iconfont menu_icon",children:this.props.icon})}),Object(i.jsx)("div",{className:t?"itemname_small":"itemname",children:this.props.itemName})]})}}]),n}(s.a.Component),b=Object(m.g)(p),u=(n(31),n(2)),O=n(10),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).handleClick=function(){e.props.handleMenubarDisplay()},e}return Object(r.a)(n,[{key:"render",value:function(){var e=this.props,t=e.isSmallScreen,n=e.showMenuBar;return Object(i.jsx)("div",{className:t?"menu_container_small":"menu_container",children:Object(i.jsxs)("div",{className:t?"menu_small":"menu",children:[Object(i.jsxs)("div",{className:t?"logo_small":"logo",children:["Z",Object(i.jsx)("p",{style:{display:"inline",color:"#cf000f"},children:"."})]}),Object(i.jsxs)(u.b.div,{initial:"hide",animate:n?"show":"hide",variants:{hide:{opacity:0},show:{opacity:1}},transition:{duration:.3},className:"".concat(t?"itemlist_small":"itemlist"," ").concat(n?"show_bar":"hide_bar"),children:[Object(i.jsx)(b,{itemName:"Home",icon:"\ue702",to:"home",active:"/home"===this.props.isOn,isSmallScreen:t}),Object(i.jsx)(b,{itemName:"About",icon:"\ue715",to:"about",active:"/about"===this.props.isOn,isSmallScreen:t}),Object(i.jsx)(b,{itemName:"Resume",icon:"\ue6e6",to:"resume",active:"/resume"===this.props.isOn,isSmallScreen:t}),Object(i.jsx)(b,{itemName:"Skill",icon:"\ue6f4",to:"skill",active:"/skill"===this.props.isOn,isSmallScreen:t}),Object(i.jsx)(b,{itemName:"Contact",icon:"\ue70a",to:"contact",active:"/contact"===this.props.isOn,isSmallScreen:t})]}),Object(i.jsx)("div",{onClick:this.handleClick,className:t?"menubar_icon_small":"menubar_icon",children:Object(i.jsx)("span",{className:"middle_line ".concat(n?"opened":null)})})]})})}}]),n}(s.a.Component),v=Object(O.b)((function(e){return{isSmallScreen:e.isSmallScreen,showMenuBar:e.showMenuBar}}),{handleMenubarDisplay:function(){return function(e){e({type:"SWITCH_MENU_BAR"})}}})(x),_=(n(49),{pageInitial:{opacity:0,x:"-100%"},pageAnimate:{opacity:1,x:0},pageOut:{opacity:0,x:"100%"}}),g={rest:{opacity:1},hover:{opacity:0,transition:{duration:.4,type:"tween",ease:"easeIn"}}},N={rest:{opacity:0},hover:{opacity:1,transition:{duration:.4,type:"tween",ease:"easeInOut"}}},f={rest:{width:0,position:"absolute",transition:{duration:.3}},hover:{width:"100%",position:"absolute",transition:{duration:.3}}},y={rest:{height:0,position:"absolute",transition:{duration:.3}},hover:{height:"100%",position:"absolute",transition:{duration:.3,delay:.3}}},S={rest:{width:0,position:"absolute",transition:{duration:.3}},hover:{width:"100%",position:"absolute",transition:{duration:.3,delay:.6}}},w={rest:{height:0,position:"absolute",transition:{duration:.3}},hover:{height:"100%",position:"absolute",transition:{duration:1,delay:.9}}},k={position:"relative",scale:1.2,zIndex:100,transition:{duration:.3}},I={rest:{opacity:1},hover:{scale:1.05,transition:{duration:.4,type:"tween",ease:"easeIn"}}},C={rest:{opacity:0},hover:{opacity:1,transition:{duration:.4,type:"tween",ease:"easeInOut"}}},M=n(33),A=n.n(M),W=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e={strings:["<strong>an university student.</strong>^1000","<strong>an information engineer.</strong>^1000","<strong>a web developer.</strong>^1000"],typeSpeed:50,backSpeed:40,startDelay:500,backDelay:700,loop:!0,loopCount:1/0};this.typed=new A.a(this.identity,e)}},{key:"componentWillUnmount",value:function(){this.typed.destroy()}},{key:"render",value:function(){var e=this;return Object(i.jsxs)(u.b.div,{className:"home_page",initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:_,transition:{duration:.6,type:"tween",ease:"anticipate"},children:[Object(i.jsx)(u.b.div,{initial:"authorIn",animate:"authorOut",variants:{authorIn:{scale:.7,opacity:0},authorOut:{scale:1,opacity:1}},transition:{delay:.5},className:"author",children:"Xianhua ZHOU"}),Object(i.jsxs)("div",{style:{color:"#a9a9a9",fontSize:"1.5rem",fontWeight:200},children:["I am\xa0",Object(i.jsx)("span",{className:"identity",ref:function(t){e.identity=t}})]})]})}}]),n}(s.a.Component),R=(n(50),n.p+"static/media/utc.ef8ad4d7.jpg"),E=n.p+"static/media/cfm.c0118b16.png",H=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){var e=[{pseudo:"UTC",title:"University of Technology of Compi\xe8gne",period:"2019 - 2022",desc:"Degree in computer engineering"},{pseudo:"SHU",title:"Shanghai University",period:"2016 - 2019",desc:"Bachelor's Degree in Computer Engineering"}],t=[{pseudo:"MEMORAE",title:"Developement of the MEMORAe web platform",period:"August 2020 - January 2021",place:"UTC, Compi\xe8gne",desc:"Analysis, correction and addition of functionalities of the MEMORAe web platform."},{pseudo:"CFM",title:"Full-Stack intership in Capital Fund Management",period:"February 2020 - August 2020",place:"CFM, Paris - team IT Front Execution",desc:"Design and realization of UI of an application according to the user's request with Angular, implement REST APIs with Flask, manage Oracle database."},{pseudo:"HIKVISION",title:"Computer science internship in HIKVISION",period:"June 2019 - August 2019",place:"HIKVISION, Shanghai - team Fonctions-Support",desc:"Maintenance of a Webcam platform. After-sales service offer."},{pseudo:"PERSON",title:"Personal works concerning web development techniques",period:"2018 - 2019",place:"Shanghai / Compi\xe8gne",desc:"Practice HTML, JS, JQuery by creating some simple web pages."}],n=e.length,a=e.map((function(e,t){return Object(i.jsxs)("article",{className:"timeline_item",style:t+1===n?{borderStyle:"hidden"}:null,children:[Object(i.jsx)("h5",{className:"timeline_title",children:e.title}),Object(i.jsx)("span",{className:"timeline_period",children:e.period}),Object(i.jsx)("p",{className:"timeline_description",children:e.desc})]},e.pseudo)})),s=t.length,c=t.map((function(e,t){return Object(i.jsxs)("article",{className:"timeline_item",style:t+1===s?{borderStyle:"hidden"}:null,children:[Object(i.jsx)("h5",{className:"timeline_title",children:e.title}),Object(i.jsx)("span",{className:"timeline_period",children:e.period}),Object(i.jsx)("p",{className:"timeline_description",children:e.desc})]},e.pseudo)}));return Object(i.jsxs)(u.b.div,{className:"resume_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:_,transition:{duration:.6,type:"tween",ease:"anticipate"},children:[Object(i.jsxs)("section",{className:"info_panel",children:[Object(i.jsx)("div",{className:"education_photo",children:Object(i.jsx)(u.b.img,{whileHover:k,src:R,alt:"",width:"100%"})}),Object(i.jsxs)("div",{className:"education_description",children:[Object(i.jsxs)("h3",{className:"resume_panel_title",children:[Object(i.jsx)("span",{className:"iconfont panel_title_icon",children:"\ue645"}),"Education"]}),Object(i.jsx)("div",{className:"timeline",children:a})]})]}),Object(i.jsxs)("section",{className:"info_panel",children:[Object(i.jsxs)("div",{className:"experience_description",children:[Object(i.jsxs)("h3",{className:"resume_panel_title",children:[Object(i.jsx)("span",{className:"iconfont panel_title_icon",children:"\ue627"}),"Experience"]}),Object(i.jsx)("div",{className:"timeline",children:c})]}),Object(i.jsx)("div",{className:"experience_photo",children:Object(i.jsx)(u.b.img,{whileHover:k,src:E,alt:"",width:"100%"})})]})]})}}]),n}(s.a.Component),D=Object(O.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(H),F=(n(51),n(52),function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).state={progress:"0%"},i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=0,n=setInterval((function(){t++,e.setState({progress:t+"%"}),t===e.props.percentage&&clearInterval(n)}),10)}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"ability",children:[Object(i.jsx)("div",{className:"ability_bar_title",children:Object(i.jsxs)("h5",{className:"barname",children:[this.props.title,Object(i.jsx)("span",{className:"bar_percentage",children:this.state.progress})]})}),Object(i.jsx)("div",{className:"bar_container",children:Object(i.jsx)(u.b.div,{className:"bar_content",initial:"begin",animate:"end",variants:{begin:{width:0},end:{width:this.props.percentage+"%"}},s:!0,transition:{duration:1,type:"spring",stiffness:30,damping:5}})})]})}}]),n}(s.a.Component)),z=n.p+"static/media/me.5d7b6c40.png",U=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsx)(u.b.div,{className:"skill_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:_,transition:{duration:.6,type:"tween",ease:"anticipate"},children:Object(i.jsxs)("section",{className:"skill_panel",children:[Object(i.jsxs)(u.b.div,{className:"skill_photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(i.jsxs)("div",{className:"borders",children:[Object(i.jsx)(u.b.span,{className:"top",variants:f}),Object(i.jsx)(u.b.span,{className:"right",variants:y}),Object(i.jsx)(u.b.span,{className:"bottom",variants:S}),Object(i.jsx)(u.b.span,{className:"left",variants:w})]}),Object(i.jsx)(u.b.img,{className:"photo_front",src:z,alt:"",width:"100%",variants:g}),Object(i.jsxs)(u.b.div,{className:"photo_back",variants:N,children:[Object(i.jsx)("h5",{className:"photo_back_begin",children:"Studying"}),Object(i.jsx)("h1",{className:"photo_back_middle",children:"NEVER"}),Object(i.jsx)("h5",{className:"photo_back_end",children:"Stop"})]})]}),Object(i.jsxs)("div",{className:"skill_content",children:[Object(i.jsx)("h2",{className:"skill_title",children:"My Capacity"}),Object(i.jsx)("p",{className:"skill_description",children:"Passionate about web development!"}),Object(i.jsx)(F,{percentage:70,title:"Linux"}),Object(i.jsx)(F,{percentage:80,title:"Git"}),Object(i.jsx)(F,{percentage:60,title:"jQuery"}),Object(i.jsx)(F,{percentage:75,title:"Angular"}),Object(i.jsx)(F,{percentage:70,title:"React"}),Object(i.jsx)(F,{percentage:90,title:"SQL"}),Object(i.jsx)(F,{percentage:70,title:"Python"})]})]})})}}]),n}(s.a.Component),B=Object(O.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(U),P=(n(53),n.p+"static/media/traveller.dfc567e9.png"),T=n.p+"static/media/developer.6713c8f9.png",L=n.p+"static/media/student.c70265c9.png",J=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsxs)(u.b.div,{className:"about_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:_,transition:{duration:.6,type:"tween",ease:"anticipate"},children:[Object(i.jsx)("h1",{className:"about_texts_title",children:"About Me"}),Object(i.jsx)("section",{className:"about_panel",children:Object(i.jsxs)("div",{className:"about_texts",children:[Object(i.jsx)("div",{className:"descriptions_container",children:Object(i.jsx)("p",{className:"descriptions",children:"Hello! My name is Xianhua ZHOU, a university student in UTC (University of Technology of Compi\xe8gne). I'm interested in web development, guitar and fitness."})}),Object(i.jsxs)("div",{className:"info_list",children:[Object(i.jsxs)("section",{className:"info_item_column",children:[Object(i.jsxs)("div",{className:"info_item",children:[Object(i.jsx)("h3",{className:"info_item_title",children:"First Name:"}),Object(i.jsx)("p",{className:"info_item_content",children:"Xianhua"})]}),Object(i.jsxs)("div",{className:"info_item",children:[Object(i.jsx)("h3",{className:"info_item_title",children:"Last Name:"}),Object(i.jsx)("p",{className:"info_item_content",children:"ZHOU"})]})]}),Object(i.jsxs)("section",{className:"info_item_column",children:[Object(i.jsxs)("div",{className:"info_item",children:[Object(i.jsx)("h3",{className:"info_item_title",children:"Age:"}),Object(i.jsx)("p",{className:"info_item_content",children:"24"})]}),Object(i.jsxs)("div",{className:"info_item",children:[Object(i.jsx)("h3",{className:"info_item_title",children:"Residence:"}),Object(i.jsx)("p",{className:"info_item_content",children:"France"})]})]})]})]})}),Object(i.jsx)(u.b.div,{className:"separator",initial:{width:0},animate:{width:"80%"},transition:{duration:.3,delay:.4}}),Object(i.jsxs)("section",{className:"about_panel",children:[Object(i.jsx)("h2",{className:"about_photo_title",children:"Who I Am"}),Object(i.jsx)("div",{className:"about_photos",children:Object(i.jsxs)("section",{className:"about_photo_content",children:[Object(i.jsxs)(u.b.div,{className:"photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(i.jsx)(u.b.img,{className:"blur_photo",src:T,alt:"",width:"100%",height:"300px",variants:I}),Object(i.jsxs)(u.b.div,{className:"blur_photo_back",variants:C,children:[Object(i.jsx)("h5",{className:"blur_photo_back_title",children:"Developer"}),"of Full-Stack"]})]}),Object(i.jsxs)(u.b.div,{className:"photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(i.jsx)(u.b.img,{className:"blur_photo",src:L,alt:"",width:"100%",height:"300px",variants:I}),Object(i.jsxs)(u.b.div,{className:"blur_photo_back",variants:C,children:[Object(i.jsx)("h5",{className:"blur_photo_back_title",children:"Student"}),"in UTC"]})]}),Object(i.jsxs)(u.b.div,{className:"photo_container",initial:"rest",whileHover:"hover",animate:"rest",children:[Object(i.jsx)(u.b.img,{className:"blur_photo",src:P,alt:"",width:"100%",height:"300px",variants:I}),Object(i.jsxs)(u.b.div,{className:"blur_photo_back",variants:C,children:[Object(i.jsx)("h5",{className:"blur_photo_back_title",children:"Traveller"}),"follow heart"]})]})]})})]})]})}}]),n}(s.a.Component),Z=Object(O.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(J),K=(n(54),n(19)),Q={position:"relative"},V=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(l.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={selectedPlace:{},activeMarker:{},showingInfoWindow:!1},e.onMarkerClick=function(t,n,i){return e.setState({selectedPlace:t,activeMarker:n,showingInfoWindow:!0})},e.onClose=function(t){e.state.showingInfoWindow&&e.setState({showingInfoWindow:!1,activeMarker:null})},e}return Object(r.a)(n,[{key:"render",value:function(){return Object(i.jsx)(u.b.div,{className:"contact_page ".concat(this.props.isSmallScreen?"smallscreen_page":null),initial:"pageInitial",animate:"pageAnimate",exit:"pageOut",variants:_,transition:{duration:.6,type:"tween",ease:"anticipate"},children:Object(i.jsxs)("section",{className:"contact_panel",children:[Object(i.jsxs)("section",{className:"map",children:[Object(i.jsx)("div",{className:"map_title",children:"My location"}),Object(i.jsxs)(K.Map,{google:this.props.google,zoom:14,containerStyle:Q,initialCenter:{lat:49.41235203166623,lng:2.8122966426523854},children:[Object(i.jsx)(K.Marker,{onClick:this.onMarkerClick,name:"My position",title:"My position",position:{lat:49.41235203166623,lng:2.8122966426523854}}),Object(i.jsx)(K.InfoWindow,{marker:this.state.activeMarker,visible:this.state.showingInfoWindow,onClose:this.onClose,children:Object(i.jsx)("div",{children:Object(i.jsx)("h4",{children:this.state.selectedPlace.name})})})]})]}),Object(i.jsxs)("div",{className:"contact_list",children:[Object(i.jsxs)("div",{className:"contact_item",children:[Object(i.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue72f"}),Object(i.jsxs)("div",{className:"contact_item_description",children:[Object(i.jsx)("h2",{className:"contact_item_title",children:"Address"}),Object(i.jsx)("p",{className:"contact_item_content",children:"France, Compi\xe8gne"})]})]}),Object(i.jsxs)("div",{className:"contact_item",children:[Object(i.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue612"}),Object(i.jsxs)("div",{className:"contact_item_description",children:[Object(i.jsx)("h2",{className:"contact_item_title",children:"Mail"}),Object(i.jsx)("p",{className:"contact_item_content",children:"xianhua.zhou@etu.utc.fr"})]})]}),Object(i.jsxs)("div",{className:"contact_item",children:[Object(i.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue622"}),Object(i.jsxs)("div",{className:"contact_item_description",children:[Object(i.jsx)("h2",{className:"contact_item_title",children:"Phone"}),Object(i.jsx)("p",{className:"contact_item_content",children:"+33 0636109977"})]})]}),Object(i.jsxs)("div",{className:"contact_item",children:[Object(i.jsx)("span",{className:"iconfont contact_item_icon",children:"\ue666"}),Object(i.jsxs)("div",{className:"contact_item_description",children:[Object(i.jsx)("h2",{className:"contact_item_title",children:"Others"}),Object(i.jsx)("p",{className:"contact_item_content",children:"None"})]})]})]})]})})}}]),n}(s.a.Component),X=Object(O.b)((function(e){return{isSmallScreen:e.isSmallScreen}}))(Object(K.GoogleApiWrapper)({apiKey:"AIzaSyD5nHI6LnQF2qinXK9R8S6s2oMmyJDTBac"})(V)),q=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(e){var i;return Object(l.a)(this,n),(i=t.call(this,e)).handleResize=i.handleResize.bind(Object(d.a)(i)),i}return Object(r.a)(n,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleResize);var e=window.innerWidth<900||window.innerHeight<520;this.props.handleWindowResize(e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize)}},{key:"handleResize",value:function(e){var t=e.target.innerWidth<900||e.target.innerHeight<520;this.props.handleWindowResize(t)}},{key:"render",value:function(){var e=this.props,t=e.location,n=e.isSmallScreen;return Object(i.jsxs)("div",{className:"App ".concat(n?"smallmode":null),children:[Object(i.jsx)(v,{isOn:t.pathname}),Object(i.jsx)(u.a,{children:Object(i.jsxs)(m.d,{location:t,children:[Object(i.jsx)(m.b,{path:"/resume",component:D,exact:!0}),Object(i.jsx)(m.b,{path:"/about",component:Z,exact:!0}),Object(i.jsx)(m.b,{path:"/skill",component:B,exact:!0}),Object(i.jsx)(m.b,{path:"/contact",component:X,exact:!0}),Object(i.jsx)(m.b,{path:"/home",component:W,exact:!0}),Object(i.jsx)(m.b,{path:"/",render:function(){return Object(i.jsx)(m.a,{to:"/home"})}})]},t.pathname)})]})}}]),n}(s.a.Component),G=Object(O.b)((function(e){return{isSmallScreen:e.isSmallScreen,showMenuBar:e.showMenuBar}}),{handleWindowResize:function(e){return function(t){t({type:"WINDOW_RESIZE",isSmallScreen:e})}}})(Object(m.g)(q)),Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),i(e),a(e),s(e),c(e)}))},$=n(22),ee=n(30),te=n(34),ne=n(18);var ie=Object(ne.c)((function(e,t){var n=t.isSmallScreen;switch(t.type){case"WINDOW_RESIZE":return{isSmallScreen:n,showMenuBar:!n};case"SWITCH_MENU_BAR":return Object(ee.a)(Object(ee.a)({},e),{},{showMenuBar:!e.showMenuBar});default:return e}}),{isSmallScreen:!1,showMenuBar:!0},Object(ne.a)(te.a));o.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(O.a,{store:ie,children:Object(i.jsx)($.a,{children:Object(i.jsx)(G,{})})})}),document.getElementById("root")),Y()}},[[70,1,2]]]);
//# sourceMappingURL=main.97ec08ed.chunk.js.map