/* Copyright (C) YOOtheme GmbH, http://www.gnu.org/licenses/gpl.html GNU/GPL */

(function($){var script={};$.fn.socialButtons=function(options){options=$.extend({wrapper:'<div class="tm-socialbuttons uk-clearfix">'},options);if(!options["twitter"]&&!options["plusone"]&&!options["facebook"]){return this}if(options["twitter"]&&!script["twitter"]){script["twitter"]=$.getScript("//platform.twitter.com/widgets.js")}if(options["plusone"]&&!script["plusone"]){script["plusone"]=$.getScript("//apis.google.com/js/plusone.js")}if(!window["FB"]&&options["facebook"]&&!script["facebook"]){$("body").append('<div id="fb-root"></div>');(function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id))return;js=d.createElement(s);js.id=id;js.src="//connect.facebook.net/en_US/all.js#xfbml=1";fjs.parentNode.insertBefore(js,fjs)})(document,"script","facebook-jssdk");script["facebook"]=true}return this.each(function(){var link=$(this).data("permalink"),buttons=$(options.wrapper).appendTo(this);if(options["twitter"]){buttons.append('<div><a href="http://twitter.com/share" class="twitter-share-button" data-url="'+link+'" data-count="none">Tweet</a></div>')}if(options["plusone"]){buttons.append('<div><div class="g-plusone" data-size="medium" data-annotation="none" data-href="'+link+'"></div></div>')}if(options["facebook"]){buttons.append('<div><div class="fb-like" data-href="'+link+'" data-send="false" data-layout="button_count" data-width="100" data-show-faces="false"></div></div>')}})}})(jQuery);