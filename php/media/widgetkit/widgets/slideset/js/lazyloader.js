/* Copyright (C) YOOtheme GmbH, YOOtheme Proprietary Use License (http://www.yootheme.com/license) */

(function(e){$widgetkit.lazyloaders.slideset=function(a,f){a.css("visibility","hidden");var h=a.find(".sets:first"),c=h.css({width:""}).width(),d=a.find("ul.set").show(),g=0;"auto"==f.width&&a.width();var i="auto"==f.height?d.eq(0).children().eq(0).outerHeight(!0):f.height;d.each(function(){var a=e(this).show(),b=0;e(this).children().each(function(){var a=e(this);a.css("left",b);b+=a.width()});g=Math.max(g,b);a.css("width",b).data("width",b).hide()});d.eq(0).show();h.css({height:i});g>c&&(c=g/c,d.css($widgetkit.css3({transform:"scale("+
1/c+")"})),h.css("height",i/c));d.css({height:i});$widgetkit.load(WIDGETKIT_URL+"/widgets/slideset/js/slideset.js").done(function(){a.slideset(f).css("visibility","visible");a.find("img[data-src]").each(function(){var a=e(this),b=a.data("src");setTimeout(function(){a.attr("src",b)},1)})})}})(jQuery);
