
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"289",
  "macros":[{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-clp-course-id\")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",1],8,16],";return parseFloat(a\/100).toFixed(2)})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.amount"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",3],8,16],";return a\/100})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery('a[data-purpose\\x3d\"take-this-course-button\"').attr(\"data-signuppopupidentifier\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\"div.hidden-course-bar.slideDown\").length)return\"scrolled\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").length})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery('div[data-purpose\\x3d\"introduction-video\"]').length)return jQuery(\".current-price\").text().replace(\"$\",\"\").trim()})();"]
    },{
      "function":"__j",
      "vtp_name":"UD.request.locale"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"ja_JP\"==",["escape",["macro",9],8,16],"||\"ja-JP\"==",["escape",["macro",9],8,16],"||\"jp-JP\"==",["escape",["macro",9],8,16],"||\"jp_JP\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"en_US\"==",["escape",["macro",9],8,16],"||\"en-US\"==",["escape",["macro",9],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-course-labels-experiment-hotjar\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(\"body\").attr(\"data-hotjar-channel-type\")})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){channelType=jQuery(\"body\").attr(\"data-hotjar-channel-type\");hotjarPage=jQuery(\"body\").attr(\"data-hotjar-page\");return\"featured\"===channelType||\"logged-in-homepage\"===hotjarPage})();"]
    },{
      "function":"__u",
      "vtp_component":"URL"
    },{
      "function":"__u",
      "vtp_component":"PATH"
    },{
      "function":"__j",
      "vtp_name":"UD.me.id"
    },{
      "function":"__e"
    },{
      "function":"__u"
    },{
      "function":"__r"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"analyticsAccount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.appId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount.successLabel"
    },{
      "function":"__aev",
      "vtp_varType":"URL",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"video-player-no-purpose",
      "vtp_name":"gtm.element.dataset.purpose"
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__aev",
      "vtp_varType":"ID"
    },{
      "function":"__aev",
      "vtp_varType":"CLASSES"
    },{
      "function":"__u",
      "vtp_component":"HOST"
    },{
      "function":"__j",
      "vtp_name":"UD.visiting.visitor.id"
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.id"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.isMarketingBoostAgreed"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.affiliateType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseId"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_id"
    },{
      "function":"__j",
      "vtp_name":"UD.me.impact_radius_email"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.code"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseAmount"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.purchaseSku"
    },{
      "function":"__aev",
      "vtp_setDefaultValue":false,
      "vtp_varType":"ATTRIBUTE",
      "vtp_attribute":"data-purpose"
    },{
      "function":"__f"
    },{
      "function":"__r"
    },{
      "function":"__d",
      "vtp_selectorType":"ID",
      "vtp_elementId":"tag-manager-courseId"
    },{
      "function":"__c",
      "vtp_value":"Course"
    },{
      "function":"__c",
      "vtp_value":"Topic"
    },{
      "function":"__v",
      "vtp_name":"eventCategory",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventAction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"nonInteraction",
      "vtp_dataLayerVersion":2
    },{
      "function":"__aev",
      "vtp_varType":"ELEMENT"
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__v",
      "vtp_name":"eventLabel",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventValue",
      "vtp_defaultValue":"undefined",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"eventNoninteraction",
      "vtp_defaultValue":"False",
      "vtp_setDefaultValue":true,
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"isMember",
      "vtp_dataLayerVersion":2
    },{
      "function":"__v",
      "vtp_name":"experiment",
      "vtp_dataLayerVersion":2
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",17],
      "vtp_defaultValue":"Included",
      "vtp_map":["list",["map","key","12392710","value","1"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"env"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"purchase.buyableTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.currency"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.isLinkshare"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"adwordsAccount"
    },{
      "function":"__c",
      "vtp_value":"aw"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"name"
    },{
      "function":"__j",
      "vtp_name":"window.scrollY"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.start"
    },{
      "function":"__c",
      "vtp_value":"UA-12366301-47"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"order.affiliateType"
    }],
  "tags":[{
      "function":"__html",
      "priority":2,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"Retargeting\"});\u003C\/script\u003E\n\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/udemy\/tfa.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":125
    },{
      "function":"__html",
      "priority":1,
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"1457291081167286\");fbq(\"track\",\"PageView\");\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":13
    },{
      "function":"__cl",
      "tag_id":28
    },{
      "function":"__lcl",
      "vtp_waitForTagsTimeout":"2000",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "tag_id":29
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":33
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":34
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"973941651",
      "vtp_conversionLabel":"PKv-COL4z1wQk9e00AM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":62
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"966888136",
      "vtp_conversionLabel":"TQxQCNq4hV0QyJWGzQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":65
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"951369813",
      "vtp_conversionLabel":"5dghCNW2hV0Q1YDTxQM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":66
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=a1ed898d-f7f9-4815-ba08-19fe053ee591\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "tag_id":78
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":true,
      "vtp_cacheBusterQueryParam":"gtmcb",
      "vtp_url":"https:\/\/5079.xg4ken.com\/media\/redir.php?track=1\u0026token=6af875c0-59a1-49cd-9618-5df0d111948d\u0026type=conv\u0026val=0.0\u0026orderId=\u0026promoCode=\u0026valueCurrency=USD\u0026GCID=\u0026kw=\u0026product=",
      "vtp_randomNumber":["macro",20],
      "tag_id":79
    },{
      "function":"__ua",
      "once_per_load":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"userID",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"excluded",
      "vtp_dimension":["list",["map","index","16","dimension",["macro",17]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/ct.pinterest.com\/?tid=fGjngNzQ7mk",
      "tag_id":82
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-29",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",22],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":["macro",23],
      "vtp_conversionLabel":["macro",24],
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":90
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/join\/login-popup\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":94
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","page","value","\/payment\/checkout\/"]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-46",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":95
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"seotest",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"seotest",
      "vtp_dimension":["list",["map","index","19","dimension","show price"]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":121
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"courseview",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":["macro",0],
      "vtp_dimension":["list",["map","index","5","dimension",["macro",0]],["map","index","6","dimension","offerdetail"],["map","index","8","dimension",["macro",8]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":122
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"send",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"15_seconds",
      "vtp_eventLabel":"read",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":123
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"signup",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":132
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventValue":["macro",2],
      "vtp_eventCategory":"purchase",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"course",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":133
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":134
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionValue":"1",
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":136
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":141
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":142
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"877552150",
      "vtp_conversionLabel":"80LmCOWbwGgQlsS5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":143
    },{
      "function":"__img",
      "once_per_event":true,
      "vtp_useCacheBuster":false,
      "vtp_url":"https:\/\/www.quora.com\/_\/ad\/f3d99eb602d5430b8ecc99610afe3ded\/pixel",
      "tag_id":145
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","allowLinker","value","True"],["map","fieldName","cookieDomain","value","auto"]],
      "vtp_trackerName":"ufbonly",
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"business.udemy.com",
      "vtp_decorateFormsAutoLink":true,
      "vtp_enableLinkId":false,
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-47",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":146
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"test video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"submission",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":154
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"createcourse",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",21],
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":155
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":158
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":159
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_conversionLabel":"9fRMCPq2oWcQ5JfsowM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":160
    },{
      "function":"__sp",
      "once_per_event":true,
      "vtp_conversionId":"880479204",
      "vtp_customParamsFormat":"NONE",
      "vtp_enableOgtRmktParams":false,
      "vtp_url":["macro",19],
      "tag_id":161
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"linkshare",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_enableLinkId":false,
      "vtp_eventAction":"signup",
      "vtp_eventLabel":"click",
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-12366301-1",
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":163
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_conversionId":"852928941",
      "vtp_conversionLabel":"CzYTCLjiy3MQrdPalgM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":173
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":178
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":179
    },{
      "function":"__awct",
      "once_per_event":true,
      "vtp_enableConversionLinker":true,
      "vtp_conversionValue":["macro",2],
      "vtp_conversionCookiePrefix":"_gcl",
      "vtp_conversionId":"877556973",
      "vtp_conversionLabel":"j88uCJmGiXkQ7em5ogM",
      "vtp_url":["macro",19],
      "vtp_enableReadGaCookie":false,
      "vtp_enableProductReportingCheckbox":false,
      "tag_id":181
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":186
    },{
      "function":"__cl",
      "tag_id":203
    },{
      "function":"__cl",
      "tag_id":204
    },{
      "function":"__cl",
      "tag_id":205
    },{
      "function":"__cl",
      "tag_id":206
    },{
      "function":"__cl",
      "tag_id":207
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_107",
      "tag_id":208
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"10000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_108",
      "tag_id":209
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_109",
      "tag_id":210
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"20000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_110",
      "tag_id":211
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_111",
      "tag_id":212
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"30000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_112",
      "tag_id":213
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_113",
      "tag_id":214
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"40000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_114",
      "tag_id":215
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_115",
      "tag_id":216
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"50000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_116",
      "tag_id":217
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_117",
      "tag_id":218
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"60000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_118",
      "tag_id":219
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_119",
      "tag_id":220
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_120",
      "tag_id":221
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"80000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_121",
      "tag_id":222
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_122",
      "tag_id":223
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"90000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_123",
      "tag_id":224
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_124",
      "tag_id":225
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"100000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_125",
      "tag_id":226
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"110000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_126",
      "tag_id":227
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_127",
      "tag_id":228
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"120000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_128",
      "tag_id":229
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"70000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_129",
      "tag_id":230
    },{
      "function":"__cl",
      "tag_id":231
    },{
      "function":"__cl",
      "tag_id":232
    },{
      "function":"__cl",
      "tag_id":233
    },{
      "function":"__cl",
      "tag_id":234
    },{
      "function":"__cl",
      "tag_id":235
    },{
      "function":"__cl",
      "tag_id":236
    },{
      "function":"__cl",
      "tag_id":237
    },{
      "function":"__tl",
      "vtp_eventName":"gtm.timer",
      "vtp_interval":"15000",
      "vtp_limit":"1",
      "vtp_uniqueTriggerId":"164179_139",
      "tag_id":238
    },{
      "function":"__cl",
      "tag_id":239
    },{
      "function":"__cl",
      "tag_id":240
    },{
      "function":"__cl",
      "tag_id":241
    },{
      "function":"__cl",
      "tag_id":242
    },{
      "function":"__cl",
      "tag_id":243
    },{
      "function":"__html",
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6009170267856\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6009170267856\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":3
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];_fbq.push([\"track\",\"6009170268656\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);_fbq.push([\"track\",\"6016501834270\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6009170268656\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?ev=6016501834270\u0026amp;cd[value]=0.00\u0026amp;cd[currency]=USD\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\n\n\u003Cscript type=\"text\/gtmscript\"\u003Evar _kiq=_kiq||[];(function(){setTimeout(function(){var a=document,b=a.getElementsByTagName(\"script\")[0];a=a.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/s3.amazonaws.com\/ki.js\/34436\/6GL.js\";b.parentNode.insertBefore(a,b)},1)})();(function(){_kiq.push([\"identify\",",["escape",["macro",17],8,16],"||\"\"]);_kiq.push([\"set\",{user_id:",["escape",["macro",17],8,16],"||\"\",visitor_id:",["escape",["macro",31],8,16],"||\"\"}])})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":11
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=989116586,google_conversion_language=\"en\",google_conversion_format=\"2\",google_conversion_color=\"ffffff\",google_conversion_label=\"Ah9qCJbXgAgQqvHS1wM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cdiv style=\"display:inline;\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"border-style:none;\" alt=\"\" src=\"\/\/www.googleadservices.com\/pagead\/conversion\/989116586\/?label=Ah9qCJbXgAgQqvHS1wM\u0026amp;guid=ON\u0026amp;script=0\"\u003E\n\u003C\/div\u003E\n\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":14
    },{
      "function":"__html",
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003Evar fb_param={pixel_id:\"6016391666497\",value:\"0.00\",currency:\"USD\"};(function(){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fp.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/offsite_event.php?id=6016391666497\u0026amp;value=0\u0026amp;currency=USD\"\u003E\u003C\/noscript\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":15
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=966888136,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"SgynCKCv_VoQyJWGzQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":35
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_conversion_language=\"en\",google_conversion_format=\"3\",google_conversion_color=\"ffffff\",google_conversion_label=\"kUq1CNrK-1oQ1YDTxQM\",google_remarketing_only=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":36
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E(function(){var b=window._fbq||(window._fbq=[]);if(!b.loaded){var a=document.createElement(\"script\");a.async=!0;a.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(a,c);b.loaded=!0}})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"6034528106080\",{value:\"0.00\",currency:\"JPY\"}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":37
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");if(void 0!==$course_id\u0026\u00260\u003C$course_id.length){var clp_course_id=jQuery(\"body\").attr(\"data-clp-course-id\");window._fbq=window._fbq||[];_fbq.push([\"track\",\"ViewContent\",{content_ids:clp_course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":40
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003EUD.GoogleAnalytics.setValue(\"dimension7\",\"true\");UD.GoogleAnalytics.trackEvent(\"ismember\",\"ismember\",\"ismember\",void 0,void 0,{nonInteraction:1});window._fbq=window._fbq||[];_fbq.push([\"track\",\"isMember\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":42
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":44
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":47
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar google_conversion_id=951369813,google_custom_params=window.google_tag_params,google_remarketing_only=!0;\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" src=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":48
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E0\u003C$(\".signup-link\").length\u0026\u0026$(\".signup-link\").trigger(\"click\");\u003C\/script\u003E",
      "vtp_convertJsValuesToExpressions":true,
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":51
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E(function(){var a=window._fbq||(window._fbq=[]);if(!a.loaded){var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/connect.facebook.net\/en_US\/fbds.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c);a.loaded=!0}a.push([\"addPixelId\",\"101425363524479\"])})();window._fbq=window._fbq||[];window._fbq.push([\"track\",\"PixelInitialized\",{}]);\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" alt=\"\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=101425363524479\u0026amp;ev=PixelInitialized\"\u003E\u003C\/noscript\u003E\n\n\u003Cscript type=\"text\/javascript\" language=\"javascript\"\u003Evar yahoo_retargeting_id=\"BKO82CLEGF\",yahoo_retargeting_label=\"\";\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\" language=\"javascript\" src=\"\/\/b92.yahoo.co.jp\/js\/s_retargeting.js\"\u003E\u003C\/script\u003E\n\n\u003Cimg height=\"1\" width=\"1\" border=\"0\" alt=\"\" src=\"https:\/\/aax-fe.amazon-adsystem.com\/s\/iui3?d=forester-did\u0026amp;ex-fargs=%3Fid%3D97c97873-b320-2f7a-9117-f3d5aa752a9e%26type%3Dnull%26m%3D6\u0026amp;ex-fch=416613\u0026amp;ex-src=udemy.com\u0026amp;ex-hargs=v%3D1.0%3Bc%3D7690357268661%3Bp%3D97C97873-B320-2F7A-9117-F3D5AA752A9E\"\u003E　",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Evar $course_id=jQuery(\"body\").attr(\"data-clp-course-id\");\nif(void 0!==$course_id\u0026\u00260\u003C$course_id.length){$course_id=jQuery(\"body\").attr(\"data-clp-course-id\");var price=jQuery(\".price-text__current\").text().replace(\"$\",\"\").trim().match(\/\\d+\/);void 0!==UD.GoogleAnalytics\u0026\u0026(UD.GoogleAnalytics.setValue(\"dimension5\",$course_id),UD.GoogleAnalytics.setValue(\"dimension6\",\"conversionintent\"),UD.GoogleAnalytics.setValue(\"dimension8\",price),UD.GoogleAnalytics.trackEvent(\"addtocartclick\",$course_id,price,{nonInteraction:1}));window._fbq=window._fbq||[];_fbq.push([\"track\",\n\"AddToCart\",{content_name:\"Shopping Cart\",content_ids:$course_id,content_type:\"product\"}])};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"Purchase\",{content_ids:",["escape",["macro",33],8,16],",content_type:\"product\",order_id:",["escape",["macro",34],8,16],",value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":61
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript data-gtmsrc=\"https:\/\/www.dwin1.com\/6554.js\" type=\"text\/gtmscript\" defer\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":68
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript language=\"JavaScript\"\u003Evar OB_ADV_ID=26518,str='\\x3cscript src\\x3d\"\/\/widgets.outbrain.com\/obtp.js\" type\\x3d\"text\/javascript\"\\x3e\\x3c\/script\\x3e';document.write(str);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":83
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _pop=_pop||[];_pop.push([\"_set_conversion_id\",\"benesse_cci\"]);(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"api.popin.cc\/conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":84
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.charset=\"utf-8\";a.async=!0;a.src=window.location.protocol+\"\/\/api.popin.cc\/ads\/benesse_cci.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":85
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"Conversion\",revenue:",["escape",["macro",2],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":124
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupSuccess\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":128
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"SignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:1808,price:0,convtype:0,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n        ",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":139
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:10595,advertiser_id:1808,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n    ",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":140
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,c,d,b,f,e){a.hj=a.hj||function(){(a.hj.q=a.hj.q||[]).push(arguments)};a._hjSettings={hjid:298206,hjsv:5};f=c.getElementsByTagName(\"head\")[0];e=c.createElement(\"script\");e.async=1;e.src=d+a._hjSettings.hjid+b+a._hjSettings.hjsv;f.appendChild(e)})(window,document,\"\/\/static.hotjar.com\/c\/hotjar-\",\".js?sv\\x3d\");\n(function(){var a=jQuery(\"body\"),c=a.attr(\"data-hotjar-page\"),d=a.attr(\"data-hotjar-device\");a=a.attr(\"data-hotjar-bw\");var b=[];c\u0026\u0026(b.push(c),d\u0026\u0026a\u0026\u0026b.push(d,a),b.push(void 0===UD.me.id?\"visitor\":\"user\"),hj(\"trigger\",b.join(\"-\")))})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":149
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"NewUserPurchase\",{value:",["escape",["macro",2],8,16],",currency:\"USD\"}]);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":156
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function b(){!1===c\u0026\u0026(c=!0,Munchkin.init(\"273-CKQ-053\"))}var c=!1,a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"\/\/munchkin.marketo.net\/munchkin.js\";a.onreadystatechange=function(){\"complete\"!=this.readyState\u0026\u0026\"loaded\"!=this.readyState||b()};a.onload=b;document.getElementsByTagName(\"head\")[0].appendChild(a)})();\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Eadroll_adv_id=\"554CPNW4XBAX5EYKBL4HVU\";adroll_pix_id=\"OKLCQMMNANCRNGGEOKKR5M\";\n(function(){var a=function(){if(document.readyState\u0026\u0026!\/loaded|complete\/.test(document.readyState))setTimeout(a,10);else if(window.__adroll_loaded){var b=document.createElement(\"script\"),c=\"https:\"==document.location.protocol?\"https:\/\/s.adroll.com\":\"http:\/\/a.adroll.com\";b.setAttribute(\"async\",\"true\");b.type=\"text\/javascript\";b.src=c+\"\/j\/roundtrip.js\";((document.getElementsByTagName(\"head\")||[null])[0]||document.getElementsByTagName(\"script\")[0].parentNode).appendChild(b)}else __adroll_loaded=!0,setTimeout(a,\n50)};window.addEventListener?window.addEventListener(\"load\",a,!1):window.attachEvent(\"onload\",a)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":162
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"LinkshareSignupClick\"]);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":164
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Etry{__adroll.record_user({adroll_segments:\"a9df566e\"})}catch(a){};\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":165
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cimg src=\"https:\/\/secure.adnxs.com\/px?id=849711\u0026amp;t=2\" width=\"1\" height=\"1\"\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":167
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"6oe2u\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":168
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/javascript\"\u003E!function(){if(window.SmartnewsAds=window.SmartnewsAds||{},!window.SmartnewsAds.p){var a=window.SmartnewsAds.p=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)};window.SmartnewsAds._p||(window.SmartnewsAds._p=a);a.push=a;a.version=\"1.0.0\";a.queue=[];var b=document.createElement(\"script\");b.async=!0;b.src=\"\/\/cdn.smartnews-ads.com\/i\/pixel.js\";var c=document.getElementsByTagName(\"script\")[0];c.parentNode.insertBefore(b,c)}}();SmartnewsAds.p(\"3743a3945eb6b3d209bbf3bc\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/i.smartnews-ads.com\/p?id=3743a3945eb6b3d209bbf3bc\u0026amp;e=PageView\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":169
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"trackConversion\",12148,{orderId:",["escape",["macro",38],8,16],",customerId:",["escape",["macro",39],8,16],",email:",["escape",["macro",40],8,16],",orderPromoCode:",["escape",["macro",41],8,16],",currencyCode:\"USD\",items:[{subTotal:",["escape",["macro",42],8,16],",category:",["escape",["macro",43],8,16],",sku:",["escape",["macro",44],8,16],",quantity:1}]});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":170
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(g,e,a,f,b,c,d){b.ire_o=a;b[a]=b[a]||function(){(b[a].a=b[a].a||[]).push(arguments)};c=f.createElement(e);d=f.getElementsByTagName(e)[0];c.async=1;c.src=g;d.parentNode.insertBefore(c,d)})(\"\/\/d.impactradius-event.com\/A380319-1bcf-4b7b-9299-22e85825ceea1.js\",\"script\",\"ire\",document,window);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":171
    },{
      "function":"__html",
      "setup_tags":["list",["tag",123,1]],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Eire(\"identify\",{customerId:",["escape",["macro",39],8,16],",customerEmail:",["escape",["macro",40],8,16],"});\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":172
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"455027734843984\");fbq(\"track\",\"PageView\");\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=455027734843984\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":174
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":175
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Etwttr.conversion.trackPid(\"ny0dy\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=ny0dy\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":176
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003E!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"nv12m\");twq(\"track\",\"PageView\");\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":177
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003Ewindow._fbq=window._fbq||[];_fbq.push([\"track\",\"BecomeAnInstructor\"]);sendPageEvent(\"track\",\"teach_funnel\",{action:\"create-course\"});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":180
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Evar _fout_queue=_fout_queue||{};void 0===_fout_queue.segment\u0026\u0026(_fout_queue.segment={});void 0===_fout_queue.segment.queue\u0026\u0026(_fout_queue.segment.queue=[]);_fout_queue.segment.queue.push({user_id:23601,advertiser_id:8881,contractor_id:5});(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.fout.jp\/segmentation.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":182
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){var a=window.MTBADVS=window.MTBADVS||{};a.ConvContext=a.ConvContext||{};a.ConvContext.queue=a.ConvContext.queue||[];a.ConvContext.queue.push({advertiser_id:8881,price:0,convtype:1,dat:\"\"});a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=(\"https:\"==document.location.protocol?\"https:\/\/\":\"http:\/\/\")+\"js.mtburn.com\/advs-conversion.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":183
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"aff\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":184
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar request=new XMLHttpRequest;request.open(\"POST\",\"\/api-2.0\/growth-analytics\/gtm-verifier\",!0);request.setRequestHeader(\"Content-Type\",\"application\/json; charset\\x3dUTF-8\");request.setRequestHeader(\"X-Requested-With\",\"XMLHttpRequest\");request.send(JSON.stringify({type:\"paid_acq\"}));\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":185
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E(function(){try{var b={id:\"88dg1\",event:\"\"},a=document.createElement(\"script\");a.src=\"\/\/api.smartnews-ads.com\/assets\/conv.js?\"+(new Date).getTime();a.type=\"text\/javascript\";a.id=\"_smartnews_ads_conversion_script_\"+b.id;a.setAttribute(\"data-smartnews-ads\",JSON.stringify(b));(document.body||document.head).appendChild(a)}catch(c){}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":188
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript src=\"https:\/\/bannerfarm.aolp.jp\/smartpxl\/89892\/smartpxl.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":190
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1147638\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1147638\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":191
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"action\",name:\"conversion\"});\u003C\/script\u003E\n\u003Cscript data-gtmsrc=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/action?name=conversion\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":192
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6317021retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6317021retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":193
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];_tfa.push({notify:\"mark\",type:\"6314024retargeting\"});\u003C\/script\u003E\n\u003Cscript src=\"\/\/cdn.taboola.com\/libtrc\/3500045453-SC-prod\/tfa.js\"\u003E\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg src=\"\/\/trc.taboola.com\/3500045453-SC-prod\/log\/3\/mark?marking-type=6314024retargeting\u0026amp;item-url={encoded_page_url}\" width=\"0\" height=\"0\"\u003E\n\u003C\/noscript\u003E \n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":194
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003E_linkedin_data_partner_id=\"371524\";\u003C\/script\u003E\u003Cscript type=\"text\/javascript\"\u003E(function(){var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E \u003Cnoscript\u003E \u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=371524\u0026amp;fmt=gif\"\u003E \u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":195
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Ewindow._tfa=window._tfa||[];window._tfa.push({notify:\"event\",name:\"page_view\"});!function(a,b,d,c){document.getElementById(c)||(a.async=1,a.src=d,a.id=c,b.parentNode.insertBefore(a,b))}(document.createElement(\"script\"),document.getElementsByTagName(\"script\")[0],\"\/\/cdn.taboola.com\/libtrc\/unip\/1049902\/tfa.js\",\"tb_tfa_script\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n  \u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=page_view\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":196
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"add_to_cart\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=add_to_cart\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":197
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"make_purchase\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=make_purchase\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":198
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"BuyNow\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=BuyNow\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":199
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E_tfa.push({notify:\"event\",name:\"Login\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=Login\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":200
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript\u003E_tfa.push({notify:\"event\",name:\"complete_registration\"});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"\/\/trc.taboola.com\/1049902\/log\/3\/unip?en=complete_registration\" width=\"0\" height=\"0\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":201
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript type=\"text\/gtmscript\"\u003E!function(c,d,g,e,a,f,b){c.ktag||(a=function(){a.sendEvent?a.sendEvent(arguments):a.ktq.push(arguments)},a.ktq=[],c.ktag=a,f=d.getElementsByTagName(e)[0],b=d.createElement(e),b.async=!0,b.src=g,f.parentNode.appendChild(b))}(window,document,\"\/\/resources.xg4ken.com\/js\/v2\/ktag.js?tid\\x3dKT-N3AE7-3EC\",\"script\");ktag(\"setup\",\"KT-N3AE7-3EC\",\"\\x3cUSER_ID\\x3e\");\u003C\/script\u003E\n\u003Cnoscript\u003E\n\t\u003Cimg src=\"https:\/\/events.xg4ken.com\/pixel\/v2?tid=KT-N3AE7-3EC\u0026amp;noscript=1\" width=\"1\" height=\"1\" style=\"display:none\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":202
    }],
  "predicates":[{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":".*"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/create-learning-portal\/"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/tapen\/"
    },{
      "function":"_ew",
      "arg0":["macro",15],
      "arg1":"signup_success=1"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"udemy\\.com\\\/cart\\\/success"
    },{
      "function":"_gt",
      "arg0":["macro",3],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/jp\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"full_transaction"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"instructor_analytics"
    },{
      "function":"_cn",
      "arg0":["macro",25],
      "arg1":"\/payment\/checkout\/"
    },{
      "function":"_cn",
      "arg0":["macro",5],
      "arg1":"button-enroll-b"
    },{
      "function":"_eq",
      "arg0":["macro",26],
      "arg1":"take-this-course-button"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.click"
    },{
      "function":"_gt",
      "arg0":["macro",7],
      "arg1":"0"
    },{
      "function":"_eq",
      "arg0":["macro",0],
      "arg1":"undefined"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.timer"
    },{
      "function":"_re",
      "arg0":["macro",27],
      "arg1":"(^$|((^|,)164179_139($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn btn-success"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"cart\/success"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?organization\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/create-learning-portal\/"
    },{
      "function":"_cn",
      "arg0":["macro",28],
      "arg1":"submit-id-submit"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/course\\\/([0-9]*)\\\/manage\\\/feedback\\\/test"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"middle create_course button"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"btn btn-primary btn-huge btn-shadowed btn-lg join-btn"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/affiliate\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?courses\/search\/.*$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/learn\/v4\/"
    },{
      "function":"_eq",
      "arg0":["macro",14],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"category"
    },{
      "function":"_eq",
      "arg0":["macro",13],
      "arg1":"subcategory"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/subscribe"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/success"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/mobile\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/cart\/"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"udemy.com"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?course\/subscribe\/.*$"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.dev\\.udemy\\.com",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"2u.udemy.com|360E.udemy.com|abtasty.udemy.com|ABD.udemy.com|accesscapital.udemy.com|acemotor.udemy.com|adnatcongsco.udemy.com|adroll.udemy.com|akqa.udemy.com|akhbar.udemy.com|amaysim.udemy.com|Ampush.udemy.com|angelcitydata.udemy.com|anudip.udemy.com|apiheattransfer.udemy.com|aucklandcouncil.udemy.com|avascent.udemy.com|avg.udemy.com|iclas.udemy.com|azumo.udemy.com|bandwidth.udemy.com|bayt.udemy.com|beepi.udemy.com|bethyl.udemy.com|bulletproof.udemy.com|campusexplorer.udemy.com|caribbeanideas.udemy.com|carsguide.udemy.com|cchscarelink.udemy.com|cnu.udemy.com|ciazumano.udemy.com|cision.udemy.com|cloudreach.udemy.com|cacfp.udemy.com|collegespring.udemy.com|chs.udemy.com|continental.udemy.com|dcmservices.udemy.com|delivery.udemy.com|kyna.udemy.com|develappme.udemy.com|dichter-neira.udemy.com|duouniversity.udemy.com|teradyne-std-learning.udemy.com|eastwest.udemy.com|eastexcrude.udemy.com|echo3.udemy.com|edm.udemy.com|esa-ift.udemy.com|crunchyroll.udemy.com|ei.udemy.com|esa.udemy.com|examsoft.udemy.com|fleetmaticsacademy.udemy.com|http:\/\/fullscreen.udemy.com\/|fundamentallabor.udemy.com|fundingcircle.udemy.com|globalstrategies.udemy.com|cdp.udemy.com|glm.udemy.com|companybypeople.udemy.com|harbingergroup.udemy.com|hawaiisnacks.udemy.com|hbconstruction.udemy.com|hostpapa.udemy.com|huddle.udemy.com|ibm.udemy.com|geotecnologies.udemy.com|ignyte.udemy.com|imagineteam.udemy.com|inkblot.udemy.com|insite.udemy.com|instacart.udemy.com|jimenezconsulting.udemy.com|kimble-chase.udemy.com|kookmin.udemy.com|laneconstruct.udemy.com|lightsailenergy.udemy.com|lmuec.udemy.com|lpsoftware.udemy.com|lyft.udemy.com|cmsteam.udemy.com|mareku.udemy.com|MTC.udemy.com|mattex.udemy.com|mb3.udemy.com|melanoma.udemy.com|mmc.udemy.com|meridian.udemy.com|mixpanel.udemy.com|moboom.udemy.com|mre-consulting.udemy.com|michiganlottery.udemy.com|nike.udemy.com|nrtwebservices.udemy.com|ornl.udemy.com|ohiogt.udemy.com|on24.udemy.com|optimizely.udemy.com|optis.udemy.com|odc.udemy.com|oidtraining.udemy.com|pacificwoodtech.udemy.com|pagerduty.udemy.com|pwconsulting.udemy.com|pitneybowes.udemy.com|pjdick.udemy.com|platinum.udemy.com|powertech.udemy.com|powerteq.udemy.com|pretlist.udemy.com|proofpoint.udemy.com|prophet.udemy.com|quemetco.udemy.com|rslempdev.udemy.com|realnet.udemy.com|rottapharm.udemy.com|SLCC.udemy.com|thesentergroup.udemy.com|signaturehealthinc.udemy.com|step.udemy.com|stonehambank.udemy.com|cpfl.udemy.com|sweetwater.udemy.com|syndicatesales.udemy.com|tamkeentech.udemy.com|tegile.udemy.com|tamu.udemy.com|chernin.udemy.com|sideout.udemy.com|wistar.udemy.com|thoughtspot.udemy.com|toptal.udemy.com|tomo.udemy.com|tpipr.udemy.com|trginternational.udemy.com|tricerat.udemy.com|tpl.udemy.com|type1team.udemy.com|redal.udemy.com|unifiedtcg.udemy.com|Valin.udemy.com|viki.udemy.com|walmart.udemy.com|wanhaisg.udemy.com|webair.udemy.com|webanywhere.udemy.com|wedbush.udemy.com|egs.udemy.com|wipro.udemy.com|wolfram.udemy.com|worldpac.udemy.com|xoomworks.udemy.com|xtremeconsulting.udemy.com|yemeksepeti.udemy.com|zeeto.udemy.com|zensar.udemy.com|learning.udemy.com|paulatest.udemy.com"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"organization-manage"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(va2site|aws-dr|www).udemy.com.*$"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/?payment\/^success"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":"^(aws-dr|www).udemy.com.*$"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/apps\/admin"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"www.udemy.com\/course-manage\/edit-getting-started\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",32],
      "arg1":"true"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"https:\/\/www.udemy.com\/courses\/?pmtag=blog\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=hellobar\u0026utm_campaign=content-marketing-blog\u0026source=blogpop\u0026utm_source=blog\u0026utm_medium=udemyads\u0026utm_content=post0\u0026utm_campaign=content-marketing-blog\u0026xref=blog"
    },{
      "function":"_re",
      "arg0":["macro",15],
      "arg1":"\\\/collection\\\/jp\\-"
    },{
      "function":"_re",
      "arg0":["macro",0],
      "arg1":"[0-9]+"
    },{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"True"
    },{
      "function":"_cn",
      "arg0":["macro",29],
      "arg1":"add-to-cart"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/cart\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/home\/my-courses\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/collection\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/topics\/"
    },{
      "function":"_eq",
      "arg0":["macro",12],
      "arg1":"undefined"
    },{
      "function":"_cn",
      "arg0":["macro",16],
      "arg1":"\/manage\/feedback\/test\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/home\/teaching\/insights\/"
    },{
      "function":"_eq",
      "arg0":["macro",16],
      "arg1":"\/affiliate\/"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"\/.+\/learn\/v4\/.+\/reviews\/|\/home\/my-courses\/.+\/.+\/reviews\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/teaching\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/topic"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/redeem\/"
    },{
      "function":"_sw",
      "arg0":["macro",16],
      "arg1":"\/gift\/share\/"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"new_user_transaction_purchase"
    },{
      "function":"_eq",
      "arg0":["macro",35],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"impact_radius"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"affiliate_purchase_data"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"127.0.0.1"
    },{
      "function":"_re",
      "arg0":["macro",30],
      "arg1":".*\\.devs\\.dev-ud\\.com",
      "ignore_case":true
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"localhost"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"^\/teach\/?$"
    },{
      "function":"_cn",
      "arg0":["macro",15],
      "arg1":"\/home\/teaching\/onboarding\/"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"buy-this-course-button"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"login"
    },{
      "function":"_cn",
      "arg0":["macro",45],
      "arg1":"signup"
    }],
  "rules":[
    [["if",0,3],["unless",1,2],["add",2,3,0,113,123,124,130]],
    [["if",3,5,6],["add",4,5,8,91,92,93,98,99]],
    [["if",3,7],["add",6,12,13,15,28,40,87,105,106,107,125]],
    [["if",8,9],["add",6,15,31,43,87,103,108,119,131,133,134,143]],
    [["if",3,10],["add",7,96,97]],
    [["if",0,3,6],["add",9,26,29,38,42,112,121,128,135,136,138,139]],
    [["if",6,11],["add",10,11]],
    [["if",3,4],["add",14],["block",2,3,9,16,23,26,29,38,42,88,1,104,0,112,116,118,121,123,124,128,130,141]],
    [["if",3],["add",14,16,36,104,116,141,147,45,46,47,48,49,73,74,75,76,77,78,79,81,82,83,84,85]],
    [["if",12],["add",17,18]],
    [["if",13,14,15,16],["add",19]],
    [["if",13,15,16],["unless",14],["add",20]],
    [["if",3,17],["add",21]],
    [["if",3],["unless",18],["add",22,44,113,50,53,54,57,59,61,64,66,68,69,70,72]],
    [["if",19,20],["add",23]],
    [["if",16,21,22],["add",24,110]],
    [["if",11],["add",25,30,35,37]],
    [["if",6,8,9],["add",27,41,111,120,126,127,137],["block",138,139]],
    [["if",3,23],["add",28]],
    [["if",3,25],["add",32,115]],
    [["if",16,26,27],["add",33]],
    [["if",16,28],["add",34]],
    [["if",16,29,30],["add",39,117]],
    [["if",3,31],["add",44,113]],
    [["if",3,32],["add",44]],
    [["if",3,33],["add",44,113],["block",123,124]],
    [["if",3,31,34],["add",44,113]],
    [["if",3,35],["add",44,113]],
    [["if",3,36],["add",44,113]],
    [["if",3,37],["add",44,113]],
    [["if",3,38],["add",44,113]],
    [["if",3,39],["add",44]],
    [["if",3,40],["add",51,52,55,56,58,60,62,63,65,67,71]],
    [["if",3,41],["add",80]],
    [["if",3,42],["add",86]],
    [["if",3,43],["add",88],["block",122,123,124,141]],
    [["if",3,44],["unless",45],["add",88]],
    [["if",46,47],["add",88]],
    [["if",3,49],["add",1]],
    [["if",3,51],["add",89,90]],
    [["if",52],["add",94]],
    [["if",52,53],["add",95,118],["block",112]],
    [["if",52,54],["add",100]],
    [["if",3,55],["add",101]],
    [["if",52,56,57],["add",101]],
    [["if",16,58],["add",102,142]],
    [["if",3,5],["add",109]],
    [["if",3,59],["add",113]],
    [["if",3,60],["add",113]],
    [["if",3,61],["add",113],["block",123,124]],
    [["if",3,62],["add",113]],
    [["if",3,63],["add",113]],
    [["if",3],["unless",64],["add",113]],
    [["if",3,65],["add",113]],
    [["if",3,66],["add",113]],
    [["if",3,67],["add",113]],
    [["if",3,68],["add",113]],
    [["if",3,69],["add",113,113]],
    [["if",3,70],["add",113]],
    [["if",0,2,3],["unless",1],["add",113]],
    [["if",3,71],["unless",72,73],["add",113]],
    [["if",8,74],["add",114,140]],
    [["if",75,76,77,78],["add",122,132]],
    [["if",3,83],["add",129]],
    [["if",16,84],["add",144]],
    [["if",16,85],["add",145]],
    [["if",16,86],["add",146]],
    [["if",3,24],["block",29,88,1]],
    [["if",3,48],["block",88]],
    [["if",3,50],["block",1]],
    [["if",3,79],["block",122,123,124,141]],
    [["if",3,80],["block",122,123,124,141]],
    [["if",3,81],["block",122,123,124,141]],
    [["if",3,82],["block",123,124]]]
},
"runtime":[
[],[]
],
"permissions":{}};
var da="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ea;if("function"==typeof Object.setPrototypeOf)ea=Object.setPrototypeOf;else{var fa;a:{var ha={Rc:!0},ja={};try{ja.__proto__=ha;fa=ja.Rc;break a}catch(a){}fa=!1}ea=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}
var ka=ea,la=this,oa=function(){if(null===ma){var a;a:{var b=la.document,c=b.querySelector&&b.querySelector("script[nonce]");if(c){var d=c.nonce||c.getAttribute("nonce");if(d&&na.test(d)){a=d;break a}}a=null}ma=a||""}return ma},na=/^[\w+/_-]+[=]{0,2}$/,ma=null,pa=function(a,b){function c(){}c.prototype=b.prototype;a.Ke=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ye=function(a,c,f){for(var d=Array(arguments.length-2),e=2;e<arguments.length;e++)d[e-2]=arguments[e];return b.prototype[c].apply(a,
d)}};var g=function(a,b){this.B=a;this.wd=b};g.prototype.Jd=function(){return this.B};g.prototype.getType=g.prototype.Jd;g.prototype.getData=function(){return this.wd};g.prototype.getData=g.prototype.getData;var qa=function(a){return"number"===typeof a&&0<=a&&isFinite(a)&&0===a%1||"string"===typeof a&&"-"!==a[0]&&a===""+parseInt(a,10)},ra=function(){this.ka={};this.Aa=!1};ra.prototype.get=function(a){return this.ka["dust."+a]};ra.prototype.set=function(a,b){!this.Aa&&(this.ka["dust."+a]=b)};ra.prototype.has=function(a){return this.ka.hasOwnProperty("dust."+a)};var sa=function(a){var b=[],c;for(c in a.ka)a.ka.hasOwnProperty(c)&&b.push(c.substr(5));return b};
ra.prototype.remove=function(a){!this.Aa&&delete this.ka["dust."+a]};ra.prototype.L=function(){this.Aa=!0};var v=function(a){this.na=new ra;this.h=[];a=a||[];for(var b in a)a.hasOwnProperty(b)&&(qa(b)?this.h[Number(b)]=a[Number(b)]:this.na.set(b,a[b]))};v.prototype.toString=function(){for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];null===c||void 0===c?a.push(""):a.push(c.toString())}return a.join(",")};v.prototype.set=function(a,b){if("length"==a){if(!qa(b))throw"RangeError: Length property must be a valid integer.";this.h.length=Number(b)}else qa(a)?this.h[Number(a)]=b:this.na.set(a,b)};
v.prototype.set=v.prototype.set;v.prototype.get=function(a){return"length"==a?this.length():qa(a)?this.h[Number(a)]:this.na.get(a)};v.prototype.get=v.prototype.get;v.prototype.length=function(){return this.h.length};v.prototype.U=function(){for(var a=sa(this.na),b=0;b<this.h.length;b++)a.push(b+"");return new v(a)};v.prototype.getKeys=v.prototype.U;v.prototype.remove=function(a){qa(a)?delete this.h[Number(a)]:this.na.remove(a)};v.prototype.remove=v.prototype.remove;v.prototype.pop=function(){return this.h.pop()};
v.prototype.pop=v.prototype.pop;v.prototype.push=function(a){return this.h.push.apply(this.h,Array.prototype.slice.call(arguments))};v.prototype.push=v.prototype.push;v.prototype.shift=function(){return this.h.shift()};v.prototype.shift=v.prototype.shift;v.prototype.splice=function(a,b,c){return new v(this.h.splice.apply(this.h,arguments))};v.prototype.splice=v.prototype.splice;v.prototype.unshift=function(a){return this.h.unshift.apply(this.h,Array.prototype.slice.call(arguments))};
v.prototype.unshift=v.prototype.unshift;v.prototype.has=function(a){return qa(a)&&this.h.hasOwnProperty(a)||this.na.has(a)};var ta=function(){function a(a,b){c[a]=b}function b(){c={};f=!1}var c={},d,e={},f=!1,h={add:a,Vb:function(a,b,c){e[a]||(e[a]={});e[a][b]=c},create:function(e){var h={add:a,assert:function(a,b){if(!f){var h=c[a]||d;h&&h.apply(e,Array.prototype.slice.call(arguments,0))}},reset:b};h.add=h.add;h.assert=h.assert;h.reset=h.reset;return h},xc:function(a){return e[a]?(b(),c=e[a],!0):!1},oa:function(a){d=a},reset:b,Hc:function(a){f=a}};h.add=h.add;h.addToCache=h.Vb;h.loadFromCache=h.xc;h.registerDefaultPermission=
h.oa;h.reset=h.reset;h.setPermitAllAsserts=h.Hc;return h};var ua=function(){function a(a,c){if(b[a]){if(b[a].Oa+c>b[a].max)throw Error("Quota exceeded");b[a].Oa+=c}}var b={},c=void 0,d=void 0,e={je:function(a){c=a},Wb:function(){c&&a(c,1)},ke:function(a){d=a},X:function(b){d&&a(d,b)},Ge:function(a,c){b[a]=b[a]||{Oa:0};b[a].max=c},Id:function(a){return b[a]&&b[a].Oa||0},reset:function(){b={}},qd:a};e.onFnConsume=e.je;e.consumeFn=e.Wb;e.onStorageConsume=e.ke;e.consumeStorage=e.X;e.setMax=e.Ge;e.getConsumed=e.Id;e.reset=e.reset;e.consume=e.qd;return e};var va=function(a,b,c){this.M=a;this.H=b;this.aa=c;this.h=new ra};va.prototype.add=function(a,b){this.h.Aa||(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b))};va.prototype.add=va.prototype.add;va.prototype.set=function(a,b){this.h.Aa||(this.aa&&this.aa.has(a)?this.aa.set(a,b):(this.M.X(("string"===typeof a?a.length:1)+("string"===typeof b?b.length:1)),this.h.set(a,b)))};va.prototype.set=va.prototype.set;
va.prototype.get=function(a){return this.h.has(a)?this.h.get(a):this.aa?this.aa.get(a):void 0};va.prototype.get=va.prototype.get;va.prototype.has=function(a){return!!this.h.has(a)||!(!this.aa||!this.aa.has(a))};va.prototype.has=va.prototype.has;va.prototype.K=function(){return this.M};va.prototype.L=function(){this.h.L()};var xa=function(){},ya=function(a){return"function"==typeof a},Aa=function(a){return"string"==typeof a},Ba=function(a){return"number"==typeof a&&!isNaN(a)},Ca=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Da=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ea=function(a,b){if(!Ba(a)||!Ba(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},Fa=function(a){return Math.round(Number(a))||
0},Ga=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ha=function(a){var b=[];if(Ca(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ia=function(){return new Date},Ja=function(){this.prefix="gtm.";this.values={}};Ja.prototype.set=function(a,b){this.values[this.prefix+a]=b};Ja.prototype.get=function(a){return this.values[this.prefix+a]};Ja.prototype.contains=function(a){return void 0!==this.get(a)};
var Ka=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},La=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ma=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Na=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1};var w=function(a,b){ra.call(this);this.yc=a;this.Gd=b};pa(w,ra);var Pa=function(a,b){for(var c,d=0;d<b.length&&!(c=Oa(a,b[d]),c instanceof g);d++);return c},Oa=function(a,b){var c=a.get(String(b[0]));if(!(c&&c instanceof w))throw"Attempting to execute non-function "+b[0]+".";return c.m.apply(c,[a].concat(b.slice(1)))};w.prototype.toString=function(){return this.yc};w.prototype.getName=function(){return this.yc};w.prototype.getName=w.prototype.getName;w.prototype.U=function(){return new v(sa(this))};
w.prototype.getKeys=w.prototype.U;w.prototype.m=function(a,b){var c,d={F:function(){return a},evaluate:function(b){var c=a;return Ca(b)?Oa(c,b):b},xa:function(b){return Pa(a,b)},K:function(){return a.K()},gc:function(){c||(c=a.H.create(d));return c}};a.K().Wb();return this.Gd.apply(d,Array.prototype.slice.call(arguments,1))};w.prototype.invoke=w.prototype.m;var Qa=function(){ra.call(this)};pa(Qa,ra);Qa.prototype.U=function(){return new v(sa(this))};Qa.prototype.getKeys=Qa.prototype.U;/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Ra=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Sa=function(a){if(null==a)return String(a);var b=Ra.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Ta=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ua=function(a){if(!a||"object"!=Sa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Ta(a,"constructor")&&!Ta(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Ta(a,b)},Va=function(a,b){var c=b||("array"==Sa(a)?[]:{}),d;for(d in a)if(Ta(a,d)){var e=a[d];"array"==Sa(e)?("array"!=Sa(c[d])&&(c[d]=[]),c[d]=Va(e,c[d])):Ua(e)?(Ua(c[d])||(c[d]={}),c[d]=Va(e,c[d])):c[d]=e}return c};var Wa=function(a){if(a instanceof v){for(var b=[],c=a.length(),d=0;d<c;d++)a.has(d)&&(b[d]=Wa(a.get(d)));return b}if(a instanceof Qa){for(var e={},f=a.U(),h=f.length(),k=0;k<h;k++)e[f.get(k)]=Wa(a.get(f.get(k)));return e}return a instanceof w?function(){for(var b=Array.prototype.slice.call(arguments,0),c=0;c<b.length;c++)b[c]=Xa(b[c]);var d=new va(ua(),ta());return Wa(a.m.apply(a,[d].concat(b)))}:a},Xa=function(a){if(Ca(a)){for(var b=[],c=0;c<a.length;c++)a.hasOwnProperty(c)&&(b[c]=Xa(a[c]));return new v(b)}if(Ua(a)){var d=
new Qa,e;for(e in a)a.hasOwnProperty(e)&&d.set(e,Xa(a[e]));return d}if("function"===typeof a)return new w("",function(b){for(var c=Array.prototype.slice.call(arguments,0),d=0;d<c.length;d++)c[d]=Wa(this.evaluate(c[d]));return Xa(a.apply(a,c))});var f=typeof a;if(null===a||"string"===f||"number"===f||"boolean"===f)return a};var Ya={control:function(a,b){return new g(a,this.evaluate(b))},fn:function(a,b,c){var d=this.F(),e=this.evaluate(b);if(!(e instanceof v))throw"Error: non-List value given for Fn argument names.";var f=Array.prototype.slice.call(arguments,2);this.K().X(a.length+f.length);return new w(a,function(){return function(a){for(var b=new va(d.M,d.H,d),c=Array.prototype.slice.call(arguments,0),h=0;h<c.length;h++)if(c[h]=this.evaluate(c[h]),c[h]instanceof g)return c[h];for(var n=e.get("length"),p=0;p<n;p++)p<
c.length?b.set(e.get(p),c[p]):b.set(e.get(p),void 0);b.set("arguments",new v(c));var q=Pa(b,f);if(q instanceof g)return"return"===q.B?q.getData():q}}())},list:function(a){var b=this.K();b.X(arguments.length);for(var c=new v,d=0;d<arguments.length;d++){var e=this.evaluate(arguments[d]);"string"===typeof e&&b.X(e.length?e.length-1:0);c.push(e)}return c},map:function(a){for(var b=this.K(),c=new Qa,d=0;d<arguments.length-1;d+=2){var e=this.evaluate(arguments[d])+"",f=this.evaluate(arguments[d+1]),h=e.length;
h+="string"===typeof f?f.length:1;b.X(h);c.set(e,f)}return c},undefined:function(){}};var x=function(){this.M=ua();this.H=ta();this.ya=new va(this.M,this.H)};x.prototype.W=function(a,b){var c=new w(a,b);c.L();this.ya.set(a,c)};x.prototype.addInstruction=x.prototype.W;x.prototype.Ub=function(a,b){Ya.hasOwnProperty(a)&&this.W(b||a,Ya[a])};x.prototype.addNativeInstruction=x.prototype.Ub;x.prototype.K=function(){return this.M};x.prototype.getQuota=x.prototype.K;x.prototype.Va=function(){this.M=ua();this.ya.M=this.M};x.prototype.resetQuota=x.prototype.Va;
x.prototype.De=function(){this.H=ta();this.ya.H=this.H};x.prototype.resetPermissions=x.prototype.De;x.prototype.R=function(a,b){var c=Array.prototype.slice.call(arguments,0);return this.xb(c)};x.prototype.execute=x.prototype.R;x.prototype.xb=function(a){for(var b,c=0;c<arguments.length;c++){var d=Oa(this.ya,arguments[c]);b=d instanceof g||d instanceof w||d instanceof v||d instanceof Qa||null===d||void 0===d||"string"===typeof d||"number"===typeof d||"boolean"===typeof d?d:void 0}return b};
x.prototype.run=x.prototype.xb;x.prototype.L=function(){this.ya.L()};x.prototype.makeImmutable=x.prototype.L;var Za=function(a){for(var b=[],c=0;c<a.length();c++)a.has(c)&&(b[c]=a.get(c));return b};var $a={Le:"concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),concat:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));for(d=1;d<arguments.length;d++)if(arguments[d]instanceof v)for(var e=arguments[d],f=0;f<e.length();f++)c.push(e.get(f));else c.push(arguments[d]);return new v(c)},every:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&
!b.m(a,this.get(d),d,this))return!1;return!0},filter:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&b.m(a,this.get(e),e,this)&&d.push(this.get(e));return new v(d)},forEach:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)this.has(d)&&b.m(a,this.get(d),d,this)},hasOwnProperty:function(a,b){return this.has(b)},indexOf:function(a,b,c){var d=this.length(),e=void 0===c?0:Number(c);0>e&&(e=Math.max(d+e,0));for(var f=e;f<d;f++)if(this.has(f)&&this.get(f)===
b)return f;return-1},join:function(a,b){for(var c=[],d=0;d<this.length();d++)c.push(this.get(d));return c.join(b)},lastIndexOf:function(a,b,c){var d=this.length(),e=d-1;void 0!==c&&(e=0>c?d+c:Math.min(c,e));for(var f=e;0<=f;f--)if(this.has(f)&&this.get(f)===b)return f;return-1},map:function(a,b){for(var c=this.length(),d=[],e=0;e<this.length()&&e<c;e++)this.has(e)&&(d[e]=b.m(a,this.get(e),e,this));return new v(d)},pop:function(){return this.pop()},push:function(a,b){return this.push.apply(this,Array.prototype.slice.call(arguments,
1))},reduce:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=0;else{if(0==d)throw"TypeError: Reduce on List with no elements.";for(var h=0;h<d;h++)if(this.has(h)){e=this.get(h);f=h+1;break}if(h==d)throw"TypeError: Reduce on List with no elements.";}for(h=f;h<d;h++)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reduceRight:function(a,b,c){var d=this.length(),e,f;if(void 0!==c)e=c,f=d-1;else{if(0==d)throw"TypeError: ReduceRight on List with no elements.";for(var h=1;h<=d;h++)if(this.has(d-
h)){e=this.get(d-h);f=d-(h+1);break}if(h>d)throw"TypeError: ReduceRight on List with no elements.";}for(h=f;0<=h;h--)this.has(h)&&(e=b.m(a,e,this.get(h),h,this));return e},reverse:function(){for(var a=Za(this),b=a.length-1,c=0;0<=b;b--,c++)a.hasOwnProperty(b)?this.set(c,a[b]):this.remove(c);return this},shift:function(){return this.shift()},slice:function(a,b,c){var d=this.length();void 0===b&&(b=0);b=0>b?Math.max(d+b,0):Math.min(b,d);c=void 0===c?d:0>c?Math.max(d+c,0):Math.min(c,d);c=Math.max(b,
c);for(var e=[],f=b;f<c;f++)e.push(this.get(f));return new v(e)},some:function(a,b){for(var c=this.length(),d=0;d<this.length()&&d<c;d++)if(this.has(d)&&b.m(a,this.get(d),d,this))return!0;return!1},sort:function(a,b){var c=Za(this);void 0===b?c.sort():c.sort(function(c,d){return Number(b.m(a,c,d))});for(var d=0;d<c.length;d++)c.hasOwnProperty(d)?this.set(d,c[d]):this.remove(d)},splice:function(a,b,c,d){return this.splice.apply(this,Array.prototype.splice.call(arguments,1,arguments.length-1))},toString:function(){return this.toString()},
unshift:function(a,b){return this.unshift.apply(this,Array.prototype.slice.call(arguments,1))}};var y={oc:{ADD:0,AND:1,APPLY:2,ASSIGN:3,BREAK:4,CASE:5,CONTINUE:6,CONTROL:49,CREATE_ARRAY:7,CREATE_OBJECT:8,DEFAULT:9,DEFN:50,DIVIDE:10,DO:11,EQUALS:12,EXPRESSION_LIST:13,FN:51,FOR:14,FOR_IN:47,GET:15,GET_CONTAINER_VARIABLE:48,GET_INDEX:16,GET_PROPERTY:17,GREATER_THAN:18,GREATER_THAN_EQUALS:19,IDENTITY_EQUALS:20,IDENTITY_NOT_EQUALS:21,IF:22,LESS_THAN:23,LESS_THAN_EQUALS:24,MODULUS:25,MULTIPLY:26,NEGATE:27,NOT:28,NOT_EQUALS:29,NULL:45,OR:30,PLUS_EQUALS:31,POST_DECREMENT:32,POST_INCREMENT:33,PRE_DECREMENT:34,
PRE_INCREMENT:35,QUOTE:46,RETURN:36,SET_PROPERTY:43,SUBTRACT:37,SWITCH:38,TERNARY:39,TYPEOF:40,UNDEFINED:44,VAR:41,WHILE:42}},bb="charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),cb=new g("break"),db=new g("continue");y.add=function(a,b){return this.evaluate(a)+this.evaluate(b)};y.and=function(a,b){return this.evaluate(a)&&this.evaluate(b)};
y.apply=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!(c instanceof v))throw"Error: Non-List argument given to Apply instruction.";if(null===a||void 0===a)throw"TypeError: Can't read property "+b+" of "+a+".";if("boolean"==typeof a||"number"==typeof a){if("toString"==b)return a.toString();throw"TypeError: "+a+"."+b+" is not a function.";}if("string"==typeof a){if(0<=Da(bb,b))return Xa(a[b].apply(a,Za(c)));throw"TypeError: "+b+" is not a function";}if(a instanceof v){if(a.has(b)){var d=
a.get(b);if(d instanceof w){var e=Za(c);e.unshift(this.F());return d.m.apply(d,e)}throw"TypeError: "+b+" is not a function";}if(0<=Da($a.Le,b))return e=Za(c),e.unshift(this.F()),$a[b].apply(a,e)}if(a instanceof w||a instanceof Qa){if(a.has(b)){d=a.get(b);if(d instanceof w)return e=Za(c),e.unshift(this.F()),d.m.apply(d,e);throw"TypeError: "+b+" is not a function";}if("toString"==b)return a instanceof w?a.getName():a.toString();if("hasOwnProperty"==b)return a.has.apply(a,Za(c))}throw"TypeError: Object has no '"+
b+"' property.";};y.assign=function(a,b){a=this.evaluate(a);if("string"!=typeof a)throw"Invalid key name given for assignment.";var c=this.F();if(!c.has(a))throw"Attempting to assign to undefined value "+b;var d=this.evaluate(b);c.set(a,d);return d};y["break"]=function(){return cb};y["case"]=function(a){for(var b=this.evaluate(a),c=0;c<b.length;c++){var d=this.evaluate(b[c]);if(d instanceof g)return d}};y["continue"]=function(){return db};
y.xd=function(a,b,c){var d=new v;b=this.evaluate(b);for(var e=0;e<b.length;e++)d.push(b[e]);var f=[y.oc.FN,a,d].concat(Array.prototype.splice.call(arguments,2,arguments.length-2));this.F().set(a,this.evaluate(f))};y.Ad=function(a,b){return this.evaluate(a)/this.evaluate(b)};y.Dd=function(a,b){return this.evaluate(a)==this.evaluate(b)};y.Ed=function(a){for(var b,c=0;c<arguments.length;c++)b=this.evaluate(arguments[c]);return b};
y.Hd=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);var d=this.F();if("string"==typeof b)for(var e=0;e<b.length;e++){d.set(a,e);var f=this.xa(c);if(f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}else if(b instanceof Qa||b instanceof v||b instanceof w){var h=b.U(),k=h.length();for(e=0;e<k;e++)if(d.set(a,h.get(e)),f=this.xa(c),f instanceof g){if("break"==f.B)break;if("return"==f.B)return f}}};y.get=function(a){return this.F().get(this.evaluate(a))};
y.hc=function(a,b){var c;a=this.evaluate(a);b=this.evaluate(b);if(void 0===a||null===a)throw"TypeError: cannot access property of "+a+".";a instanceof Qa||a instanceof v||a instanceof w?c=a.get(b):"string"==typeof a&&("length"==b?c=a.length:qa(b)&&(c=a[b]));return c};y.Kd=function(a,b){return this.evaluate(a)>this.evaluate(b)};y.Ld=function(a,b){return this.evaluate(a)>=this.evaluate(b)};y.Sd=function(a,b){return this.evaluate(a)===this.evaluate(b)};y.Td=function(a,b){return this.evaluate(a)!==this.evaluate(b)};
y["if"]=function(a,b,c){var d=[];this.evaluate(a)?d=this.evaluate(b):c&&(d=this.evaluate(c));var e=this.xa(d);if(e instanceof g)return e};y.ae=function(a,b){return this.evaluate(a)<this.evaluate(b)};y.be=function(a,b){return this.evaluate(a)<=this.evaluate(b)};y.de=function(a,b){return this.evaluate(a)%this.evaluate(b)};y.multiply=function(a,b){return this.evaluate(a)*this.evaluate(b)};y.ee=function(a){return-this.evaluate(a)};y.fe=function(a){return!this.evaluate(a)};
y.he=function(a,b){return this.evaluate(a)!=this.evaluate(b)};y["null"]=function(){return null};y.or=function(a,b){return this.evaluate(a)||this.evaluate(b)};y.Dc=function(a,b){var c=this.evaluate(a);this.evaluate(b);return c};y.Ec=function(a){return this.evaluate(a)};y.quote=function(a){return Array.prototype.slice.apply(arguments)};y["return"]=function(a){return new g("return",this.evaluate(a))};
y.setProperty=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(null===a||void 0===a)throw"TypeError: Can't set property "+b+" of "+a+".";(a instanceof w||a instanceof v||a instanceof Qa)&&a.set(b,c);return c};y.Je=function(a,b){return this.evaluate(a)-this.evaluate(b)};
y["switch"]=function(a,b,c){a=this.evaluate(a);b=this.evaluate(b);c=this.evaluate(c);if(!Ca(b)||!Ca(c))throw"Error: Malformed switch instruction.";for(var d,e=!1,f=0;f<b.length;f++)if(e||a===this.evaluate(b[f]))if(d=this.evaluate(c[f]),d instanceof g){var h=d.B;if("break"==h)return;if("return"==h||"continue"==h)return d}else e=!0;if(c.length==b.length+1&&(d=this.evaluate(c[c.length-1]),d instanceof g&&("return"==d.B||"continue"==d.B)))return d};
y.Me=function(a,b,c){return this.evaluate(a)?this.evaluate(b):this.evaluate(c)};y["typeof"]=function(a){a=this.evaluate(a);return a instanceof w?"function":typeof a};y.undefined=function(){};y["var"]=function(a){for(var b=this.F(),c=0;c<arguments.length;c++){var d=arguments[c];"string"!=typeof d||b.add(d,void 0)}};
y["while"]=function(a,b,c,d){var e,f=this.evaluate(d);if(this.evaluate(c)&&(e=this.xa(f),e instanceof g)){if("break"==e.B)return;if("return"==e.B)return e}for(;this.evaluate(a);){e=this.xa(f);if(e instanceof g){if("break"==e.B)break;if("return"==e.B)return e}this.evaluate(b)}};var fb=function(){this.nc=!1;this.D=new x;eb(this);this.nc=!0};fb.prototype.Yd=function(){return this.nc};fb.prototype.isInitialized=fb.prototype.Yd;fb.prototype.R=function(a){this.D.H.xc(String(a[0]))||(this.D.H.reset(),this.D.H.Hc(!0));return this.D.xb(a)};fb.prototype.execute=fb.prototype.R;fb.prototype.L=function(){this.D.L()};fb.prototype.makeImmutable=fb.prototype.L;
var eb=function(a){function b(a,b){e.D.Ub(a,String(b))}function c(a,b){e.D.W(String(d[a]),b)}var d=y.oc,e=a;b("control",d.CONTROL);b("fn",d.FN);b("list",d.CREATE_ARRAY);b("map",d.CREATE_OBJECT);b("undefined",d.UNDEFINED);c("ADD",y.add);c("AND",y.and);c("APPLY",y.apply);c("ASSIGN",y.assign);c("BREAK",y["break"]);c("CASE",y["case"]);c("CONTINUE",y["continue"]);c("DEFAULT",y["case"]);c("DEFN",y.xd);c("DIVIDE",y.Ad);c("EQUALS",y.Dd);c("EXPRESSION_LIST",y.Ed);c("FOR_IN",y.Hd);c("GET",y.get);c("GET_INDEX",
y.hc);c("GET_PROPERTY",y.hc);c("GREATER_THAN",y.Kd);c("GREATER_THAN_EQUALS",y.Ld);c("IDENTITY_EQUALS",y.Sd);c("IDENTITY_NOT_EQUALS",y.Td);c("IF",y["if"]);c("LESS_THAN",y.ae);c("LESS_THAN_EQUALS",y.be);c("MODULUS",y.de);c("MULTIPLY",y.multiply);c("NEGATE",y.ee);c("NOT",y.fe);c("NOT_EQUALS",y.he);c("NULL",y["null"]);c("OR",y.or);c("POST_DECREMENT",y.Dc);c("POST_INCREMENT",y.Dc);c("PRE_DECREMENT",y.Ec);c("PRE_INCREMENT",y.Ec);c("QUOTE",y.quote);c("RETURN",y["return"]);c("SET_PROPERTY",y.setProperty);
c("SUBTRACT",y.Je);c("SWITCH",y["switch"]);c("TERNARY",y.Me);c("TYPEOF",y["typeof"]);c("VAR",y["var"]);c("WHILE",y["while"])};fb.prototype.W=function(a,b){this.D.W(a,b)};fb.prototype.addInstruction=fb.prototype.W;fb.prototype.K=function(){return this.D.K()};fb.prototype.getQuota=fb.prototype.K;fb.prototype.Va=function(){this.D.Va()};fb.prototype.resetQuota=fb.prototype.Va;fb.prototype.oa=function(a){this.D.H.oa(a)};fb.prototype.Ma=function(a,b,c){this.D.H.Vb(a,b,c)};var gb=function(){this.Ra={}};gb.prototype.get=function(a){return this.Ra.hasOwnProperty(a)?this.Ra[a]:void 0};gb.prototype.add=function(a,b){if(this.Ra.hasOwnProperty(a))throw"Attempting to add a function which already exists: "+a+".";var c=new w(a,function(){for(var a=Array.prototype.slice.call(arguments,0),c=0;c<a.length;c++)a[c]=this.evaluate(a[c]);return b.apply(this,a)});c.L();this.Ra[a]=c};gb.prototype.addAll=function(a){for(var b in a)a.hasOwnProperty(b)&&this.add(b,a[b])};var z=window,B=document,hb=navigator,ib=function(a,b){var c=z[a];z[a]=void 0===c?b:c;return z[a]},jb=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},lb=function(a,b,c){var d=B.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;jb(d,b);c&&(d.onerror=c);oa()&&d.setAttribute("nonce",oa());var e=B.getElementsByTagName("script")[0]||B.body||B.head;e.parentNode.insertBefore(d,e);return d},
mb=function(a,b){var c=B.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=B.body&&B.body.lastChild||B.body||B.head;d.parentNode.insertBefore(c,d);jb(c,b);void 0!==a&&(c.src=a);return c},C=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},nb=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},ob=function(a,b,
c,d){a.removeEventListener?a.removeEventListener(b,c,!!d):a.detachEvent&&a.detachEvent("on"+b,c)},H=function(a){z.setTimeout(a,0)},qb=function(a){var b=B.getElementById(a);if(b&&pb(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(pb(document.all[a][c],"id")==a)return document.all[a][c];return b},pb=function(a,b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rb=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=
b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sb=function(a){var b=B.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tb=function(a){hb.sendBeacon&&hb.sendBeacon(a)||C(a)};var ub=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var vb=/:[0-9]+$/,wb=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")==b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},xb=function(a,b,c,d,e){var f,h=function(a){return a?a.replace(":","").toLowerCase():""},k=h(a.protocol)||h(z.location.protocol);b&&(b=String(b).toLowerCase());switch(b){case "protocol":f=k;break;case "host":f=(a.hostname||z.location.hostname).replace(vb,"").toLowerCase();
if(c){var l=/^www\d*\./.exec(f);l&&l[0]&&(f=f.substr(l[0].length))}break;case "port":f=String(Number(a.hostname?a.port:z.location.port)||("http"==k?80:"https"==k?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var m=f.split("/");0<=Da(d||[],m[m.length-1])&&(m[m.length-1]="");f=m.join("/");break;case "query":f=a.search.replace("?","");e&&(f=wb(f,e));break;case "extension":var n=a.pathname.split(".");f=1<n.length?n[n.length-1]:"";f=f.split("/")[0];break;case "fragment":f=
a.hash.replace("#","");break;default:f=a&&a.href}return f},zb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},N=function(a){var b=document.createElement("a");a&&(ub.test(a),b.href=a);var c=b.pathname;"/"!==c[0]&&(c="/"+c);var d=b.hostname.replace(vb,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};var Cb=function(){this.Ua=new fb;var a=new gb;a.addAll(Ab());Bb(this,function(b){return a.get(b)})},Ab=function(){return{callInWindow:Db,callLater:Eb,copyFromWindow:Fb,encodeURI:encodeURI,encodeURIComponent:encodeURIComponent,getReferrer:Gb,getUrl:Hb,getUrlComponent:Ib,getUrlFragment:Jb,isPlainObject:Kb,loadIframe:Lb,loadJavaScript:Mb,logToConsole:Nb,queryPermission:Ob,removeUrlFragment:Pb,replaceAll:Qb,sendPixel:Rb,setInWindow:Sb}};Cb.prototype.R=function(a){return this.Ua.R(a)};
Cb.prototype.execute=Cb.prototype.R;var Bb=function(a,b){a.Ua.W("require",b)};Cb.prototype.oa=function(a){this.Ua.oa(a)};Cb.prototype.Ma=function(a,b,c){this.Ua.Ma(a,b,c)};function Db(a,b){for(var c=a.split("."),d=z,e=d[c[0]],f=1;e&&f<c.length;f++)d=e,e=e[c[f]];if("function"==Sa(e)){var h=[];for(f=1;f<arguments.length;f++)h.push(Wa(arguments[f]));e.apply(d,h)}}function Eb(a){H(a)}function Hb(){return z.location.href}
function Fb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e||null===e)return;b&&(void 0===e[d[f]]||c&&!e[d[f]])&&(e[d[f]]=Wa(b));return Xa(e[d[f]])}function Gb(){return B.referrer}function Ib(a,b,c,d,e){var f;if(d&&d instanceof v){f=[];for(var h=0;h<d.length();h++){var k=d.get(h);"string"==typeof k&&f.push(k)}}return xb(N(a),b,c,f,e)}function Jb(a){return xb(N(a),"fragment")}function Kb(a){return a instanceof Qa}
function Lb(a,b){var c=this.F();mb(a,function(){b instanceof w&&b.m(c)})}var Vb={};
function Mb(a,b,c,d){this.gc().assert("networkAccess",a);var e=this.F(),f=function(){b instanceof w&&b.m(e)},h=function(){c instanceof w&&c.m(e)};d?Vb[d]?(Vb[d].onSuccess.push(f),Vb[d].onFailure.push(h)):(Vb[d]={onSuccess:[f],onFailure:[h]},f=function(){for(var a=Vb[d].onSuccess,b=0;b<a.length;b++)H(a[b]);a.push=function(a){H(a);return 0}},h=function(){for(var a=Vb[d].onFailure,b=0;b<a.length;b++)H(a[b]);Vb[d]=null},lb(a,f,h)):lb(a,f,h)}
function Nb(){var a=Array.prototype.slice.call(arguments,0);console.log.apply(console,a)}function Pb(a){return zb(N(a))}function Qb(a,b,c){return a.replace(new RegExp(b,"g"),c)}function Rb(a,b,c){var d=this.F();C(a,function(){b instanceof w&&b.m(d)},function(){c instanceof w&&c.m(d)})}function Sb(a,b,c){for(var d=a.split("."),e=z,f=0;f<d.length-1;f++)if(e=e[d[f]],void 0===e)return!1;return void 0===e[d[f]]||c?(e[d[f]]=Wa(b),!0):!1}
function Ob(a,b){try{return this.gc().assert.apply(null,Array.prototype.slice.call(arguments,0)),!0}catch(c){return!1}};
var Wb=[],Xb={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Yb=function(a){return Xb[a]},Zb=/[\x00\x22\x26\x27\x3c\x3e]/g;var cc=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,dc={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},ec=function(a){return dc[a]};
Wb[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(cc,ec)+"'"}};var mc=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nc={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},oc=function(a){return nc[a]};Wb[16]=function(a){return a};var qc,rc=[],sc=[],tc=[],uc=[],vc=[],wc={},zc,Ac,Bc,Cc=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=!!wc[b],d={},e;for(e in a)a.hasOwnProperty(e)&&0===e.indexOf("vtp_")&&(d[c?e:e.substr(4)]=a[e]);return c?wc[b](d):qc(b,d)},Ec=function(a,b,c,d){c=c||[];d=d||xa;var e={},f;for(f in a)a.hasOwnProperty(f)&&(e[f]=Dc(a[f],b,c,d));return e},Dc=function(a,b,c,d){if(Ca(a)){var e;switch(a[0]){case "function_id":return a[1];case "list":e=[];for(var f=1;f<
a.length;f++)e.push(Dc(a[f],b,c,d));return e;case "macro":var h=a[1];if(c[h])return;var k=rc[h];if(!k||b(k))return;c[h]=!0;try{var l=Ec(k,b,c,d);e=Cc(l);Bc&&(e=Bc.sd(e,l))}catch(A){d(h,A),e=!1}c[h]=!1;return e;case "map":e={};for(var m=1;m<a.length;m+=2)e[Dc(a[m],b,c,d)]=Dc(a[m+1],b,c,d);return e;case "template":e=[];for(var n=!1,p=1;p<a.length;p++){var q=Dc(a[p],b,c,d);Ac&&(n=n||q===Ac.Ha);e.push(q)}return Ac&&n?Ac.td(e):e.join("");case "escape":e=Dc(a[1],b,c,d);if(Ac&&Ca(a[1])&&"macro"===a[1][0]&&
Ac.Zd(a))return Ac.qe(e);e=String(e);for(var r=2;r<a.length;r++)Wb[a[r]]&&(e=Wb[a[r]](e));return e;case "tag":var u=a[1];if(!uc[u])throw Error("Unable to resolve tag reference "+u+".");return e={ac:a[2],index:u};case "zb":var t=Fc({"function":a[1],arg0:a[2],arg1:a[3],ignore_case:a[5]},b,c,d);a[4]&&(t=!t);return t;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Fc=function(a,b,c,d){try{return zc(Ec(a,b,c,d))}catch(e){JSON.stringify(a)}return null};var Gc=null,Jc=function(a){function b(a){for(var b=0;b<a.length;b++)d[a[b]]=!0}var c=[],d=[];Gc=Hc(a,function(){});for(var e=0;e<sc.length;e++){var f=sc[e],h=Ic(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}var m=[];for(e=0;e<uc.length;e++)c[e]&&!d[e]&&(m[e]=!0);return m},Ic=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Gc(b[c]);if(!d)return null===d?null:!1}var e=a.unless||[];for(c=0;c<e.length;c++){d=Gc(e[c]);if(null===d)return null;
if(d)return!1}return!0};var Hc=function(a,b){var c=[];return function(d){void 0===c[d]&&(c[d]=Fc(tc[d],a,void 0,b));return c[d]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var Kc,Lc=function(){};(function(){function a(a,h){a=a||"";h=h||{};for(var k in b)b.hasOwnProperty(k)&&(h.bd&&(h["fix_"+k]=!0),h.bc=h.bc||h["fix_"+k]);var l={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},p={comment:function(){var b=a.indexOf("--\x3e");if(0<=b)return{content:a.substr(4,b),length:b+3}},endTag:function(){var b=a.match(d);if(b)return{tagName:b[1],length:b[0].length}},atomicTag:function(){var b=p.startTag();
if(b){var c=a.slice(b.length);if(c.match(new RegExp("</\\s*"+b.tagName+"\\s*>","i"))){var d=c.match(new RegExp("([\\s\\S]*?)</\\s*"+b.tagName+"\\s*>","i"));if(d)return{tagName:b.tagName,C:b.C,content:d[1],length:d[0].length+b.length}}}},startTag:function(){var b=a.match(c);if(b){var d={};b[2].replace(e,function(a,b,c,e,h){var k=c||e||h||f.test(b)&&b||null,l=document.createElement("div");l.innerHTML=k;d[b]=l.textContent||l.innerText||k});return{tagName:b[1],C:d,Fa:!!b[3],length:b[0].length}}},chars:function(){var b=
a.indexOf("<");return{length:0<=b?b:a.length}}},q=function(){for(var b in l)if(l[b].test(a)){var c=p[b]();return c?(c.type=c.type||b,c.text=a.substr(0,c.length),a=a.slice(c.length),c):null}};h.bc&&function(){var b=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,c=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,d=[];d.vc=function(){return this[this.length-1]};d.pb=function(a){var b=this.vc();return b&&b.tagName&&b.tagName.toUpperCase()===a.toUpperCase()};d.rd=
function(a){for(var b=0,c;c=this[b];b++)if(c.tagName===a)return!0;return!1};var e=function(a){a&&"startTag"===a.type&&(a.Fa=b.test(a.tagName)||a.Fa);return a},f=q,k=function(){a="</"+d.pop().tagName+">"+a},l={startTag:function(b){var e=b.tagName;"TR"===e.toUpperCase()&&d.pb("TABLE")?(a="<TBODY>"+a,m()):h.cf&&c.test(e)&&d.rd(e)?d.pb(e)?k():(a="</"+b.tagName+">"+a,m()):b.Fa||d.push(b)},endTag:function(a){d.vc()?h.Fd&&!d.pb(a.tagName)?k():d.pop():h.Fd&&(f(),m())}},m=function(){var b=a,c=e(f());a=b;if(c&&
l[c.type])l[c.type](c)};q=function(){m();return e(f())}}();return{append:function(b){a+=b},we:q,kf:function(a){for(var b;(b=q())&&(!a[b.type]||!1!==a[b.type](b)););},clear:function(){var b=a;a="";return b},lf:function(){return a},stack:[]}}var b=function(){var a={},b=this.document.createElement("div");b.innerHTML="<P><I></P></I>";a.rf="<P><I></P></I>"!==b.innerHTML;b.innerHTML="<P><i><P></P></i></P>";a.pf=2===b.childNodes.length;return a}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.supports=b;a.sf=function(a){var b={comment:function(a){return"<--"+a.content+"--\x3e"},endTag:function(a){return"</"+a.tagName+">"},atomicTag:function(a){return b.startTag(a)+a.content+b.endTag(a)},startTag:function(a){var b="<"+a.tagName,c;for(c in a.C){var d=a.C[c];
b+=" "+c+'="'+(d?d.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return b+(a.Fa?"/>":">")},chars:function(a){return a.text}};return b[a.type](a)};a.bf=function(a){var b={},c;for(c in a){var d=a[c];b[c]=d&&d.replace(/(^|[^\\])"/g,'$1\\"')}return b};for(var h in b)a.gd=a.gd||!b[h]&&h;Kc=a})();(function(){function a(){}function b(a){return void 0!==a&&null!==a}function c(a,b,c){var d,e=a&&a.length||0;for(d=0;d<e;d++)b.call(c,a[d],d)}function d(a,b,c){for(var d in a)a.hasOwnProperty(d)&&b.call(c,d,a[d])}function e(a,
b){d(b,function(b,c){a[b]=c});return a}function f(a,c){a=a||{};d(c,function(c,d){b(a[c])||(a[c]=d)});return a}function h(a){try{return m.call(a)}catch(r){var b=[];c(a,function(a){b.push(a)});return b}}var k={Uc:a,Vc:a,Wc:a,Xc:a,cd:a,dd:function(a){return a},done:a,error:function(a){throw a;},Ae:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function a(a,c,d){var e="data-ps-"+c;if(2===arguments.length){var f=a.getAttribute(e);return b(f)?String(f):f}b(d)&&""!==d?a.setAttribute(e,
d):a.removeAttribute(e)}function f(b,c){var d=b.ownerDocument;e(this,{root:b,options:c,Ga:d.defaultView||d.parentWindow,ja:d,Ta:Kc("",{bd:!0}),eb:[b],vb:"",wb:d.createElement(b.nodeName),Da:[],da:[]});a(this.wb,"proxyof",0)}f.prototype.write=function(){[].push.apply(this.da,arguments);for(var a;!this.Pa&&this.da.length;)a=this.da.shift(),"function"===typeof a?this.ld(a):this.Gb(a)};f.prototype.ld=function(a){var b={type:"function",value:a.name||a.toString()};this.sb(b);a.call(this.Ga,this.ja);this.Ac(b)};
f.prototype.Gb=function(a){this.Ta.append(a);for(var b,c=[],d,e;(b=this.Ta.we())&&!(d=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("script"):!1)&&!(e=b&&"tagName"in b?!!~b.tagName.toLowerCase().indexOf("style"):!1);)c.push(b);this.Se(c);d&&this.Md(b);e&&this.Nd(b)};f.prototype.Se=function(a){var b=this.hd(a);b.Tb&&(b.lb=this.vb+b.Tb,this.vb+=b.ve,this.wb.innerHTML=b.lb,this.Qe())};f.prototype.hd=function(a){var b=this.eb.length,d=[],e=[],f=[];c(a,function(a){d.push(a.text);if(a.C){if(!/^noscript$/i.test(a.tagName)){var c=
b++;e.push(a.text.replace(/(\/?>)/," data-ps-id="+c+" $1"));"ps-script"!==a.C.id&&"ps-style"!==a.C.id&&f.push("atomicTag"===a.type?"":"<"+a.tagName+" data-ps-proxyof="+c+(a.Fa?" />":">"))}}else e.push(a.text),f.push("endTag"===a.type?a.text:"")});return{tf:a,raw:d.join(""),Tb:e.join(""),ve:f.join("")}};f.prototype.Qe=function(){for(var c,d=[this.wb];b(c=d.shift());){var e=1===c.nodeType;if(!e||!a(c,"proxyof")){e&&(this.eb[a(c,"id")]=c,a(c,"id",null));var f=c.parentNode&&a(c.parentNode,"proxyof");
f&&this.eb[f].appendChild(c)}d.unshift.apply(d,h(c.childNodes))}};f.prototype.Md=function(a){var b=this.Ta.clear();b&&this.da.unshift(b);a.src=a.C.src||a.C.Ve;a.src&&this.Da.length?this.Pa=a:this.sb(a);var c=this;this.Re(a,function(){c.Ac(a)})};f.prototype.Nd=function(a){var b=this.Ta.clear();b&&this.da.unshift(b);a.type=a.C.type||a.C.We||"text/css";this.Te(a);b&&this.write()};f.prototype.Te=function(a){var b=this.kd(a);this.Xd(b);a.content&&(b.styleSheet&&!b.sheet?b.styleSheet.cssText=a.content:
b.appendChild(this.ja.createTextNode(a.content)))};f.prototype.kd=function(a){var b=this.ja.createElement(a.tagName);b.setAttribute("type",a.type);d(a.C,function(a,c){b.setAttribute(a,c)});return b};f.prototype.Xd=function(a){this.Gb('<span id="ps-style"/>');var b=this.ja.getElementById("ps-style");b.parentNode.replaceChild(a,b)};f.prototype.sb=function(a){a.me=this.da;this.da=[];this.Da.unshift(a)};f.prototype.Ac=function(a){a!==this.Da[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.Da.shift(),this.write.apply(this,a.me),!this.Da.length&&this.Pa&&(this.sb(this.Pa),this.Pa=null))};f.prototype.Re=function(a,b){var c=this.jd(a),d=this.He(c),e=this.options.Uc;a.src&&(c.src=a.src,this.Fe(c,d?e:function(){b();e()}));try{this.Wd(c),a.src&&!d||b()}catch(E){this.options.error(E),b()}};f.prototype.jd=function(a){var b=this.ja.createElement(a.tagName);d(a.C,function(a,c){b.setAttribute(a,c)});a.content&&(b.text=a.content);return b};f.prototype.Wd=function(a){this.Gb('<span id="ps-script"/>');
var b=this.ja.getElementById("ps-script");b.parentNode.replaceChild(a,b)};f.prototype.Fe=function(a,b){function c(){a=a.onload=a.onreadystatechange=a.onerror=null}var d=this.options.error;e(a,{onload:function(){c();b()},onreadystatechange:function(){/^(loaded|complete)$/.test(a.readyState)&&(c(),b())},onerror:function(){var e={message:"remote script failed "+a.src};c();d(e);b()}})};f.prototype.He=function(a){return!/^script$/i.test(a.nodeName)||!!(this.options.Ae&&a.src&&a.hasAttribute("async"))};
return f}();l.postscribe=function(){function b(){var a=m.shift(),b;a&&(b=a[a.length-1],b.Vc(),a.stream=c.apply(null,a),b.Wc())}function c(c,f,k){function l(a){a=k.dd(a);t.write(a);k.Xc(a)}t=new n(c,k);t.id=d++;t.name=k.name||t.id;var m=c.ownerDocument,p={close:m.close,open:m.open,write:m.write,writeln:m.writeln};e(m,{close:a,open:a,write:function(){return l(h(arguments).join(""))},writeln:function(){return l(h(arguments).join("")+"\n")}});var q=t.Ga.onerror||a;t.Ga.onerror=function(a,b,c){k.error({ff:a+
" - "+b+":"+c});q.apply(t.Ga,arguments)};t.write(f,function(){e(m,p);t.Ga.onerror=q;k.done();t=null;b()});return t}var d=0,m=[],t=null;return e(function(c,d,e){"function"===typeof e&&(e={done:e});e=f(e,k);c=/^#/.test(c)?l.document.getElementById(c.substr(1)):c.df?c[0]:c;var h=[c,d,e];c.pe={cancel:function(){h.stream?h.stream.abort():h[1]=a}};e.cd(h);m.push(h);t||b();return c.pe},{streams:{},jf:m,Xe:n})}();Lc=l.postscribe}})();var Mc={},Nc=null;Mc.o="GTM-7BF3X";var Oc=null,Pc="//www.googletagmanager.com/a?id="+Mc.o+"&cv=289",Qc={},Rc={},Sc=B.currentScript?B.currentScript.src:void 0,Tc=function(){var a=Nc.sequence||0;Nc.sequence=a+1;return a};var P=function(){var a=function(a){return{toString:function(){return a}}};return{Jb:a("convert_case_to"),Kb:a("convert_false_to"),Lb:a("convert_null_to"),Mb:a("convert_true_to"),Nb:a("convert_undefined_to"),N:a("function"),Kc:a("instance_name"),Lc:a("live_only"),Mc:a("malware_disabled"),Nc:a("once_per_event"),Pb:a("once_per_load"),Qb:a("setup_tags"),Oc:a("tag_id"),Rb:a("teardown_tags")}}();var Uc=new Ja,Vc={},Yc={set:function(a,b){Va(Wc(a,b),Vc)},get:function(a){return Xc(a,2)},reset:function(){Uc=new Ja;Vc={}}},Xc=function(a,b){return 2!=b?Uc.get(a):Zc(a)},Zc=function(a,b,c){var d=a.split(".");return ad(d)},ad=function(a){for(var b=Vc,c=0;c<a.length;c++){if(null===
b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var cd=function(a,b){Uc.set(a,b);Va(Wc(a,b),Vc)},Wc=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var dd=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ed={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},fd={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},gd=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c};
var hd=function(a){var b=Xc("gtm.whitelist");var c=b&&gd(Ha(b),ed),d=Xc("gtm.blacklist")||Xc("tagTypeBlacklist")||[];
dd.test(z.location&&z.location.hostname)&&(d=Ha(d),d.push("nonGooglePixels","nonGoogleScripts"));var e=d&&gd(Ha(d),fd),f={};return function(h){var k=h&&h[P.N];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=Rc[k]||[],m=a(k);if(b){var n;if(n=m)a:{if(0>Da(c,k))if(l&&0<l.length)for(var p=0;p<l.length;p++){if(0>Da(c,l[p])){n=!1;break a}}else{n=!1;break a}n=!0}m=n}var q=!1;if(d){var r;if(!(r=0<=
Da(e,k)))a:{for(var u=l||[],t=new Ja,A=0;A<e.length;A++)t.set(e[A],!0);for(var D=0;D<u.length;D++)if(t.get(u[D])){r=!0;break a}r=!1}q=r}return f[k]=!m||q}};var id={sd:function(a,b){b[P.Jb]&&"string"===typeof a&&(a=1==b[P.Jb]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(P.Lb)&&null===a&&(a=b[P.Lb]);b.hasOwnProperty(P.Nb)&&void 0===a&&(a=b[P.Nb]);b.hasOwnProperty(P.Mb)&&!0===a&&(a=b[P.Mb]);b.hasOwnProperty(P.Kb)&&!1===a&&(a=b[P.Kb]);return a}};var jd=function(a){var b;b=Error.call(this);this.message=b.message;"stack"in b&&(this.stack=b.stack);this.ne=a},kd=Error;jd.prototype=da(kd.prototype);jd.prototype.constructor=jd;if(ka)ka(jd,kd);else for(var ld in kd)if("prototype"!=ld)if(Object.defineProperties){var md=Object.getOwnPropertyDescriptor(kd,ld);md&&Object.defineProperty(jd,ld,md)}else jd[ld]=kd[ld];jd.Ke=kd.prototype;jd.prototype.getParameters=function(){return this.ne};var nd=function(a){var b=Nc.zones;!b&&a&&(b=Nc.zones=a());return b},pd={active:!0,isWhitelisted:function(){return!0}};var qd=!1,rd=0,sd=[];function td(a){if(!qd){var b=B.createEventObject,c="complete"==B.readyState,d="interactive"==B.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){qd=!0;for(var e=0;e<sd.length;e++)H(sd[e])}sd.push=function(){for(var a=0;a<arguments.length;a++)H(arguments[a]);return 0}}}function ud(){if(!qd&&140>rd){rd++;try{B.documentElement.doScroll("left"),td()}catch(a){z.setTimeout(ud,50)}}}var vd=function(a){qd?a():sd.push(a)};var wd=!1,xd=function(){return z.GoogleAnalyticsObject&&z[z.GoogleAnalyticsObject]};var yd=function(a){z.GoogleAnalyticsObject||(z.GoogleAnalyticsObject=a||"ga");var b=z.GoogleAnalyticsObject;if(!z[b]){var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(Ia());z[b]=c}return z[b]},zd=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=xd();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Dd=function(){return"&tc="+uc.filter(function(a){return a}).length},Ed="0.005000">Math.random(),Fd=function(){var a=0,b=0;return{$d:function(){if(2>a)return!1;1E3<=Ia().getTime()-b&&(a=0);return 2<=a},ye:function(){1E3<=Ia().getTime()-b&&(a=0);a++;b=Ia().getTime()}}},Gd="",Hd=function(){Gd=[Pc,"&v=3&t=t","&pid="+Ea(),"&rv=9h"].join("")},Id={},Jd="",Kd=void 0,Ld={},Md={},Nd=void 0,Od=null,Pd=1E3,Qd=function(){var a=Kd;return void 0===a?"":[Gd,Id[a]?"":"&es=1",
Ld[a],Dd(),Jd,"&z=0"].join("")},Rd=function(){Nd&&(z.clearTimeout(Nd),Nd=void 0);void 0===Kd||Id[Kd]&&!Jd||(Md[Kd]||Od.$d()||0>=Pd--?Md[Kd]=!0:(Od.ye(),C(Qd()),Id[Kd]=!0,Jd=""))},Sd=function(a,b,c){if(Ed&&!Md[a]&&b){a!==Kd&&(Rd(),Kd=a);var d=c+String(b[P.N]||"").replace(/_/g,"");Jd=Jd?Jd+"."+d:"&tr="+d;Nd||(Nd=z.setTimeout(Rd,500));2022<=Qd().length&&Rd()}};function Td(a,b,c,d,e,f){var h=uc[a],k=Ud(a,b,c,d,e,f);if(!k)return null;var l=Dc(h[P.Qb],f.Z,[],Vd());if(l&&l.length){var m=l[0];k=Td(m.index,b,k,1===m.ac?e:k,e,f)}return k}
function Ud(a,b,c,d,e,f){function h(){var b=Ec(k,f.Z,[],l);b.vtp_gtmOnSuccess=function(){Sd(f.id,uc[a],"5");c()};b.vtp_gtmOnFailure=function(){Sd(f.id,uc[a],"6");d()};b.vtp_gtmTagId=k.tag_id;if(k[P.Mc])d();else{Sd(f.id,k,"1");try{Cc(b)}catch(D){Sd(f.id,
k,"7");e()}}}var k=uc[a];if(f.Z(k))return null;var l=Vd(),m=Dc(k[P.Rb],f.Z,[],l);if(m&&m.length){var n=m[0],p=Td(n.index,b,c,d,e,f);if(!p)return null;c=p;d=2===n.ac?e:p}if(k[P.Pb]||k[P.Nc]){var q=k[P.Pb]?vc:b,r=c,u=d;if(!q[a]){h=La(h);var t=Wd(a,q,h);c=t.V;d=t.la}return function(){q[a](r,u)}}return h}
function Wd(a,b,c){var d=[],e=[];b[a]=Xd(d,e,c);return{V:function(){b[a]=Yd;for(var c=0;c<d.length;c++)d[c]()},la:function(){b[a]=Zd;for(var c=0;c<e.length;c++)e[c]()}}}function Xd(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function Yd(a){a()}function Zd(a,b){b()}function Vd(){return function(){}};function $d(a){var b=0,c=0,d=!1;return{add:function(){c++;return La(function(){b++;d&&b>=c&&a()})},$c:function(){d=!0;b>=c&&a()}}}function ae(a,b){if(!Ed)return;var c=function(a){var d=b.Z(uc[a])?"3":"4",f=Dc(uc[a][P.Qb],b.Z,[],xa);f&&f.length&&c(f[0].index);Sd(b.id,uc[a],d);var h=Dc(uc[a][P.Rb],b.Z,[],xa);h&&h.length&&c(h[0].index)};c(a);}var be=!1;var ce=function(a,b){var c={};c[P.N]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);for(d in void 0)(void 0).hasOwnProperty(d)&&(c[d]=(void 0)[d]);uc.push(c);return uc.length-1};var de="allow_ad_personalization_signals cookie_domain cookie_expires cookie_name cookie_path custom_params event_callback event_timeout groups send_to send_page_view session_duration user_properties".split(" ");var ee=/[A-Z]+/,fe=/\s/,ge=function(a){if(Aa(a)&&(a=a.trim(),!fe.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(ee.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],Y:d}}}}};var he=null,ie={},je={},ke;function le(){he=he||!Nc.gtagRegistered;Nc.gtagRegistered=!0;return he}var me=function(a,b){var c={event:a};b&&(c.eventModel=Va(b),b.event_callback&&(c.eventCallback=b.event_callback),b.event_timeout&&(c.eventTimeout=b.event_timeout));return c};
function ne(a){if(void 0===je[a.id]){var b;if("UA"==a.prefix)b=ce("gtagua",{trackingId:a.id});else if("AW"==a.prefix)b=ce("gtagaw",{conversionId:a});else if("DC"==a.prefix)b=ce("gtagfl",{targetId:a.id});else if("GF"==a.prefix)b=ce("gtaggf",{conversionId:a});else if("G"==a.prefix)b=ce("get",{trackingId:a.id,isAutoTag:!0});else if("HA"==a.prefix)b=ce("gtagha",{conversionId:a});else return;if(!ke){var c={name:"send_to",dataLayerVersion:2},d={};d[P.N]="__v";for(var e in c)c.hasOwnProperty(e)&&(d["vtp_"+
e]=c[e]);rc.push(d);ke=["macro",rc.length-1]}var f={arg0:ke,arg1:a.id,ignore_case:!1};f[P.N]="_lc";tc.push(f);var h={"if":[tc.length-1],add:[b]};h["if"]&&(h.add||h.block)&&sc.push(h);je[a.id]=b}}
var pe={event:function(a){var b=a[1];if(Aa(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ua(a[2]))return;c=a[2]}var d=me(b,c);return d}},set:function(a){var b;2==a.length&&Ua(a[1])?
b=Va(a[1]):3==a.length&&Aa(a[1])&&(b={},b[a[1]]=a[2]);if(b)return b.eventModel=Va(b),b.event="gtag.set",b._clear=!0,b},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},config:function(a){}},oe=La(function(){});var qe=!1,re=[];function se(){if(!qe){qe=!0;for(var a=0;a<re.length;a++)H(re[a])}};var te=[],ue=!1,ve=function(a){var b=a.eventCallback,c=La(function(){ya(b)&&H(function(){b(Mc.o)})}),d=a.eventTimeout;d&&z.setTimeout(c,Number(d));return c},we=function(){for(var a=!1;!ue&&0<te.length;){ue=!0;delete Vc.eventModel;var b=te.shift();if(ya(b))try{b.call(Yc)}catch(Ae){}else if(Ca(b)){var c=b;if(Aa(c[0])){var d=c[0].split("."),e=d.pop(),f=c.slice(1),h=Xc(d.join("."),2);if(void 0!==h&&null!==h)try{h[e].apply(h,f)}catch(Ae){}}}else{var k=b;if(k&&("[object Arguments]"==Object.prototype.toString.call(k)||
Object.prototype.hasOwnProperty.call(k,"callee"))){a:{if(b.length&&Aa(b[0])){var l=pe[b[0]];if(l){b=l(b);break a}}b=void 0}if(!b){ue=!1;continue}}var m;var n=void 0,p=b,q=p._clear;for(n in p)p.hasOwnProperty(n)&&"_clear"!==n&&(q&&cd(n,void 0),cd(n,p[n]));var r=p.event;if(r){var u=p["gtm.uniqueEventId"];u||(u=Tc(),p["gtm.uniqueEventId"]=u,cd("gtm.uniqueEventId",u));Oc=r;var t;var A,D,E=p,M=E.event,F=E["gtm.uniqueEventId"],G=Nc.zones;D=G?G.checkState(Mc.o,F):pd;if(D.active){var J=ve(E);c:{var I=D.isWhitelisted;
if("gtm.js"==M){if(be){A=!1;break c}be=!0}var K=F,R=M;if(Ed&&!Md[K]&&Kd!==K){Rd();Kd=K;Jd="";var ia=Ld,W=K,aa,L=R;aa=0===L.indexOf("gtm.")?encodeURIComponent(L):"*";ia[W]="&e="+aa+"&eid="+K;Nd||(Nd=z.setTimeout(Rd,500))}var S=hd(I),O={id:F,name:M,callback:J||xa,Z:S,Wa:Jc(S)};for(var za,ab=O,Tb=$d(ab.callback),xc=[],yb=[],kb=0;kb<uc.length;kb++)if(ab.Wa[kb]){var Jg=uc[kb];var Ub=Tb.add();try{var Be=Td(kb,xc,Ub,Ub,Ub,ab);Be?yb.push(Be):(ae(kb,ab),Ub())}catch(Ae){Ub()}}Tb.$c();for(var od=0;od<yb.length;od++)yb[od]();za=0<yb.length;if("gtm.js"===M||"gtm.sync"===M)d:{}if(za){for(var Kg={__cl:!0,__evl:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0},yc=0;yc<O.Wa.length;yc++)if(O.Wa[yc]){var De=uc[yc];if(De&&!Kg[De[P.N]]){A=!0;break c}}A=!1}else A=za}t=A?!0:!1}else t=!1;Oc=null;m=t}else m=!1;a=m||a}ue=!1}return!a},xe=function(){var a=we();try{var b=z["dataLayer"].hide;if(b&&void 0!==b[Mc.o]&&b.end){b[Mc.o]=!1;var c=!0,d;for(d in b)if(b.hasOwnProperty(d)&&!0===b[d]){c=!1;
break}c&&(b.end(),b.end=null)}}catch(e){}return a},ye=function(){var a=ib("dataLayer",[]),b=ib("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};sd.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});re.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(te.push.apply(te,b);300<this.length;)this.shift();return we()};te.push.apply(te,a.slice(0));H(xe)};var ze={};ze.Ha=new String("undefined");ze.ab={};var Ee=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===ze.Ha?b:a[d]);return c.join("")}};Ee.prototype.toString=function(){return this.resolve("undefined")};Ee.prototype.valueOf=Ee.prototype.toString;ze.td=function(a){return new Ee(a)};var Fe={};ze.ze=function(a,b){var c=Tc();Fe[c]=[a,b];return c};ze.Xb=function(a){var b=a?0:1;return function(a){var c=Fe[a];if(c&&"function"===typeof c[b])c[b]();Fe[a]=void 0}};
ze.Zd=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=b||8===a[d],c=c||16===a[d];return b&&c};ze.qe=function(a){if(a===ze.Ha)return a;var b=Tc();ze.ab[b]=a;return'google_tag_manager["'+Mc.o+'"].macro('+b+")"};ze.Pc=Ee;var Ge=new Ja,He=function(a,b){function c(a){var b=N(a),c=xb(b,"protocol"),d=xb(b,"host",!0),e=xb(b,"port"),f=xb(b,"path").toLowerCase().replace(/\/$/,"");if(void 0===c||"http"==c&&"80"==e||"https"==c&&"443"==e)c="web",e="default";return[c,d,e,f]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0};
function Ie(a){var b=a.arg0,c=a.arg1;switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var d;a:{if(b){var e=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var f=0;f<e.length;f++)if(b[e[f]]){d=b[e[f]](c);break a}}catch(u){}}d=!1}return d;case "_ew":var h,k;h=String(b);k=String(c);var l=h.length-k.length;return 0<=l&&h.indexOf(k,l)==l;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);
case "_gt":return Number(b)>Number(c);case "_lc":var m;m=String(b).split(",");return 0<=Da(m,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var n;var p=a.ignore_case?"i":void 0;try{var q=String(c)+p,r=Ge.get(q);r||(r=new RegExp(c,p),Ge.set(q,r));n=r.test(b)}catch(u){n=!1}return n;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return He(b,c)}return!1};var Je=function(){return!1};function Ke(a,b,c,d){return(d||"https:"==z.location.protocol?a:b)+c}function Le(a,b){for(var c=b||(a instanceof v?new v:new Qa),d=a.U(),e=0;e<d.length();e++){var f=d.get(e);if(a.has(f)){var h=a.get(f);h instanceof v?(c.get(f)instanceof v||c.set(f,new v),Le(h,c.get(f))):h instanceof Qa?(c.get(f)instanceof Qa||c.set(f,new Qa),Le(h,c.get(f))):c.set(f,h)}}return c}function Me(){return Mc.o}function Ne(){return(new Date).getTime()}function Oe(a,b){return Xa(Xc(a,b||2))}function Pe(){return Oc}
function Qe(a){return sb('<a href="'+a+'"></a>')[0].href}function Re(a){return Fa(Wa(a))}function Se(a){return null===a?"null":void 0===a?"undefined":a.toString()}function Te(a,b){return Ea(a,b)}function Ue(a,b,c){if(!(a instanceof v))return null;for(var d=new Qa,e=!1,f=0;f<a.length();f++){var h=a.get(f);h instanceof Qa&&h.has(b)&&h.has(c)&&(d.set(h.get(b),h.get(c)),e=!0)}return e?d:null}
var Ve=function(){var a=new gb,b=Ab();Je()&&(b.loadJavaScript=xa,b.loadIframe=xa);a.addAll(b);a.addAll({buildSafeUrl:Ke,copy:Le,copyFromDataLayer:Oe,decodeHtmlUrl:Qe,generateRandom:Te,generateUniqueNumber:Tc,getContainerId:Me,getCurrentTime:Ne,getEventName:Pe,makeInteger:Re,makeString:Se,tableToMap:Ue});return function(b){return a.get(b)}},Xe=function(){var a={networkAccess:We};return function(b,c,d){return a[b]?a[b](c,d):xa}};
function We(a,b){var c=a.url_list||[];return function(a,e){if(c.length){for(var d=0;d<c.length;d++)if(c[d]===e)return;throw b({permissionId:a,debugString:"\nURL = "+e});}}};var Ye,$e=function(){var a=data.runtime||[],b=data.permissions||{};Ye=new Cb;qc=function(a,b){var c=new Qa,d;for(d in b)b.hasOwnProperty(d)&&c.set(d,Xa(b[d]));var e=Ye.R([a,c]);e instanceof g&&"return"===e.B&&(e=e.getData());return Wa(e)};zc=Ie;Bb(Ye,Ve());for(var c=0;c<a.length;c++){var d=a[c];if(!Ca(d)||3>d.length){if(0==d.length)continue;return}Ye.R(d)}var e=function(a){throw Ze({permissionId:a,debugString:"The requested permission does not exist."});};Ye.oa(e);var f=Xe(),h;for(h in b)if(b.hasOwnProperty(h)){var k=
b[h],l=!1,m;for(m in k)if(k.hasOwnProperty(m)){l=!0;var n=f(m,k[m],Ze);Ye.Ma(h,m,n)}l||Ye.Ma(h,"default",e)}};function Ze(a){return new jd(a)};var af=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var bf=function(a){return encodeURIComponent(a)},cf=function(a,b){if(!a)return!1;var c=xb(N(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Q=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null},df=function(a,b){Va(a,b)},ef=function(a){return Fa(a)},ff=function(a,b){return Da(a,b)};var gf=function(a){var b={"gtm.element":a,"gtm.elementClasses":a.className,"gtm.elementId":a["for"]||pb(a,"id")||"","gtm.elementTarget":a.formTarget||a.target||""};b["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||a.href||a.src||a.code||a.codebase||"";return b},hf=function(a){Nc.hasOwnProperty("autoEventsSettings")||(Nc.autoEventsSettings={});var b=Nc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},jf=function(a,b,c,d){var e=hf(a),f=Ka(e,b,d);e[b]=
c(f)},kf=function(a,b,c){var d=hf(a);return Ka(d,b,c)};var lf=!1;if(B.querySelectorAll)try{var mf=B.querySelectorAll(":root");mf&&1==mf.length&&mf[0]==B.documentElement&&(lf=!0)}catch(a){}var nf=lf;var of=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&!0===c&&(l=decodeURIComponent(l));d.push(l)}}return d},rf=function(a,b,c,d){var e=pf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=qf(e,function(a){return a.Bd},b);if(1===e.length)return e[0].id;e=qf(e,function(a){return a.oe},c);return e[0]?e[0].id:void 0}},uf=function(a,b,
c,d,e,f){c=void 0===c?"/":c;var h=d=void 0===d?"auto":d,k=c;if(sf.test(document.location.hostname)||"/"===k&&tf.test(h))return!1;f&&(b=encodeURIComponent(b));var l=b;l&&1200<l.length&&(l=l.substring(0,1200));b=l;var m=a+"="+b+"; path="+c+"; ";void 0!==e&&(m+="expires="+e.toGMTString()+"; ");if("auto"===d){var n=!1,p;a:{var q=[],r=document.location.hostname.split(".");if(4===r.length){var u=r[r.length-1];if(parseInt(u,10).toString()===u){p=["none"];break a}}for(var t=r.length-2;0<=t;t--)q.push(r.slice(t).join("."));
q.push("none");p=q}for(var A=p,D=0;D<A.length&&!n;D++)n=uf(a,b,c,A[D],e);return n}d&&"none"!==d&&(m+="domain="+d+";");var E=document.cookie;document.cookie=m;return E!=document.cookie||0<=of(a).indexOf(b)};function qf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function pf(a,b){for(var c=[],d=of(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Bd:1*k[0]||1,oe:1*k[1]||1}))}}return c}var tf=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,sf=/(^|\.)doubleclick\.net$/i;var vf=window,wf=document;var xf=function(){for(var a=vf.navigator.userAgent+(wf.cookie||"")+(wf.referrer||""),b=a.length,c=vf.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Date.now()/1E3)].join(".")},Af=function(a,b,c,d){var e=yf(b);return rf(a,e,zf(c),d)};
function yf(a){if(!a)return 1;a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length}function zf(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1}function Bf(a,b){var c=""+yf(a),d=zf(b);1<d&&(c+="-"+d);return c};var Cf=["1"],Df={},Hf=function(a,b,c){b=b||"auto";c=c||"/";var d=Ef(a);Df[d]||Ff(d,b,c)||(Gf(d,xf(),b,c),Ff(d,b,c))};function Gf(a,b,c,d){var e;e=["1",Bf(c,d),b].join(".");uf(a,e,d,c,new Date(Ia().getTime()+7776E6))}function Ff(a,b,c){var d=Af(a,b,c,Cf);d&&(Df[a]=d);return d}function Ef(a){return(a||"_gcl")+"_au"};function If(){for(var a=Jf,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function Kf(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}
var Jf,Lf,Mf=function(a){Jf=Jf||Kf();Lf=Lf||If();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,p=k&63;e||(p=64,d||(n=64));b.push(Jf[l],Jf[m],Jf[n],Jf[p])}return b.join("")},Nf=function(a){function b(b){for(;d<a.length;){var c=a.charAt(d++),e=Lf[c];if(null!=e)return e;if(!/^[\s\xa0]*$/.test(c))throw Error("Unknown base64 encoding at char: "+c);}return b}Jf=Jf||Kf();Lf=Lf||
If();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var Of;function Pf(a,b){if(!a||b===B.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}var Qf=function(){var a=ib("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Rf=/(.*?)\*(.*?)\*(.*)/,Sf=/([^?#]+)(\?[^#]*)?(#.*)?/,Tf=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Vf=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(Mf(String(d))))}var e=b.join("*");return["1",Uf(e),e].join("*")},Uf=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:
b),a].join("*"),d;if(!(d=Of)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}Of=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^Of[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Xf=function(){return function(a){var b=N(z.location.href),c=b.search.replace("?",""),d=wb(c,"_gl",!0)||"";a.query=Wf(d)||{};var e=xb(b,"fragment").match(Tf);a.fragment=Wf(e&&e[3]||"")||{}}},Wf=function(a){var b;b=void 0===b?3:b;try{if(a){var c=Rf.exec(a);if(c&&
"1"===c[1]){var d=c[3],e;a:{for(var f=c[2],h=0;h<b;++h)if(f===Uf(d,h)){e=!0;break a}e=!1}if(e){for(var k={},l=d?d.split("*"):[],m=0;m<l.length;m+=2)k[l[m]]=Nf(l[m+1]);return k}}}}catch(n){}};function Yf(a,b,c){function d(a){var b=a,c=Tf.exec(b),d=b;if(c){var e=c[2],f=c[4];d=c[1];f&&(d=d+e+f)}a=d;var h=a.charAt(a.length-1);a&&"&"!==h&&(a+="&");return a+l}c=void 0===c?!1:c;var e=Sf.exec(b),f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Zf(a,b,c){for(var d={},e={},f=Qf().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&Pf(k.domains,b)&&(k.fragment?Ma(e,k.callback()):Ma(d,k.callback()))}if(Na(d)){var l=Vf(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],p=!1,q=0;q<n.length;q++){var r=n[q];if("_gl"===r.name){r.setAttribute("value",l);p=!0;break}}if(!p){var u=B.createElement("input");u.setAttribute("type","hidden");u.setAttribute("name","_gl");u.setAttribute("value",
l);a.appendChild(u)}}else if("post"===m){var t=Yf(l,a.action);ub.test(t)&&(a.action=t)}}}else $f(l,a,!1)}if(!c&&Na(e)){var A=Vf(e);$f(A,a,!0)}}function $f(a,b,c){if(b.href){var d=Yf(a,b.href,void 0===c?!1:c);ub.test(d)&&(b.href=d)}}
var ag=function(a){try{var b;a:{for(var c=a.target||a.srcElement||{},d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Zf(e,e.hostname,!1)}}catch(h){}},bg=function(a){try{var b=a.target||a.srcElement||{};if(b.action){var c=xb(N(b.action),"host");Zf(b,c,!0)}}catch(d){}},cg=function(a,b,c,d){var e=Qf();e.init||(nb(B,"mousedown",ag),nb(B,"keyup",ag),nb(B,"submit",bg),e.init=!0);var f={callback:a,
domains:b,fragment:"fragment"===c,forms:!!d};Qf().decorators.push(f)};var dg=/^\w+$/,eg=/^[\w-]+$/,fg=/^~?[\w-]+$/,gg={aw:"_aw",dc:"_dc",gf:"_gf"},ig=function(a){var b=of(a,B.cookie),c=[];if(!b||0==b.length)return c;for(var d=0;d<b.length;d++){var e=b[d].split(".");3==e.length&&"GCL"==e[0]&&e[1]&&c.push(e[2])}return hg(c)};function jg(a){return a&&"string"==typeof a&&a.match(dg)?a:"_gcl"}
var kg=function(a){if(a){if("string"==typeof a){var b=jg(a);return{dc:b,aw:b,gf:b}}if(a&&"object"==typeof a)return{dc:jg(a.dc),aw:jg(a.aw),gf:jg(a.gf)}}return{dc:"_gcl",aw:"_gcl",gf:"_gcl"}},lg=function(){var a=N(z.location.href),b=xb(a,"query",!1,void 0,"gclid"),c=xb(a,"query",!1,void 0,"gclsrc");if(!b||!c){var d=a.hash.replace("#","");b=b||wb(d,"gclid");c=c||wb(d,"gclsrc")}return void 0!==b&&b.match(eg)?{T:b,J:c}:null},mg=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)},ng=function(a,b,c,d,e){if(Ca(b)){var f=kg(e);cg(function(){for(var b={},c=0;c<a.length;++c){var d=a[c],e=f[d],n=gg[d];if(e&&n){var p=e+n,q=of(p,B.cookie);q.length&&(b[p]=q.sort()[q.length-1])}}return b},b,c,d)}},hg=function(a){return a.filter(function(a){return fg.test(a)})};var og=/^\d+\.fls\.doubleclick\.net$/;function pg(a){var b=N(z.location.href),c=xb(b,"host",!1);if(c&&c.match(og)){var d=xb(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
var qg=function(a){var b=pg("gclaw");if(b)return b.split(".");var c=kg(a);if("_gcl"==c.aw){var d=lg();if(d&&(null==d.J||"aw.ds"==d.J))return[d.T]}return ig(c.aw+"_aw")},rg=function(a){var b=pg("gcldc");if(b)return b.split(".");var c=kg(a);if("_gcl"==c.dc){var d=lg();if(d&&("ds"==d.J||"aw.ds"==d.J))return[d.T]}return ig(c.dc+"_dc")},sg=function(){var a=pg("gac");if(a)return decodeURIComponent(a);for(var b=[],c=B.cookie.split(";"),d=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,e=0;e<c.length;e++){var f=c[e].match(d);
f&&b.push({Bb:f[1],value:f[2]})}var h={};if(b&&b.length)for(var k=0;k<b.length;k++){var l=b[k].value.split(".");"1"==l[0]&&3==l.length&&l[1]&&(h[b[k].Bb]||(h[b[k].Bb]=[]),h[b[k].Bb].push({timestamp:l[1],T:l[2]}))}var m=[],n;for(n in h)if(h.hasOwnProperty(n)){for(var p=[],q=h[n],r=0;r<q.length;r++)p.push(q[r].T);p=hg(p);p.length&&m.push(n+":"+p.join(","))}return m.join(";")},tg=function(a,b,c){Hf(a,b,c);var d=Df[Ef(a)],e=lg()||{},f=e.T,h=e.J;if(d&&f&&("aw.ds"===h||
"ds"===h)){tb("https://adservice.google.com/ddm/regclk"+("?gclid="+f+"&auiddc="+d));var k=Ef(a);Df[k]&&Gf(k,Df[k],b||"auto",c||"/")}};var ug;a:{ug="G"}var vg={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GTM:ug},wg=function(a){var b=Mc.o.split("-"),c=b[0].toUpperCase();return(vg[c]||"i")+"9h"+(a&&"GTM"===c?b[1]:"")};var Dg=!!z.MutationObserver,Eg=void 0,Fg=function(a){if(!Eg){var b=function(){var a=B.body;if(a)if(Dg)(new MutationObserver(function(){for(var a=0;a<Eg.length;a++)H(Eg[a])})).observe(a,{childList:!0,subtree:!0});else{var b=!1;nb(a,"DOMNodeInserted",function(){b||(b=!0,H(function(){b=!1;for(var a=0;a<Eg.length;a++)H(Eg[a])}))})}};Eg=[];B.body?b():H(b)}Eg.push(a)};var Rg="www.googletagmanager.com/gtm.js";
var Sg=Rg,Tg=function(a,b,c,d){nb(a,b,c,d)},Ug=function(a,b){return z.setTimeout(a,b)},T=function(a,b,c){if(Je()){b&&H(b)}else return lb(a,b,c)},Vg=function(){return z.location.href},Wg=function(a){return xb(N(a),"fragment")},Xg=function(a,b,c,d,e){return xb(a,b,c,d,e)},U=function(a,b){return Xc(a,b||2)},Yg=function(a,b,c){b&&(a.eventCallback=b,c&&(a.eventTimeout=c));return z["dataLayer"].push(a)},Zg=function(a,
b){z[a]=b},V=function(a,b,c){b&&(void 0===z[a]||c&&!z[a])&&(z[a]=b);return z[a]},$g=function(a,b,c){return of(a,b,void 0===c?!0:!!c)},ah=function(a,b,c){var d={prefix:a,path:b,domain:c};d=d||{};var e=kg(d.prefix),f=d.domain||"auto",h=d.path||"/",k=lg();if(null!=k){var l=(new Date).getTime(),m=new Date(l+7776E6),n=Math.round(l/1E3),p=["GCL",n,k.T].join("."),q;q=!0===d.uf?["GCL",n,"~"+k.T].join("."):p;k.J&&"aw.ds"!=k.J||uf(e.aw+"_aw",q,h,f,m,!0);"aw.ds"!=k.J&&"ds"!=k.J||uf(e.dc+"_dc",p,h,f,m,!0);"gf"==
k.J&&uf(e.gf+"_gf",p,h,f,m,!0)}},bh=function(a,b){var c=Xf(),d=Qf();d.data||(d.data={query:{},fragment:{}},c(d.data));var e={},f=d.data;f&&(Ma(e,f.query),Ma(e,f.fragment));for(var h=kg(b),k=0;k<a.length;++k){var l=a[k],m=gg[l];if(void 0!==m){var n=h[l]+m,p=e[n];if(p){var q=Math.min(mg(p),(new Date).getTime()),r;b:{for(var u=q,t=of(n,B.cookie),A=0;A<t.length;++A)if(mg(t[A])>u){r=!0;break b}r=!1}r||uf(n,p,void 0,void 0,new Date(q+7776E6),!0)}}}},
ch=function(a,b,c,d,e){ng(a,b,c,d,e);},dh=function(a,b){var c;a:{var d;d=100;for(var e={},f=0;f<b.length;f++)e[b[f]]=!0;for(var h=a,k=0;h&&k<=d;k++){if(e[String(h.tagName).toLowerCase()]){c=h;break a}h=h.parentElement}c=null}return c},X=function(a,b,c,d){var e=!d&&"http:"==z.location.protocol;e&&(e=2!==eh());return(e?b:a)+c},fh=function(a,b){if(Je()){
b&&H(b)}else mb(a,b)};
var gh=function(a){var b=0;return b},hh=function(a){},ih=function(a){var b=!1;return b},jh=function(a,b){var c;a:{if(a&&
Ca(a))for(var d=0;d<a.length;d++)if(a[d]&&b(a[d])){c=a[d];break a}c=void 0}return c},kh=function(a,b,c,d){jf(a,b,c,d)},lh=function(a,b,c){return kf(a,b,c)},mh=function(a){return!!kf(a,"init",!1)},nh=function(a){hf(a).init=!0};
var eh=function(){var a=Sg;if(Sc){if(0===Sc.toLowerCase().indexOf("https://"))return 2;if(0===Sc.toLowerCase().indexOf("http://"))return 3}a=a.toLowerCase();for(var b="https://"+a,c="http://"+a,d=1,e=B.getElementsByTagName("script"),f=0;f<e.length&&100>f;f++){var h=e[f].src;if(h){h=h.toLowerCase();if(0===h.indexOf(c))return 3;1===d&&0===h.indexOf(b)&&(d=2)}}return d};var qh=function(a,b,c){var d=(void 0===c?0:c)?"www.googletagmanager.com/gtag/js":Sg;d+="?id="+encodeURIComponent(a)+"&l=dataLayer";if(b)for(var e in b)b[e]&&b.hasOwnProperty(e)&&(d+="&"+e+"="+encodeURIComponent(b[e]));T(X("https://","http://",d))};var sh=function(a,b,c){a instanceof ze.Pc&&(a=a.resolve(ze.ze(b,c)),b=xa);return{lb:a,V:b}};var th=function(a,b,c){this.n=a;this.t=b;this.p=c},uh=function(){this.c=1;this.e=[];this.p=null};function vh(a){var b=Nc,c=b.gss=b.gss||{};return c[a]=c[a]||new uh}var wh=function(a,b){vh(a).p=b},xh=function(a,b,c){var d=Math.floor(Ia().getTime()/1E3);vh(a).e.push(new th(b,d,c))},yh=function(a){};var Rh=window,Sh=document,Th=function(a){var b=Rh._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===Rh["ga-disable-"+a])return!0;try{var c=Rh.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=of("AMP_TOKEN",Sh.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return!1};var Yh=function(a){if(1===vh(a).c){vh(a).c=2;var b=encodeURIComponent(a);lb(("http:"!=z.location.protocol?"https:":"http:")+("//www.googletagmanager.com/gtag/js?id="+b+"&l=dataLayer&cx=c"))}},Zh=function(a,b){};var Z={a:{}};
Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=V("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();
Z.a.sp=["google"],function(){(function(a){Z.__sp=a;Z.__sp.b="sp";Z.__sp.g=!0})(function(a){var b=a.vtp_gtmOnFailure;T("//www.googleadservices.com/pagead/conversion_async.js",function(){var c=V("google_trackConversion");if(ya(c)){var d={};"DATA_LAYER"==a.vtp_customParamsFormat?d=a.vtp_dataLayerVariable:"USER_SPECIFIED"==a.vtp_customParamsFormat&&(d=Q(a.vtp_customParams,"key","value"));var e={};a.vtp_enableDynamicRemarketing&&(a.vtp_eventName&&(d.event=a.vtp_eventName),a.vtp_eventValue&&(e.value=a.vtp_eventValue),
a.vtp_eventItems&&(e.items=a.vtp_eventItems));c({google_conversion_id:a.vtp_conversionId,google_conversion_label:a.vtp_conversionLabel,google_custom_params:d,google_gtag_event_data:e,google_remarketing_only:!0,onload_callback:a.vtp_gtmOnSuccess,google_gtm:wg(void 0)})||b()}else b()},b)})}();Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0})(function(a){return a.vtp_value})}();
Z.a.d=["google"],function(){(function(a){Z.__d=a;Z.__d.b="d";Z.__d.g=!0})(function(a){var b=null,c=null,d=a.vtp_attributeName;if("CSS"==a.vtp_selectorType){var e=nf?B.querySelectorAll(a.vtp_elementSelector):null;e&&0<e.length&&(b=e[0])}else b=qb(a.vtp_elementId);b&&(c=d?pb(b,d):rb(b));var f=String(b&&c);return f?f.replace(/^\s+|\s+$/g,""):""})}();Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0})(function(){return Oc})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0})(function(a){var b=U("gtm.referrer",1)||B.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Xg(N(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):zb(N(String(b))):String(b)})}();
Z.a.cl=["google"],function(){function a(a){var b=a.target;if(b){var d=gf(b);d.event="gtm.click";Yg(d)}}(function(a){Z.__cl=a;Z.__cl.b="cl";Z.__cl.g=!0})(function(b){if(!mh("cl")){var c=V("document");nb(c,"click",a,!0);nh("cl");var d=kf("cl","legacyTeardown",void 0);d&&d()}H(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0})(function(a){for(var b=String(a.vtp_name).split("."),c=V(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();
Z.a.r=["google"],function(){(function(a){Z.__r=a;Z.__r.b="r";Z.__r.g=!0})(function(a){return Ea(a.vtp_min,a.vtp_max)})}();
Z.a.u=["google"],function(){var a=function(a){return{toString:function(){return a}}};(function(a){Z.__u=a;Z.__u.b="u";Z.__u.g=!0})(function(b){var c;c=(c=b.vtp_customUrlSource?b.vtp_customUrlSource:U("gtm.url",1))||Vg();var d=b[a("vtp_component")];return d&&"URL"!=d?Xg(N(String(c)),d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,"QUERY"==d?b[a("vtp_queryKey")]:void 0):zb(N(String(c)))})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.tl=["google"],function(){function a(a){return function(){if(a.qb&&a.rb>=a.qb)a.mb&&V("self").clearInterval(a.mb);else{a.rb++;var b=(new Date).getTime();Yg({event:a.P,"gtm.timerId":a.mb,"gtm.timerEventNumber":a.rb,"gtm.timerInterval":a.interval,"gtm.timerLimit":a.qb,"gtm.timerStartTime":a.Ic,"gtm.timerCurrentTime":b,"gtm.timerElapsedTime":b-a.Ic,"gtm.triggers":a.Oe})}}}(function(a){Z.__tl=a;Z.__tl.b="tl";Z.__tl.g=!0})(function(b){H(b.vtp_gtmOnSuccess);if(!isNaN(b.vtp_interval)){var c={P:b.vtp_eventName,
rb:0,interval:Number(b.vtp_interval),qb:isNaN(b.vtp_limit)?0:Number(b.vtp_limit),Oe:String(b.vtp_uniqueTriggerId||"0"),Ic:(new Date).getTime()};c.mb=V("self").setInterval(a(c),0>Number(b.vtp_interval)?0:Number(b.vtp_interval))}})}();
Z.a.ua=["google"],function(){var a,b=function(b){var c={},e={},f={},h={},k={};if(b.vtp_gaSettings){var l=b.vtp_gaSettings;df(Q(l.vtp_fieldsToSet,"fieldName","value"),e);df(Q(l.vtp_contentGroup,"index","group"),f);df(Q(l.vtp_dimension,"index","dimension"),h);df(Q(l.vtp_metric,"index","metric"),k);b.vtp_gaSettings=null;l.vtp_fieldsToSet=void 0;l.vtp_contentGroup=void 0;l.vtp_dimension=void 0;l.vtp_metric=void 0;var m=Va(l,void 0);b=Va(b,m)}df(Q(b.vtp_fieldsToSet,"fieldName","value"),e);df(Q(b.vtp_contentGroup,
"index","group"),f);df(Q(b.vtp_dimension,"index","dimension"),h);df(Q(b.vtp_metric,"index","metric"),k);var n=yd(b.vtp_functionName),p="",q="";b.vtp_setTrackerName&&"string"==typeof b.vtp_trackerName?""!==b.vtp_trackerName&&(q=b.vtp_trackerName,p=q+"."):(q="gtm"+Tc(),p=q+".");var r={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,
storage:!0,useAmpClientId:!0,storeGac:!0},u={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0},t=function(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];n.apply(window,b)},A=function(a,b){return void 0===b?b:a(b)},D=function(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&t("set",a+c,b[c])},E=function(){},M=function(a,b,c){var d=0;if(a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&r[e]||!c&&void 0===r[e])){var f=u[e]?Ga(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d},F={name:q};M(e,F,
!0);n("create",b.vtp_trackingId||c.trackingId,F);t("set","&gtm",wg(!0));(function(a,c){void 0!==b[c]&&t("set",a,b[c])})("nonInteraction","vtp_nonInteraction");D("contentGroup",f);D("dimension",h);D("metric",k);var G={};M(e,G,!1)&&t("set",G);var J;b.vtp_enableLinkId&&t("require","linkid","linkid.js");t("set","hitCallback",function(){var a=
e&&e.hitCallback;ya(a)&&a();b.vtp_gtmOnSuccess()});if("TRACK_EVENT"==b.vtp_trackType){b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());var I={hitType:"event",eventCategory:String(b.vtp_eventCategory||c.category),eventAction:String(b.vtp_eventAction||c.action),eventLabel:A(String,b.vtp_eventLabel||c.label),eventValue:A(ef,b.vtp_eventValue||c.value)};M(J,I,!1);t("send",I);}else if("TRACK_SOCIAL"==
b.vtp_trackType){}else if("TRACK_TRANSACTION"==b.vtp_trackType){}else if("TRACK_TIMING"==b.vtp_trackType){}else if("DECORATE_LINK"==b.vtp_trackType){}else if("DECORATE_FORM"==b.vtp_trackType){}else if("TRACK_DATA"==
b.vtp_trackType){}else{b.vtp_enableEcommerce&&(t("require","ec","ec.js"),E());if(b.vtp_doubleClick||"DISPLAY_FEATURES"==b.vtp_advertisingFeaturesType){var S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");t("require","displayfeatures",void 0,{cookieName:S})}"DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==b.vtp_advertisingFeaturesType&&
(S="_dc_gtm_"+String(b.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,""),t("require","adfeatures",{cookieName:S}));J?t("send","pageview",J):t("send","pageview");b.vtp_autoLinkDomains&&zd(p,b.vtp_autoLinkDomains,!!b.vtp_useHashAutoLink,!!b.vtp_decorateFormsAutoLink);}if(!a){var O=b.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";b.vtp_useInternalVersion&&!b.vtp_useDebugVersion&&
(O="internal/"+O);a=!0;T(X("https:","http:","//www.google-analytics.com/"+O,e&&e.forceSSL),function(){var a=xd();a&&a.loaded||b.vtp_gtmOnFailure();},b.vtp_gtmOnFailure)}};Z.__ua=b;Z.__ua.b="ua";Z.__ua.g=!0}();



Z.a.aev=["google"],function(){var a=void 0,b="",c=0,d=void 0,e={ATTRIBUTE:"gtm.elementAttribute",CLASSES:"gtm.elementClasses",ELEMENT:"gtm.element",ID:"gtm.elementId",HISTORY_CHANGE_SOURCE:"gtm.historyChangeSource",HISTORY_NEW_STATE:"gtm.newHistoryState",HISTORY_NEW_URL_FRAGMENT:"gtm.newUrlFragment",HISTORY_OLD_STATE:"gtm.oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"gtm.oldUrlFragment",TARGET:"gtm.elementTarget"},f=function(a){var b=U(e[a.vtp_varType],1);return void 0!==b?b:a.vtp_defaultValue},h=function(a,
b){if(!a)return!1;var c=l(Vg()),d;d=Ca(b.vtp_affiliatedDomains)?b.vtp_affiliatedDomains:String(b.vtp_affiliatedDomains||"").replace(/\s+/g,"").split(",");for(var e=[c],f=0;f<d.length;f++)if(d[f]instanceof RegExp){if(d[f].test(a))return!1}else{var h=d[f];if(0!=h.length){if(0<=l(a).indexOf(h))return!1;e.push(l(h))}}return!cf(a,e)},k=/^https?:\/\//i,l=function(a){k.test(a)||(a="http://"+a);return Xg(N(a),"HOST",!0)};(function(a){Z.__aev=a;Z.__aev.b="aev";Z.__aev.g=!0})(function(e){switch(e.vtp_varType){case "TAG_NAME":return U("gtm.element",
1).tagName||e.vtp_defaultValue;case "TEXT":var k,l=U("gtm.element",1),m=U("event",1),r=Number(new Date);a===l&&b===m&&c>r-250?k=d:(d=k=l?rb(l):"",a=l,b=m);c=r;return k||e.vtp_defaultValue;case "URL":var u;a:{var t=String(U("gtm.elementUrl",1)||e.vtp_defaultValue||""),A=N(t);switch(e.vtp_component||"URL"){case "URL":u=t;break a;case "IS_OUTBOUND":u=h(t,e);break a;default:u=xb(A,e.vtp_component,e.vtp_stripWww,e.vtp_defaultPages,e.vtp_queryKey)}}return u;case "ATTRIBUTE":var D;if(void 0===e.vtp_attribute)D=
f(e);else{var E=U("gtm.element",1);D=pb(E,e.vtp_attribute)||e.vtp_defaultValue||""}return D;default:return f(e)}})}();

Z.a.awct=["google"],function(){var a=!1,b=[],c=function(a){var b=V("google_trackConversion"),c=a.gtm_onFailure;"function"==typeof b?b(a)||c():c()},d=function(){for(;0<b.length;)c(b.shift())},e=function(){return function(){d();a=!1}},f=function(){return function(){d();b={push:c};}},h=function(c){var d={google_conversion_domain:"",google_conversion_id:c.vtp_conversionId,google_conversion_label:c.vtp_conversionLabel,google_conversion_value:c.vtp_conversionValue||
0,google_remarketing_only:!1,onload_callback:c.vtp_gtmOnSuccess,gtm_onFailure:c.vtp_gtmOnFailure,google_gtm:wg(void 0)};c.vtp_currencyCode&&(d.google_conversion_currency=c.vtp_currencyCode);c.vtp_orderId&&(d.google_conversion_order_id=c.vtp_orderId);c.vtp_allowReadGaCookie&&(d.google_read_ga_cookie_opt_in=!0);!c.hasOwnProperty("vtp_enableConversionLinker")||c.vtp_enableConversionLinker?(c.vtp_conversionCookiePrefix&&(d.google_gcl_cookie_prefix=c.vtp_conversionCookiePrefix),d.google_read_gcl_cookie_opt_out=
!1):d.google_read_gcl_cookie_opt_out=!0;b.push(d);a||(a=!0,T("//www.googleadservices.com/pagead/conversion_async.js",f(),e("//www.googleadservices.com/pagead/conversion_async.js")))};Z.__awct=h;Z.__awct.b="awct";Z.__awct.g=!0}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0})(function(a){var b=a.vtp_input,c=Q(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();



Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0})(function(a){H(a.vtp_gtmOnFailure)})}();
Z.a.html=["customScripts"],function(){var a=function(b,c,f,h){return function(){try{if(0<c.length){var d=c.shift(),e=a(b,c,f,h);if("SCRIPT"==String(d.nodeName).toUpperCase()&&"text/gtmscript"==d.type){var m=B.createElement("script");m.async=!1;m.type="text/javascript";m.id=d.id;m.text=d.text||d.textContent||d.innerHTML||"";d.charset&&(m.charset=d.charset);var n=d.getAttribute("data-gtmsrc");n&&(m.src=n,jb(m,e));b.insertBefore(m,null);n||e()}else if(d.innerHTML&&0<=d.innerHTML.toLowerCase().indexOf("<script")){for(var p=
[];d.firstChild;)p.push(d.removeChild(d.firstChild));b.insertBefore(d,null);a(d,p,e,h)()}else b.insertBefore(d,null),e()}else f()}catch(q){H(h)}}};var b=function(a,b,c){vd(function(){var d,e=Nc;e.postscribe||(e.postscribe=Lc);d=e.postscribe;var f={done:b},m=B.createElement("div");m.style.display="none";m.style.visibility="hidden";B.body.appendChild(m);try{d(m,a,f)}catch(n){H(c)}})};var c=function(d){if(B.body){var e=
d.vtp_gtmOnFailure,f=sh(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.lb,k=f.V;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(B.body,sb(h),k,e)()}else Ug(function(){c(d)},200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0}();



Z.a.img=["customPixels"],function(){(function(a){Z.__img=a;Z.__img.b="img";Z.__img.g=!0})(function(a){var b=sb('<a href="'+a.vtp_url+'"></a>')[0].href,c=a.vtp_cacheBusterQueryParam;if(a.vtp_useCacheBuster){c||(c="gtmcb");var d=b.charAt(b.length-1),e=0<=b.indexOf("?")?"?"==d||"&"==d?"":"&":"?";b+=e+c+"="+a.vtp_randomNumber}C(b,a.vtp_gtmOnSuccess,a.vtp_gtmOnFailure)})}();


Z.a.lcl=[],function(){function a(){var a=V("document"),d=0,e=function(c){var e=c.target;if(e&&3!==c.which&&(!c.timeStamp||c.timeStamp!==d)){d=c.timeStamp;e=dh(e,["a","area"]);if(!e)return c.returnValue;var f=c.defaultPrevented||!1===c.returnValue,l=kf("lcl",f?"nv.mwt":"mwt",0),m=gf(e);m.event="gtm.linkClick";if(f){var n=lh("lcl","nv.ids",[]).join(",");if(n)m["gtm.triggers"]=n;else return}else{var p=lh("lcl","ids",[]).join(",");m["gtm.triggers"]=p}if(b(c,e,a)&&!f&&l&&e.href){var q=V((e.target||"_self").substring(1)),
r=!0;if(Yg(m,function(){r&&q&&(q.location.href=e.href)},l))r=!1;else return c.preventDefault&&c.preventDefault(),c.returnValue=!1}else Yg(m,function(){},l||2E3);return!0}};nb(a,"click",e,!1);nb(a,"auxclick",e,!1)}function b(a,b,e){if(2===a.which||a.ctrlKey||a.shiftKey||a.altKey||a.metaKey)return!1;var c=b.href.indexOf("#"),d=b.target;if(d&&"_self"!==d&&"_parent"!==d&&"_top"!==d||0===c)return!1;if(0<c){var k=zb(N(b.href)),l=zb(N(e.location));return k!==l}return!0}(function(a){Z.__lcl=a;Z.__lcl.b="lcl";
Z.__lcl.g=!0})(function(b){var c=void 0===b.vtp_waitForTags?!0:b.vtp_waitForTags,e=void 0===b.vtp_checkValidation?!0:b.vtp_checkValidation,f=Number(b.vtp_waitForTagsTimeout);if(!f||0>=f)f=2E3;var h=b.vtp_uniqueTriggerId||"0";if(c){var k=function(a){return Math.max(f,a)};jf("lcl","mwt",k,0);e||jf("lcl","nv.mwt",k,0)}var l=function(a){a.push(h);return a};kh("lcl","ids",l,[]);e||kh("lcl","nv.ids",l,[]);if(!mh("lcl")){a();nh("lcl");var m=kf("lcl","legacyTeardown",void 0);m&&m()}H(b.vtp_gtmOnSuccess)})}();


var $h={macro:function(a){if(ze.ab.hasOwnProperty(a))return ze.ab[a]}};$h.dataLayer=Yc;$h.onHtmlSuccess=ze.Xb(!0);$h.onHtmlFailure=ze.Xb(!1);$h.callback=function(a){Qc.hasOwnProperty(a)&&ya(Qc[a])&&Qc[a]();delete Qc[a]};$h.ed=function(){Nc[Mc.o]=$h;Rc=Z.a;Ac=Ac||ze;Bc=id};
$h.Vd=function(){Nc=z.google_tag_manager=z.google_tag_manager||{};if(Nc[Mc.o]){var a=Nc.zones;a&&a.unregisterChild(Mc.o)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rc.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)uc.push(e[f]);for(var h=b.predicates||[],k=0;k<h.length;k++)tc.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],p={},q=0;q<n.length;q++)p[n[q][0]]=Array.prototype.slice.call(n[q],1);sc.push(p)}wc=Z;$e();$h.ed();ye();qd=!1;rd=0;if("interactive"==
B.readyState&&!B.createEventObject||"complete"==B.readyState)td();else{nb(B,"DOMContentLoaded",td);nb(B,"readystatechange",td);if(B.createEventObject&&B.documentElement.doScroll){var r=!0;try{r=!z.frameElement}catch(t){}r&&ud()}nb(z,"load",td)}qe=!1;"complete"===B.readyState?se():nb(z,"load",se);a:{
if(!Ed)break a;Hd();Kd=void 0;Ld={};Id={};Nd=void 0;Md={};Jd="";Od=Fd();z.setInterval(Hd,864E5);}}};$h.Vd();

})()
