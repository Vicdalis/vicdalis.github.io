(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[50],{5208:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/pagination",function(){return n(1159)}])},1159:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Pagination}});var s=n(5893),a=n(9603),i=n(9417);function Pagination(e){return(0,s.jsxs)("div",{className:"text-left flex w-full mt-16 justify-between",style:{paddingLeft:"8%",paddingRight:"8%"},children:[(0,s.jsxs)("p",{className:"text-lime-200",children:["Showing ",(0,s.jsx)("span",{className:"font-bold text-lime-300",children:e.currentSize})," from ",(0,s.jsx)("span",{className:"font-bold text-lime-300",children:e.totalSize})]}),(0,s.jsxs)("div",{className:"flex",children:[(0,s.jsx)("div",{className:"w-5 cursor-pointer p-1 mr-4 border-amber-400",onClick:()=>{if(e.currentPage>1){let t=e.currentPage-1;e.setPage(t),e.reloadQuery(t)}},children:(0,s.jsx)(a.G,{icon:i.A35,className:"text-white text-base"})}),(0,s.jsxs)("p",{className:"text-lime-200 mt-0.5",children:[" ",e.currentPage," / ",e.totalPages]}),(0,s.jsx)("div",{className:"w-5 cursor-pointer p-1 ml-4 border-amber-400",onClick:()=>{if(e.currentPage<e.totalSize){let t=e.currentPage+1;e.setPage(t),e.reloadQuery(t)}},children:(0,s.jsx)(a.G,{icon:i._tD,className:"text-white text-base"})})]})]})}}},function(e){e.O(0,[976,603,774,888,179],function(){return e(e.s=5208)}),_N_E=e.O()}]);