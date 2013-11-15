(function($) 
{
	$.browsercss = function(engine, platform)
	{
		if (engine == undefined) engine = false;
		if (platform == undefined) platform = false;

		var ua = navigator.userAgent.toLowerCase();
		var version = (ua.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [0,'0'])[1];
		var css = [];
		var ver = version.split(".")[0];
		
		
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

			if (/android/.test(ua))
				css.push("android mobile");
			if (/blackberry/.test(ua))
				css.push("blackberry mobile");
			if (/iphone|ipad|ipod/.test(ua))
				css.push("ios mobile");
			if (/opera mini/.test(ua))
				css.push("opera mobile");
			if (/iemobile/.test(ua))
				css.push("win mobile");
		}
		
		// browser name and version
		var n;
		if (/msie/.test(ua) && !/opera/.test(ua))
			n = "ie";
		if (/mozilla/.test(ua) && !/(compatible|webkit)/.test(ua))
			n = /firefox/.test(ua) ? "firefox" : "mozilla";
		if (/webkit/.test(ua))
			n = "safari";
		if (/opera/.test(ua))
			n = "opera";
		if (/chrom(e|ium)/.test(ua))
			n = "chrome";

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
