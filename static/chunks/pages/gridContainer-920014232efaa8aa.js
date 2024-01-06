(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[446],{4125:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/gridContainer",function(){return a(7200)}])},9936:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return CardCharacter}});var r=a(5893),n=a(7963),s=a.n(n),l=a(3641),i=a.n(l),o=a(1664),c=a.n(o);function CardCharacter(e){var t;return(0,r.jsx)("div",{className:i().grid,children:null===(t=e.characters)||void 0===t?void 0:t.map((t,a)=>(0,r.jsxs)(c(),{href:{pathname:"/characterDetails/[id]",query:{id:t.id}},className:i().card,children:[(0,r.jsx)("img",{className:s().img,src:t.image}),(0,r.jsxs)("h3",{className:s().name_item,children:[t.name," "]}),e.contentCharacter&&(0,r.jsxs)("div",{className:"text-left",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Species:"})," ",t.species]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Gender:"})," ",t.gender]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Status:"})," ",t.status]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Type:"})," ",""==t.type?"No Type":t.type," "]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("b",{children:"Episodes:"})," ",t.episode.length]})]})]},t.id))})}},1092:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Filter}});var r=a(5893),n=a(7963),s=a.n(n),l=a(326),i=a(7294);function Filter(e){let t;let[a,n]=(0,i.useState)({status:!1,gender:!1,location:!0}),[o]=(0,i.useState)([{value:"alive",label:"Alive"},{value:"dead",label:"Dead"},{value:"unknown",label:"Unknown"}]),[c]=(0,i.useState)([{value:"female",label:"Female"},{value:"male",label:"Male"},{value:"genderless",label:"Genderless"},{value:"unknown",label:"Unknown"}]);return(0,r.jsxs)("div",{className:s().filter,children:[(0,r.jsx)("div",{className:s().text_wrap,children:(0,r.jsx)("input",{type:"text",placeholder:"Name",defaultValue:e.name,className:"text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500",onChange:a=>{clearTimeout(t),t=setTimeout(()=>{console.log("NAME CHANGED ",a),e.setName(a.target.value),e.reloadQuery(a.target.value)},800)}})}),(0,r.jsx)("div",{className:s().select_wrap,children:(0,r.jsx)(l.ZP,{className:"focus:border-lime-500 rounded focus:outline-none mx-2 w-40 m-1.5",isLoading:a.status,isClearable:!0,isSearchable:!0,placeholder:"Status...",options:o,defaultValue:e.status,onChange:t=>{console.log("STATUS CHANGED ",t);let a=null==t?"":t.value;e.setStatus(a),e.reloadQuery(void 0,a)}})}),(0,r.jsx)("div",{className:s().text_wrap,children:(0,r.jsx)("input",{type:"text",placeholder:"Specie",defaultValue:e.specie,className:"text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500",onChange:a=>{clearTimeout(t),t=setTimeout(()=>{console.log("Specie ",a),e.setSpecie(a.target.value),e.reloadQuery(void 0,void 0,void 0,void 0,a.target.value)},800)}})}),(0,r.jsx)("div",{className:s().text_wrap,children:(0,r.jsx)("input",{type:"text",placeholder:"Type",defaultValue:e.type,className:"text-gray-700 border border-gray-200 rounded focus:outline-none focus:border-lime-500",onChange:a=>{clearTimeout(t),t=setTimeout(()=>{console.log("Type ",a),e.setType(a.target.value),e.reloadQuery(void 0,void 0,void 0,a.target.value)},800)}})}),(0,r.jsx)("div",{className:s().select_wrap,children:(0,r.jsx)(l.ZP,{className:"focus:border-lime-500 rounded focus:outline-none mx-2 w-44 m-1.5",isLoading:a.gender,defaultValue:e.gender,isClearable:!0,isSearchable:!0,placeholder:"Gender...",options:c,onChange:t=>{console.log("Gender CHANGED ",t);let a=null==t?"":t.value;e.setGender(a),e.reloadQuery(void 0,void 0,a)}})})]})}a(2206)},7200:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return GridContainer}});var r=a(5893),n=a(5850),s=a(2206),l=a(1092),i=a(7294),o=a(1159),c=a(4234),d=a(9936);function GridContainer(e){let[t,a]=(0,i.useState)(1),[u,m]=(0,i.useState)(""),[h,g]=(0,i.useState)(""),[x,_]=(0,i.useState)(""),[p,f]=(0,i.useState)(""),[v,j]=(0,i.useState)(""),[N,b]=(0,i.useState)(),{loading:y,error:S,data:C,refetch:w}=(0,n.a)(s.GET_CHARACTERS,{variables:{page:1}}),G={status:h,setStatus:g,gender:x,setGender:_,name:u,setName:m,specie:p,setSpecie:f,type:v,setType:j,characters:N,setCharacters:b,showEpisodes:e.showEpisodes,reloadQuery:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:x,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:v,l=arguments.length>4&&void 0!==arguments[4]?arguments[4]:p;a(1),w({page:t,name:e,status:r,gender:n,type:s,specie:l})}},T={currentSize:null==C?void 0:C.characters.results.length,totalSize:null==C?void 0:C.characters.info.count,currentPage:t,setPage:a,totalPages:null==C?void 0:C.characters.info.pages,reloadQuery:e=>{w({page:e})}};return y?(0,r.jsx)(c.default,{}):S?(0,r.jsxs)("p",{className:"text-red-400 text-center mt-6",children:["Error: ",S.message]}):(console.log("DATA ENCONTRADA?? ",C),(0,r.jsxs)(i.Fragment,{children:[(0,r.jsx)(l.default,{...G}),(0,r.jsx)(o.default,{...T}),(0,r.jsx)(d.default,{contentCharacter:!0,characters:C.characters.results}),(0,r.jsx)(o.default,{...T})]}))}},4234:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Loader}});var r=a(5893),n={src:"/vicdalis.github.io/_next/static/media/loader.ea0855fe.gif",height:500,width:500,blurWidth:0,blurHeight:0},s=a(5675),l=a.n(s);function Loader(){return(0,r.jsxs)("div",{children:[(0,r.jsx)(l(),{src:n,alt:"loading...",height:200}),(0,r.jsx)("p",{className:"text-white text-center",children:"Loading..."})]})}},1159:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return Pagination}});var r=a(5893),n=a(9603),s=a(9417);function Pagination(e){return(0,r.jsxs)("div",{className:"text-left flex w-full mt-16 justify-between",style:{paddingLeft:"8%",paddingRight:"8%"},children:[(0,r.jsxs)("p",{className:"text-lime-200",children:["Showing ",(0,r.jsx)("span",{className:"font-bold text-lime-300",children:e.currentSize})," from ",(0,r.jsx)("span",{className:"font-bold text-lime-300",children:e.totalSize})]}),(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"w-5 cursor-pointer p-1 mr-4 border-amber-400",onClick:()=>{if(e.currentPage>1){let t=e.currentPage-1;e.setPage(t),e.reloadQuery(t)}},children:(0,r.jsx)(n.G,{icon:s.A35,className:"text-white text-base"})}),(0,r.jsxs)("p",{className:"text-lime-200 mt-0.5",children:[" ",e.currentPage," / ",e.totalPages]}),(0,r.jsx)("div",{className:"w-5 cursor-pointer p-1 ml-4 border-amber-400",onClick:()=>{if(e.currentPage<e.totalSize){let t=e.currentPage+1;e.setPage(t),e.reloadQuery(t)}},children:(0,r.jsx)(n.G,{icon:s._tD,className:"text-white text-base"})})]})]})}},7963:function(e){e.exports={name_item:"GridContainer_name_item__3OrSq",img:"GridContainer_img__pf9fx",filter:"GridContainer_filter__JO3SO",text_wrap:"GridContainer_text_wrap__AsD8S",label:"GridContainer_label__Jzf6j",select_wrap:"GridContainer_select_wrap__h4VkH",select__input:"GridContainer_select__input__8PyNA","css-1fdsijx-ValueContainer":"GridContainer_css-1fdsijx-ValueContainer__cHjEN","css-13cymwt-control":"GridContainer_css-13cymwt-control__aXrhK"}},3641:function(e){e.exports={container:"Style_container__kZrzD",title:"Style_title__w7NZI",description:"Style_description__DQXZv",grid:"Style_grid__cmZkX",card:"Style_card__qF2t4",logo:"Style_logo__xAntk",main_background:"Style_main_background__zNCmW"}}},function(e){e.O(0,[976,124,715,675,148,664,326,603,141,774,888,179],function(){return e(e.s=4125)}),_N_E=e.O()}]);