"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[141],{2206:function(t,e,n){n.r(e),n.d(e,{GET_ALL_EPISODES:function(){return l},GET_CHARACTER:function(){return o},GET_CHARACTERS:function(){return s},GET_EPISODE:function(){return u},GET_LOCATIONS:function(){return a}});var r=n(2729),i=n(8806);function _templateObject(){let t=(0,r._)(["\n  query GetCharacters($page: Int!, $status: String, $type: String, $gender: String, $name: String, $specie: String){\n    characters(page: $page, filter: { status: $status, type: $type, gender: $gender, name: $name, species: $specie}) {\n      info {\n        count\n        pages\n      }\n      results {\n        id\n        name\n        species \n        image\n        gender\n        status\n        type\n        location {\n          id\n          name\n        }\n        episode {\n          name\n        }\n      }\n    }\n  }\n"]);return _templateObject=function(){return t},t}function _templateObject1(){let t=(0,r._)(["\nquery GetDetailCharacter($id: ID!){\n  character(id: $id) {\n      id\n      name\n      species \n      image\n      gender\n      status\n      type\n      origin {\n        id\n        name\n      }\n      location {\n        id\n        name\n      }\n      episode {\n        id\n        name\n        episode\n      }\n    }\n}\n"]);return _templateObject1=function(){return t},t}function _templateObject2(){let t=(0,r._)(["\n  query GetLocations ($page: Int!, $name: String, $type: String, $dimension: String){\n    locations(page: $page, filter: {name: $name, type: $type, dimension: $dimension }){\n        info {\n            count\n            pages\n        }\n        results {\n            id\n            name\n        }\n    }\n  }\n"]);return _templateObject2=function(){return t},t}function _templateObject3(){let t=(0,r._)(["\n  query GetDetailEpisode($id: ID!){\n    episode(id: $id) {\n        id\n        name\n        air_date \n        episode\n        characters {\n          id\n          name\n          image\n        }\n    }\n  }\n"]);return _templateObject3=function(){return t},t}function _templateObject4(){let t=(0,r._)(["\n  query GetAllEpisodes($page: Int!, $name: String){\n    episodes(page: $page, filter: {name: $name}) {\n      info {\n            count\n            pages\n        }\n        results {\n            id\n            name\n            episode\n        }\n    }\n  }\n"]);return _templateObject4=function(){return t},t}let s=(0,i.Ps)(_templateObject()),o=(0,i.Ps)(_templateObject1()),a=(0,i.Ps)(_templateObject2()),u=(0,i.Ps)(_templateObject3()),l=(0,i.Ps)(_templateObject4())},5850:function(t,e,n){n.d(e,{a:function(){return useQuery}});var r,i,s=n(7582),o=n(9316),a=n(7294),u=n.t(a,2),l=n(320),c=!1,h=u.useSyncExternalStore||function(t,e,n){var r=e();!1===globalThis.__DEV__||c||r===e()||(c=!0,!1!==globalThis.__DEV__&&o.kG.error(58));var i=a.useState({inst:{value:r,getSnapshot:e}}),s=i[0].inst,u=i[1];return l.JC?a.useLayoutEffect(function(){Object.assign(s,{value:r,getSnapshot:e}),checkIfSnapshotChanged(s)&&u({inst:s})},[t,r,e]):Object.assign(s,{value:r,getSnapshot:e}),a.useEffect(function(){return checkIfSnapshotChanged(s)&&u({inst:s}),t(function(){checkIfSnapshotChanged(s)&&u({inst:s})})},[t]),r};function checkIfSnapshotChanged(t){var e=t.value,n=t.getSnapshot;try{return e!==n()}catch(t){return!0}}var p=n(20),d=n(4012),f=n(5317),b=n(990),y=n(1644);(r=i||(i={}))[r.Query=0]="Query",r[r.Mutation=1]="Mutation",r[r.Subscription=2]="Subscription";var v=new Map;function operationName(t){var e;switch(t){case i.Query:e="Query";break;case i.Mutation:e="Mutation";break;case i.Subscription:e="Subscription"}return e}var g=n(8702),m=n(3712),O=n(1436),S=Object.prototype.hasOwnProperty;function useQuery(t,e){var n,r,i,s,u;return void 0===e&&(e=Object.create(null)),(n=e.client,r=a.useContext((0,f.K)()),i=n||r.client,(0,o.kG)(!!i,49),(s=a.useRef()).current&&i===s.current.client&&t===s.current.query||(s.current=new k(i,t,s.current)),(u=s.current).forceUpdateState=a.useReducer(function(t){return t+1},0)[1],u).useQuery(e)}var k=function(){function InternalState(t,e,n){var r,s,a,u,c=this;this.client=t,this.query=e,this.forceUpdate=function(){return c.forceUpdateState()},this.ssrDisabledResult=(0,g.J)({loading:!0,data:void 0,error:void 0,networkStatus:y.Ie.loading}),this.skipStandbyResult=(0,g.J)({loading:!1,data:void 0,error:void 0,networkStatus:y.Ie.ready}),this.toQueryResultCache=new(l.mr?WeakMap:Map),r=i.Query,s=function(t){var e,n,r=v.get(t);if(r)return r;(0,o.kG)(!!t&&!!t.kind,59,t);for(var s=[],a=[],u=[],l=[],c=0,h=t.definitions;c<h.length;c++){var p=h[c];if("FragmentDefinition"===p.kind){s.push(p);continue}if("OperationDefinition"===p.kind)switch(p.operation){case"query":a.push(p);break;case"mutation":u.push(p);break;case"subscription":l.push(p)}}(0,o.kG)(!s.length||a.length||u.length||l.length,60),(0,o.kG)(a.length+u.length+l.length<=1,61,t,a.length,l.length,u.length),n=a.length?i.Query:i.Mutation,a.length||u.length||(n=i.Subscription);var d=a.length?a:u.length?u:l;(0,o.kG)(1===d.length,62,t,d.length);var f=d[0];e=f.variableDefinitions||[];var b={name:f.name&&"Name"===f.name.kind?f.name.value:"data",type:n,variables:e};return v.set(t,b),b}(e),a=operationName(r),u=operationName(s.type),(0,o.kG)(s.type===r,63,a,a,u);var h=n&&n.result,p=h&&h.data;p&&(this.previousData=p)}return InternalState.prototype.forceUpdateState=function(){!1!==globalThis.__DEV__&&o.kG.warn(50)},InternalState.prototype.executeQuery=function(t){var e,n=this;t.query&&Object.assign(this,{query:t.query}),this.watchQueryOptions=this.createWatchQueryOptions(this.queryHookOptions=t);var r=this.observable.reobserveAsConcast(this.getObsQueryOptions());return this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0,this.forceUpdate(),new Promise(function(t){var e;r.subscribe({next:function(t){e=t},error:function(){t(n.toQueryResult(n.observable.getCurrentResult()))},complete:function(){t(n.toQueryResult(e))}})})},InternalState.prototype.useQuery=function(t){var e=this;this.renderPromises=a.useContext((0,f.K)()).renderPromises,this.useOptions(t);var n=this.useObservableQuery(),r=h(a.useCallback(function(t){if(e.renderPromises)return function(){};e.forceUpdate=t;var onNext=function(){var t=e.result,r=n.getCurrentResult();t&&t.loading===r.loading&&t.networkStatus===r.networkStatus&&(0,p.D)(t.data,r.data)||e.setResult(r)},onError=function(t){if(r.unsubscribe(),r=n.resubscribeAfterError(onNext,onError),!S.call(t,"graphQLErrors"))throw t;var i=e.result;(!i||i&&i.loading||!(0,p.D)(t,i.error))&&e.setResult({data:i&&i.data,error:t,loading:!1,networkStatus:y.Ie.error})},r=n.subscribe(onNext,onError);return function(){setTimeout(function(){return r.unsubscribe()}),e.forceUpdate=function(){return e.forceUpdateState()}}},[n,this.renderPromises,this.client.disableNetworkFetches]),function(){return e.getCurrentResult()},function(){return e.getCurrentResult()});return this.unsafeHandlePartialRefetch(r),this.toQueryResult(r)},InternalState.prototype.useOptions=function(t){var e,n=this.createWatchQueryOptions(this.queryHookOptions=t),r=this.watchQueryOptions;!(0,p.D)(n,r)&&(this.watchQueryOptions=n,r&&this.observable&&(this.observable.reobserve(this.getObsQueryOptions()),this.previousData=(null===(e=this.result)||void 0===e?void 0:e.data)||this.previousData,this.result=void 0)),this.onCompleted=t.onCompleted||InternalState.prototype.onCompleted,this.onError=t.onError||InternalState.prototype.onError,(this.renderPromises||this.client.disableNetworkFetches)&&!1===this.queryHookOptions.ssr&&!this.queryHookOptions.skip?this.result=this.ssrDisabledResult:this.queryHookOptions.skip||"standby"===this.watchQueryOptions.fetchPolicy?this.result=this.skipStandbyResult:(this.result===this.ssrDisabledResult||this.result===this.skipStandbyResult)&&(this.result=void 0)},InternalState.prototype.getObsQueryOptions=function(){var t=[],e=this.client.defaultOptions.watchQuery;return e&&t.push(e),this.queryHookOptions.defaultOptions&&t.push(this.queryHookOptions.defaultOptions),t.push((0,m.o)(this.observable&&this.observable.options,this.watchQueryOptions)),t.reduce(d.J)},InternalState.prototype.createWatchQueryOptions=function(t){void 0===t&&(t={});var e,n=t.skip,r=Object.assign((t.ssr,t.onCompleted,t.onError,t.defaultOptions,(0,s._T)(t,["skip","ssr","onCompleted","onError","defaultOptions"])),{query:this.query});if(this.renderPromises&&("network-only"===r.fetchPolicy||"cache-and-network"===r.fetchPolicy)&&(r.fetchPolicy="cache-first"),r.variables||(r.variables={}),n){var i=r.fetchPolicy,o=void 0===i?this.getDefaultFetchPolicy():i,a=r.initialFetchPolicy;Object.assign(r,{initialFetchPolicy:void 0===a?o:a,fetchPolicy:"standby"})}else r.fetchPolicy||(r.fetchPolicy=(null===(e=this.observable)||void 0===e?void 0:e.options.initialFetchPolicy)||this.getDefaultFetchPolicy());return r},InternalState.prototype.getDefaultFetchPolicy=function(){var t,e;return(null===(t=this.queryHookOptions.defaultOptions)||void 0===t?void 0:t.fetchPolicy)||(null===(e=this.client.defaultOptions.watchQuery)||void 0===e?void 0:e.fetchPolicy)||"cache-first"},InternalState.prototype.onCompleted=function(t){},InternalState.prototype.onError=function(t){},InternalState.prototype.useObservableQuery=function(){var t=this.observable=this.renderPromises&&this.renderPromises.getSSRObservable(this.watchQueryOptions)||this.observable||this.client.watchQuery(this.getObsQueryOptions());this.obsQueryFields=a.useMemo(function(){return{refetch:t.refetch.bind(t),reobserve:t.reobserve.bind(t),fetchMore:t.fetchMore.bind(t),updateQuery:t.updateQuery.bind(t),startPolling:t.startPolling.bind(t),stopPolling:t.stopPolling.bind(t),subscribeToMore:t.subscribeToMore.bind(t)}},[t]);var e=!(!1===this.queryHookOptions.ssr||this.queryHookOptions.skip);return this.renderPromises&&e&&(this.renderPromises.registerSSRObservable(t),t.getCurrentResult().loading&&this.renderPromises.addObservableQueryPromise(t)),t},InternalState.prototype.setResult=function(t){var e=this.result;e&&e.data&&(this.previousData=e.data),this.result=t,this.forceUpdate(),this.handleErrorOrCompleted(t,e)},InternalState.prototype.handleErrorOrCompleted=function(t,e){var n=this;if(!t.loading){var r=this.toApolloError(t);Promise.resolve().then(function(){r?n.onError(r):t.data&&(null==e?void 0:e.networkStatus)!==t.networkStatus&&t.networkStatus===y.Ie.ready&&n.onCompleted(t.data)}).catch(function(t){!1!==globalThis.__DEV__&&o.kG.warn(t)})}},InternalState.prototype.toApolloError=function(t){return(0,O.O)(t.errors)?new b.cA({graphQLErrors:t.errors}):t.error},InternalState.prototype.getCurrentResult=function(){return this.result||this.handleErrorOrCompleted(this.result=this.observable.getCurrentResult()),this.result},InternalState.prototype.toQueryResult=function(t){var e=this.toQueryResultCache.get(t);if(e)return e;var n=t.data,r=(t.partial,(0,s._T)(t,["data","partial"]));return this.toQueryResultCache.set(t,e=(0,s.pi)((0,s.pi)((0,s.pi)({data:n},r),this.obsQueryFields),{client:this.client,observable:this.observable,variables:this.observable.variables,called:!this.queryHookOptions.skip,previousData:this.previousData})),!e.error&&(0,O.O)(t.errors)&&(e.error=new b.cA({graphQLErrors:t.errors})),e},InternalState.prototype.unsafeHandlePartialRefetch=function(t){t.partial&&this.queryHookOptions.partialRefetch&&!t.loading&&(!t.data||0===Object.keys(t.data).length)&&"cache-only"!==this.observable.options.fetchPolicy&&(Object.assign(t,{loading:!0,networkStatus:y.Ie.refetch}),this.observable.refetch())},InternalState}()}}]);