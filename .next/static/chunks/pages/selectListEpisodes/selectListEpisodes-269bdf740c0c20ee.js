(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[733],{879:function(e,s,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/selectListEpisodes/selectListEpisodes",function(){return o(6218)}])},6218:function(e,s,o){"use strict";o.r(s),o.d(s,{default:function(){return SelectListEpisodes}});var l=o(5893),t=o(7294),i=o(5850),n=o(2206),u=o(326),a=o(1163);function SelectListEpisodes(e){let s;let[o,d]=(0,t.useState)([{label:e.episodeName,id:e.episodeId}]),[p,c]=(0,t.useState)(""),[E,r]=(0,t.useState)(!0),[f,m]=(0,t.useState)(),D=(0,a.useRouter)(),{loadingList:C,errorList:g,dataList:_,refetch:L}=(0,i.a)(n.GET_ALL_EPISODES,{variables:{page:1},notifyOnNetworkStatusChange:!0,onCompleted(s){if(console.log("\uD83D\uDE80 ~ file: selectListEpisodes.js:20 ~ onCompleted ~ isLoadingList:",E),E){console.log("\uD83D\uDE80 ~ file: filter.js:34 ~ onCompleted ~ completado:",s);let o=s.episodes.results.map(e=>({label:e.name+" - "+e.episode,value:e.id}));if(console.log("\uD83D\uDE80 ~ file: selectListEpisodes.js:31 ~ onCompleted ~ newOptions:",o=[...o,{label:e.episodeName,id:e.episodeId}]),d(o),r(!1),null==f){let s=o.find(s=>s.id==e.episodeId);console.log("\uD83D\uDE80 ~ file: selectListEpisodes.js:35 ~ onCompleted ~ defaultEpisode:",s),m(s)}}}});return g&&console.log("ERROR LOCATIONS ",g),(0,l.jsx)("div",{className:"w-full ml-40",children:(0,l.jsx)(u.ZP,{className:"focus:border-lime-500 rounded focus:outline-none mx-2 w-80 m-1.5",isLoading:E,isClearable:!0,isSearchable:!0,placeholder:"Episodes...",options:o,value:f,onInputChange:e=>{console.log("INPUT CHANGED?? ",e," SEARCHED ",p),e!==p&&(clearTimeout(s),s=setTimeout(()=>{r(!0),L({page:1,name:e}),c(e)},600))},onChange:e=>{console.log("CAMBIE EPISODE ",e),e?D.push("/episodeDetails/"+parseInt(e.value)):m(null)}})})}},1163:function(e,s,o){e.exports=o(8355)}},function(e){e.O(0,[124,715,148,326,141,774,888,179],function(){return e(e.s=879)}),_N_E=e.O()}]);