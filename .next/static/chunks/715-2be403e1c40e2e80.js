"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[715],{8806:function(e,t,i){i.d(t,{Ps:function(){return gql}});var r,n,s,a,o,l=i(7582);let h=/\r\n|[\n\r]/g;function getLocation(e,t){let i=0,r=1;for(let n of e.body.matchAll(h)){if("number"==typeof n.index||function(e,t){if(!e)throw Error(null!=t?t:"Unexpected invariant triggered.")}(!1),n.index>=t)break;i=n.index+n[0].length,r+=1}return{line:r,column:t+1-i}}function printSourceLocation(e,t){let i=e.locationOffset.column-1,r="".padStart(i)+e.body,n=t.line-1,s=e.locationOffset.line-1,a=t.line+s,o=1===t.line?i:0,l=t.column+o,h=`${e.name}:${a}:${l}
`,c=r.split(/\r\n|[\n\r]/g),p=c[n];if(p.length>120){let e=Math.floor(l/80),t=l%80,i=[];for(let e=0;e<p.length;e+=80)i.push(p.slice(e,e+80));return h+printPrefixedLines([[`${a} |`,i[0]],...i.slice(1,e+1).map(e=>["|",e]),["|","^".padStart(t)],["|",i[e+1]]])}return h+printPrefixedLines([[`${a-1} |`,c[n-1]],[`${a} |`,p],["|","^".padStart(l)],[`${a+1} |`,c[n+1]]])}function printPrefixedLines(e){let t=e.filter(([e,t])=>void 0!==t),i=Math.max(...t.map(([e])=>e.length));return t.map(([e,t])=>e.padStart(i)+(t?" "+t:"")).join("\n")}let GraphQLError=class GraphQLError extends Error{constructor(e,...t){var i,r,n,s;let{nodes:a,source:o,positions:l,path:h,originalError:c,extensions:p}=function(e){let t=e[0];return null==t||"kind"in t||"length"in t?{nodes:t,source:e[1],positions:e[2],path:e[3],originalError:e[4],extensions:e[5]}:t}(t);super(e),this.name="GraphQLError",this.path=null!=h?h:void 0,this.originalError=null!=c?c:void 0,this.nodes=undefinedIfEmpty(Array.isArray(a)?a:a?[a]:void 0);let u=undefinedIfEmpty(null===(i=this.nodes)||void 0===i?void 0:i.map(e=>e.loc).filter(e=>null!=e));this.source=null!=o?o:null==u?void 0:null===(r=u[0])||void 0===r?void 0:r.source,this.positions=null!=l?l:null==u?void 0:u.map(e=>e.start),this.locations=l&&o?l.map(e=>getLocation(o,e)):null==u?void 0:u.map(e=>getLocation(e.source,e.start));let d="object"==typeof(s=null==c?void 0:c.extensions)&&null!==s?null==c?void 0:c.extensions:void 0;this.extensions=null!==(n=null!=p?p:d)&&void 0!==n?n:Object.create(null),Object.defineProperties(this,{message:{writable:!0,enumerable:!0},name:{enumerable:!1},nodes:{enumerable:!1},source:{enumerable:!1},positions:{enumerable:!1},originalError:{enumerable:!1}}),null!=c&&c.stack?Object.defineProperty(this,"stack",{value:c.stack,writable:!0,configurable:!0}):Error.captureStackTrace?Error.captureStackTrace(this,GraphQLError):Object.defineProperty(this,"stack",{value:Error().stack,writable:!0,configurable:!0})}get[Symbol.toStringTag](){return"GraphQLError"}toString(){let e=this.message;if(this.nodes){for(let i of this.nodes)if(i.loc){var t;e+="\n\n"+printSourceLocation((t=i.loc).source,getLocation(t.source,t.start))}}else if(this.source&&this.locations)for(let t of this.locations)e+="\n\n"+printSourceLocation(this.source,t);return e}toJSON(){let e={message:this.message};return null!=this.locations&&(e.locations=this.locations),null!=this.path&&(e.path=this.path),null!=this.extensions&&Object.keys(this.extensions).length>0&&(e.extensions=this.extensions),e}};function undefinedIfEmpty(e){return void 0===e||0===e.length?void 0:e}function syntaxError(e,t,i){return new GraphQLError(`Syntax Error: ${i}`,{source:e,positions:[t]})}var c=i(2380);(r=a||(a={})).QUERY="QUERY",r.MUTATION="MUTATION",r.SUBSCRIPTION="SUBSCRIPTION",r.FIELD="FIELD",r.FRAGMENT_DEFINITION="FRAGMENT_DEFINITION",r.FRAGMENT_SPREAD="FRAGMENT_SPREAD",r.INLINE_FRAGMENT="INLINE_FRAGMENT",r.VARIABLE_DEFINITION="VARIABLE_DEFINITION",r.SCHEMA="SCHEMA",r.SCALAR="SCALAR",r.OBJECT="OBJECT",r.FIELD_DEFINITION="FIELD_DEFINITION",r.ARGUMENT_DEFINITION="ARGUMENT_DEFINITION",r.INTERFACE="INTERFACE",r.UNION="UNION",r.ENUM="ENUM",r.ENUM_VALUE="ENUM_VALUE",r.INPUT_OBJECT="INPUT_OBJECT",r.INPUT_FIELD_DEFINITION="INPUT_FIELD_DEFINITION";var p=i(7359),u=i(7392),d=i(8297);(n=o||(o={})).SOF="<SOF>",n.EOF="<EOF>",n.BANG="!",n.DOLLAR="$",n.AMP="&",n.PAREN_L="(",n.PAREN_R=")",n.SPREAD="...",n.COLON=":",n.EQUALS="=",n.AT="@",n.BRACKET_L="[",n.BRACKET_R="]",n.BRACE_L="{",n.PIPE="|",n.BRACE_R="}",n.NAME="Name",n.INT="Int",n.FLOAT="Float",n.STRING="String",n.BLOCK_STRING="BlockString",n.COMMENT="Comment";let Lexer=class Lexer{constructor(e){let t=new c.WU(o.SOF,0,0,0,0);this.source=e,this.lastToken=t,this.token=t,this.line=1,this.lineStart=0}get[Symbol.toStringTag](){return"Lexer"}advance(){this.lastToken=this.token;let e=this.token=this.lookahead();return e}lookahead(){let e=this.token;if(e.kind!==o.EOF)do if(e.next)e=e.next;else{let t=function(e,t){let i=e.source.body,r=i.length,n=t;for(;n<r;){let t=i.charCodeAt(n);switch(t){case 65279:case 9:case 32:case 44:++n;continue;case 10:++n,++e.line,e.lineStart=n;continue;case 13:10===i.charCodeAt(n+1)?n+=2:++n,++e.line,e.lineStart=n;continue;case 35:return function(e,t){let i=e.source.body,r=i.length,n=t+1;for(;n<r;){let e=i.charCodeAt(n);if(10===e||13===e)break;if(isUnicodeScalarValue(e))++n;else if(isSupplementaryCodePoint(i,n))n+=2;else break}return createToken(e,o.COMMENT,t,n,i.slice(t+1,n))}(e,n);case 33:return createToken(e,o.BANG,n,n+1);case 36:return createToken(e,o.DOLLAR,n,n+1);case 38:return createToken(e,o.AMP,n,n+1);case 40:return createToken(e,o.PAREN_L,n,n+1);case 41:return createToken(e,o.PAREN_R,n,n+1);case 46:if(46===i.charCodeAt(n+1)&&46===i.charCodeAt(n+2))return createToken(e,o.SPREAD,n,n+3);break;case 58:return createToken(e,o.COLON,n,n+1);case 61:return createToken(e,o.EQUALS,n,n+1);case 64:return createToken(e,o.AT,n,n+1);case 91:return createToken(e,o.BRACKET_L,n,n+1);case 93:return createToken(e,o.BRACKET_R,n,n+1);case 123:return createToken(e,o.BRACE_L,n,n+1);case 124:return createToken(e,o.PIPE,n,n+1);case 125:return createToken(e,o.BRACE_R,n,n+1);case 34:if(34===i.charCodeAt(n+1)&&34===i.charCodeAt(n+2))return function(e,t){let i=e.source.body,r=i.length,n=e.lineStart,s=t+3,a=s,l="",h=[];for(;s<r;){let r=i.charCodeAt(s);if(34===r&&34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2)){l+=i.slice(a,s),h.push(l);let r=createToken(e,o.BLOCK_STRING,t,s+3,(0,u.wv)(h).join("\n"));return e.line+=h.length-1,e.lineStart=n,r}if(92===r&&34===i.charCodeAt(s+1)&&34===i.charCodeAt(s+2)&&34===i.charCodeAt(s+3)){l+=i.slice(a,s),a=s+1,s+=4;continue}if(10===r||13===r){l+=i.slice(a,s),h.push(l),13===r&&10===i.charCodeAt(s+1)?s+=2:++s,l="",a=s,n=s;continue}if(isUnicodeScalarValue(r))++s;else if(isSupplementaryCodePoint(i,s))s+=2;else throw syntaxError(e.source,s,`Invalid character within String: ${printCodePointAt(e,s)}.`)}throw syntaxError(e.source,s,"Unterminated string.")}(e,n);return function(e,t){let i=e.source.body,r=i.length,n=t+1,s=n,a="";for(;n<r;){let r=i.charCodeAt(n);if(34===r)return a+=i.slice(s,n),createToken(e,o.STRING,t,n+1,a);if(92===r){a+=i.slice(s,n);let t=117===i.charCodeAt(n+1)?123===i.charCodeAt(n+2)?function(e,t){let i=e.source.body,r=0,n=3;for(;n<12;){let e=i.charCodeAt(t+n++);if(125===e){if(n<5||!isUnicodeScalarValue(r))break;return{value:String.fromCodePoint(r),size:n}}if((r=r<<4|readHexDigit(e))<0)break}throw syntaxError(e.source,t,`Invalid Unicode escape sequence: "${i.slice(t,t+n)}".`)}(e,n):function(e,t){let i=e.source.body,r=read16BitHexCode(i,t+2);if(isUnicodeScalarValue(r))return{value:String.fromCodePoint(r),size:6};if(isLeadingSurrogate(r)&&92===i.charCodeAt(t+6)&&117===i.charCodeAt(t+7)){let e=read16BitHexCode(i,t+8);if(isTrailingSurrogate(e))return{value:String.fromCodePoint(r,e),size:12}}throw syntaxError(e.source,t,`Invalid Unicode escape sequence: "${i.slice(t,t+6)}".`)}(e,n):function(e,t){let i=e.source.body,r=i.charCodeAt(t+1);switch(r){case 34:return{value:'"',size:2};case 92:return{value:"\\",size:2};case 47:return{value:"/",size:2};case 98:return{value:"\b",size:2};case 102:return{value:"\f",size:2};case 110:return{value:"\n",size:2};case 114:return{value:"\r",size:2};case 116:return{value:"	",size:2}}throw syntaxError(e.source,t,`Invalid character escape sequence: "${i.slice(t,t+2)}".`)}(e,n);a+=t.value,n+=t.size,s=n;continue}if(10===r||13===r)break;if(isUnicodeScalarValue(r))++n;else if(isSupplementaryCodePoint(i,n))n+=2;else throw syntaxError(e.source,n,`Invalid character within String: ${printCodePointAt(e,n)}.`)}throw syntaxError(e.source,n,"Unterminated string.")}(e,n)}if((0,d.X1)(t)||45===t)return function(e,t,i){let r=e.source.body,n=t,s=i,a=!1;if(45===s&&(s=r.charCodeAt(++n)),48===s){if(s=r.charCodeAt(++n),(0,d.X1)(s))throw syntaxError(e.source,n,`Invalid number, unexpected digit after 0: ${printCodePointAt(e,n)}.`)}else n=readDigits(e,n,s),s=r.charCodeAt(n);if(46===s&&(a=!0,s=r.charCodeAt(++n),n=readDigits(e,n,s),s=r.charCodeAt(n)),(69===s||101===s)&&(a=!0,(43===(s=r.charCodeAt(++n))||45===s)&&(s=r.charCodeAt(++n)),n=readDigits(e,n,s),s=r.charCodeAt(n)),46===s||(0,d.LQ)(s))throw syntaxError(e.source,n,`Invalid number, expected digit but got: ${printCodePointAt(e,n)}.`);return createToken(e,a?o.FLOAT:o.INT,t,n,r.slice(t,n))}(e,n,t);if((0,d.LQ)(t))return function(e,t){let i=e.source.body,r=i.length,n=t+1;for(;n<r;){let e=i.charCodeAt(n);if((0,d.HQ)(e))++n;else break}return createToken(e,o.NAME,t,n,i.slice(t,n))}(e,n);throw syntaxError(e.source,n,39===t?"Unexpected single quote character ('), did you mean to use a double quote (\")?":isUnicodeScalarValue(t)||isSupplementaryCodePoint(i,n)?`Unexpected character: ${printCodePointAt(e,n)}.`:`Invalid character: ${printCodePointAt(e,n)}.`)}return createToken(e,o.EOF,r,r)}(this,e.end);e.next=t,t.prev=e,e=t}while(e.kind===o.COMMENT);return e}};function isUnicodeScalarValue(e){return e>=0&&e<=55295||e>=57344&&e<=1114111}function isSupplementaryCodePoint(e,t){return isLeadingSurrogate(e.charCodeAt(t))&&isTrailingSurrogate(e.charCodeAt(t+1))}function isLeadingSurrogate(e){return e>=55296&&e<=56319}function isTrailingSurrogate(e){return e>=56320&&e<=57343}function printCodePointAt(e,t){let i=e.source.body.codePointAt(t);if(void 0===i)return o.EOF;if(i>=32&&i<=126){let e=String.fromCodePoint(i);return'"'===e?"'\"'":`"${e}"`}return"U+"+i.toString(16).toUpperCase().padStart(4,"0")}function createToken(e,t,i,r,n){let s=e.line,a=1+i-e.lineStart;return new c.WU(t,i,r,s,a,n)}function readDigits(e,t,i){if(!(0,d.X1)(i))throw syntaxError(e.source,t,`Invalid number, expected digit but got: ${printCodePointAt(e,t)}.`);let r=e.source.body,n=t+1;for(;(0,d.X1)(r.charCodeAt(n));)++n;return n}function read16BitHexCode(e,t){return readHexDigit(e.charCodeAt(t))<<12|readHexDigit(e.charCodeAt(t+1))<<8|readHexDigit(e.charCodeAt(t+2))<<4|readHexDigit(e.charCodeAt(t+3))}function readHexDigit(e){return e>=48&&e<=57?e-48:e>=65&&e<=70?e-55:e>=97&&e<=102?e-87:-1}var E=i(7826),f=i(5821);let T=globalThis.process&&"production"===globalThis.process.env.NODE_ENV?function(e,t){return e instanceof t}:function(e,t){if(e instanceof t)return!0;if("object"==typeof e&&null!==e){var i;let r=t.prototype[Symbol.toStringTag],n=Symbol.toStringTag in e?e[Symbol.toStringTag]:null===(i=e.constructor)||void 0===i?void 0:i.name;if(r===n){let t=(0,f.X)(e);throw Error(`Cannot use ${r} "${t}" from another module or realm.

Ensure that there is only one instance of "graphql" in the node_modules
directory. If different versions of "graphql" are the dependencies of other
relied on modules, use "resolutions" to ensure only one version is installed.

https://yarnpkg.com/en/docs/selective-version-resolutions

Duplicate "graphql" modules cannot be used at the same time since different
versions may have different capabilities and behavior. The data from one
version used in the function from another could produce confusing and
spurious results.`)}}return!1};let Source=class Source{constructor(e,t="GraphQL request",i={line:1,column:1}){"string"==typeof e||(0,E.a)(!1,`Body must be a string. Received: ${(0,f.X)(e)}.`),this.body=e,this.name=t,this.locationOffset=i,this.locationOffset.line>0||(0,E.a)(!1,"line in locationOffset is 1-indexed and must be positive."),this.locationOffset.column>0||(0,E.a)(!1,"column in locationOffset is 1-indexed and must be positive.")}get[Symbol.toStringTag](){return"Source"}};let Parser=class Parser{constructor(e,t={}){let i=T(e,Source)?e:new Source(e);this._lexer=new Lexer(i),this._options=t,this._tokenCounter=0}parseName(){let e=this.expectToken(o.NAME);return this.node(e,{kind:p.h.NAME,value:e.value})}parseDocument(){return this.node(this._lexer.token,{kind:p.h.DOCUMENT,definitions:this.many(o.SOF,this.parseDefinition,o.EOF)})}parseDefinition(){if(this.peek(o.BRACE_L))return this.parseOperationDefinition();let e=this.peekDescription(),t=e?this._lexer.lookahead():this._lexer.token;if(t.kind===o.NAME){switch(t.value){case"schema":return this.parseSchemaDefinition();case"scalar":return this.parseScalarTypeDefinition();case"type":return this.parseObjectTypeDefinition();case"interface":return this.parseInterfaceTypeDefinition();case"union":return this.parseUnionTypeDefinition();case"enum":return this.parseEnumTypeDefinition();case"input":return this.parseInputObjectTypeDefinition();case"directive":return this.parseDirectiveDefinition()}if(e)throw syntaxError(this._lexer.source,this._lexer.token.start,"Unexpected description, descriptions are supported only on type definitions.");switch(t.value){case"query":case"mutation":case"subscription":return this.parseOperationDefinition();case"fragment":return this.parseFragmentDefinition();case"extend":return this.parseTypeSystemExtension()}}throw this.unexpected(t)}parseOperationDefinition(){let e;let t=this._lexer.token;if(this.peek(o.BRACE_L))return this.node(t,{kind:p.h.OPERATION_DEFINITION,operation:c.ku.QUERY,name:void 0,variableDefinitions:[],directives:[],selectionSet:this.parseSelectionSet()});let i=this.parseOperationType();return this.peek(o.NAME)&&(e=this.parseName()),this.node(t,{kind:p.h.OPERATION_DEFINITION,operation:i,name:e,variableDefinitions:this.parseVariableDefinitions(),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseOperationType(){let e=this.expectToken(o.NAME);switch(e.value){case"query":return c.ku.QUERY;case"mutation":return c.ku.MUTATION;case"subscription":return c.ku.SUBSCRIPTION}throw this.unexpected(e)}parseVariableDefinitions(){return this.optionalMany(o.PAREN_L,this.parseVariableDefinition,o.PAREN_R)}parseVariableDefinition(){return this.node(this._lexer.token,{kind:p.h.VARIABLE_DEFINITION,variable:this.parseVariable(),type:(this.expectToken(o.COLON),this.parseTypeReference()),defaultValue:this.expectOptionalToken(o.EQUALS)?this.parseConstValueLiteral():void 0,directives:this.parseConstDirectives()})}parseVariable(){let e=this._lexer.token;return this.expectToken(o.DOLLAR),this.node(e,{kind:p.h.VARIABLE,name:this.parseName()})}parseSelectionSet(){return this.node(this._lexer.token,{kind:p.h.SELECTION_SET,selections:this.many(o.BRACE_L,this.parseSelection,o.BRACE_R)})}parseSelection(){return this.peek(o.SPREAD)?this.parseFragment():this.parseField()}parseField(){let e,t;let i=this._lexer.token,r=this.parseName();return this.expectOptionalToken(o.COLON)?(e=r,t=this.parseName()):t=r,this.node(i,{kind:p.h.FIELD,alias:e,name:t,arguments:this.parseArguments(!1),directives:this.parseDirectives(!1),selectionSet:this.peek(o.BRACE_L)?this.parseSelectionSet():void 0})}parseArguments(e){let t=e?this.parseConstArgument:this.parseArgument;return this.optionalMany(o.PAREN_L,t,o.PAREN_R)}parseArgument(e=!1){let t=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),this.node(t,{kind:p.h.ARGUMENT,name:i,value:this.parseValueLiteral(e)})}parseConstArgument(){return this.parseArgument(!0)}parseFragment(){let e=this._lexer.token;this.expectToken(o.SPREAD);let t=this.expectOptionalKeyword("on");return!t&&this.peek(o.NAME)?this.node(e,{kind:p.h.FRAGMENT_SPREAD,name:this.parseFragmentName(),directives:this.parseDirectives(!1)}):this.node(e,{kind:p.h.INLINE_FRAGMENT,typeCondition:t?this.parseNamedType():void 0,directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentDefinition(){let e=this._lexer.token;return(this.expectKeyword("fragment"),!0===this._options.allowLegacyFragmentVariables)?this.node(e,{kind:p.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),variableDefinitions:this.parseVariableDefinitions(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()}):this.node(e,{kind:p.h.FRAGMENT_DEFINITION,name:this.parseFragmentName(),typeCondition:(this.expectKeyword("on"),this.parseNamedType()),directives:this.parseDirectives(!1),selectionSet:this.parseSelectionSet()})}parseFragmentName(){if("on"===this._lexer.token.value)throw this.unexpected();return this.parseName()}parseValueLiteral(e){let t=this._lexer.token;switch(t.kind){case o.BRACKET_L:return this.parseList(e);case o.BRACE_L:return this.parseObject(e);case o.INT:return this.advanceLexer(),this.node(t,{kind:p.h.INT,value:t.value});case o.FLOAT:return this.advanceLexer(),this.node(t,{kind:p.h.FLOAT,value:t.value});case o.STRING:case o.BLOCK_STRING:return this.parseStringLiteral();case o.NAME:switch(this.advanceLexer(),t.value){case"true":return this.node(t,{kind:p.h.BOOLEAN,value:!0});case"false":return this.node(t,{kind:p.h.BOOLEAN,value:!1});case"null":return this.node(t,{kind:p.h.NULL});default:return this.node(t,{kind:p.h.ENUM,value:t.value})}case o.DOLLAR:if(e){if(this.expectToken(o.DOLLAR),this._lexer.token.kind===o.NAME){let e=this._lexer.token.value;throw syntaxError(this._lexer.source,t.start,`Unexpected variable "$${e}" in constant value.`)}throw this.unexpected(t)}return this.parseVariable();default:throw this.unexpected()}}parseConstValueLiteral(){return this.parseValueLiteral(!0)}parseStringLiteral(){let e=this._lexer.token;return this.advanceLexer(),this.node(e,{kind:p.h.STRING,value:e.value,block:e.kind===o.BLOCK_STRING})}parseList(e){return this.node(this._lexer.token,{kind:p.h.LIST,values:this.any(o.BRACKET_L,()=>this.parseValueLiteral(e),o.BRACKET_R)})}parseObject(e){return this.node(this._lexer.token,{kind:p.h.OBJECT,fields:this.any(o.BRACE_L,()=>this.parseObjectField(e),o.BRACE_R)})}parseObjectField(e){let t=this._lexer.token,i=this.parseName();return this.expectToken(o.COLON),this.node(t,{kind:p.h.OBJECT_FIELD,name:i,value:this.parseValueLiteral(e)})}parseDirectives(e){let t=[];for(;this.peek(o.AT);)t.push(this.parseDirective(e));return t}parseConstDirectives(){return this.parseDirectives(!0)}parseDirective(e){let t=this._lexer.token;return this.expectToken(o.AT),this.node(t,{kind:p.h.DIRECTIVE,name:this.parseName(),arguments:this.parseArguments(e)})}parseTypeReference(){let e;let t=this._lexer.token;if(this.expectOptionalToken(o.BRACKET_L)){let i=this.parseTypeReference();this.expectToken(o.BRACKET_R),e=this.node(t,{kind:p.h.LIST_TYPE,type:i})}else e=this.parseNamedType();return this.expectOptionalToken(o.BANG)?this.node(t,{kind:p.h.NON_NULL_TYPE,type:e}):e}parseNamedType(){return this.node(this._lexer.token,{kind:p.h.NAMED_TYPE,name:this.parseName()})}peekDescription(){return this.peek(o.STRING)||this.peek(o.BLOCK_STRING)}parseDescription(){if(this.peekDescription())return this.parseStringLiteral()}parseSchemaDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("schema");let i=this.parseConstDirectives(),r=this.many(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);return this.node(e,{kind:p.h.SCHEMA_DEFINITION,description:t,directives:i,operationTypes:r})}parseOperationTypeDefinition(){let e=this._lexer.token,t=this.parseOperationType();this.expectToken(o.COLON);let i=this.parseNamedType();return this.node(e,{kind:p.h.OPERATION_TYPE_DEFINITION,operation:t,type:i})}parseScalarTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("scalar");let i=this.parseName(),r=this.parseConstDirectives();return this.node(e,{kind:p.h.SCALAR_TYPE_DEFINITION,description:t,name:i,directives:r})}parseObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("type");let i=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:p.h.OBJECT_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:n,fields:s})}parseImplementsInterfaces(){return this.expectOptionalKeyword("implements")?this.delimitedMany(o.AMP,this.parseNamedType):[]}parseFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseFieldDefinition,o.BRACE_R)}parseFieldDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseName(),r=this.parseArgumentDefs();this.expectToken(o.COLON);let n=this.parseTypeReference(),s=this.parseConstDirectives();return this.node(e,{kind:p.h.FIELD_DEFINITION,description:t,name:i,arguments:r,type:n,directives:s})}parseArgumentDefs(){return this.optionalMany(o.PAREN_L,this.parseInputValueDef,o.PAREN_R)}parseInputValueDef(){let e;let t=this._lexer.token,i=this.parseDescription(),r=this.parseName();this.expectToken(o.COLON);let n=this.parseTypeReference();this.expectOptionalToken(o.EQUALS)&&(e=this.parseConstValueLiteral());let s=this.parseConstDirectives();return this.node(t,{kind:p.h.INPUT_VALUE_DEFINITION,description:i,name:r,type:n,defaultValue:e,directives:s})}parseInterfaceTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("interface");let i=this.parseName(),r=this.parseImplementsInterfaces(),n=this.parseConstDirectives(),s=this.parseFieldsDefinition();return this.node(e,{kind:p.h.INTERFACE_TYPE_DEFINITION,description:t,name:i,interfaces:r,directives:n,fields:s})}parseUnionTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("union");let i=this.parseName(),r=this.parseConstDirectives(),n=this.parseUnionMemberTypes();return this.node(e,{kind:p.h.UNION_TYPE_DEFINITION,description:t,name:i,directives:r,types:n})}parseUnionMemberTypes(){return this.expectOptionalToken(o.EQUALS)?this.delimitedMany(o.PIPE,this.parseNamedType):[]}parseEnumTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("enum");let i=this.parseName(),r=this.parseConstDirectives(),n=this.parseEnumValuesDefinition();return this.node(e,{kind:p.h.ENUM_TYPE_DEFINITION,description:t,name:i,directives:r,values:n})}parseEnumValuesDefinition(){return this.optionalMany(o.BRACE_L,this.parseEnumValueDefinition,o.BRACE_R)}parseEnumValueDefinition(){let e=this._lexer.token,t=this.parseDescription(),i=this.parseEnumValueName(),r=this.parseConstDirectives();return this.node(e,{kind:p.h.ENUM_VALUE_DEFINITION,description:t,name:i,directives:r})}parseEnumValueName(){if("true"===this._lexer.token.value||"false"===this._lexer.token.value||"null"===this._lexer.token.value)throw syntaxError(this._lexer.source,this._lexer.token.start,`${getTokenDesc(this._lexer.token)} is reserved and cannot be used for an enum value.`);return this.parseName()}parseInputObjectTypeDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("input");let i=this.parseName(),r=this.parseConstDirectives(),n=this.parseInputFieldsDefinition();return this.node(e,{kind:p.h.INPUT_OBJECT_TYPE_DEFINITION,description:t,name:i,directives:r,fields:n})}parseInputFieldsDefinition(){return this.optionalMany(o.BRACE_L,this.parseInputValueDef,o.BRACE_R)}parseTypeSystemExtension(){let e=this._lexer.lookahead();if(e.kind===o.NAME)switch(e.value){case"schema":return this.parseSchemaExtension();case"scalar":return this.parseScalarTypeExtension();case"type":return this.parseObjectTypeExtension();case"interface":return this.parseInterfaceTypeExtension();case"union":return this.parseUnionTypeExtension();case"enum":return this.parseEnumTypeExtension();case"input":return this.parseInputObjectTypeExtension()}throw this.unexpected(e)}parseSchemaExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("schema");let t=this.parseConstDirectives(),i=this.optionalMany(o.BRACE_L,this.parseOperationTypeDefinition,o.BRACE_R);if(0===t.length&&0===i.length)throw this.unexpected();return this.node(e,{kind:p.h.SCHEMA_EXTENSION,directives:t,operationTypes:i})}parseScalarTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("scalar");let t=this.parseName(),i=this.parseConstDirectives();if(0===i.length)throw this.unexpected();return this.node(e,{kind:p.h.SCALAR_TYPE_EXTENSION,name:t,directives:i})}parseObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("type");let t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),n=this.parseFieldsDefinition();if(0===i.length&&0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:p.h.OBJECT_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:n})}parseInterfaceTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("interface");let t=this.parseName(),i=this.parseImplementsInterfaces(),r=this.parseConstDirectives(),n=this.parseFieldsDefinition();if(0===i.length&&0===r.length&&0===n.length)throw this.unexpected();return this.node(e,{kind:p.h.INTERFACE_TYPE_EXTENSION,name:t,interfaces:i,directives:r,fields:n})}parseUnionTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("union");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseUnionMemberTypes();if(0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:p.h.UNION_TYPE_EXTENSION,name:t,directives:i,types:r})}parseEnumTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("enum");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseEnumValuesDefinition();if(0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:p.h.ENUM_TYPE_EXTENSION,name:t,directives:i,values:r})}parseInputObjectTypeExtension(){let e=this._lexer.token;this.expectKeyword("extend"),this.expectKeyword("input");let t=this.parseName(),i=this.parseConstDirectives(),r=this.parseInputFieldsDefinition();if(0===i.length&&0===r.length)throw this.unexpected();return this.node(e,{kind:p.h.INPUT_OBJECT_TYPE_EXTENSION,name:t,directives:i,fields:r})}parseDirectiveDefinition(){let e=this._lexer.token,t=this.parseDescription();this.expectKeyword("directive"),this.expectToken(o.AT);let i=this.parseName(),r=this.parseArgumentDefs(),n=this.expectOptionalKeyword("repeatable");this.expectKeyword("on");let s=this.parseDirectiveLocations();return this.node(e,{kind:p.h.DIRECTIVE_DEFINITION,description:t,name:i,arguments:r,repeatable:n,locations:s})}parseDirectiveLocations(){return this.delimitedMany(o.PIPE,this.parseDirectiveLocation)}parseDirectiveLocation(){let e=this._lexer.token,t=this.parseName();if(Object.prototype.hasOwnProperty.call(a,t.value))return t;throw this.unexpected(e)}node(e,t){return!0!==this._options.noLocation&&(t.loc=new c.Ye(e,this._lexer.lastToken,this._lexer.source)),t}peek(e){return this._lexer.token.kind===e}expectToken(e){let t=this._lexer.token;if(t.kind===e)return this.advanceLexer(),t;throw syntaxError(this._lexer.source,t.start,`Expected ${getTokenKindDesc(e)}, found ${getTokenDesc(t)}.`)}expectOptionalToken(e){let t=this._lexer.token;return t.kind===e&&(this.advanceLexer(),!0)}expectKeyword(e){let t=this._lexer.token;if(t.kind===o.NAME&&t.value===e)this.advanceLexer();else throw syntaxError(this._lexer.source,t.start,`Expected "${e}", found ${getTokenDesc(t)}.`)}expectOptionalKeyword(e){let t=this._lexer.token;return t.kind===o.NAME&&t.value===e&&(this.advanceLexer(),!0)}unexpected(e){let t=null!=e?e:this._lexer.token;return syntaxError(this._lexer.source,t.start,`Unexpected ${getTokenDesc(t)}.`)}any(e,t,i){this.expectToken(e);let r=[];for(;!this.expectOptionalToken(i);)r.push(t.call(this));return r}optionalMany(e,t,i){if(this.expectOptionalToken(e)){let e=[];do e.push(t.call(this));while(!this.expectOptionalToken(i));return e}return[]}many(e,t,i){this.expectToken(e);let r=[];do r.push(t.call(this));while(!this.expectOptionalToken(i));return r}delimitedMany(e,t){this.expectOptionalToken(e);let i=[];do i.push(t.call(this));while(this.expectOptionalToken(e));return i}advanceLexer(){let{maxTokens:e}=this._options,t=this._lexer.advance();if(void 0!==e&&t.kind!==o.EOF&&(++this._tokenCounter,this._tokenCounter>e))throw syntaxError(this._lexer.source,t.start,`Document contains more that ${e} tokens. Parsing aborted.`)}};function getTokenDesc(e){let t=e.value;return getTokenKindDesc(e.kind)+(null!=t?` "${t}"`:"")}function getTokenKindDesc(e){return e===o.BANG||e===o.DOLLAR||e===o.AMP||e===o.PAREN_L||e===o.PAREN_R||e===o.SPREAD||e===o.COLON||e===o.EQUALS||e===o.AT||e===o.BRACKET_L||e===o.BRACKET_R||e===o.BRACE_L||e===o.PIPE||e===o.BRACE_R?`"${e}"`:e}var x=new Map,m=new Map,N=!0,k=!1;function normalize(e){return e.replace(/[\s,]+/g," ").trim()}function gql(e){for(var t=[],i=1;i<arguments.length;i++)t[i-1]=arguments[i];"string"==typeof e&&(e=[e]);var r=e[0];return t.forEach(function(t,i){t&&"Document"===t.kind?r+=t.loc.source.body:r+=t,r+=e[i+1]}),function(e){var t=normalize(e);if(!x.has(t)){var i,r,n,s,a,o=function(e,t){let i=new Parser(e,t);return i.parseDocument()}(e,{experimentalFragmentVariables:k,allowLegacyFragmentVariables:k});if(!o||"Document"!==o.kind)throw Error("Not a valid GraphQL document.");x.set(t,(i=new Set,r=[],o.definitions.forEach(function(e){if("FragmentDefinition"===e.kind){var t,n=e.name.value,s=normalize((t=e.loc).source.body.substring(t.start,t.end)),a=m.get(n);a&&!a.has(s)?N&&console.warn("Warning: fragment with name "+n+" already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names"):a||m.set(n,a=new Set),a.add(s),i.has(s)||(i.add(s),r.push(e))}else r.push(e)}),n=(0,l.pi)((0,l.pi)({},o),{definitions:r}),(s=new Set(n.definitions)).forEach(function(e){e.loc&&delete e.loc,Object.keys(e).forEach(function(t){var i=e[t];i&&"object"==typeof i&&s.add(i)})}),(a=n.loc)&&(delete a.startToken,delete a.endToken),n))}return x.get(t)}(r)}var A={gql:gql,resetCaches:function(){x.clear(),m.clear()},disableFragmentWarnings:function(){N=!1},enableExperimentalFragmentVariables:function(){k=!0},disableExperimentalFragmentVariables:function(){k=!1}};(s=gql||(gql={})).gql=A.gql,s.resetCaches=A.resetCaches,s.disableFragmentWarnings=A.disableFragmentWarnings,s.enableExperimentalFragmentVariables=A.enableExperimentalFragmentVariables,s.disableExperimentalFragmentVariables=A.disableExperimentalFragmentVariables,gql.default=gql},2729:function(e,t,i){i.d(t,{_:function(){return _tagged_template_literal}});function _tagged_template_literal(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}}}]);