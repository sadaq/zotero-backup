var windowWidth=$(window).width(),desktopMin=768,WHOCms={verticalListHighlight:function(){$(".vertical-list--full-width").each(function(){$(this).addClass("flex-row"),$(this).children().first().addClass("vertical-list-item--highlight").wrapAll("<div class='flex-col flex-col-4'></div>"),$(this).children().not(":first-child").wrapAll("<div class='flex-col flex-col-8'></div>")})},slickNavFooter:function(){var that=this;void 0!==$.fn.slicknav&&$(".main-footer .navVertical").slicknav({prependTo:".main-footer",label:"",allowParentLinks:"true",closedSymbol:"",openedSymbol:"",beforeOpen:function(trigger){that.slicknavOpened(trigger)},afterOpen:function(trigger){$(".slicknav_btn").hasClass("slicknav_open")&&!$(".slicknav_overlay").length&&$("body").prepend('<div class="slicknav_overlay"></div>')},afterClose:function(trigger){$(".slicknav_btn").hasClass("slicknav_open")||$(".slicknav_overlay").remove()}})},slicknavOpened:function(trigger){var $trigger=$(trigger[0]);if(!$trigger.hasClass("slicknav_btn")){var $liParent=$trigger.parent();$liParent.parent().children().each(function(){var $child=$(this);if(!$child.is($liParent)&&!$child.hasClass("slicknav_collapsed")&&$child.hasClass("slicknav_open")){var $anchor=$child.children().first();$anchor.hasClass("slicknav_item")&&$anchor.click()}})}},searchOverlay:function(){var that=this,headerContainer=$(".main-header .container"),navigationContainer=$(".navigation-search"),searchForm=$("#search-form"),searchInput=$(".searchInput");if(navigationContainer.length&&searchForm.length){headerContainer.find(".navigation-search").length||headerContainer.append(navigationContainer.clone(!0)),$(".search-overlay").length||($("#search-form").wrapAll('<div class="search-overlay"><div class="wrapper"></div></div>'),$(".search-overlay").prepend('<span class="closebtn">&times;</span>'));var searchTrigger=headerContainer.find(".navigation-search");searchTrigger.hide(),windowWidth<desktopMin&&searchTrigger.show(),$(window).on("resize",function(){$(window).width()<desktopMin?searchTrigger.show():searchTrigger.hide()}),$(document).on("click",".closebtn",function(){$("body").removeClass("search-open"),searchInput.val(" ")}),$(document).on("click",".navigation-search",function(){that.slideUpMainNavDropdown(),$(".search-open").length||$("body").addClass("search-open")}),$(document).on("click","#clear-search",function(){searchInput.val(" ")}),$(document).on("touchstart",".navigation-search",function(){that.slideUpMainNavDropdown(),searchInput.trigger("focus")})}},slideUpMainNavDropdown:function(){$(".navWrapper ul.nav").find(".open").removeClass("open"),$(".navWrapper .navItemLayout").slideUp(),$("body").removeClass("mainnav_overlay-visible")},searchAutocomplete:function(){"function"==typeof autoComplete&&$.isFunction(autoComplete)&&$('input[name="q"]').autoComplete({source:function(term,suggest){term=term.toLowerCase();var uclient=function(sParam){var sParameterName,i,sURLVariables=decodeURIComponent(window.location.search.substring(1)).split("&");for(i=0;i<sURLVariables.length;i++)if((sParameterName=sURLVariables[i].split("="))[0]===sParam)return void 0===sParameterName[1]||sParameterName[1]}("client");null===uclient&&(uclient="_"+document.getElementsByTagName("html")[0].getAttribute("lang")+"_r"),void 0===lang&&null==lang||(uclient="_"+lang+"_r"),$.ajax({url:"https://extranet.who.int/suggest?q="+term+"&max=7&site=default_collection&client="+uclient+"&access=p&format=os",dataType:"jsonp",success:function(data){suggest(data[1])}})}})},setUpEqualHeight:function(){$(".row").each(function(){"function"==typeof matchHeight&&$.isFunction(matchHeight)&&$(this).find(".highlight-widget.title-and-summary").matchHeight()})},expandableList:function(){$("[data-sf-role=toggleLink]").on("click",function(){var link=$(this);link.find(".sf-icon");link.hasClass("expanded")?link.parent().removeClass("expanded"):link.parent().addClass("expanded")})},backgroundWidget:function(){var backgroundURLHolder=$(".background-url-holder");null!=backgroundURLHolder&&backgroundURLHolder.each(function(){var self=$(this),imageURL=self.attr("data-image"),imgTag=$('<img src="'+imageURL+'">'),bgColor=self.attr("data-color");self.closest(".background-widget").addClass(bgColor);imageURL&&imgTag.appendTo(self.closest(".background-widget"))})},clickableHeroImage:function(){var heroImageContainer=$(".hero-image");void 0!=heroImageContainer&&(heroImageContainer.on("hover",function(){var url=$(this).attr("data-url");url&&""!==url&&$(this).css({cursor:"pointer"})}),heroImageContainer.on("click",function(){var url=$(this).attr("data-url"),target=$(this).attr("target");url&&""!==url&&window.open(url,target)}))},heroImageModernizr:function(){Modernizr.objectfit||$(".hero-image").each(function(){var $container=$(this),imgUrl=$container.find("img").prop("src");imgUrl&&$container.css("backgroundImage","url("+imgUrl+")").addClass("compat-object-fit")})},accordionNav:function(){$(".accordion-navigation .toggle").click(function(e){e.preventDefault();var $this=$(this);$this.next().hasClass("active")?($this.removeClass("active"),$this.next().removeClass("active"),$this.next().slideUp(350)):($this.removeClass("active"),$this.parent().parent().find("li .accordion-navigation--sublevel").removeClass("active"),$this.parent().parent().find("li .accordion-navigation--sublevel").slideUp(350),$this.parent().parent().find("li .toggle.active").removeClass("active"),$this.toggleClass("active"),$this.next().toggleClass("active"),$this.next().slideToggle(350))})},init:function(){window.addEventListener("DOMContentLoaded",function(){jQuery("img.lazy").lazy({})},!1),this.slickNavFooter(),this.searchOverlay(),this.searchAutocomplete(),this.setUpEqualHeight(),this.verticalListHighlight(),this.expandableList(),this.backgroundWidget(),this.clickableHeroImage(),this.heroImageModernizr(),this.accordionNav()}};$(function(){WHOCms.init()});