(function($) 
{
	$.browsercss = function(engine, platform)
	{
		if (engine == undefined) engine = false;
		if (platform == undefined) platform = false;

		var css = [];
		var ver = $.browser.version.split(".")[0];
		var ua = navigator.userAgent.toLowerCase();
		
		// engine name
		if (engine)
		{
			if (/gecko/.test(ua))
				css.push("gecko");
			if (/webkit/.test(ua))
				css.push("webkit");
			if (/trident/.test(ua))
				css.push("trident");
		}
						
		// platform
		if (platform)
		{
			if (/windows/.test(ua))
				css.push("win");
			if (/macintosh/.test(ua))
				css.push("mac");
			if (/linux/.test(ua))
				css.push("linux");
		}
		
		// browser name and version
		var n;
		if ($.browser.msie)
			n = "ie";
		if ($.browser.mozilla)
			n = /firefox/.test(ua) ? "firefox" : "mozilla";
		if ($.browser.safari)
			n = "safari";
		if ($.browser.opera)
			n = "opera";
		css.push(n);
		css.push(n + ver);

		return css;
	};

	$.fn.browsercss = function(options) 
	{
        	options = $.extend({}, $.fn.browsercss.defaults, options);
        
        	return this.each(function() 
		{
			$(this).addClass($.browsercss(options.engine, options.platform).join(" "));
		});
	};

	$.fn.browsercss.defaults = 
	{
		engine: false,
		platform: true,
	};

})(jQuery);
