(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{16:function(e,t,a){},23:function(e,t,a){},27:function(e,t,a){e.exports=a(45)},33:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),i=a.n(o),s=a(18),l=a.n(s),c=a(25),u=a(2),m=a(3),d=a(1),h=a(5),p=a(4),g=a(6),f=a(13),v=(a(33),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onClickHandler=n.onClickHandler.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"onClickHandler",value:function(e){this.props.logOutUser()}},{key:"render",value:function(){return r.a.createElement("div",{className:"header-main-container"},r.a.createElement("div",{className:"header-container"},r.a.createElement("div",{className:"header-logo-container"},r.a.createElement(f.b,{to:"/",className:"header-link"},"MyFloppy")),r.a.createElement("div",{className:"header-navigation-container"},r.a.createElement(f.b,{to:"/login",className:"header-link",style:{marginRight:20,display:this.props.userLogged?"none":""}},"Log in"),r.a.createElement(f.b,{to:"/signup",className:"header-link",style:{display:this.props.userLogged?"none":""}},"Sign up"),r.a.createElement(f.b,{to:"/",className:"header-link",style:{display:this.props.userLogged?"":"none"},onClick:this.onClickHandler},"Log out"))))}}]),a}(r.a.Component)),b=a(11),E=a(8),y=(a(16),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmitHandler=n.onSubmitHandler.bind(Object(d.a)(n)),n.onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n.state={password:"",email:"",name:"","last-name":"",loginError:""},n}return Object(m.a)(a,[{key:"onSubmitHandler",value:function(e){var t=this;e.preventDefault(),fetch("api/signup",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password,name:this.state.name,"last-name":this.state["last-name"]})}).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var a=Object(E.a)(e,2),n=a[0];if(200!==a[1])return Promise.reject(n.msg);t.setState((function(){return{loginError:""}})),t.props.history.push("/login")})).catch((function(e){t.setState((function(){return{loginError:e}}))}))}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState((function(e,t){return Object(b.a)({},a,n)}))}},{key:"componentDidMount",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"signup-main-container"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-container-header"},r.a.createElement("h3",{className:"login-header-title"},"Sign up")),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmitHandler},r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p"},"Name:"),r.a.createElement("input",{name:"name",type:"text",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("p",{className:"form-input-label-p"},"Last name:"),r.a.createElement("input",{name:"last-name",type:"text",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p"},"Email:"),r.a.createElement("input",{name:"email",type:"email",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p",required:!0},"Password:"),r.a.createElement("input",{type:"password",name:"password",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"form-input-login-button"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}},""!==e.state.loginError?r.a.createElement("p",{style:{color:"#d00",fontSize:"small"}},e.state.loginError):null)))))}}]),a}(r.a.Component)),O=(a(39),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmitHandler=n.onSubmitHandler.bind(Object(d.a)(n)),n.onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n.state={password:"",email:"",loginError:""},n}return Object(m.a)(a,[{key:"onSubmitHandler",value:function(e){var t=this;e.preventDefault(),fetch("api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:this.state.email,password:this.state.password})}).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var a=Object(E.a)(e,2),n=a[0];if(200!==a[1])return Promise.reject(n.msg);localStorage.setItem("myDiskApplicationLoginInfo",n.token),t.setState((function(){return{loginError:""}})),t.props.logInUser(n.token),t.props.history.push("/")})).catch((function(e){t.setState((function(){return{loginError:e}}))}))}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState((function(e,t){return Object(b.a)({},a,n)}))}},{key:"componentDidMount",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"login-main-container"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-container-header"},r.a.createElement("h3",{className:"login-header-title"},"Log in")),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmitHandler},r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p"},"Email:"),r.a.createElement("input",{name:"email",type:"email",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p",required:!0},"Password:"),r.a.createElement("input",{name:"password",type:"password",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"form-input-login-button"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}},""!==e.state.loginError?r.a.createElement("p",{style:{color:"#d00",fontSize:"small"}},e.state.loginError):null)),r.a.createElement("button",{onClick:function(){return e.props.history.push("/loginrecovery")},className:"login-forgot-password-button"},"Forgot password?"))))}}]),a}(r.a.Component)),j=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmitHandler=n.onSubmitHandler.bind(Object(d.a)(n)),n.onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n.state={email:"",loginError:""},n}return Object(m.a)(a,[{key:"onSubmitHandler",value:function(e){var t=this;e.preventDefault(),fetch("/api/loginrecovery",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({email:this.state.email})}).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var a=Object(E.a)(e,2),n=a[0];if(200!==a[1])return Promise.reject(n.msg);t.setState((function(){return{loginError:""}})),t.props.history.push("/")})).catch((function(e){"string"===typeof e&&t.setState((function(){return{loginError:e}}))}))}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState((function(e,t){return Object(b.a)({},a,n)}))}},{key:"componentDidMount",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"recovery-main-container"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-container-header"},r.a.createElement("h3",{className:"login-header-title"},"Forgot password")),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmitHandler},r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p"},"Email:"),r.a.createElement("input",{name:"email",type:"email",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"form-input-login-button"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}},""!==e.state.loginError?r.a.createElement("p",{style:{color:"#d00",fontSize:"small"}},e.state.loginError):null)))))}}]),a}(r.a.Component),C=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onSubmitHandler=n.onSubmitHandler.bind(Object(d.a)(n)),n.onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n.state={password:"",loginError:""},n}return Object(m.a)(a,[{key:"onSubmitHandler",value:function(e){var t,a=this;e.preventDefault(),fetch("/api/reset",(t={method:"POST",headers:{}},Object(b.a)(t,"headers",{"content-type":"application/json",Authorization:"Bearer ".concat(this.props.match.params.token)}),Object(b.a)(t,"body",JSON.stringify({password:this.state.password})),t)).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var t=Object(E.a)(e,2),n=t[0];if(200!==t[1])return Promise.reject(n.msg);a.setState((function(){return{loginError:""}})),a.props.history.push("/login")})).catch((function(e){"string"===typeof e&&a.setState((function(){return{loginError:e}}))}))}},{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value;this.setState((function(e,t){return Object(b.a)({},a,n)}))}},{key:"componentDidMount",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"componentDidUpdate",value:function(){this.props.userLogged&&this.props.history.push("/")}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"recovery-main-container"},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-container-header"},r.a.createElement("h3",{className:"login-header-title"},"Reset password")),r.a.createElement("div",{className:"login-form-container"},r.a.createElement("form",{className:"login-form",onSubmit:this.onSubmitHandler},r.a.createElement("div",null,r.a.createElement("p",{className:"form-input-label-p"},"New Password:"),r.a.createElement("input",{name:"password",type:"password",className:"form-input-element",required:!0,onChange:this.onChangeHandler})),r.a.createElement("div",null,r.a.createElement("input",{type:"submit",className:"form-input-login-button"})),r.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",textAlign:"center"}},""!==e.state.loginError?r.a.createElement("p",{style:{color:"#d00",fontSize:"small"}},e.state.loginError):null)))))}}]),a}(r.a.Component),N=(a(40),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={searchParam:"",orderOption:"name"},n.onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"onChangeHandler",value:function(e){var t=e.target,a=t.name,n=t.value,r=t.type;this.setState((function(e){return Object(b.a)({},a,n)})),this.props.updateSearch(n,r)}},{key:"render",value:function(){return r.a.createElement("div",{className:"search-bar-main-container"},r.a.createElement("div",{className:"search-bar-element"},r.a.createElement("input",{className:"search-bar-input",type:"text",name:"searchParam",onChange:this.onChangeHandler})),r.a.createElement("div",{className:"search-bar-sort-element"},r.a.createElement("select",{className:"search-bar-select",value:this.state.orderOption,onChange:this.onChangeHandler,name:"orderOption"},r.a.createElement("option",{value:"upload-date"},"Upload date"),r.a.createElement("option",{value:"name"},"Name"),r.a.createElement("option",{value:"size"},"Size"))),r.a.createElement("div",{className:"search-bar-button-container"},r.a.createElement("button",{className:"search-bar-button",onClick:this.props.changeOrder},"\u21d5")))}}]),a}(r.a.Component)),k=(a(41),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n.state={file:"",uploading:!1,percentage:0,errorMessage:""},n.handleClick=n.handleClick.bind(Object(d.a)(n)),n.onChangeHandler=n.onChangeHandler.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"handleClick",value:function(){document.getElementById("status-file-upload-button").click()}},{key:"onChangeHandler",value:function(e){var t=this,a=Array.from(e.target.files),n=new FormData;a[0]&&(Array.from(document.getElementsByClassName("status-upload-button"))[0].value=null,n.append("file",a[0]),this.setState((function(){return{uploading:!0,errorMessage:""}})),fetch("api/data/upload",{method:"POST",headers:{Authorization:"Bearer ".concat(this.props.authorization)},body:n}).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var a=Object(E.a)(e,2),n=a[0],r=a[1],o="";200===r?(t.setState((function(){return{errorMessage:""}})),t.props.updateComp()):o="object"===typeof n.msg?n.msg.message:n.msg,t.setState((function(){return{uploading:!1,errorMessage:o}}))})).catch((function(e){t.setState((function(){return{uploading:!1,errorMessage:"Could not upload file"}}))})))}},{key:"render",value:function(){return r.a.createElement("div",{className:"status-main-container"},r.a.createElement("div",{className:"status-container"},r.a.createElement("div",{className:"status-header-container"},r.a.createElement("div",{className:"status-header-logo-main-container"},r.a.createElement("div",{className:"status-header-logo-container-outer"}),r.a.createElement("div",{className:"status-header-logo-container-inner"},r.a.createElement("h2",null,"\ud83d\udcbe"))),r.a.createElement("h2",null,this.state.uploading?"Uploading file":"MyFloppy"),r.a.createElement("form",null,r.a.createElement("input",{type:"file",className:"status-upload-button",style:{visibility:"hidden"},id:"status-file-upload-button",onChange:this.onChangeHandler}),r.a.createElement("input",{type:"button",className:"status-upload-button",disabled:this.state.uploading,onClick:this.handleClick,value:"+"}))),r.a.createElement("div",{className:"status-bar-container"},r.a.createElement("div",{className:"status-bar-container-secondary"},r.a.createElement("div",{className:"status-bar-container-outer"}),r.a.createElement("div",{className:"status-bar-container-inner",style:{width:"".concat(Math.floor(this.props.userUsed/this.props.userLimit*100),"%")}}))),r.a.createElement("div",{className:"status-storage-container"},r.a.createElement("div",{className:"status-used-storage"},r.a.createElement("h5",null,(this.props.userUsed/1024/1e3).toLocaleString(void 0,{maximumFractionDigits:2})," ","MB")),r.a.createElement("div",{className:"status-used-storage",style:{display:""===this.state.errorMessage?"none":"",color:"white"}},r.a.createElement("h5",null,this.state.errorMessage)),r.a.createElement("div",{className:"status-total-storage"},r.a.createElement("h5",null,(this.props.userLimit/1024/1e3).toLocaleString(void 0,{maximumFractionDigits:2})," ","MB")))))}}]),a}(r.a.Component)),S=(a(42),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).onClickHandler=n.onClickHandler.bind(Object(d.a)(n)),n.onClickHandlerDelete=n.onClickHandlerDelete.bind(Object(d.a)(n)),n.state={downloading:!1,deleting:!1},n}return Object(m.a)(a,[{key:"_arrayBufferToBase64",value:function(e){for(var t="",a=new Uint8Array(e),n=a.byteLength,r=0;r<n;r++)t+=String.fromCharCode(a[r]);return window.btoa(t)}},{key:"onClickHandler",value:function(e){var t=this;this.setState((function(){return{downloading:!0}})),fetch("api/data/".concat(this.props.fileId),{method:"GET",headers:{Authorization:"Bearer ".concat(this.props.authorization)}}).then((function(e){var t=e.headers.get("content-disposition").split("; ")[1].split('"')[1],a=e.headers.get("content-type");return Promise.all([t,e.arrayBuffer(),a])})).then((function(e){var a=Object(E.a)(e,3),n=a[0],r=a[1],o=a[2],i=document.createElement("a");i.setAttribute("href","data:".concat(o,";base64,")+t._arrayBufferToBase64(r)),i.setAttribute("download",n),i.style.display="none",document.body.appendChild(i),i.click(),document.body.removeChild(i),t.setState((function(e){return{downloading:!1}}))})).catch((function(e){t.setState((function(){return{downloading:!1}}))}))}},{key:"onClickHandlerDelete",value:function(e){var t=this;this.setState((function(){return{deleting:!0}})),fetch("api/data/".concat(this.props.fileId),{method:"DELETE",headers:{Authorization:"Bearer ".concat(this.props.authorization)}}).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var a=Object(E.a)(e,2);a[0],a[1];t.props.updateComp()})).catch((function(){t.setState((function(){return{deleting:!0}}))}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"file-container-class"},r.a.createElement("div",{style:{display:this.state.downloading||this.state.deleting?"":"none",width:140},className:"file-container-info-container"},r.a.createElement("p",null,r.a.createElement("strong",null,this.state.downloading?"Downloading":"Deleting"))),r.a.createElement("div",{className:"file-container-info-container"},r.a.createElement("p",{className:"file-container-info-label"},r.a.createElement("strong",null,"Name:")," ",this.props.fileName.split(".")[0]),r.a.createElement("p",{className:"file-container-info-label"},r.a.createElement("strong",null,"Extension:")," ",this.props.fileName.split(".")[1]),r.a.createElement("p",{className:"file-container-info-label"},r.a.createElement("strong",null,"Size:")," ",this.props.fileSize," B"),r.a.createElement("p",{className:"file-container-info-label"},r.a.createElement("strong",null,"Uploaded on:")," ",this.props.uploadedOn.split("T")[0])),r.a.createElement("div",{className:"file-container-button-container"},r.a.createElement("button",{onClick:this.onClickHandler,disabled:this.state.downloading||this.state.deleting},"download"),r.a.createElement("button",{onClick:this.onClickHandlerDelete,disabled:this.state.downloading||this.state.deleting},"delete")))}}]),a}(r.a.Component)),H=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidUpdate",value:function(){console.log("updated")}},{key:"render",value:function(){return this.props.display?r.a.createElement("div",{className:"signup-main-container",style:{height:275}},r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"login-container-header"},r.a.createElement("h3",{className:"login-header-title"},"Welcome \ud83d\udcbe!")),r.a.createElement("div",{style:{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:20}},r.a.createElement("h3",null,"Enjoy a whopping 1.44MB of free cloud storage and feel like you are right back in 1998."),r.a.createElement("h5",{style:{marginTop:0}},"Have an account? ",r.a.createElement("a",{href:"/login"},"Log in.")),r.a.createElement("h5",{style:{marginTop:0}},"First time user? ",r.a.createElement("a",{href:"/signup"},"Sign up."))))):null}}]),a}(r.a.Component),w=(a(23),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={shouldUpdate:!0,userInfo:{},userFiles:[],files:[],searchParam:"",orderBy:"name",invertOrder:!1},n.getData=n.getData.bind(Object(d.a)(n)),n.searchParamChange=n.searchParamChange.bind(Object(d.a)(n)),n.invertOrder=n.invertOrder.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"getData",value:function(e){var t=this;console.log("running get data"),fetch("api/userinfo",{method:"GET",headers:{Authorization:"Bearer ".concat(this.props.authorization)}}).then((function(e){return Promise.all([e.json(),e.status])})).then((function(e){var a=Object(E.a)(e,2),n=a[0];return 200===a[1]?Promise.all([n,fetch("api/data",{method:"GET",headers:{Authorization:"Bearer ".concat(t.props.authorization)}})]):Promise.reject("could not retrieve user data")})).then((function(e){var t=Object(E.a)(e,2),a=t[0],n=t[1];return Promise.all([a,n.json(),n.status])})).then((function(e){var a=Object(E.a)(e,3),n=a[0],r=a[1];if(200!==a[2])return Promise.reject("could not retrieve user data");t.setState((function(e){return{userInfo:n,userFiles:r.files}}))})).catch((function(e){}))}},{key:"searchParamChange",value:function(e,t){"text"===t&&this.setState((function(t){return{searchParam:e}})),"select-one"===t&&this.setState((function(t){return{orderBy:e}}))}},{key:"invertOrder",value:function(){this.setState((function(e){return{invertOrder:!e.invertOrder}}))}},{key:"componentDidUpdate",value:function(e){console.log("updated"),e.location.key!==this.props.location.key&&this.props.userLogged&&this.getData()}},{key:"componentDidMount",value:function(e,t,a){this.props.userLogged&&this.getData()}},{key:"render",value:function(){var e=this,t=this.state.userFiles.filter((function(t){return t.name.toLowerCase().includes(e.state.searchParam.toLowerCase())})).sort((function(t,a){var n,r;return"name"===e.state.orderBy?(n=t[e.state.orderBy].toLowerCase().split(".")[0],r=a[e.state.orderBy].toLowerCase().split(".")[0]):"upload-date"===e.state.orderBy?(n=Date.parse(t[e.state.orderBy]),r=Date.parse(a[e.state.orderBy])):(n=t[e.state.orderBy],r=a[e.state.orderBy]),n>=r?e.state.invertOrder?-1:1:e.state.invertOrder?1:-1})).map((function(t){return r.a.createElement(S,{uploadedOn:t["upload-date"],fileName:t.name,key:t._id,fileId:t._id,fileSize:t.size,authorization:e.props.authorization,updateComp:e.getData})}));return r.a.createElement("div",{className:"user-data-container"},r.a.createElement(k,{userLimit:this.state.userInfo.assignedSpace,userUsed:this.state.userInfo.usedSpace,authorization:this.props.authorization,updateComp:this.getData}),r.a.createElement(N,{updateSearch:this.searchParamChange,changeOrder:this.invertOrder}),t)}}]),a}(r.a.Component)),D=(a(43),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(u.a)(this,a),(n=t.call(this,e)).state={loggedIn:!1,authorization:"",busy:!1,credentialsChecked:!1},n.logOutUser=n.logOutUser.bind(Object(d.a)(n)),n.logInUser=n.logInUser.bind(Object(d.a)(n)),n.setStateBusy=n.setStateBusy.bind(Object(d.a)(n)),n}return Object(m.a)(a,[{key:"setStateBusy",value:function(e){this.setState((function(t,a){return{busy:e}}))}},{key:"logOutUser",value:function(){this.setState((function(e,t){return localStorage.removeItem("myDiskApplicationLoginInfo"),{loggedIn:!1,authorization:""}}))}},{key:"logInUser",value:function(e){this.setState((function(t,a){return{loggedIn:!0,authorization:e}}))}},{key:"checkCredentials",value:function(){var e=Object(c.a)(l.a.mark((function e(){var t,a,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,this.setState((function(){return{credentialsChecked:!1}})),console.log("runnig check credentials"),!(t=localStorage.getItem("myDiskApplicationLoginInfo"))){e.next=13;break}return e.next=7,fetch("/api/verify",{method:"POST",headers:{Authorization:"Bearer ".concat(t)}});case 7:return a=e.sent,n=a.status,e.next=11,a.json();case 11:e.sent,200===n?this.setState((function(){return{loggedIn:!0,authorization:t}})):500!==n&&localStorage.removeItem("myDiskApplicationLoginInfo");case 13:e.next=17;break;case 15:e.prev=15,e.t0=e.catch(0);case 17:this.setState((function(){return{credentialsChecked:!0}}));case 18:case"end":return e.stop()}}),e,this,[[0,15]])})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){this.checkCredentials()}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v,{userLogged:this.state.loggedIn,logOutUser:this.logOutUser}),r.a.createElement("div",{className:"app-container"},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:"/login",render:function(t){return r.a.createElement(O,Object.assign({},t,{logInUser:e.logInUser,userLogged:e.state.loggedIn}))}}),r.a.createElement(g.a,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(y,Object.assign({},t,{userLogged:e.state.loggedIn}))}}),r.a.createElement(g.a,{exact:!0,path:"/loginrecovery",render:function(t){return r.a.createElement(j,Object.assign({},t,{userLogged:e.state.loggedIn}))}}),r.a.createElement(g.a,{exact:!0,path:"/resetaccount/:token",render:function(t){return r.a.createElement(C,Object.assign({},t,{userLogged:e.state.loggedIn}))}}),r.a.createElement(g.a,{exact:!0,path:"/",render:function(t){return e.state.loggedIn?r.a.createElement(w,Object.assign({},t,{userLogged:e.state.loggedIn,authorization:e.state.authorization})):r.a.createElement(H,{display:e.state.credentialsChecked})}}),r.a.createElement(g.a,{path:"/",render:function(){return r.a.createElement("div",{className:"user-data-container"},r.a.createElement("h2",null,"Not Found ",r.a.createElement("a",{href:"/"}," click here to go back")))}}))))}}]),a}(r.a.Component));a(44);i.a.render(r.a.createElement(f.a,null,r.a.createElement(D,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.cb130f64.chunk.js.map