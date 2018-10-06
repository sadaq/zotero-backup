(function(e){Drupal.behaviors.panels_ajax_pane={attach:function(a){e('.panels-ajax-pane',a).once('panels-ajax-pane-once',function(){(function(a){e.ajax({type:'POST',data:Drupal.settings.panels_ajax_pane[a.data('pid')],url:Drupal.settings.basePath+'panels_ajax_pane/render',cache:!0,error:function(e,n,a){if(typeof console=='object'){console.error('Panels Ajax Pane Error: '+a)}}}).done(function(n){$title_span=e('span.panels-ajax-pane-title[data-pid='+a.data('pid')+']');if(n['markup']===!1){a.closest('.pane-panels-ajax-pane-content').remove();a.remove();$title_span.closest('.pane-title').remove();$title_span.parent().remove()}
else{a.append(n['markup']);$title_span.append(n['title']);a.find('style').append('head')};if(n['title']===!1){$title_span.closest('.pane-title').remove();$title_span.parent().remove()};Drupal.attachBehaviors(a)})})(e(this))})}}})(jQuery);(function(a){Drupal.behaviors.highwire_article_nav={attach:function(t,e){a('.highwire-article-nav',t).once('highwire-article-nav',function(){$wrapper=a(this);a('a',$wrapper).click(function(){$link=a(this);var i=$link.data('panel-ajax-tab'),e=$link.attr('href');if(i){var t=a('a.panels-ajax-tab-tab[data-panel-name="'+i+'"]'),n=t.attr('data-target-id'),r=a('#panels-ajax-tab-container-'+n);if(t.parent().hasClass('active')){if(e.substring(0,1)==='#'){return!0}
else{a('html, body').animate({scrollTop:r.offset().top+'px'},'fast');return!1}}
else{if(e.substring(0,1)!='#'){t.trigger('click');a('html, body').animate({scrollTop:r.offset().top+'px'},'fast')}
else{t.panels_ajax_tabs_trigger(function(){a('html, body').animate({scrollTop:a(e).offset().top+'px'},'fast')})};return!1}}})})}}})(jQuery);(function(t){Drupal.behaviors.highwireNavFloat={attach:function(e,i){var a=function(t,a,o,f,e){var i=Drupal.highwireResponsive.getCurrentLayout();if((e<t)||(a<(o+e))||(i=='mobile')){return!1}
else if(e>f.top){return!0}};t.fn.floatNav=function(e){var a=t.extend({topOffset:20,wrapDiv:'<div class="highwire-nav-float-wrapper"></div>',},e);this.wrap(a.wrapDiv);this.parent().hide().css('position','fixed').css('top',a.topOffset+'px').fadeIn('slow')};t('.highwire-nav-float',e).once('highwire-nav-float',function(){var f=t(this),o=t('ul, ol',f);if(o.data('highwire-float')=='1'){var s=o.data('highwire-float-class'),r='<div class="highwire-nav-float-wrapper '+s+'"></div>',i=20,e=!1;t(window).load(function(s){var o=f.parent().parent(),l=o.siblings().last(),n=l.offset(),c=l.height(),w=parseInt(n.top)+parseInt(c),v=o.height(),u=t('#section-footer'),h=window.pageYOffset,p=u.offset().top-i;check_float_result=a(w,p,v,n,h);if(check_float_result===!1&&e===!0){o.unwrap();e=!1}
else if(check_float_result===!0&&e===!1){o.floatNav({topOffset:i,wrapDiv:r});e=!0};t(window).scroll(function(t){h=window.pageYOffset;n=l.offset();c=l.height();w=parseInt(n.top)+parseInt(c);p=u.offset().top-i;check_float_result=a(w,p,v,n,h);if(check_float_result===!1&&e===!0){o.unwrap();e=!1}
else if(check_float_result===!0&&e===!1){o.floatNav({topOffset:i,wrapDiv:r});e=!0}})})}})}}})(jQuery);(function(i){Drupal.behaviors.highwireSearchSimilarArticles={attach:function(a,r){i('.highwire-search-similar-ajax-wrapper').once('highwire-search-similar-ajax-once',function(a){$this=i(this);var e=$this.attr('id');if(e in r.highwire_search_similar_articles){var h={'highwire_search_similar_articles':r.highwire_search_similar_articles[e]};i.ajax({type:'POST',url:'/highwire_search/ajax/similar_articles',timeout:10000,data:h,success:function(a){i('#'+e).replaceWith(a)},})}})}}})(jQuery);(function(n){Drupal.behaviors.panels_accordion={attach:function(a,c){n.each(Drupal.settings.panels_accordion,function(a,c){n('#'+a).accordion(c)})}}}(jQuery));(function(a){Drupal.behaviors.highwire_access_indicator={attach:function(i,c){var s=[];$access_icons=a('span.highwire-citation-access-check, span.highwire-citation-pdf-download');$access_icons.each(function(){var i={pisa_id:a(this).closest('[data-pisa-id]').data('pisa-id'),apath:a(this).closest('[data-apath]').data('apath'),view:a(this).data('request-view'),};if(a(this).data('claim-seat-license')=='yes'){i['claim_seat_license']=a(this).data('claim-seat-license')};s.push(i)});if(s.length>0){a.ajax({url:'/highwire/articlecitation/ac',type:'POST',data:{'items':s},success:function(i){$access_icons.each(function(t){var s=a(this),h=a(this).closest('[data-pisa-id]').data('pisa-id'),n=a(this).closest('[data-apath]').data('apath'),c=s.data('request-view');if(h){var e=h+'||'+c}
else if(n){var e=n+'||'+c};if(i[e]['access'][c]!=undefined&&i[e]['access'][c]==!0){if(s.hasClass('highwire-citation-access-check')){s.children('.highwire-access-icon-user-access').show();s.children('.highwire-access-icon-no-access').hide()}
else if(s.hasClass('highwire-citation-pdf-download')){s.show()}}
else{s.children('.highwire-access-icon-no-access').show();s.children('.highwire-access-icon-user-access').hide()}})},})}}}}(jQuery));(function(t){Drupal.behaviors.articleAuthorPopup={attach:function(o,e){var i=!!jQuery.fn.qtip;if(!i){if(window.console){console.error("HW's qTip behavior is called without the qTip library loaded. Please investigate.")};return};var a=(e.instances!=undefined)?t.parseJSON(e.instances):{};t("body",o).delegate(".has-author-tooltip span.highwire-citation-author:not(.hasTooltip):not(.noTooltip)","mouseenter",function(o){var e=t(this),u=e.data("delta"),s=e.parents(".highwire-article-citation"),p=s.attr("id"),n=t("#hw-article-author-popups-"+p+" .author-tooltip-"+u,s),r=e.data("hw-author-tooltip-instance")?e.data("hw-author-tooltip-instance"):"highwire_author_tooltip",i=(a[r]!=undefined)?a[r]:"";if(!i||n.length<=0){e.addClass("noTooltip");return};var h={show:{ready:!0,},position:{viewport:t(window),},events:{show:function(t,o){var e=!0;if(Drupal.highwireResponsive){var a=Drupal.highwireResponsive.getCurrentLayout();e=a!=="mobile"?!0:!1};return e},focus:function(t,o){o.elements.target.addClass("author-popup-hover")},blur:function(t,o){o.elements.target.removeClass("author-popup-hover")},},content:{text:n,}};t.extend(!0,i,h);e.qtip(i,o).addClass("has-tooltip hasTooltip");o.preventDefault()})}}})(jQuery);(function(e){Drupal.behaviors.hwJcore1ThemeScripts={attach:function(i,r){e('#user-login-form .login-submit-link',i).click(function(){e('#user-login-form').submit();return!1});e('#region-menu .nice-menu > .menuparent > a, .parent-link-disabled .nice-menu > .menuparent > a',i).click(function(e){e.preventDefault()});e('#highwire-search-form .form-item-txtsimple .form-text + .icon-search, [id^="search-block-form"] .form-item-search-block-form .form-text + .icon-search, .highwire-quicksearch .button-wrapper.button-mini, .highwire-quicksearch .button-wrapper .icon-search',i).click(function(){e(this).parents('form:first').submit()});e('body').on('mousedown','a',function(i){e(this).focus(function(){e(this).blur();e(this).hideFocus=!0})})}};Drupal.theme.jCarouselButton=function(e){if(e=='previous'){var i='Previous Slide'}
else if(e=='next'){var i='Next Slide'};return'<a href="javascript:void(0)"><span class="element-invisible">'+i+'</span></a>'}})(jQuery);;var FORMALIZE=(function(e,l,i,r){var t='placeholder' in i.createElement('input'),n='autofocus' in i.createElement('input'),a=!!(e.browser.msie&&parseInt(e.browser.version,10)===6),s=!!(e.browser.msie&&parseInt(e.browser.version,10)===7);return{go:function(){for(var e in FORMALIZE.init){FORMALIZE.init[e]()}},init:{ie6_skin_inputs:function(){if(!a||!e('input, select, textarea').length){return};var i=/button|submit|reset/,t=/date|datetime|datetime-local|email|month|number|password|range|search|tel|text|time|url|week/;e('input').each(function(){var a=e(this);if(this.getAttribute('type').match(i)){a.addClass('ie6-button');if(this.disabled){a.addClass('ie6-button-disabled')}}
else if(this.getAttribute('type').match(t)){a.addClass('ie6-input');if(this.disabled){a.addClass('ie6-input-disabled')}}});e('textarea, select').each(function(){if(this.disabled){e(this).addClass('ie6-input-disabled')}})},autofocus:function(){if(n||!e(':input[autofocus]').length){return};e(':input[autofocus]:visible:first').focus()},placeholder:function(){if(t||!e(':input[placeholder]').length){return};FORMALIZE.misc.add_placeholder();e(':input[placeholder]').each(function(){var t=e(this),i=t.attr('placeholder');t.focus(function(){if(t.val()===i){t.val('').removeClass('placeholder-text')}}).blur(function(){FORMALIZE.misc.add_placeholder()});t.closest('form').submit(function(){if(t.val()===i){t.val('').removeClass('placeholder-text')}}).bind('reset',function(){setTimeout(FORMALIZE.misc.add_placeholder,50)})})}},misc:{add_placeholder:function(){if(t||!e(':input[placeholder]').length){return};e(':input[placeholder]').each(function(){var t=e(this),i=t.attr('placeholder');if(!t.val()||t.val()===i){t.val(i).addClass('placeholder-text')}})}}}})(jQuery,this,this.document);jQuery(document).ready(function(){FORMALIZE.go()});;Drupal.omega=Drupal.omega||{};(function(e){var a,r,o=function(o){o=parseInt(o);r=a;a=Drupal.settings.omega.layouts.order.hasOwnProperty(o)?Drupal.settings.omega.layouts.order[o]:'mobile';if(r!=a){e('body').removeClass('responsive-layout-'+r).addClass('responsive-layout-'+a);e.event.trigger('responsivelayout',{from:r,to:a})}};Drupal.omega.getCurrentLayout=function(){return a};Drupal.omega.getPreviousLayout=function(){return r};Drupal.omega.crappyBrowser=function(){return e.browser.msie&&parseInt(e.browser.version,10)<9};Drupal.omega.checkLayout=function(a){if(Drupal.settings.omega.layouts.queries.hasOwnProperty(a)&&Drupal.settings.omega.layouts.queries[a]){var o=Drupal.omega.checkQuery(Drupal.settings.omega.layouts.queries[a]);if(!o&&a==Drupal.settings.omega.layouts.primary){var r=e('<div id="omega-check-query"></div>').prependTo('body');r.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');r.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-check-query { z-index: 100; }</style><![endif]-->');o=parseInt(r.css('z-index'))==100;r.remove()};return o};return!1};Drupal.omega.checkQuery=function(a){var r=e('<div id="omega-check-query"></div>').prependTo('body');r.append('<style media="all">#omega-check-query { position: relative; z-index: -1; }</style>');r.append('<style media="'+a+'">#omega-check-query { z-index: 100; }</style>');var o=parseInt(r.css('z-index'))==100;r.remove();return o};Drupal.behaviors.omegaMediaQueries={attach:function(a){e('body',a).once('omega-mediaqueries',function(){var i=e.inArray(Drupal.settings.omega.layouts.primary,Drupal.settings.omega.layouts.order),a=e('<div id="omega-media-query-dummy"></div>').prependTo('body');a.append('<style media="all">#omega-media-query-dummy { position: relative; z-index: -1; }</style>');a.append('<!--[if (lt IE 9)&(!IEMobile)]><style media="all">#omega-media-query-dummy { z-index: '+i+'; }</style><![endif]-->');for(var r in Drupal.settings.omega.layouts.order){a.append('<style media="'+Drupal.settings.omega.layouts.queries[Drupal.settings.omega.layouts.order[r]]+'">#omega-media-query-dummy { z-index: '+r+'; }</style>')};e(window).bind('resize.omegamediaqueries',function(){o(a.css('z-index'))}).load(function(){e(this).trigger('resize.omegamediaqueries')})})}}})(jQuery);(function(e){Drupal.behaviors.omegaEqualHeights={attach:function(i){e('body',i).once('omega-equalheights',function(){e(window).bind('resize.omegaequalheights',function(){e(e('.equal-height-container').get().reverse()).each(function(){var t=e(this).children('.equal-height-element').css('height','');if(!Drupal.behaviors.hasOwnProperty('omegaMediaQueries')||Drupal.omega.getCurrentLayout()!='mobile'){var i=0;t.each(function(){if(e(this).height()>i){i=e(this).height()}}).each(function(){if(e(this).height()<i){e(this).css('height',i)}})}})}).load(function(){e(this).trigger('resize.omegaequalheights')})})}}})(jQuery);;Drupal.highwireResponsive=Drupal.highwireResponsive||{};(function(e){var i='mobile',n=i,r=i,u=[],s=0,o=!1,p=function(e){r=n||i;n=e;t()},a=function(e){r=e;var o=u.indexOf(e);n=u[o-1]||i;t()};Drupal.highwireResponsive.getCurrentLayout=function(e){if(typeof e=='undefined'){e=!1};if(o){if(!e&&Drupal.highwireResponsive.isCurrentLayoutMobile(n)){return i}
else{return n}}
else if(typeof Drupal.omega!='undefined'){return Drupal.omega.getCurrentLayout()}};Drupal.highwireResponsive.getPreviousLayout=function(e){if(typeof e=='undefined'){e=!1};if(o){if(!e&&Drupal.highwireResponsive.isCurrentLayoutMobile(r)){return i}
else{return r}}
else if(typeof Drupal.omega!='undefined'){return Drupal.omega.getPreviousLayout()}};Drupal.highwireResponsive.isCurrentLayoutMobile=function(e){e=e||i;var n=Drupal.highwireResponsive.getMobileLayouts();if(n.indexOf(e)!=-1){return!0}
else{return!1}};Drupal.highwireResponsive.getMobileLayouts=function(){return['mobile','zero','xsmall']};var t=function(){e('body').removeClass('hw-responsive-layout-'+r).addClass('hw-responsive-layout-'+n);e.event.trigger('highwireResponsiveLayoutTransition',{from:r,to:n})};Drupal.behaviors.highwireResponsiveMediaQueries={attach:function(i,r){if(typeof Drupal.settings.highwireResponsive!='undefined'&&Drupal.settings.highwireResponsive.enquire_enabled===1&&Drupal.settings.highwireResponsive.breakpoints_configured===1){if(typeof Drupal.settings.highwireResponsive.breakpoints!='undefined'){o=!0}};if(o){var n=Drupal.settings.highwireResponsive.breakpoints;e.each(n,function(e,i){u[s]=e;s++;enquire.register(i,{match:function(){p(e)},unmatch:function(){a(e)}})});e(window,i).bind('load',function(){t()})}}}})(jQuery);