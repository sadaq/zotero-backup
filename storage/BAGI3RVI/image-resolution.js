var imageResolution={imgResolution:function(){var changeImage=function(prms){var params={component:$(".thumb, .background-image"),resizeTimeout:250},global={window:$(window),resizeTimer:{},resize:"resize",dataAttribute:"data-image"},self={},getThumnbSize=function(wWidth){for(var sizeMap=[{key:479,val:"479v"},{key:549,val:"549v"},{key:768,val:"768v"},{key:1024,val:"1024v"},{key:1366,val:"1366v"},{key:1920,val:"1920v"}],i=0;i<sizeMap.length;i++)if(wWidth<=sizeMap[i].key)return sizeMap[i].val;return"1366v"},getThumnbSizeBG=function(wWidth){for(var sizeMap=[{key:479,val:"479v"},{key:549,val:"549v"},{key:768,val:"768v"},{key:1024,val:"1024v"},{key:1366,val:"1366v"},{key:1920,val:"1920v"}],i=0;i<sizeMap.length;i++)if(wWidth<=sizeMap[i].key)return sizeMap[i].val;return"1366v"};return self.init=function(){self.initImage(),global.window.on(global.resize,function(e){clearTimeout(global.resizeTimer),global.resizeTimer=setTimeout(function(){self.initImage()},params.resizeTimeout)})},self.initImage=function(){params.component.each(function(){if($(this).hasClass("thumb")){if(""!=$(this).find("img").length){var globalAttr=$(this).find("img").attr(global.dataAttribute);void 0!==globalAttr&&$(this).find("img").attr("src",globalAttr.replace("768v",getThumnbSize($(this).innerWidth())))}}else if($(this).hasClass("background-image")){var dataAttr=$(this).attr(global.dataAttribute);if(void 0!==dataAttr){newUrl=dataAttr.replace("1920v",getThumnbSizeBG($(this).innerWidth()));if($(this).css("background-image","url("+newUrl+")"),$(this).hasClass("background-image--medium")){newUrl=dataAttr.replace("1024v",getThumnbSizeBG($(this).innerWidth()));$(this).css("background-image","url("+newUrl+")")}else if($(this).hasClass("background-image--small")){var newUrl=dataAttr.replace("768v",getThumnbSizeBG($(this).innerWidth()));$(this).css("background-image","url("+newUrl+")")}}}})},self.init(),self};$(".thumb, .background-image").each(function(k,v){changeImage($(v))})},init:function(){this.imgResolution()}};$(function(){window.personalizationManager?window.personalizationManager.addPersonalizedContentLoaded(function(){imageResolution.init()}):$(function(){imageResolution.init()})});