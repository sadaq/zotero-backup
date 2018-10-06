!function e(t,i,n){function r(s,o){if(!i[s]){if(!t[s]){var l="function"==typeof require&&require;if(!o&&l)return l(s,!0);if(a)return a(s,!0);var u=new Error("Cannot find module '"+s+"'");throw u.code="MODULE_NOT_FOUND",u}var d=i[s]={exports:{}};t[s][0].call(d.exports,function(e){var i=t[s][1][e];return r(i?i:e)},d,d.exports,e,t,i,n)}return i[s].exports}for(var a="function"==typeof require&&require,s=0;s<n.length;s++)r(n[s]);return r}({1:[function(e,t,i){(function(i){function n(){function e(){h.windowLoaded=!0}i.addEventListener?i.addEventListener("load",e):i.attachEvent&&i.attachEvent("onload",e),h.codeLoadEnd=(new Date).getTime()}/** @license ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ============

Adobe Visitor API for JavaScript version: 3.1.2
Copyright 1996-2015 Adobe, Inc. All Rights Reserved
More info available at https://marketing.adobe.com/resources/help/en_US/mcvid/
*/
var r=e("./child/ChildVisitor"),a=e("./child/Message"),s=e("./child/makeChildMessageListener"),o=e("./utils/asyncParallelApply"),l=e("./utils/enums"),u=e("./utils/utils"),d=e("./utils/getDomain"),c=e("./units/version"),f=e("./units/crossDomain"),g=e("@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID"),p=e("./units/makeCorsRequest"),m=e("./units/makeDestinationPublishing"),_=e("./utils/constants"),h=function(e,t,n){function r(e){var t=e;return function(e){var i=e||v.location.href;try{var n=S._extractParamFromUri(i,t);if(n)return H.parsePipeDelimetedKeyValues(n)}catch(e){}}}function h(e){function t(e,t){e&&e.match(_.VALID_VISITOR_ID_REGEX)&&t(e)}t(e[k],S.setMarketingCloudVisitorID),S._setFieldExpire(V,-1),t(e[R],S.setAnalyticsVisitorID)}function C(e){e=e||{},S._supplementalDataIDCurrent=e.supplementalDataIDCurrent||"",S._supplementalDataIDCurrentConsumed=e.supplementalDataIDCurrentConsumed||{},S._supplementalDataIDLast=e.supplementalDataIDLast||"",S._supplementalDataIDLastConsumed=e.supplementalDataIDLastConsumed||{}}function D(e){function t(e,t,i){return i=i?i+="|":i,i+=e+"="+encodeURIComponent(t)}function i(e){var t=H.getTimestampInSeconds();return e=e?e+="|":e,e+="TS="+t}function n(e,i){var n=i[0],r=i[1];return null!=r&&r!==N&&(e=t(n,r,e)),e}var r=e.reduce(n,"");return i(r)}function I(e){var t=20160,i=e.minutesToLive,n="";return(S.idSyncDisableSyncs||S.disableIdSyncs)&&(n=n?n:"Error: id syncs have been disabled"),"string"==typeof e.dpid&&e.dpid.length||(n=n?n:"Error: config.dpid is empty"),"string"==typeof e.url&&e.url.length||(n=n?n:"Error: config.url is empty"),"undefined"==typeof i?i=t:(i=parseInt(i,10),(isNaN(i)||i<=0)&&(n=n?n:"Error: config.minutesToLive needs to be a positive number")),{error:n,ttl:i}}if(!n||n.split("").reverse().join("")!==e)throw new Error("Please use `Visitor.getInstance` to instantiate Visitor.");var S=this;S.version="3.1.2";var v=i,A=v.Visitor;A.version=S.version,A.AuthState=l.AUTH_STATE,A.OptOut=l.OPT_OUT,v.s_c_in||(v.s_c_il=[],v.s_c_in=0),S._c="Visitor",S._il=v.s_c_il,S._in=v.s_c_in,S._il[S._in]=S,v.s_c_in++,S._log={requests:[]},S.marketingCloudOrgID=e,S.cookieName="AMCV_"+e,S.sessionCookieName="AMCVS_"+e,S.cookieDomain=d(),S.cookieDomain===v.location.hostname&&(S.cookieDomain=""),S.loadSSL=v.location.protocol.toLowerCase().indexOf("https")>=0,S.loadTimeout=3e4,S.CORSErrors=[],S.marketingCloudServer=S.audienceManagerServer="dpm.demdex.net",S.sdidParamExpiry=30;var y=v.document,M=null,b="MC",k="MCMID",E="MCORGID",T="MCCIDH",O="MCSYNCSOP",w="MCIDTS",L="MCOPTOUT",P="A",R="MCAID",F="AAM",x="MCAAMLH",V="MCAAMB",N="NONE",j=function(e){return!Object.prototype[e]},U=p(S,G);S.FIELDS=l.FIELDS,S.cookieRead=function(e){e=encodeURIComponent(e);var t=(";"+y.cookie).split(" ").join(";"),i=t.indexOf(";"+e+"="),n=i<0?i:t.indexOf(";",i+1),r=i<0?"":decodeURIComponent(t.substring(i+2+e.length,n<0?t.length:n));return r},S.cookieWrite=function(e,t,i){var n,r=S.cookieLifetime;if(t=""+t,r=r?(""+r).toUpperCase():"",i&&"SESSION"!==r&&"NONE"!==r){if(n=""!==t?parseInt(r?r:0,10):-60)i=new Date,i.setTime(i.getTime()+1e3*n);else if(1===i){i=new Date;var a=i.getYear();i.setYear(a+2+(a<1900?1900:0))}}else i=0;return e&&"NONE"!==r?(y.cookie=encodeURIComponent(e)+"="+encodeURIComponent(t)+"; path=/;"+(i?" expires="+i.toGMTString()+";":"")+(S.cookieDomain?" domain="+S.cookieDomain+";":""),S.cookieRead(e)===t):0},S.resetState=function(e){e?S._mergeServerState(e):C()},S._isAllowedDone=!1,S._isAllowedFlag=!1,S.isAllowed=function(){return S._isAllowedDone||(S._isAllowedDone=!0,(S.cookieRead(S.cookieName)||S.cookieWrite(S.cookieName,"T",1))&&(S._isAllowedFlag=!0)),S._isAllowedFlag},S.setMarketingCloudVisitorID=function(e){S._setMarketingCloudFields(e)},S._use1stPartyMarketingCloudServer=!1,S.getMarketingCloudVisitorID=function(e,t){if(S.isAllowed()){S.marketingCloudServer&&S.marketingCloudServer.indexOf(".demdex.net")<0&&(S._use1stPartyMarketingCloudServer=!0);var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(k,n,e,t,i)}return""},S.getVisitorValues=function(e,t){var i={MCMID:{fn:S.getMarketingCloudVisitorID,args:[!0],context:S},MCOPTOUT:{fn:S.isOptedOut,args:[void 0,!0],context:S},MCAID:{fn:S.getAnalyticsVisitorID,args:[!0],context:S},MCAAMLH:{fn:S.getAudienceManagerLocationHint,args:[!0],context:S},MCAAMB:{fn:S.getAudienceManagerBlob,args:[!0],context:S}},n=t&&t.length?H.pluck(i,t):i;o(n,e)},S._currentCustomerIDs={},S._customerIDsHashChanged=!1,S._newCustomerIDsHash="",S.setCustomerIDs=function(e){function t(){S._customerIDsHashChanged=!1}if(S.isAllowed()&&e){S._readVisitor();var i,n;for(i in e)if(j(i)&&(n=e[i]))if("object"==typeof n){var r={};n.id&&(r.id=n.id),void 0!=n.authState&&(r.authState=n.authState),S._currentCustomerIDs[i]=r}else S._currentCustomerIDs[i]={id:n};var a=S.getCustomerIDs(),s=S._getField(T),o="";s||(s=0);for(i in a)j(i)&&(n=a[i],o+=(o?"|":"")+i+"|"+(n.id?n.id:"")+(n.authState?n.authState:""));S._newCustomerIDsHash=S._hash(o),S._newCustomerIDsHash!==s&&(S._customerIDsHashChanged=!0,S._mapCustomerIDs(t))}},S.getCustomerIDs=function(){S._readVisitor();var e,t,i={};for(e in S._currentCustomerIDs)j(e)&&(t=S._currentCustomerIDs[e],i[e]||(i[e]={}),t.id&&(i[e].id=t.id),void 0!=t.authState?i[e].authState=t.authState:i[e].authState=A.AuthState.UNKNOWN);return i},S.setAnalyticsVisitorID=function(e){S._setAnalyticsFields(e)},S.getAnalyticsVisitorID=function(e,t,i){if(!H.isTrackingServerPopulated()&&!i)return S._callCallback(e,[""]),"";if(S.isAllowed()){var n="";if(i||(n=S.getMarketingCloudVisitorID(function(t){S.getAnalyticsVisitorID(e,!0)})),n||i){var r=i?S.marketingCloudServer:S.trackingServer,a="";S.loadSSL&&(i?S.marketingCloudServerSecure&&(r=S.marketingCloudServerSecure):S.trackingServerSecure&&(r=S.trackingServerSecure));var s={};if(r){var o="http"+(S.loadSSL?"s":"")+"://"+r+"/id",l="d_visid_ver="+S.version+"&mcorgid="+encodeURIComponent(S.marketingCloudOrgID)+(n?"&mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":""),u=["s_c_il",S._in,"_set"+(i?"MarketingCloud":"Analytics")+"Fields"];a=o+"?"+l+"&callback=s_c_il%5B"+S._in+"%5D._set"+(i?"MarketingCloud":"Analytics")+"Fields",s.corsUrl=o+"?"+l,s.callback=u}return s.url=a,S._getRemoteField(i?k:R,a,e,t,s)}}return""},S.getAudienceManagerLocationHint=function(e,t){if(S.isAllowed()){var i=S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)});if(i){var n=S._getField(R);if(!n&&H.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerLocationHint(e,!0)})),n||!H.isTrackingServerPopulated()){var r=S._getAudienceManagerURLData(),a=r.url;return S._getRemoteField(x,a,e,t,r)}}}return""},S.getLocationHint=S.getAudienceManagerLocationHint,S.getAudienceManagerBlob=function(e,t){if(S.isAllowed()){var i=S.getMarketingCloudVisitorID(function(t){S.getAudienceManagerBlob(e,!0)});if(i){var n=S._getField(R);if(!n&&H.isTrackingServerPopulated()&&(n=S.getAnalyticsVisitorID(function(t){S.getAudienceManagerBlob(e,!0)})),n||!H.isTrackingServerPopulated()){var r=S._getAudienceManagerURLData(),a=r.url;return S._customerIDsHashChanged&&S._setFieldExpire(V,-1),S._getRemoteField(V,a,e,t,r)}}}return""},S._supplementalDataIDCurrent="",S._supplementalDataIDCurrentConsumed={},S._supplementalDataIDLast="",S._supplementalDataIDLastConsumed={},S.getSupplementalDataID=function(e,t){S._supplementalDataIDCurrent||t||(S._supplementalDataIDCurrent=S._generateID(1));var i=S._supplementalDataIDCurrent;return S._supplementalDataIDLast&&!S._supplementalDataIDLastConsumed[e]?(i=S._supplementalDataIDLast,S._supplementalDataIDLastConsumed[e]=!0):i&&(S._supplementalDataIDCurrentConsumed[e]&&(S._supplementalDataIDLast=S._supplementalDataIDCurrent,S._supplementalDataIDLastConsumed=S._supplementalDataIDCurrentConsumed,S._supplementalDataIDCurrent=i=t?"":S._generateID(1),S._supplementalDataIDCurrentConsumed={}),i&&(S._supplementalDataIDCurrentConsumed[e]=!0)),i},S.getOptOut=function(e,t){if(S.isAllowed()){var i=S._getAudienceManagerURLData("_setMarketingCloudFields"),n=i.url;return S._getRemoteField(L,n,e,t,i)}return""},S.isOptedOut=function(e,t,i){if(S.isAllowed()){t||(t=A.OptOut.GLOBAL);var n=S.getOptOut(function(i){var n=i===A.OptOut.GLOBAL||i.indexOf(t)>=0;S._callCallback(e,[n])},i);return n?n===A.OptOut.GLOBAL||n.indexOf(t)>=0:null}return!1},S._fields=null,S._fieldsExpired=null,S._hash=function(e){var t,i,n=0;if(e)for(t=0;t<e.length;t++)i=e.charCodeAt(t),n=(n<<5)-n+i,n&=n;return n},S._generateID=g,S._generateLocalMID=function(){var e=S._generateID(0);return q.isClientSideMarketingCloudVisitorID=!0,e},S._callbackList=null,S._callCallback=function(e,t){try{"function"==typeof e?e.apply(v,t):e[1].apply(e[0],t)}catch(e){}},S._registerCallback=function(e,t){t&&(null==S._callbackList&&(S._callbackList={}),void 0==S._callbackList[e]&&(S._callbackList[e]=[]),S._callbackList[e].push(t))},S._callAllCallbacks=function(e,t){if(null!=S._callbackList){var i=S._callbackList[e];if(i)for(;i.length>0;)S._callCallback(i.shift(),t)}},S._addQuerystringParam=function(e,t,i,n){var r=encodeURIComponent(t)+"="+encodeURIComponent(i),a=H.parseHash(e),s=H.hashlessUrl(e),o=s.indexOf("?")===-1;if(o)return s+"?"+r+a;var l=s.split("?"),u=l[0]+"?",d=l[1],c=H.addQueryParamAtLocation(d,r,n);return u+c+a},S._extractParamFromUri=function(e,t){var i=new RegExp("[\\?&#]"+t+"=([^&#]*)"),n=i.exec(e);if(n&&n.length)return decodeURIComponent(n[1])},S._parseAdobeMcFromUrl=r(_.ADOBE_MC),S._parseAdobeMcSdidFromUrl=r(_.ADOBE_MC_SDID),S._attemptToPopulateSdidFromUrl=function(t){var i=S._parseAdobeMcSdidFromUrl(t),n=1e9;i&&i.TS&&(n=H.getTimestampInSeconds()-i.TS),i&&i.SDID&&i[E]===e&&n<S.sdidParamExpiry&&(S._supplementalDataIDCurrent=i.SDID,S._supplementalDataIDCurrentConsumed.SDID_URL_PARAM=!0)},S._attemptToPopulateIdsFromUrl=function(){var t=S._parseAdobeMcFromUrl();if(t&&t.TS){var i=H.getTimestampInSeconds(),n=i-t.TS,r=Math.floor(n/60);if(r>_.ADOBE_MC_TTL_IN_MIN||t[E]!==e)return;h(t)}},S._mergeServerState=function(e){function t(e){H.isObject(e)&&S.setCustomerIDs(e)}function i(e){return H.isObject(e)?e:JSON.parse(e)}if(e)try{if(e=i(e),e[S.marketingCloudOrgID]){var n=e[S.marketingCloudOrgID];t(n.customerIDs),C(n.sdid)}}catch(e){throw new Error("`serverState` has an invalid format.")}},S._timeout=null,S._loadData=function(e,t,i,n){var r="d_fieldgroup";t=S._addQuerystringParam(t,r,e,1),n.url=S._addQuerystringParam(n.url,r,e,1),n.corsUrl=S._addQuerystringParam(n.corsUrl,r,e,1),q.fieldGroupObj[e]=!0,n===Object(n)&&n.corsUrl&&"XMLHttpRequest"===U.corsMetadata.corsType&&U.fireCORS(n,i,e)},S._clearTimeout=function(e){null!=S._timeout&&S._timeout[e]&&(clearTimeout(S._timeout[e]),S._timeout[e]=0)},S._settingsDigest=0,S._getSettingsDigest=function(){if(!S._settingsDigest){var e=S.version;S.audienceManagerServer&&(e+="|"+S.audienceManagerServer),S.audienceManagerServerSecure&&(e+="|"+S.audienceManagerServerSecure),S._settingsDigest=S._hash(e)}return S._settingsDigest},S._readVisitorDone=!1,S._readVisitor=function(){if(!S._readVisitorDone){S._readVisitorDone=!0;var e,t,i,n,r,a,s=S._getSettingsDigest(),o=!1,l=S.cookieRead(S.cookieName),u=new Date;if(null==S._fields&&(S._fields={}),l&&"T"!==l)for(l=l.split("|"),l[0].match(/^[\-0-9]+$/)&&(parseInt(l[0],10)!==s&&(o=!0),l.shift()),l.length%2===1&&l.pop(),e=0;e<l.length;e+=2)t=l[e].split("-"),i=t[0],n=l[e+1],t.length>1?(r=parseInt(t[1],10),a=t[1].indexOf("s")>0):(r=0,a=!1),o&&(i===T&&(n=""),r>0&&(r=u.getTime()/1e3-60)),i&&n&&(S._setField(i,n,1),r>0&&(S._fields["expire"+i]=r+(a?"s":""),(u.getTime()>=1e3*r||a&&!S.cookieRead(S.sessionCookieName))&&(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[i]=!0)));!S._getField(R)&&H.isTrackingServerPopulated()&&(l=S.cookieRead("s_vi"),l&&(l=l.split("|"),l.length>1&&l[0].indexOf("v1")>=0&&(n=l[1],e=n.indexOf("["),e>=0&&(n=n.substring(0,e)),n&&n.match(_.VALID_VISITOR_ID_REGEX)&&S._setField(R,n))))}},S._appendVersionTo=function(e){var t="vVersion|"+S.version,i=e?S._getCookieVersion(e):null;return i?c.areVersionsDifferent(i,S.version)&&(e=e.replace(_.VERSION_REGEX,t)):e+=(e?"|":"")+t,e},S._writeVisitor=function(){var e,t,i=S._getSettingsDigest();for(e in S._fields)j(e)&&S._fields[e]&&"expire"!==e.substring(0,6)&&(t=S._fields[e],i+=(i?"|":"")+e+(S._fields["expire"+e]?"-"+S._fields["expire"+e]:"")+"|"+t);i=S._appendVersionTo(i),S.cookieWrite(S.cookieName,i,1)},S._getField=function(e,t){return null==S._fields||!t&&S._fieldsExpired&&S._fieldsExpired[e]?null:S._fields[e]},S._setField=function(e,t,i){null==S._fields&&(S._fields={}),S._fields[e]=t,i||S._writeVisitor()},S._getFieldList=function(e,t){var i=S._getField(e,t);return i?i.split("*"):null},S._setFieldList=function(e,t,i){S._setField(e,t?t.join("*"):"",i)},S._getFieldMap=function(e,t){var i=S._getFieldList(e,t);if(i){var n,r={};for(n=0;n<i.length;n+=2)r[i[n]]=i[n+1];return r}return null},S._setFieldMap=function(e,t,i){var n,r=null;if(t){r=[];for(n in t)j(n)&&(r.push(n),r.push(t[n]))}S._setFieldList(e,r,i)},S._setFieldExpire=function(e,t,i){var n=new Date;n.setTime(n.getTime()+1e3*t),null==S._fields&&(S._fields={}),S._fields["expire"+e]=Math.floor(n.getTime()/1e3)+(i?"s":""),t<0?(S._fieldsExpired||(S._fieldsExpired={}),S._fieldsExpired[e]=!0):S._fieldsExpired&&(S._fieldsExpired[e]=!1),i&&(S.cookieRead(S.sessionCookieName)||S.cookieWrite(S.sessionCookieName,"1"))},S._findVisitorID=function(e){return e&&("object"==typeof e&&(e=e.d_mid?e.d_mid:e.visitorID?e.visitorID:e.id?e.id:e.uuid?e.uuid:""+e),e&&(e=e.toUpperCase(),"NOTARGET"===e&&(e=N)),e&&(e===N||e.match(_.VALID_VISITOR_ID_REGEX))||(e="")),e},S._setFields=function(e,t){if(S._clearTimeout(e),null!=S._loading&&(S._loading[e]=!1),q.fieldGroupObj[e]&&q.setState(e,!1),e===b){q.isClientSideMarketingCloudVisitorID!==!0&&(q.isClientSideMarketingCloudVisitorID=!1);var i=S._getField(k);if(!i||S.overwriteCrossDomainMCIDAndAID){if(i="object"==typeof t&&t.mid?t.mid:S._findVisitorID(t),!i){if(S._use1stPartyMarketingCloudServer&&!S.tried1stPartyMarketingCloudServer)return S.tried1stPartyMarketingCloudServer=!0,void S.getAnalyticsVisitorID(null,!1,!0);i=S._generateLocalMID()}S._setField(k,i)}i&&i!==N||(i=""),"object"==typeof t&&((t.d_region||t.dcs_region||t.d_blob||t.blob)&&S._setFields(F,t),S._use1stPartyMarketingCloudServer&&t.mid&&S._setFields(P,{id:t.id})),S._callAllCallbacks(k,[i])}if(e===F&&"object"==typeof t){var n=604800;void 0!=t.id_sync_ttl&&t.id_sync_ttl&&(n=parseInt(t.id_sync_ttl,10));var r=B.getRegionAndCheckIfChanged(t,n);S._callAllCallbacks(x,[r]);var a=S._getField(V);(t.d_blob||t.blob)&&(a=t.d_blob,a||(a=t.blob),S._setFieldExpire(V,n),S._setField(V,a)),a||(a=""),S._callAllCallbacks(V,[a]),!t.error_msg&&S._newCustomerIDsHash&&S._setField(T,S._newCustomerIDsHash)}if(e===P){var s=S._getField(R);s&&!S.overwriteCrossDomainMCIDAndAID||(s=S._findVisitorID(t),s?s!==N&&S._setFieldExpire(V,-1):s=N,S._setField(R,s)),s&&s!==N||(s=""),S._callAllCallbacks(R,[s])}if(S.idSyncDisableSyncs||S.disableIdSyncs)B.idCallNotProcesssed=!0;else{B.idCallNotProcesssed=!1;var o={};o.ibs=t.ibs,o.subdomain=t.subdomain,B.processIDCallData(o)}if(t===Object(t)){var l,u;S.isAllowed()&&(l=S._getField(L)),l||(l=N,t.d_optout&&t.d_optout instanceof Array&&(l=t.d_optout.join(",")),u=parseInt(t.d_ottl,10),isNaN(u)&&(u=7200),S._setFieldExpire(L,u,!0),S._setField(L,l)),S._callAllCallbacks(L,[l])}},S._loading=null,S._getRemoteField=function(e,t,i,n,r){var a,s="",o=H.isFirstPartyAnalyticsVisitorIDCall(e),l={MCAAMLH:!0,MCAAMB:!0};if(S.isAllowed()){S._readVisitor(),s=S._getField(e,l[e]===!0);var u=function(){return(!s||S._fieldsExpired&&S._fieldsExpired[e])&&(!S.disableThirdPartyCalls||o)};if(u()){if(e===k||e===L?a=b:e===x||e===V?a=F:e===R&&(a=P),a)return!t||null!=S._loading&&S._loading[a]||(null==S._loading&&(S._loading={}),S._loading[a]=!0,S._loadData(a,t,function(t){if(!S._getField(e)){t&&q.setState(a,!0);var i="";e===k?i=S._generateLocalMID():a===F&&(i={error_msg:"timeout"}),S._setFields(a,i)}},r)),S._registerCallback(e,i),s?s:(t||S._setFields(a,{id:N}),"")}else s||(e===k?(S._registerCallback(e,i),s=S._generateLocalMID(),S.setMarketingCloudVisitorID(s)):e===R?(S._registerCallback(e,i),s="",S.setAnalyticsVisitorID(s)):(s="",n=!0))}return e!==k&&e!==R||s!==N||(s="",n=!0),i&&n&&S._callCallback(i,[s]),s},S._setMarketingCloudFields=function(e){S._readVisitor(),S._setFields(b,e)},S._mapCustomerIDs=function(e){S.getAudienceManagerBlob(e,!0)},S._setAnalyticsFields=function(e){S._readVisitor(),S._setFields(P,e)},S._setAudienceManagerFields=function(e){S._readVisitor(),S._setFields(F,e)},S._getAudienceManagerURLData=function(e){var t=S.audienceManagerServer,i="",n=S._getField(k),r=S._getField(V,!0),a=S._getField(R),s=a&&a!==N?"&d_cid_ic=AVID%01"+encodeURIComponent(a):"";if(S.loadSSL&&S.audienceManagerServerSecure&&(t=S.audienceManagerServerSecure),t){var o,l,u=S.getCustomerIDs();if(u)for(o in u)j(o)&&(l=u[o],s+="&d_cid_ic="+encodeURIComponent(o)+"%01"+encodeURIComponent(l.id?l.id:"")+(l.authState?"%01"+l.authState:""));e||(e="_setAudienceManagerFields");var d="http"+(S.loadSSL?"s":"")+"://"+t+"/id",c="d_visid_ver="+S.version+"&d_rtbd=json&d_ver=2"+(!n&&S._use1stPartyMarketingCloudServer?"&d_verify=1":"")+"&d_orgid="+encodeURIComponent(S.marketingCloudOrgID)+"&d_nsid="+(S.idSyncContainerID||0)+(n?"&d_mid="+encodeURIComponent(n):"")+(S.idSyncDisable3rdPartySyncing||S.disableThirdPartyCookies?"&d_coppa=true":"")+(M===!0?"&d_coop_safe=1":M===!1?"&d_coop_unsafe=1":"")+(r?"&d_blob="+encodeURIComponent(r):"")+s,f=["s_c_il",S._in,e];return i=d+"?"+c+"&d_cb=s_c_il%5B"+S._in+"%5D."+e,{url:i,corsUrl:d+"?"+c,callback:f}}return{url:i}},S.appendVisitorIDsTo=function(e){try{var t=[[k,S._getField(k)],[R,S._getField(R)],[E,S.marketingCloudOrgID]];return S._addQuerystringParam(e,_.ADOBE_MC,D(t))}catch(t){return e}},S.appendSupplementalDataIDTo=function(e,t){if(t=t||S.getSupplementalDataID(H.generateRandomString(),!0),!t)return e;try{var i=D([["SDID",t],[E,S.marketingCloudOrgID]]);return S._addQuerystringParam(e,_.ADOBE_MC_SDID,i)}catch(t){return e}};var H={parseHash:function(e){var t=e.indexOf("#");return t>0?e.substr(t):""},hashlessUrl:function(e){var t=e.indexOf("#");return t>0?e.substr(0,t):e},addQueryParamAtLocation:function(e,t,i){var n=e.split("&");return i=null!=i?i:n.length,n.splice(i,0,t),n.join("&")},isFirstPartyAnalyticsVisitorIDCall:function(e,t,i){if(e!==R)return!1;var n;return t||(t=S.trackingServer),i||(i=S.trackingServerSecure),n=S.loadSSL?i:t,!("string"!=typeof n||!n.length)&&(n.indexOf("2o7.net")<0&&n.indexOf("omtrdc.net")<0)},isObject:function(e){return Boolean(e&&e===Object(e))},removeCookie:function(e){document.cookie=encodeURIComponent(e)+"=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;"+(S.cookieDomain?" domain="+S.cookieDomain+";":"")},isTrackingServerPopulated:function(){return!!S.trackingServer||!!S.trackingServerSecure},getTimestampInSeconds:function(){return Math.round((new Date).getTime()/1e3)},parsePipeDelimetedKeyValues:function(e){var t=e.split("|");return t.reduce(function(e,t){var i=t.split("=");return e[i[0]]=decodeURIComponent(i[1]),e},{})},generateRandomString:function(e){e=e||5;for(var t="",i="abcdefghijklmnopqrstuvwxyz0123456789";e--;)t+=i[Math.floor(Math.random()*i.length)];return t},parseBoolean:function(e){return"true"===e||"false"!==e&&null},replaceMethodsWithFunction:function(e,t){for(var i in e)e.hasOwnProperty(i)&&"function"==typeof e[i]&&(e[i]=t);return e},pluck:function(e,t){return t.reduce(function(t,i){return e[i]&&(t[i]=e[i]),t},Object.create(null))}};S._helpers=H;var B=m(S,A);S._destinationPublishing=B,S.timeoutMetricsLog=[];var G,q={isClientSideMarketingCloudVisitorID:null,MCIDCallTimedOut:null,AnalyticsIDCallTimedOut:null,AAMIDCallTimedOut:null,fieldGroupObj:{},setState:function(e,t){switch(e){case b:t===!1?this.MCIDCallTimedOut!==!0&&(this.MCIDCallTimedOut=!1):this.MCIDCallTimedOut=t;break;case P:t===!1?this.AnalyticsIDCallTimedOut!==!0&&(this.AnalyticsIDCallTimedOut=!1):this.AnalyticsIDCallTimedOut=t;break;case F:t===!1?this.AAMIDCallTimedOut!==!0&&(this.AAMIDCallTimedOut=!1):this.AAMIDCallTimedOut=t}}};S.isClientSideMarketingCloudVisitorID=function(){return q.isClientSideMarketingCloudVisitorID},S.MCIDCallTimedOut=function(){return q.MCIDCallTimedOut},S.AnalyticsIDCallTimedOut=function(){return q.AnalyticsIDCallTimedOut},S.AAMIDCallTimedOut=function(){return q.AAMIDCallTimedOut},S.idSyncGetOnPageSyncInfo=function(){return S._readVisitor(),S._getField(O)},S.idSyncByURL=function(e){var t=I(e||{});if(t.error)return t.error;var i,n,r=e.url,a=encodeURIComponent,s=B;return r=r.replace(/^https:/,"").replace(/^http:/,""),i=u.encodeAndBuildRequest(["",e.dpid,e.dpuuid||""],","),n=["ibs",a(e.dpid),"img",a(r),t.ttl,"",i],s.addMessage(n.join("|")),s.requestToProcess(),"Successfully queued"},S.idSyncByDataSource=function(e){return e===Object(e)&&"string"==typeof e.dpuuid&&e.dpuuid.length?(e.url="//dpm.demdex.net/ibs:dpid="+e.dpid+"&dpuuid="+e.dpuuid,S.idSyncByURL(e)):"Error: config or config.dpuuid is empty"},S._getCookieVersion=function(e){e=e||S.cookieRead(S.cookieName);var t=_.VERSION_REGEX.exec(e),i=t&&t.length>1?t[1]:null;return i},S._resetAmcvCookie=function(e){var t=S._getCookieVersion();t&&!c.isLessThan(t,e)||H.removeCookie(S.cookieName)},S.setAsCoopSafe=function(){M=!0},S.setAsCoopUnsafe=function(){M=!1},S.init=function(){function i(){if(t&&"object"==typeof t){S.configs=Object.create(null);for(var e in t)j(e)&&(S[e]=t[e],S.configs[e]=t[e]);S.idSyncContainerID=S.idSyncContainerID||0,M="boolean"==typeof S.isCoopSafe?S.isCoopSafe:H.parseBoolean(S.isCoopSafe),S.resetBeforeVersion&&S._resetAmcvCookie(S.resetBeforeVersion),S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl(),S._readVisitor();var i=S._getField(w),n=Math.ceil((new Date).getTime()/_.MILLIS_PER_DAY);S.idSyncDisableSyncs||S.disableIdSyncs||!B.canMakeSyncIDCall(i,n)||(S._setFieldExpire(V,-1),S._setField(w,n)),S.getMarketingCloudVisitorID(),S.getAudienceManagerLocationHint(),S.getAudienceManagerBlob(),S._mergeServerState(S.serverState)}else S._attemptToPopulateIdsFromUrl(),S._attemptToPopulateSdidFromUrl()}function n(){if(!S.idSyncDisableSyncs&&!S.disableIdSyncs){B.checkDPIframeSrc();var e=function(){var e=B;e.readyToAttachIframe()&&e.attachIframe()};v.addEventListener("load",function(){A.windowLoaded=!0,e()});try{f.receiveMessage(function(e){B.receiveMessage(e.data)},B.iframeHost)}catch(e){}}}function r(){S.whitelistIframeDomains&&_.POST_MESSAGE_ENABLED&&(S.whitelistIframeDomains=S.whitelistIframeDomains instanceof Array?S.whitelistIframeDomains:[S.whitelistIframeDomains],S.whitelistIframeDomains.forEach(function(t){var i=new a(e,t),n=s(S,i);f.receiveMessage(n,t)}))}i(),n(),r()}};h.getInstance=function(e,t){function n(){var t=i.s_c_il;if(t)for(var n=0;n<t.length;n++){var r=t[n];if(r&&"Visitor"===r._c&&r.marketingCloudOrgID===e)return r}}function a(){try{return i.self!==i.parent}catch(e){return!0}}function s(){i.s_c_il.splice(--i.s_c_in,1)}function o(e){var t="TEST_AMCV_COOKIE";return e.cookieWrite(t,"T",1),"T"===e.cookieRead(t)&&(e._helpers.removeCookie(t),!0)}if(!e)throw new Error("Visitor requires Adobe Marketing Cloud Org ID.");e.indexOf("@")<0&&(e+="@AdobeOrg");var l=n();if(l)return l;var d=e,c=d.split("").reverse().join(""),f=new h(e,null,c);s();var g=u.getIeVersion(),p="number"==typeof g&&g<10;if(p)return f._helpers.replaceMethodsWithFunction(f,function(){});var m=a()&&!o(f)&&i.parent?new r(e,t,f,i.parent):new h(e,t,c);return f=null,m.init(),m},n(),i.Visitor=h,t.exports=h}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"./child/ChildVisitor":2,"./child/Message":3,"./child/makeChildMessageListener":4,"./units/crossDomain":8,"./units/makeCorsRequest":9,"./units/makeDestinationPublishing":10,"./units/version":11,"./utils/asyncParallelApply":12,"./utils/constants":14,"./utils/enums":15,"./utils/getDomain":16,"./utils/utils":18,"@adobe-mcid/visitor-js-shared/lib/ids/generateRandomID":19}],2:[function(e,t,i){(function(i){e("../utils/polyfills");var n=e("./strategies/LocalVisitor"),r=e("./strategies/ProxyVisitor"),a=e("./strategies/PlaceholderVisitor"),s=e("../utils/callbackRegistryFactory"),o=e("./Message"),l=e("../utils/enums"),u=l.MESSAGES;t.exports=function(e,t,l,d){function c(e){Object.assign(I,e)}function f(e){Object.assign(I.state,e),I.callbackRegistry.executeAll(I.state)}function g(e){if(!A.isInvalid(e)){v=!1;var t=A.parse(e);I.setStateAndPublish(t.state)}}function p(e){!v&&S&&(v=!0,A.send(d,e))}function m(){var e=!0;c(new n(l._generateID)),I.getMarketingCloudVisitorID(),I.callbackRegistry.executeAll(I.state,e),i.removeEventListener("message",_)}function _(e){if(!A.isInvalid(e)){var t=A.parse(e);v=!1,i.clearTimeout(this.timeout),i.removeEventListener("message",_),c(new r(I)),i.addEventListener("message",g),I.setStateAndPublish(t.state),I.callbackRegistry.hasCallbacks()&&p(u.GETSTATE)}}function h(){var e=250;S&&postMessage?(i.addEventListener("message",_),p(u.HANDSHAKE),this.timeout=setTimeout(m,e)):m()}function C(){i.s_c_in||(i.s_c_il=[],i.s_c_in=0),I._c="Visitor",I._il=i.s_c_il,I._in=i.s_c_in,I._il[I._in]=I,i.s_c_in++}function D(){function e(e){0!==e.indexOf("_")&&"function"==typeof l[e]&&(I[e]=function(){})}Object.keys(l).forEach(e),I.getSupplementalDataID=l.getSupplementalDataID}var I=this,S=t.whitelistParentDomain;I.state={},I.version=l.version,I.marketingCloudOrgID=e;var v=!1,A=new o(e,S);I.callbackRegistry=s(),I.init=function(){C(),D(),c(new a(I)),h()},I.findField=function(e,t){if(I.state[e])return t(I.state[e]),I.state[e]},I.messageParent=p,I.setStateAndPublish=f}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/callbackRegistryFactory":13,"../utils/enums":15,"../utils/polyfills":17,"./Message":3,"./strategies/LocalVisitor":5,"./strategies/PlaceholderVisitor":6,"./strategies/ProxyVisitor":7}],3:[function(e,t,i){var n=e("../utils/enums"),r=n.MESSAGES,a={0:"prefix",1:"orgID",2:"state"};t.exports=function(e,t){this.parse=function(e){try{var t={},i=e.data.split("|");return i.forEach(function(e,i){if(void 0!==e){var n=a[i];t[n]=2!==i?e:JSON.parse(e)}}),t}catch(e){}},this.isInvalid=function(i){var n=this.parse(i);if(!n||Object.keys(n).length<2)return!0;var a=e!==n.orgID,s=!t||i.origin!==t,o=Object.keys(r).indexOf(n.prefix)===-1;return a||s||o},this.send=function(i,n,r){var a=n+"|"+e;r&&r===Object(r)&&(a+="|"+JSON.stringify(r));try{i.postMessage(a,t)}catch(e){}}}},{"../utils/enums":15}],4:[function(e,t,i){var n=e("../utils/enums"),r=e("../utils/utils"),a=n.MESSAGES,s=n.ALL_APIS,o=n.ASYNC_API_MAP,l=n.FIELDGROUP_TO_FIELD;t.exports=function(e,t){function i(){var t={};return Object.keys(s).forEach(function(i){var n=s[i],a=e[n]();r.isValueEmpty(a)||(t[i]=a)}),t}function n(){var t=[];return e._loading&&Object.keys(e._loading).forEach(function(i){if(e._loading[i]){var n=l[i];t.push(n)}}),t.length?t:null}function u(t){return function i(r){var a=n();if(a){var s=o[a[0]];e[s](i,!0)}else t()}}function d(e,n){var r=i();t.send(e,n,r)}function c(e){g(e),d(e,a.HANDSHAKE)}function f(e){var t=u(function(){d(e,a.PARENTSTATE)});t()}function g(i){function n(n){r.call(e,n),t.send(i,a.PARENTSTATE,{CUSTOMERIDS:e.getCustomerIDs()})}var r=e.setCustomerIDs;e.setCustomerIDs=n}return function(e){if(!t.isInvalid(e)){var i=t.parse(e).prefix,n=i===a.HANDSHAKE?c:f;n(e.source)}}}},{"../utils/enums":15,"../utils/utils":18}],5:[function(e,t,i){var n=e("../../utils/enums"),r=n.STATE_KEYS_MAP;t.exports=function(e){function t(){}function i(t,i){var n=this;return function(){var t=e(0,r.MCMID),a={};return a[r.MCMID]=t,n.setStateAndPublish(a),i(t),t}}this.getMarketingCloudVisitorID=function(e){e=e||t;var n=this.findField(r.MCMID,e),a=i.call(this,r.MCMID,e);return"undefined"!=typeof n?n:a()}}},{"../../utils/enums":15}],6:[function(e,t,i){var n=e("../../utils/enums"),r=n.ASYNC_API_MAP;t.exports=function(){Object.keys(r).forEach(function(e){var t=r[e];this[t]=function(t){this.callbackRegistry.add(e,t)}},this)}},{"../../utils/enums":15}],7:[function(e,t,i){var n=e("../../utils/enums"),r=n.MESSAGES,a=n.ASYNC_API_MAP,s=n.SYNC_API_MAP;t.exports=function(){function e(){}function t(e,t){var i=this;return function(){return i.callbackRegistry.add(e,t),i.messageParent(r.GETSTATE),""}}function i(i){var n=a[i];this[n]=function(n){n=n||e;var r=this.findField(i,n),a=t.call(this,i,n);return"undefined"!=typeof r?r:a()}}function n(t){var i=s[t];this[i]=function(){var i=this.findField(t,e);return i||{}}}Object.keys(a).forEach(i,this),Object.keys(s).forEach(n,this)}},{"../../utils/enums":15}],8:[function(e,t,i){(function(e){var i=!!e.postMessage;t.exports={postMessage:function(e,t,n){var r=1;t&&(i?n.postMessage(e,t.replace(/([^:]+:\/\/[^\/]+).*/,"$1")):t&&(n.location=t.replace(/#.*$/,"")+"#"+ +new Date+r++ +"&"+e))},receiveMessage:function(t,n){var r;try{i&&(t&&(r=function(e){return!("string"==typeof n&&e.origin!==n||"[object Function]"===Object.prototype.toString.call(n)&&n(e.origin)===!1)&&void t(e)}),e.addEventListener?e[t?"addEventListener":"removeEventListener"]("message",r):e[t?"attachEvent":"detachEvent"]("onmessage",r))}catch(e){}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],9:[function(e,t,i){(function(e){t.exports=function(t,i){return{corsMetadata:function(){var t="none",i=!0;return"undefined"!=typeof XMLHttpRequest&&XMLHttpRequest===Object(XMLHttpRequest)&&("withCredentials"in new XMLHttpRequest?t="XMLHttpRequest":"undefined"!=typeof XDomainRequest&&XDomainRequest===Object(XDomainRequest)&&(i=!1),Object.prototype.toString.call(e.HTMLElement).indexOf("Constructor")>0&&(i=!1)),{corsType:t,corsCookiesEnabled:i}}(),getCORSInstance:function(){return"none"===this.corsMetadata.corsType?null:new e[this.corsMetadata.corsType]},fireCORS:function(i,n,r){function a(t){var n;try{if(n=JSON.parse(t),n!==Object(n))return void s.handleCORSError(i,null,"Response is not JSON")}catch(e){return void s.handleCORSError(i,e,"Error parsing response as JSON")}try{for(var r=i.callback,a=e,o=0;o<r.length;o++)a=a[r[o]];a(n)}catch(e){s.handleCORSError(i,e,"Error forming callback function")}}var s=this;n&&(i.loadErrorHandler=n);try{var o=this.getCORSInstance();o.open("get",i.corsUrl+"&ts="+(new Date).getTime(),!0),"XMLHttpRequest"===this.corsMetadata.corsType&&(o.withCredentials=!0,o.timeout=t.loadTimeout,o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),o.onreadystatechange=function(){4===this.readyState&&200===this.status&&a(this.responseText)}),o.onerror=function(e){s.handleCORSError(i,e,"onerror")},o.ontimeout=function(e){s.handleCORSError(i,e,"ontimeout")},o.send(),t._log.requests.push(i.corsUrl)}catch(e){this.handleCORSError(i,e,"try-catch")}},handleCORSError:function(e,i,n){t.CORSErrors.push({corsData:e,error:i,description:n}),e.loadErrorHandler&&("ontimeout"===n?e.loadErrorHandler(!0):e.loadErrorHandler(!1))}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],10:[function(e,t,i){(function(i){var n=e("../utils/constants"),r=e("./crossDomain"),a=e("../utils/utils"),s="MCSYNCSOP",o="MCSYNCS",l="MCAAMLH";t.exports=function(e,t){var u=i.document;return{THROTTLE_START:3e4,MAX_SYNCS_LENGTH:649,throttleTimerSet:!1,id:null,onPagePixels:[],iframeHost:null,getIframeHost:function(e){if("string"==typeof e){var t=e.split("/");return t[0]+"//"+t[2]}},subdomain:null,url:null,getUrl:function(){var t,i="http://fast.",n="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(u.location.href);return this.subdomain||(this.subdomain="nosubdomainreturned"),e.loadSSL&&(i=e.idSyncSSLUseAkamai?"https://fast.":"https://"),
t=i+this.subdomain+".demdex.net/dest5.html"+n,this.iframeHost=this.getIframeHost(t),this.id="destination_publishing_iframe_"+this.subdomain+"_"+e.idSyncContainerID,t},checkDPIframeSrc:function(){var t="?d_nsid="+e.idSyncContainerID+"#"+encodeURIComponent(u.location.href);"string"==typeof e.dpIframeSrc&&e.dpIframeSrc.length&&(this.id="destination_publishing_iframe_"+(e._subdomain||this.subdomain||(new Date).getTime())+"_"+e.idSyncContainerID,this.iframeHost=this.getIframeHost(e.dpIframeSrc),this.url=e.dpIframeSrc+t)},idCallNotProcesssed:null,doAttachIframe:!1,startedAttachingIframe:!1,iframeHasLoaded:null,iframeIdChanged:null,newIframeCreated:null,originalIframeHasLoadedAlready:null,regionChanged:!1,timesRegionChanged:0,sendingMessages:!1,messages:[],messagesPosted:[],messagesReceived:[],messageSendingInterval:n.POST_MESSAGE_ENABLED?null:100,jsonForComparison:[],jsonDuplicates:[],jsonWaiting:[],jsonProcessed:[],canSetThirdPartyCookies:!0,receivedThirdPartyCookiesNotification:!1,readyToAttachIframe:function(){return!e.idSyncDisable3rdPartySyncing&&(this.doAttachIframe||e._doAttachIframe)&&(this.subdomain&&"nosubdomainreturned"!==this.subdomain||e._subdomain)&&this.url&&!this.startedAttachingIframe},attachIframe:function(){function e(){n=u.createElement("iframe"),n.sandbox="allow-scripts allow-same-origin",n.title="Adobe ID Syncing iFrame",n.id=i.id,n.name=i.id+"_name",n.style.cssText="display: none; width: 0; height: 0;",n.src=i.url,i.newIframeCreated=!0,t(),u.body.appendChild(n)}function t(){n.addEventListener("load",function(){n.className="aamIframeLoaded",i.iframeHasLoaded=!0,i.requestToProcess()})}this.startedAttachingIframe=!0;var i=this,n=u.getElementById(this.id);n?"IFRAME"!==n.nodeName?(this.id+="_2",this.iframeIdChanged=!0,e()):(this.newIframeCreated=!1,"aamIframeLoaded"!==n.className?(this.originalIframeHasLoadedAlready=!1,t()):(this.originalIframeHasLoadedAlready=!0,this.iframeHasLoaded=!0,this.iframe=n,this.requestToProcess())):e(),this.iframe=n},requestToProcess:function(t){function i(){a.jsonForComparison.push(t),a.jsonWaiting.push(t),a.processSyncOnPage(t)}var r,a=this;if(t===Object(t)&&t.ibs)if(r=JSON.stringify(t.ibs||[]),this.jsonForComparison.length){var s,o,l,u=!1;for(s=0,o=this.jsonForComparison.length;s<o;s++)if(l=this.jsonForComparison[s],r===JSON.stringify(l.ibs||[])){u=!0;break}u?this.jsonDuplicates.push(t):i()}else i();if((this.receivedThirdPartyCookiesNotification||!n.POST_MESSAGE_ENABLED||this.iframeHasLoaded)&&this.jsonWaiting.length){var d=this.jsonWaiting.shift();this.process(d),this.requestToProcess()}!e.idSyncDisableSyncs&&this.iframeHasLoaded&&this.messages.length&&!this.sendingMessages&&(this.throttleTimerSet||(this.throttleTimerSet=!0,setTimeout(function(){a.messageSendingInterval=n.POST_MESSAGE_ENABLED?null:150},this.THROTTLE_START)),this.sendingMessages=!0,this.sendMessages())},getRegionAndCheckIfChanged:function(t,i){var n=e._getField(l),r=t.d_region||t.dcs_region;return n?r&&(e._setFieldExpire(l,i),e._setField(l,r),parseInt(n,10)!==r&&(this.regionChanged=!0,this.timesRegionChanged++,e._setField(s,""),e._setField(o,""),n=r)):(n=r,n&&(e._setFieldExpire(l,i),e._setField(l,n))),n||(n=""),n},processSyncOnPage:function(e){var t,i,n,r;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(n=0;n<i;n++)r=t[n],r.syncOnPage&&this.checkFirstPartyCookie(r,"","syncOnPage")},process:function(e){var t,i,n,r,s,o=encodeURIComponent,l="",u=!1;if((t=e.ibs)&&t instanceof Array&&(i=t.length))for(u=!0,n=0;n<i;n++)r=t[n],s=[o("ibs"),o(r.id||""),o(r.tag||""),a.encodeAndBuildRequest(r.url||[],","),o(r.ttl||""),"",l,r.fireURLSync?"true":"false"],r.syncOnPage||(this.canSetThirdPartyCookies?this.addMessage(s.join("|")):r.fireURLSync&&this.checkFirstPartyCookie(r,s.join("|")));u&&this.jsonProcessed.push(e)},checkFirstPartyCookie:function(t,i,r){var a="syncOnPage"===r,l=a?s:o;e._readVisitor();var u,d,c=e._getField(l),f=!1,g=!1,p=Math.ceil((new Date).getTime()/n.MILLIS_PER_DAY);c?(u=c.split("*"),d=this.pruneSyncData(u,t.id,p),f=d.dataPresent,g=d.dataValid,f&&g||this.fireSync(a,t,i,u,l,p)):(u=[],this.fireSync(a,t,i,u,l,p))},pruneSyncData:function(e,t,i){var n,r,a,s=!1,o=!1;for(r=0;r<e.length;r++)n=e[r],a=parseInt(n.split("-")[1],10),n.match("^"+t+"-")?(s=!0,i<a?o=!0:(e.splice(r,1),r--)):i>=a&&(e.splice(r,1),r--);return{dataPresent:s,dataValid:o}},manageSyncsSize:function(e){if(e.join("*").length>this.MAX_SYNCS_LENGTH)for(e.sort(function(e,t){return parseInt(e.split("-")[1],10)-parseInt(t.split("-")[1],10)});e.join("*").length>this.MAX_SYNCS_LENGTH;)e.shift()},fireSync:function(t,i,n,r,a,s){var o=this;if(t){if("img"===i.tag){var l,u,d,c,f=i.url,g=e.loadSSL?"https:":"http:";for(l=0,u=f.length;l<u;l++){d=f[l],c=/^\/\//.test(d);var p=new Image;p.addEventListener("load",function(t,i,n,r){return function(){o.onPagePixels[t]=null,e._readVisitor();var s,l=e._getField(a),u=[];if(l){s=l.split("*");var d,c,f;for(d=0,c=s.length;d<c;d++)f=s[d],f.match("^"+i.id+"-")||u.push(f)}o.setSyncTrackingData(u,i,n,r)}}(this.onPagePixels.length,i,a,s)),p.src=(c?g:"")+d,this.onPagePixels.push(p)}}}else this.addMessage(n),this.setSyncTrackingData(r,i,a,s)},addMessage:function(t){var i=encodeURIComponent,r=i(e._enableErrorReporting?"---destpub-debug---":"---destpub---");this.messages.push((n.POST_MESSAGE_ENABLED?"":r)+t)},setSyncTrackingData:function(t,i,n,r){t.push(i.id+"-"+(r+Math.ceil(i.ttl/60/24))),this.manageSyncsSize(t),e._setField(n,t.join("*"))},sendMessages:function(){var e,t=this,i="",r=encodeURIComponent;this.regionChanged&&(i=r("---destpub-clear-dextp---"),this.regionChanged=!1),this.messages.length?n.POST_MESSAGE_ENABLED?(e=i+r("---destpub-combined---")+this.messages.join("%01"),this.postMessage(e),this.messages=[],this.sendingMessages=!1):(e=this.messages.shift(),this.postMessage(i+e),setTimeout(function(){t.sendMessages()},this.messageSendingInterval)):this.sendingMessages=!1},postMessage:function(e){r.postMessage(e,this.url,this.iframe.contentWindow),this.messagesPosted.push(e)},receiveMessage:function(e){var t,i=/^---destpub-to-parent---/;"string"==typeof e&&i.test(e)&&(t=e.replace(i,"").split("|"),"canSetThirdPartyCookies"===t[0]&&(this.canSetThirdPartyCookies="true"===t[1],this.receivedThirdPartyCookiesNotification=!0,this.requestToProcess()),this.messagesReceived.push(e))},processIDCallData:function(i){(null==this.url||i.subdomain&&"nosubdomainreturned"===this.subdomain)&&("string"==typeof e._subdomain&&e._subdomain.length?this.subdomain=e._subdomain:this.subdomain=i.subdomain||"",this.url=this.getUrl()),i.ibs instanceof Array&&i.ibs.length&&(this.doAttachIframe=!0),this.readyToAttachIframe()&&(e.idSyncAttachIframeOnWindowLoad?(t.windowLoaded||"complete"===u.readyState||"loaded"===u.readyState)&&this.attachIframe():this.attachIframeASAP()),"function"==typeof e.idSyncIDCallResult?e.idSyncIDCallResult(i):this.requestToProcess(i),"function"==typeof e.idSyncAfterIDCallResult&&e.idSyncAfterIDCallResult(i)},canMakeSyncIDCall:function(t,i){return e._forceSyncIDCall||!t||i-t>n.DAYS_BETWEEN_SYNC_ID_CALLS},attachIframeASAP:function(){function e(){t.startedAttachingIframe||(u.body?t.attachIframe():setTimeout(e,30))}var t=this;e()}}}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{"../utils/constants":14,"../utils/utils":18,"./crossDomain":8}],11:[function(e,t,i){function n(e){for(var t=/^\d+$/,i=0,n=e.length;i<n;i++)if(!t.test(e[i]))return!1;return!0}function r(e,t){for(;e.length<t.length;)e.push("0");for(;t.length<e.length;)t.push("0")}function a(e,t){for(var i=0;i<e.length;i++){var n=parseInt(e[i],10),r=parseInt(t[i],10);if(n>r)return 1;if(r>n)return-1}return 0}function s(e,t){if(e===t)return 0;var i=e.toString().split("."),s=t.toString().split(".");return n(i.concat(s))?(r(i,s),a(i,s)):NaN}t.exports={compare:s,isLessThan:function(e,t){return s(e,t)<0},areVersionsDifferent:function(e,t){return 0!==s(e,t)},isGreaterThan:function(e,t){return s(e,t)>0},isEqual:function(e,t){return 0===s(e,t)}}},{}],12:[function(e,t,i){t.exports=function(e,t){function i(e){return function(i){n[e]=i,r++;var s=r===a;s&&t(n)}}var n={},r=0,a=Object.keys(e).length;Object.keys(e).forEach(function(t){var n=e[t];if(n.fn){var r=n.args||[];r.unshift(i(t)),n.fn.apply(n.context||null,r)}})}},{}],13:[function(e,t,i){function n(){return{callbacks:{},add:function(e,t){this.callbacks[e]=this.callbacks[e]||[];var i=this.callbacks[e].push(t)-1;return function(){this.callbacks[e].splice(i,1)}},execute:function(e,t){if(this.callbacks[e]){t="undefined"==typeof t?[]:t,t=t instanceof Array?t:[t];try{for(;this.callbacks[e].length;){var i=this.callbacks[e].shift();"function"==typeof i?i.apply(null,t):i instanceof Array&&i[1].apply(i[0],t)}delete this.callbacks[e]}catch(e){}}},executeAll:function(e,t){(t||e&&!r.isObjectEmpty(e))&&Object.keys(this.callbacks).forEach(function(t){var i=void 0!==e[t]?e[t]:"";this.execute(t,i)},this)},hasCallbacks:function(){return Boolean(Object.keys(this.callbacks).length)}}}var r=e("./utils");t.exports=n},{"./utils":18}],14:[function(e,t,i){(function(e){t.exports={POST_MESSAGE_ENABLED:!!e.postMessage,DAYS_BETWEEN_SYNC_ID_CALLS:1,MILLIS_PER_DAY:864e5,ADOBE_MC:"adobe_mc",ADOBE_MC_SDID:"adobe_mc_sdid",VALID_VISITOR_ID_REGEX:/^[0-9a-fA-F\-]+$/,ADOBE_MC_TTL_IN_MIN:5,VERSION_REGEX:/vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],15:[function(e,t,i){i.MESSAGES={HANDSHAKE:"HANDSHAKE",GETSTATE:"GETSTATE",PARENTSTATE:"PARENTSTATE"},i.STATE_KEYS_MAP={MCMID:"MCMID",MCAID:"MCAID",MCAAMB:"MCAAMB",MCAAMLH:"MCAAMLH",MCOPTOUT:"MCOPTOUT",CUSTOMERIDS:"CUSTOMERIDS"},i.ASYNC_API_MAP={MCMID:"getMarketingCloudVisitorID",MCAID:"getAnalyticsVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut"},i.SYNC_API_MAP={CUSTOMERIDS:"getCustomerIDs"},i.ALL_APIS={MCMID:"getMarketingCloudVisitorID",MCAAMB:"getAudienceManagerBlob",MCAAMLH:"getAudienceManagerLocationHint",MCOPTOUT:"getOptOut",MCAID:"getAnalyticsVisitorID",CUSTOMERIDS:"getCustomerIDs"},i.FIELDGROUP_TO_FIELD={MC:"MCMID",A:"MCAID",AAM:"MCAAMB"},i.FIELDS={MCMID:"MCMID",MCOPTOUT:"MCOPTOUT",MCAID:"MCAID",MCAAMLH:"MCAAMLH",MCAAMB:"MCAAMB"},i.AUTH_STATE={UNKNOWN:0,AUTHENTICATED:1,LOGGED_OUT:2},i.OPT_OUT={GLOBAL:"global"}},{}],16:[function(e,t,i){(function(e){t.exports=function(t){var i;if(!t&&e.location&&(t=e.location.hostname),i=t)if(/^[0-9.]+$/.test(i))i="";else{var n=",ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,",r=i.split("."),a=r.length-1,s=a-1;if(a>1&&r[a].length<=2&&(2===r[a-1].length||n.indexOf(","+r[a]+",")<0)&&s--,s>0)for(i="";a>=s;)i=r[a]+(i?".":"")+i,a--}return i}}).call(this,"undefined"!=typeof window&&"undefined"!=typeof global&&window.global===global?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],17:[function(e,t,i){Object.assign=Object.assign||function(e){for(var t,i,n=1;n<arguments.length;++n){i=arguments[n];for(t in i)Object.prototype.hasOwnProperty.call(i,t)&&(e[t]=i[t])}return e}},{}],18:[function(e,t,i){i.isObjectEmpty=function(e){return e===Object(e)&&0===Object.keys(e).length},i.isValueEmpty=function(e){return""===e||i.isObjectEmpty(e)},i.getIeVersion=function(){if(document.documentMode)return document.documentMode;for(var e=7;e>4;e--){var t=document.createElement("div");if(t.innerHTML="<!--[if IE "+e+"]><span></span><![endif]-->",t.getElementsByTagName("span").length)return t=null,e;t=null}return null},i.encodeAndBuildRequest=function(e,t){return e.map(encodeURIComponent).join(t)}},{}],19:[function(e,t,i){t.exports=function(e){var t,i,n="0123456789",r="",a="",s=8,o=10,l=10;if(1==e){for(n+="ABCDEF",t=0;16>t;t++)i=Math.floor(Math.random()*s),r+=n.substring(i,i+1),i=Math.floor(Math.random()*s),a+=n.substring(i,i+1),s=16;return r+"-"+a}for(t=0;19>t;t++)i=Math.floor(Math.random()*o),r+=n.substring(i,i+1),0===t&&9==i?o=3:(1==t||2==t)&&10!=o&&2>i?o=10:2<t&&(o=10),i=Math.floor(Math.random()*l),a+=n.substring(i,i+1),0===t&&9==i?l=3:(1==t||2==t)&&10!=l&&2>i?l=10:2<t&&(l=10);return r+a}},{}]},{},[1]);// Dynamic Tag Management Library
// Property: ScienceMag
// All code and conventions are protected by copyright
// Adobe Systems Incorporated

(function(window, document, undefined) {
// Satellite
// =========
//
// Satellite *core*. Yeah, you want it.
//
// In this first section, we have a some useful utility functions.
var ToString = Object.prototype.toString

var Overrides = window._satellite && window._satellite.override

function assert(cond, msg){
  if (!cond){
    throw new Error(msg || "Assertion Failure")
  }
}

var SL = {
  initialized: false,

  // `$data(elm, prop, [val])`
  // ----------------------------
  //
  // Our own `$data()` method, [a la jQuery](http://api.jquery.com/jQuery.data/)
  // , used to get or set
  // properties on DOM elements without going insane.
  // `uuid` and `dataCache` are used by `$data()`
  //
  // Parameters:
  //
  // - `elm` - the element to get or set a property to
  // - `prop` - the property name
  // - `val` - the value of the property, if omitted, the method will
  //      return the existing value of the property, if any
  $data: function(elm, prop, val){
    if (!elm) return;
    var __satellite__ = '__satellite__'
    var cache = SL.dataCache
    var uuid = elm[__satellite__]
    if (!uuid) uuid = elm[__satellite__] = SL.uuid++
    var datas = cache[uuid]
    if (!datas) datas = cache[uuid] = {}
    if (val === undefined)
      return datas[prop]
    else
      datas[prop] = val
  },
  uuid: 1,
  dataCache: {},

  // `keys(object)`
  // --------------
  //
  // Return all keys of an object in an array.
  keys: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(key)
    return ret
  },

  // `values(object)`
  // ----------------
  //
  // Return all values of an object in an array.
  values: function(obj){
    var ret = []
    for (var key in obj) 
      if (obj.hasOwnProperty(key))
        ret.push(obj[key])
    return ret
  },

  // `isArray(thing)`
  // --------------
  //
  // Returns whether the given thing is an array.
  isArray: Array.isArray || function(thing){
    return ToString.apply(thing) === "[object Array]"
  },

  // `isObject(thing)`
  // -----------------
  //
  // Returns whether the given thing is a plain object.
  isObject: function(thing){
    return thing != null && !SL.isArray(thing) &&
      typeof thing === 'object'
  },

  // `isString(thing)`
  // -----------------
  //
  // Returns whether thing is a string
  isString: function(thing){
    return typeof thing === 'string'
  },

  // `isNumber(thing)`
  // -----------------
  //
  // Returns whether thing is a number
  isNumber: function(thing){
    return ToString.apply(thing) === '[object Number]' && !SL.isNaN(thing)
  },

  // `isNaN(thing)`
  // --------------
  //
  // Return whether thing is NaN
  isNaN: function(thing){
    return thing !== thing
  },

  // `isRegex(thing)`
  // ----------------
  //
  // Returns whether thing is a RegExp object
  isRegex: function(thing){
    return thing instanceof RegExp
  },

  // `isLinkTag(thing)`
  // ----------------
  //
  // Returns whether thing is a DOM link element
  isLinkTag: function(thing){
    return !!(thing && thing.nodeName &&
      thing.nodeName.toLowerCase() === 'a')
  },

  // `each(arr, func, [context])`
  // ------------------
  //
  // A handy method for array iteration wo having to write a for-loop.
  //
  // Parameters:
  //
  // - `arr` - an array
  // - `func(item, index, arr)` - a function which accepts each item in the array
  //      once. I takes these arguments
  //      * `item` - an item
  //      * `index` - the array index of said item
  //      * `arr` - the array
  // - `context` - the context to be bound to `func` when it is invoked
  each: function(arr, func, context){
    for (var i = 0, len = arr.length; i < len; i++)
      func.call(context, arr[i], i, arr)
  },

  // `map(arr, func)`
  // ----------------
  //
  // A handy method for mapping an array to another array using a 1-to-1 mapping
  // for each element
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each`, except that `func` is expected to return
  // a the value you want in the corresponding index of the returned array.
  map: function(arr, func, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++)
      ret.push(func.call(context, arr[i], i, arr))
    return ret
  },

  // `filter(arr, cond)`
  // -------------------
  //
  // Handy method for take an array and filtering down to a subset of the elements.
  //
  // Parameters:
  //
  // Parameters are the same as `SL.each` except the second argument is `cond`
  // instead of `func` and it is expected to return a truthy value respresenting
  // whether to include this item in the return array or not.
  filter: function(arr, cond, context){
    var ret = []
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        ret.push(item)
    }
    return ret
  },

  // `any(arr, cond, context)`
  // -------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for any item in the array.
  any: function(arr, cond, context){
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return true
    }
    return false
  },

  // `every(arr, cond, context)`
  // ---------------------------
  //
  // Another array helper function. Returns true if `cond(item)` returns true
  // for every item in the array.
  every: function(arr, cond, context){
    var retval = true
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      retval = retval && cond.call(context, item, i, arr)
    }
    return retval
  },

  // `contains(arr, obj)`
  // -----------------------
  //
  // Tells you whether an array contains an object.
  //
  // Parameters:
  //
  // - `arr` - said array
  // - `obj` - said object
  contains: function(arr, obj){
    return SL.indexOf(arr, obj) !== -1
  },

  // `indexOf(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  indexOf: function(arr, obj){
    if (arr.indexOf)
      return arr.indexOf(obj)
    for (var i = arr.length; i--;)
      if (obj === arr[i])
        return i
    return -1
  },


  // `find(arr, obj)`
  // -------------------
  //
  // Return the index of an object within an array.
  //
  // Parameters;
  //
  // - `arr` - said array
  // - `obj` - said object
  find: function(arr, cond, context){
    var ret = []
    if (!arr) return null
    for (var i = 0, len = arr.length; i < len; i++){
      var item = arr[i]
      if (cond.call(context, item, i, arr))
        return item
    }
    return null
  },

  // `textMatch(str, str_or_regex)`
  // ------------------------------
  //
  // Perform a string match based on another string or a regex.
  //
  // Parameters:
  //
  // `str` - the input string to be matched
  // `str_or_regex` - the pattern to match against, if this is a string, it requires exact match, if
  //      it's a regex, then it will do regex match
  textMatch: function(str, pattern){
    if (pattern == null) throw new Error('Illegal Argument: Pattern is not present')
    if (str == null) return false
    if (typeof pattern === 'string') return str === pattern
    else if (pattern instanceof RegExp) return pattern.test(str)
    else return false
  },

  // `stringify(obj, [seenValues])`
  // ------------------------------
  //
  // Stringify any type of object.
  //
  // Parameters:
  //
  // `obj` - the object that needs to be stringified
  // `seenValues` - pool of parsed resources; used to avoid circular references;
  stringify: function(obj, seenValues){
    seenValues = seenValues || [];
    if (SL.isObject(obj)) {
      if (SL.contains(seenValues, obj)) {
        return '<Cycle>';
      } else {
        seenValues.push(obj);
      }
    }

    if (SL.isArray(obj)) {
      return '[' + SL.map(obj, function(value){
        return SL.stringify(value, seenValues)
      }).join(',') + ']';
    } else if (SL.isString(obj)) {
      return '"' + String(obj) + '"';
    } if (SL.isObject(obj)) {
      var data = [];
      for (var prop in obj) {
        if (obj.hasOwnProperty(prop))
          data.push(prop + ': ' + SL.stringify(obj[prop], seenValues));
      }
      return '{' + data.join(', ') + '}';
    } else {
      return String(obj);
    }
  },

  // `trim(str)`
  // -----------
  //
  // Trims a string.
  //
  // Parameters:
  //
  // `str` - the input string to be trimmed.
  trim: function(str){
    if (str == null) return null
    if (str.trim){
      return str.trim()
    }else{
      return str.replace(/^ */, '').replace(/ *$/, '')
    }
  },

  // `bind(func, context)`
  // ---------------------
  //
  // Binds a context permanently to a context. The returned function is a new function
  // which - when called - will call the passed in function with `context` bound to it.
  //
  // Parameters:
  //
  // `func` - a function
  // `context` - an object to be bound as the context of this function
  bind: function(func, context) {
    return function() {
      return func.apply(context, arguments)
    }
  },

  // `throttle(fn, delay)`
  // ---------------------
  //
  // *Throttles* a function `fn` to be called no more than once during the interval
  // specified by `delay`.
  //
  // Parameters:
  //
  // - `fn` - a function
  // - `delay` - delay in milliseconds
  //
  // *Throttle function stolen from
  //     <http://remysharp.com/2010/07/21/throttling-function-calls/>*
  throttle: function(fn, delay) {
    var timer = null;
    return function () {
      var context = this, args = arguments;
      clearTimeout(timer);
      timer = setTimeout(function () {
        fn.apply(context, args);
      }, delay);
    };
  },

  // `domReady(callback)`
  // --------------------
  //
  // Registers a callback to be called when the DOM is fully parsed and loaded.
  //
  // Parameters:
  //
  // - `callback` - a function to be called at `domready`
  //
  // *domReady is borrowed from <https://github.com/ded/domready>*
  domReady: (function (ready) {

    var fns = [], fn, f = false
      , doc = document
      , testEl = doc.documentElement
      , hack = testEl.doScroll
      , domContentLoaded = 'DOMContentLoaded'
      , addEventListener = 'addEventListener'
      , onreadystatechange = 'onreadystatechange'
      , loaded = /^loade|^c/.test(doc.readyState)

    function flush(f) {
      loaded = 1
      while (f = fns.shift()) f()
    }

    doc[addEventListener] && doc[addEventListener](domContentLoaded, fn = function () {
      doc.removeEventListener(domContentLoaded, fn, f)
      flush()
    }, f)


    hack && doc.attachEvent(onreadystatechange, (fn = function () {
      if (/^c/.test(doc.readyState)) {
        doc.detachEvent(onreadystatechange, fn)
        flush()
      }
    }))

    return (ready = hack ?
      function (fn) {
        self != top ?
          loaded ? fn() : fns.push(fn) :
          function () {
            try {
              testEl.doScroll('left')
            } catch (e) {
              return setTimeout(function() { ready(fn) }, 50)
            }
            fn()
          }()
      } :
      function (fn) {
        loaded ? fn() : fns.push(fn)
      })
  }()),

  // `loadScript(url, [callback])`
  // -----------------------------
  //
  // Load an external script.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScript: function(url, callback){
    var script = document.createElement('script')
    SL.scriptOnLoad(url, script, callback)
    script.src = url
    document.getElementsByTagName('head')[0]
      .appendChild(script)
  },

  scriptOnLoad: function(url, script, callback){
    function cb(err){
      if (err) SL.logError(err)
      if (callback) callback(err)
    }
    if ('onload' in script){
      script.onload = function(){
        cb()
      }
      script.onerror = function(){
        cb(new Error('Failed to load script ' + url))
      }
    }else if ('readyState' in script){
      script.onreadystatechange = function(){
        var rs = script.readyState
        if (rs === 'loaded' || rs === 'complete'){
          script.onreadystatechange = null
          cb()
        }
      }
    }
  },

  // `loadScriptOnce(url, [callback])`
  // -----------------------------
  //
  // Load an external script only if it hasn't been loaded until now.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  // - `callback`(optional) - the function to be called after the script has loaded.
  loadScriptOnce: function(url, callback){
    if (SL.loadedScriptRegistry[url]) return

    SL.loadScript(url, function(err) {
      if (!err) {
        SL.loadedScriptRegistry[url] = true
      }

      if (callback) callback(err)
    })
  },

  loadedScriptRegistry: {},

  // `loadScriptSync(url)`
  // -----------------------------
  //
  // Load an external script using document.write.
  //
  // Parameters:
  //
  // - `url` - the URL of the script
  loadScriptSync: function(url){
    if (!document.write) {
      SL.notify('Cannot load sync the "' + url + '" script because "document.write" is not available', 1)
      return
    }

    if (SL.domReadyFired){
      SL.notify('Cannot load sync the "' + url + '" script after DOM Ready.', 1)
      return
    }

    // If the url contains a double quote, it could be someone trying to switch out of the
    // attribute to introduce an XSS hack. On the other hand, it could just be that the URL
    // was never escaped. We'll escape it to prevent the former while supporting the latter.
    if (url.indexOf('"') > -1) {
      url = encodeURI(url);
    }

    document.write('<script src="' + url + '"></scr' + 'ipt>');
  },

  // `pushAsyncScript(callback)`
  // -------------------
  //
  // Called by an async custom user script.
  pushAsyncScript: function(cb){
    SL.tools['default'].pushAsyncScript(cb)
  },

  // `pushBlockingScript(callback)`
  // ------------------------------
  //
  // Called by a blocking custom user script.
  pushBlockingScript: function(cb){
    SL.tools['default'].pushBlockingScript(cb)
  },

  // `addEventHandler(elm, evt, callback)`
  // -------------------------------------
  //
  // Register an event handler for a element
  //
  // Parameters:
  //
  // - `elm` - the element in question
  // - `evt` - the event type to listen to
  // - `callback` - callback function
  addEventHandler: window.addEventListener ?
    function(node, evt, cb){ node.addEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.attachEvent('on' + evt, cb) },

  removeEventHandler: window.removeEventListener ?
    function(node, evt, cb){ node.removeEventListener(evt, cb, false) } :
    function(node, evt, cb){ node.detachEvent('on' + evt, cb) },

  // `preventDefault(evt)`
  // ---------------------
  //
  // Prevent the default browser behavior for this event
  //
  // Parameters:
  //
  // `evt` - the event triggered
  preventDefault: window.addEventListener ?
    function(e){ e.preventDefault() } :
    function(e){ e.returnValue = false },

  // `stopPropagation(evt)`
  // ----------------------
  //
  // Cross-browser `stopPropagation`
  //
  // Parameters:
  //
  // `evt` - the event triggered
  stopPropagation: function(e){
    e.cancelBubble = true
    if (e.stopPropagation) e.stopPropagation()
  },

  // `containsElement(container, elm)`
  // ----------------------
  //
  // Given DOM elements `container` and `elm`, returns whether `container` contains `elm`.
  //
  // Parameters:
  //
  // `elm1` - the possible parent
  // `elm2` - the possible child
  containsElement: function(container, elm) {
    return container.contains ? container.contains(elm) :
      !!(container.compareDocumentPosition(elm) & 16);
  },

  // `matchesCss(css, elm)`
  // ----------------------
  //
  // Returns whether a DOM element matches a given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  // - `elm` - the element
  matchesCss: (function(docEl){

    function simpleTagMatch(selector, elm){
      var tagName = elm.tagName
      if (!tagName) return false
      return selector.toLowerCase() === tagName.toLowerCase()
    }

    var matches =
      docEl.matchesSelector ||
      docEl.mozMatchesSelector ||
      docEl.webkitMatchesSelector ||
      docEl.oMatchesSelector ||
      docEl.msMatchesSelector
    if (matches) {
      return function(selector, elm){
        if (elm === document || elm === window) return false
        try{
          return matches.call(elm, selector)
        }catch(e){
          return false
        }
      }
    } else if(docEl.querySelectorAll) {
      return function(selector, elm) {
        var parent = elm.parentNode
        if (!parent) return false
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          var nodeList = elm.parentNode.querySelectorAll(selector)
          for (var i = nodeList.length; i--;)
          if (nodeList[i] === elm) return true
        }catch(e){
          //
        }
        return false
      }
    }else{
      return function(selector, elm){
        if (selector.match(/^[a-z]+$/i)){
          return simpleTagMatch(selector, elm)
        }
        try{
          return SL.Sizzle.matches(selector, [elm]).length > 0
        }catch(e){
          return false
        }
      }
    }
  }(document.documentElement)),

  // `cssQuery(css)`
  // ---------------
  //
  // Return a list of element matching the given css selector
  //
  // Parameters:
  //
  // - `css` - the CSS selector
  cssQuery: (function(doc){
    if (doc.querySelectorAll) {
      return function(css, cb){
        var results
        try{
          results = doc.querySelectorAll(css)
        }catch(e){
          results = []
        }
        cb(results)
      }
    }else{
      return function(css, cb){
        if (SL.Sizzle){
          var results
          try{
            results = SL.Sizzle(css)
          }catch(e){
            results = []
          }
          cb(results)
        }else
          SL.sizzleQueue.push([css, cb])
      }
    }
  })(document),

  // `hasAttr(elem, attrName)`
  // ---------------
  //
  // Check if attribute is defined on element
  //
  // Parameters:
  //
  // - `elem` - the DOM element
  // - `attrName` - attribute name
  hasAttr: function(elem, attrName) {
    return elem.hasAttribute ? elem.hasAttribute(attrName) : elem[attrName] !== undefined;
  },

  // `inherit(subClass, superClass)`
  // -------------------------------
  //
  // Make `subClass` inherit `superClass`.
  //
  // Parameters:
  //
  // - `subClass` - a Javascript function representing a constructor - the inheritor
  // - `superClass` - another constructor - the one to inherit from
  inherit: function(subClass, superClass){
    var f = function() {}
    f.prototype = superClass.prototype
    subClass.prototype = new f()
    subClass.prototype.constructor = subClass
  },

  // `extend(dst, src)`
  // ----------------
  //
  // Extend an object with the properties of another.
  //
  // Parameters:
  //
  // - `dst` - object to copy to
  // - `src` - object to copy from
  extend: function(dst, src){
    for (var prop in src)
      if (src.hasOwnProperty(prop))
        dst[prop] = src[prop]
  },

  // `toArray(arrayLike)`
  // --------------------
  //
  // Converts an array-like object to an array.
  //
  // Parameters:
  //
  // - `arrayLike` - an array-like object, meaning it has a length property
  //   which is a number
  toArray: (function(){
    try {
      var slice = Array.prototype.slice
      slice.call( document.documentElement.childNodes, 0 )[0].nodeType;
      return function(thing){
        return slice.call(thing, 0)
      }
    // Provide a fallback method if it does not work
    } catch( e ) {
      return function(thing){
        var ret = []
        for (var i = 0, len = thing.length; i < len; i++)
          ret.push(thing[i])
        return ret
      }
    }
  })(),

  // `equalsIgnoreCase(str1, str2)`
  // ------------------------------
  //
  // Returns true iff str1 and str2 are equal ignoring case.
  //
  // Parameters:
  //
  // * `str1` - the first string
  // * `str2` - the second string
  equalsIgnoreCase: function(str1, str2){
    if (str1 == null) return str2 == null
    if (str2 == null) return false
    return String(str1).toLowerCase() === String(str2).toLowerCase()
  },

  // `poll(fn, [freq], [max_retries])`
  // ------------------
  //
  // Runs `fn` for every `freq` ms. `freq` defaults to 1000. If any
  // invocation of `fn()` returns true, polling will stop.
  // The polling will stop if the number or retries exceeds the
  // provided `max_retries`.
  //
  // Parameters:
  //
  // * `fn` - function to be called repeatedly
  // * `freq` - frequency to call the function
  // * `max_retries` - number of times to retry
  poll: function(fn, freq, max_retries){
    var retries = 0

    freq = freq || 1000
    check()

    function check(){
      if (SL.isNumber(max_retries) && retries++ >= max_retries) {
        return;
      }

      if (!fn()){
        setTimeout(check, freq)
      }
    }
  },
  // ``Html(str)`
  // --------------------
  //
  // Escapes a string for being used in an HTML context. Returns
  // the escaped version of the string. Replaces the characters
  // `&` `<` `>` `"` `'` and `/`.
  //
  // Parameters:
  //
  // * `str` - the string to be escaped
  escapeForHtml: function(str){
    if (!str) return str
    return String(str)
      .replace(/\&/g, '&amp;')
      .replace(/\</g, '&lt;')
      .replace(/\>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#x27;')
      .replace(/\//g, '&#x2F;')
  }
}

// The available tools to use.
SL.availableTools = {}

// The avaliable event emitters to use.
SL.availableEventEmitters = []

// The names of the events which can only fire once.
SL.fireOnceEvents = ['condition', 'elementexists']

// Initialize all event emitters.
SL.initEventEmitters = function(){
  SL.eventEmitters = SL.map(SL.availableEventEmitters, function(ee){
    return new ee()
  })
}

// Call `registerElements` on all event emitters.
SL.eventEmitterBackgroundTasks = function(){
  SL.each(SL.eventEmitters, function(ee){
    if ('backgroundTasks' in ee)
      ee.backgroundTasks()
  })
}

// Initialize all tools.
SL.initTools = function(toolSpecs){
  var tools = { 'default': new DefaultTool() }
  var euCookieName = SL.settings.euCookieName || 'sat_track'
  for (var id in toolSpecs){
    if(toolSpecs.hasOwnProperty(id)) {
      var toolSpec, ctr, tool
      toolSpec = toolSpecs[id]
      if (toolSpec.euCookie){
        var cookieSet = SL.readCookie(euCookieName) !== 'true'
        if (cookieSet) continue
      }
      ctr = SL.availableTools[toolSpec.engine]
      if (!ctr){
        var available = []
        for (var key in SL.availableTools){
          if (SL.availableTools.hasOwnProperty(key)) {
            available.push(key)  
          }
        }
        throw new Error('No tool engine named ' + toolSpec.engine +
          ', available: ' + available.join(',') + '.')
      }
      tool = new ctr(toolSpec)
      tool.id = id
      tools[id] = tool
    }
  }
  return tools
}

// Pre-process arguments (variable substitutions and lower-casing) before
// feeding them to the tools.
SL.preprocessArguments = function(args, elm, evt, forceLowerCase, escapeHtml){
  if (!args) return args
  return preprocessArray(args, forceLowerCase)
  function forceLowerCaseIfNeeded(value) {
    return forceLowerCase && SL.isString(value) ? value.toLowerCase() : value
  }

  function preprocessObject(obj){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)){
        var value = obj[key]
        if (SL.isObject(value)){
          ret[key] = preprocessObject(value)
        }else if (SL.isArray(value)){
          ret[key] = preprocessArray(value, forceLowerCase)
        }else{
          ret[key] = forceLowerCaseIfNeeded(SL.replace(value, elm, evt, escapeHtml))
        }
      }
    }
    return ret
  }

  function preprocessArray(args, forceLowerCase){
    var ret = []
    for (var i = 0, len = args.length; i < len; i++){
      var value = args[i]
      if (SL.isString(value)){
        value = forceLowerCaseIfNeeded(SL.replace(value, elm, evt))
      }else if (value && value.constructor === Object){
        value = preprocessObject(value)
      }
      ret.push(value)
    }
    return ret
  }

}

// Execute a command.
SL.execute = function(trig, elm, evt, tools){
  if (_satellite.settings.hideActivity) return
  tools = tools || SL.tools

  function doit(toolName){
    var tool = tools[toolName || 'default']
    if (!tool)
      return
    try{
      tool.triggerCommand(trig, elm, evt)
    }catch(e){
      SL.logError(e)
    }
  }
  if (trig.engine){
    var engine = trig.engine
    for (var toolName in tools){
      if (tools.hasOwnProperty(toolName)) {
        var tool = tools[toolName]
        if (tool.settings && tool.settings.engine === engine)
          doit(toolName)
      }
    }
  }else if (trig.tool instanceof Array)
    SL.each(trig.tool, function(toolName){
      doit(toolName)
    })
  else
    doit(trig.tool)
}

// Wrapper object that handles Satellite internal logging.
//
// It saves all messages for future reference (up to `keepLimit`, default 100) and
// outputs to browser's console if `_satellite.settings.notifications` is `true`.
// -----------------------------------------------------
SL.Logger = {
  outputEnabled: false,

  messages: [],
  keepLimit: 100,
  flushed: false,

  // @fixme: remove first 2 items when legacy code is updated
  LEVELS: [null, null, 'log', 'info', 'warn', 'error'],

  // `lvl` should be the index of a level defined in `LEVELS`
  message: function(msg, lvl) {
    var level = this.LEVELS[lvl] || 'log';

    this.messages.push([level, msg]);
    if (this.messages.length > this.keepLimit) {
      this.messages.shift();
    }

    if (this.outputEnabled) {
      this.echo(level, msg)
    }
  },

  getHistory: function() {
    return this.messages;
  },

  clearHistory: function() {
    this.messages = [];
  },

  setOutputState: function(state) {
    if (this.outputEnabled == state) return;

    this.outputEnabled = state;
    if (state) {
      this.flush();
    } else {
      this.flushed = false;
    }
  },

  // Private
  // ----------------------------------------
  echo: function(func, msg) {
    if (!window.console) return;
    window.console[func]("SATELLITE: " + msg);
  },

  flush: function() {
    if (this.flushed) return;

    SL.each(this.messages, function(item) {
      if (item[2] === true) return; // message already flushed
      this.echo(item[0], item[1]);
      item[2] = true;
    }, this);
    this.flushed = true;
  }
};

// `notify(msg, pty)`
// ------------------
//
// Notify the user of things happening in Satellite using `console.log`
//
// - msg - message to print
// - pty - priority
SL.notify = SL.bind(SL.Logger.message, SL.Logger);

// `cleanText(str)`
// ================
//
// "Cleans" the text from an element's innerText. This is used directly by the
// @cleanText special property.
SL.cleanText = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s+/g, ' ')
}

SL.cleanText.legacy = function(str){
  if (str == null) return null
  return SL.trim(str).replace(/\s{2,}/g, ' ')
    .replace(/[^\000-\177]*/g, '')
}

SL.text = function(obj){
  return obj.textContent || obj.innerText
}

// Special Properties for DOM elements. You use special properties using
// the @ prefix. Example:
//
//     this.@text
SL.specialProperties = {
  text: SL.text,
  cleanText: function(obj){
    return SL.cleanText(SL.text(obj))
  }
}

// `getObjectProperty(obj, property)`
// ============================
//
// Get property(potentially nested) from an object.
SL.getObjectProperty = function(obj, property, supportSpecial){
  var propChain = property.split('.')
  var currValue = obj
  var special = SL.specialProperties
  var attrMatch
  for (var i = 0, len = propChain.length; i < len; i++){
    if (currValue == null) return undefined
    var prop = propChain[i]
    if (supportSpecial && prop.charAt(0) === '@'){
      var specialProp = prop.slice(1)
      currValue = special[specialProp](currValue)
      continue
    }
    if (currValue.getAttribute &&
      (attrMatch = prop.match(/^getAttribute\((.+)\)$/))){
      var attr = attrMatch[1]
      currValue = currValue.getAttribute(attr)
      continue
    }
    currValue = currValue[prop]
  }
  return currValue
}

// `getToolsByType(type)`
// ------------------------------------------------
//
// Returns an array containing all the tools whose engine property match
// the provided type.
//
// - `type` - The searched tool type
SL.getToolsByType = function(type){
  if (!type) {
    throw new Error('Tool type is missing')
  }

  var result = []
  for (var t in SL.tools) {
    if (SL.tools.hasOwnProperty(t)) {
      var tool = SL.tools[t]
      if (tool.settings && tool.settings.engine === type) {
        result.push(tool)
      }
    }
  }

  return result
}

// `setVar(name, value)` or `setVar(mapping)`
// ==========================================
//
// Set a customer variable. Can be either called like this
//
//     _satellite.setVar('name', 'value')
//
// Or by passing in a mapping(object literall) which allows setting multiple variables at
// the same time.
//
//     _satellite.setVar({name: 'value', foo: 'bar'})
SL.setVar = function(){
  var customVars = SL.data.customVars
  if(customVars == null) SL.data.customVars = {}, customVars = SL.data.customVars
  if (typeof arguments[0] === 'string'){
    var prop = arguments[0]
    customVars[prop] = arguments[1]
  }else if (arguments[0]){ // assume an object literal
    var mapping = arguments[0]
    for (var key in mapping)
      if (mapping.hasOwnProperty(key))
        customVars[key] = mapping[key]
  }
}

SL.dataElementSafe = function(key, length){
  if (arguments.length > 2){
    // setter
    var value = arguments[2]
    if (length === 'pageview'){
      SL.dataElementSafe.pageviewCache[key] = value
    }else if (length === 'session'){
      SL.setCookie('_sdsat_' + key, value)
    }else if (length === 'visitor') {
      SL.setCookie('_sdsat_' + key, value, 365 * 2)
    }
  }else{
    // getter
    if (length === 'pageview'){
      return SL.dataElementSafe.pageviewCache[key]
    }else if (length === 'session' || length === 'visitor'){
      return SL.readCookie('_sdsat_' + key)
    }
  }
}
SL.dataElementSafe.pageviewCache = {}

SL.realGetDataElement = function(dataDef){
  var ret
  if (dataDef.selector) {
    if (SL.hasSelector) {
      SL.cssQuery(dataDef.selector, function(elms) {
        if (elms.length > 0) {
          var elm = elms[0]
          if (dataDef.property === 'text') {
            ret = elm.innerText || elm.textContent
          }else if (dataDef.property in elm){
            ret = elm[dataDef.property]
          }else if (SL.hasAttr(elm, dataDef.property)){
            ret = elm.getAttribute(dataDef.property)
          }
        }
      })
    }
  }else if (dataDef.queryParam) {
    if (dataDef.ignoreCase){
      ret = SL.getQueryParamCaseInsensitive(dataDef.queryParam)
    }else{
      ret = SL.getQueryParam(dataDef.queryParam)
    }
  }else if (dataDef.cookie) {
    ret = SL.readCookie(dataDef.cookie)
  }else if (dataDef.jsVariable) {
    ret = SL.getObjectProperty(window, dataDef.jsVariable)
  }else if (dataDef.customJS) {
    ret = dataDef.customJS()
  }else if (dataDef.contextHub) {
    ret = dataDef.contextHub()
  }
  if (SL.isString(ret) && dataDef.cleanText){
    ret = SL.cleanText(ret)
  }
  return ret
}

SL.getDataElement = function(variable, suppressDefault, dataDef) {
  dataDef = dataDef || SL.dataElements[variable]
  if (dataDef == null) {
    return SL.settings.undefinedVarsReturnEmpty ? '' : null; 
  }
  var ret = SL.realGetDataElement(dataDef)
  if (ret === undefined && dataDef.storeLength) {
    ret = SL.dataElementSafe(variable, dataDef.storeLength)
  }else if (ret !== undefined && dataDef.storeLength) {
    SL.dataElementSafe(variable, dataDef.storeLength, ret)
  }
  if (!ret && !suppressDefault) {
    ret = dataDef['default'] || ''
  }
  if (SL.isString(ret) && dataDef.forceLowerCase) {
    ret = ret.toLowerCase()
  }
  return ret
}

// getVar(variable, elm, evt)
// ==========================
//
// Return the value of a variable, where the variable
// can be a data element, defined in the "data" section
// of the initial settings, or reference properties on
// an element, event, or target of the event in question,
// a query parameter, or a random number.
//
// - `variable` - the name of the variable to get
// - `[elm]` - the associated element, if any
// - `[evt]` - the associated event, if any
SL.getVar = function(variable, elm, evt){
  var custVars = SL.data.customVars
    , target = evt ? (evt.target || evt.srcElement) : null
    , randMatch
    , value
  var map = {
    uri: SL.URI(),
    protocol: document.location.protocol,
    hostname: document.location.hostname
  }
  if (SL.dataElements && variable in SL.dataElements){
    return SL.getDataElement(variable)
  }
  value = map[variable.toLowerCase()]
  if (value === undefined){
    if (variable.substring(0, 5) === 'this.'){
      variable = variable.slice(5)
      value = SL.getObjectProperty(elm, variable, true)
    }else if(variable.substring(0, 6) === 'event.'){
      variable = variable.slice(6)
      value = SL.getObjectProperty(evt, variable)
    }else if(variable.substring(0, 7) === 'target.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(target, variable)
    }else if(variable.substring(0, 7) === 'window.'){
      variable = variable.slice(7)
      value = SL.getObjectProperty(window, variable)
    }else if (variable.substring(0, 6) === 'param.'){
      variable = variable.slice(6)
      value = SL.getQueryParam(variable)
    }else if(randMatch = variable.match(/^rand([0-9]+)$/)){
      var len = Number(randMatch[1])
        , s = (Math.random() * (Math.pow(10, len) - 1)).toFixed(0)
      value = Array(len - s.length + 1).join('0') + s
    }else{
      value = SL.getObjectProperty(custVars, variable)
    }
  }
  return value
}

SL.getVars = function(variables, elm, evt){
  var ret = {}
  SL.each(variables, function(variable){
    ret[variable] = SL.getVar(variable, elm, evt)
  })
  return ret
}

// `replace(str, [elm], [target])`
// ---------------------
//
// Perform variable subtitutions substitute to a string where subtitions are
// specified in the form `"%foo%"`. Variables are lookup either in `SL.data.customVars`, or
// if the `elm` parameter is passed it, and the variable spec is of the form `"%this.tagName%"`, it
// is subsituted with the properties on `elm`, *i.e. `elm.tagName`.
//
// Parameters:
//
// - `str` - string to apply substitutions to
// - `elm`(optional) - object or element to use for substitutions of the form `%this.property%`
// - `target`(optional) - element to use for subsitution of the form `%target.property%`
// - `escapeHtml` (optional) - whether or not to escape substitutions for embedding in HTML
SL.replace = function(str, elm, evt, escapeHtml) {
  if (typeof str !== 'string') return str
  return str
    .replace(/%(.*?)%/g, function(m, variable){
      var val = SL.getVar(variable, elm, evt)
      if (val == null) {
        return SL.settings.undefinedVarsReturnEmpty ? '' : m; 
      } else {
        if (escapeHtml) {
          return SL.escapeForHtml(val);
        } else {
          return val;
        }
      }
    });
}

SL.escapeHtmlParams = function(fn){
  fn.escapeHtml = true
  return fn
}

// From a object literal of variable, generate a query string.
SL.searchVariables = function(vars, elm, evt){
  if (!vars || vars.length === 0) return ''
  var qsParts = []
  for (var i = 0, len = vars.length; i < len; i++){
    var varr = vars[i]
      , value = SL.getVar(varr, elm, evt)
       qsParts.push(varr + '=' + escape(value))
  }
  return '?' + qsParts.join('&')
}

// Fire all the trigger actions associated with a rule.
SL.fireRule = function(rule, elm, evt){
  var triggers = rule.trigger
  if (!triggers) return
  for (var i = 0, len = triggers.length; i < len; i++){
    var trig = triggers[i]
    SL.execute(trig, elm, evt)
  }
  if (SL.contains(SL.fireOnceEvents, rule.event))
    rule.expired = true
}

// `isLinked(elm)`
// ---------------
//
// Returns whether the element is either an anchor or a descendant of an anchor or contains an anchor.
//
// `elm` - the element to test
SL.isLinked = function(elm){
  for (var cur = elm; cur; cur = cur.parentNode) {
    if (SL.isLinkTag(cur))
      return true
  }
  return false
}

// Fire a page load event. `type` is one of `pagetop`, `pagebottom`, `domready` and
// `windowload`.
SL.firePageLoadEvent = function(type) {
  var location = document.location
  var evt = {type: type, target: location}
  var rules = SL.pageLoadRules
  var handlers = SL.evtHandlers[evt.type];
  for (var i = rules.length; i--;){
    var rule = rules[i]
    if (SL.ruleMatches(rule, evt, location)){
      SL.notify('Rule "' + rule.name + '" fired.', 1)
      SL.fireRule(rule, location, evt)
    }
  }
  for (var id in SL.tools){
    if (SL.tools.hasOwnProperty(id)) {
      var tool = SL.tools[id]
      if (tool.endPLPhase) {
        tool.endPLPhase(type)
      }
    }
  }
  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }
}

// `track(id)`
// -----------
//
// Directly fire a direct call rule by id.
SL.track = function(ruleName) {
  // trim extra spaces that may exist at beginning or end of string
  ruleName = ruleName.replace(/^\s*/,"").replace(/\s*$/,"")
  for (var i = 0; i < SL.directCallRules.length; i++){
    var rule = SL.directCallRules[i]
    if (rule.name === ruleName){
      SL.notify('Direct call Rule "' + ruleName + '" fired.', 1)
      SL.fireRule(rule, location, {type: ruleName})
      return
    }
  }
  SL.notify('Direct call Rule "' + ruleName + '" not found.', 1)
}

// `basePath()`
// ------------
//
// Returns the base path of all Satellite generated assets.
SL.basePath = function(){
  if (SL.data.host)
    return (document.location.protocol === 'https:' ?
    'https://' + SL.data.host.https :
    'http://' + SL.data.host.http) + '/'
  else
    return this.settings.basePath
}

// `setLocation(url)`
// ------------------
//
// Set the current URL
//
// - `url` - the URL to set to
SL.setLocation = function(url){
  window.location = url
}

SL.parseQueryParams = function(str){
  var URIDecode = function (str) {
    var result = str
    try {
      result = decodeURIComponent(str)
    } catch(err) {}

    return result
  }

  if (str === '' || SL.isString(str) === false) return {}
  if (str.indexOf('?') === 0) {
    str = str.substring(1)
  }
  var ret = {}
    , pairs = str.split('&')
  SL.each(pairs, function(pair){
    pair = pair.split('=')
    if (!pair[1]) {
      return
    }
    ret[URIDecode(pair[0])] = URIDecode(pair[1])
  })
  return ret
}

SL.getCaseSensitivityQueryParamsMap = function (str) {
  var normal = SL.parseQueryParams(str)
  var insensitive = {}

  for (var prop in normal)
    if (normal.hasOwnProperty(prop))
      insensitive[prop.toLowerCase()] = normal[prop]

  return {
    normal: normal,
    caseInsensitive: insensitive
  }
}

SL.updateQueryParams = function(){
  SL.QueryParams = SL.getCaseSensitivityQueryParamsMap(window.location.search)
}
SL.updateQueryParams()

SL.getQueryParam = function(key){
  return SL.QueryParams.normal[key]
}

SL.getQueryParamCaseInsensitive = function(key){
  return SL.QueryParams.caseInsensitive[key.toLowerCase()]
}

SL.encodeObjectToURI = function(obj) {
  if (SL.isObject(obj) === false) {
    return ''
  }

  var uri = []
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      uri.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]))
    }
  }

  return uri.join('&')
}

SL.readCookie = function(name) {
  var nameEQ = name + "="
  var parts = document.cookie.split(';')
  for(var i=0;i < parts.length;i++) {
    var c = parts[i]
    while (c.charAt(0)==' '){
      c = c.substring(1,c.length)
    }
    if (c.indexOf(nameEQ) === 0){
      return c.substring(nameEQ.length,c.length)
    }
  }
  return undefined
}

SL.setCookie = function(name,value,days) {
  var expires
  if (days) {
    var date = new Date()
    date.setTime(date.getTime()+(days*24*60*60*1000))
    expires = "; expires="+date.toGMTString()
  }
  else{
    expires = ""
  }
  document.cookie = name+"="+value+expires+"; path=/"
}

SL.removeCookie = function(name) {
  SL.setCookie(name,"",-1);
}


SL.getElementProperty = function(elm, prop){
  if (prop.charAt(0) === '@'){
    var special = SL.specialProperties[prop.substring(1)]
    if (special){
      return special(elm)
    }
  }
  if (prop === 'innerText'){
    return SL.text(elm)
  }
  if (prop in elm)
    return elm[prop]
  return elm.getAttribute ? elm.getAttribute(prop) : undefined
}

SL.propertiesMatch = function(property, elm){
  if (property){
    for (var prop in property){
      if (property.hasOwnProperty(prop)) {
        var target = property[prop]
        var value = SL.getElementProperty(elm, prop)
        if (typeof target === 'string' && target !== value) return false
        if (target instanceof RegExp && !target.test(value)) return false
      }
    }
  }
  return true
}

// from http://www.quirksmode.org/js/events_properties.html
SL.isRightClick = function(e){
  var ret
  if (e.which){
    ret = e.which == 3
  }else if (e.button){
    ret = e.button == 2
  }
  return ret
}

// `ruleMatches(rule, evt, elm, eventEntriesFound)`
// ------------------------------------------------
//
// - `rule` - the rules to match
// - `evt` - the event triggered
// - `elm` - the element the event was on
// - `eventEntriesFound` - number of rules matched so far
SL.ruleMatches = function(rule, evt, elm, eventEntriesFound){
  var cnd = rule.condition
  var cnds = rule.conditions
  var property = rule.property
  var eventType = evt.type
  var matchValue = rule.value
  var target = evt.target || evt.srcElement
  var initialTarget = elm === target

  if (rule.event !== eventType && (rule.event !== 'custom' || rule.customEvent !== eventType)) return false
  if (!SL.ruleInScope(rule)) return false
  // ignore all right-clicks
  if (rule.event === 'click' && SL.isRightClick(evt)){
    return false
  }
  if (rule.isDefault && eventEntriesFound > 0)
    return false
  if (rule.expired) return false
  if (eventType === 'inview' && evt.inviewDelay !== rule.inviewDelay){
    return false
  }
  if (!(initialTarget ||
          ((rule.bubbleFireIfParent !== false) && (eventEntriesFound === 0 || (rule.bubbleFireIfChildFired !== false))))) return false

  if (rule.selector && !SL.matchesCss(rule.selector, elm)) return false
  if (!SL.propertiesMatch(property, elm)) return false
  if (matchValue != null){
    if (typeof matchValue === 'string'){
      if (matchValue !== elm.value)
        return false
    }else if (!matchValue.test(elm.value))
      return false
  }
  if (cnd){
    try{
      if (!cnd.call(elm, evt, target)){
        SL.notify('Condition for rule "' + rule.name + '" not met.', 1)
        return false
      }
    }catch(e){
      SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
      return false
    }
  }
  if (cnds){
    var failed = SL.find(cnds, function(cnd){
      try{
        return !cnd.call(elm, evt, target)
      }catch(e){
        SL.notify('Condition for rule "' + rule.name + '" not met. Error: ' + e.message, 1)
        return true
      }
    })
    if (failed){
      SL.notify('Condition ' + failed.toString() + ' for rule "' + rule.name + '" not met.', 1)
      return false
    }
  }
  return true
}


SL.evtHandlers = {}
// `bindEvent(evtName, callback)`
// ------------------------------
//
// Register for an event by name. Alias: `whenEvent`.
//
// `evtName` - the name of the event
// `callback` - the function to be called when even fires
SL.bindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName])
    handlers[evtName] = []
  handlers[evtName].push(callback)
}
SL.whenEvent = SL.bindEvent

// `unbindEvent(evtName, callback)
// -------------------------------
//
// Unregister for an event by name.
//
// `evtName` - the name of the event
// `callback` - the function to unregister
SL.unbindEvent = function(evtName, callback){
  var handlers = SL.evtHandlers
  if (!handlers[evtName]) return
  var idx = SL.indexOf(handlers[evtName], callback)
  handlers[evtName].splice(idx, 1)
}

SL.bindEventOnce = function(evtName, callback){
  var wrapped = function(){
    SL.unbindEvent(evtName, wrapped)
    callback.apply(null, arguments)
  }
  SL.bindEvent(evtName, wrapped)
}

// See <http://tobyho.com/2014/02/26/attribute-only-valid-on-v-image/>
SL.isVMLPoisoned = function(elm){
  if (!elm) return false
  try{
    elm.nodeName
  }catch(e){
    if (e.message === 'Attribute only valid on v:image'){
      return true
    }
  }
  return false
}

SL.handleEvent = function(evt) {
  // Don't process an event twice.
  if (SL.$data(evt, 'eventProcessed')) return

  var eventType = evt.type.toLowerCase()
    , target = evt.target || evt.srcElement
    , rulesMatched = 0
    , rules = SL.rules
    , tools = SL.tools
    , handlers = SL.evtHandlers[evt.type]

  if (SL.isVMLPoisoned(target)){
    SL.notify('detected ' + eventType + ' on poisoned VML element, skipping.', 1)
    return
  }

  if (handlers){
    SL.each(handlers, function(cb){
      cb(evt)
    })
  }

  var nodeName = target && target.nodeName;
  if (nodeName)
    SL.notify("detected " + eventType + " on " + target.nodeName, 1)
  else
    SL.notify("detected " + eventType, 1)

  for (var curr = target; curr; curr = curr.parentNode) {
    var bubbleStop = false
    SL.each(rules, function(rule){
      if (SL.ruleMatches(rule, evt, curr, rulesMatched)){
        SL.notify('Rule "' + rule.name + '" fired.', 1)
        SL.fireRule(rule, curr, evt)
        rulesMatched++
        if (rule.bubbleStop)
          bubbleStop = true
      }
    })
    if (bubbleStop) break
  }


  SL.$data(evt, 'eventProcessed', true)
}

// `onEvent(evt)`
// ------------
//
// Handle an event, whether it is a DOM event or a synthetic event.
//
// - `evt` - the event triggered
SL.onEvent = document.querySelectorAll ?
function(evt){ SL.handleEvent(evt) } :
(function(){
  var q = []
  var onEvent = function(evt) {
    if (evt.selector)
      q.push(evt)
    else
      SL.handleEvent(evt)
  }
  onEvent.pendingEvents = q
  return onEvent
})()

// `fireEvent(eventType, eventTarget)`
// ------------
//
// Conviniently programmatically fire an event.
//
// - `eventType` - the type of event
// - `eventTarget` - the target object that fired the event
SL.fireEvent = function(type, target){
  SL.onEvent({type: type, target: target})
}

// `registerEvents(elm, events)`
// -----------------------------
//
// Register events for an element using `track` as the callback
//
// - `elm` - the element to listen for events on
// - `events` - an array of event types (strings)
SL.registerEvents = function(elm, events){
  for (var i = events.length - 1; i >= 0; i--){
    var event = events[i]
    if (!SL.$data(elm, event + '.tracked')){
      SL.addEventHandler(elm, event, SL.onEvent)
      SL.$data(elm, event + '.tracked', true)
    }
  }
}

// `registerEventsForTags(tags, events)`
// -------------------------------------
//
// Register events for all element that have the specified tags
//
// - `tags` - an array of tags to match for (strings)
// - `events` - an array of event types (strings)
SL.registerEventsForTags = function(tags, events){
  for (var i = tags.length - 1; i >= 0; i--){
    var tag = tags[i]
    var elms = document.getElementsByTagName(tag);
    for (var j = elms.length - 1; j >= 0; j--)
      SL.registerEvents(elms[j], events)
  }
}

// `setListeners()`
// ----------------
//
// Set events for `document`
SL.setListeners = function() {
  var events = ['click', 'submit'];

  SL.each(SL.rules, function(rule) {
    if (rule.event === 'custom' &&
        rule.hasOwnProperty('customEvent') &&
        !SL.contains(events, rule.customEvent)) {
      events.push(rule.customEvent);
    }
  });

  SL.registerEvents(document, events);
};

// `getUniqueRuleEvents()`
// -----------------------
//
// Returns an array of unique event types for which event-based rules
// have been configured.
SL.getUniqueRuleEvents = function() {
  if (!SL._uniqueRuleEvents) {
    SL._uniqueRuleEvents = [];
    SL.each(SL.rules, function(rule) {
      if (SL.indexOf(SL._uniqueRuleEvents, rule.event) === -1) {
        SL._uniqueRuleEvents.push(rule.event);
      }
    });
  }

  return SL._uniqueRuleEvents;
};

// `setFormListeners()`
// --------------------
//
// Listen for events on form elements. Listeners for these events are added directly to form
// elements since they don't bubble (though some do in modern browsers).
SL.setFormListeners = function() {
  if (!SL._relevantFormEvents) {
    var formEvents = [
      "change",
      "focus",
      "blur",
      // Why do we add event listeners directly to form elements for the keypress event? The
      // keypress event bubbles so we could add it directly to document. Note that keypress
      // events can be triggered when any element has focus which means that by adding the event
      // listener directly to form elements we're filtering any keypress events from other elements.
      // Is this the intention? If so, we could still add a single listener directly to document
      // and filter on event.target.nodeName.
      "keypress"
    ];

    SL._relevantFormEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(formEvents, event) !== -1;
    });
  }

  if (SL._relevantFormEvents.length) {
    SL.registerEventsForTags(['input', 'select', 'textarea', 'button'], SL._relevantFormEvents);
  }
};

// `setVideoListeners()`
// ---------------------
//
// Listen for events on video elements. Listeners for these events are added directly to form
// elements since they don't bubble.
SL.setVideoListeners = function() {
  if (!SL._relevantVideoEvents) {
    var videoEvents = [
      "play",
      "pause",
      "ended",
      "volumechange",
      "stalled",
      "loadeddata"
    ];

    SL._relevantVideoEvents = SL.filter(SL.getUniqueRuleEvents(), function(event) {
      return SL.indexOf(videoEvents, event) !== -1;
    });
  }

  if (SL._relevantVideoEvents.length) {
    SL.registerEventsForTags(['video'], SL._relevantVideoEvents);
  }
};

// `readStoredSetting(name)`
// ==================
//
// Reads the cookie of the given name.
// Stolen from <http://www.quirksmode.org/js/cookies.html>
SL.readStoredSetting = function(name) {
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try{
    name = 'sdsat_' + name
    return window.localStorage.getItem(name)
  }catch(e){
    SL.notify('Cannot read stored setting from localStorage: ' + e.message, 2)
    return null
  }
}

// Read satelliteUtilsCookie values to see about getting bookmarklet running / settings
SL.loadStoredSettings = function () {
  var debug = SL.readStoredSetting('debug')
    , hideActivity = SL.readStoredSetting('hide_activity')
  if (debug)
    SL.settings.notifications = debug === 'true'
  if (hideActivity)
    SL.settings.hideActivity = hideActivity === 'true'
}

SL.isRuleActive = function(rule, date){
  var schd = rule.schedule
  if (!schd) return true

  var utc = schd.utc
    , getDate = utc ? 'getUTCDate' : 'getDate'
    , getDay = utc ? 'getUTCDay' : 'getDay'
    , getFullYear = utc ? 'getUTCFullYear' : 'getFullYear'
    , getMonth = utc ? 'getUTCMonth' : 'getMonth'
    , getHours = utc ? 'getUTCHours' : 'getHours'
    , getMinutes = utc ? 'getUTCMinutes' : 'getMinutes'
    , setHours = utc ? 'setUTCHours' : 'setHours'
    , setMinutes = utc ? 'setUTCMinutes' : 'setMinutes'
    , setDate = utc ? 'setUTCDate' : 'setDate'

  date = date || new Date()

  function dayDiff(one, other){
    other = modifyDate(other, {
      hour: one[getHours](),
      minute: one[getMinutes]()
    })
    return Math.floor(Math.abs((one.getTime() - other.getTime()) / (1000 * 60 * 60 * 24)))
  }
  function monthDiff(one, other){
    function months(date){
      return date[getFullYear]() * 12 + date[getMonth]()
    }
    return Math.abs(months(one) - months(other))
  }
  function modifyDate(date, fields){
    var retval = new Date(date.getTime())
    for (var field in fields){
      if (fields.hasOwnProperty(field)) {
        var val = fields[field]
        switch(field){
          case 'hour':
            retval[setHours](val)
            break
          case 'minute':
            retval[setMinutes](val)
            break
          case 'date':
            retval[setDate](val)
            break
        }
      }
    }
    return retval
  }
  function timeGreaterThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) > (h2 * 60 + m2)
  }
  function timeLessThan(one, other){
    var h1 = one[getHours]()
      , m1 = one[getMinutes]()
      , h2 = other[getHours]()
      , m2 = other[getMinutes]()
    return (h1 * 60 + m1) < (h2 * 60 + m2)
  }


  if (schd.repeat){
    if (timeGreaterThan(schd.start, date)) return false
    if (timeLessThan(schd.end, date)) return false
    if (date < schd.start) return false
    if (schd.endRepeat && date >= schd.endRepeat) return false
    if (schd.repeat === 'daily'){
      if (schd.repeatEvery){
        var dd = dayDiff(schd.start, date)
        if (dd % schd.repeatEvery !== 0) return false
      }
    }else if (schd.repeat === 'weekly'){
      if (schd.days){
        if (!SL.contains(schd.days, date[getDay]())) return false
      }else
        if (schd.start[getDay]() !== date[getDay]()) return false
      if (schd.repeatEvery){
        var diff = dayDiff(schd.start, date)
        if (diff % (7 * schd.repeatEvery) !== 0)
          return false
      }
    }else if (schd.repeat === 'monthly'){
      if (schd.repeatEvery){
        var md = monthDiff(schd.start, date)
        if (md % schd.repeatEvery !== 0) return false
      }
      if (schd.nthWeek && schd.mthDay){
        if (schd.mthDay !== date[getDay]()) return false
        var nthWeek = Math.floor((date[getDate]() - date[getDay]() + 1) / 7)
        if (schd.nthWeek !== nthWeek) return false
      }else
        if (schd.start[getDate]() !== date[getDate]()) return false
    }else if (schd.repeat === 'yearly'){
      if (schd.start[getMonth]() !== date[getMonth]()) return false
      if (schd.start[getDate]() !== date[getDate]()) return false
      if (schd.repeatEvery){
        var diff = Math.abs(schd.start[getFullYear]() - date[getFullYear]())
        if (diff % schd.repeatEvery !== 0) return false
      }
    }
  }else{
    if (schd.start > date) return false
    if (schd.end < date) return false
  }
  return true
}

SL.isOutboundLink = function(elm){
  if (!elm.getAttribute('href')) return false
  var hostname = elm.hostname
  var href = elm.href
  var protocol = elm.protocol
  if (protocol !== 'http:' && protocol !== 'https:') return false
  var isMyDomain = SL.any(SL.settings.domainList, function(domain){
    return SL.isSubdomainOf(hostname, domain)
  })
  if (isMyDomain) return false
  return hostname !== location.hostname
}

SL.isLinkerLink = function(elm){
  if (!elm.getAttribute || !elm.getAttribute('href')) return false
  return SL.hasMultipleDomains() &&
    elm.hostname != location.hostname &&
    !elm.href.match(/^javascript/i) &&
    !SL.isOutboundLink(elm)
}

SL.isSubdomainOf = function(sub, root){
  if (sub === root) return true
  var idx = sub.length - root.length
  if (idx > 0)
    return SL.equalsIgnoreCase(sub.substring(idx), root)
  return false
}

// `getVisitorId()`
// ------------------------------------------------
//
// Returns the library instance associated to a VisitorId tool if the tool exists
//
SL.getVisitorId = function(){
  var visitorIdTools = SL.getToolsByType('visitor_id')
  if (visitorIdTools.length === 0) {
    return null;
  }

  return visitorIdTools[0].getInstance()
}

SL.URI = function(){
  var ret = document.location.pathname + document.location.search
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

SL.URL = function(){
  var ret = document.location.href
  if (SL.settings.forceLowerCase){
    ret = ret.toLowerCase()
  }
  return ret
}

// Filter `SL.rules` down to only the once relevant for the current page.
SL.filterRules = function(){
  function matches(rule){
    if (!SL.isRuleActive(rule)) return false
    return true
  }

  SL.rules = SL.filter(SL.rules, matches)
  SL.pageLoadRules = SL.filter(SL.pageLoadRules, matches)

}

SL.ruleInScope = function(rule, location){
  location = location || document.location
  var scope = rule.scope
  if (!scope) return true
  var URI = scope.URI
  var subdomains = scope.subdomains
  var domains = scope.domains
  var protocols = scope.protocols
  var hashes = scope.hashes

  if (URI && includeExcludeFails(URI, location.pathname + location.search)) return false
  if (subdomains && includeExcludeFails(subdomains, location.hostname)) return false
  if (domains && matchFails(domains, location.hostname)) return false
  if (protocols && matchFails(protocols, location.protocol)) return false
  if (hashes && includeExcludeFails(hashes, location.hash)) return false

  function includeExcludeFails(matcher, matchee){
    var include = matcher.include
    var exclude = matcher.exclude
    if (include && matchFails(include, matchee)) return true
    if (exclude){
      if (SL.isString(exclude) && exclude === matchee)
        return true
      if (SL.isArray(exclude) && SL.any(exclude, matches))
        return true
      if (SL.isRegex(exclude) && matches(exclude))
        return true
    }

    return false

    function matches(regex){
      return matchee.match(regex)
    }
  }

  function matchFails(matcher, matchee){
    if (SL.isString(matcher) && matcher !== matchee)
      return true
    if (SL.isArray(matcher) && !SL.any(matcher, matches))
      return true
    if (SL.isRegex(matcher) && !matches(matcher))
      return true
    return false

    function matches(regex){
      return matchee.match(regex)
    }

  }

  return true
}


// Run background tasks once. This will get invoked periodically.
SL.backgroundTasks = function(){
  var start = +new Date()
  SL.setFormListeners()
  SL.setVideoListeners()
  SL.loadStoredSettings()
  SL.registerNewElementsForDynamicRules()
  SL.eventEmitterBackgroundTasks()

  // Trigger condition events
  //SL.onEvent({type: 'condition', target: 'document'})
  var end = +new Date()
  // We want to keep an eye on the execution time here.
  // If it gets to around 50ms for any customer site,
  // we want to either optimize or start using a task queue
  //SL.notify('Background tasks executed in ' + (end - start) + 'ms', 3)
}



// For rules that poll for dynamically injected elements on the page,
// find them and register events for them.
SL.registerNewElementsForDynamicRules = function(){
  function cssQuery(selector, callback){
    var hit = cssQuery.cache[selector]
    if (hit){
      return callback(hit)
    }else{
      SL.cssQuery(selector, function(elms){
        cssQuery.cache[selector] = elms
        callback(elms)
      })
    }
  }
  cssQuery.cache = {}


  SL.each(SL.dynamicRules, function(rule){
    cssQuery(rule.selector, function(elms){
      SL.each(elms, function(elm){
        var event = rule.event === 'custom' ? rule.customEvent : rule.event;
        if (SL.$data(elm, 'dynamicRules.seen.' + event)) return
        SL.$data(elm, 'dynamicRules.seen.' + event, true)
        if (SL.propertiesMatch(rule.property, elm)){
          SL.registerEvents(elm, [event])
        }
      })
    })
  })
}

// If the browser doesn't support CSS selector queries, we have to include one.
SL.ensureCSSSelector = function(){
  if (document.querySelectorAll){
    SL.hasSelector = true
    return
  }
  SL.loadingSizzle = true
  SL.sizzleQueue = []
  SL.loadScript(SL.basePath() + 'selector.js', function(){
    if (!SL.Sizzle){
      SL.logError(new Error('Failed to load selector.js'))
      return
    }
    var pending = SL.onEvent.pendingEvents
    SL.each(pending, function(evt){
      SL.handleEvent(evt)
    }, this)
    SL.onEvent = SL.handleEvent
    SL.hasSelector = true
    ;delete SL.loadingSizzle
    SL.each(SL.sizzleQueue, function(item){
      SL.cssQuery(item[0], item[1])
    })
    ;delete SL.sizzleQueue

  })
}

// Error Handling

SL.errors = []
SL.logError = function(err){
  SL.errors.push(err)
  SL.notify(err.name + ' - ' + err.message, 5)
}

// `pageBottom()`
// --------------
//
// The function is to be called by the web page using an script tag like so:
//
//     <script>_satellite.pageBottom()</script>
//
// just before the `</body>` tag.
SL.pageBottom = function(){
  if (!SL.initialized) return
  SL.pageBottomFired = true
  SL.firePageLoadEvent('pagebottom')
}

// This allows Rover to configure the browser to use the staging library instead.
SL.stagingLibraryOverride = function(){
  /*jshint evil:true */
  var libraryOverride = SL.readStoredSetting('stagingLibrary') === 'true'
  if (libraryOverride){ // allow Rover to override the library to staging
    var scripts = document.getElementsByTagName('script')
      , regex = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/
      , regexStaging = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/
      , match
      , matchStaging
      , src
    for (var i = 0, len = scripts.length; i < len; i++){
      src = scripts[i].getAttribute('src')
      if (!src) continue
      if (!match) match = src.match(regex)
      if (!matchStaging) matchStaging = src.match(regexStaging)
      if (matchStaging) break
    }
    if (match && !matchStaging){
      var stagingURL = match[1] + 'satelliteLib-' + match[2] + '-staging.js'
      if (document.write) {
        document.write('<script src="' + stagingURL + '"></script>')
      } else {
        var s = document.createElement('script')
        s.src = stagingURL
        document.head.appendChild(s)
      }
      return true
    }
  }
  return false
}

SL.checkAsyncInclude = function(){
  if (window.satellite_asyncLoad)
    SL.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5)
}

SL.hasMultipleDomains = function(){
  return !!SL.settings.domainList && SL.settings.domainList.length > 1
}

SL.handleOverrides = function(){
  if (Overrides){
    for (var key in Overrides){
      if (Overrides.hasOwnProperty(key)){
        SL.data[key] = Overrides[key]
      }
    }
  }
}

SL.privacyManagerParams = function(){
  var params = {}
  SL.extend(params, SL.settings.privacyManagement)
  var analyticsTools = []
  for (var key in SL.tools){
    if (SL.tools.hasOwnProperty(key)) {
      var tool = SL.tools[key]
      var settings = tool.settings
      if (!settings) continue
      if (settings.engine === 'sc'){
        analyticsTools.push(tool)
      }
    }
  }
  var analyticsTrackingServers = SL.filter(SL.map(analyticsTools, function(tool){
    return tool.getTrackingServer()
  }), function(s){ return s != null })
  params.adobeAnalyticsTrackingServers = analyticsTrackingServers
  var substitutable = [
    'bannerText',
    'headline',
    'introductoryText',
    'customCSS'
  ]
  for (var i = 0; i < substitutable.length; i++){
    var prop = substitutable[i]
    var spec = params[prop]
    if (!spec) continue
    if (spec.type === 'text'){
      params[prop] = spec.value
    }else if (spec.type === 'data'){
      params[prop] = SL.getVar(spec.value)
    }else{
      throw new Error('Invalid type: ' + spec.type)
    }
  }
  return params
}

SL.prepareLoadPrivacyManager = function(){
  SL.addEventHandler(window, 'load', function(){
    loadWhenAllSCToolsLoaded(SL.loadPrivacyManager)
  })

  function loadWhenAllSCToolsLoaded(callback){
    var scTools = SL.filter(SL.values(SL.tools), function(tool){
      return tool.settings && tool.settings.engine === 'sc'
    })
    if (scTools.length === 0){
      return callback()
    }
    var numLoaded = 0
    SL.each(scTools, function(tool){
      SL.bindEvent(tool.id + '.load', onLoad)
    })
    var tid = setTimeout(onTimeout, 5000)

    function onLoad(){
      numLoaded++
      if (numLoaded === scTools.length){
        cleanUp()
        clearTimeout(tid)
        callback()
      }
    }

    function cleanUp(){
      SL.each(scTools, function(tool){
        SL.unbindEvent(tool.id + '.load', onLoad)
      })
    }

    function onTimeout(){
      cleanUp()
      callback()
    }
  }

}

// `loadPrivacyManager()`
// ----------------------
//
// Initialize privacy manager
SL.loadPrivacyManager = function(){
  var scriptUrl = SL.basePath() + 'privacy_manager.js'
  SL.loadScript(scriptUrl, function(){
    var pm = SL.privacyManager
    pm.configure(SL.privacyManagerParams())
    pm.openIfRequired()
  })
}

// `init()`
// --------
//
// Initialize Satellite.
//
// - `settings` - all the settings that comprising a library.
SL.init = function(settings) {
  if (SL.stagingLibraryOverride())
    return

  SL.configurationSettings = settings
  var tools = settings.tools
  ;delete settings.tools
  for (var key in settings){
    if (settings.hasOwnProperty(key)){
      SL[key] = settings[key]
    }
  }

  if(SL.data.customVars === undefined)
    SL.data.customVars = {}

  SL.data.queryParams = SL.QueryParams.normal

  SL.handleOverrides()

  SL.detectBrowserInfo()

  if (SL.trackVisitorInfo)
    SL.trackVisitorInfo()

  SL.loadStoredSettings()
  SL.Logger.setOutputState(SL.settings.notifications)

  SL.checkAsyncInclude()

  SL.ensureCSSSelector()

  SL.filterRules()
  SL.dynamicRules = SL.filter(SL.rules, function(rule){
    return rule.eventHandlerOnElement
  })

  SL.tools = SL.initTools(tools)
  SL.initEventEmitters()

  SL.firePageLoadEvent('aftertoolinit')

  if (SL.settings.privacyManagement){
    SL.prepareLoadPrivacyManager()
  }

  if (SL.hasSelector)
    SL.domReady(SL.eventEmitterBackgroundTasks)

  SL.setListeners()

  // Setup background tasks
  SL.domReady(function() {
    SL.poll(
      function() { SL.backgroundTasks() },
      SL.settings.recheckEvery || 3000
    )
  })

  // Setup page load events
  SL.domReady(function(){
    SL.domReadyFired = true
    if (!SL.pageBottomFired)
      SL.pageBottom()

    SL.firePageLoadEvent('domready')
  })

  SL.addEventHandler(window, 'load', function(){
    SL.firePageLoadEvent('windowload')
  })

  SL.firePageLoadEvent('pagetop')
  SL.initialized = true
}

SL.pageLoadPhases = ['aftertoolinit', 'pagetop', 'pagebottom', 'domready', 'windowload']

SL.loadEventBefore = function(one, other){
  return SL.indexOf(SL.pageLoadPhases, one) <= SL.indexOf(SL.pageLoadPhases, other)
}

SL.flushPendingCalls = function(tool){
  if (tool.pending){
    SL.each(tool.pending, function(call){
      var cmd = call[0]
        , elm = call[1]
        , evt = call[2]
        , args = call[3]
      if (cmd in tool)
        tool[cmd].apply(tool, [elm, evt].concat(args))
      else if (tool.emit)
        tool.emit(cmd, elm, evt, args)
      else
        SL.notify('Failed to trigger ' + cmd +
          ' for tool ' + tool.id, 1)
    })
    ;delete tool.pending
  }
}

// setDebug(debug)
// --------------
//
// Activate or deactivate debug mode - within which
// log statements will be printed to the JS console.
//
// - `debug` - a boolean indicating whether debug mode
//   should be turned on.
SL.setDebug = function(debug){
  // When local storage is disabled on Safari, the mere act of referencing window.localStorage
  // throws an error. For this reason, referencing window.localStorage without being inside
  // a try-catch should be avoided.
  try {
    window.localStorage.setItem('sdsat_debug', debug)
  } catch (e) {
    SL.notify('Cannot set debug mode: ' + e.message, 2)
  };
}

SL.getUserAgent = function() {
  return navigator.userAgent;
};

SL.detectBrowserInfo = function(){
  // Based on <http://jsbin.com/inubez/3/>
  function matcher(regexs){
    return function(userAgent){
      for (var key in regexs){
        if (regexs.hasOwnProperty(key)) {          
          var regex = regexs[key];
          var match = regex.test(userAgent);
          if (match) return key;
        }
      }
      return "Unknown";
    };
  }

  // The order in which these regular expressions are evaluated is important.

  var getBrowser = matcher({
    "IE Edge Mobile": /Windows Phone.*Edge/,
    "IE Edge": /Edge/,
    OmniWeb: /OmniWeb/,
    "Opera Mini": /Opera Mini/,
    "Opera Mobile": /Opera Mobi/,
    Opera: /Opera/,
    Chrome: /Chrome|CriOS|CrMo/,
    Firefox: /Firefox|FxiOS/,
    "IE Mobile": /IEMobile/,
    IE: /MSIE|Trident/,
    "Mobile Safari": /Mobile(\/[0-9A-z]+)? Safari/,
    Safari: /Safari/
  });

  var getOS = matcher({
    Blackberry: /BlackBerry|BB10/,
    "Symbian OS": /Symbian|SymbOS/,
    Maemo: /Maemo/,
    Android: /Android/,
    Linux: / Linux /,
    Unix: /FreeBSD|OpenBSD|CrOS/,
    Windows: /[\( ]Windows /,
    iOS: /iPhone|iPad|iPod/,
    MacOS: /Macintosh;/
  });

  var getDeviceType = matcher({
    // This is not entirely accurate. A few old Samsung, Motorola, and Sony Ericsson phones
    // will match but the majority and best guess is Nokia. Also, Nokia makes Windows phones and
    // for those we will make it match Windows Phone and not Nokia.
    Nokia: /Symbian|SymbOS|Maemo/,
    "Windows Phone": /Windows Phone/,
    Blackberry: /BlackBerry|BB10/,
    Android: /Android/,
    iPad: /iPad/,
    iPod: /iPod/,
    iPhone: /iPhone/,
    Desktop: /.*/
  });

  var userAgent = SL.getUserAgent();
  SL.browserInfo = {
    browser: getBrowser(userAgent)
    , os: getOS(userAgent)
    , deviceType: getDeviceType(userAgent)
  }
}

SL.isHttps = function(){
  return 'https:' == document.location.protocol
}

SL.BaseTool = function(settings){
  this.settings = settings || {}

  this.forceLowerCase = SL.settings.forceLowerCase
  if ('forceLowerCase' in this.settings){
    this.forceLowerCase = this.settings.forceLowerCase
  }
}
SL.BaseTool.prototype = {
  triggerCommand: function(trig, elm, evt){
    var settings = this.settings || {}

    if (this.initialize && this.isQueueAvailable()){
      if (this.isQueueable(trig) && evt && SL.loadEventBefore(evt.type, settings.loadOn)){
        this.queueCommand(trig, elm, evt)
        return
      }
    }

    var cmd = trig.command
    var method = this['$' + cmd]
    var escapeHtml = method ? method.escapeHtml : false
    var args = SL.preprocessArguments(
      trig['arguments'],
      elm,
      evt,
      this.forceLowerCase,
      escapeHtml)

    if (method){
      method.apply(this, [elm, evt].concat(args))
    }else if (this.$missing$){
      this.$missing$(cmd, elm, evt, args)
    }else
      SL.notify('Failed to trigger ' + cmd +
        ' for tool ' + this.id, 1)

  },
  endPLPhase: function(pageLoadEvent){
    // override to handle end initialization
  },
  isQueueable: function(trig){
    // everything is queueable except `cancelToolInit`
    return trig.command !== 'cancelToolInit'
  },
  isQueueAvailable: function(){
    return !this.initialized && !this.initializing
  },
  flushQueue: function(){
    if (this.pending){
      SL.each(this.pending, function(args){
        this.triggerCommand.apply(this, args)
      }, this)
      this.pending = []
    }
  },
  queueCommand: function(trig, elm, evt){
    if (!this.pending)
      this.pending = []
    this.pending.push([trig, elm, evt])
  },
  $cancelToolInit: function(){
    this._cancelToolInit = true
  }
}

// Set Satellite to the global variable `_satellite`.
window._satellite = SL

function DataElementChangeEmitter() {
  var rules = SL.filter(SL.rules, function(rule) {
    return rule.event.indexOf('dataelementchange') === 0;
  });

  this.dataElementsNames = SL.map(rules, function(rule) {
    var matchedSubstrings = rule.event.match(/dataelementchange\((.*)\)/i);
    return matchedSubstrings[1];
  }, this);

  this.initPolling();
}

// SL.stringify is not 100% compatible with JSON.stringify (for example JSON.stringify breaks
// whenever it encounters a cyclic reference). Since this check might become intensive,
// only for this case we would prefer using JSON.stringify whenever that's available.
DataElementChangeEmitter.prototype.getStringifiedValue =
    (window.JSON && window.JSON.stringify) || SL.stringify;

DataElementChangeEmitter.prototype.initPolling = function() {
  if (this.dataElementsNames.length === 0) {
    return;
  }

  this.dataElementsStore = this.getDataElementsValues();
  SL.poll(SL.bind(this.checkDataElementValues, this), 1000);
};

DataElementChangeEmitter.prototype.getDataElementsValues = function() {
  var values = {};
  SL.each(this.dataElementsNames, function(dataElementName) {
    var value = SL.getVar(dataElementName);
    values[dataElementName] = this.getStringifiedValue(value);
  }, this);

  return values;
};

DataElementChangeEmitter.prototype.checkDataElementValues = function() {
  SL.each(this.dataElementsNames, SL.bind(function(dataElementName) {
    var currentStringifiedValue = this.getStringifiedValue(SL.getVar(dataElementName));
    var previousStringifiedValue =  this.dataElementsStore[dataElementName];

    if (currentStringifiedValue !== previousStringifiedValue) {
      this.dataElementsStore[dataElementName] = currentStringifiedValue;

      SL.onEvent({
        type: 'dataelementchange(' + dataElementName + ')',
        target: document
      });
    }
  }, this));
};

SL.availableEventEmitters.push(DataElementChangeEmitter);

// Orientation Change Event Emitter
// ================================
//
// The `orientationchange` event on mobile devices fire when the devices switchs between
// portrait and landscape modes. You can use `%event.orientation%` in your command arguments
// to evaluate to either `portrait` or `landscape`.
function OrientationChangeEventEmitter(){
  SL.addEventHandler(window, "orientationchange", OrientationChangeEventEmitter.orientationChange)
}
OrientationChangeEventEmitter.orientationChange = function (e) {
  var orientation = window.orientation === 0 ? 
    'portrait' : 
    'landscape'
  e.orientation = orientation
  SL.onEvent(e)
}
SL.availableEventEmitters.push(OrientationChangeEventEmitter)

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

function VisibilityEventEmitter() {
  this.defineEvents();
  this.visibilityApiHasPriority = true;
  if (!document.addEventListener) { // Older browers (e.g.: IE8)
    this.attachDetachOlderEventListeners(true, document, 'focusout');
  } else {
    this.setVisibilityApiPriority(false);
  }
  var context = this;
  SL.bindEvent('aftertoolinit', function() {
    SL.fireEvent(SL.visibility.isHidden() ? 'tabblur' : 'tabfocus');
  });
}

VisibilityEventEmitter.prototype = {
  defineEvents: function() {
    this.oldBlurClosure = function() {
      SL.fireEvent('tabblur', document)
    };
    this.oldFocusClosure = SL.bind(function() {
      if (this.visibilityApiHasPriority) {
        SL.fireEvent('tabfocus', document);
      } else {
        if (SL.visibility.getHiddenProperty() != null) {
          if(!SL.visibility.isHidden()) {
            SL.fireEvent('tabfocus', document);
          }
        } else {
          SL.fireEvent('tabfocus', document);
        }
      }
    }, this);
  },
  attachDetachModernEventListeners: function(add) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](document,
      SL.visibility.getVisibilityEvent(),
      this.handleVisibilityChange
    );
  },
  attachDetachOlderEventListeners: function(add, blurTarget, blurEventName) {
    var method = (add == false ? 'removeEventHandler' : 'addEventHandler');
    SL[method](blurTarget, blurEventName, this.oldBlurClosure);
    SL[method](window, 'focus', this.oldFocusClosure);
  },
  handleVisibilityChange: function() {
    if (SL.visibility.isHidden()) {
      SL.fireEvent('tabblur', document);
    } else {
      SL.fireEvent('tabfocus', document);
    }
  },
  setVisibilityApiPriority: function(visibilityApiHasPriority) {
    this.visibilityApiHasPriority = visibilityApiHasPriority;
    this.attachDetachOlderEventListeners(false, window, 'blur');
    this.attachDetachModernEventListeners(false);
    if (visibilityApiHasPriority) {
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      } else {
        this.attachDetachOlderEventListeners(true, window, 'blur');
      }
    } else {
      this.attachDetachOlderEventListeners(true, window, 'blur');
      if (SL.visibility.getHiddenProperty() != null) { // Modern browsers
        this.attachDetachModernEventListeners(true);
      }
    }
  },
  oldBlurClosure: null,
  oldFocusClosure: null,
  visibilityApiHasPriority: true
};

SL.availableEventEmitters.push(VisibilityEventEmitter);

// ElementExistsEventEmitter
// ==================
//
// Emits the `elementexists` event. The `elementexists` event fires when an element
// of a specified selector becomes into existance - either because it's in the page
// markup or dynamically injected later on. *Each rule only fires once.*

function ElementExistsEventEmitter() {
  this.rules = SL.filter(SL.rules, function(rule) {
    return rule.event === 'elementexists';
  });
}
ElementExistsEventEmitter.prototype.backgroundTasks = function() {
  SL.each(this.rules, function(rule) {
    SL.cssQuery(rule.selector, function(elms) {
      if (elms.length > 0){
        // This results in a bug: https://jira.corp.adobe.com/browse/DTM-6681
        // The fix was reverted due to: https://jira.corp.adobe.com/browse/DTM-7377
        var elm = elms[0];
        if (SL.$data(elm, 'elementexists.seen')) return;
        SL.$data(elm, 'elementexists.seen', true);
        SL.onEvent({type: 'elementexists', target: elm});
      }
    })
  })
}

SL.availableEventEmitters.push(ElementExistsEventEmitter);

// VideoPlayedEventEmitter
// =======================
//
// Emits the `videoplayed` event, given a specified percentage or duration, i.e. `videoplayed`
// is a parameterized event. A rule looks like this
//
//      {
//          name: "Video 10% complete",
//          event: "videoplayed(10%)",
//          selector: "#video",
//          trigger: [
//              {
//                  tool: "ga",
//                  command: "trackEvent",
//                  arguments: [
//                      "video",
//                      "video 10% complete",
//                      "from: %URI%"
//                  ]
//              }
//          ]
//      }
//
// `10%` is in the paranthesis which indicates this rule will only fire when the 10%
// of the total length of the video has been played.
// You can also specifiy a duration in seconds, which looks like `videoplayed(8s)` - which
// stands for 8 seconds.

function VideoPlayedEventEmitter(){
  this.rules = SL.filter(SL.rules, function(rule){
    return rule.event.substring(0, 11) === 'videoplayed'
  })
  this.eventHandler = SL.bind(this.onUpdateTime, this)
}
VideoPlayedEventEmitter.prototype = {
  backgroundTasks: function(){
    var eventHandler = this.eventHandler
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector || 'video', function(elms){
        SL.each(elms, function(elm){
          if (SL.$data(elm, 'videoplayed.tracked')) return
          SL.addEventHandler(elm, 'timeupdate', SL.throttle(eventHandler, 100))
          SL.$data(elm, 'videoplayed.tracked', true)
        })
      })
    })
  },
  evalRule: function(elm, rule){
    var eventType = rule.event
      , seekable = elm.seekable
      , startTime = seekable.start(0)
      , endTime = seekable.end(0)
      , currentTime = elm.currentTime
      , m = rule.event.match(/^videoplayed\(([0-9]+)([s%])\)$/)
    if (!m) return
    var unit = m[2]
      , amount = Number(m[1])
    var func = unit === '%' ?
      function(){
        return amount <= 
          100 * (currentTime - startTime) / (endTime - startTime)
      } :
      function(){
        return amount <= currentTime - startTime
      }
    if (!SL.$data(elm, eventType) && func()){
      SL.$data(elm, eventType, true)
      SL.onEvent({type: eventType, target: elm})
    }
  },
  onUpdateTime: function(e){
    var rules = this.rules
      , elm = e.target
    if (!elm.seekable || elm.seekable.length === 0) return
    for (var i = 0, len = rules.length; i < len; i++)
      this.evalRule(elm, rules[i])
  }
}
SL.availableEventEmitters.push(VideoPlayedEventEmitter)

// InviewEventEmitter
// ==================
//
// Emits the `inview` event. The `inview` event fires on an element when the element
// first comes into the view of the user. If the element is in view immediately upon page
// load, it will be fired right away, if it only comes in view after some scrolling, it
// will fire then. An optional delay interval `inviewDelay` can be specified in the rule
// which determine how long the element has to be in view for before the event fires,
// of which the default value is 1 second.

function InViewEventEmitter(rules){
  rules = rules || SL.rules
  this.rules = SL.filter(rules, function(rule){
    return rule.event === 'inview'
  })
  this.elements = []
  this.eventHandler = SL.bind(this.track, this)
  SL.addEventHandler(window, 'scroll', this.eventHandler)
  SL.addEventHandler(window, 'load', this.eventHandler)
}

// Util functions needed by `InViewEventEmitter`
InViewEventEmitter.offset = function(elem) {
  var top = null, left = null;

  try {
    var box = elem.getBoundingClientRect(),
      doc = document,
      docElem = doc.documentElement,
      body = doc.body,
      win = window,
      clientTop  = docElem.clientTop  || body.clientTop  || 0,
      clientLeft = docElem.clientLeft || body.clientLeft || 0,
      scrollTop  = win.pageYOffset || docElem.scrollTop  || body.scrollTop,
      scrollLeft = win.pageXOffset || docElem.scrollLeft || body.scrollLeft;

    top  = box.top  + scrollTop  - clientTop;
    left = box.left + scrollLeft - clientLeft;
  } catch(e) {
  }

  return { top: top, left: left }
}
InViewEventEmitter.getViewportHeight = function() {
  var height = window.innerHeight // Safari, Opera
  var mode = document.compatMode

  if (mode) { // IE, Gecko
    height = (mode == 'CSS1Compat') ?
    document.documentElement.clientHeight : // Standards
    document.body.clientHeight // Quirks
  }

  return height
}
InViewEventEmitter.getScrollTop = function(){
  return (document.documentElement.scrollTop ?
    document.documentElement.scrollTop :
    document.body.scrollTop)
}

InViewEventEmitter.isElementInDocument = function(el) {
  return document.body.contains(el);
}

InViewEventEmitter.isElementInView = function(el) {
  if (!InViewEventEmitter.isElementInDocument(el)) {
    return false;
  }

  var vpH = InViewEventEmitter.getViewportHeight()
      , scrolltop = InViewEventEmitter.getScrollTop()
      , top = InViewEventEmitter.offset(el).top
      , height = el.offsetHeight;

  if (top !== null) {
    return !(scrolltop > (top + height) || scrolltop + vpH < top)
  }

  return false;
}

InViewEventEmitter.prototype = {
  backgroundTasks: function(){
    var elements = this.elements
    SL.each(this.rules, function(rule){
      SL.cssQuery(rule.selector, function(elms){
        var addCount = 0
        SL.each(elms, function(elm){
          if (!SL.contains(elements, elm)){
            elements.push(elm)
            addCount++
          }
        })
        if (addCount){
          SL.notify(rule.selector + ' added ' + addCount + ' elements.', 1)
        }
      })
    })
    this.track()
  },

  checkInView: function(el, recheck, delay){
    var inview = SL.$data(el, 'inview');
    if (InViewEventEmitter.isElementInView(el)) {
      // it is in view now
      if (!inview)
        SL.$data(el, 'inview', true)
      var self = this
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        if (recheck || !rule.inviewDelay){
          SL.$data(el, viewedProp, true)
          SL.onEvent({type: 'inview', target: el, inviewDelay: rule.inviewDelay})
        }else if(rule.inviewDelay){
          var timeout = SL.$data(el, timeoutIdProp)
          if (!timeout) {
            timeout = setTimeout(function(){
              self.checkInView(el, true, rule.inviewDelay)
            }, rule.inviewDelay)
            SL.$data(el, timeoutIdProp, timeout)
          }
        }
      }, delay)
    } else {
      if (!InViewEventEmitter.isElementInDocument(el)) {
        var idx = SL.indexOf(this.elements, el);
        this.elements.splice(idx, 1)
      }

      // it is not in view now
      if (inview)
        SL.$data(el, 'inview', false)
      this.processRules(el, function(rule, viewedProp, timeoutIdProp){
        var timeout = SL.$data(el, timeoutIdProp)
        if (timeout){
          clearTimeout(timeout)
        }
      }, delay)
    }
  },
  track: function(){
    // We are not using SL.each here because we might do a splice inisde
    // `checkInView` method.
    for (var i = this.elements.length - 1; i >=0; i--) {
      this.checkInView(this.elements[i]);
    }
  },
  processRules: function(elm, callback, delay){
    var filteredRules = this.rules;
    if (delay) {
        filteredRules = SL.filter(this.rules, function(e){
          return e.inviewDelay == delay;
        });
    }
    SL.each(filteredRules, function(rule, i){
      // viewedProp: for rules that has a timeout, the definition for
      // "viewed" is rule dependent. But for all rules that do not have
      // a timeout, it is independent.
      var viewedProp = rule.inviewDelay ? 'viewed_' + rule.inviewDelay : 'viewed'
      var timeoutIdProp = 'inview_timeout_id_' + i
      if (SL.$data(elm, viewedProp)) return
      if (SL.matchesCss(rule.selector, elm)){
        callback(rule, viewedProp, timeoutIdProp)
      }
    })
  }
}

SL.availableEventEmitters.push(InViewEventEmitter)

// Leave Event Emitter
// ============================
//
// The page leave is an event that is used to detect the moment when the
// browser's tab gets closed.
//

function LeaveEventEmitter() {
  if (SL.getToolsByType('nielsen').length > 0) {
    SL.domReady(SL.bind(this.initialize, this));
  }
}

LeaveEventEmitter.prototype = {
  obue: false,
  initialize: function() {
    this.attachCloseListeners();
  },
  obuePrevUnload: function() {},
  obuePrevBeforeUnload: function() {},
  newObueListener: function() {
    if (!this.obue) {
      this.obue = true;
      this.triggerBeacons();
    }
  },
  attachCloseListeners: function() {
    this.prevUnload = window.onunload;
    this.prevBeforeUnload = window.onbeforeunload;

    window.onunload = SL.bind(function(e) {
      if (this.prevUnload) {
        setTimeout(SL.bind(function() {
          this.prevUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
    window.onbeforeunload = SL.bind(function(e) {
      if (this.prevBeforeUnload) {
        setTimeout(SL.bind(function() {
          this.prevBeforeUnload.call(window, e);
        }, this), 1);
      }
      this.newObueListener();
    }, this);
  },
  triggerBeacons: function() {
    SL.fireEvent('leave', document);
  }
}
SL.availableEventEmitters.push(LeaveEventEmitter);

// Hover Event Emitter
// =====================
//
// Emits the `hover` event in the event. This is better than `mouseover` because you can introduce a certain delay.
// 
//  {
//        name: "Hover for 1 second"
//        event: "hover(1000)",
//        ...
//  }
function HoverEventEmitter(){
  var eventRegex = this.eventRegex = /^hover\(([0-9]+)\)$/
  var rules = this.rules = []
  SL.each(SL.rules, function(rule){
    var m = rule.event.match(eventRegex)
    if (m){
      rules.push([
        Number(rule.event.match(eventRegex)[1]), 
        rule.selector
      ])
    }
  })
}
HoverEventEmitter.prototype = {
  backgroundTasks: function(){
    var self = this
    SL.each(this.rules, function(rule){
      var selector = rule[1]
        , delay = rule[0]
      SL.cssQuery(selector, function(newElms){
        SL.each(newElms, function(elm){
          self.trackElement(elm, delay)
        })
      })
    }, this)
  },
  trackElement: function(elm, delay){
    var self = this
      , trackDelays = SL.$data(elm, 'hover.delays')
    if (!trackDelays){
      SL.addEventHandler(elm, 'mouseover', function(e){
        self.onMouseOver(e, elm)
      })
      SL.addEventHandler(elm, 'mouseout', function(e){
        self.onMouseOut(e, elm)
      })
      SL.$data(elm, 'hover.delays', [delay])
    }
    else if (!SL.contains(trackDelays, delay)){
      trackDelays.push(delay)
    }
  },
  onMouseOver: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.fromElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseEnter(elem)
  },
  onMouseEnter: function(elm){
    var delays = SL.$data(elm, 'hover.delays')
    var delayTimers = SL.map(delays, function(delay){
      return setTimeout(function(){
        SL.onEvent({type: 'hover(' + delay + ')', target: elm})
      }, delay)
    })
    SL.$data(elm, 'hover.delayTimers', delayTimers)
  },
  onMouseOut: function(e, elem){
    var target = e.target || e.srcElement
      , related = e.relatedTarget || e.toElement
      , hit = (elem === target || SL.containsElement(elem, target)) && 
            !SL.containsElement(elem, related)
    if (hit)
      this.onMouseLeave(elem)
  },
  onMouseLeave: function(elm){
    var delayTimers = SL.$data(elm, 'hover.delayTimers')
    if (delayTimers)
      SL.each(delayTimers, function(timer){
        clearTimeout(timer)
      })
  }
}
SL.availableEventEmitters.push(HoverEventEmitter)

// Facebook Event Emitter
// ======================
//
// Will track `edge.create`, `edge.remove` and `message.send` events from the Facebook
// Javascript API and emit `facebook.like`, `facebook.unlike` and `facebook.send` events
// respectively.

function FacebookEventEmitter(FB){
  this.delay = 250;
  this.FB = FB;

  SL.domReady(SL.bind(function () {
    SL.poll(SL.bind(this.initialize, this), this.delay, 8);
  }, this));
}

FacebookEventEmitter.prototype = {
  initialize: function() {
    this.FB = this.FB || window.FB;

    if (this.FB && this.FB.Event && this.FB.Event.subscribe) {
      this.bind();
      return true;
    }
  },

  bind: function(){
    this.FB.Event.subscribe('edge.create', function() {
      SL.notify("tracking a facebook like", 1)
      SL.onEvent({type: 'facebook.like', target: document})
    });

    this.FB.Event.subscribe('edge.remove', function() {
      SL.notify("tracking a facebook unlike", 1)
      SL.onEvent({type: 'facebook.unlike', target: document})
    });

    this.FB.Event.subscribe('message.send', function() {
      SL.notify("tracking a facebook share", 1)
      SL.onEvent({type: 'facebook.send', target: document})
    });
  }
}
SL.availableEventEmitters.push(FacebookEventEmitter);

// Twitter Event Emitter
// =====================
//
// Emits the `twitter.tweet` event in the event a user tweets from the site.
function TwitterEventEmitter(twttr){
  SL.domReady(SL.bind(function () {
    this.twttr = twttr || window.twttr;
    this.initialize();
  }, this));
}

TwitterEventEmitter.prototype = {
  initialize: function(){
    var twttr = this.twttr;
    if (twttr && typeof twttr.ready === 'function') {
      twttr.ready(SL.bind(this.bind, this));
    }
  },

  bind: function(){
    this.twttr.events.bind('tweet', function(event) {
      if (event) {
        SL.notify("tracking a tweet button", 1);
        SL.onEvent({type: 'twitter.tweet', target: document});
      }
    });

  }
}
SL.availableEventEmitters.push(TwitterEventEmitter)

// Location Change Event Emitter
// =============================
//
// Will fire `locationchange` event whenever the browser location
// changes due to `hashchange`, `popstate`, `history.pushState()`,
// or `history.replaceState()`. 

function LocationChangeEventEmitter(){
  this.lastURL = SL.URL()
  this._fireIfURIChanged = SL.bind(this.fireIfURIChanged, this)
  this._onPopState = SL.bind(this.onPopState, this)
  this._onHashChange = SL.bind(this.onHashChange, this)
  this._pushState = SL.bind(this.pushState, this)
  this._replaceState = SL.bind(this.replaceState, this)
  this.initialize()
}

LocationChangeEventEmitter.prototype = {
  initialize: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  fireIfURIChanged: function(){
    var URL = SL.URL()
    if (this.lastURL !== URL){
      this.fireEvent()
      this.lastURL = URL
    }
  },

  fireEvent: function(){
    SL.updateQueryParams()
    SL.onEvent({ type: 'locationchange', target: document })
  },

  setupSPASupport: function(){
    this.setupHistoryAPI()
    this.setupHashChange()
  },

  setupHistoryAPI: function(){
    var history = window.history
    if (history){
      if (history.pushState){
        this.originalPushState = history.pushState
        history.pushState = this._pushState
      }
      if (history.replaceState){
        this.originalReplaceState = history.replaceState
        history.replaceState = this._replaceState
      }
    }
    SL.addEventHandler(window, 'popstate', this._onPopState)
  },

  pushState: function(){
    var ret = this.originalPushState.apply(history, arguments)
    this.onPushState()
    return ret
  },

  replaceState: function(){
    var ret = this.originalReplaceState.apply(history, arguments)
    this.onReplaceState()
    return ret
  },

  setupHashChange: function(){
    SL.addEventHandler(window, 'hashchange', this._onHashChange)
  },

  onReplaceState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPushState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onPopState: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  onHashChange: function(){
    setTimeout(this._fireIfURIChanged, 0)
  },

  uninitialize: function(){
    this.cleanUpHistoryAPI()
    this.cleanUpHashChange()
  },

  cleanUpHistoryAPI: function(){
    if (history.pushState === this._pushState){
      history.pushState = this.originalPushState
    }
    if (history.replaceState === this._replaceState){
      history.replaceState = this.originalReplaceState
    }
    SL.removeEventHandler(window, 'popstate', this._onPopState)
  },

  cleanUpHashChange: function(){
    SL.removeEventHandler(window, 'hashchange', this._onHashChange)
  }

}

SL.availableEventEmitters.push(LocationChangeEventEmitter);

// E-Commerce APIs
// ---------------
//
// The ecommerce API allows web admins to integrate e-commerce tracking with Satellite.
// More details on the [GA E-Commerce API's](http://code.google.com/apis/analytics/docs/gaJS/gaJSApiEcommerce.html).
// Upon any of the methods on the API being called, they will fire an event, which
// in turn can be handled by a rule in the library.

SL.ecommerce = {
  // `addItem(orderId, sku, name, category, price, quantity)`
  // -------------------------------------
  //
  // Add an item to the transaction.
  addItem: function(){
    var args = [].slice.call(arguments)
    SL.onEvent({type: 'ecommerce.additem', target: args})
  },

  // `addTrans(orderId, affiliation, total, tax, shipping, city, state, country)`
  // ----------------------------------------------------------------------------
  //
  // Add a new transaction.
  addTrans: function(){
    var args = [].slice.call(arguments)
    SL.data.saleData.sale = {
      orderId: args[0],
      revenue: args[2]
    }
    SL.onEvent({type: 'ecommerce.addtrans', target: args})
  },

  // `trackTrans()`
  // --------------
  //
  // Send the transaction data that's been set up using `addItem()` and `addTrans()`
  // to GA to be tracked.
  trackTrans: function(){
    SL.onEvent({type: 'ecommerce.tracktrans', target: []})
  }
}

// Visibility API Event Emitter
// ============================
//
// The `visibility API` is used when the browser's tab gets hidden because
// another tab now is visible. For more information see Mozilla's [Page Visibility API](https://developer.mozilla.org/en-US/docs/Web/Guide/User_experience/Using_the_Page_Visibility_API)

SL.visibility = {
  // Public
  // ------------------------------------------------

  // `isHidden()`
  //
  // The method returns true if the tab is hidden, otherwise false.
  isHidden: function() {
    var prop = this.getHiddenProperty();
    if (!prop) return false;
    return document[prop];
  },

  // `isVisible()`
  //
  // The method is an alias for the `!isHidden`.
  isVisible: function() {
    return !this.isHidden();
  },

  // Private
  // ------------------------------------------------
  getHiddenProperty: function() {
    var prefixes = ['webkit', 'moz', 'ms', 'o'];
    if ('hidden' in document) return 'hidden';
    // otherwise loop over all the known prefixes until we find one
    for (var i = 0; i < prefixes.length; i++) {
      if ((prefixes[i] + 'Hidden') in document)
        return prefixes[i] + 'Hidden';
    }
    // otherwise it's not supported
    return null;
  },

  getVisibilityEvent: function() {
    var ve = this.getHiddenProperty();
    if (!ve) return null;
    return ve.replace(/[H|h]idden/,'') + 'visibilitychange';
  }
};

// The Nielsen Tool
// ================
//
// This tool provides the means to make Nielsen tracking possible.
//
// The tool accepts the following settings:
//
// - `collectionServer` - The collection server to be used. The variable
//      specifies the nearest collection server.
// - `clientId` - The client identifier. A unique Nielsen supplied ID that
//      should be alphanumeric and lowercase. A dash (-) character is allowed.
// - `contentGroup` - The content group. A historical variable used for
//      grouping/aggregating content into channels. Currently the
//      default value is "0".
function NielsenTool(settings) {
  SL.BaseTool.call(this, settings);
  this.defineListeners();
  this.beaconMethod = 'plainBeacon';
  this.adapt = new NielsenTool.DataAdapters();
  this.dataProvider = new NielsenTool.DataProvider.Aggregate();
}

SL.inherit(NielsenTool, SL.BaseTool);
SL.extend(NielsenTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'Nielsen',

  // Private
  // ------------------------------------------------

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // This is needed in order to be able to properly hook the needed events.
  endPLPhase: function(pageLoadEvent) {
    switch (pageLoadEvent) {
      case 'pagetop':
        this.initialize();
        break;
      case 'pagebottom':
        if (this.enableTracking) {
          this.queueCommand({ command: 'sendFirstBeacon', "arguments": [] });
          this.flushQueueWhenReady();
        }
        break;
    }
  },

  defineListeners: function() {
    this.onTabFocus = SL.bind(function() {
      this.notify('Tab visible, sending view beacon when ready', 1);
      this.tabEverVisible = true;
      this.flushQueueWhenReady();
    }, this);
    this.onPageLeave = SL.bind(function() {
      this.notify('isHuman? : '+ this.isHuman(), 1);
      if (this.isHuman()) {
        this.sendDurationBeacon(); // track page leave
      }
    }, this);
    this.onHumanDetectionChange = SL.bind(function(e) {
      if (this == e.target.target) this.human = e.target.isHuman;
    }, this);
  },

  initialize: function() {
    this.initializeTracking();
    this.initializeDataProviders();
    this.initializeNonHumanDetection();
    this.tabEverVisible = SL.visibility.isVisible();
    if (!this.tabEverVisible) {
      SL.bindEventOnce('tabfocus', this.onTabFocus);
    }
    else {
      this.notify('Tab visible, sending view beacon when ready', 1);
    }

    this.initialized = true;
  },

  // `initializeTracking()`
  // ------------------------------------------------
  //
  // The method starts the time tracking and hooks on the leave event.
  initializeTracking: function() {
    if (this.initialized) return;
    this.notify('Initializing tracking', 1);
    this.addRemovePageLeaveEvent(this.enableTracking);
    this.addRemoveHumanDetectionChangeEvent(this.enableTracking);
    this.initialized = true;
  },

  // `initializeDataProviders()`
  // ------------------------------------------------
  //
  // The method initializes default data providers for:
  // - Analytics Report Suite ID, if Analytics account is linked
  // - Marketing Cloud Visitor ID, with fallback to auto-generated UUID
  initializeDataProviders: function() {
    var analytics = this.getAnalyticsTool(), rsid;

    this.dataProvider.register(
      new NielsenTool.DataProvider.VisitorID(
        SL.getVisitorId()
      )
    );
    if (analytics) {
      rsid = new NielsenTool.DataProvider.Generic('rsid', function() {
        return analytics.settings.account;
      });
      this.dataProvider.register(rsid);
    }
    else {
      this.notify('Missing integration with Analytics: rsid will not be sent.');
    }
  },

  initializeNonHumanDetection: function() {
    if (SL.nonhumandetection) {
      SL.nonhumandetection.init();
      this.setEnableNonHumanDetection(
        this.settings.enableNonHumanDetection == false ? false : true);
      if (this.settings.nonHumanDetectionDelay > 0) {
        this.setNonHumanDetectionDelay(
          parseInt(this.settings.nonHumanDetectionDelay) * 1000);
      }
    } else {
      this.notify('NHDM is not available.');
    }
  },

  // `getAnalyticsTool()`
  // ------------------------------------------------
  //
  // If integration is defined, this method returns the tool instance of
  // the linked Analytics account
  getAnalyticsTool: function() {
    if (this.settings.integratesWith) {
      return SL.tools[this.settings.integratesWith];
    }
  },

  flushQueueWhenReady: function() {
    if (!this.enableTracking || !this.tabEverVisible) return;
    SL.poll(SL.bind(function() {
      if (this.isReadyToTrack()) {
        this.flushQueue();
        return true;
      }
    }, this), 100, 20);
  },

  isReadyToTrack: function() {
    return this.tabEverVisible && this.dataProvider.isReady();
  },

  // `setVars(vars)`
  // ------------------------------------------------
  //
  // The method is used to set variables on the tool
  $setVars: function(elm, evt, vars) {
    for (var v in vars) {
      var val = vars[v];
      if (typeof val === 'function')
        val = val();
      this.settings[v] = val;
    }
    this.notify('Set variables done', 2);
    this.prepareContextData();
  },

  // `setEnableTracking()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  $setEnableTracking: function(elm, evt, bool) {
    this.notify('Will' + (!bool ? ' not' : '') + ' track time on page', 1);
    if (this.enableTracking != bool) {
      this.addRemovePageLeaveEvent(bool);
      this.addRemoveHumanDetectionChangeEvent(bool);
      this.enableTracking = bool;
    }
  },

  // `sendFirstBeacon()`
  // ------------------------------------------------
  //
  // The method is called as soon as everything is in place.
  $sendFirstBeacon: function(elm, evt, settings) {
    this.sendViewBeacon();
  },

  // `setEnableNonHumanDetection()`
  // ------------------------------------------------
  //
  // The method enables/disables the human detection mechanism.
  setEnableNonHumanDetection: function(bool) {
    if (bool) {
      SL.nonhumandetection.register(this);
    } else {
      SL.nonhumandetection.unregister(this);
    }
  },

  // `setNonHumanDetectionDelay()`
  // ------------------------------------------------
  //
  // The method set the timeout for entering in non human state.
  setNonHumanDetectionDelay: function(delay) {
    SL.nonhumandetection.register(this, delay);
  },

  addRemovePageLeaveEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' page leave event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('leave', this.onPageLeave);
  },

  addRemoveHumanDetectionChangeEvent: function(add) {
    this.notify((add ? 'Attach onto' : 'Detach from') + ' human detection change event', 1);
    var method = (add == false ? 'unbindEvent' : 'bindEvent');
    SL[method]('humandetection.change', this.onHumanDetectionChange);
  },

  // `sendViewBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the view tracking call.
  sendViewBeacon: function() {
    this.notify('Tracked page view.', 1);
    this.sendBeaconWith();
  },

  // `sendDurationBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the duration tracking call. This adds the time
  // spent on the page to the call and is triggered when the user leaves
  // the current web page.
  sendDurationBeacon: function() {
    if (
      !SL.timetracking ||
      typeof SL.timetracking.timeOnPage != 'function' ||
      SL.timetracking.timeOnPage() == null
    ) {
      this.notify('Could not track close due missing time on page', 5);
      return;
    }
    this.notify('Tracked close', 1);
    this.sendBeaconWith({
      timeOnPage: Math.round(SL.timetracking.timeOnPage() / 1000),
      duration: 'D',
      timer: 'timer'
    });
    // a bit of delay to let the network thread finish sending data
    var i,s='';for(i=0;i<this.magicConst;i++){s+='0'};
  },

  // `sendBeaconWith(obj)`
  // ------------------------------------------------
  //
  // The method builds the tracking call based on provided settings and
  // parameters.
  sendBeaconWith: function(params) {
    if (this.enableTracking) {
      this[this.beaconMethod].call(this, this.prepareUrl(params));
    }
  },
  plainBeacon: function(url) {
    var img = new Image();
    img.src = url;
    img.width = 1;
    img.height = 1;
    img.alt = '';
  },
  navigatorSendBeacon: function(url) {
    navigator.sendBeacon(url);
  },
  prepareUrl: function(params) {
    var obj = this.settings;
    SL.extend(obj, this.dataProvider.provide());
    SL.extend(obj, params);
    return this.preparePrefix(this.settings.collectionServer) +
      this.adapt.convertToURI(
        this.adapt.toNielsen(
          this.substituteVariables(obj)));
  },
  preparePrefix: function(server) {
    return '//' + encodeURIComponent(server) + '.imrworldwide.com/cgi-bin/gn?';
  },
  substituteVariables: function(hash){
    var obj = {};
    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }
    return obj;
  },
  prepareContextData: function() {
    if (!this.getAnalyticsTool()) {
      this.notify('Adobe Analytics missing.');
      return;
    }
    var obj = this.settings;
    obj.sdkVersion =_satellite.publishDate;
    this.getAnalyticsTool().$setVars(null, null, {
      contextData: this.adapt.toAnalytics(
        this.substituteVariables(obj))
    });
  },
  isHuman: function() {
    return this.human;
  },
  onTabFocus: function() {},
  onPageLeave: function() {},
  onHumanDetectionChange: function() {},
  notify: function(msg, lvl) {
    SL.notify(this.logPrefix + msg, lvl);
  },
  beaconMethod: 'plainBeacon',
  adapt: null,
  enableTracking: false,
  logPrefix: "Nielsen: ",
  tabEverVisible: false,
  human: true,
  magicConst: 0x1e8480
});

// `NielsenTool.DataProvider`
// ==========================
//
// The following components handle the task of providing extra information
// for the Nielsen beacon, with support for asynchronous data
//
NielsenTool.DataProvider = {};
NielsenTool.DataProvider.Generic = function(key, valueFn) {
  this.key = key;
  this.valueFn = valueFn;
};

SL.extend(NielsenTool.DataProvider.Generic.prototype, {
  isReady: function() {
    return true;
  },

  getValue: function() {
    return this.valueFn();
  },

  provide: function() {
    if (!this.isReady()) {
      NielsenTool.prototype.notify('Not yet ready to provide value for: ' + this.key, 5)
    }
    var data = {};
    data[this.key] = this.getValue();
    return data;
  }
});

// `NielsenTool.DataProvider.VisitorID`
// ====================================
//
// Gets and optionally waits for Marketing Cloud ID to be loaded.
// If no visitor instance is provided, then it falls-back to generated UUID.
//
NielsenTool.DataProvider.VisitorID = function(visitorInstance, key, fallbackProvider) {
  this.key = key || 'uuid';
  this.visitorInstance = visitorInstance;
  if (this.visitorInstance) {
    this.visitorId = visitorInstance.getMarketingCloudVisitorID([this, this._visitorIdCallback]);
  }
  this.fallbackProvider = fallbackProvider || new NielsenTool.UUID();
};

SL.inherit(NielsenTool.DataProvider.VisitorID, NielsenTool.DataProvider.Generic);
SL.extend(NielsenTool.DataProvider.VisitorID.prototype, {
  isReady: function() {
    if (this.visitorInstance === null) {
      return true;
    }
    return !!this.visitorId;
  },

  getValue: function() {
    return this.visitorId || this.fallbackProvider.get();
  },

  _visitorIdCallback: function(id) {
    this.visitorId = id;
  }
});

// `NielsenTool.DataProvider.Aggregate`
// ====================================
//
// Aggregates data from multiple providers, being aware of their ready-state.
//
NielsenTool.DataProvider.Aggregate = function() {
  this.providers = [];
  for (var i=0; i<arguments.length; i++) {
    this.register(arguments[i]);
  }
};

SL.extend(NielsenTool.DataProvider.Aggregate.prototype, {
  register: function(provider) {
    this.providers.push(provider);
  },

  isReady: function() {
    return SL.every(this.providers, function(provider) {
      return provider.isReady();
    });
  },

  provide: function() {
    var data = {};
    SL.each(this.providers, function(provider) {
      SL.extend(data, provider.provide());
    });
    return data;
  }
});

// `UUID`
// ===============
//
// The follwing generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
// uinique ID and stores it in a cookie.

NielsenTool.UUID = function() {};

SL.extend(NielsenTool.UUID.prototype, {
  // `generate()`
  // ------------------------------------------------
  //
  // Method that generates an [RFC 4122 version 4](https://www.ietf.org/rfc/rfc4122.txt)
  // compliant unique ID.
  //
  // This is needed in for Nielsen tracking w/o Analytics integration.
  generate: function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  },
  get: function() {
    var cookieUUID = SL.readCookie(this.key('uuid'));
    if (cookieUUID) return cookieUUID;
    cookieUUID = this.generate();
    SL.setCookie(this.key('uuid'), cookieUUID);
    return cookieUUID;
  },
  key: function(name) {
    return '_dtm_nielsen_' + name;
  }
});

// `Data Adapters`
// ===============
//
// The follwing adapters are used to adapt the settings to the proper format
// for both Nielsen tracking call and AA tracking calls

NielsenTool.DataAdapters = function() {};

SL.extend(NielsenTool.DataAdapters.prototype, {
  toNielsen: function(settings) {
    var cdate = new Date().getTime(),
        nielsenPrefixes = {
          c6: 'vc,',
          c13: 'asid,',
          c15: 'apn,',
          c27: 'cln,',
          c32: 'segA,',
          c33: 'segB,',
          c34: 'segC,',
          c35: 'adrsid,',
          c29: 'plid,',
          c30: 'bldv,',
          c40: 'adbid,'
        },
        nielsenObj = {
          ci: settings.clientId,
          c6: settings.vcid,
          c13: settings.appId,
          c15: settings.appName,
          prv: 1,
          forward: 0,
          ad: 0,
          cr: settings.duration || 'V', // [V|D], default V
          rt: 'text',
          st: 'dcr',
          prd: 'dcr',
          r: cdate,
          at: settings.timer || 'view', // [view|timer], default view
          c16: settings.sdkVersion,
          c27: settings.timeOnPage || 0,
          c40: settings.uuid,
          c35: settings.rsid,
          ti: cdate,
          sup: 0,
          c32: settings.segmentA,
          c33: settings.segmentB,
          c34: settings.segmentC,
          asn: settings.assetName,
          c29: settings.playerID,
          c30: settings.buildVersion
        };
    for (key in nielsenObj) {
      if (nielsenObj[key] !== undefined && nielsenObj[key] != null) {
        if (nielsenObj[key] !== undefined && nielsenObj != null && nielsenObj != '') {
          var val = encodeURIComponent(nielsenObj[key]);
          if (nielsenPrefixes.hasOwnProperty(key) && val) {
            val = nielsenPrefixes[key] + val;
          }
          nielsenObj[key] = val;
        }
      }
    }
    return this.filterObject(nielsenObj);
  },
  toAnalytics: function(settings) {
    return this.filterObject({
      'a.nielsen.clientid': settings.clientId,
      'a.nielsen.vcid': settings.vcid,
      'a.nielsen.appid': settings.appId,
      'a.nielsen.appname': settings.appName,
      'a.nielsen.accmethod': "0",
      'a.nielsen.ctype': "text",
      'a.nielsen.sega': settings.segmentA,
      'a.nielsen.segb': settings.segmentB,
      'a.nielsen.segc': settings.segmentC,
      'a.nielsen.asset': settings.assetName
    });
  },
  convertToURI: function(obj) {
    if (SL.isObject(obj) === false) return '';
    var uri = []
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) uri.push(key + '=' + obj[key]);
    }
    return uri.join('&')
  },
  filterObject: function(obj) {
    for (var k in obj) {
      if (obj.hasOwnProperty(k) &&
        (obj[k] == null || obj[k] === undefined)) {
        delete obj[k];
      }
    }
    return obj;
  }
});

SL.availableTools.nielsen = NielsenTool;

// The Marketing Cloud Visitor ID Service Tool
// ================
//
// This tool interacts with the [Visitor ID library](https://git.corp.adobe.com/mc-visitor/VisitorAPI/tree/master/js/src).
// The tool initilizes the Visitor ID library as soon as the tool itself is
// created, by calling the `initialize` method. Find out more info about the
// initializing sequence by clicking [here](#-initialize-).
//
// The tool accepts the following settings:
//
// - `mcOrgId` - The Adobe Marketing Cloud Organization ID (Required)
// - `initVars` - Map containing properties that can be set on the Visitor ID
//      instance. The following keys can be set here:
//      * `trackingServer`,
//      * `trackingServerSecure`,
//      * `marketingCloudServer`
//      * `marketingCloudServerSecure`
// - `customerIDs` - Map containing Customer IDs values that will be set on the
//      instance
// - `autoRequest` - Flag that will read the Marketing Cloud Visitor ID by
//      calling `getMarketingCloudVisitorID` method
function VisitorIdTool(settings) {
  SL.BaseTool.call(this, settings);
  this.name = settings.name || 'VisitorID';

  this.initialize();
}

SL.extend(VisitorIdTool.prototype, {
  // Public
  // ------------------------------------------------
  //
  // `getInstance()`
  // ------------------------------------------------
  //
  // Returns the Visitor ID instance that was created when the tool was
  // initialized.
  getInstance: function() {
    return this.instance;
  },

  // Private
  // ------------------------------------------------
  //
  // `initialize()`
  // ------------------------------------------------
  //
  // The method creates a Visitor ID instance if all the data provided is valid.
  // The instance will contain all the keys defined in the `initVar` setting.
  // Any `dataElement` present as a value in the initVars map will be replaced
  // with the correct value.
  //
  // It applies then a the map of Customer IDs by calling the `setCustomerIDs`
  // method from the newly created instance. Any `dataElement` present as a
  // value in the Customer IDs map will be replaced with the correct value.
  //
  // After that, the `getMarketingCloudVisitorID` method from the newly created
  // instance is called, provided that the `autoRequest` settings is set to true.
  initialize: function() {
    var settings = this.settings, visitor;

    SL.notify('Visitor ID: Initializing tool', 1);

    visitor = this.createInstance(
      settings.mcOrgId,
      settings.initVars
    );
    if (visitor === null) {
      return;
    }

    if (settings.customerIDs) {
      this.applyCustomerIDs(visitor, settings.customerIDs);
    }

    if (settings.autoRequest) {
      visitor.getMarketingCloudVisitorID();
    }

    this.instance = visitor;
  },

  createInstance: function(mcOrgId, initVars) {
    if(!SL.isString(mcOrgId)) {
      SL.notify(
        'Visitor ID: Cannot create instance using mcOrgId: "' + mcOrgId + '"', 4);
      return null;
    }

    mcOrgId = SL.replace(mcOrgId);
    SL.notify(
      'Visitor ID: Create instance using mcOrgId: "' + mcOrgId + '"', 1);

    initVars = this.parseValues(initVars);
    var instance = Visitor.getInstance(mcOrgId, initVars);
    SL.notify('Visitor ID: Set variables: ' + SL.stringify(initVars), 1);

    return instance;
  },

  applyCustomerIDs: function(instance, ids) {
    var parsedIds = this.parseIds(ids);
    instance.setCustomerIDs(parsedIds);
    SL.notify('Visitor ID: Set Customer IDs: ' + SL.stringify(parsedIds), 1);
  },

  parseValues: function(hash) {
    if (SL.isObject(hash) === false) {
      return {};
    }

    var obj = {};

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        obj[v] = SL.replace(hash[v]);
      }
    }

    return obj;
  },

  parseIds: function(hash) {
    var parsedIds = {};
    if (SL.isObject(hash) === false) {
      return {};
    }

    for (var v in hash) {
      if (hash.hasOwnProperty(v)) {
        var id = SL.replace(hash[v]['id']);
        // All IDs should be data elements. If no replacement has taken place,
        // then we can conclude that the data element doesn't exists.
        // Also we should ignore existing data elements that are empty.
        if (id !== hash[v]['id'] && id) {
          parsedIds[v] = {};
          parsedIds[v]['id'] = id;
          parsedIds[v]['authState'] = Visitor.AuthState[hash[v]['authState']];
        }
      }
    }

    return parsedIds;
  }
});

SL.availableTools.visitor_id = VisitorIdTool;

// Adobe Analytics Tool
// ================
//
// This tool interacts with the [AppMeasurement library](http://microsite.omniture.com/t2/help/en_US/sc/appmeasurement/release/c_release_notes_mjs.html)
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (sc)
// - `initVars` - It's an array containing key/value pair of AppMeasurement's
//      properties that are used in tracking and for settings. An example of
//      such pair would be: `{ eVar6: "6", server: "tracking.server"}`. For a
//      list of all supported properties please consult the [AppMeasurement's
//      documentation](http://microsite.omniture.com/t2/help/en_US/sc/implement/sc_variables.html).
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `sCodeURL` - Custom URL of the AppMeasurement Javascript library URL
//      location.
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `account` - String containing the report suite ID to track to.
// - `skipSetAccount` - Boolean value that when true disables setting
//      of the `account` with the value provided in settings. Default value
//      is no being set.
// - `euCookie' - Please see the description on SL (core.js) code
// - `renameS` - String specifying the name of the global AppMeasurement
//      instance. If no provided `s` is implied.
// - `executeCustomPageCodeFirst` - Boolean flag that lets the custom
//      initialization code be executed before or after the `initVars` method
//      call. Default value is not set which means false.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call. A false value results in disabling the initial
//      page view tracking call.
//
// The SiteCatalystTool allows to set variables, add events, track link, etc.
// Example:
//
//      trigger: [
//          {
//              tool: "sc",
//              command: "trackLink"
//          }
//      ]
//
function SiteCatalystTool(settings){
  SL.BaseTool.call(this, settings)

  this.varBindings = {}
  this.events = []
  this.products = []
  this.customSetupFuns = []
}
SL.inherit(SiteCatalystTool, SL.BaseTool)
SL.extend(SiteCatalystTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'SC',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      this.initialize(pageLoadEvent)
    }
  },

  // Private
  // ------------------------------------------------

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first check to see if the default initialization is specifically
  // canceled.
  //
  // Then it sets an event listener on `pageLoadeEvent` to update the tracking
  // variables with the ones provided in `initVars` setting object.
  //
  // In case that the user chosen to provide the Javascript code for
  // AppMeasurement by himself instead of using the automatic management
  // then we wait for the library to load.
  //
  // Otherwise we load the AppMeasurement from the storage and then set the
  // setup variables on the tracker object.
  initialize: function(pageLoadEvent){
    if (this._cancelToolInit) return
    this.settings.initVars = this.substituteVariables(
      this.settings.initVars, { type: pageLoadEvent }
    )

    if (this.settings.initTool !== false){
      var url = this.settings.sCodeURL || SL.basePath() + 's_code.js'
      if (typeof url === 'object'){
        if (window.location.protocol === 'https:')
          url = url.https
        else
          url = url.http
      }
      if (!url.match(/^https?:/))
        url = SL.basePath() + url
      if (this.settings.initVars){
        this.$setVars(null, null, this.settings.initVars)
      }
      SL.loadScript(url, SL.bind(this.onSCodeLoaded, this))
      this.initializing = true
    }else{
      // Set to initializing because we are
      // waiting on the AppMeasurement/s_code library to be loaded by
      // the site and we'll detect the completion of the load
      // in a background task.
      this.initializing = true
      this.pollForSC()
    }
  },

  // `getS(s, options)`
  // ------------------------------------------------
  //
  // The method initializes the `s` object.
  //
  // A notificaiton is given and `null` is returned in case of not finding
  // the account/RSID.
  //
  // If Marketing Cloud Visitor ID Service is used that instance is linked
  // with the instatiated `s` object.
  getS: function(s, options){
    var hostname = options && options.hostname || window.location.hostname
    var varBindings = this.concatWithToolVarBindings(
      options && options.setVars || this.varBindings
    )
    var events = options && options.addEvent || this.events
    var acct = this.getAccount(hostname)
    var s_gi = window.s_gi
    if (!s_gi) return null
    if (!this.isValidSCInstance(s)) s = null
    if (!acct && !s) {
      SL.notify('Adobe Analytics: tracker not initialized because account was not found', 1)
      return null
    }
    var s = s || s_gi(acct)

    var DTMversion = 'D' + SL.appVersion;
    if(typeof s.tagContainerMarker !== 'undefined') {
      s.tagContainerMarker = DTMversion
    } else {
      if (typeof s.version === 'string' &&
        s.version.substring(s.version.length - 5) !==
          ('-' + DTMversion)){
        s.version += '-' + DTMversion
      }
    }

    if (s.sa && this.settings.skipSetAccount !== true && this.settings.initTool !== false) s.sa(this.settings.account)
    this.applyVarBindingsOnTracker(s, varBindings)
    if (events.length > 0)
      s.events = events.join(',')

    var visitorIdInstance = SL.getVisitorId()
    if (visitorIdInstance) {
      s.visitor = SL.getVisitorId()
    }

    return s
  },

  // `onSCodeLoaded()`
  // ------------------------------------------------
  //
  // The method triggers load event on Analytics tool so all subsequent and
  // listening methods would be properly triggered.
  //
  // Before cleaning up the queue the tracking beacon call is made.
  onSCodeLoaded: function(loaded_manually){
    this.initialized = true
    this.initializing = false

    var msg = [
      'Adobe Analytics: loaded',
      loaded_manually ? ' (manual)' : '',
      '.'
    ]
    SL.notify(msg.join(''), 1)

    SL.fireEvent(this.id + '.load', this.getS())

    if (!loaded_manually) {
      this.flushQueueExceptTrackLink()
      this.sendBeacon()
    }

    this.flushQueue()
  },

  // `getAccount(hostname)`
  // ------------------------------------------------
  //
  // The returns the `s_account` for a specified `hostname`
  //
  // TODO: need to be refactored because `accountByHost` is no longer used.
  getAccount: function(hostname){
    if (window.s_account){
      return window.s_account
    }
    if (hostname && this.settings.accountByHost){
      return this.settings.accountByHost[hostname] || this.settings.account
    }else{
      return this.settings.account
    }
  },

  // `getTrackingServer()`
  // ------------------------------------------------
  //
  // The method tries to retrieve the tracking server from the `s` object
  // otherwise falls back on generating one based on the `account`.
  //
  // If neither `account` or `trackingServer` are availalble, `null` is
  // returned.
  //
  // TODO: need to be refactored to remove the tracking server generate method
  // as Analytics now offers a central point to shoot to.
  getTrackingServer: function(){
    var tool = this
    var s = tool.getS()
    if (s) {
      if (s.ssl && s.trackingServerSecure) {
        return s.trackingServerSecure
      }
      else if (s.trackingServer) {
        return s.trackingServer
      }
    }
    var account = tool.getAccount(window.location.hostname)
    if (!account) return null
    // Based on code in app measurement.
    var w
    var c = ''
    var d = s && s.dc
    var e
    var f
    w = account
    e = w.indexOf(",")
    e >= 0 && (w = w.gb(0, e))
    w = w.replace(/[^A-Za-z0-9]/g, "")
    c || (c = "2o7.net")
    d = d ? ("" + d).toLowerCase() : "d1"
    c == "2o7.net" && (d == "d1" ? d = "112" : d == "d2" && (d = "122"), f = "")
    e = w + "." + d + "." + f + c
    return e
  },

  // `sendBeacon()`
  // ------------------------------------------------
  //
  // The method triggers the tracking call.
  //
  // If custom initialization is used the beacon is supressed. Also, if custom
  // code is provided and specifically stated that it should be executed first
  // (`executeCustomPageCodeFirst`) the tracker get updated with the result of
  // the code.
  sendBeacon: function(){
    var s = this.getS(window[this.settings.renameS || 's'])
    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    if (this.settings.customInit){
      if (this.settings.customInit(s) === false){
        SL.notify("Adobe Analytics: custom init suppressed beacon", 1)
        return
      }
    }

    if (this.settings.executeCustomPageCodeFirst) {
      this.applyVarBindingsOnTracker(s, this.varBindings)
    }
    this.executeCustomSetupFuns(s)
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  pollForSC: function(){
    SL.poll(SL.bind(function(){
      if (typeof window.s_gi === 'function'){
        this.onSCodeLoaded(true)
        return true
      }
    }, this))
  },
  flushQueueExceptTrackLink: function(){
    // Because we always s.tl() after the first s.t()
    // that way the variables set by s.tl() will not
    // contaminate the s.t() call.
    if (!this.pending) return
    var left = []
    for (var i = 0; i < this.pending.length; i++){
      var args = this.pending[i]
      var trig = args[0]
      if (trig.command === 'trackLink'){
        left.push(args)
      }else{
        this.triggerCommand.apply(this, args)
      }
    }
    this.pending = left
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  substituteVariables: function(obj, evt){
    var ret = {}
    for (var key in obj){
      if (obj.hasOwnProperty(key)) {
        var value = obj[key]
        ret[key] = SL.replace(value, location, evt)
      }
    }
    return ret
  },
  $setVars: function(elm, evt, vars){
    for (var v in vars){
      if (vars.hasOwnProperty(v)) {
        var val = vars[v]
        if (typeof val === 'function')
          val = val()
        this.varBindings[v] = val
      }
    }
    SL.notify('Adobe Analytics: set variables.', 2)
  },
  $customSetup: function(elm, evt, setup){
    this.customSetupFuns.push(function(s){
      setup.call(elm, evt, s)
    })
  },
  isValidSCInstance: function(s) {
    return !!s && typeof s.t === 'function' && typeof s.tl === 'function'
  },
  concatWithToolVarBindings: function(varBindings){
    var settingsInitVars = this.settings.initVars || {}

    SL.map(['trackingServer', 'trackingServerSecure'], function (item) {
      if (settingsInitVars[item] && !varBindings[item]) {
        varBindings[item] = settingsInitVars[item]
      }
    });

    return varBindings
  },
  applyVarBindingsOnTracker: function (s, varBindings) {
    for (var v in varBindings){
      if (varBindings.hasOwnProperty(v)) {
        s[v] = varBindings[v]
      }
    }
  },
  clearVarBindings: function(){
    this.varBindings = {}
  },
  clearCustomSetup: function(){
    this.customSetupFuns = []
  },
  executeCustomSetupFuns: function(s){
    SL.each(this.customSetupFuns, function(fun){
      fun.call(window, s)
    })
  },
  $trackLink: function(elm, evt, params){
    params = params || {}
    var type = params.type
    var linkName = params.linkName
    if (!linkName &&
      elm &&
      elm.nodeName &&
      elm.nodeName.toLowerCase() === 'a'){
      linkName = elm.innerHTML
    }
    if (!linkName){
      linkName = 'link clicked'
    }
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }

    var orgLinkTrackVars = s.linkTrackVars
    var orgLinkTrackEvents = s.linkTrackEvents
    var definedVarNames = this.definedVarNames(vars)

    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }

    if (events.length > 0)
      definedVarNames.push('events')
    if (s.products)
      definedVarNames.push('products')

    // add back the vars from s
    definedVarNames = this.mergeTrackLinkVars(s.linkTrackVars, definedVarNames)

    // add back events from s
    events = this.mergeTrackLinkVars(s.linkTrackEvents, events)

    s.linkTrackVars = this.getCustomLinkVarsList(definedVarNames)

    var eventsKeys = SL.map(events, function(item) {
      return item.split(':')[0]
    });
    s.linkTrackEvents = this.getCustomLinkVarsList(eventsKeys)

    s.tl(true, type || 'o', linkName)
    SL.notify([
      'Adobe Analytics: tracked link ',
      'using: linkTrackVars=',
      SL.stringify(s.linkTrackVars),
      '; linkTrackEvents=',
      SL.stringify(s.linkTrackEvents)
    ].join(''), 1)

    s.linkTrackVars = orgLinkTrackVars
    s.linkTrackEvents = orgLinkTrackEvents
  },
  mergeTrackLinkVars: function(newVarsStr, varsArr){
    if (newVarsStr) {
      varsArr = newVarsStr.split(',').concat(varsArr)
    }

    return varsArr
  },
  getCustomLinkVarsList: function (keysArr) {
    var noneIndex = SL.indexOf(keysArr, 'None');
    if (noneIndex > -1 && keysArr.length > 1) {
      keysArr.splice(noneIndex, 1)
    }

    return keysArr.join(',');
  },
  definedVarNames: function(vars){
    vars = vars || this.varBindings
    var ret = []
    for (var varname in vars){
      if (vars.hasOwnProperty(varname) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(varname))
        ret.push(varname)
    }
    return ret
  },
  $trackPageView: function(elm, evt, params){
    var vars = params && params.setVars
    var events = (params && params.addEvent) || []

    var s = this.getS(null, {
      setVars: vars,
      addEvent: events
    })

    if (!s){
      SL.notify('Adobe Analytics: page code not loaded', 1)
      return
    }
    s.linkTrackVars = ''
    s.linkTrackEvents = ''
    this.executeCustomSetupFuns(s)
    if (params && params.customSetup){
      params.customSetup.call(elm, evt, s)
    }
    s.t()
    this.clearVarBindings()
    this.clearCustomSetup()
    SL.notify("Adobe Analytics: tracked page view", 1)
  },
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.transaction = window[varname]
      , s = this.varBindings
      , mapping = this.settings.fieldVarMapping

    SL.each(trans.items, function(item){
      this.products.push(item)
    }, this)

    s.products = SL.map(this.products, function(item){
      var vars = []
      if (mapping && mapping.item){
        for (var field in mapping.item){
          if (mapping.item.hasOwnProperty(field)) {
            var varname = mapping.item[field]
            vars.push(varname + '=' + item[field])
            if (varname.substring(0, 5) === 'event')
              this.events.push(varname)
          }
        }
      }
      var arr = ['', item.product, item.quantity, item.unitPrice * item.quantity]
      if (vars.length > 0)
        arr.push(vars.join('|'))
      return arr.join(';')
    }, this).join(',')

    if (mapping && mapping.transaction){
      // Add top-level events/eVars to products string.
      var topLevelVars = []
      for (var field in mapping.transaction){
        if (mapping.transaction.hasOwnProperty(field)) { 
          var varname = mapping.transaction[field]
          topLevelVars.push(varname + '=' + trans[field])
          if (varname.substring(0, 5) === 'event')
            this.events.push(varname)
        }
      }
      if (s.products.length > 0)
        s.products += ','
      s.products += ';;;;' + topLevelVars.join('|')
    }


  },
  $addEvent: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.events.push(arguments[i])
    }
  },
  $addProduct: function(elm, evt){
    for (var i = 2, len = arguments.length; i < len; i++){
      this.products.push(arguments[i])
    }
  }

})
SL.availableTools.sc = SiteCatalystTool

// The Default Tool
// ================
//
// The default tool comes with several handy utilities.

function DefaultTool(){
  SL.BaseTool.call(this)

  this.asyncScriptCallbackQueue = []
  this.argsForBlockingScripts = []
}
SL.inherit(DefaultTool, SL.BaseTool)
SL.extend(DefaultTool.prototype, {
  name: 'Default',

  // `loadIframe(src, variables)`
  // ----------------------------
  //
  // Dynamically create an iframe to load a URL.
  //
  // - src - the URL to load
  // - variables - an object literal of which the key/value pairs will be used
  //      to create the query string to use in the src URL
  $loadIframe: function(elm, evt, options){
    var pages = options.pages
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(pages, function(page){
        this.loadIframe(elm, evt, page)
      }, this)
    }, this)
    if (!loadOn) doit()
    if (loadOn === 'domready') SL.domReady(doit)
    if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadIframe: function(elm, evt, page){
    var iframe = document.createElement('iframe')
    iframe.style.display = 'none'
    var host = SL.data.host
      , data = page.data
      , src = this.scriptURL(page.src)
      , search = SL.searchVariables(data, elm, evt)
    if (host)
      src = SL.basePath() + src
    src += search
    iframe.src = src
    var body = document.getElementsByTagName('body')[0]
    if (body)
      body.appendChild(iframe)
    else
      SL.domReady(function(){
        document.getElementsByTagName('body')[0].appendChild(iframe)
      })
  },

  scriptURL: function(url){
    var scriptDir = SL.settings.scriptDir || ''
    return scriptDir + url
  },

  // `loadScript(options)
  // ------------------------------
  //
  // Load any number of Javascript files using dynamically generated script tags.
  // If you provide multiple file URLs, they will be loaded sequentially.
  $loadScript: function(elm, evt, options){
    var scripts = options.scripts
      , sequential = options.sequential
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      if (sequential){
        this.loadScripts(elm, evt, scripts)
      }else{
        SL.each(scripts, function(script){
          this.loadScripts(elm, evt, [script])
        }, this)
      }
    }, this)

    if (!loadOn) doit()
    else if (loadOn === 'domready') SL.domReady(doit)
    else if (loadOn === 'load') SL.addEventHandler(window, 'load', doit)
  },

  loadScripts: function(elm, evt, scripts) {
    try{
    var scripts = scripts.slice(0)
      , q = this.asyncScriptCallbackQueue
      , lastScript
      , target = evt.target || evt.srcElement
      , self = this
    }catch(e){
      console.error('scripts is', SL.stringify(scripts))
    }
    function loadNext(){
      if (q.length > 0 && lastScript){
        var callback = q.shift()
        callback.call(elm, evt, target)
      }
      var script = scripts.shift()
      if (script){
        var host = SL.data.host
          , src = self.scriptURL(script.src)
        if (host)
          src = SL.basePath() + src
        lastScript = script
        SL.loadScript(src, loadNext)
      }
    }
    loadNext()
  },

  $loadBlockingScript: function(elm, evt, options){
    var scripts = options.scripts
      , loadOn = options.loadOn
    var doit = SL.bind(function(){
      SL.each(scripts, function(script){
        this.loadBlockingScript(elm, evt, script)
      }, this)
    }, this)
    //if (!loadOn || loadOn === evt.type) doit()
    doit()
  },

  loadBlockingScript: function(elm, evt, script){
    /*jshint evil:true */
    var src = this.scriptURL(script.src)
      , host = SL.data.host
      , target = evt.target || evt.srcElement
    if (host)
      src = SL.basePath() + src
    this.argsForBlockingScripts.push([elm, evt, target])
    SL.loadScriptSync(src)
  },

  pushAsyncScript: function(callback){
    this.asyncScriptCallbackQueue.push(callback)
  },

  pushBlockingScript: function(callback){
    var args = this.argsForBlockingScripts.shift()
    var element = args[0]
    callback.apply(element, args.slice(1))
  },

  // `writeHTML(html)`
  // -----------------
  //
  // Write an HTML fragment onto the page using `document.write()`.
  //
  // - `html` - the HTML fragment
  $writeHTML: SL.escapeHtmlParams(function(elm, evt){
    /*jshint evil:true */
    if (SL.domReadyFired || !document.write){
      SL.notify('Command writeHTML failed. You should try appending HTML using the async option.', 1)
      return
    }
    if (evt.type !== 'pagebottom' && evt.type !== 'pagetop'){
      SL.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1)
      return
    }
    for (var i = 2, len = arguments.length; i < len; i++){
      var html = arguments[i].html
      html = SL.replace(html, elm, evt)
      document.write(html)
    }
  }),

  linkNeedsDelayActivate: function(a, win){
    win = win || window
    var tagName = a.tagName
      , target = a.getAttribute('target')
      , location = a.getAttribute('href')
    if (tagName && tagName.toLowerCase() !== 'a')
      return false
    if (!location)
      return false
    else if (!target)
      return true
    else if (target === '_blank')
      return false
    else if (target === '_top')
      return win.top === win
    else if (target === '_parent')
      return false
    else if (target === '_self')
      return true
    else if (win.name)
      return target === win.name
    else
      return true
  },

  // `delayActivateLink()`
  // ---------------------
  //
  // Delay the activation of an anchor link by first using `evt.preventDefault()` on
  // the click event, and then setting the window location to the destination after
  // a small delay. The default delay is 100 milliseconds, which can be configured in
  // `_satellite.settings.linkDelay`
  $delayActivateLink: function(elm, evt){
    if (!this.linkNeedsDelayActivate(elm)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      SL.setLocation(elm.href)
    }, linkDelay)
  },

  isQueueable: function(trig){
    return trig.command !== 'writeHTML'
  }
})
SL.availableTools['default'] = DefaultTool

// The Adobe Target Tool
// ==================
//
// This tool interacts with [Adobe Target library](https://git.corp.adobe.com/mc-visitor/VisitorAPI).
//
// The tool accepts the following settings:
//
// - `engine` - The engine identifier (tnt)
// - `mboxURL` - The URL where the mbox can be found
// - `loadSync` - Specifies how the mbox should be loaded. A true value means
//      that it should be loaded in a synchronous mode.
// - `pageParams` - Object containing key/value pairs used in the mbox retrieval
//      call. The pairs are merged onto the `targetPageParams` property of
//      Target Javascript library. For more information click
//      [here](https://marketing.adobe.com/resources/help/en_US/target/target/c_pass_parameters_to_global_mbox.html).

function Tnt(settings){
  SL.BaseTool.call(this, settings)

  this.styleElements = {}
  this.targetPageParamsStore = {}
}

SL.inherit(Tnt, SL.BaseTool)

SL.extend(Tnt.prototype, {
  // Public
  // ------------------------------------------------
  name: 'tnt',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled.
  //
  // When the tool is initialized the global `targetPageParams` are updated with
  // the parameters provided in the settings.
  //
  // It is important to know that the `targetPageParams` property is not
  // overwritten instead a merging process is taking place. If a key is already
  // present then its value is updated.
  //
  // The last step is the loading of the mbox where the `mboxURL` is used.

  endPLPhase: function(pageLoadEvent) {
    if (pageLoadEvent === 'aftertoolinit') {
      this.initialize();
    }
  },

  // Private
  // ------------------------------------------------
  initialize: function() {
    SL.notify('Test & Target: Initializing', 1)
    this.initializeTargetPageParams()
    this.load()
  },

  initializeTargetPageParams: function() {
    if (window.targetPageParams) {
      this.updateTargetPageParams(
        this.parseTargetPageParamsResult(
          window.targetPageParams()
        )
      )
    }

    this.updateTargetPageParams(this.settings.pageParams)
    this.setTargetPageParamsFunction()
  },

  load: function(){
    var url = this.getMboxURL(this.settings.mboxURL)
    if (this.settings.initTool !== false){
      if (this.settings.loadSync) {
        SL.loadScriptSync(url)
        this.onScriptLoaded()
      } else {
        SL.loadScript(url, SL.bind(this.onScriptLoaded, this))
        this.initializing = true
      }
    } else {
      this.initialized = true
    }
  },

  getMboxURL: function(urlData) {
    var url = urlData
    if (SL.isObject(urlData)) {
      if (window.location.protocol === 'https:')
        url = urlData.https
      else
        url = urlData.http
    }
    if (!url.match(/^https?:/))
      return SL.basePath() + url
    else
      return url
  },

  onScriptLoaded: function(){
    SL.notify('Test & Target: loaded.', 1)

    this.flushQueue()

    this.initialized = true
    this.initializing = false
  },

  $addMbox: function(elm, evt, settings){
    var mboxGoesAround = settings.mboxGoesAround
    var styleText = mboxGoesAround + '{visibility: hidden;}'
    var styleElm = this.appendStyle(styleText)
    if (!(mboxGoesAround in this.styleElements)){
      this.styleElements[mboxGoesAround] = styleElm
    }

    if (this.initialized){
      this.$addMBoxStep2(null, null, settings)
    }else if (this.initializing){
      this.queueCommand({
        command: 'addMBoxStep2'
        , "arguments": [settings]
      }, elm, evt)
    }
  },
  $addMBoxStep2: function(elm, evt, settings){
    var mboxID = this.generateID()
    var self = this
    SL.addEventHandler(window, 'load', SL.bind(function(){
      SL.cssQuery(settings.mboxGoesAround, function(elms){
        var elem = elms[0]
        if (!elem) return
        var newDiv = document.createElement("div")
        newDiv.id = mboxID
        elem.parentNode.replaceChild(newDiv, elem)
        newDiv.appendChild(elem)
        window.mboxDefine(mboxID, settings.mboxName)
        var args = [settings.mboxName]
        if (settings.arguments){
          args = args.concat(settings.arguments)
        }
        window.mboxUpdate.apply(null, args)
        self.reappearWhenCallComesBack(elem, mboxID, settings.timeout, settings)
      });
    }, this))
    this.lastMboxID = mboxID // leave this here for easier testing
  },

  $addTargetPageParams: function(elm, evt, pageParams) {
    this.updateTargetPageParams(pageParams)
  },

  generateID: function(){
    var id = '_sdsat_mbox_' + String(Math.random()).substring(2) + '_'
    return id
  },
  appendStyle: function(css){
    var head = document.getElementsByTagName('head')[0], 
        style = document.createElement('style');
        
    style.type = 'text/css';
    if(style.styleSheet){
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
    
    head.appendChild(style);
    return style;
  },
  reappearWhenCallComesBack: function(elmGoesAround, mboxID, timeout, settings){
    var self = this

    function reappear(){
      var styleElm = self.styleElements[settings.mboxGoesAround]
      if (styleElm){
        styleElm.parentNode.removeChild(styleElm)
        ;delete self.styleElements[settings.mboxGoesAround]
      }
    }

    SL.cssQuery('script[src*="omtrdc.net"]', function(results){
      var script = results[0]
      if (script){
        SL.scriptOnLoad(script.src, script, function(){
          SL.notify('Test & Target: request complete', 1)
          reappear()
          clearTimeout(timeoutID)
        })
        var timeoutID = setTimeout(function(){
          SL.notify('Test & Target: bailing after ' + timeout + 'ms', 1)
          reappear()
        }, timeout)
      }else{
        SL.notify('Test & Target: failed to find T&T ajax call, bailing', 1)
        reappear()
      }
    })
  },

  updateTargetPageParams: function(obj) {
    var o = {}
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        o[SL.replace(key)] = SL.replace(obj[key])
      }
    }
    SL.extend(
      this.targetPageParamsStore,
      o
    )
  },

  getTargetPageParams: function() {
    return this.targetPageParamsStore
  },

  setTargetPageParamsFunction: function() {
    window.targetPageParams = SL.bind(this.getTargetPageParams, this)
  },

  parseTargetPageParamsResult: function(data) {
    var result = data

    if(SL.isArray(data)) {
      data = data.join('&')
    }

    if (SL.isString(data)) {
      result = SL.parseQueryParams(data)
    }

    return result
  }
})
SL.availableTools.tnt = Tnt

// Basic Tool
// ------------
//
// This is a generic tool that allows integrating with
// various simple tools.
//

function BasicTool(settings){
  SL.BaseTool.call(this, settings)

  this.name = settings.name || 'Basic'
}

SL.inherit(BasicTool, SL.BaseTool)

SL.extend(BasicTool.prototype, {
  initialize: function(){
    var settings = this.settings
    if (this.settings.initTool !== false){
      var url = settings.url
      if (typeof url === 'string'){
        url = SL.basePath() + url
      }else{
        url = SL.isHttps() ? url.https : url.http
      }
      SL.loadScript(url, SL.bind(this.onLoad, this))
      this.initializing = true
    }else{
      this.initialized = true
    }
  },
  isQueueAvailable: function(){
    return !this.initialized
  },
  onLoad: function(){
    this.initialized = true
    this.initializing = false
    if (this.settings.initialBeacon){
      this.settings.initialBeacon()
    }
    this.flushQueue()
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify(this.name + ': Initializing at ' + pageLoadEvent, 1)
      this.initialize()
    }
  },
  $fire: function(elm, evt, fun){
    if (this.initializing){
      this.queueCommand({
        command: 'fire',
        arguments: [fun]
      }, elm, evt)
      return
    }
    fun.call(this.settings, elm, evt)
  }
})

SL.availableTools.am = BasicTool
SL.availableTools.adlens = BasicTool
SL.availableTools.aem = BasicTool
SL.availableTools.__basic = BasicTool

var GAUtils = {
  allowLinker: function() {
    return SL.hasMultipleDomains();
  },
  cookieDomain: function() {
    var domainList = SL.settings.domainList;
    var domainName = SL.find(domainList, function(domain) {
      var hostname = window.location.hostname;
      return SL.equalsIgnoreCase(
        hostname.slice(hostname.length - domain.length),
        domain);
    });
    var cookieDomain = domainName ? ('.' + domainName) : 'auto';

    return cookieDomain;
  }
};

// The Google Analytics Universal Tool
// ================
//
// This tool interacts with the [GAU library](https://developers.google.com/analytics/devguides/collection/analyticsjs/).
//
// From a high end perspective the following steps will happen. A `ga` dummy
// object will be initialized. Until the `analytics.js` file will be loaded in
// the browser, any triggered command will be queued in the `ga` object. Once
// the `analytics.js` will finish to load, all the queued commands will be
// executed.
//
// The tool is initialized during one of the following page load phases:
// top, bottom. Find out more info about the initializing sequence by clicking
// [here](#-endplphase-).
//
// Data elements are replaced when the tracker is created and on the commands
// from `initCommands` array. For the other situations, the data elements are
// replaced in the `triggerCommand` method from BaseTool.
//
// Beside the settings that are processed by the BaseTool code, this tool uses
// the following extra settings:
//
// - `engine` - The engine identifier (ga_universal)
// - `loadOn` - The PL phase when this tool will be initialized (top | bottom)
// - `url` - Custom URL of the `analytics.js` URL location. If none is provided
//      the Google default URL will be used.
// - `initTool` - Boolean flag that can suppress the tool initialization phase.
//      When set to `false` no JS library will be loaded and no initial command
//      will be executed. All the later commands triggered by this tool will
//      piggy back on any availble `ga` function from the page.
// - `trackerSettings` - Object containing properties that will be added on the
//      command that will create the GAU tracker. For a list of all supported
//      properties please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#create)
// - `initCommands` - It's an array containing commands. A command example:
//      `["set", "anonymizeIp", true]`. For a list of all supported commands
//      please click [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/method-reference#tracker)
//      The commands defined here will be executed after the tracker is created.
// - `allowLinker` - Flag that will make the GAU library load the cross domain
//      linking plugin.
// - `customInit` - JS code that will be executed immediately after the tool is
//      initialized. The boolean result from `customInit` will affect the
//      initial page view call.

function GAUniversalTool(settings) {
  SL.BaseTool.call(this, settings)
}

SL.inherit(GAUniversalTool, SL.BaseTool);

SL.extend(GAUniversalTool.prototype, {
  // Public
  // ------------------------------------------------
  name: 'GAUniversal',

  // `endPLPhase()`
  // ------------------------------------------------
  //
  // Method that starts the tool initialization when the page load phase is
  // matched and only if the tool initialization has not been previously
  // cancelled. Find out more info about the initializing sequence by clicking
  // [here](#-initialize-).
  //
  // After the tool is initialized a page view call is triggered if
  // `suppressInitialPageView` flag is not set to `true`.
  endPLPhase: function(pageLoadEvent) {
    var settings = this.settings;
    var loadOn = settings.loadOn;

    if (pageLoadEvent === loadOn) {
      SL.notify('GAU: Initializing at ' + pageLoadEvent, 1);
      this.initialize();
      this.flushQueue();
      this.trackInitialPageView();
    }
  },

  // `getTrackerName()`
  // ------------------------------------------------
  //
  // Returns the name of the GA tracker initialized by this tool.
  getTrackerName: function () {
    return this.settings.trackerSettings.name || '';
  },

  // Private
  // ------------------------------------------------
  isPageCodeLoadSuppressed: function() {
    return this.settings.initTool === false || this._cancelToolInit === true;
  },

  // `initialize()`
  // ------------------------------------------------
  //
  // The method first creates the GA scaffolding objects (the `ga` object and
  // the `GoogleAnalyticsObject` object.
  //
  // Then it loads the `analytics.js` library and append the command that will
  // create the GAU tracker object to the `ga` object.
  //
  // Next, the commands from the `initCommands` array will be appended to
  // the `ga` object. Finally the JS code defined in the `customInit` setting
  // variable will be called.
  initialize: function() {
    if (this.isPageCodeLoadSuppressed()) {
      this.initialized = true;
      SL.notify('GAU: Page code not loaded (suppressed).', 1);
      return;
    }

    var gaName = 'ga';

    window[gaName] = window[gaName] || this.createGAObject();
    window.GoogleAnalyticsObject = gaName;

    SL.notify('GAU: Page code loaded.', 1);
    SL.loadScriptOnce(this.getToolUrl());

    var settings = this.settings;

    if (GAUtils.allowLinker() && settings.allowLinker !== false) {
      this.createAccountForLinker();
    } else {
      this.createAccount();
    }

    this.executeInitCommands();

    if (settings.customInit){
      var customInit = settings.customInit
      var result = customInit(window[gaName], this.getTrackerName())
      if (result === false){
        this.suppressInitialPageView = true;
      }
    }

    this.initialized = true;
  },

  createGAObject: function() {
    var ga = function() {
      ga.q.push(arguments);
    };

    ga.q = [];
    ga.l = 1 * new Date();
    return ga;
  },

  createAccount: function() {
    this.create();
  },

  createAccountForLinker: function() {
    var options = {};
    if (GAUtils.allowLinker())
      options.allowLinker = true;

    this.create(options);
    this.call('require', 'linker');
    this.call('linker:autoLink', this.autoLinkDomains(), false, true);
  },

  create: function(extra){
    var options = this.settings.trackerSettings;
    options =
      SL.preprocessArguments([options], location, null, this.forceLowerCase)[0];
    options.trackingId =
      SL.replace(this.settings.trackerSettings.trackingId, location);

    if (!options.cookieDomain) {
      options.cookieDomain = GAUtils.cookieDomain();
    }

    SL.extend(options, extra || {});
    this.call('create', options);
  },

  autoLinkDomains: function() {
    var ourDomain = location.hostname;
    return SL.filter(SL.settings.domainList, function(domain) {
      return domain !== ourDomain;
    });
  },

  executeInitCommands: function() {
    var settings = this.settings;

    if (settings.initCommands) {
      SL.each(settings.initCommands, function(command) {
        var args = command.splice(2, command.length - 2);
        command = command.concat(
          SL.preprocessArguments(args, location, null, this.forceLowerCase)
        );
        this.call.apply(this, command);
      }, this);
    }
  },

  trackInitialPageView: function(){
    if (this.suppressInitialPageView || this.isPageCodeLoadSuppressed()) {
      return;
    }

    this.call('send', 'pageview');
  },

  call: function() {
    if (typeof ga !== 'function') {
      SL.notify('GA Universal function not found!', 4);
      return;
    }

    if (this.isCallSuppressed()) {
      return;
    }

    arguments[0] = this.cmd(arguments[0]);
    this.log(SL.toArray(arguments));
    ga.apply(window, arguments);
  },

  isCallSuppressed: function() {
    return this._cancelToolInit === true;
  },

  $missing$: function(command, elm, evt, args) {
    args = args || [];

    args = [command].concat(args);
    this.call.apply(this, args);
  },

  getToolUrl: function() {
    var settings = this.settings;
    var isHttps = SL.isHttps();

    if (settings.url) {
      return isHttps ? settings.url.https : settings.url.http;
    }

    return (isHttps ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
  },

  cmd: function(command) {
    var trackerCommands = ['send', 'set', 'get'];
    var trackerName = this.getTrackerName();

    if (!trackerName || SL.indexOf(trackerCommands, command) === -1) {
      return command;
    }

    return trackerName + '.' + command;
  },

  log: function(args) {
    var cmd = args[0];
    var tracker = this.getTrackerName() || 'default';

    var msg = 'GA Universal: sent command ' + cmd + ' to tracker ' + tracker;
    if (args.length > 1) {
      var parameters = SL.stringify(args.slice(1));
      msg += ' with parameters ' + SL.stringify(args.slice(1));
    }
    msg += '.';
    SL.notify(msg, 1);
  }
});

SL.availableTools.ga_universal = GAUniversalTool;

// Google Analytics Tool
// ---------------------
//
// The GATool allows you to use any Google Analytics command.
// Example:
//
//      trigger: [
//          {
//              tool: "ga",
//              command: "trackEvent",
//              arguments: [
//                  "video",
//                  "video 10% complete"
//              ]
//          }
//      ]
//
// This trigger will call the `trackEvent` method, which is equivalent to
//
//     _gaq.push(['_trackEvent', 'video', 'video 10% complete'])
function GATool(settings){
  SL.BaseTool.call(this, settings)
}
SL.inherit(GATool, SL.BaseTool)
SL.extend(GATool.prototype, {
  name: 'GA',
  initialize: function(){
    var settings = this.settings
    var before = window._gaq
      , initCommands = settings.initCommands || []
      , customInit = settings.customInit

    if (!before){
      // And yes, I *do* mean to set a global variable
      // of `_gaq` here
      _gaq = []
    }

    if (!this.isSuppressed()){
      if (!before && !GATool.scriptLoaded){
        var https = SL.isHttps()
        var url =
          (https ? 'https://ssl' : 'http://www') +
          '.google-analytics.com/ga.js'
        if (settings.url){
          url = https ? settings.url.https : settings.url.http
        }
        SL.loadScript(url)
        GATool.scriptLoaded = true
        SL.notify('GA: page code loaded.', 1)
      }
      var domain = settings.domain
        , trackerName = settings.trackerName
        , allowLinker = GAUtils.allowLinker()
        , account = SL.replace(settings.account, location)
        , domainList = SL.settings.domainList || []
      _gaq.push([this.cmd('setAccount'), account])
      if (allowLinker)
        _gaq.push([this.cmd('setAllowLinker'), allowLinker])
      _gaq.push([this.cmd('setDomainName'), GAUtils.cookieDomain()])
      SL.each(initCommands, function(cmd){
        var arr = [this.cmd(cmd[0])].concat(SL.preprocessArguments(cmd.slice(1), location, null, this.forceLowerCase))
        _gaq.push(arr)
      }, this)
      if (customInit)
        this.suppressInitialPageView = false === customInit(_gaq, trackerName)
      if (settings.pageName)
        this.$overrideInitialPageView(null, null, settings.pageName)
    }else{
      SL.notify('GA: page code not loaded(suppressed).', 1)
    }

    this.initialized = true
    SL.fireEvent(this.id + '.configure', _gaq, trackerName)

  },
  isSuppressed: function(){
    return this._cancelToolInit || this.settings.initTool === false
  },
  tracker: function(){
    return this.settings.trackerName
  },
  cmd: function(cmd){
    var tracker = this.tracker()
    return tracker ? tracker + '._' + cmd : '_' + cmd
  },
  $overrideInitialPageView: function(elm, evt, url){
    this.urlOverride = url
  },
  trackInitialPageView: function(){
    if (this.isSuppressed()) return
    if (this.suppressInitialPageView) return
    if (this.urlOverride){
      var args = SL.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase)
      this.$missing$('trackPageview', null, null, args)
    }else{
      this.$missing$('trackPageview')
    }
  },
  endPLPhase: function(pageLoadEvent){
    var loadOn = this.settings.loadOn
    if (pageLoadEvent === loadOn){
      SL.notify('GA: Initializing at ' + pageLoadEvent, 1)
      this.initialize()
      this.flushQueue()
      this.trackInitialPageView()
    }
  },
  call: function(cmd, elm, evt, args){
    if (this._cancelToolInit) return
    var settings = this.settings
      , tracker = this.tracker()
      , fullCmd = this.cmd(cmd)
      , args = args ? [fullCmd].concat(args) : [fullCmd]
    _gaq.push(args)
    if (tracker)
      SL.notify("GA: sent command " + cmd + " to tracker " + tracker +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]" :
          '') + ".", 1)
    else
      SL.notify("GA: sent command " + cmd +
        (args.length > 1 ?
          " with parameters [" + args.slice(1).join(', ') + "]":
          '') + ".", 1)
  },
  $missing$: function(cmd, elm, evt, args){
    this.call(cmd, elm, evt, args)
  },
  // individual command methods
  $postTransaction: function(elm, evt, varname){
    var trans = SL.data.customVars.transaction = window[varname]
    this.call('addTrans', elm, evt, [
      trans.orderID,
      trans.affiliation,
      trans.total,
      trans.tax,
      trans.shipping,
      trans.city,
      trans.state,
      trans.country
    ])
    SL.each(trans.items, function(item){
      this.call('addItem', elm, evt, [
        item.orderID,
        item.sku,
        item.product,
        item.category,
        item.unitPrice,
        item.quantity
      ])
    }, this)
    this.call('trackTrans', elm, evt)
  },
  delayLink: function(elm, evt){
    var ga = this
    if (!GAUtils.allowLinker()) return
    if (!elm.hostname.match(this.settings.linkerDomains)) return
    if (SL.isSubdomainOf(elm.hostname, location.hostname)) return
    SL.preventDefault(evt)
    var linkDelay = SL.settings.linkDelay || 100
    setTimeout(function(){
      ga.call('link', elm, evt, [elm.href])
    }, linkDelay)
  },
  popupLink: function(elm, evt){
    if (!window._gat) return
    SL.preventDefault(evt)
    var account = this.settings.account
    var tracker = window._gat._createTracker(account)
    var url = tracker._getLinkerUrl(elm.href)
    window.open(url)
  },
  $link: function(elm, evt){
    if (elm.getAttribute('target') === '_blank'){
      this.popupLink(elm, evt)
    }else{
      this.delayLink(elm, evt)
    }
  },
  $trackEvent: function(elm, evt){
    var args = Array.prototype.slice.call(arguments, 2)
    if (args.length >= 4 && args[3] != null){
      // acertain that the 4th element is a number, falling back to 1
      var value = parseInt(args[3], 10)
      if (SL.isNaN(value)){
        value = 1
      }
      args[3] = value
    }
    this.call('trackEvent', elm, evt, args)
  }
})
SL.availableTools.ga = GATool


_satellite.init({
  "tools": {
    "59bf2791171382e460963d1f2ca4a56e": {
      "engine": "ga_universal",
      "pageName": "%URI%",
      "forceLowerCase": true,
      "euCookie": false,
      "loadOn": "pagebottom",
      "initCommands": [
        [
          "set",
          "hitCallback",
          function(){
_satellite.notify( "GA UNIVERSAL PIXEL FIRED" );
}
        ]
      ],
      "trackerSettings": {
        "trackingId": "UA-57307274-1",
        "name": "59bf2791171382e460963d1f2ca4a56e",
        "allowAnchor": false
      }
    },
    "55c8460739a364dbff8d79f52d6ca9a3": {
      "engine": "sc",
      "loadOn": "pagebottom",
      "account": "aaas.sciencemag",
      "euCookie": false,
      "sCodeURL": "926659a1689cc9fca96760b67cca714ae48f0584/s-code-contents-325d54ac1d8b061a29ba0242b53a2f6fac7e9e18.js",
      "initVars": {
        "trackingServer": "metric.sciencemag.org",
        "trackingServerSecure": "metrics.sciencemag.org",
        "pageName": "%PageName_CustomScript%",
        "trackInlineStats": true,
        "trackDownloadLinks": true,
        "linkDownloadFileTypes": "avi,css,csv,doc,docx,eps,exe,js,m4v,mov,mp3,pdf,ppt,pptx,rar,svg,tab,txt,vsd,vxd,wav,wma,wmv,xls,xlsx,xml,zip",
        "trackExternalLinks": true,
        "linkInternalFilters": "%Subdomain.Domain.TopLevel%,aaas.org,sciencemag.org",
        "linkLeaveQueryString": false,
        "dynamicVariablePrefix": "D=",
        "eVar3": "%utm_source%",
        "eVar4": "%utm_medium%",
        "eVar5": "%utm_term%",
        "eVar6": "%utm_content%",
        "eVar11": "%Link Section%",
        "eVar12": "%Link Text%",
        "eVar22": "%Percent Page Viewed%",
        "prop1": "%Subdomain.Domain.TopLevel%",
        "prop2": "%BrowserTitle%",
        "prop6": "%ParameterString%",
        "prop3": "%GA-UA-ACCT-ID%",
        "prop21": "%Volume Meta%",
        "prop22": "%Issue Meta%",
        "prop32": "%Node-shortlink%"
      },
      "customInit": function(s){
/* Plugins */
/*
 *  Plug-in: crossVisitParticipation v1.7 - stacks values from
 *  specified variable in cookie and returns value
 */
s.crossVisitParticipation=new Function("v","cn","ex","ct","dl","ev","dv",""
+"var s=this,ce;if(typeof(dv)==='undefined')dv=0;if(s.events&&ev){var"
+" ay=s.split(ev,',');var ea=s.split(s.events,',');for(var u=0;u<ay.l"
+"ength;u++){for(var x=0;x<ea.length;x++){if(ay[u]==ea[x]){ce=1;}}}}i"
+"f(!v||v==''){if(ce){s.c_w(cn,'');return'';}else return'';}v=s.escape("
+"v);var arry=new Array(),a=new Array(),c=s.c_r(cn),g=0,h=new Array()"
+";if(c&&c!=''){arry=s.split(c,'],[');for(q=0;q<arry.length;q++){z=ar"
+"ry[q];z=s.repl(z,'[','');z=s.repl(z,']','');z=s.repl(z,\"'\",'');arry"
+"[q]=s.split(z,',')}}var e=new Date();e.setFullYear(e.getFullYear()+"
+"5);if(dv==0&&arry.length>0&&arry[arry.length-1][0]==v)arry[arry.len"
+"gth-1]=[v,new Date().getTime()];else arry[arry.length]=[v,new Date("
+").getTime()];var start=arry.length-ct<0?0:arry.length-ct;var td=new"
+" Date();for(var x=start;x<arry.length;x++){var diff=Math.round((td."
+"getTime()-arry[x][1])/86400000);if(diff<ex){h[g]=s.unescape(arry[x][0"
+"]);a[g]=[arry[x][0],arry[x][1]];g++;}}var data=s.join(a,{delim:',',"
+"front:'[',back:']',wrap:\"'\"});s.c_w(cn,data,e);var r=s.join(h,{deli"
+"m:dl});if(ce)s.c_w(cn,'');return r;");
/*
 * Utility Function: split v1.5 (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");
/*
 * Plugin Utility: Replace v1.0
 */
s.repl=new Function("x","o","n",""
+"var i=x.indexOf(o),l=n.length;while(x&&i>=0){x=x.substring(0,i)+n+x."
+"substring(i+o.length);i=x.indexOf(o,i+l)}return x");
/*
 * s.join: 1.0 - Joins an array into a string
 */
s.join = new Function("v","p",""
+"var s = this;var f,b,d,w;if(p){f=p.front?p.front:'';b=p.back?p.back"
+":'';d=p.delim?p.delim:'';w=p.wrap?p.wrap:'';}var str='';for(var x=0"
+";x<v.length;x++){if(typeof(v[x])=='object' )str+=s.join( v[x],p);el"
+"se str+=w+v[x]+w;if(x<v.length-1)str+=d;}return f+str+b;");
}
    },
    "52da706d0efa1588b1bab88155f5500b6186659b": {
      "engine": "visitor_id",
      "loadOn": "pagetop",
      "name": "VisitorID",
      "mcOrgId": "242B6472541199F70A4C98A6@AdobeOrg",
      "autoRequest": true,
      "initVars": {
        "trackingServer": "metric.sciencemag.org",
        "trackingServerSecure": "metrics.sciencemag.org",
        "marketingCloudServer": "metric.sciencemag.org",
        "marketingCloudServerSecure": "metrics.sciencemag.org"
      },
      "customerIDs": {
        "memberid": {
          "id": "%membership ID%",
          "authState": "AUTHENTICATED"
        }
      }
    }
  },
  "pageLoadRules": [
    {"name":"2016-12 Popover - Donate (Intercept)","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar44":"nov16drive slideover"}]},{"engine":"sc","command":"addEvent","arguments":["event5"]},{"command":"writeHTML","arguments":[{"html":"\u003cdiv id=\"int_wrapper\" style=\"position: absolute; margin: 800px 0px 0px 0px; top: 0; left: 0; z-index: 3;\"\u003e\n  \u003cdiv id=\"int_elements\" style=\"width: 675px; overflow: hidden;\"\u003e\n\t\t\u003cimg src=\"http://sciencestatic.aws.aaas.org.s3.amazonaws.com/quickimages/survey_button.png\" id=\"iaa_button\" alt=\"\" style=\"position: absolute;\" \n\t\t/\u003e\u003ca href=\"https://www.supportaaas.org/science?intcmp=dec16drive_slideover\"\u003e\u003cimg src=\"http://sciencestatic.aws.aaas.org.s3.amazonaws.com/quickimages/dec16_drive.gif\" id=\"iaa_banner\" alt=\"\" style=\"border: 0px; margin: 2px 0px 0px -650px;\" \n\t\t/\u003e\u003c/a\u003e\u003ca href=\"#\"id=\"iaa_close_a\"\u003e\u003cimg src=\"http://sciencestatic.aws.aaas.org.s3.amazonaws.com/quickimages/iaa_close.png\" id=\"iaa_close\" alt=\"\" style=\"border: 0px; position: absolute; margin: 15px 0px 0px -70px; display: none;\" /\u003e\u003c/a\u003e\n\n  \t\u003cscript type=\"text/javascript\"\u003e\n    \tvar started = 'no';\n\n\t\t\t/* Slide in */\n\nfunction iaa_start() {\n  var top = (window.scrollY || window.pageYOffset);\n\tvar iaa_off = document.getElementById('int_wrapper').offsetTop - top;\n  if(iaa_off \u003c 100 \u0026\u0026 started == 'no') {\n    started = 'yes';\n  \tdocument.getElementById('int_wrapper').style.position=\"fixed\";\n    document.getElementById('int_wrapper').style.marginTop=\"0px\";    \n    document.getElementById('int_wrapper').style.top=\"100px\";\n    iaa_slide_in();\n  }\n}\n\n/* Slide out */\n\nfunction iaa_slide_in() {\n  var mleft = Number(document.getElementById('iaa_banner').style.marginLeft.replace('px', ''));\n\tdocument.getElementById('iaa_banner').style.width=\"650px\";\n  \n  if(mleft \u003c 25) {\n    document.getElementById('iaa_banner').style.marginLeft=(mleft + 25) + \"px\";\n    setTimeout(iaa_slide_in, 10);\n  } else {\n    document.getElementById('iaa_close').style.display=\"inline\";    \n    setTimeout(iaa_slide_out, 5000);\n  }\n}\n  \nfunction iaa_slide_out() {\n  var len = document.querySelectorAll(':hover').length;\n  var hover = 'no';\n  for(var i = 0; i \u003c len; i++) {\n    if(document.querySelectorAll(':hover')[i].id.match(/iaa_/i) != null) {\n    \thover = 'yes';\n    }\n  }\n    \n  if(hover == 'no') {\n    document.getElementById('iaa_close').style.display=\"none\";      \n    var mleft = Number(document.getElementById('iaa_banner').style.marginLeft.replace('px', ''));\n\n    if(mleft \u003e -650) {\n      document.getElementById('iaa_banner').style.marginLeft=(mleft - 25) + \"px\";\n      setTimeout(iaa_slide_out, 10);\n    } else {\n      document.getElementById('iaa_banner').style.width=\"0\";\n    }\n  }\n}\n\n/* Listeners */\n\n//window.onload = function() {\n\tdocument.onscroll = iaa_start;\n//}\n\n/* Close button */\n\ndocument.getElementById('iaa_close_a').onclick = function(){\n  document.getElementById('iaa_close').style.display=\"none\"; \n\tdocument.getElementById('iaa_banner').style.marginLeft=\"-650px\";\n  return false;\n};\n\n/* Button (sidebar) mouse over - banner shoud slide in */\n\ndocument.getElementById('iaa_button').onmouseover = function(){\n  iaa_slide_in();\n};\n\n/* IE quirk */\n\ndocument.getElementById('iaa_close_a').onmouseover = function(){\n  iaa_slide_in();\n};\n\n/* Banner mouse out - banner shoud slide out/disappear */\n\ndocument.getElementById('iaa_banner').onmouseout = function(){\n  setTimeout(iaa_slide_out, 25);\n};\n    \u003c/script\u003e\n  \u003c/div\u003e  \n\u003c/div\u003e"}]}],"scope":{"subdomains":{"include":["scienceqa.aws.aaas.org"]}},"conditions":[function(){
return ["Desktop"].indexOf(_satellite.browserInfo.deviceType) !== -1;
},function(){
return _satellite.textMatch(_satellite.getQueryParam('inttest'), "y")
}],"event":"pagetop"},
    {"name":"Ad block detect","trigger":[{"engine":"sc","command":"customSetup","arguments":[function(event,s){
function AdBlockEnabled() {
  var ad = document.createElement('ins');
  ad.className = 'AdSense';
  ad.style.display = 'block';
  ad.style.position = 'absolute';
  ad.style.top = '-1px';
  ad.style.height = '1px';
  document.body.appendChild(ad);
  var isAdBlockEnabled = !ad.clientHeight;
  document.body.removeChild(ad);
  return isAdBlockEnabled;
}

if(AdBlockEnabled()) {
	var blocked = 'blocked';
} else {
	var blocked = 'not blocked';
}

s.prop27 = blocked;

if(typeof _satellite.readCookie('adblock') === "undefined") {
	_satellite.setCookie('adblock', blocked);
}
}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5772aeee64746d7f84002cab.js"}]}]}],"event":"pagebottom"},
    {"name":"Ad view","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar40":"adtop=%adtop%|adright2=%adright2%|adx51=%adx51%|adx30=%adx30%","prop33":"%adload%"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("adblock"), "not blocked");
},function(event,target){
var ret = false;

if(typeof _satellite.readCookie('adx51') !== "undefined" || typeof _satellite.readCookie('adx30') !== "undefined" || typeof _satellite.readCookie('adtop') !== "undefined" || typeof _satellite.readCookie('adright2') !== "undefined" || typeof _satellite.readCookie('adload') !== "undefined") {
  ret = true;

  var adx51 = 'false';
  var adx30 = 'false';
 	var adtop = 'false';
 	var adright2 = 'false';
 	var adload = 'None';  
  
  if(typeof _satellite.readCookie('adx51') !== "undefined") {
		adx51 = 'true';
  }
  if(typeof _satellite.readCookie('adx30') !== "undefined") {
  	adx30 = 'true';
  }
  if(typeof _satellite.readCookie('adtop') !== "undefined") {
  	adtop = 'true';
  }
  if(typeof _satellite.readCookie('adright2') !== "undefined") {
  	adright2 = 'true';
  } 
  if(typeof _satellite.readCookie('adload') !== "undefined") {
  	adload = _satellite.readCookie('adload');
  }   
  
  _satellite.setVar('adx51',adx51);
  _satellite.setVar('adx30',adx30);
  _satellite.setVar('adtop',adtop);
  _satellite.setVar('adright2',adright2);  
  _satellite.setVar('adload',adload);    
}


if(typeof _satellite.readCookie('adviewdone') !== "undefined") {
	ret = false;
} else {
	_satellite.setCookie('adviewdone',1);
}
  
return ret;
}],"event":"domready"},
    {"name":"Adobe Target","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5addff4d64746d7e310059f4.js"}]}]}],"scope":{"URI":{"include":[/be-a-science-superhero|be_a_science_superhero/i]},"subdomains":{"include":["promo"]}},"event":"pagetop"},
    {"name":"Adobe Target Mbox","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56aa652364746d73d8001517.js"}]}]}],"scope":{"URI":{"include":[/tomorrows-science-needs-advocates|tomorrows-science-needs-you/i]},"subdomains":{"include":["promo"]}},"event":"pagetop"},
    {"name":"All Pages - Bottom","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar10":"D=v26","eVar21":"%Page Load Time%","eVar33":"%membership ID%","eVar36":"%et_rid%","eVar37":"%et_cid%","prop26":"%Page Type%","prop74":"%isInternalURL%"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-542d911c45c922556400047f.js"},{"src":"satellite-570fd05564746d61d8006504.js"},{"src":"satellite-570fdfe364746d08ad006707.js"},{"src":"satellite-5819f93164746d492400e3d7.js"}]}]}],"event":"pagebottom"},
    {"name":"All Pages - Top","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar71":"%Page URL%","prop75":"%referring url%"}]}],"conditions":[function(event,target){
_satellite.pageStart = new Date().getTime();
_satellite.setCookie = function(e, t, i) {
    var a, cdp = 2, d = document.domain.split('.'), dom = [], n = document;
    if (i) {
      var r = new Date;
      r.setTime(r.getTime() + 24 * i * 60 * 60 * 1e3);
      a = "; expires=" + r.toGMTString();
    }
    else
      a = "";
    for(var j=d.length-1; j>=d.length-cdp; j--){
      dom.unshift(d[j]);
    }
    n.cookie = e + "=" + t + a + "; domain=."+dom.join(".")+"; path=/"
};
_satellite.getQueryParam = function(q){
  var params = document.location.search.substring(1).split('&'),
    param,
    value;
  for(var i=0; i<params.length; i++){
    param = params[i].split('=');
    if(param[0].toLowerCase() == q.toLowerCase()){
      value = param[1];
      continue;
    }
  }
  return value?(window.unescape?unescape(value):(window.decodeURIComponent?decodeURIComponent(value):value)):'';
};
return true;
}],"event":"pagetop"},
    {"name":"Authors","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop20":"%authors%"}]}],"scope":{"URI":{"exclude":[/^\/(index)?(\.html)?(\?.*)?$/i]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("authors"), /.+/i);
}],"event":"pagebottom"},
    {"name":"Blogs","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop20":"%blogger%"}]}],"scope":{"URI":{"include":["/2"]},"subdomains":{"include":[/blogs.sciencemag.org/i]}},"event":"pagebottom"},
    {"name":"Browser Mode","trigger":[{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.prop37 = _satellite.readCookie('bMode');
}]}],"scope":{"subdomains":{"include":[/sciencemag.org/i]}},"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("bMode"), /.+/i);
}],"event":"pagebottom"},
    {"name":"Browser Mode - Check","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003e\nfunction retry(isDone, next) {\n  var current_trial = 0,\n    max_retry = 50,\n    interval = 10,\n    is_timeout = false;\n  var id = window.setInterval(\n    function() {\n      if (isDone()) {\n        window.clearInterval(id);\n        next(is_timeout);\n      }\n      if (current_trial++ \u003e max_retry) {\n        window.clearInterval(id);\n        is_timeout = true;\n        next(is_timeout);\n      }\n    },\n    10\n  );\n}\n\nfunction isIE10OrLater(user_agent) {\n  var ua = user_agent.toLowerCase();\n  if (ua.indexOf('msie') === 0 \u0026\u0026 ua.indexOf('trident') === 0) {\n    return false;\n  }\n  var match = /(?:msie|rv:)\\s?([\\d\\.]+)/.exec(ua);\n  if (match \u0026\u0026 parseInt(match[1], 10) \u003e= 10) {\n    return true;\n  }\n  return false;\n}\n\nfunction detectPrivateMode(callback) {\n  var is_private;\n\n  if (window.webkitRequestFileSystem) {\n    window.webkitRequestFileSystem(\n      window.TEMPORARY, 1,\n      function() {\n        is_private = false;\n      },\n      function(e) {\n        console.log(e);\n        is_private = true;\n      }\n    );\n  } else if (window.indexedDB \u0026\u0026 /Firefox/.test(window.navigator.userAgent)) {\n    var db;\n    try {\n      db = window.indexedDB.open('test');\n    } catch (e) {\n      is_private = true;\n    }\n\n    if (typeof is_private === 'undefined') {\n      retry(\n        function isDone() {\n          return db.readyState === 'done' ? true : false;\n        },\n        function next(is_timeout) {\n          if (!is_timeout) {\n            is_private = db.result ? false : true;\n          }\n        }\n      );\n    }\n  } else if (isIE10OrLater(window.navigator.userAgent)) {\n    is_private = false;\n    try {\n      if (!window.indexedDB) {\n        is_private = true;\n      }\n    } catch (e) {\n      is_private = true;\n    }\n  } else if (window.localStorage \u0026\u0026 /Safari/.test(window.navigator.userAgent)) {\n    // Edge check\n\t\tif (!window.indexedDB \u0026\u0026 (window.PointerEvent || window.MSPointerEvent)) {\n      is_private = true;\n    }\n    \n    try {\n      window.localStorage.setItem('test', 1);\n    } catch (e) {\n      is_private = true;\n    }\n\n    if (typeof is_private === 'undefined') {\n      is_private = false;\n      window.localStorage.removeItem('test');\n    }\n  }\n\n  retry(\n    function isDone() {\n      return typeof is_private !== 'undefined' ? true : false;\n    },\n    function next(is_timeout) {\n      callback(is_private);\n    }\n  );\n}\n\ndetectPrivateMode(\n  function(is_private) {\n    var browseMode = is_private === 'undefined' ? 'undetected' : is_private ? 'private' : 'normal';\n    document.cookie = \"bMode=\" + browseMode;\n  }\n);\n\u003c/script\u003e"}]}],"scope":{"subdomains":{"include":[/sciencemag.org/i]}},"event":"pagetop"},
    {"name":"Career Development - Activate Key Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Career Development Activate Key"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":["activate-key"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"event":"pagebottom"},
    {"name":"Career Development - Checkout Complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Career Development Checkout","eVar27":"%cd_checkout_city%","state":"%cd_checkout_state%","zip":"%cd_checkout_zip%"}]},{"engine":"sc","command":"addEvent","arguments":["event11","purchase:%cd_order_no%"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products = _satellite.getVar('Career Development Products');
}]},{"command":"writeHTML","arguments":[{"html":"\u003cnoscript\u003e\u003cimg height=\"1\" width=\"1\" style=\"display:none\"\nsrc=\"https://www.facebook.com/tr?id=1568876670100680\u0026ev=PageView\u0026noscript=1\"\n/\u003e\u003c/noscript\u003e"},{"html":"\u003c!-- Google Code for Winter Campaign Conversion Page --\u003e\n\u003cscript type=\"text/javascript\"\u003e\n/* \u003c![CDATA[ */\nvar google_conversion_id = 1070768266;\nvar google_conversion_language = \"en\";\nvar google_conversion_format = \"3\";\nvar google_conversion_color = \"ffffff\";\nvar google_conversion_label = \"lXO4CLv2rWQQisHK_gM\";\nvar google_remarketing_only = false;\n/* ]]\u003e */\n\u003c/script\u003e\n\u003cscript type=\"text/javascript\" src=\"//www.googleadservices.com/pagead/conversion.js\"\u003e\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cdiv style=\"display:inline;\"\u003e\n\u003cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"//www.googleadservices.com/pagead/conversion/1070768266/?label=lXO4CLv2rWQQisHK_gM\u0026amp;guid=ON\u0026amp;script=0\"/\u003e\n\u003c/div\u003e\n\u003c/noscript\u003e"}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57582f9764746d6b8d00f3ce.js"}]}]}],"scope":{"URI":{"include":["order-received"],"exclude":["redirect_to"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var ret = false;

if(typeof _satellite.readCookie('cd_checkout_city') !== 'undefined') {
  _satellite.setVar('cd_checkout_city', _satellite.readCookie('cd_checkout_city'));
  _satellite.setVar('cd_checkout_state', _satellite.readCookie('cd_checkout_state'));
  _satellite.setVar('cd_checkout_zip', _satellite.readCookie('cd_checkout_zip'));

  //delete cookies
  _satellite.setCookie('cd_checkout_city','',-1);
  _satellite.setCookie('cd_checkout_state','',-1);
  _satellite.setCookie('cd_checkout_zip','',-1);  
  
  var cd_order_no = document.getElementsByClassName("order")[0].innerText.replace(/order number:/i,'').trim();
  _satellite.setVar('cd_order_no', cd_order_no);
  
  ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Career Development - Checkout Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Career Development Checkout"}]},{"engine":"sc","command":"addEvent","arguments":["event9","scCheckout"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products = _satellite.getVar('Career Development Products');
}]}],"scope":{"URI":{"include":["checkout"],"exclude":[/order-received|redirect_to/i]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"event":"domready"},
    {"name":"Career Development - Login Complete Read Cookie","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Career Development Login"}]},{"engine":"sc","command":"addEvent","arguments":["event31"]}],"conditions":[function(event,target){
var ret = false;

if(typeof _satellite.readCookie('cd_login') !== 'undefined') {
  _satellite.setCookie('cd_login','',-1); //delete cd_login cookie
  ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Career Development - Register Complete Read Cookie","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Career Development Register","eVar33":"%cdregform_membership_number%"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"conditions":[function(event,target){
var ret = false;

if(typeof _satellite.readCookie('cd_register') !== 'undefined') {
	_satellite.setVar('cdregform_membership_number', _satellite.readCookie('cd_register'));
  _satellite.setCookie('cd_register','',-1); //delete cd_register cookie
  ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Careers Tracker","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar11":"Careers - %careers_section%","eVar12":"%careers_link%"}]},{"engine":"sc","command":"addEvent","arguments":["event8"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58dab72b64746d396f00b839.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("Careers Link"), /.+/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("Careers Section"), /.+/i);
},function(event,target){
var careers_link = _satellite.readCookie('Careers Link');
var careers_section = _satellite.readCookie('Careers Section');

_satellite.setVar('careers_link', careers_link);
_satellite.setVar('careers_section', careers_section);

return true;
}],"event":"pagebottom"},
    {"name":"Careers keywords","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop16":"%careers_keyword_meta%"}]}],"scope":{"URI":{"include":[/careers\/([0-9]{4})/i]},"subdomains":{"include":["sciencemag.org"]}},"event":"pagebottom"},
    {"name":"Ccode","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5804e6ab64746d38fb0040da.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('ccode'), /.+/i)
},function(event,target){
var ret = false;

if(document.getElementsByName('ccode').length > 0) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Corresponding Authors","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop19":"%Corresponding Author Email%"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("Corresponding Author Email"), /.+/i);
}],"event":"pagebottom"},
    {"name":"DMC","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension12":"%DMC or CCODE%"}]},{"engine":"sc","command":"setVars","arguments":[{"eVar1":"%DMC_or_CCODE%"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("DMC_or_CCODE"), /.+/i);
}],"event":"pagebottom"},
    {"name":"DOI-PropSet","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension2":"%DOI%"}]},{"engine":"sc","command":"setVars","arguments":[{"eVar14":"%DOI%","prop7":"%DOI%"}]}],"scope":{"URI":{"exclude":["/search"]}},"conditions":[function(event,target){
var ret = true;

//exclude home page
if(document.location.pathname === "/") {
	ret = false;
}

return ret;
},function(){
return _satellite.textMatch(_satellite.getVar("DOI"), /.+/i);
}],"event":"pagebottom"},
    {"name":"Daily News - Email Signup Interstitial","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Daily News Signup - %int_ref%"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]},{"command":"loadScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5afb309c64746d62a00057f5.js"}]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-585af09e64746d59340014ca.js"}]}]}],"scope":{"URI":{"include":[/news\/20|ad-test|breakthrough2017/i,"vis.sciencemag.org/ad-test/"],"exclude":[/these-nine-different-creatures-have-been-named-after-barack-obama|quiz|march-science-live-coverage/i]},"subdomains":{"include":[/.+sciencemag.org/i]}},"conditions":[function(event,target){
var ret = true;
var referrer = document.referrer;
var int_msg = 'Get more great content like this delivered right to you!';
var int_ref = 'general';

//social
if(_satellite.getVar('utm_source').match(/(social|facebook|twitter|fb|tw)/) !== null) {
  var int_ref = 'social';
}

if(referrer.match(/(facebook|twitter|reddit)/) !== null) {
  var int_ref = 'social';
}

//adblock
if(_satellite.readCookie('adblock') === "block") {
  var int_msg = 'We know you like free content.  Get more delivered right to you!';
  var int_ref = 'ad blocker';
}

//paywall
if(typeof _satellite.readCookie('paywall_visitor') !== "undefined") {
  var int_msg = 'Get the best free access content from Science delivered right to you!';
  var int_ref = 'paywall visitor';
}
  
if(_satellite.readCookie( "daily_news_sub" ) === "true" ) {
  ret = false;
}

if(_satellite.getVar('utm_campaign').match(/news_daily_/)  !== null ) {
  ret = false;
}

if(ret === true) {
	_satellite.setVar('int_msg', int_msg);
	_satellite.setVar('int_ref', int_ref);  
}

return ret;
}],"event":"domready"},
    {"name":"Daily News Subscriber","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-585c3bd164746d575e00229a.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('utm_campaign'), /news_daily_/i)
}],"event":"pagebottom"},
    {"name":"Data Event - Section","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar11":"%data_event_section%"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("data_event_section"), /.+/i);
},function(event,target){
_satellite.setVar('data_event_section', _satellite.readCookie('data_event_section'));
_satellite.setCookie('data_event_section','',-1);

return true;
}],"event":"pagebottom"},
    {"name":"Eloqua","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-590b430d64746d0c75004c9b.js"}]}]}],"conditions":[function(event,target){
var ret = false;

if(window.location.hostname.match(/www.sciencemag.org/) !== null) {
	if(window.location.href.match(/careers\/for-employers|advertisers-form\/employers-request-advertising-info|about\/contact-us|\/advertisers$/) != null) {
  	ret = true;
  }
}

if(window.location.hostname.match(/employers.sciencecareers.org/) !== null) {
	ret = true;
}

if(window.location.hostname.match(/advertising.sciencemag.org/) !== null) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Expired Jobs ","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop40":"%jobName%"}]}],"conditions":[function(event,target){
if (_satellite.getVar('PageName_CustomScript').match('jobs.sciencecareers.org') !== null && document.getElementById('message') !== null && document.getElementById('message').innerText.match('no longer available') !== null){
	_satellite.setVar('jobName', document.getElementsByTagName('h1')[0].innerText);
  return true;
}
}],"event":"pagebottom"},
    {"name":"Facebook (FB) Analytics Pixel","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-59b2f67e64746d08f2009394.js"}]}]}],"event":"pagebottom"},
    {"name":"Facebook (FB) App detect","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop38":"Facebook"}]}],"conditions":[function(event,target){
var ret = false;
var ua = navigator.userAgent || navigator.vendor || window.opera;

if(ua.match(/(FBAN|FBAV)/) !== null) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Feedback Form Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"feedback"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":[/feedback/i]},"subdomains":{"include":[/sciencemag.org/i]}},"event":"pagetop"},
    {"name":"Floodlight - Careers - Science Careers","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Careers - Science Careers on https://jobs.sciencecareers.org/jobs/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/aaaswebs/caree00+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=aaaswebs;cat=caree00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/jobs\//i]}},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - About","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - About on https://www.forceforscience.org/about/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force005+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force005;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/about/i]},"domains":[/forceforscience\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - Issues","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - Issues on https://www.forceforscience.org/all-issues/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force00+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/all-issues/i]},"domains":[/forceforscience\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - What Can You Do - Attend An Event","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - What Can You Do - Attend An Event on https://www.forceforscience.org/events/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force004+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/events/i]},"domains":[/forceforscience\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - What Can You Do - Become a Member","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - What Can You Do - Become a Member on https://www.forceforscience.org/join-us/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force003+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/join-us/i]},"domains":[/forceforscience\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - What Can You Do - Donate","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - What Can You Do - Donate on https://www.supportaaas.org/keeping-an-eye-on-science: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force002+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/keeping-an-eye-on-science/i]},"domains":[/supportaaas\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - What Can You Do - Toolkit","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - What Can You Do - Toolkit on https://www.forceforscience.org/toolkit/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force001+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/toolkit/i]},"domains":[/forceforscience\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science - What We Are Doing","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science - What We Are Doing on https://www.forceforscience.org/evidence-based-policy/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force000+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/evidence-based-policy/i]},"domains":[/forceforscience\.org$/i]},"event":"pagebottom"},
    {"name":"Floodlight - Force For Science Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Force For Science Homepage on https://www.forceforscience.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/force0/force0+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=force0;cat=force0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"},{"html":"\u003cscript\u003e\n\tconsole.log(\"%cFloodlight - Force For Science Homepage fired\", \"color:#94b34b;\");\n\u003c/script\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.forceforscience.org");
}],"event":"pagebottom"},
    {"name":"Floodlight - Give Now Form","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Give Now Form on https://www.supportaaas.org/sslpage.aspx: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/aaaswebs/given0+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=aaaswebs;cat=given0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.supportaaas.org/sslpage.aspx");
}],"event":"pagebottom"},
    {"name":"Floodlight - Journals Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - Journals Content on http://science.sciencemag.org/content/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien003+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien003;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/content/i]},"subdomains":{"include":["science"],"exclude":["advances","stm","stke","immunology","robotics"]}},"event":"pagebottom"},
    {"name":"Floodlight - Journals Landing Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - Journals Landing Page on http://www.sciencemag.org/journals: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien002+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien002;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":["/journals"]}},"event":"pagebottom"},
    {"name":"Floodlight - Membership Promo Page","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Membership Promo Page on http://promo.aaas.org/...: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/aaaswebs/membe00b+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=aaaswebs;cat=membe00b;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"},{"html":"\u003cscript\u003e\n\tconsole.log(\"%cFloodlight - Membership Promo Page fired\", \"color:#94b34b;\");\n\u003c/script\u003e"}]}],"conditions":[function(event,target){
if (location.hostname == "promo.aaas.org") {
  return true;
} else {
  return false
}
}],"event":"pagebottom"},
    {"name":"Floodlight - News Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - News Content on http://www.sciencemag.org/news/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien001+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien001;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/news\//i]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Advances - Journals Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Advances - Journals Content on http://advances.sciencemag.org/content/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00a+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00a;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/content/i]},"subdomains":{"include":["advances"]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Advances Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Advances Homepage on http://advances.sciencemag.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00-+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00-;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "advances.:/");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Immunology - Journals Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Immunology - Journals Content on http://immunology.sciencemag.org/content/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00g+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00g;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/content/i]},"subdomains":{"include":["immunology"]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Immunology Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Immunology Homepage on http://immunology.sciencemag.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00f+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00f;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "immunology.:/");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine - Contact Us","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - Contact Us on http://www.sciencemag.org/about/contact-us: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien008+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien008;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/about\/contact-us/i]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine - My Account","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - My Account on http://www.sciencemag.org/subscribe/my-account: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien009+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien009;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/subscribe\/my-account/i]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine - News","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - News Landing Page on http://www.sciencemag.org/news: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien000+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien000;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine Become A Member - Promo ","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine Become A Member - Promo on http://promo.aaas.org/science/join/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/science\/join\//i]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine Careers","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine Careers on http://www.sciencemag.org/careers: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien006+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien006;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine Careers Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine Careers Content on http://www.sciencemag.org/careers/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien007+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien007;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/careers\//i]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Magazine Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine Homepage on http://www.sciencemag.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien0+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien0;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"},{"html":"\u003cscript\u003e\n\tconsole.log(\"%cFloodlight - Science Magazine Homepage fired\", \"color:#94b34b;\");\n\u003c/script\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Magazines Topics","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazine - Topics on http://www.sciencemag.org/topics: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien004+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien004;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"},{"html":"\u003cscript\u003e\n\tconsole.log(\"%cFloodlight - Science Magazine Topics fired\", \"color:#94b34b;\");\n\u003c/script\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/topics");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Robotics - Journals Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Robotics - Journals Content on http://robotics.sciencemag.org/content/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00i+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00i;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/content/i]},"subdomains":{"include":["robotics"]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Robotics Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Robotics Homepage on http://robotics.sciencemag.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00h+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00h;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "robotics.:/");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Signaling - Journals Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Signaling - Journals Content on http://stke.sciencemag.org/content/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00e+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00e;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/content/i]},"subdomains":{"include":["stke"]}},"event":"pagebottom"},
    {"name":"Floodlight - Science Signaling Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Signaling Homepage on http://stke.sciencemag.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00d+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00d;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "stke.:/");
}],"event":"pagebottom"},
    {"name":"Floodlight - Science Translational Medicine Homepage","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Translational Medicine Homepage on http://stm.sciencemag.org/: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00b+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00b;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "stm.:/");
}],"event":"pagebottom"},
    {"name":"Floodlight - Topics Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Magazines Topics Content on http://www.sciencemag.org/topics/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien005+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien005;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/topic\//i]}},"event":"pagebottom"},
    {"name":"Floodlight - Translational Medicine - Journals Content","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Science Translational Medicine - Journals Content on http://stm.sciencemag.org/content/…: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/sciecema/scien00c+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=sciecema;cat=scien00c;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"}]}],"scope":{"URI":{"include":[/\/content/i]},"subdomains":{"include":["stm"]}},"event":"pagebottom"},
    {"name":"Floodlilght - Promo Page - March","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003c!-- \nStart of global snippet: Please do not remove\nPlace this snippet between the \u003chead\u003e and \u003c/head\u003e tags on every page of your site.\n--\u003e\n\u003c!-- Global site tag (gtag.js) - DoubleClick --\u003e\n\u003cscript async src=\"https://www.googletagmanager.com/gtag/js?id=DC-8296686\"\u003e\u003c/script\u003e\n\u003cscript\u003e\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n\n  gtag('config', 'DC-8296686');\n\u003c/script\u003e\n\u003c!-- End of global snippet: Please do not remove --\u003e"},{"html":"\u003c!--\nEvent snippet for Membership Promo Page on http://promo.aaas.org/...: Please do not remove.\nPlace this snippet on pages with events you're tracking. \nCreation date: 12/13/2017\n--\u003e\n\u003cscript\u003e\n  gtag('event', 'conversion', {\n    'allow_custom_scripts': true,\n    'send_to': 'DC-8296686/aaaswebs/membe00b+standard'\n  });\n\u003c/script\u003e\n\u003cnoscript\u003e\n\u003cimg src=\"https://ad.doubleclick.net/ddm/activity/src=8296686;type=aaaswebs;cat=membe00b;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;ord=1?\" width=\"1\" height=\"1\" alt=\"\"/\u003e\n\u003c/noscript\u003e\n\u003c!-- End of event snippet: Please do not remove --\u003e"},{"html":"\u003cscript\u003e\n\tconsole.log(\"%cFloodlight - Promo page fired\", \"color:#94b34b;\");\n\u003c/script\u003e"}]}],"scope":{"URI":{"include":[/tomorrows--science--needs--advocates|\/tomorrows--science--needs--you|women-in-science/i]},"subdomains":{"include":["promo.aaas.org"]}},"event":"pagebottom"},
    {"name":"Force for Science - pass utm","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5902151364746d2dd200581c.js"}]}]}],"scope":{"subdomains":{"include":[/www.forceforscience.org/i]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('utm_campaign'), /.+/i)
},function(event,target){
var ret = false;

if(window.location.href.match(/\?dmc\=/) == null) {
	var ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Graphic Novel","trigger":[{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-54ef798c62373500195c0e00.js"}]}]}],"scope":{"URI":{"include":["/generalrelativity","prototypes/grc/"]},"subdomains":{"include":["spark.sciencemag.org"]}},"event":"pagebottom"},
    {"name":"HP Tracker","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar11":"HP - %hp_section%","eVar12":"%hp_link%"}]},{"engine":"sc","command":"addEvent","arguments":["event8"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d4b04464746d545a0019fc.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("HP Link"), /.+/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("HP Section"), /.+/i);
},function(event,target){
var hp_link = _satellite.readCookie('HP Link');
var hp_section = _satellite.readCookie('HP Section');

_satellite.setVar('hp_link', hp_link);
_satellite.setVar('hp_section', hp_section);

return true;
}],"event":"pagebottom"},
    {"name":"HighWireArticleEndView","trigger":[{"engine":"sc","command":"addEvent","arguments":["event7"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("endview"), "y");
},function(event,target){
_satellite.removeCookie('endview');

return true;
}],"event":"pagebottom"},
    {"name":"Hour Day","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop29":"%Hour%|%Day%"}]}],"event":"pagebottom"},
    {"name":"Immunology - FOCIS logo","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5787a21164746d0b160008df.js"}]}]}],"scope":{"subdomains":{"include":[/hw-f5-immunology.highwire.org|immunology.sciencemag.org/i]}},"event":"pagebottom"},
    {"name":"Institutional User Cookie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57a4a2ae64746d1d01001622.js"}]}]}],"conditions":[function(event,target){
var ret = false;

if(/ist/.test(_satellite.getVar('Subscriber Institution'))) {
  	ret = true;
}

if(typeof _satellite.readCookie('ist_usr') != "undefined") {
  	ret = false;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Institutional/Librarian Quote - Complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Institution Lead"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"scope":{"URI":{"include":[/thank-you-your-interest/i]},"subdomains":{"include":["sciencemag.org"]}},"event":"pagetop"},
    {"name":"Institutional/Librarian Quote - Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Institution Lead"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":[/request-institutional-price-quote-or-complimentary-trial-online-resources/i]},"subdomains":{"include":["sciencemag.org"]}},"event":"pagetop"},
    {"name":"IntCmp","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension14":"%Intcmp%"}]},{"engine":"sc","command":"setVars","arguments":[{"eVar19":"%Intcmp%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.eVar20=s.crossVisitParticipation(s.eVar19,'s_v1','30','5','>','',0);
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('intcmp'), /.+/i)
}],"event":"pagebottom"},
    {"name":"Interactive Load","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar42":"%Interactive Name%","eVar43":"%Interactive Name%:load","prop34":"%Interactive Name%:load"}]},{"engine":"sc","command":"addEvent","arguments":["event46"]}],"conditions":[function(event,target){
if( document.querySelectorAll('[data-interactive-name]').length > 0 ) {
  return true;
}

return false
}],"event":"pagebottom"},
    {"name":"Jcore - Login error","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"%Subdomain.Domain.TopLevel% Login"}]},{"engine":"sc","command":"addEvent","arguments":["event30"]}],"scope":{"URI":{"include":[/login/i]},"subdomains":{"include":[/stm.sciencemag.org|stke.sciencemag.org|advances.sciencemag.org/i]}},"conditions":[function(event,target){
var ret = false; 

_satellite.cssQuery('.alert--error', function(el){
  if(el.length>0){
  	ret = true;
  }
});

return ret;
}],"event":"pagebottom"},
    {"name":"Jcore - Login start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"%Subdomain.Domain.TopLevel% Login"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":[/login/i]},"subdomains":{"include":[/stm.sciencemag.org|stke.sciencemag.org|advances.sciencemag.org/i]}},"conditions":[function(event,target){
var ret = true; 

_satellite.cssQuery('.alert--error', function(el){
  if(el.length>0){
  	ret = false;
  }
});

return ret;
}],"event":"pagebottom"},
    {"name":"Jcore - Login success","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"%Subdomain.Domain.TopLevel% Login"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"scope":{"URI":{"include":[/front/i]},"subdomains":{"include":[/stm.sciencemag.org|stke.sciencemag.org|advances.sciencemag.org/i]}},"conditions":[function(event,target){
var ret = false; 

var ref = document.referrer;

if(ref.match(/user\/login/)) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Jobs - Application External - Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar28":"External"}]},{"engine":"sc","command":"addEvent","arguments":["event20"]}],"scope":{"URI":{"include":[/apply\/([0-9]+)\//i]},"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"event":"pagebottom"},
    {"name":"Jobs - Application Internal - Complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar28":"Internal"}]},{"engine":"sc","command":"addEvent","arguments":["event21"]}],"scope":{"URI":{"include":[/job\/([0-9]+)\//i]},"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('Action'), "ShowConfirmation")
}],"event":"pagebottom"},
    {"name":"Jobs - Email Signup","trigger":[{"engine":"sc","command":"addEvent","arguments":["event23"]}],"scope":{"URI":{"include":["\\/searchjobs\\/|\\/jobs\\/|\\/newalert\\/\\?Action=Confirmation"]},"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"conditions":[function(event,target){
var ret = false;

if($('p.message').length) {
	var message_class = $('p.message').attr('class');
 	var message_text = $('p.message').text(); 
  if(message_class.match(/success/i) && message_text.match(/alert/i)) {
    ret = true;
  }
}

return ret;
}],"event":"pagebottom"},
    {"name":"Jobs - Login Error","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Jobs Login"}]},{"engine":"sc","command":"addEvent","arguments":["event30"]}],"scope":{"URI":{"include":["logon"]},"subdomains":{"include":["jobs.sciencecareers.org"]}},"conditions":[function(event,target){
var ret = false;

if($('p.message--error').length) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Jobs - Login Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Jobs Login"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":["logon"]},"subdomains":{"include":["jobs.sciencecareers.org"]}},"conditions":[function(event,target){
var ret = true;

if($('p.message--error').length !== 0) {
	ret = false;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Jobs - Login Success","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Jobs Login","prop12":"usr:jobs"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"scope":{"subdomains":{"include":["jobs.sciencecareers.org"]}},"conditions":[function(event,target){
var ret = false;

var uri = _satellite.URI();
var ref = document.referrer;

if(uri.split("?")[0] === "/" && ref.match(/logon/)) {
  ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Jobs - Registration Complete","trigger":[{"engine":"sc","command":"addEvent","arguments":["event22"]}],"scope":{"URI":{"include":[/register/i]},"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('Action'), "Confirmation")
}],"event":"pagebottom"},
    {"name":"Jobs - Stored Resumes","trigger":[{"engine":"sc","command":"addEvent","arguments":["event56"]}],"scope":{"URI":{"include":["/editprofile"]},"subdomains":{"include":["jobs.sciencecareers.org"]}},"conditions":[function(event,target){
var ret = false;
if(jQuery('#message.message--success').text().trim() == "Resume Saved"){
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Jobs - Updated Stored Resume","trigger":[{"engine":"sc","command":"addEvent","arguments":["event57"]}],"scope":{"URI":{"include":["/editprofile"]},"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"conditions":[function(event,target){
var ret = false;
if(jQuery('#message.message--success').text().trim() == "Your resume has been uploaded"){
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"LinkedIn - AAAS tracking","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript type=\"text/javascript\"\u003e\n_linkedin_data_partner_id = \"34324\";\n\u003c/script\u003e\u003cscript type=\"text/javascript\"\u003e\n(function(){var s = document.getElementsByTagName(\"script\")[0];\nvar b = document.createElement(\"script\");\nb.type = \"text/javascript\";b.async = true;\nb.src = \"https://snap.licdn.com/li.lms-analytics/insight.min.js\";\ns.parentNode.insertBefore(b, s);})();\n\u003c/script\u003e"}]}],"scope":{"domains":[/aaas\.org$/i]},"event":"pagebottom"},
    {"name":"Load SDI Helper Functions","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003eif( typeof _sdi == 'undefined' ) { _sdi = {} }\u003c/script\u003e"},{"html":"\u003cscript\u003e\n  // Load SDI Data Layer Functions\n\nif( typeof digitalData == 'undefined' ) { digitalData = {} }\n\n_sdi.ddoSetVar = function(p, v) {\n\tfor (var nodes = p.split(\".\"), cursor = digitalData, i = 0; i \u003c nodes.length - 1; i++)\n\t\tcursor[nodes[i]] || (cursor[nodes[i]] = {}),\n            cursor = cursor[nodes[i]];\n    return cursor[nodes[nodes.length-1]] = v,\n\tcursor[nodes[nodes.length-1]]\n}\n\n_sdi.ddoGetVar = function(p) {\n  for (var cursor = digitalData, bits = p \u0026\u0026 \"digitalData\" !== p ? p.split(\".\") : \"\", i = 0; i \u003c bits.length; i++) {\n    if (\"undefined\" == typeof cursor[bits[i]]) {\n      cursor = void 0;\n      break\n    }\n    cursor = cursor[bits[i]]\n  }\n  return cursor;\n}\n\n_sdi.ddoDefault = function(p,v) {\n  if( typeof _sdi.ddoGetVar(p) == \"undefined\" ) {\n    _sdi.ddoSetVar(p,v);\n  }\n  return _sdi.ddoGetVar(p);\n}\n\n_sdi.ddoDefaults = function( _ddoDefaults ) {\n  for( o in _ddoDefaults ) { \n    _sdi.ddoDefault(o,_ddoDefaults[o]);\n  }\n}\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\n// load SDI random string generator\n\n_sdi.randomString = function(length) {\n  //var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~!@#$%^\u0026*()_-+={[}]|:;\u003c,\u003e.?/\\|';\n  var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\n  var result = '';\n  for (var i = length; i \u003e 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];\n  return result;\n}\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\n// return a three character representation of today's date\n\n_sdi.dateCode3 = function( d ) {\n  var today = d ? new Date(d) : new Date();\n\tvar monthCodes = '1234567890AB';\n\tvar dayCodes = '1234567890ABCDEFGHIJKLMNOPQRSTU';\n\treturn( \n         today.getFullYear().toString().charAt(3) \n         + monthCodes.charAt(today.getMonth()) \n         + dayCodes.charAt(today.getDate()-1) \n        );\n}\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\n// milliseconds to midnight function\n// useful for using _satellite.setCookie() to expire at 11:59 PM tonight\n// _satellite.setCookie('cname','cvalue', _sdi.msToMidnight / (24*60*60*1000)\n\n_sdi.msToMidnight = function() {\n\tvar now = new Date();\n\tvar hours = (24-now.getHours())*60*60;\n\tvar minutes = (60-now.getMinutes())*60;\n\tvar seconds = 60-now.getSeconds();\n\tvar milliseconds = ( hours + minutes + seconds ) * 1000; \n  \n  return milliseconds;\n}\n\u003c/script\u003e"}]}],"event":"pagetop"},
    {"name":"Madgex ","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5629278a64746d2a4d0005e3.js"}]}]}],"scope":{"URI":{"include":[/careers|amgen|thermo-fisher-scientific/i]},"subdomains":{"include":["scienceprod.aws.aaas.org|sciencemag.dev|sciencedev.aaas.org|www.sciencemag.org"]}},"event":"domready"},
    {"name":"Member Expiry - preview","trigger":[{"engine":"sc","command":"customSetup","arguments":[function(event,s){
//s.eVar48=_satellite.readCookie('mem_exp');
}]},{"command":"loadBlockingScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-59b6fb2664746d52050078af.js"}]}]}],"scope":{"subdomains":{"include":["scienceqa.aws.aaas.org"]}},"conditions":[function(event,target){
var ret = false;

if(_satellite.getQueryParam('mexp') === "y") {
 		ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Membership Splash","trigger":[{"engine":"sc","command":"addEvent","arguments":["event49:%serialize_day_user%"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products=';Membership';
}]}],"scope":{"URI":{"include":[/membercentral\/join-aaas/i]},"subdomains":{"include":["aaas.org"]}},"event":"pagebottom"},
    {"name":"Membership Splash - Info","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar26":"%memcategory%"}]},{"engine":"sc","command":"addEvent","arguments":["event49:%serialize_day_user%"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products=';Membership';
}]}],"scope":{"URI":{"include":[/(regular-member|postdoc-member|student-member|teacher-member|retired-member|science-advocate)/i]},"subdomains":{"include":["aaas.org"]}},"event":"pagebottom"},
    {"name":"Meta_article_type","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension1":"%ArticleType%"}]},{"engine":"sc","command":"setVars","arguments":[{"prop5":"%ArticleType%"}]}],"scope":{"subdomains":{"exclude":[/www.sciencemag.org|www.aaas.org/i]}},"event":"pagebottom"},
    {"name":"Meta_field_code","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension5":"%Field Code%"}]},{"engine":"sc","command":"setVars","arguments":[{"prop10":"%Field Code%"}]}],"scope":{"subdomains":{"exclude":[/www.sciencemag.org|www.aaas.org/i]}},"event":"pagebottom"},
    {"name":"Meta_news_keyword","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension8":"%News_keyword_meta%"}]},{"engine":"sc","command":"setVars","arguments":[{"prop16":"%News_keyword_meta%"}]}],"scope":{"URI":{"include":[/\/news\//i]}},"event":"pagebottom"},
    {"name":"Meta_news_section_temp","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop11":"%Temp-ScienceInsider%%AAAS Section%"}]}],"scope":{"URI":{"include":[/\/news\/|\/blog\//i]},"subdomains":{"include":["aaas.org|sciencemag.org"]}},"event":"pagebottom"},
    {"name":"Meta_overlines","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension3":"%Overline-Meta (Restored)%"}]},{"engine":"sc","command":"setVars","arguments":[{"prop8":"%Overline-Meta (Restored)%"}]}],"scope":{"subdomains":{"exclude":[/www.sciencemag.org|www.aaas.org/i]}},"event":"pagebottom"},
    {"name":"Meta_pubdate","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension4":"%publish_date%%PUB_DATE%"}]},{"engine":"sc","command":"setVars","arguments":[{"prop28":"%publish_date_age%","prop9":"%publish_date%"}]}],"conditions":[function(event,target){
var ret = false;

if(_satellite.getVar('publish_date') !== '') {
    ret = true;
}

return ret;
}],"event":"domready"},
    {"name":"Meta_volume_issue","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension9":"%Volume Meta%","dimension10":"%Issue Meta%"}]}],"event":"pagebottom"},
    {"name":"Microbiome/Microbiology Jobs","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57dabb3b64746d78bb010559.js"}]}]}],"scope":{"URI":{"include":[/topic\/microbiome/i]}},"event":"domready"},
    {"name":"News Article Tracker","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar11":"News Article - %news_article_section%","eVar12":"%news_article_link%"}]},{"engine":"sc","command":"addEvent","arguments":["event8"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706c63e64746d61d8003b38.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("News Article Link"), /.+/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("News Article Section"), /.+/i);
},function(event,target){
var news_link = _satellite.readCookie('News Article Link');
var news_section = _satellite.readCookie('News Article Section');

_satellite.setVar('news_article_link', news_link);
_satellite.setVar('news_article_section', news_section);

return true;
}],"event":"pagebottom"},
    {"name":"News Tracker","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar11":"%news_page% - %news_section%","eVar12":"%news_link%"}]},{"engine":"sc","command":"addEvent","arguments":["event8"]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706aa9364746d2111001939.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("News Link"), /.+/i);
},function(){
return _satellite.textMatch(_satellite.readCookie("News Section"), /.+/i);
},function(event,target){
var news_link = _satellite.readCookie('News Link');
var news_section = _satellite.readCookie('News Section');
var news_page = 'News Router';
if(news_section == 'Paragraph related') {
	news_page = 'News';
}
  
_satellite.setVar('news_link', news_link);
_satellite.setVar('news_section', news_section);
_satellite.setVar('news_page', news_page);

return true;
}],"event":"pagebottom"},
    {"name":"Newsletter footer","trigger":[{"command":"loadScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-56609cd764746d5ccc0014ed.js"},{"src":"satellite-5660a0b864746d5609003761.js"},{"src":"satellite-56d4d53d64746d545d0016a5.js"}]}]}],"scope":{"URI":{"exclude":["/news/subscriptions|/news/my-account"]},"subdomains":{"include":[/.+sciencemag.org|jnl-sci.+|drupal-stage.+|.+highwire.org|sciencedev.+|scienceqa.+/i],"exclude":["blogs.sciencemag.org"]}},"event":"domready"},
    {"name":"OAS (Expandable Hack)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-59f762fd64746d35d2008a9f.js"}]}]}],"conditions":[function(event,target){
var ret = false;

if(document.getElementById('aaas-oas_Top2') !== null) {
	ret = true;
}

return ret;
}],"event":"windowload"},
    {"name":"OAS Ads","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003e\n//console.log(\"oas.js: oas_tag.query = \"+oas_tag.query);\nfunction hawkeye_query(target) {\n  var result = '';\n  var content = target.content;\n  var content_length = content.length;\n\n  for (var i = 0; i \u003c content_length; i++) {\n    var item = content[i];\n\n    if (item != '') {\n      if (result != '') {\n        result += '\u0026';\n      }\n      result += \"content=\" + item;\n    }\n  }\n  return result;\n}\n\n\nfunction hawkeye_updateOASTagQuery(oasquery, target) {\n  var queryaddon = '';\n  var result = oasquery;\n\n  if (typeof target === 'object') {\n    queryaddon = hawkeye_query(target);\n\n    if ((typeof oasquery !== 'undefined') \u0026\u0026 (oasquery != '')) {\n      if (queryaddon != '') {\n        result = oasquery + \"\u0026\" + queryaddon;\n      }\n    }\n\n    else {\n      if (queryaddon != '') {\n        result = queryaddon;\n      }\n    }\n  }\n  return result;\n}\n\nif (typeof hawkeye_target !== 'undefined') {\n  oas_tag.query = hawkeye_updateOASTagQuery(oas_tag.query, hawkeye_target);\n}\n\noas_tag.url = 'oascentral.sciencemag.org'; // Define OAS URL\n\nvar site_page = _satellite.getVar('PageName_CustomScript').split(\"/\")[0].replace('.:','.sciencemag.org');\nvar site_path = document.location.pathname;\n\nif (location.host.indexOf('www.') === 0){\n  site_page = location.host.replace('www.','');\n}\n\nvar devsites = [\n  'localhost',\n  '0.0.0.0',\n  '127.0.0.1',\n  'dtmdemoads.dev',\n  'dmanalytics.aaas.org',\n  'hw-f5-immunology.highwire.org',\n  'jnl-aaas-sci.drupal-stage-jnl-web02.highwire.org',\n  'sci-stage-aaascodev.stage.highwire.org',\n//  'wwwdev.sciencemag.org',\n  'wwwqa.sciencemag.org',\n  'blogsdev.sciencemag.org',\n  'blogsqa.sciencemag.org',\n  'local.sciencemag.org'\n];\n\nfor (var i = 0; i \u003c devsites.length; i++) {\n  if (document.location.hostname === devsites[i]){\n    site_page = \"sciencedev.aaas.org\";\n    site_path = \"\";\n  }\n}\n\n//add front if landing page\nif (document.location.pathname === \"/\") {\n  site_page += \"/front\";\n  site_path = \"\";\n}\n\n//login pages\nif (document.location.pathname === \"/user/login\") {\n  site_page += \"/front\";\n  site_path = \"\";\n}\n\n//GHP\nif (document.location.hostname === \"www.sciencemag.org\" \u0026\u0026 document.location.pathname === \"/\") {\n  site_page = \"sciencemag.org\";\n  site_path = \"/ghp\"\n}\n\n//GHP (Dev)\n/*if (document.location.hostname === \"wwwdev.sciencemag.org\" \u0026\u0026 document.location.pathname === \"/\") {\n  site_page = \"sciencedev.aaas.org\";\n  site_path = \"/ghp\"\n}*/\n\nif (site_page === \"sciencemag.org\" \u0026\u0026 document.location.pathname === \"/news\") {\n  site_page = \"sciencemag.org/newshomepage\";\n  site_path = \"\";\n}\n\nif (site_page === \"sciencemag.org\" \u0026\u0026 document.location.pathname === \"/careers\") {\n  site_page = \"sciencemag.org/careershomepage\";\n   site_path = \"\";\n}\n\nif (site_page === \"blogs.sciencemag.org\" \u0026\u0026 document.location.pathname === \"/pipeline/\") {\n  site_page = \"blogs.sciencemag.org/pipelinehome\";\n  site_path = \"\";\n}\n\n/*if(site_path.match(/\\/features/)) {\n   site_path = \"/librarian\"; //force house ads\n}*/\n\n// Exclude list for x30 pos -- To be excluded from content pages\nvar x30excludeList = [\n  'science.sciencemag.org/content/',\n  'advances.sciencemag.org/content/',\n  'stm.sciencemag.org/content/',\n  'stke.sciencemag.org/content/',\n  'immunology.sciencemag.org/content/',\n  'robotics.sciencemag.org/content/'\n]\n\n// Set flag to exclude x30\nvar excludeX30 = false;\nfor (var i = 0; i \u003c x30excludeList.length; i++){\n  if (window.location.href.indexOf(x30excludeList[i]) \u003e= 0){\n    excludeX30 = true;\n    break;\n  }\n}\n\n\noas_tag.site_page = site_page + site_path;\n\nif (oas_tag.site_page.match(/^\\blocalhost{1}/)) {\n  var local_page = oas_tag.site_page.replace(/^\\blocalhost{1}/, \"wwwdev.sciencemag.org\");\n  oas_tag.site_page = local_page;\n  //oas_tag.reloadAds();\n};\n\noas_tag.allowSizeOverride = true; // Needed for responsive sizes\noas_tag.lazyload = false; // Async loading\noas_tag.anchorElementPrefix = \"aaas-oas\"; // This customization has been requested from HW for Jcore\noas_tag.analytics = true;\n\n(function() {\n  oas_tag.version ='1'; oas_tag.loadAd = oas_tag.loadAd || function(){}; var oas = document.createElement('script'),\n  protocol = 'https:' == document.location.protocol?'https://':'http://', node = document.getElementsByTagName('script')[0];\n  oas.type = 'text/javascript'; oas.async = true;\n  oas.src = protocol + oas_tag.url + '/om/' + oas_tag.version + '.js'; node.parentNode.insertBefore(oas, node);\n})();\n\noas_tag.sizes = function() {\n  var adCatch = document.querySelectorAll('[id^=\"aaas-oas_\"]');\n  var adActive = [];\n  var i;\n\n  for (i = 0; i \u003c adCatch.length; i++){\n    if(adCatch[i].id.indexOf('x30') \u003e 0){\n      if (!excludeX30){\n        adActive.push(adCatch[i].id);\n      }\n    } else {\n      adActive.push(adCatch[i].id);\n    }\n  }\n\n  var clip = adActive.toString();\n  var resorter = clip.replace(/aaas-oas_/g,\"\");\n  var regather = resorter.split(',');\n\n  var j;\n  var adWidth = 0;\n  var adHeight = 0;\n\n  for (j = 0; j \u003c regather.length; j++) {\n    if(regather[j] === \"Top\") {\n      adWidth = 728;\n      adHeight = 90;\n    }\n\n    else if (regather[j] === \"Top2\") {\n      adWidth = 970;\n      adHeight = 1;\n    }\n\n    else if (regather[j] === \"Right2\") {\n      adWidth = 300;\n      adHeight = 600;\n    }\n\n    else if (regather[j] === \"x30\") {\n      adWidth = 1280;\n      adHeight = 60;\n    }\n\n    else if (regather[j] === \"x51\") {\n      adWidth = 300;\n      adHeight = 250;\n    }\n\n    else if (regather[j] === \"x60\") {\n      adWidth = 300;\n      adHeight = 250;\n    }\n\n    else if (regather[j] === \"x31\") {\n      adWidth = 100;\n      adHeight = 100;\n    }\n\n    else{\n      adWidth = 300;\n      adHeight = 125;\n    }\n\n    oas_tag.definePos(regather[j],  [adWidth, adHeight]);\n  }\n};\n\nvar sheet = (function() {\n  var style = document.createElement(\"style\");\n  style.appendChild(document.createTextNode(\"\"));\n  document.head.appendChild(style);\n  return style.sheet;\n})();\n\nsheet.insertRule(\"[id^=aaas-oas]:not(#aaas-oas_x30) { position: relative; }\", 0);\n\nsheet.insertRule(\".ad__label {position: relative; font-size: .75rem; font-family: Benton Sans, Helvetica, Arial, sans-serif; margin: 0; text-align: center; line-height: 1.1; color: gray; }\", 0);\n\nsheet.insertRule(\"#aaas-oas_Top .ad__label {color: white;}\", 0);\n\nsheet.insertRule(\"#aaas-oas_Top2 .ad__label {padding: .2rem; text-align: left; top: 0; left: 0; position: absolute; color: gray; width: 25px;}\", 0);\n\nsheet.insertRule(\"#aaas-oas_Top2 { background-color: #ffffff; width: 970px; text-align: center; }\", 0);\n\n//sheet.insertRule(\"#aaas-oas_Top2 { background-color: #e6e6e6; width: 970px; text-align: center; position: static; }\", 0);\n\n//sheet.insertRule(\"#aaas-oas_Top2 .billboard--closead {font-size: .75rem; font-family: Helvetica, Arial, sans-serif; color: white; width: 100px; float: right; position: relative; top: 0; z-index: 2; margin-bottom: -20px; background-color: rgba(0, 0, 0, 0.5); cursor: pointer;}\", 0);\n\nsheet.insertRule(\"#aaas-oas_x30 .ad__label {display: inline-block;  top: 10; left: 0;  text-align: left; }\", 0);\n\nsheet.insertRule(\".oas-position-x30 .container--footer {padding-bottom: 70px;}\", 0);\n\nsheet.insertRule(\"#aaas-oas_x51, #aaas-oas_Right2, #aaas-oas_x60 {text-align: center;}\", 0);\n\nsheet.insertRule(\"#aaas-oas_x30 {max-width: 1280px; line-height: 0; bottom: 0;  position: fixed; right: 0;  left: 0;  margin: 0px auto;  z-index: 10000;} \", 0);\n\nsheet.insertRule(\"#aaas-oas_x30 a {line-height: 0;  display: block;} \", 0);\n\nsheet.insertRule(\"#aaas-oas_x30 .ad__zapper {right: 10px; position: absolute; z-index: 1; cursor: pointer; } \", 0);\n\nsheet.insertRule(\"#aaas-oas_x31 .ad__label {display: none; visibility: hidden;} \", 0);\n\nsheet.insertRule(\"#aaas-oas_x31 {z-index: -100; width: 100px; height: 100px;} \", 0);\n\nsheet.insertRule(\"@media (min-width: 961px) {#aaas-oas_Top .ad__label {display: inline-block; transform: rotate(-90deg); text-align: left; transform-origin: left bottom; bottom: 4px; left: 0; position: absolute; color: white; }}\", 0);\n\nsheet.insertRule(\"@media (min-width: 1279px) {#aaas-oas_x30 {width: 1280px !important; max-width: 1280px;} #aaas-oas_x30 .ad__zapper{right: -10px;}}\", 0);\n\n\noas_tag.callbackHandler = function() {\n\n  Element.prototype.remove = function() {\n    this.parentElement.removeChild(this);\n  }\n\n  NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {\n    for(var i = this.length - 1; i \u003e= 0; i--) {\n      if(this[i] \u0026\u0026 this[i].parentElement) {\n        this[i].parentElement.removeChild(this[i]);\n      }\n    }\n  }\n\n  oas_tag.addHandler('callbackId', function(data) {\n\n    var pageAds = document.querySelectorAll(\"[id^=\" + oas_tag.anchorElementPrefix + \"]\"),\n        adPositions = {};\n\n    for (var i=0; i \u003c pageAds.length; i++) {\n      posKey = pageAds[i].id;\n      posVal = pageAds[i].id.split('_')[1];\n      // Omit if x30 and page is found in excludelist, which sets excludeX30 flag\n      if (posVal == 'x30'){\n        if (!excludeX30){\n          adPositions[posKey] = posVal;\n        }\n      } else {\n        adPositions[posKey] = posVal;\n      }\n    }\n\n    for (var key in adPositions) {\n      var posData = adPositions[key];\n\n      document.body.classList.add(\"oas-position-\" + adPositions[key]);\n\n      if (data[posData] \u0026\u0026 data[posData].creativeId != \"empty.gif\") {\n        if(data[posData].position === \"Top2\") {\n          document.getElementById(\"aaas-oas_Top2\").style.marginTop=\"15px\";\n          document.getElementById(\"aaas-oas_Top2\").style.marginBottom=\"15px\";\n          document.getElementById(\"aaas-oas_Top2\").style.maxHeight=\"426px\";\n        }\n        document.getElementById(key).insertAdjacentHTML(\"afterbegin\", '\u003cp class=\"ad__label\"\u003eAdvertisement\u003c/p\u003e');\n      }\n      if (data[posData].position === \"x30\") {\n        document.getElementById(key).insertAdjacentHTML(\"afterbegin\", '\u003cimg onclick=\"this.parentNode.remove()\" width=\"24\" height=\"24\" class=\"ad__zapper\" src=\"data:image/svg+xml;utf8,\u003csvg viewBox=\\'0 0 22 22\\' xmlns=\\'http://www.w3.org/2000/svg\\'\u003e\u003cg transform=\\'translate(1 1)\\' stroke=\\'%23fff\\' stroke-width=\\'2\\' fill=\\'none\\' fill-rule=\\'evenodd\\'\u003e\u003ccircle fill-opacity=\\'.8\\' fill=\\'%23000\\' cx=\\'10\\' cy=\\'10\\' r=\\'10\\'/\u003e\u003cg stroke-linecap=\\'square\\'\u003e\u003cpath d=\\'M5.5 5.5l9 9M14.5 5.5l-9 9\\'/\u003e\u003c/g\u003e\u003c/g\u003e\u003c/svg\u003e\"\u003e');\n      }\n    }\n  })\n};\n\u003c/script\u003e"}]}],"scope":{"subdomains":{"exclude":[/demopages.semetricmedia.com/i]}},"event":"pagebottom"},
    {"name":"OAS Ads - content targeting","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript src=\"//s3.amazonaws.com/hawkeye-data-production.sciencemag.org/content-targeting-v2.js\"\u003e\u003c/script\u003e"}]}],"scope":{"URI":{"exclude":["/news/subscriptions"]},"subdomains":{"include":["sciencemag.org"],"exclude":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com|demopages.semetricmedia.com|www.aaas.org|subscriptions.sciencemag.org"]}},"event":"pagetop"},
    {"name":"OAS Ads - pre","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003e\nvar oas_tag       = {};\n\u003c/script\u003e"}]}],"event":"pagetop"},
    {"name":"Pages Not Found (404 403 errors)","trigger":[{"engine":"sc","command":"addEvent","arguments":["event42"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.pageName="";
s.pageType="errorPage"
}]}],"conditions":[function(event,target){
var ret = false;

var title = window.document.title;

var re = /(^hmmm\.\.\.|page not found|file not found|DOI Not Found|error 404|httpstatus404)/i

if(title.match(re)) {
	ret = true;
}

//jobs section
if(typeof(pageTaggingData) != "undefined") {
  if(pageTaggingData.pageTitle == "Error404") {
  	ret = true;
  }
}

return ret;
}],"event":"pagebottom"},
    {"name":"Paywall - Piano/Tinypass - Hello Box","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5965206b64746d6e65009b3b.js"}]}]}],"scope":{"URI":{"include":[/news\/2|news\/sifter\/(.+)/i],"exclude":[/quiz\//i]},"subdomains":{"include":[/www.sciencemag.org|scienceqa.aws.aaas.org/i]}},"conditions":[function(event,target){
var ret = false;
if(document.querySelector("meta[name='AAASThirdPartySource']") === null) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Paywall Variables","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar38":"%Paywall eVar%","prop23":"%Paywall Prop%"}]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
if( typeof s.events != 'undefined' ) { // clear the paywall event
  s.events = s.events.replace(/event38(,)?/,''); 
}
if( _satellite.getVar('Paywall Displayed') == 'paywall displayed' ) { // set the paywall event
  s.events=s.apl(s.events,'event38',',',1);
}

if( typeof s.events != 'undefined' ) { // clear the freewall event
  s.events = s.events.replace(/event40(,)?/,''); 
}
if( _satellite.getVar('Freewall Displayed') == 'freewall displayed' ) { // set the freewall event
  s.events=s.apl(s.events,'event40',',',1);
}

if( typeof s.events != 'undefined' ) { // clear the login start event
  s.events = s.events.replace(/event41(,)?/,''); 
}
if( 
  _satellite.getVar('Paywall Displayed') == 'paywall displayed' 
  || _satellite.getVar('Freewall Displayed') == 'freewall displayed' 
) { // set the login start event
  s.events=s.apl(s.events,'event41',',',1);
}
}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5661e0c664746d7772001c6a.js"}]}]}],"event":"pagebottom"},
    {"name":"Paywall Variables - h20","trigger":[{"engine":"sc","command":"addEvent","arguments":["event38","event41","event9"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.eVar38=_satellite.getVar('DOI');
s.prop23="Paywall: " + _satellite.getVar('DOI');
}]}],"scope":{"URI":{"include":[/content/i]},"subdomains":{"exclude":[/^news|^sciencecareers/i]}},"conditions":[function(event,target){
var ret = false;

if(document.title == "Science Magazine: Sign In") {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Piano/Tinypass - Header script for metering","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b102ff564746d2a6f0012e4.js"}]}]}],"conditions":[function(event,target){
if (location.pathname.indexOf("/news") > -1) {
 	return true; 
}
}],"event":"pagetop"},
    {"name":"Piano/Tinypass - Object","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript\u003e\n//debugger window\nif(_satellite.getQueryParam('nwdebug') != \"\") {\n  var tp_debug_div = document.createElement('div');\n  document.body.appendChild(tp_debug_div);\n  tp_debug_div.style.background=\"yellow\";\n  tp_debug_div.style.color=\"black\";\n  tp_debug_div.style.fontSize=\"9px\";\n  tp_debug_div.style.top=\"0\";\n  tp_debug_div.style.left=\"0\";\n  tp_debug_div.style.position=\"fixed\";\n  tp_debug_div.style.zIndex=\"999\";\n  tp_debug_div.style.opacity=\"0.5\";\n  var tp_debug_ul = document.createElement('ul');\n  tp_debug_ul.id='tp_debug';\n  tp_debug_div.appendChild(tp_debug_ul);\n}\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\nfunction trackNewswall(propArr, evarArr, event) {\n  var v_orgId = \"242B6472541199F70A4C98A6@AdobeOrg\";\n  var s_account = \"aaas.sciencemag\";\n  var s_trackingServer = \"metric.sciencemag.org\";\n\n  //Instantiation\n  var visitor = Visitor.getInstance(v_orgId);\n  visitor.trackingServer = s_trackingServer;\n\n  var s = s_gi(s_account);\n  s.account = s_account;\n  s.trackingServer = s_trackingServer;\n  s.visitor = visitor;\n  \n  for(var key in propArr) {\n  \ts[\"prop\" + key] = propArr[key];\n\t}  \n  \n  for(var key in evarArr) {\n  \ts[\"eVar\" + key] = evarArr[key];\n\t}\n  \n  if(event !== '') {\n  \ts.events = \"event\" + event;\n  }\n\n  s.tl();\n}\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\nfunction getSciAuthCookie() {\n  var value = \"; \" + document.cookie;\n  var parts = value.split(\"; idp_tk=\");\n  if (parts.length == 2) return parts.pop().split(\";\").shift();\n}\n\nvar isMember = 'z';\nvar cv = getSciAuthCookie();\nif (cv) {\n  var partsOfStr = cv.split(',');\n  isMember = partsOfStr[4];\n}\nif (isMember != \"1\") {\n  (function(src){var a=document.createElement(\"script\");a.type=\"text/javascript\";a.async=true;a.src=src;var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})(\"https://dashboard.tinypass.com/xbuilder/experience/load?aid=dRdGTybhWh\");\n}\n\n/* tp = window[\"tp\"] || [];\n//tp.push([\"setAid\", \"pqaRrZw5Ti\"]); //sandbox\ntp.push([\"setAid\", \"dRdGTybhWh\"]);\n\n//------set debug mode------\n//tp.push([\"setSandbox\", true]);\n//tp.push([\"setDebug\", true]);\n\n//------set content section and tags------\ntp.push([\"setContentSection\", _satellite.getVar('Page Type')]);\ntp.push(['setTags', [_satellite.getVar('Page Type')]]);\n\n//------debug stuff------\nif(_satellite.getQueryParam('nwdebug') != \"\") {\n  tp.push([\"addHandler\", \"meterActive\", function(meterData){\n    var textnode = document.createTextNode(meterData.meterName \n    + \": You've seen \" + meterData.views \n    + \" out of \" + meterData.maxViews + \" free articles. You have \"\n    + meterData.viewsLeft + \" articles left.\");\n    var tp_debug_li = document.createElement('li');\n    tp_debug_li.appendChild(textnode);\n    document.getElementById('tp_debug').appendChild(tp_debug_li);\n  }]);\n}\n\n*/\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\n/*tp.push([\"addHandler\", \"showOffer\", function( offerParams ){\n\tvar newswall = \"Newswall 1\";\n\t//if(offerParams.offerId !== 'OFVTDEOML0WP') { //sandbox\n\tif(offerParams.offerId !== 'OF87RSI10AZE') {\n\t\tvar newswall = \"Newswall 2\";\n\t}\n\n  //A/B test \n  var experience = \"Control\";\n  if(offerParams.templateId == 'OTYKEADBO37G') {\n\t\texperience = \"ScrollDepth\";\n  }\n  if(offerParams.templateId == 'OTE0ZVDMT782') {\n\t\texperience = \"ScrollDepth\";\n  }\n\n  if(experience == \"ScrollDepth\") {\n    document.getElementsByClassName('article__body')[0].prepend(art_head);\n    document.getElementsByClassName('article__body')[0].prepend(art_img);\n  }  \n  \n\tvar props = {23:\"Newswall: \" + _satellite.getVar('PageName_CustomScript')};  \n  var evars = {15:newswall,52:experience};\n\n\ttrackNewswall(props, evars, 9);\n\n} ]);\n\n//------custom events------\ntp.push([\"addHandler\", \"customEvent\", function(event, b, c, d) {\n    switch (event.eventName) {\n      \tcase 'newswall1':\n       \t\t\tif(typeof _satellite.getVar('newswall1') === \"undefined\") {\n              var evars = {15:\"Newswall 1\"};\n              trackNewswall('', evars, 10);              \n        \t\t}\n           \t_satellite.setVar('newswall1', 1);\n        break;       \n      \tcase 'newswall2':\n       \t\t\tif(typeof _satellite.getVar('newswall2') === \"undefined\") {\n              var evars = {15:\"Newswall 2\"};\n              trackNewswall('', evars, 10);                \n        \t\t}\n           \t_satellite.setVar('newswall2', 1);        \n        break;               \n        //------ close offer window ------\n        case 'backToArticle':\n        var props = {34:'Newswall: Back to article'};\n\t\t\t\t\ttrackNewswall(props, '', '');     \n            tp.offer.close();\n        \tbreak;\n        case 'b2aScrollDepth':\n        \twindow.top.location.href=window.top.location.href;\n        \tbreak;        \n        //------ close offer window ------\n        case 'backToNews':\n        var props = {34:'Newswall: Back to news'};\n\t\t\t\t\ttrackNewswall(props, '', '');    \n        \twindow.top.location.href = \"http://www.sciencemag.org/news\";\n        \tbreak;        \n        //------ offer 1: daily news signup  ------\n       \tcase 'o1SignUp':    \n            var email = '';\n        \tvar thirdparty = false;\n        \tvar privacypolicy = false;        \n            var params;\n            var iframeId;   \n        \tvar error = '';\n        \n            params = JSON.parse(event.params.params);\n            iframeId = params.iframeId; \n        \n        \t//check privacy policy      \n            if ((typeof event.params.thirdparty != 'undefined') \u0026\u0026 (event.params.thirdparty === \"true\")) {\n                thirdparty = true;\n            }\n        \n        \t//check privacy policy      \n            if ((typeof event.params.privacypolicy != 'undefined') \u0026\u0026 (event.params.privacypolicy === \"true\")) {\n                privacypolicy = true;\n            } else {\n\t\t\t\terror = 'You must read and accept our privacy policy';\n            }\n        \n        \t//email validation\n            if ((typeof event.params.email != 'undefined') \u0026\u0026 (validateEmail(event.params.email))) {\n                email = event.params.email;\n            } else {\n\t\t\t\terror = 'The email address you entered is invalid';\n            }        \n        \n\t\t\t//no errors - continue\n\t\t\tif(error.length == 0) {\n\t\t\t\t//SFMC Call\n\t\t\t\t//var url = \"https://pub.s7.exacttarget.com/001mjpvv2g5\";\n\t\t\t\tvar url = \"https://auth.sciencemag.org/addNewsletterSub.php\";\n        \n\t\t\t\tjQuery.ajax({\n\t\t\t\t\ttype: \"POST\",\n\t\t\t\t\turl: url,\n\t\t\t\t\tdata: { email: email, thirdparty: thirdparty },\n\t\t\t\t\tsuccess: function(data)\n\t\t\t\t\t{\n\t\t\t\t\t\tvar code = getSFMCResponse(data);\n\t\t\t\t\t\tif (code.match(/error/i) != null) {\n\t\t\t\t\t\t\tvar props = {39:'Sorry, we couldn\\'t confirm your details'};\n\t\t\t\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, false, 'Sorry, we couldn\\'t confirm your details');              \n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar evars = {15:\"Newswall 1\"};\n\n\t\t\t\t\t\t\ttrackNewswall('', evars, 55);\n\t\t\t\t\t\t\tpianoSetCustomVariableCookie('paywall_state', 1);\n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, true, 'Thank you for signing up to \u003cem\u003eScience\u003c/em\u003e Daily News');                    \n\t\t\t\t\t\t}                \n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tvar props = {39:error};\n\t\t\t\ttrackNewswall(props, '', '');        \n\t\t\t\tsendPostMessageToPiano(iframeId, false, error);  \n\t\t\t}\n\n            break;    \n        //------ offer 2: news registration  ------\n       \tcase 'o2SignUp':    \n            var email = '';\n\t\t\tvar fname = '';\n\t\t\tvar lname = '';\n\t\t\tvar country = '';\n        \tvar thirdparty = false;\n        \tvar privacypolicy = false;     \n            var params;\n            var iframeId;   \n        \tvar error = '';\n        \n            params = JSON.parse(event.params.params);\n            iframeId = params.iframeId; \n        \n        \t//check privacy policy      \n            if ((typeof event.params.thirdparty != 'undefined') \u0026\u0026 (event.params.thirdparty === \"true\")) {\n                thirdparty = true;\n            }\n        \n        \t//check privacy policy      \n            if ((typeof event.params.privacypolicy != 'undefined') \u0026\u0026 (event.params.privacypolicy === \"true\")) {\n                privacypolicy = true;\n            } else {\n            \terror = 'You must read and accept our privacy policy';\n            }\n\n            if ((typeof event.params.country != 'undefined') \u0026\u0026 (event.params.country !== \"\")) {\n                country = event.params.country;\n            } \n\n        \t//lname validation\n            if ((typeof event.params.lname != 'undefined') \u0026\u0026 (event.params.lname !== \"\")) {\n                lname = event.params.lname;\n            } else {\n\t\t\t\terror = 'You must enter your full name';\n            }  \n\n        \t//fname validation\n            if ((typeof event.params.fname != 'undefined') \u0026\u0026 (event.params.fname !== \"\")) {\n                fname = event.params.fname;\n            } else {\n\t\t\t\terror = 'You must enter your full name';\n            }  \n        \n        \t//email validation\n            if ((typeof event.params.email != 'undefined') \u0026\u0026 (validateEmail(event.params.email))) {\n                email = event.params.email;\n            } else {\n\t\t\t\terror = 'The email address you entered is invalid';\n            }       \n        \n\t\t\t//no errors - continue\n\t\t\tif(error.length == 0) {\n\t\t\t\t//SFMC Call\n\t\t\t\t//var url = \"https://pub.s7.exacttarget.com/qfkdgqevisv\";\n\t\t\t\tvar url = \"https://auth.sciencemag.org/addNewsReader.php\";\n\n\t\t\t\tjQuery.ajax({\n\t\t\t\t\ttype: \"POST\",\n\t\t\t\t\turl: url,\n\t\t\t\t\tdata: { email: email, fname: fname, lname: lname, country: country, thirdparty: thirdparty },\n\t\t\t\t\tsuccess: function(data)\n\t\t\t\t\t{\n\t\t\t\t\t\tvar code = getSFMCResponse(data);\n\t\t\t\t\t\tif (code.match(/error/i) != null) {\n\t\t\t\t\t\t\tvar props = {39:'Sorry, we couldn\\'t confirm your details'};\n\t\t\t\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, false, 'Sorry, we couldn\\'t confirm your details');                    \n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar evars = {15:\"Newswall 2\"};\n\n\t\t\t\t\t\t\ttrackNewswall('', evars, 55);\n\t\t\t\t\t\t\tpianoSetCustomVariableCookie('paywall_state', 2);\n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, true, 'Thank you for signing up');                    \n\t\t\t\t\t\t}                \n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tvar props = {39:error};\n\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\tsendPostMessageToPiano(iframeId, false, error);  \n\t\t\t}\n\n            break; \t\t\t\n        //------ offer 1: email check/validation ------\n        case 'o1Check':\n            var email = '';\n            var params;\n            var iframeId;\n        \tvar error = '';\n\n            params = JSON.parse(event.params.params);\n            iframeId = params.iframeId;\n\n\t\t\tif ((typeof event.params.email != 'undefined') \u0026\u0026 (event.params.email.length \u003e 0)) {\n\t\t\t\temail = event.params.email;\n\t\t\t}\n\n\t\t\t//email validation\n\t\t\tif ((typeof event.params.email != 'undefined') \u0026\u0026 (validateEmail(event.params.email))) {\n\t\t\t\temail = event.params.email;\n\t\t\t} else {\n\t\t\t\terror = 'The email address you entered is invalid';\n\t\t\t}      \n\t\t\n\t\t\t//no errors - continue\n\t\t\tif(error.length == 0) {\n\t\t\t\t//SFMC Call\n\t\t\t\t//var url = \"https://pub.s7.exacttarget.com/1bbdfxf1kme\";\n\t\t\t\tvar url = \"https://auth.sciencemag.org/checkUser.php\";\n\n\t\t\t\tjQuery.ajax({\n\t\t\t\t\ttype: \"POST\",\n\t\t\t\t\turl: url,\n\t\t\t\t\tdata: { email: email },\n\t\t\t\t\tsuccess: function(data)\n\t\t\t\t\t{\n\t\t\t\t\t\tvar code = parseInt(getSFMCResponse(data));\n\t\t\t\t\t\tif (code != 1 \u0026\u0026 code != 2) {\n\t\t\t\t\t\t\tvar props = {39:'Sorry, we couldn\\'t confirm your details'};\n\t\t\t\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, false, 'Sorry, we couldn\\'t confirm your details');                \n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar evars = {15:\"Newswall 1\"};\n\n\t\t\t\t\t\t\ttrackNewswall('', evars, 54);\n\t\t\t\t\t\t\tpianoSetCustomVariableCookie('paywall_state', code);\n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, true, 'Thank you for being part of the \u003cem\u003eScience\u003c/em\u003e community');                    \n\t\t\t\t\t\t}                \n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tvar props = {39:error};\n\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\tsendPostMessageToPiano(iframeId, false, error);  \n\t\t\t}\n\n            break;\n        //------ offer 2: email check/validation ------\n        case 'o2Check':\n            var email = '';\n            var params;\n            var iframeId;\n        \tvar error = '';\n\n            params = JSON.parse(event.params.params);\n            iframeId = params.iframeId;\n\n\t\t\tif ((typeof event.params.email != 'undefined') \u0026\u0026 (event.params.email.length \u003e 0)) {\n\t\t\t\temail = event.params.email;\n\t\t\t}\n\n\t\t\t//email validation\n\t\t\tif ((typeof event.params.email != 'undefined') \u0026\u0026 (validateEmail(event.params.email))) {\n\t\t\t\temail = event.params.email;\n\t\t\t} else {\n\t\t\t\terror = 'The email address you entered is invalid';\n\t\t\t}      \n\t\t\n\t\t\t//no errors - continue\n\t\t\tif(error.length == 0) {\n\t\t\t\t//SFMC Call\n\t\t\t\t//var url = \"https://pub.s7.exacttarget.com/1bbdfxf1kme\";\n\t\t\t\tvar url = \"https://auth.sciencemag.org/checkUser.php\";\n\n\t\t\t\tjQuery.ajax({\n\t\t\t\t\ttype: \"POST\",\n\t\t\t\t\turl: url,\n\t\t\t\t\tdata: { email: email },\n\t\t\t\t\tsuccess: function(data)\n\t\t\t\t\t{\n\t\t\t\t\t\tvar code = parseInt(getSFMCResponse(data));\n\t\t\t\t\t\tif (code != 2) {\n\t\t\t\t\t\t\tvar props = {39:'Sorry, we couldn\\'t confirm your details'};\n\t\t\t\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, false, 'Sorry, we couldn\\'t confirm your details');              \n\t\t\t\t\t\t} else {\n\t\t\t\t\t\t\tvar evars = {15:\"Newswall 2\"};\n\n\t\t\t\t\t\t\ttrackNewswall('', evars, 54);\n\t\t\t\t\t\t\tpianoSetCustomVariableCookie('paywall_state', code);\n\t\t\t\t\t\t\tsendPostMessageToPiano(iframeId, true, 'Thank you for being part of the \u003cem\u003eScience\u003c/em\u003e community');                    \n\t\t\t\t\t\t}                \n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t} else {\n\t\t\t\tvar props = {39:error};\n\t\t\t\ttrackNewswall(props, '', ''); \n\t\t\t\tsendPostMessageToPiano(iframeId, false, error);  \n\t\t\t}\n\n            break;      \n    }\n}]);\n*/\n\u003c/script\u003e"},{"html":"\u003cscript\u003e\n/**\n * Function to validate email address\n * @param email - Email input field\n */\nfunction validateEmail(email) {\n    var re = /^(([^\u003c\u003e()\\[\\]\\\\.,;:\\s@\"]+(\\.[^\u003c\u003e()\\[\\]\\\\.,;:\\s@\"]+)*)|(\".+\"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$/;\n    return re.test(email);\n}\n\n/**\n * Function to get first line of SFMC page\n * @param resp - Ajax response from SFMC\n */\nfunction getSFMCResponse(resp) {\n\tvar response = resp.replace(/^\\s*\\n/gm, \"\");\n\tvar code = response.split('\u003cscript\u003e')[0];\n\n  return code;\n}\n\n/**\n * Function to send data upstream to Piano template\n * @param iframeId - Element id of the Piano iframe\n * @param success - true/false. Status of the message\n * @param message - Error message text\n */\nfunction sendPostMessageToPiano(iframeId, success, message) {\n    var iframe = jQuery('#' + iframeId);\n\n    if (iframe.length) {\n        iframe[0].contentWindow.postMessage({\n            piano: {\n                success: success,\n                message: message\n            }\n        }, '*');\n    }\n}\n\n/**\n * Sets cookie for later use in custom variables\n * @param name - Custom variable's name\n * @param value - Custom variable's value\n */\nfunction pianoSetCustomVariableCookie(name, value) {\n    // Get all existing values from the cookie\n    var cookieValue = pianoReadCustomVariableCookie();\n    // Set the value\n    cookieValue[name] = value;\n\n    // Get cookie expiration date in 90 days\n    var d = new Date();\n    d.setTime(d.getTime()+(90*24*60*60*1000));\n    var expires = \"expires=\" + d.toGMTString();\n\n    // Write the cookie value\n    document.cookie = \"__pcvc=\" + JSON.stringify(cookieValue) + \";\" + expires + \";path=/\";\n}\n\n/**\n * Read values from cookie and convert them from JSON\n * @param specificName (optional) Name specific value from the set\n * @returns {*} If specificName is specified - returns a single value, otherwise returns a JSON object with all values\n */\nfunction pianoReadCustomVariableCookie(specificName) {\n    var cookieValue;\n    try {\n        // Try to get the cookie value with regexp\n        var match = document.cookie.match(new RegExp('(^| )__pcvc=([^;]+)'));\n        if (match) {\n            // If cookie with this name was found - try to parse the JSON value\n            cookieValue = JSON.parse(match[2]);\n        }\n    }\n    catch (e) {\n        // By default - set value as empty object\n        cookieValue = {};\n    }\n    if (!cookieValue) {\n        // By default - set value as empty object\n        cookieValue = {};\n    }\n    if (typeof specificName != \"undefined\") {\n        // Get the specific value from the set\n        if (typeof cookieValue[specificName] != \"undefined\") {\n            return cookieValue[specificName];\n        }\n        return null;\n    }\n    return cookieValue;\n}\n\u003c/script\u003e"}]}],"scope":{"URI":{"include":[/news|news\/sifter\/(.+)|prod\/dlevy-org-aaas-idp-sample-site2/i]},"subdomains":{"include":[/www.sciencemag.org|rzeluzg4s3.execute-api.us-west-2.amazonaws.com|wwwdev.sciencemag.org|wwwdemo.sciencemag.org|wwwqa.sciencemag.org/i]}},"conditions":[function(event,target){
var ret = false;
if(document.querySelector("meta[name='AAASThirdPartySource']") === null) {
	ret = true;
  
  
  if(_satellite.getQueryParam('nwdebug') != "") {
  	ret = true;    
  }
}

//quiz
if(_satellite.getVar('News_keyword_meta').match('quiz') != null) {
  ret = false;
}
/*
if(_satellite.getQueryParam('utm_campaign').match(/news\_/) != null) {
	ret = false;
}
*/

return ret;
}],"event":"pagebottom"},
    {"name":"Proxy Filter","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop36":"%Proxy Filter%"}]},{"engine":"sc","command":"addEvent","arguments":["event53"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), /(ezp|ezproxy|ezlibproxy1|gate1|gate2|libproxy|myaccess|offcampus|proxy)\./i);
}],"event":"pagebottom"},
    {"name":"Quiz Pages","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-54e759a93766620016240000.js"}]}]}],"conditions":[function(event,target){
var ret = false;

if(document.location.hostname === "newsquiz.sciencemag.org") {
	ret = true;
}

if(_satellite.getVar('News_keyword_meta').match(/quiz/) !== null) {
	ret = true;
}

if(ret === true) {
  if(typeof jQuery == 'undefined'){
    _satellite.loadScriptSync('//ajax.googleapis.com/ajax/libs/jquery/1.3.2/jquery.min.js');
  }
}
  
return ret;
}],"event":"pagebottom"},
    {"name":"Recaptcha - script","trigger":[{"command":"writeHTML","arguments":[{"html":"\u003cscript src=\"https://www.google.com/recaptcha/api.js\" async defer\u003e\u003c/script\u003e"}]}],"scope":{"subdomains":{"include":[/sciencemag.org|sciencemag.dev/i]}},"event":"pagetop"},
    {"name":"Recommend Subscription Form Complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Recommend a Subscription to Library"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
_satellite.removeCookie('RecommendSubscriptionSubmit');
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("RecommendSubscriptionSubmit"), "true");
}],"event":"pagebottom"},
    {"name":"Recommend Subscription Form Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Recommend a Subscription to Library"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":[/site\/subscriptions\/recommend_sub/i]},"subdomains":{"include":["sciencemag.org"]}},"event":"pagetop"},
    {"name":"SITC - download paper complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"SITC - download paper"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"scope":{"URI":{"include":["download"]}},"conditions":[function(event,target){
var ret = false;

if(document.getElementById('edit-email') == null) {
	var ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"SITC - download paper start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"SITC - download paper"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":["download"]}},"conditions":[function(event,target){
var ret = false;

if(document.getElementById('edit-email') != null) {
	var ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Search Click Handler","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar17":"%Search Click Type%","eVar18":"%Num Search Click Results%","eVar2":"%Search Click Term%"}]},{"engine":"sc","command":"addEvent","arguments":["event14"]}],"conditions":[function(event,target){
if( typeof _satellite.readCookie('_sdi.searchClick') !== 'undefined' ) {
  var bits = _satellite.readCookie('_sdi.searchClick').split('|');
  _satellite.setVar('Search Click Term', bits[0] );
  _satellite.setVar('Search Click Type', bits[1] );
  _satellite.setVar('Num Search Click Results', bits[2] );
  _satellite.removeCookie('_sdi.searchClick');
  return true;
}

return false;
}],"event":"pagebottom"},
    {"name":"Search Page Params Fix - DOM Ready","scope":{"subdomains":{"include":["search"]}},"conditions":[function(event,target){
// Detects 'straight' single quote and replaces with 'smart' single quote on key press & paste
jQuery('body').on('keyup click change', "#ss__form-field--searchTerm", function(){
  jQuery("#ss__form-field--searchTerm").val(decodeURIComponent(jQuery("#ss__form-field--searchTerm").val().replace("'", "%E2%80%99")));
});

/*
jQuery('body').on('paste', "#ss__form-field--searchTerm", function(){
	var keyboardEvent = document.createEvent("KeyboardEvent");
  var initMethod = typeof keyboardEvent.initKeyboardEvent !== 'undefined' ? "initKeyboardEvent" : "initKeyEvent";


  keyboardEvent[initMethod](
                     "keyup", // event type : keydown, keyup, keypress
                      true, // bubbles
                      true, // cancelable
                      window, // viewArg: should be window
                      false, // ctrlKeyArg
                      false, // altKeyArg
                      false, // shiftKeyArg
                      false, // metaKeyArg
                      40, // keyCodeArg : unsigned long the virtual key code, else 0
                      0 // charCodeArgs : unsigned long the Unicode character associated with the depressed key, else 0
  );
  document.getElementById("ss__form-field--searchTerm").dispatchEvent(keyboardEvent);	
	console.log("paste");
});
*/
}],"event":"domready"},
    {"name":"Search Page Params Fix - Page Load","scope":{"subdomains":{"include":["search"]}},"conditions":[function(event,target){
// Detects 'straight' single quote and replaces with 'smart' single quote on page load
if (/\%27/g.test(location.search)) {
  var cleanParams = location.search.replace(/\%27/g, "%E2%80%99");
	window.location.href = location.protocol + "//" + location.hostname + cleanParams;
}
}],"event":"pagetop"},
    {"name":"Search Results","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar17":"%Search Type%","eVar18":"%Num Search Results%","eVar2":"%Search Term%","prop6":"%ParameterString%"}]},{"engine":"sc","command":"addEvent","arguments":["event12"]}],"scope":{"URI":{"include":[/\/search\/|\/searchjobs\/|pipeline\/\?s\=/i]}},"event":"pagebottom"},
    {"name":"Search Results (Old site)","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension13":"%Search Term%","metric1":"1"}]},{"engine":"sc","command":"setVars","arguments":[{"eVar17":"%Search Type%","eVar18":"%Num Search Results%","eVar2":"%Search Term%"}]},{"engine":"sc","command":"addEvent","arguments":["event12"]}],"scope":{"subdomains":{"include":["sciencemag.org"],"exclude":["science|stm|stke|advances|news|m\\.|webinar"]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("Search Term"), /.+/i);
},function(event,target){
var term = _satellite.getVar('Search Term'),
    page = _satellite.getQueryParam('FIRSTINDEX')||'';
if(term=='enter search term' || term=='' || page.length>0){
  return false
}
else {
  return true
}
}],"event":"pagebottom"},
    {"name":"Search Results - Zero Results","trigger":[{"engine":"sc","command":"addEvent","arguments":["event13"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("Search Term"), /.+/i);
},function(event,target){
if(_satellite.getVar('Search Term')=='enter search term' || _satellite.getQueryParam('FIRSTINDEX')){
  return false
}
else {
  return true
}
},function(){
return _satellite.textMatch(_satellite.getVar("Num Search Results"), "zero");
}],"event":"pagebottom"},
    {"name":"Set Campaign","trigger":[{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.campaign = 
(_satellite.getVar('utm_source') != '' ? _satellite.getVar('utm_source') : 'no-source' )
+ ':' + ( _satellite.getVar('utm_medium') != '' ? _satellite.getVar('utm_medium') : 'no-medium' )
+ ':' + ( _satellite.getVar('utm_campaign') != '' ? _satellite.getVar('utm_campaign') : 'no-campaign' )
+ ':' + ( _satellite.getVar('utm_content') != '' ? _satellite.getVar('utm_content') : 'no-content' )
;
}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("utm_campaign"), /.+/i);
}],"event":"pagetop"},
    {"name":"Site License / User Cookie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-574f263264746d6b8a00b9fa.js"}]}]}],"conditions":[function(event,target){
var ret = false;

if(/ist/.test(_satellite.getVar('Subscriber Institution'))) {
  	ret = true;
}

if(/usr/.test(_satellite.getVar('Subscriber User'))) {
  	ret = true;
}

if(typeof _satellite.readCookie('is_aaas_user') !== "undefined") {
	ret = false;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Sitewide - Audio Listener","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-54c14b5a3966380015640700.js"}]}]}],"event":"domready"},
    {"name":"Sitewide - SoundCloud Listener","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5410cdaae814ef731000010c.js"}]}]}],"scope":{"subdomains":{"include":["www"]},"domains":[/aaas\.org$/i]},"event":"pagebottom"},
    {"name":"Subscriber Authentication","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar23":"%Subscriber Institution%%Subscriber User%%Subscriber H20%%Subscriber Member Central%","eVar34":"%Subscriber Status%","prop12":"%Subscriber Institution%%Subscriber User%%Subscriber H20%%Subscriber Member Central%"}]}],"conditions":[function(event,target){
/*var highwire = "false";
var jobs = "false";
var membercentral = "false";
var delim = '|';

//--------- user: jobs ---------
var careers = _satellite.getVar('Subscriber Jobs');
if( careers != '' ) {
  jobs = "true";
}

//--------- user: jcore ---------
var user = _satellite.getVar('Subscriber User');
if(user != '') {
  highwire = "true";
}

//--------- institution: jcore ---------
var institution = _satellite.getVar('Subscriber Institution');
if(institution != '') {
  highwire = "true";
}

//--------- institution: jcore ---------
var h20 = _satellite.getVar('Subscriber H20');
if(h20 != '') {
  highwire = "true";
}

var logged = "highwire=" + highwire + delim + "jobs=" + jobs + delim + "membercentral=" + membercentral;
_satellite.setVar('logged_in',logged);*/

return true;
}],"event":"pagebottom"},
    {"name":"Super Search","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar17":"%Super Search Type%","eVar18":"%Super Search Results%","eVar2":"%Super Search Term%","prop6":"%ParameterString%"}]},{"engine":"sc","command":"addEvent","arguments":["event12"]}],"scope":{"subdomains":{"include":[/search-beta.sciencemag.org/i,/search.sciencemag.org/i]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getQueryParam('searchTerm'), /.+/i)
}],"event":"pagebottom"},
    {"name":"Super Search Click Handler","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar17":"%Search Click Type%","eVar18":"%Num Search Click Results%","eVar2":"%Search Click Term%"}]},{"engine":"sc","command":"addEvent","arguments":["event14"]}],"conditions":[function(event,target){
var ret = false;

if(typeof _satellite.readCookie('searchClick') !== 'undefined') {
  var bits = _satellite.readCookie('searchClick').split('|');
  _satellite.setVar('Search Click Term', bits[0] );
  _satellite.setVar('Search Click Type', bits[1] );
  _satellite.setVar('Num Search Click Results', bits[2] );
  _satellite.removeCookie('searchClick');
  ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Support AAAS Donate Form Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Support AAAS Donate"}]},{"engine":"sc","command":"addEvent","arguments":["event9:%serialize_day_user%","scCheckout:%serialize_day_user%"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
s.products=";Support AAAS Donation;1";
}]}],"scope":{"subdomains":{"include":[/www.supportaaas.org/i]}},"conditions":[function(event,target){
var ret = false;

if(document.getElementById('form1') !== null) {
	ret = true;
}

return ret;
}],"event":"pagebottom"},
    {"name":"Update Email Preferences - Current Subscriptions","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5b7adecf64746d2cea00650b.js"}]}]}],"scope":{"URI":{"include":["page.aspx"]},"subdomains":{"include":["pages.aaas.sciencepubs.org"]}},"event":"pagebottom"},
    {"name":"User Login Attempt","trigger":[{"engine":"sc","command":"addEvent","arguments":["event31"]}],"conditions":[function(event,target){
if( _satellite.readCookie('loginAttemptEvent') === 'y' ) {
  _satellite.removeCookie('loginAttemptEvent');
  return true;
}

return false;
}],"event":"pagebottom"},
    {"name":"User Login Complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"%Login Attempt%"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]},{"engine":"sc","command":"customSetup","arguments":[function(event,s){
_satellite.removeCookie('loginAttempt');
}]}],"scope":{"subdomains":{"exclude":[/^news|^sciencecareers/i]}},"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("User Signed In"), "Logged In");
},function(){
return _satellite.textMatch(_satellite.getVar("Login Attempt"), /..+/i);
}],"event":"pagebottom"},
    {"name":"User Login Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"User Login"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":[/^\/login(\?.*)?$/i]},"subdomains":{"exclude":[/^news|^sciencecareers/i]}},"event":"pagebottom"},
    {"name":"ViewType Pages","trigger":[{"engine":"ga_universal","command":"set","arguments":[{"dimension7":"%ViewType%"}]},{"engine":"sc","command":"setVars","arguments":[{"eVar13":"%vtype%","prop13":"%vtype%"}]}],"scope":{"URI":{"include":[/^\/content\/.+\/.+/i]}},"conditions":[function(event,target){
var ret = true;

var vtype = _satellite.getVar("ViewType");

if(document.title == "Science Magazine: Sign In") {
    var vtype = "Paywall";
}

_satellite.setVar("vtype", vtype);

return ret;
}],"event":"pagebottom"},
    {"name":"Webinar - Page","trigger":[{"engine":"sc","command":"setVars","arguments":[{"prop25":"%webinar%"}]}],"scope":{"URI":{"include":["webinar/archive"]}},"conditions":[function(event,target){
var title = document.getElementsByTagName('hgroup')[0].innerHTML;
//title = title.replace(/<([^>]+)>(.*?)<\/([^>]+)>/gi, '');
title = title.replace(/(<([^>]+)>)/ig, '');
_satellite.setVar('webinar', title);

return true;
}],"event":"pagebottom"},
    {"name":"Webinar - form start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Webinars"}]},{"engine":"sc","command":"addEvent","arguments":["event9:%serialize_day_user%"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "webinar.:/");
}],"event":"pagebottom"},
    {"name":"Webinar Registration - Complete","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Webinar - %h1%"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"scope":{"URI":{"include":[/registerthanks/i]},"subdomains":{"include":[/www.workcast.com/i]}},"conditions":[function(event,target){
var title = document.getElementsByTagName('h1')[0].innerHTML.replace(/(<([^>]+)>)/ig, '').split('|')[1].trim();
_satellite.setVar('h1', title);

return true;
}],"event":"pagebottom"},
    {"name":"Webinar Registration - Start","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"Webinar - %h1%"}]},{"engine":"sc","command":"addEvent","arguments":["event9"]}],"scope":{"URI":{"include":[/register/i]},"subdomains":{"include":[/view6.workcast.net/i]}},"conditions":[function(event,target){
var title = document.getElementsByTagName('h1')[0].innerHTML;
title = title.replace(/<([^>]+)>(.*?)<\/([^>]+)>/gi, '');
title = title.replace(/(<([^>]+)>)/ig, '');
_satellite.setVar('h1', title);

return true;
}],"event":"pagebottom"},
    {"name":"YouTube Tracking","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-597662d164746d51d30294b8.js"}]}]}],"scope":{"URI":{"include":[/video/i]},"subdomains":{"include":["www.sciencemag.org"]}},"event":"domready"},
    {"name":"eLetters - Cookie","trigger":[{"engine":"sc","command":"setVars","arguments":[{"eVar15":"%eLetter%"}]},{"engine":"sc","command":"addEvent","arguments":["event11"]}],"conditions":[function(){
return _satellite.textMatch(_satellite.readCookie("eLetter"), /.+/i);
},function(event,target){
var ret = true;

_satellite.setVar('eLetter', _satellite.readCookie('eLetter'));
_satellite.removeCookie('eLetter');

return ret;
}],"event":"pagebottom"}
  ],
  "rules": [
    {"name":"Ad tracking - right2 click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar41":"%href%","eVar7":"right2"},"addEvent":["event6"]}]}],"conditions":[function(event,target){
_satellite.setVar('href', this.href);

return true;
}],"selector":"DIV#aaas-oas_Right2 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - right2 view DIV","conditions":[function(event,target){
_satellite.setCookie('adright2','y');

return true;
}],"selector":"DIV#oas_div_Right2","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - right2 view FRAME","conditions":[function(event,target){
_satellite.setCookie('adright2','y');

return true;
}],"selector":"IFRAME#oas_frame_Right2","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - top click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar41":"%href%","eVar7":"top"},"addEvent":["event6"]}]}],"conditions":[function(event,target){
_satellite.setVar('href', this.href);

return true;
}],"selector":"DIV#aaas-oas_Top a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - top view DIV","conditions":[function(event,target){
_satellite.setCookie('adtop','y');

var loadTime = new Date().getTime();
_satellite.setCookie('adload', loadTime - _satellite.pageStart);

return true;
}],"selector":"DIV#oas_div_Top","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - top view FRAME","conditions":[function(event,target){
_satellite.setCookie('adtop','y');

var loadTime = new Date().getTime();
_satellite.setCookie('adload', loadTime - _satellite.pageStart);

return true;
}],"selector":"IFRAME#oas_frame_Top","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - x30 click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar41":"%href%","eVar7":"x30"},"addEvent":["event6"]}]}],"conditions":[function(event,target){
_satellite.setVar('href', this.href);

return true;
}],"selector":"DIV#aaas-oas_x30 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - x30 view DIV","conditions":[function(event,target){
_satellite.setCookie('adx30','y');

return true;
}],"selector":"DIV#oas_div_x30","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - x30 view FRAME","conditions":[function(event,target){
_satellite.setCookie('adx30','y');

return true;
}],"selector":"IFRAME#oas_frame_x30","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - x51 click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar41":"%href%","eVar7":"x51"},"addEvent":["event6"]}]}],"conditions":[function(event,target){
_satellite.setVar('href', this.href);

return true;
}],"selector":"DIV#aaas-oas_x51 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - x51 view DIV","conditions":[function(event,target){
_satellite.setCookie('adx51','y');

return true;
}],"selector":"DIV#oas_div_x51","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Ad tracking - x51 view FRAME","conditions":[function(event,target){
_satellite.setCookie('adx51','y');

return true;
}],"selector":"IFRAME#oas_frame_x51","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Advances - Article Submit","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"addEvent":["event39"]}]}],"scope":{"subdomains":{"include":[/advances.sciencemag.org/i]}},"conditions":[function(event,target){
var ret = false;

if(this.href.match(/editorialmanager/i)) {
	var ret = true;
} else {
}

return ret;

}],"selector":".secondary a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Advocacy - FB/Google complete pixel","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-577d516c64746d09b800347c.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-577d516c64746d09b800347d.html","data":[]}]}]}],"scope":{"URI":{"include":[/advocacy/i]},"subdomains":{"include":["promo.aaas.org"]}},"selector":"#formWrap","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Audio Pause","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-571903d464746d54b20000db.js"}]}]}],"selector":"body","event":"custom","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"analyticsAudioPause"},
    {"name":"Audio Play","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5718fccc64746d30b6000127.js"}]}]}],"selector":"body","event":"custom","bubbleFireIfParent":false,"bubbleFireIfChildFired":true,"bubbleStop":false,"customEvent":"analyticsAudioPlay"},
    {"name":"Career Development - Cart Submit","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-571e7b9864746d0ebe0016c5.js"}]}]}],"scope":{"URI":{"include":["cart"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"selector":".checkout-button","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Checkout Complete Set Cookie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-571e98fb64746d5f600014bd.js"}]}]}],"scope":{"URI":{"include":["checkout"],"exclude":["order-received"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"selector":".button","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Checkout Interaction","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Career Development Checkout"},"addEvent":["event10"]}]}],"scope":{"URI":{"include":["checkout"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var ret = true;

if(typeof _satellite.getVar('cd_checkout') === "undefined") {
  _satellite.setVar('cd_checkout','y');
} else {
  ret = false;
}  

return ret;
}],"selector":"form.checkout","event":"focus","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Login Complete Set Cookie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57211d5264746d638b000d8a.js"}]}]}],"scope":{"URI":{"include":["profile"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var ret = false;

if(this.getAttribute("data-action") === 'login') {
	ret = true;
}

return ret;
}],"selector":"form","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Login Start","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Career Development Login"},"addEvent":["event41"]}]}],"scope":{"URI":{"include":[/profile/i]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var ret = false;

if(this.getAttribute("data-action") === 'login') {
	ret = true;
  if(typeof _satellite.getVar('cd_login') === "undefined") {
    _satellite.setVar('cd_login','y');
  } else {
    ret = false;
  }  
}

return ret;
}],"selector":"form","event":"focus","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Register Complete Set Cookie","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5720d88764746d6391000be6.js"}]}]}],"scope":{"URI":{"include":["profile"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var ret = false;

if(this.getAttribute("data-action") === 'register') {
  var cdregform_membership_number = parseInt(document.getElementsByClassName('userpro-field-aaas_membership_number')[0].children[1].children[0].value);
  if(Number.isInteger(cdregform_membership_number) === false) {
  	cdregform_membership_number = 'None';
  }
  _satellite.setVar('cdregform_membership_number', cdregform_membership_number);
	ret = true;
}

return ret;
}],"selector":"form","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Register Start","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Career Development Register"},"addEvent":["event9"]}]}],"scope":{"URI":{"include":[/profile/i]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var ret = false;

if(this.getAttribute("data-action") === 'register') {
	ret = true;
  if(typeof _satellite.getVar('cd_register') === "undefined") {
    _satellite.setVar('cd_register','y');
  } else {
    ret = false;
  }  
}

return ret;
}],"selector":"form","event":"focus","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development - Start Course","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar10":"%cd_course_title%"},"addEvent":["event44"]}]}],"scope":{"URI":{"include":["my-courses"]},"subdomains":{"include":["careerdevelopment.aaas.org"]}},"conditions":[function(event,target){
var cd_course_title = this.parentElement.parentElement.parentElement.children[1].children[0].innerText.trim();

_satellite.setVar('cd_course_title', cd_course_title);

return true;
}],"selector":"article a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development Video End","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-572d0c8f64746d2dff000c88.js"}]}]}],"scope":{"subdomains":{"include":["careerdevelopment.aaas.org"]}},"selector":"video","event":"ended","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Career Development Video Play","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57321bf464746d6b870032e9.js"}]}]}],"scope":{"subdomains":{"include":["careerdevelopment.aaas.org"]}},"selector":"video","event":"play","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Careers Tracker - Articles","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58dab77064746d397200c272.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"selector":".subprime--a a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Careers Tracker - Categories / Ed Picks","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58dabeae64746d463a004870.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"selector":".categories__grid a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Careers Tracker - Columns","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58dabe5c64746d463a004858.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"selector":".below--content a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Careers Tracker - Rotator","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58da92e264746d397200be69.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"selector":".hero--inset a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Careers Tracker - Secondary","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58dabde664746d463a004841.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"selector":".secondary a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Careers Tracker - Tools","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58dab7cb64746d397200c289.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/careers");
}],"selector":".subprime--b a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Daily news signup - intercept (submit)","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Daily News Signup - %int_ref%","prop17":"DlyNew"},"customSetup":function(event,s){
s.list2 = 'Science Latest News and Headlines';

var countryCode = jQuery('#daily_news_sign_up select[name=Country]').val();
s.state = jQuery('#daily_news_sign_up select[name=Country]').find('option[value=' + countryCode + ']').text();
s.tl();
},"addEvent":["event11","event2"]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-585c374d64746d5931001f62.js"}]}]}],"scope":{"URI":{"include":[/news\/20|breakthrough2017|photosof2017/i]},"subdomains":{"include":[/sciencemag.org/i]}},"conditions":[function(event,target){
if (_satellite.getVar('int_ref') === undefined){
	_satellite.setVar('int_ref', 'general');
}

return true;
}],"selector":"#daily_news_sign_up","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Data Event - Click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"%this.getAttribute(data-event-value)%","addEvent":["event8"]}]}],"selector":"a, span, button","property":{"data-event":"click"},"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Data Event - Form Complete","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"%this.getAttribute(data-event-value)%"},"addEvent":["event11"]}]}],"selector":"form","property":{"data-event":"form"},"event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Data Event - Form Start","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"%this.getAttribute(data-event-value)%"},"addEvent":["event9"]}]}],"conditions":[function(event,target){
var ret = false;
var formname = this.getAttribute("data-event-value");

if(typeof _satellite.getVar('form_' + formname) === 'undefined') {
	_satellite.setVar('form_' + formname,'y');
  ret = true;  
}

return ret;
}],"selector":"form","property":{"data-event":"form"},"event":"focus","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Data Event - Section","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57470af264746d25170097df.js"}]}]}],"conditions":[function(event,target){
_satellite.setCookie('data_event_section',this.getAttribute('data-event-value'));

return true;
}],"selector":"div","property":{"data-event":"section"},"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Data Event - Social","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"%this.getAttribute(data-event-value)%","setVars":{"eVar24":"%this.getAttribute(data-event-channel)%"},"addEvent":["event18"]}]}],"selector":"a, span, button","property":{"data-event":"social"},"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Editor's Summary Tab","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"%tab name%","setVars":{"eVar13":"D=c13","prop13":"%tab name%"}}]}],"conditions":[function(event,target){
_satellite.setVar("tab name", this.innerHTML); 
return true
}],"selector":"#content-block .abstract-view .mini-tab-list a","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Email - Full List Page","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Newsletters - Full List Page","prop17":"%Newsletter Signup Abbreviated List%"},"customSetup":function(event,s){
s.list2 = _satellite.getVar('updatedlist');

var countryCode = jQuery('#form-newsletters select[name=Country]').val();
s.state = jQuery('#form-newsletters select').find('option[value=' + countryCode + ']').text();
s.tl();
},"addEvent":["event11","event2"]}]}],"scope":{"URI":{"include":["subscribe/get-our-newsletters"]}},"conditions":[function(event,target){
var ret = true;

var updlist = '';
var newslettersSelected = [];
var boxes = jQuery('form#form-newsletters input[type="checkbox"]');

for( var i = 0; i < boxes.length; i++ ) {
  if( boxes[i].checked === true ) {

    var newsletterName;
    if (jQuery(boxes[i]).attr('name') == 'Consent_ThirdPartyEmails'){
      newsletterName = "Third Party Emails";
    } else if (jQuery(boxes[i]).attr('name') == 'Consent_FirstPartyEmails'){
      newsletterName = "First Party Emails";
    } else {
      if (jQuery(boxes[i]).parent('.media__headline').length){
        newsletterName = jQuery(boxes[i]).parent('.media__headline').text().trim();
      } else if (jQuery(boxes[i]).parent('label').length){
        newsletterName = jQuery(boxes[i]).parent('label').text().trim();
      }
    }
    if (newsletterName == undefined){
      newsletterName = jQuery(boxes[i]).attr('name');
    }
    newslettersSelected.push(newsletterName);
  }
}

_satellite.setVar("arrUpdatedlist",newslettersSelected); // for prop17

updlist = newslettersSelected.join("|",",");
_satellite.setVar("updatedlist",updlist); // For list2

return ret;
}],"selector":"#form-newsletters","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Email - Newsletter Footer","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Newsletters - %Subdomain.Domain.TopLevel%","prop17":"%Newsletter Signup Abbreviated List%"},"customSetup":function(event,s){
s.list2 = _satellite.getVar('updatedlist');

var countryCode = jQuery('#form-footer-newsletters select[name=Country]').val();
s.state = jQuery('#form-footer-newsletters select').find('option[value=' + countryCode + ']').text();
s.tl();
},"addEvent":["event11","event2"]}]}],"scope":{"subdomains":{"include":["sciencemag.org"]}},"conditions":[function(event,target){
var ret = true;

// Loops through checked boxes in form, makes list, stores to satellite.updatedlist
var updlist = '';
var newslettersSelected = [];
var boxes = jQuery('form#form-footer-newsletters input[type="checkbox"]');

for( var i = 0; i < boxes.length; i++ ) {
  if( boxes[i].checked === true ) {

    var newsletterName;
    if (jQuery(boxes[i]).attr('name') == 'Consent_ThirdPartyEmails'){
      newslettersSelected.push("Third Party Emails");
      newslettersSelected.push("First Party Emails");
    } else {
      newsletterName = jQuery(boxes[i]).parent('label').text().trim();
       if (typeof newsletterName === 'undefined'){
        newsletterName = jQuery(boxes[i]).attr('name');
      }
      newslettersSelected.push(newsletterName);
    }
  }
}
_satellite.setVar("arrUpdatedlist",newslettersSelected); // for prop17

updlist = newslettersSelected.join("|",",");
_satellite.setVar("updatedlist",updlist); // For list2

return ret;
}],"selector":"form#form-footer-newsletters","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Email Life - R\u0026D Submit","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"R\u0026D Email List"},"addEvent":["event11"]}]}],"scope":{"URI":{"include":["subscribe-RD-email-list-0"]},"subdomains":{"include":["aaas.org"]}},"selector":".main-container form","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Feedback Form Complete","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"feedback"},"addEvent":["event11"]}]}],"scope":{"URI":{"include":[/feedback/i]},"subdomains":{"include":[/sciencemag.org/i]}},"selector":"#webform-client-form-10","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Feedback Form Interaction","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"feedback"},"addEvent":["event10"]}]}],"scope":{"URI":{"include":[/feedback/i]},"subdomains":{"include":[/sciencemag.org/i]}},"conditions":[function(event,target){
if(!_satellite.getVar('form_interacted')){
  _satellite.setVar('form_interacted','true');
  return true;
}
}],"selector":"#webform-client-form-10 input","event":"change","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Career News","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d4960d64746d0f06001484.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#tab-career-news a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Featured Videos (Content 2)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d475c864746d5463001771.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_2 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - First Release (Side)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d49c8264746d57d00014a8.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_side a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - How To Get Published (Content 7)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d494e364746d57d6001786.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_7 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Insider (Side 3)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d49e9e64746d4af2001891.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_side_3 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Insights (Content 3)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d4938064746d545a001910.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_3 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Journals","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d49c2864746d37510015ac.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content .primary__secondary a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Latest News","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d495d664746d0efd001a58.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#tab-latest-news a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Latest News Side (Side 5)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d49fb064746d4af20018a7.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_side_5 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Navigation","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56f0602a64746d0588001050.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":".nav-primary a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Podcast (Content 6)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d4946564746d546000131d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_6 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Rotator","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d4a8e664746d3754001c35.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":".hero--inset a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":false,"bubbleStop":false},
    {"name":"HP Tracker - Top articles in Careers (Side 4)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d49f5164746d4aef001b7d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_side_4 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Topics (Content 4)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d493da64746d545d001413.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_4 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HP Tracker - Topics (Content 5)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-56d4940d64746d5460001308.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#content_5 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"HighWireArticleEndView","scope":{"URI":{"include":[/^\/content\/.+\/.+/i]}},"conditions":[function(event,target){
_satellite.setCookie('endview','y');

return true;
}],"selector":"span.highwire-journal-article-marker-end","event":"inview","bubbleFireIfParent":true,"bubbleFireIfChildFired":false,"bubbleStop":false,"inviewDelay":100},
    {"name":"Homepage Carousel Clicks","conditions":[function(event,target){
if(!document.domain.match(/^news|^sciencecareers/i)){
  var linkPosition = jQuery(this).parents('div.owl-item').index() + 1;
  var linkText = jQuery(this).parents('div.owl-item').find('h2 a').text().trim();
  _satellite.setCookie('linkSection','homepage carousel');
  _satellite.setCookie('linkText',linkPosition+' - '+_satellite.cleanText(linkText));

  return true;
}
},function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/");
}],"selector":"#sciencemag-carousel a","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Homepage Carousel Clicks (new design)","conditions":[function(event,target){
if(!document.domain.match(/^news|^sciencecareers/i)){
  var linkPosition = jQuery(this).parents('div.owl-item').index() + 1;
  // If rotator link does not go to sciencemag.org, fire img request to prevent missed tracking if destination doesn't get rule for tracking
  if (this.href.match(/sciencemag.org/gm) == null) {
  	var s = _satellite.getToolsByType('sc')[0].getS();
    s.events          = "event8";
    s.eVar11          = document.domain.split('.')[0] + " - Rotator - " + linkPosition;
    s.eVar12          = this.href;

    s.tl(this, "o", "Rotator Link");
	} else {	
    var linkText = jQuery(this).parents('div.owl-item').find('h2 a').text().trim();
    var linkHref = this.href;

    if( document.domain.match(/stke.sciencemag.org/) !== null ) {
      _satellite.setCookie('linkSection','Signaling - Rotator - ' + linkPosition);
    } else if( document.domain.match(/stm.sciencemag.org/) !== null ) {
      _satellite.setCookie('linkSection','Translational Medicine - Rotator - ' + linkPosition);
    } else if( document.domain.match(/advances.sciencemag.org/) !== null ) {
      _satellite.setCookie('linkSection','Advances - Rotator - ' + linkPosition);
    } else if( document.domain.match(/immunology.sciencemag.org/) !== null ) {
      _satellite.setCookie('linkSection','Immunology - Rotator - ' + linkPosition);
    } else if( document.domain.match(/robotics.sciencemag.org/) !== null ) {
      _satellite.setCookie('linkSection','Robotics - Rotator - ' + linkPosition);
    } else if( document.domain.match(/science.sciencemag.org/) !== null ) {
      _satellite.setCookie('linkSection','Science - Rotator - ' + linkPosition);
    } else {
      _satellite.setCookie('linkSection','homepage carousel');
    }

    _satellite.setCookie('linkText',linkHref);
  }

  return true;
}
}],"selector":"#sci-issue-toc-carousel a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Homepage Frame Globe","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"homepage frame international","eVar12":"%this.innerHTML%"},"addEvent":["event8"]}]},{"command":"delayActivateLink"}],"scope":{"subdomains":{"include":[/sciencemag.org/i]}},"conditions":[function(event,target){
var ret = false;

if(this.href.match(/www.sciencemagchina.cn|www.sciencemag.jp/) !== null ) {
	ret = true;
}

return ret;
}],"selector":".nav-footer a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Institutional/Librarian Quote","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Institution Lead"},"addEvent":["event43"]}]}],"scope":{"URI":{"include":["librarian"]},"subdomains":{"include":[/sciencemag.org/i]}},"selector":".btn--cta--large","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Interactive Click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Interactive Click","setVars":{"eVar42":"%Interactive Name%","eVar43":"%Interactive Name%:%this.getAttribute(data-interactive-action)%","prop34":"%Interactive Name%:%this.getAttribute(data-interactive-action)%"},"addEvent":["event47"]}]}],"selector":"[data-interactive-action]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Interactive Start","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"Interactive Start","setVars":{"eVar42":"%Interactive Name%","eVar43":"%Interactive Name%:%this.getAttribute(data-interactive-action)%"},"addEvent":["event48"]}]}],"conditions":[function(event,target){
if( _satellite.getVar('interactive started') == undefined ) {
  _satellite.setVar( 'interactive started', true );
  return true;
} else {
  return false;
}

return false;
}],"selector":"[data-interactive-action]","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Jobs - Application Internal - Start","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"jobs - apply now","setVars":{"eVar28":"Internal"},"addEvent":["event20"]}]}],"scope":{"URI":{"exclude":[/FileChooserReturn/i]},"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"conditions":[function(event,target){
var ret = false;

if(!_satellite.getVar('applied')) {
	_satellite.setVar('applied','yes');
	ret = true;
}

return ret;
}],"selector":"div#apply-form form","eventHandlerOnElement":true,"event":"focus","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Jobs - Shortlist","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"jobs - apply now","setVars":{"prop24":"%jobid%"}}]}],"scope":{"subdomains":{"include":["jobs.sciencecareers.org|sciencecareersjobs-web.madgexjbtest.com"]}},"conditions":[function(event,target){
var ret = true;

var s_action = $(this).parent('form').children('input[name=Action]').val();
var s_jobid = $(this).parent('form').children('input[name=JobId]').val();

if(s_action.match(/unshort/i)) {
	ret = false;
} else {
	_satellite.setVar('jobid', s_jobid);
}

return ret;
}],"selector":".js-shortlist-trigger","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Login Method","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar39":"%loginMethod%"}}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "science.:/user/login");
},function(event,target){
var action = this.action;
var loginMethod = '';

if(action.match(/signin\.aaas\.org/)) {
	loginMethod = 'AAAS ID';
}

if(action.match(/openathens\.highwire\.org/)) {
	loginMethod = 'OpenAthens';
}

if(action.match(/science\.sciencemag\.org/)) {
	loginMethod = 'Institution';
}

_satellite.setVar('loginMethod', loginMethod);

return true;
}],"selector":".pane-content form","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Magazine Tab Click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"home magazine tab","eVar12":"%this.innerHTML%"}}]}],"selector":".promo-foot--mag a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Member Splash - bottom buttons","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar29":"%memcategory% bottom button"},"customSetup":function(event,s){
if(this.href.match(/renew/) !== null) {
	s.products=';Membership Renewal';
}
},"addEvent":["event50"]}]}],"scope":{"URI":{"include":[/(regular|postdoc|student|teacher|retired)-member/i]},"domains":[/aaas\.org$/i]},"selector":".col-sm-push-2 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Member Splash - top buttons","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar29":"%memcategory% top button"},"customSetup":function(event,s){
if(this.href.match(/renew/) !== null) {
	s.products=';Membership Renewal';
}
},"addEvent":["event50"]}]}],"scope":{"URI":{"include":[/(regular|postdoc|student|teacher|retired)-member/i]},"domains":[/aaas\.org$/i]},"selector":".col-sm-push-1 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Article Tracker - Latest News Side","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706c5b364746d61d20035de.js"}]}]}],"scope":{"URI":{"include":["/news/2"]},"subdomains":{"include":["www.sciencemag.org"]}},"selector":".tabify__panels a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Article Tracker - More from News","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706c45564746d2111001a50.js"}]}]}],"scope":{"URI":{"include":["/news/2"]},"subdomains":{"include":["www.sciencemag.org"]}},"selector":".view-related-content-news-article-related a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Article Tracker - Navigation","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706c41664746d2108001abf.js"}]}]}],"scope":{"URI":{"include":["/news/2"]},"subdomains":{"include":["www.sciencemag.org"]}},"selector":".nav-primary a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Article Tracker - Science Insider","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706d20364746d61d5003561.js"}]}]}],"scope":{"URI":{"include":["/news/2"]},"subdomains":{"include":["www.sciencemag.org"]}},"selector":".view-article-lists-block-2 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Article Tracker - Sifter","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706c53e64746d210b001a1e.js"}]}]}],"scope":{"URI":{"include":["/news/2"]},"subdomains":{"include":["www.sciencemag.org"]}},"selector":".view-article-lists-block-3 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Latest News","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a39b64746d210b001862.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".subprime--a a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Latest News Side","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a7de64746d61cf003899.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".tabify__panels a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Navigation","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706ac6464746d61d2003511.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".nav-primary a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Paragraph related articles","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-585189cc64746d1bd600d28a.js"}]}]}],"scope":{"URI":{"include":[/news\/2/i]}},"selector":".paragraphs-item-related-articles a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Rotator","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a0a464746d19e300300b.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".hero--inset a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Science Insider","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a52f64746d1d44003b0d.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".view-article-lists-block-2 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Science Magazine","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a41c64746d210b001876.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".subprime--b a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - ScienceShots","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a68964746d61cf003877.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".view-article-lists-block-14 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Sifter","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a59564746d1d41003830.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".view-article-lists-block-3 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Topics","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a72f64746d1d470039b4.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".view-nodequeue-3-block a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"News Tracker - Video","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5706a61f64746d61d20034ed.js"}]}]}],"conditions":[function(){
return _satellite.textMatch(_satellite.getVar("PageName_CustomScript"), "www.:/news");
}],"selector":".video-player a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Pre click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"pre: %PageName_CustomScript%","addEvent":["event8"]}]}],"scope":{"URI":{"include":[/\/content\//i]},"subdomains":{"include":[/sciencemag.org/i]}},"selector":".highwire-prelocation a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Recommend Subscription Form Interaction","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Recommend a Subscription to Library"},"addEvent":["event10"]}]}],"scope":{"URI":{"include":[/site\/subscriptions\/recommend_sub/i]},"subdomains":{"include":["sciencemag.org"]}},"conditions":[function(event,target){
if(!_satellite.getVar('form_interacted')){
  _satellite.setVar('form_interacted','true');
  return true;
}
}],"selector":"#interest1, #interest2, #interest3, #interest4, #interest15","event":"change","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Recommend Subscription Form Submit","scope":{"URI":{"include":[/site\/subscriptions\/recommend_sub/i]},"subdomains":{"include":["sciencemag.org"]}},"conditions":[function(event,target){
_satellite.setCookie('RecommendSubscriptionSubmit',true);
return true;
}],"selector":"#myform input[type=\"submit\"]","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Resources - FB/Google pixel (conversion/download)","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-58bdc9eb64746d2cca000035.js"}]}]},{"command":"loadIframe","arguments":[{"pages":[{"src":"satellite-58caaf2a64746d431d006cc6.html","data":[]}]}]}],"scope":{"subdomains":{"include":[/resources.aaas.org/i]}},"selector":"form #edit-submit","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"SITC - learning lens","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar47":"%llens%"},"customSetup":function(event,s){
if(this.checked) {
	var llens = this.id.replace(/chkbx\-/,'');
  s.eVar47=llens;
}
},"addEvent":["event8"]}]}],"scope":{"subdomains":{"include":[/scienceintheclassroom/i]}},"conditions":[function(event,target){
var ret = false;

if(this.checked) {
	var llens = this.id.replace(/chkbx\-/,'');
  _satellite.setVar("llens", llens);
  ret = true;
}

return ret;
}],"selector":".llens-control","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"SITC - tab click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"SITC tab - %sitc_tab%"},"addEvent":["event8"]}]}],"scope":{"subdomains":{"include":[/scienceintheclassroom/i]}},"conditions":[function(event,target){
var sitc_tab = this.innerText;
_satellite.setVar('sitc_tab', sitc_tab);

return true;
}],"selector":"a.ui-tabs-anchor","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Search Result Click","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-57696fbf64746d13b1001a7b.js"}]}]},{"command":"delayActivateLink"}],"scope":{"URI":{"include":[/search/i]}},"conditions":[function(event,target){
var term = _satellite.getVar('Search Term');
if(term && term != 'enter search term'){
  return true;
}
}],"selector":"ul.item-list a,ul.highwire-search-results-list a,ul.search-results a,ul#listing a","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Share","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"addEvent":["event18"]}]},{"command":"delayActivateLink"}],"selector":"ul.socialshares a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Subscribe footer - join","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"Subscribe footer - join","eVar12":"this.href"},"addEvent":["event8"]}]}],"selector":".promo-foot--subscribe form","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Subscribe header - join","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"Subscribe header - join","eVar12":"this.href"},"customSetup":function(event,s){
var myRe = new RegExp("\=P(.{4})", "g");
var myArray = myRe.exec(this.href);

s.eVar12=myArray[0].substring(1);
},"addEvent":["event8"]}]}],"selector":".promo-subscribe h3 a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Subscribe header - renew","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"Subscribe header - renew","eVar12":"this.href"},"addEvent":["event8"]}]}],"conditions":[function(event,target){
ret = false;

if(this.innerHTML === 'Renew my subscription') {
	ret = true;
}

return ret;
}],"selector":".promo-subscribe ul a","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Super Search (event)","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar17":"%Super Search Type%","eVar18":"%Super Search Results%","eVar2":"%Super Search Term%","prop6":"%ParameterString%"},"addEvent":["event12"]}]}],"scope":{"subdomains":{"include":[/search-beta.sciencemag.org/i,/search.sciencemag.org/i]}},"conditions":[function(event,target){
if(_satellite.getVar('Super Search Results') != 'zero') {
	return true;
}

return false;
}],"event":"dataelementchange(ParameterString)","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Super Search - Show Survey","trigger":[{"command":"loadScript","arguments":[{"sequential":true,"scripts":[{"src":"satellite-5a94840064746d6f630022e9.js"}]}]},{"command":"delayActivateLink"}],"scope":{"subdomains":{"include":["search","search-beta"]}},"selector":"#super-search-wrapper button","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Super Search - Zero","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar2":"%Super Search Term%"},"addEvent":["event13"]}]}],"scope":{"subdomains":{"include":[/search-beta.sciencemag.org/i,/search.sciencemag.org/i]}},"conditions":[function(event,target){
if(_satellite.getVar('Super Search Results') == 'zero') {
	return true;
}

return false;
}],"event":"dataelementchange(ParameterString)","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Super Search Result Click","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-5a96054c64746d0c550048cd.js"}]}]},{"command":"delayActivateLink"}],"scope":{"subdomains":{"include":[/search-beta.sciencemag.org/i,/search.sciencemag.org/i]}},"selector":".super-search .headline-list a","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Support AAAS Donate Form Submit","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Support AAAS Donate"},"customSetup":function(event,s){
s.products=";Support AAAS Donation;1;" + _satellite.getVar('donation_amt');
},"addEvent":["event11","purchase"]}]}],"scope":{"subdomains":{"include":[/www.supportaaas.org/i]}},"conditions":[function(event,target){
var ret = false;

if(document.getElementById('form1') !== null) {
	ret = true;
}

return ret;
},function(){
return _satellite.textMatch(_satellite.getVar("donation_amt"), /.+/i);
}],"selector":".DonationSubmitButton","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Table of Contents Click","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"Table Of Contents","eVar12":"%this.innerText%"}}]}],"selector":"ul.toc-section a","eventHandlerOnElement":true,"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Twitter interaction","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar11":"Twitter widget"},"addEvent":["event8"]}]}],"scope":{"URI":{"include":[/news\/2/i]}},"conditions":[function(event,target){
var ret = false;

if(typeof _satellite.getVar('twitter_widget') === "undefined") {
	var ret = true;
  _satellite.setVar('twitter_widget','yes');
}

return ret;
}],"selector":"#twitter-ab-test","event":"hover(100)","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Update Email Preferences","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Update Email Preferences"},"customSetup":function(event,s){
if (_satellite.getVar("arrNewSubscriptions").length){
	_satellite.setVar("truncateList", "newSubs");
  s.prop17 = _satellite.getVar('Newsletter Signup Abbreviated List');
  _satellite.setVar("arrNewSubscriptions", "");
}

if (_satellite.getVar("arrLostSubscriptions").length){
	_satellite.setVar("truncateList", "lostSubs");
  s.prop18 = _satellite.getVar('Newsletter Signup Abbreviated List');
  _satellite.setVar("arrLostSubscriptions", "");
}

s.list2 = _satellite.getVar('newSubscriptions');
s.tl();
},"addEvent":["event11"]}]}],"scope":{"URI":{"include":[/page.aspx/i]}},"conditions":[function(event,target){
var currSelections = _satellite.getVar("currentNewsletters");
var newSubscriptions = '';
var newslettersSelected = [];
var newSubs = [];
var lostSubs = [];
var boxes = jQuery('form#CustomSubscriptionManagement_3_2 input[type="checkbox"]');

for( var i = 0; i < boxes.length; i++ ) {
  if( boxes[i].checked === true ) {

    var newsletterName;
    newsletterName = jQuery(boxes[i]).siblings('strong').text().trim();

    if (newsletterName == undefined){
      newsletterName = jQuery(boxes[i]).attr('name');
    }
    newslettersSelected.push(newsletterName);
  }
}

// Loop to compare new list with old list to find which are new subscriptions
for (var x = 0; x < newslettersSelected.length; x++){
	var newSub = newslettersSelected[x];
	if (jQuery.inArray(newSub, currSelections) == -1) {
		newSubs.push(newSub);
	}
}

// Loop to compare old list with new list to find out which subscriptions were removed
for (var x = 0; x < currSelections.length; x++){
	var currSub = currSelections[x];
	if (jQuery.inArray(currSub, newslettersSelected) == -1) {
		lostSubs.push(currSub);
	}
}

_satellite.setVar("arrNewSubscriptions",newSubs); // For prop17
_satellite.setVar("arrLostSubscriptions",lostSubs); // For prop18

newSubscriptions = newSubs.join("|",",");
_satellite.setVar("newSubscriptions",newSubscriptions);  // For list2

return true;
}],"selector":"form#CustomSubscriptionManagement_3_2","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Update Email Preferences - Unsubscribe All","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"prop18":"%Newsletter Signup Abbreviated List%"}}]}],"scope":{"URI":{"include":["page.aspx"]},"subdomains":{"include":["pages.aaas.sciencepubs.org"]}},"conditions":[function(event,target){
if (jQuery(this).attr('onclick') != "UnsubscribeAll();"){
	return false;
}

var currSelections = _satellite.getVar("currentNewsletters");
_satellite.setVar("arrUpdatedlist",currSelections);

return true;
}],"selector":"button","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"User Login Interaction","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"User Login"},"addEvent":["event10"]}]}],"scope":{"URI":{"include":[/^\/login(\?.*)?$/i]},"subdomains":{"exclude":[/^news|^sciencecareers/i]}},"conditions":[function(event,target){
if(!_satellite.getVar('form_interacted')){
  _satellite.setVar('form_interacted','true');
  return true;
}
}],"selector":"#sign-in input","event":"change","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"User Login Interaction: Content Paywall","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"User Login: Content Paywall"},"addEvent":["event10"]}]}],"scope":{"URI":{"include":[/^\/content\/.+\/.+/i]},"subdomains":{"include":[/sciencemag.org/i]}},"conditions":[function(event,target){
var ret = false;

if(!_satellite.getVar('form_interacted')){
  _satellite.setVar('form_interacted','true');
  ret = true;
}

if(_satellite.getVar('DOI') == "None"){
  ret = false;
}

return ret;
}],"selector":"#user-login input","event":"focus","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"View Type Tab Click","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar13":"%ViewType%","eVar38":"%Paywall eVar%","prop13":"%ViewType%","prop23":"%Paywall Prop%"},"customSetup":function(event,s){
if( typeof s.events != 'undefined' ) { // clear the paywall event
  s.events = s.events.replace(/event38(,)?/,''); 
}
if( _satellite.getVar('Paywall Displayed') == 'paywall displayed' ) { // set the paywall event
  s.events=s.apl(s.events,'event38',',',1);
}

if( typeof s.events != 'undefined' ) { // clear the freewall event
  s.events = s.events.replace(/event40(,)?/,''); 
}
if( _satellite.getVar('Freewall Displayed') == 'freewall displayed' ) { // set the freewall event
  s.events=s.apl(s.events,'event40',',',1);
}

if( typeof s.events != 'undefined' ) { // clear the login start event
  s.events = s.events.replace(/event41(,)?/,''); 
}
if( 
  _satellite.getVar('Paywall Displayed') == 'paywall displayed' 
  || _satellite.getVar('Freewall Displayed') == 'freewall displayed' 
) { // set the login start event
  s.events=s.apl(s.events,'event41',',',1);
}
}}]}],"conditions":[function(event,target){
if( 
  _satellite.getVar('Paywall Displayed') == 'paywall displayed' 
  || _satellite.getVar('Freewall Displayed') == 'freewall displayed' 
) {
	_satellite.notify('PAYWALL OR FREEWALL DETECTED');
  _satellite.track('paywallVariables');
}

return true;
}],"selector":"a","property":{"data-target-id":"highwire_article_tabs"},"event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Webinar - Alerts","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"webinar - alerts","addEvent":["event8"]}]}],"scope":{"URI":{"include":[/custom-publishing\/webinars/i]},"subdomains":{"include":["sciencemag.org"]}},"selector":".secondary a.btn--block","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Webinar - Register","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"webinar - %webinar_url%","addEvent":["event8"]}]}],"scope":{"URI":{"include":[/custom-publishing\/webinars/i]},"subdomains":{"include":["sciencemag.org"]}},"conditions":[function(event,target){
_satellite.setVar('webinar_url', this.href);

return true;
}],"selector":".custom-publishing-webinars a.btn--cta--large","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"Webinar - form complete","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"Webinars","prop17":"%Newsletter Signup Abbreviated List%"},"customSetup":function(event,s){
s.list2 = _satellite.getVar('updatedlist');

var countryCode = jQuery('#webinar-signup select[name=Country]').val();
s.state = jQuery('#webinar-signup select').find('option[value=' + countryCode + ']').text();
s.tl();
},"addEvent":["event11:%serialize_day_user%"]}]}],"scope":{"URI":{"include":["custom-publishing/webinars"]}},"conditions":[function(event,target){
var updlist = '';
var newslettersSelected = [];
var firstPartybox = jQuery('form#webinar-signup input[name="Consent_FirstPartyEmails"]');
var thirdPartybox = jQuery('form#webinar-signup input[name="Consent_ThirdPartyEmails"]');
if (firstPartybox[0].checked === true){
    newslettersSelected.push("First Party Emails");
}
if (thirdPartybox[0].checked === true){
    newslettersSelected.push("Third Party Emails");
}

_satellite.setVar("arrUpdatedlist",newslettersSelected); // for prop17

updlist = newslettersSelected.join("|",",");
_satellite.setVar("updatedlist",updlist); // For list2

return true;
}],"selector":"#webinar-signup","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"eLetters - Form Complete","trigger":[{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-592da12164746d506700150a.js"}]}]}],"conditions":[function(event,target){
var ret = false;

if(typeof eLetter !== "undefined") {
	ret = true;
}

return ret;
}],"selector":"#highwire-comment-node-form","event":"submit","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"eLetters - Form Start","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"setVars":{"eVar15":"eLetters - %BrowserTitle%"},"addEvent":["event9"]}]},{"command":"loadScript","arguments":[{"sequential":false,"scripts":[{"src":"satellite-592d960d64746d51d300e0e7.js"}]}]}],"scope":{"URI":{"include":[/content\//i]}},"selector":"a.hw-add-e-letters","event":"click","bubbleFireIfParent":true,"bubbleFireIfChildFired":true,"bubbleStop":false},
    {"name":"facebook like","event":"facebook.like","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"facebook","socialAction":"like","socialTarget":
document.location.href
}],"tool":["59bf2791171382e460963d1f2ca4a56e"]}]},
    {"name":"facebook unlike","event":"facebook.unlike","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"facebook","socialAction":"unlike","socialTarget":
document.location.href
}],"tool":["59bf2791171382e460963d1f2ca4a56e"]}]},
    {"name":"facebook send","event":"facebook.send","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"facebook","socialAction":"send","socialTarget":
document.location.href
}],"tool":["59bf2791171382e460963d1f2ca4a56e"]}]},
    {"name":"twitter tweet","event":"twitter.tweet","trigger":[{"command":"send","arguments":[{"hitType":"social","socialNetwork":"twitter","socialAction":"tweet","socialTarget":
document.location.href
}],"tool":["59bf2791171382e460963d1f2ca4a56e"]}]}
  ],
  "directCallRules": [
    {"name":"graphic novel scene","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"pageName":"%PageName_CustomScript%/%scene name%"}}]}]},
    {"name":"paywallPane","trigger":[{"engine":"sc","command":"trackLink","arguments":[{"type":"o","linkName":"login pane","setVars":{"eVar38":"%Paywall eVar%","prop23":"%Paywall Prop%"},"addEvent":["event38","event41"]}]}]},
    {"name":"quiz complete","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar9":"%PageName_CustomScript%/end","pageName":"%PageName_CustomScript%/end"}}]}]},
    {"name":"quiz start","trigger":[{"engine":"sc","command":"trackPageView","arguments":[{"setVars":{"eVar9":"%PageName_CustomScript%/start","pageName":"%PageName_CustomScript%/start"}}]}]}
  ],
  "settings": {
    "trackInternalLinks": true,
    "libraryName": "satelliteLib-a9d46808a35b7b8034adfab1d8207407222304d5",
    "isStaging": false,
    "allowGATTcalls": false,
    "downloadExtensions": /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
    "notifications": false,
    "utilVisible": false,
    "domainList": [
      "aaas-science.org",
      "aaas.org",
      "code",
      "editorialmanager.com",
      "forceforscience.org",
      "sbfonline.com",
      "science-advances.net",
      "science-advances.org",
      "scienceadvances.net",
      "scienceadvances.org",
      "sciencecareers.org",
      "scienceforseminaries.org",
      "sciencegradprograms.com",
      "scienceintheclassroom.org",
      "sciencemag.jp",
      "sciencemag.org",
      "sciencemagazinedigital.org",
      "sciencemagchina.cn",
      "sciencemedicine.org",
      "sciencenetlinks.com",
      "sciencenow.org",
      "scienceonline.org",
      "sciencepubs.com",
      "sciencepubs.org",
      "supportaaas.org",
      "translationalmedicine.org"
    ],
    "scriptDir": "926659a1689cc9fca96760b67cca714ae48f0584/scripts/",
    "euCookieName": "ScienceMag",
    "tagTimeout": 3000
  },
  "data": {
    "URI": 
document.location.pathname + document.location.search
,
    "browser": {
    },
    "cartItems": [

    ],
    "revenue": "",
    "host": {
      "http": "assets.adobedtm.com",
      "https": "assets.adobedtm.com"
    }
  },
  "dataElements": {
    "AAAS Section": {"selector":"meta[name=aaas_programs]","property":"content","storeLength":"pageview","forceLowerCase":true},
    "Article Text Getter": {"customJS":function(){
var lo = event.target,
    value = '';
//console.log(lo);
_satellite.notify(lo,1);
if (lo.innerHTML.indexOf('<img') > -1 || lo.tagName == 'IMG') {
  // first get the image
  if ( lo.tagName == 'IMG' ) {
    img = lo;
  } else {
    var imgs = lo.children,img;
    for(var i=0; i<imgs.length; i++){
      if(imgs[i].nodeName=='IMG'){
        img = imgs[i];
        break;
      }
    }
  }
  // first check image id
  //if(img.id){
  //  v[1] = 'IMG: '+img.id;
  //}
  // get the alt text
  if(img.getAttribute('alt')){
    value = 'IMG:'+_satellite.cleanText(img.getAttribute('alt'));
  }
  // get src if no alt
  else {
    var src = (img.src||img.getAttribute('src')).split('/');
    value = 'IMG:'+src.pop();
  }
  str = _satellite.cleanText(_satellite.text(lo));
}
// get the text
else {
  value = _satellite.cleanText(_satellite.text(lo));
}
//console.log(value);
_satellite.notify(value,1);
return value;

},"storeLength":"pageview"},
    "ArticleType": {"selector":"meta[name=citation_section]","property":"content","default":"None","storeLength":"pageview"},
    "Author-Meta": {"selector":"meta[name=citation_author]","property":"content","default":"None","storeLength":"pageview"},
    "authors": {"customJS":function(){
var authors = [];
try {
  if (location.hostname.match(/sciencecareers\.sciencemag\.org/)) {
    jQuery.each(jQuery('div.field-name-field-author a'), function() {
      var name = jQuery(this).text().trim();
      authors.push(name);
    })
  } else if (location.hostname.match(/news\.sciencemag\.org/)) {
    jQuery.each(jQuery('span.article-author'), function() {
      var name = jQuery(this).text().trim();
      authors.push(name);
    })
  } else {
    // get authors from meta tags
    var metas = document.getElementsByTagName('meta');
    for( var i = 0; i < metas.length; i++ ) {
      if( 
				metas[i].getAttribute('name') === 'citation_author' // old site design
      ) {
        authors.push( metas[i].getAttribute('content') );
      }
      if( 
				metas[i].getAttribute('name') === 'news_author' // new Jcore site
      ) {
        authors.push( metas[i].getAttribute('content') );
      }    
      if( 
				metas[i].getAttribute('name') === 'news_authors' // new Jcore site
      ) {
        authors.push( metas[i].getAttribute('content') );
      }           
    }
  }
} catch (err) {
    _satellite.notify("Authors Data Element Was Not Set: " + err, 1);
}

var astr1 = authors.join();
astr2 = astr1.replace(/^By /i,''); //replace "By " ...

return astr2;
},"storeLength":"pageview"},
    "blogger": {"customJS":function(){
if(typeof document.getElementsByClassName('blog__blogger-name')[0] != "undefined") {

	return document.getElementsByClassName('blog__blogger-name')[0].children[0].innerHTML.replace('By ','');

} else {

  return "";

}
},"storeLength":"pageview"},
    "BrowserTitle": {"customJS":function(){
var title = document.title;

if(document.domain.match(/sciencemag\.org/) !== null) {
	var nosci_title = title.replace(/ \| Science.*$/, ''); //strip sci suffix
	var raw_title = nosci_title.replace(/<(?:.|\n)*?>/gm, ''); //strip html tags
} else {
	raw_title = title;
}

return raw_title.replace(/^\s+|\s+$/g,''); //remove trailing and leading spaces
},"default":"None","storeLength":"pageview"},
    "canonical_meta": {"customJS":function(){
var canonical = "";

_satellite.cssQuery('link[rel=canonical]', function(el){
  if(el.length>0){
  	canonical = el[0].getAttribute('href');
  }
});

return canonical;
},"storeLength":"pageview"},
    "Career Development Products": {"customJS":function(){
var products = _satellite.readCookie('cd_products').split('|');

var addProducts = [];

for(var i = 0; i < products.length; i++) {
	var product = products[i].split('~');
	var str = 'Career Development;' + encodeURIComponent(product[0]).replace(/%20/g, ' ') + ';' + product[1] + ';' + product[2];
  addProducts.push(str);
}

return addProducts.join(',');
},"storeLength":"pageview"},
    "Career Development Video Program": {"selector":"#prog","property":"text","storeLength":"pageview"},
    "careers_keyword_meta": {"customJS":function(){
var arrKeywords= [];
jQuery('.article__foot .list-comma a').each(function(){
	arrKeywords.push(jQuery(this).text());
});
return arrKeywords.join(', ');
},"storeLength":"pageview"},
    "CCODE": {"queryParam":"ccode","storeLength":"session","forceLowerCase":true,"ignoreCase":0},
    "Citation Domain": {"customJS":function(){
var url = _satellite.getVar('Citation Public URL'),
    domain = '';

if(url){
  var m = url.match(/https?:\/\/(.+)\//ig);
}
},"storeLength":"pageview"},
    "Citation Public URL": {"selector":"meta[name=citation_public_url]","property":"content","storeLength":"pageview"},
    "city": {"customJS":function(){
var city = '';

//pubs - depends on JQuery
if(document.domain === "pubs.aaas.org") {
  if($('input[name=city]').length) {
    var city = $('input[name=city]').val();
  }
}


//career development
if(document.getElementById('billing_city') !== null) {
  var city = document.getElementById('billing_city').value;
}

return city;
},"storeLength":"pageview","forceLowerCase":true},
    "Corresponding Author Email": {"customJS":function(){
var correspondingAuthors = [];
try {
  // look for authors' email in meta first
  var metas = document.getElementsByTagName('meta');
  for( var i = 0; i < metas.length; i++ ) {
    if( metas[i].getAttribute('name') === 'citation_author_email') {
      correspondingAuthors.push( metas[i].getAttribute('content') );
    }
  }
  
  // if authors' email is not in meta, try to scrape it from page.
  if ( correspondingAuthors.length === 0 ) {
    if( location.hostname.match(/www\.sciencemag\.org/)) {
    	jQuery.each(jQuery('#corresp-1 a[href*="mailto"]'), function() {
    	  var name = jQuery(this).text().trim();
    	  correspondingAuthors.push(name);
    	})
    }
  }
} catch (err) {
    _satellite.notify("Corresponding Authors Email Data Element Was Not Set: " + err, 1);
}

return correspondingAuthors.join();
},"storeLength":"pageview"},
    "Day": {"customJS":function(){
var d = new Date();

var weekday = new Array(7);
weekday[0]=  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

return weekday[d.getDay()];
},"storeLength":"pageview"},
    "dl_highwire_ajax": {"customJS":function(){
if(document.getElementById('digitalData') != null) {
  
  var ddata = document.getElementById('digitalData').innerText;
  var ddata2 = ddata.replace("<!--//--><![CDATA[//><!--","");
  var ddata3 = ddata2.replace("digitalData = ","");
  var ddata4 = ddata3.replace("//--><!]]>","");
  var digD = JSON.parse(ddata4.trim());
  
  return digD;
  
}
},"storeLength":"pageview"},
    "dl_pageid": {"jsVariable":"digitalData.page.pageInfo.pageID","storeLength":"pageview"},
    "dl_pagetype": {"jsVariable":"digitalData.page.category.pageType","storeLength":"pageview"},
    "dl_primarycategory": {"jsVariable":"digitalData.page.category.primarycategory","storeLength":"pageview"},
    "dl_promocode": {"jsVariable":"digitalData.page.attributes.promocode","storeLength":"pageview","forceLowerCase":true},
    "dl_totalprice": {"jsVariable":"digitalData.transaction.total.totalPrice","storeLength":"pageview"},
    "dl_transactionid": {"jsVariable":"digitalData.transaction.transactionID","storeLength":"pageview"},
    "DMC_or_CCODE": {"customJS":function(){
try {
  var qVal = _satellite.getQueryParam('DMC');
  if ( qVal.length === 0 ) {
  	qVal = _satellite.getQueryParam('CCODE');
  }
  return qVal || null;
} catch(e) {
  _satellite.notify('SATELLITE: Error in Data Element: DMC or CCODE');
}
},"storeLength":"session","forceLowerCase":true},
    "DOI": {"customJS":function(){
// capture DOI from meta first, and then look for the element if that doesn't exist
// meta[name=citation_doi]
var doi = "None";
_satellite.cssQuery('meta[name=citation_doi]', function(el){
  if(el.length>0){
    doi = el[0].getAttribute('content');
  }
});

// if no DOI, look for the HTML element
if(doi == "None"){
  _satellite.cssQuery('span.slug-doi', function(el){
    if(el.length>0){
      doi = el[0].title||doi[0].getAttribute('title');
    }
  });
}

// footer doi
if(doi == "None"){
  _satellite.cssQuery('div.field-name-field-doi div.field-item', function(el){
    if(el.length>0){
      doi = _satellite.cleanText(_satellite.text(el[0]));
    }
  });
}

// mobile doi
if(doi == "None"){
  _satellite.cssQuery('meta[name="DC.Identifier"]', function(el){
    if(el.length>0){
      var c = el[0].getAttribute('content');
      if(c){
        doi = _satellite.cleanText(c);
      }
    }
  });
}

//article doi
if(doi == "None"){
  _satellite.cssQuery('.doi', function(el){
    if(el.length>0){
      var c = el[0].innerHTML;
      if(c){          
          doi = c.replace(/.*DOI:\s+/,"");
          doi = _satellite.cleanText(doi);
      }
    }
  });
}

//login page doi
if(doi == "None"){
   _satellite.cssQuery('.cit-doi', function(el){
    if(el.length>0){
      doi = _satellite.cleanText(_satellite.text(el[0]));
      doi = doi.replace('DOI:','');
    }
  }); 
}

//login page doi
if(doi == "None"){
  _satellite.cssQuery('meta[name=news_doi]', function(el){
    if(el.length>0){
      doi = el[0].getAttribute('content');
    }
  });
}

if(doi){
  return doi;
}
},"default":"None","storeLength":"pageview"},
    "donation_amt": {"customJS":function(){
var amt = 0;

//free text field
var txtField = document.getElementsByClassName('BBFormTextbox')[0].outerHTML;
var txtId = txtField.match(/id="([^"]+)"/)[1];

if(document.getElementById(txtId).value !== "") {
	amt = parseInt(document.getElementById(txtId).value );
}

//radio selections
var vatop = document.getElementsByClassName('vaTop');
var valength = vatop.length;
var span = '';

for(var i = 0; i < valength; i++) {
	span = vatop[i].innerHTML.match(/id="([^"]+)"/)[1];
  if(document.getElementById(span).checked === true) {
  	var amt = parseInt(vatop[i].parentNode.parentNode.innerHTML.match(/\$([^<]+)<\/span>/)[1])
  }
}

return amt;
},"storeLength":"pageview"},
    "et_cid": {"queryParam":"et_cid","storeLength":"pageview","ignoreCase":1},
    "et_mid": {"queryParam":"et_mid","storeLength":"pageview","ignoreCase":1},
    "et_rid": {"queryParam":"et_rid","storeLength":"pageview","ignoreCase":1},
    "Field Code": {"selector":"meta[name=citation_collection_id]","property":"content","default":"none","storeLength":"pageview"},
    "Freewall Displayed": {"customJS":function(){
var activeTab = _satellite.getVar('ViewType');
_satellite.notify('FREEWALL: View Type is ' + activeTab);
var freewall = 'unknown';
if( activeTab == 'Figures' || activeTab == 'Full text PDF + HTML' || activeTab == 'Full text' ) {
  _satellite.notify('FREEWALL: eligible page');
  _satellite.notify('FREEWALL: ' + _satellite.getVar('Subscriber Status') );
  if( _satellite.getVar('Subscriber Status').match('highwire=false') != null ) { // user is not logged in. Freewall is displayed
     _satellite.notify('FREEWALL: user not logged in');
    freewall = 'possible';
  } else { // user is logged in, no freewall.
    _satellite.notify('FREEWALL: user logged in');
    freewall = 'not displayed';
  }
} else if( activeTab == "Abstract" || activeTab == "Editor's Choice" ) {
  _satellite.notify( "FREEWALL: Abstract tab or Editor's Choice" );
  if( document.querySelector( '#login-pane.is-revealed' ) != null ) { // freewall pane displayed
    _satellite.notify('FREEWALL: freewall pane displayed');
    freewall = 'possible';
  } else if( document.querySelector( '#login-pane' ) == null && document.querySelector( 'form#user-login' ) != null ) {
    _satellite.notify('FREEWALL: freewall login page');
    freewall = 'possible';
  } else {
    _satellite.notify('FREEWALL: freewall pane hidden');
    freewall = 'not displayed'
  }
} else {
  freewall = 'not displayed';
}

// FREEWALL EXCEPTIONS
if( freewall == 'possible' ) { // only check exceptions if we've determined that the freewall may be displayed.
	if( document.querySelector('.pane-jnl-sci-challenge-pane .alert--info') != null && document.querySelector('.pane-jnl-sci-challenge-pane .alert--info').innerHTML.match('free with registration') != null ) {
    _satellite.notify( 'FREEWALL: Content is free with registration. The login pane may still be displayed.' );
    freewall = 'displayed';
  } else {
    freewall = 'not displayed';
  }
} else {
  freewall = 'not displayed';
}

return "freewall " + freewall;
},"storeLength":"pageview"},
    "Freewall Event": {"customJS":function(){
if( _satellite.getVar('Freewall Displayed') == 'freewall displayed' ) {
  return 'event40'; 
}

return "";
},"storeLength":"pageview"},
    "GA-UA-ACCT-ID": {"customJS":function(){
try { return _satellite.map(_gat._getTrackers(), function (tracker) { return tracker._getAccount(); }).join("|"); } catch(err) { _satellite.notify('GA-UA-ACCT-ID data element failed',1); 
}

},"default":"None","storeLength":"pageview"},
    "Google Search Results": {"customJS":function(){
if(_satellite.getVar('Google Search Session') !== '') {
  if(_satellite.getVar('Google Search Session').lastSearchMeta.totalResults > 0) {
  	return _satellite.getVar('Google Search Session').lastSearchMeta.totalResults;
  } else {
  	return 'zero';
  }
}
},"storeLength":"pageview"},
    "Google Search Session": {"customJS":function(){
if(sessionStorage.length > 0 && history.state != null) {
	return JSON.parse(sessionStorage.getItem('@@History/' + history.state.key));
} else {
	return '';
}
},"storeLength":"pageview"},
    "Google Search Term": {"customJS":function(){
if(_satellite.getVar('Google Search Session') !== '') {
	return _satellite.getVar('Google Search Session').searchParams.q;
} else {
	return '';
}
},"storeLength":"pageview"},
    "Google Search Type": {"customJS":function(){
if(_satellite.getVar('ParameterString').match(/(datestart|dateend|siteSearch)\=/) != null) {
	return 'Advanced';
} else {
	return 'Simple';
}
},"storeLength":"pageview"},
    "Hour": {"customJS":function(){
var d = new Date();
var n = d.getHours();

return n + ':00';
},"storeLength":"pageview"},
    "Intcmp": {"queryParam":"intcmp","storeLength":"pageview","forceLowerCase":true,"ignoreCase":1},
    "Interactive Name": {"customJS":function(){
if( document.querySelectorAll('[data-interactive-name]').length > 0 ) {
  return document.querySelectorAll('[data-interactive-name]')[0].getAttribute('data-interactive-name');
}
},"storeLength":"pageview","forceLowerCase":true},
    "isInternalURL": {"customJS":function(){
for( var i = 0; i <= _satellite.settings.domainList.length; i++ ) {
  if( window.location.hostname.match(/\.(.*?)$/) != null ) {
	  if( window.location.hostname.match(/\.(.*?)$/)[1].indexOf( _satellite.settings.domainList[i] ) != -1 ) {
	    return 'internal';
	  }
  }
}

return 'external';
},"storeLength":"pageview"},
    "Issue Meta": {"selector":"meta[name=citation_issue]","property":"content","storeLength":"pageview"},
    "Job Apply Type": {"customJS":function(){
var ja_type = 'Internal';

var a_title = $('li.actions__applylink a').attr('title');

if(a_title.match(/new window/i)) {
	ja_type = 'External';
}

return ja_type;
},"storeLength":"pageview"},
    "keywords": {"queryParam":"keywords","default":"None","storeLength":"pageview","ignoreCase":1},
    "Link Section": {"customJS":function(){
var c = 'linkSection',
    cookie = _satellite.readCookie(c);
if(cookie){
  _satellite.setVar(c,cookie)
}
_satellite.removeCookie(c);
return _satellite.getVar(c)||'';
},"storeLength":"pageview"},
    "Link Text": {"customJS":function(){
var c = 'linkText',
    cookie = _satellite.readCookie(c);
if(cookie){
  _satellite.setVar(c,cookie)
}
_satellite.removeCookie(c);
return _satellite.getVar(c)||'';
},"storeLength":"pageview"},
    "Marketing Cloud User ID": {"cookie":"AMCV_242B6472541199F70A4C98A6%40AdobeOrg","storeLength":"pageview"},
    "membership": {"queryParam":"membership","storeLength":"visitor","ignoreCase":1},
    "membership ID": {"customJS":function(){
//cookie exists
if(typeof _satellite.readCookie('member id') !== "undefined") {
	return _satellite.readCookie('member id');
}

//digitalData element exists (High Wire)
if(typeof digitalData !== "undefined") {
  if(typeof digitalData['page'] !== "undefined") {
    if(typeof digitalData['page']['member'] !== "undefined") {
      if(typeof digitalData['page']['member']['memberID'] !== "undefined" && digitalData['page']['member']['memberID'].length > 0) {
        return digitalData['page']['member']['memberID'];
      }
    }
  }
}
},"storeLength":"pageview","cleanText":true},
    "memcategory": {"customJS":function(){
var memcat = '';

//regfree pages
if(document.location.href.match(/Reg_app_NewForm.asp/) !== null) {
   memcat = 'Reg Free';
}

//membership pages
/*if(document.getElementsByClassName("dl-horizontal").length > 0) {

  var elems = document.getElementsByClassName("dl-horizontal")[0].children;
  var no_elems = document.getElementsByClassName("dl-horizontal")[0].children.length;

  for(var i = 0; i < no_elems; i++) {
    if(elems[i].innerText === "Member Category") {
      memcat = elems[i + 1].innerText;
    }
  }
  
}*/
memcat = document.location.pathname.replace(/\/([a-z]+)-member/,'$1');

if(document.location.href.match(/science-advocate/) !== null) {
   memcat = 'science-advocate';
}

return memcat;
},"storeLength":"pageview"},
    "memnewsletter": {"customJS":function(){
var newslettersSelected = [];

var boxes = document.querySelectorAll( '#newsAlert' );
for( var i = 0; i < boxes.length; i++ ) {
  if( boxes[i].checked === true ) {
    newslettersSelected.push( boxes[i].value );
  }
}

return newslettersSelected.join( "," );
},"storeLength":"pageview"},
    "News_keyword_meta": {"selector":"meta[name=news_key_words]","property":"content","storeLength":"pageview","forceLowerCase":true},
    "Newsletter Signup Abbreviated List": {"customJS":function(){
var newsMap = {
	"Science Table of Contents":"SciTOC",
  "Science Table of Contents":"SciTOC", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Science Daily News":"DlyNew",
  "Science Daily News":"DlyNew", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Science News This Week":"SciWek",
  "Science Editor's Choice":"EdtChc",
  "Science Editor's Choice":"EdtChc", //Note: appears same as above, but for some reason needed between 2 diff forms
  "First Release Notification":"1stRel",
  "Science Careers Job Seeker":"SCjob",
  "Third Party Emails":"3rdPar",
  "First Party Emails":"1stPar",
  "Science Latest News and Headlines":"DlyNew",
  "Science Advances TOC":"AdvTOC",
  "Science Advances TOC":"AdvTOC", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Science Translational Medicine TOC":"StmTOC",
  "Science Translational Medicine TOC":"StmTOC", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Science Signaling TOC":"SigTOC",
  "Science Signaling TOC":"SigTOC", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Science Immunology TOC":"ImmTOC",
  "Science Immunology TOC":"ImmTOC", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Science Robotics TOC":"RobTOC",
  "Science Robotics TOC":"RobTOC", //Note: appears same as above, but for some reason needed between 2 diff forms
  "This Week in Science":"TWIS",
  "This Week in Science":"TWIS",	//Note: appears same as above, but for some reason needed between 2 diff forms
  "Science Weekly News Roundup":"WKNews",
  "Science Roundup in Chinese":"CHINA",
  "Science Roundup in Chinese":"CHINA", //Note: appears same as above, but for some reason needed between 2 diff forms
  "Japan Highlights":"JAPAN",
  "Science Careers Job Seeker Newsletter":"SCjob",
  "AAAS/Science Emails":"1stPar",
  "Partner Emails":"3rdPar",
  "Special Announcements from AAAS/Science":"AAASann",
  "AAAS Events":"AAASevnt",
  "AAAS Webinars":"AAASwbnr",
  "Surveys":"Survey",
  "Science Signaling Announcements":"SigAnn",
  "Science Translational Medicine Announcements":"StmAnn",
  "Science Advances Announcements":"AdvAnn",
  "Careers Events":"SCevnt",
  "Science Careers Booklets":"SCbklt",
  "Science Careers Webinars":"SCwbnr",
  "Miscellaneous Announcements from Science Careers":"SCMisc",
  "AAAS Policy Alert":"AAASpa",
  "Job Seeker Newsletter (Career Path)":"SCjob",
  "Science Careers Surveys":"SCsurv",
  "Dialogue on Science, Ethics, and Religion (DoSER) Announcements":"DoSER",
  "Project 2061 Alerts":"2061Al",
  "Project 2061 Connections":"2061Co",
  "Science NetLinks":"NetLnk",
  "Science in the Classroom":"SITC",
  "Science and Human Rights Report":"SciHmR",
  "Professional Ethics Report":"EthRep",
  "Science & Diplomacy":"SciDip",
  "Science Product and Technology Newsletter":"SciPrd",
  "Science Webinars":"SciWeb",
  "Science Focus":"SciFoc",
  "Science Prizes":"SciPrz",
  "Science Meetings and Conferences":"SciConf",
  "Science Custom Content":"SciCus",
  "BioMed Roundup":"BioMed",
  "Science Roundup":"SciRDU",
  "Science TOC":"SciTOC",
  "Science First Release Notification":"1stRel",
  "Editors' Choice":"EdtChc",
  "Science Weekly News":"WKNews",
  "News from Science Weekly Headlines":"WKAlert",
  "Mailings from Outside Organizations":"Mail3rd",
  "Mailings AAAS/Science Only":"MailSci",
  "Mailings Membership Related Only":"MailMbr",
  "AAAS Annual Meeting Newsletter":"AAASnew",
	"Selected Content Emails":"SelCon",
	"Member Update":"MemUpd"
}


var updatedList = _satellite.getVar('arrUpdatedlist');
if (typeof _satellite.getVar('truncateList') !== "undefined" && _satellite.getVar('truncateList') == 'newSubs'){
  updatedList = _satellite.getVar('arrNewSubscriptions');
} else if (typeof _satellite.getVar('truncateList') !== "undefined" && _satellite.getVar('truncateList') == 'lostSubs'){
	updatedList = _satellite.getVar('arrLostSubscriptions');
}

var abbrevArr = [];
if (typeof updatedList !== 'undefined'){
	for (var x = 0; x < updatedList.length; x++){
    if (typeof newsMap[updatedList[x]] !== 'undefined'){
      abbrevArr.push(newsMap[updatedList[x]]);
    } else {
      abbrevArr.push(updatedList[x]);
    }
  }
  return abbrevArr.join();
}
},"storeLength":"pageview"},
    "Node-shortlink": {"selector":"link[rel=shortlink]","property":"href","storeLength":"pageview"},
    "Num Search Results": {"customJS":function(){
var results;
var searchResults = null;
var searchResultsParsed = null;

_satellite.cssQuery('span.results-total', function(el){
  if(el.length>0){
    results = _satellite.cleanText(_satellite.text(el[0]));
  }
});

// look for sciencemag.org and journal results
searchResults = document.querySelector('div.primary--listpage > h1'); // look for www.sciencemag.org formatted search results (as of 5/11/16)
if( searchResults == null ) searchResults = document.querySelector('div#search-summary-wrapper--2 > h2')
if( searchResults != null ) {
  searchResultsParsed = searchResults.innerText.match( /^Your search for (.+) returned (\d+) results\.$/ ); // look for journal formatted search results (as of 5/11/16)
  if( searchResultsParsed != null ) {
    results = searchResultsParsed[2];
    if( results == 0 ) results = 'zero';
  }
}

// look for aaas.org results
if( searchResults == null ) searchResults = document.querySelector('div.searchhead');
if( searchResults != null ) {
  searchResultsParsed = searchResults.innerText.match( /approximately (\d+) hits/i ); // look for aaas.org formatted search results (as of 5/11/16)
  if( searchResultsParsed != null ) {
    results = searchResultsParsed[1];
    if( results == 0 ) results = 'zero';
  }
}

// look for jobs.sciencecareers.org results
//document.querySelector('h1#searching').innerText.match( /Found (\d+) jobs/i )[1]
if( searchResults == null ) searchResults = document.querySelector('h1#searching');
if( searchResults != null ) {
  searchResultsParsed = searchResults.innerText.match( /Found (\d+) jobs/i ); // look for jobs.sciencecareers.org formatted search results (as of 5/11/16)
  if( searchResultsParsed != null ) {
    results = searchResultsParsed[1];
    if( results == 0 ) results = 'zero';
  }
}

// look for blogs.sciencemag.org results (as of 5/11/16)
if( searchResults == null ) {
  var blogSearchHeader = document.querySelector('article.primary > h1');
  if( blogSearchHeader != null ) {
    if( blogSearchHeader.innerText.match(/search results for/i) != null ) {
      results = document.querySelectorAll('article.primary > ul.item-list > li > article').length;
      if( results == 0 ) results = 'zero';
    }
  }
}

return results || 'zero'
},"storeLength":"pageview"},
    "Overline-Meta (Restored)": {"customJS":function(){
var overlineElement = document.querySelector('span.article-overline')
if( typeof overlineElement === 'undefined' || overlineElement === null ) {
  overlineElement = document.querySelector( 'span.overline__subject' );
}

if( overlineElement !== 'undefined' && overlineElement !== null ) {
  return overlineElement.innerHTML; 
}
},"default":"none","storeLength":"pageview"},
    "Page Load Time": {"customJS":function(){
var performance = window.performance ? window.performance.timing : 0,
    now = new Date().getTime(),
    start = performance ? performance.requestStart : _satellite.pageStart,
    time;

if(start && start > 0 && !_satellite.getVar('tmp_pg_load_time')){
  time = now - start;
  _satellite.setVar('tmp_pg_load_time', time);
}

return _satellite.getVar('tmp_pg_load_time')||'';
},"storeLength":"pageview"},
    "PageName_CustomScript": {"customJS":function(){
var hostname = window.location.hostname;
var path = window.location.pathname;
var pagename = hostname + path;

//1. use data elememt url if it exists
if(typeof digitalData !== "undefined") {
  if(typeof digitalData.page !== "undefined") {
    if(typeof digitalData.page.pageInfo !== "undefined") {
    	if(typeof digitalData.page.pageInfo.destinationURL !== "undefined") {
        pagename = digitalData.page.pageInfo.destinationURL.replace(/^https?\:\/\//, ''); 
    	}
    }
  }

//2. use canonical meta if it exists  
} else if(_satellite.getVar('canonical_meta') !== "") {
	pagename = _satellite.getVar('canonical_meta').replace(/^https?\:\/\//, '');
}

//3. proxy scrub
const regex = /(science|stm|stke|immunology|advances|robotics|www|search)\.\:\.([^\/]*)/;
const subst = '$1.:';   // This omits the first capturing group from the replace

return (pagename)
  .replace('-sciencemag-org', '.sciencemag.org')
  .replace('sciencemag.org', ':')                   
  .replace(/index(\.(x?html|php))?\/?/g, '')        
  .replace(/\/$/, '')                               
  .replace(/:$/, ':/')                              
	.replace(regex, subst)
  .replace(/:$/, ':/') ; 
},"default":"None","storeLength":"pageview"},
    "Page Type": {"customJS":function(){
var pathname = document.location.pathname;
var hostname = document.location.hostname;
if( _satellite.getVar('Page Type Data Layer') != "" ) {
  return _satellite.getVar('Page Type Data Layer');
//contact pages
} else if( pathname.match( /^\/contact\// )) {
  return "contact page";  
//login pages
} else if( pathname.match( /(login)/ )) {
  return "login page";  
//news pages
} else if( pathname.match( /^\/news\// )) {
  return "news page";
//journal
} else if ( pathname.match( /^\/content\// )) {
  return "journal page";
//topics
} else if ( pathname.match( /^\/topic\// )) {
  return "topics page";  
//careers
} else if ( pathname.match( /^\/careers\// )) {
  return "careers page";  
//about pages
} else if ( pathname.match( /^\/about\// )) {
  return "about page";  
//help pages
} else if ( pathname.match( /^\/(help|faq)\// )) {
  return "help page";  
//features pages
} else if ( pathname.match( /^\/features/ )) {
  return "features page";    
//search pages  
} else if ( pathname.match( /^\/search\// )) {
  return "search page";    
//science router pages
} else if ( hostname === 'www.sciencemag.org' && pathname.match( /^\/(news|journals|topics|careers)$/ )) {
  return "router page";  
//jobs pages
} else if ( hostname === 'jobs.sciencecareers.org') {
  return "jobs page";   
} else if ( pathname.match( /\/searchjobs\// )) {
  return "search page";     
//blog home page - pipeline
} else if ( hostname === 'blogs.sciencemag.org' && pathname.match( /^\/(pipeline|sciencehound)\/$/ )) {
  return "router page";  
//blog pages
} else if ( hostname === 'blogs.sciencemag.org' && pathname.match( /\/([0-9]{4})\// )) {
  return "blog page";  
} else if (hostname === "careerdevelopment.aaas.org" && pathname === "/") {
  return "router page";  
} else if (hostname === "pubs.aaas.org") {
  return "ecommerce page";  
} else if (hostname === "search.sciencemag.org") {
  return "search page";  
//home pages
} else if ( pathname == "/" ) {
  return "home page";  
} else {
  return "other page";
}
},"storeLength":"pageview"},
    "Page Type Data Layer": {"jsVariable":"digitalData.page.attributes.pageType","storeLength":"pageview"},
    "Page URL": {"jsVariable":"window.location.href","storeLength":"pageview"},
    "ParameterString": {"customJS":function(){
return window.location.search;
},"default":"None","storeLength":"pageview"},
    "Paywall Displayed": {"customJS":function(){
var activeTab = _satellite.getVar('ViewType');
var paywall = 'unknown';
if( activeTab == 'Figures' || activeTab == 'Full text PDF + HTML' || activeTab == 'Full text' ) {
  _satellite.notify('PAYWALL: eligible page');
  _satellite.notify('PAYWALL: ' + _satellite.getVar('Subscriber Status') );
  if( _satellite.getVar('Subscriber Status').match('highwire=false') != null ) { // user is not logged in. Paywall is displayed
     _satellite.notify('PAYWALL: user not logged in');
    paywall = 'displayed';
  } else { // user is logged in, no paywall.
    _satellite.notify('PAYWALL: user logged in');
    paywall = 'not displayed';
  }
} else if( activeTab == "Abstract" ) {
  _satellite.notify( "PAYWALL: Abstract tab" );
  if( document.querySelector( '#login-pane.is-revealed' ) != null ) { // paywall pane displayed
    _satellite.notify('PAYWALL: paywall pane displayed');
    paywall = 'displayed';
  } else {
    _satellite.notify('PAYWALL: paywall pane hidden');
    paywall = 'not displayed'
  }
} else {
  paywall = 'not displayed';
}

// PAYWALL EXCEPTIONS
if( paywall == 'displayed' ) { // only check exceptions if we've determined that the paywall may be displayed.
	if( document.location.hostname == 'advances.sciencemag.org' ) {
	  _satellite.notify( 'PAYWALL: Exception - Science Advances content is always free.' );
	  paywall = 'not displayed';
  //} else if( _satellite.getVar('publish_date_age') > 365 ) { // content over 1 year old is free with registration
  // NOTE: We don't need the age check, since the "free with registration" message is displayed. Keep this code in case that changes.
  //  _satellite.notify( 'PAYWALL: Exception - content over 1 year old is free with registration. Note that the login pane may still be displayed.' );
  //  paywall = 'not displayed';
  } else if( document.querySelector('.pane-jnl-sci-challenge-pane .alert--info') != null && document.querySelector('.pane-jnl-sci-challenge-pane .alert--info').innerHTML.match('free with registration') != null ) {
    _satellite.notify( 'PAYWALL: Exception - content is free with registration. The login pane may still be displayed.' );
    paywall = 'not displayed';
  }
}

return "paywall " + paywall;
},"storeLength":"pageview"},
    "Paywall eVar": {"customJS":function(){
if( 
  _satellite.getVar('Paywall Displayed') == 'paywall displayed' 
  || _satellite.getVar('Freewall Displayed') == 'freewall displayed' 
) {
  return _satellite.getVar('DOI');
}

return "";
},"storeLength":"pageview"},
    "Paywall Event": {"customJS":function(){
if( _satellite.getVar('Paywall Displayed') == 'paywall displayed' ) {
  return 'event38'; 
}

return "";
},"storeLength":"pageview"},
    "paywall_hello_url": {"default":"https://www.aaas.org/hello","storeLength":"pageview"},
    "Paywall Prop": {"customJS":function(){
if( _satellite.getVar('Paywall Displayed') == 'paywall displayed' ) {
  return "Paywall: " + _satellite.getVar('DOI');
} else if( _satellite.getVar('Freewall Displayed') == 'freewall displayed' ) {
  return "Freewall: " + _satellite.getVar('DOI');
}

return "";
},"storeLength":"pageview"},
    "Percent Page Viewed": {"cookie":"sat_ppv","storeLength":"pageview"},
    "primary_section": {"customJS":function(){
var primary_section = '';

if($('select[name=primary_section]').length) {
  var primary_section = $('select[name=primary_section]').val();
}

return primary_section;
},"storeLength":"pageview"},
    "Proxy Filter": {"customJS":function(){
const str = _satellite.getVar('PageName_CustomScript');
const regex = /(science|stm|stke|immunology|advances)\.\:\.(ezp|ezproxy|ezlibproxy1|gate1|gate2|libproxy|myaccess|offcampus|proxy)\.([^\/]+)\/(.+)/;
const subst = '\$1.:/\$4';
const result = str.replace(regex, subst);

return result;
},"default":"None","storeLength":"pageview"},
    "publish_date": {"customJS":function(){
/*
Drupal (meta property)
*/
if(document.querySelector('meta[property="article:published_time"]') != null) {
	var pubdate = document.querySelector('meta[property="article:published_time"]').content.substring(0,10);
}

/*
High Wire (meta name)
*/
if(document.querySelector('meta[name="article:published_time"]') != null) {
	var pubdate = document.querySelector('meta[name="article:published_time"]').content.substring(0,10);
}

if(typeof pubdate !== "undefined") {
  var pubyear = pubdate.substring(0,4);
  var pubmonth = pubdate.substring(5,7);
  var pubday = pubdate.substring(8,10);

  var delim = '/';
	return pubmonth + delim + pubday + delim + pubyear;
} else {
	return;
}
},"storeLength":"pageview"},
    "publish_date_age": {"customJS":function(){
if(_satellite.getVar('publish_date') !== '') {
  var pubDate = _satellite.getVar('publish_date');
  
  var date1 = new Date(pubDate);
  var date2 = new Date();
  
  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
  var diffDays = Math.floor(timeDiff / (1000 * 3600 * 24));
  
  if(diffDays === 0) {
  	diffDays = 'zero';
  }
  
  return diffDays;
} else {
	return;
}
},"default":"zero","storeLength":"pageview"},
    "pubs_free_reg_codes": {"default":"[\"p0rfb1\",\"p0rfa1\"]","storeLength":"pageview"},
    "pubs_join_product": {"customJS":function(){
if(_satellite.getVar('dl_pageid').match(/Pubs Join/) !== null) {
	if(_satellite.getVar('pubs_free_reg_codes').indexOf(_satellite.getVar('dl_promocode')) >= 0) {
    return 'Free Reg';                     
  } else {
    return 'Membership';
  }
}
},"storeLength":"pageview"},
    "purchase price": {"customJS":function(){
var arr = jQuery("form[action*='/cgi-bin/send_to_hw.asp'] td:contains('$')");
var rtn ="";
if(arr.length > 0){
rtn = arr[0].innerHTML.replace(/.*\$/,"");
rtn = rtn.replace(/\s.*/,"");  
rtn = rtn.replace(/\&.*/,"");  
}
return rtn
},"storeLength":"pageview"},
    "Randomizer": {"customJS":function(){
return Math.floor((Math.random() * 100) + 1);
},"storeLength":"pageview"},
    "Referring Hostname": {"customJS":function(){
try {
  var a = document.createElement('a');
  a.href = document.referrer;
  return a.hostname;
} catch(e) {
  _satellite.notify(e);
}
},"storeLength":"pageview"},
    "referring url": {"jsVariable":"document.referrer","storeLength":"pageview"},
    "Search Term": {"customJS":function(){
var result = null;

// list of possible query string parameters for search
var searchParameters = [
  'fulltext',
  'keywords',
  's',
  'keys'
];

// 1. look for search term in query string parameters
for( var i = 0; i < searchParameters.length; i++ ) {
	if( result == null ) {
		var theParameter = searchParameters[i];
    _satellite.notify( "search term looking for " + theParameter + " query string parameter (" + (i + 1) + " of " + searchParameters.length + ")." );
		var params = window.location.search.substr(1).split('&');
		for (var j = 0; j < params.length; j++) {
		  var p=params[j].split('=');
		  if (p[0].toLowerCase() == theParameter.toLowerCase() ) {
		    result = decodeURIComponent(p[1]);
		    _satellite.notify( "search term " + result + " found by " + theParameter + " querystring parameter", 1 );
		  }
		}
	}
}

// 2. Look for /search at the start of the URL.
if( result == null ) {
  var haystack = window.location.pathname;
	var pattern = /^\/search\/(gss\/)?(.*?)($)/;
	if( pattern.exec( haystack ) != null ) var needle = pattern.exec( haystack )[2];
	if( typeof needle !== 'undefined' && needle !== null ) {
	  result = needle;
		_satellite.notify( "search term found by URL: " + result );
	}
}

// 3. Clean up the results
if( result != null ) {
  result = result.replace( /%252B/g, " " );
	result = result.replace( /%20/g, " " );
	result = result.replace( /\+/g, " " );
}

return result;
},"storeLength":"pageview","forceLowerCase":true},
    "Search Type": {"customJS":function(){
var qp = _satellite.getQueryParam,
    type = [], prefix = '';
// advanced
if(qp('andorexactfulltext')){
  prefix = 'Advanced-';
  // citation
  if(qp('volume') || qp('firstpage')){
    type.push('Citation')
  }
  // doi
  if(qp('doi')){
    type.push('DOI')
  }
  // keywords/authors
  if(qp('fulltext') || qp('titleabstract') || qp('title') || qp('author1') || qp('author2')){
    type.push('Keywords/Authors')
  }
  // area/section
  if(qp('tocsectionid')!='all'){
    type.push('Area/Section');
  }
} else if(qp('advanced-form')) {
  type.push('Advanced');
// simple
} else {
  type.push('Simple');
}
return prefix+type.join('|');
},"storeLength":"pageview"},
    "serialize_day_user": {"customJS":function(){
if( _satellite.readCookie( 'unquserval' ) == undefined ) {
  _satellite.setCookie( 
                       'unquserval'
                       , _sdi.dateCode3() + _sdi.randomString(17)
                       , _sdi.msToMidnight()/(24*60*60*1000)
                      );
}

return _satellite.readCookie( 'unquserval' );
},"storeLength":"pageview"},
    "state": {"customJS":function(){
var state = '';

//pubs - depends on JQuery
if(document.domain === "pubs.aaas.org") {
  if($('input[name=state]').length) {
    var state = $('input[name=state]').val();
  }
}

//career development
if(document.getElementById('billing_state') !== null) {
  var state = document.getElementById('billing_state').value;
}

return state;
},"storeLength":"pageview"},
    "Subdomain.Domain.TopLevel": {"customJS":function(){
return window.location.hostname;
},"default":"None","storeLength":"pageview"},
    "Subscriber H20": {"selector":"li.subscr-ref","property":"text","storeLength":"pageview","forceLowerCase":true},
    "Subscriber Institution": {"customJS":function(){
var institution = '';

_satellite.cssQuery('.user-block__institution', function(el){
  if(el.length>0){
    var c = el[0].textContent;
    if(c){          
      institution = c.replace(/Institution: /,"");
      institution = _satellite.cleanText(institution);
      institution = 'ist:' + institution;
    }
  }
});

return institution;
},"storeLength":"pageview","forceLowerCase":true},
    "Subscriber Jobs": {"customJS":function(){
if( document.querySelector('.jobseekers__item--username a' ) != null ) {
	return document.querySelector('.jobseekers__item--username a').text.trim();
}

return null;
},"storeLength":"pageview"},
    "Subscriber Member Central": {"customJS":function(){
if(document.location.hostname === 'www.aaas.org' && document.getElementById('edit-openid-connect-client-aaas-login') == null) {
  return 'usr:';
}

return null;
},"storeLength":"pageview"},
    "Subscriber Status": {"customJS":function(){
var highwire = "false";
var jobs = "false";
var membercentral = "false";
var delim = '|';

//--------- user: jobs ---------
var careers = _satellite.getVar('Subscriber Jobs');
if( careers != '' ) {
  jobs = "true";
}

//--------- user: jcore ---------
var user = _satellite.getVar('Subscriber User');
if(user != '') {
  highwire = "true";
}

//--------- institution: jcore ---------
var institution = _satellite.getVar('Subscriber Institution');
if(institution != '') {
  highwire = "true";
}

//--------- institution: jcore ---------
var h20 = _satellite.getVar('Subscriber H20');
if(h20 != '' && h20 != 'guest') {
  highwire = "true";
}

//--------- member central/aaas ---------
var mc = _satellite.getVar('Subscriber Member Central');
if(mc != '') {
  membercentral = "true";
}

var logged = "highwire=" + highwire + delim + "jobs=" + jobs + delim + "membercentral=" + membercentral;
return logged;
},"storeLength":"pageview"},
    "Subscriber User": {"customJS":function(){
var user = '';

var welcomeText = document.querySelector( ".user-block__welcome p" )
if( typeof welcomeText !== undefined && welcomeText !== null ) {
  user = 'usr:';// + welcomeText.innerText.replace( /^Welcome, /, "" ).replace( /\.$/, "" );
}

return user;
},"storeLength":"pageview","forceLowerCase":true},
    "Super Search Results": {"customJS":function(){
if(_satellite.getVar('Super Search Session') !== '') {
  var results = _satellite.getVar('Super Search Session').totalResults;
  if(results) {
  	return results;
  } else {
  	return 'zero';
  }
}
},"storeLength":"pageview"},
    "Super Search Session": {"customJS":function(){
// From Google Search Session

return (history.state) ? history.state : '';
},"storeLength":"pageview"},
    "Super Search Term": {"customJS":function(){
if(_satellite.getVar('Super Search Session') !== '') {
	return _satellite.getVar('Super Search Session').searchTerm;
} else {
	return '';
}
},"storeLength":"pageview"},
    "Super Search Type": {"customJS":function(){
if(_satellite.getVar('ParameterString').match(/(startDate|endDate|articleTypes|source|fpage)\=/) != null) {
	return 'Advanced';
} else {
	return 'Simple';
}
},"storeLength":"pageview"},
    "TAXONOMY": {"jsVariable":"document.getElementsByName(\"citation_taxonomy\")[0].value","default":"None","storeLength":"pageview","forceLowerCase":true},
    "Temp-ScienceInsider": {"selector":"meta[name=news_section]","property":"content","storeLength":"pageview","forceLowerCase":true},
    "User Signed In": {"customJS":function(){
try {
	if($('#authstring a[href="/logout"]').text().trim() === "Sign Out") {
  	return "Logged In"; 
	} else { 
  	return "Not Logged In";
	}
}
catch(err) {
  _satellite.notify('USER SIGNED IN DATA ELEMENT ERROR: ' + err,1);
}
},"storeLength":"pageview"},
    "utm_campaign": {"queryParam":"utm_campaign","storeLength":"pageview","forceLowerCase":true,"ignoreCase":0},
    "utm_content": {"queryParam":"utm_content","storeLength":"session","forceLowerCase":true,"ignoreCase":0},
    "utm_medium": {"queryParam":"utm_medium","storeLength":"session","forceLowerCase":true,"ignoreCase":0},
    "utm_scr": {"queryParam":"utm_src","storeLength":"session","forceLowerCase":true,"ignoreCase":1},
    "utm_source": {"queryParam":"utm_source","storeLength":"session","forceLowerCase":true,"ignoreCase":0},
    "utm_term": {"queryParam":"utm_term","storeLength":"session","forceLowerCase":true,"ignoreCase":0},
    "ViewType": {"customJS":function(){
var p = document.location.pathname.toLowerCase(),
    type='',
    ps = p.split('/'),
    lastp = ps[ps.length-1];

if(p.indexOf('.ful')>-1 && p.indexOf('.full')==-1){
  type = 'Full';
}
// Full Text PDF + HTML
else if(p.indexOf('.full-text.pdf+html')>-1){
  type = 'Full text PDF + HTML';
}
// Full Text PDF
else if(p.indexOf('.full.pdf')>-1){
  type = 'Full text PDF';
}
else if( lastp == 'tab-pdf' ) {
  type = 'Full text PDF';
}
// Full Text
else if(p.indexOf('.full')>-1){
  type = 'Full text';
}
else if( p.indexOf('.abstract')>-1 ) {
	type = "Abstract"  
}
else if(p.indexOf('.abs')>-1){
  type = 'ABS';
}
else if(p.indexOf('.refs')>-1){
  type = 'Reference';
}
else if(p.indexOf('.large')>-1){
  type = 'Large';
}
else if(p.indexOf('.long')>-1){
  type = 'Long';
}
else if(p.indexOf('.pdf')>-1){
  type = 'PDF';
}
else if (p.indexOf('.article-info')>-1) {
	type = 'Info & Metrics';         
}
else if (p.indexOf('.e-letters')>-1) {
	type = 'eLetters'; 
}
else if (p.indexOf('.editor-summary')>-1){
  type = 'Editors Summary';
}
else if(p.indexOf('.figures-only')>-1){
  type = 'Figures';
}
else if(p.indexOf('/suppl/')>-1){
  type = 'Supplemental Materials';
}
else if(p.indexOf('.comments')>-1){
  type = 'Comments';
}
else if(p.indexOf('/cgi/folders')>-1){
  type = 'Save to folders';
}
else if(p.indexOf('.expansion')>-1){
  type = 'Expansion';
}
else if(p.indexOf('.toc')>-1 || document.getElementById('toc-header')){
  type = 'Table of Contents';
}
else if(p.indexOf('.summary')>-1){
  type = 'Summary';
}
else if(p.indexOf('.gloss')>-1){
  type = 'Gloss';
}
else if(lastp.indexOf('ec')>-1){
  type = "Editor's Choice";
}
else if( p.match(/^\/content\//i) !== null && _satellite.getVar('DOI') !== 'None' ) {
  type = 'Abstract';
}
else {
  type = 'Other';
}

if(type){
  var isLogin = false;
  _satellite.cssQuery('form.hw-login-form', function(els){
    if(els.length>0){
      isLogin = true;
    }
  });
  if(isLogin){
    type+=':login';
  }
}

if(type){
  return type;
}
},"storeLength":"pageview"},
    "Volume Meta": {"selector":"meta[name=citation_volume]","property":"content","storeLength":"pageview"},
    "zip_code": {"customJS":function(){
var zip_code = '';

//pubs - depends on JQuery
if(document.domain === "pubs.aaas.org") {
  if($('input[name=zip_code]').length) {
    var zip_code = $('input[name=zip_code]').val();
  }
}
  
//career development
if(document.getElementById('billing_postcode') !== null) {
  var zip_code = document.getElementById('billing_postcode').value;
}

return zip_code;
},"storeLength":"pageview"}
  },
  "appVersion": "7QN",
  "buildDate": "2018-08-30 12:54:05 UTC",
  "publishDate": "2018-08-30 12:54:04 UTC"
});
})(window, document);
