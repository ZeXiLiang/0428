$(function (){
    function aps_adboard_romancecpmGroup(b, k) {
	if (b == null || k == null) {
		return
	}
	var f;
	try {
		for (var g = 0, n = k.length; g < n; g++) {
			var a = b[g],
				l;
			if (a && a.pid) {
				if (a.adSrc_n && a.adSrc_n != "nil") {
					l = bigscreen ? a.adSrc : a.adSrc_n
				} else {
					l = a.adSrc
				}
				if (l.indexOf("http:") == 0) {
					l = l.split("http:")[1]
				}
				f = $("body").find("[cpmId=" + a.pid + "]");
				f.attr({
					href: a.apsClickUrl
				}).find("img").attr({
					src: l
				});
				if (f.parents(".firstScreen").length > 0 && f.hasClass("big") && $(".firstScreen").attr("data-dacu") != "true") {
					f.closest("li").css("background", a.tone)
				} else {
					f.find(".img-name").html(a.title).end().find(".img-desc").html(a.subtitle)
				}
			} else {
				var h = $("body").find("[cpmId=" + k[g] + "]"),
					c = h.find("img");
				l = c.attr("d-src");
				h.attr({
					href: h.attr("d-href")
				});
				c.attr({
					src: l
				});
				if (h.parents(".firstScreen").length > 0 && h.hasClass("big") && $(".firstScreen").attr("data-dacu") != "true") {
					var m = c.closest("li");
					m.css("background", m.attr("d-color"))
				} else {
					h.find(".img-name").html(h.find(".img-name").attr("d-title")).end().find(".img-desc").html(h.find(".img-desc").attr("d-title"))
				}
			}
		}
	} catch (j) {
		throw new Error(j)
	}
};
function aps_adboard_outTime(g) {
	for (var e = 0, f = g.length; e < f; e++) {
		var c = $("body").find("[cpmId=" + g[e] + "]"),
			b = c.find("img");
		srcAttr = b.attr("d-src");
		c.attr({
			href: c.attr("d-href")
		});
		b.attr({
			src: srcAttr
		});
		if (c.parents(".firstScreen").length > 0 && c.hasClass("big") && $(".firstScreen").attr("data-dacu") != "true") {
			var a = b.closest("li");
			a.css("background", a.attr("d-color"))
		} else {
			c.find(".img-name").html(c.find(".img-name").attr("d-title")).end().find(".img-desc").html(c.find(".img-desc").attr("d-title"))
		}
	}
};
function aps_adboard_errors(g) {
	for (var e = 0, f = g.length; e < f; e++) {
		var c = $("body").find("[cpmId=" + g[e] + "]"),
			b = c.find("img");
		srcAttr = b.attr("d-src");
		c.attr({
			href: c.attr("d-href")
		});
		b.attr({
			src: srcAttr
		});
		if (c.parents(".firstScreen").length > 0 && c.hasClass("big") && $(".firstScreen").attr("data-dacu") != "true") {
			var a = b.closest("li");
			a.css("background", a.attr("d-color"))
		} else {
			c.find(".img-name").html(c.find(".img-name").attr("d-title")).end().find(".img-desc").html(c.find(".img-desc").attr("d-title"))
		}
	}
};
function cpmRequire(f) {
	var l = f.find("[cpmId]"),
		p = [];
	l.each(function() {
		p.push($(this).attr("cpmId"))
	});
	var q = "w",
		j = p.length,
		h = [],
		r = Math.ceil(j / 5);
	for (var g = 0; g < r; g++) {
		h[g] = [];
		for (var c = 0; c < 5; c++) {
			var b = g * 5 + c;
			if (b < j) {
				h[g].push(p[b])
			}
		}
	}
	for (var a = 0; a < r; a++) {
		try {
			apsAdboardGroupObj.aps_adboard_loadAdCpmGroup(h[a], q)
		} catch (k) {
			aps_adboard_errors(h[a])
		}
	}
};
var Util = Util || {};
Util.ieVersion = function(c) {
	var a = document.createElement("b");
	a.innerHTML = "<!--[if IE " + c + "]><i></i><![endif]-->";
	return a.getElementsByTagName("i").length === 1
}; 
Util.isiPad = function() {
	var b = navigator.userAgent;
	var a = "iPad";
	var c = false;
	if (b.indexOf(a) > 0) {
		c = true
	}
	return c
};
Util.Slide = function(a, b) {
	this.opt = $.extend({
		event: "click",
		mouseOverDelay: 0,
		auto: true,
		delay: 5000,
		duration: 500,
		showLabel: true,
		onchange: function(c) {},
		onchangestart: function(c) {},
		oninitend: function(c) {}
	}, b);
	this.container = $(a);
	this.items = this.container.find("li");
	this.index = 0;
	this.pager = null;
	this.animating = false;
	this.screen = false;
	this.mouseIn = false;
	this._init()
};
Util.Slide.prototype = {
	_init: function() {
		var a = this;
		this.opt.showLabel && this._createLabel();
		this.to(0, true);
		this.container.on("mouseenter mousemove", function() {
			a.mouseIn = true;
			a.autoPause()
		});
		this.container.on("mouseleave", function() {
			a.mouseIn = false;
			if (a.isInScreen()) {
				a.autoStart()
			}
		});
		if (this.isInScreen()) {
			a.autoStart();
			a.screen = true
		}
		$(window).scroll(function() {
			if (a.isInScreen() && a.screen == false) {
				a.screen = true;
				a.autoStart()
			} else {
				if (!a.isInScreen() && a.screen == true) {
					a.screen = false;
					a.autoPause()
				}
			}
		});
		this.opt.oninitend.call(this, this.container)
	},
	_createLabel: function() {
		var e = this,
			f = [],
			g, c, b;
		f.push('<div class="banner-nav">');
		for (c = 1; c <= this.items.size(); c++) {
			f.push('<a href="javascript:;" class="page-item">' + c + "</a>")
		}
		f.push("</div>");
		this.pager = typeof this.opt.showLabel == "string" ? this.container.find(this.opt.showLabel) : $(f.join("")).appendTo(this.container.parent().find(".banner-nav-wrapper"));
		if (this.opt.mouseOverDelay) {
			this.pager.find("a").hover(function() {
				var a = $(this).index();
				g = setTimeout(function() {
					e.to(a)
				}, e.opt.mouseOverDelay)
			}, function() {
				clearTimeout(g)
			})
		} else {
			this.pager.find("a").bind(this.opt.event, function() {
				e.to($(this).index())
			})
		}
	},
	autoStart: function() {
		var a = this;
		this.timer = setInterval(function() {
			a.next()
		}, this.opt.delay)
	},
	autoPause: function() {
		clearInterval(this.timer)
	},
	prev: function() {
		this.to(this.index == 0 ? this.items.size() - 1 : this.index - 1, true)
	},
	next: function() {
		this.to(this.index == this.items.size() - 1 ? 0 : this.index + 1, false)
	},
	to: function(b, a) {
		var c = this;
		if (this.animating) {
			return false
		}
		this.opt.onchangestart.call(this, b);
		this.animating = true;
		this.items.eq(b).stop().fadeIn(this.opt.duration, function() {
			c.animating = false
		}).siblings().fadeOut(this.opt.duration);
		lazyelem.detect();
		if (!this.items.eq(b).attr("data-bgflag") || a) {
			if (this.items.eq(b).find("a[cpmId]")) {
				cpmRequire(this.items.eq(b))
			}
			if (this.items.eq(b).find("a[cptId]")) {
				this.items.eq(b).find("a[cptId]").each(function() {
					pid = $(this).attr("cptId");
					if (pid) {
						try {
							apsAdboardCptPvObj.aps_adboard_loadAdCptPv(pid, b.cptTime)
						} catch (f) {}
					}
				})
			}
			this.items.eq(b).attr("data-bgflag", "true")
		}
		this.pager && this.pager.find("a").eq(b).addClass("current").siblings().removeClass("current");
		this.index = b;
		this.opt.onchange.call(this, b)
	},
	isInScreen: function() {
		var a = this.container;
		if (a.length > 0) {
			return ($(document).scrollTop() + $(window).height() - 100 > a.offset().top) && (a.offset().top + a.height() - 100 > $(document).scrollTop())
		}
	}
};
Util.verticalLoop = function(a, b) {
	this.opt = $.extend({
		event: "click",
		mouseOverDelay: 0,
		auto: true,
		delay: 5000,
		duration: 500,
		showLabel: false,
		onchange: function(c) {},
		onchangestart: function(c) {},
		oninitend: function(c) {}
	}, b);
	this.container = $(a);
	this.items = this.container.find("li");
	this.index = 0;
	this.pager = null;
	this.animating = false;
	this.screen = false;
	this.mouseIn = false;
	this._init()
};
Util.verticalLoop.prototype = {
	_init: function() {
		var a = this;
		this.container.find("ul").clone().appendTo(this.container);
		this.to(0);
		this.container.on("mouseenter mousemove", function() {
			a.mouseIn = true;
			a.autoPause()
		});
		this.container.on("mouseleave", function() {
			a.mouseIn = false;
			if (a.isInScreen()) {
				a.autoStart()
			}
		});
		if (this.isInScreen()) {
			a.autoStart();
			a.screen = true
		}
		$(window).scroll(function() {
			if (a.isInScreen() && a.screen == false) {
				a.screen = true;
				a.autoStart()
			} else {
				if (!a.isInScreen() && a.screen == true) {
					a.screen = false;
					a.autoPause()
				}
			}
		});
		this.opt.oninitend.call(this, this.container)
	},
	autoStart: function() {
		var a = this;
		this.timer = setInterval(function() {
			a.next()
		}, this.opt.delay)
	},
	autoPause: function() {
		clearInterval(this.timer)
	},
	next: function() {
		this.to(this.index)
	},
	to: function(a) {
		var g = this.container.find("ul").eq(0),
			c = this.container.find("ul").eq(1),
			f = g.find("li").length,
			e = parseInt(f / 2),
			b = this;
		g.animate({
			marginTop: 0 - (a * 2 * 48) + "px"
		}, 1000, function() {
			if (a == e) {
				g.css("marginTop", 0);
				b.index = 1
			} else {
				b.index = a + 1
			}
		})
	},
	isInScreen: function() {
		var a = this.container;
		if (a.length > 0) {
			return ($(document).scrollTop() + $(window).height() - 100 > a.offset().top) && (a.offset().top + a.height() - 100 > $(document).scrollTop())
		}
	}
};
Util.CountDown = function(b) {
	function a(c) {
		this.opts = c || {};
		this.obj = this.opts.obj;
		this.nowTime = this.opts.nowTime;
		this.startTime = this.opts.startTime;
		this.endTime = this.opts.endTime;
		this.dayNode = this.opts.dayNode || ".day-node";
		this.hourNode = this.opts.hourNode || ".hour-node";
		this.minuteNode = this.opts.minuteNode || ".minute-node";
		this.secondNode = this.opts.secondNode || ".second-node";
		this.beforeStart = this.opts.beforeStart ||
		function() {};
		this.isStart = this.opts.isStart ||
		function() {};
		this.callback = this.opts.callback ||
		function() {};
		this.speed = this.opts.speed || 1000;
		this.timeOffset = 0;
		this.gap = [];
		this.auto = null
	}
	a.prototype = {
		init: function() {
			var c = this;
			c.timeOffset = c.nowTime - new Date().getTime();
			c.timer();
			c.run()
		},
		timer: function() {
			var c = this,
				e = this.nowTime;
			if (c.startTime && parseInt(c.startTime) > parseInt(e)) {
				c.gap = c.parse(c.startTime - e);
				c.html();
				this.beforeStart()
			} else {
				if (c.endTime && parseInt(c.endTime) > parseInt(e)) {
					c.gap = c.parse(c.endTime - e);
					c.html();
					this.isStart()
				}
			}
			if (parseInt(c.endTime) < parseInt(this.nowTime)) {
				clearTimeout(c.auto);
				this.callback()
			}
			this.nowTime = new Date().getTime() + this.timeOffset
		},
		parse: function(f) {
			var c = this,
				e = f / c.speed;
			c.second = Math.round(e % 60);
			c.minute = Math.floor((e / 60) % 60);
			c.hour = Math.floor((e / 60 / 60) % 24);
			c.day = Math.floor(e / 60 / 60 / 24);
			if (c.second < 10) {
				c.second = "0" + c.second
			}
			if (c.minute < 10) {
				c.minute = "0" + c.minute
			}
			if (c.hour < 10) {
				c.hour = "0" + c.hour
			}
			if (c.day < 10) {
				c.day = "0" + c.day
			}
			return [c.second, c.minute, c.hour, c.day]
		},
		html: function() {
			var c = this;
			c.obj.find(this.dayNode).html(c.gap[3]);
			c.obj.find(this.hourNode).html(c.gap[2]);
			c.obj.find(this.minuteNode).html(c.gap[1]);
			c.obj.find(this.secondNode).html(c.gap[0])
		},
		run: function() {
			var c = this;
			c.auto = setInterval(function() {
				c.timer()
			}, 500)
		}
	};
	new a(b).init()
};
var commodity = {
	getUrl: function(h, e) {
		var b = "";
		if (h.trickPoint && h.trickPoint.length > 0) {
			b = "?srcPoint=" + h.trickPoint
		}
		if (h.linkUrl && h.linkUrl != "") {
			if (h.linkUrl.indexOf("http://") == 0 || h.linkUrl.indexOf("https://") == 0) {
				return h.linkUrl + b
			} else {
				return "//" + h.linkUrl + b
			}
		} else {
			var c = h.linkType;
			var a = h.vendorCode;
			var f = h.partNumber;
			var g = sn.productDomain;
			if (g.substring(g.length - 1) != "/") {
				g = g + "/"
			}
			if (e && null != e) {
				if (a && a.length > 0) {
					return g + a + "/" + f + ".html?srcPoint=" + e + "&src=" + e
				} else {
					return g + f + ".html?srcPoint=" + e + "&src=" + e
				}
			} else {
				if (a && a.length > 0) {
					return g + a + "/" + f + ".html" + b
				} else {
					return g + f + ".html" + b
				}
			}
		}
	},
	getSku: function(f) {
		var c = f.partNumber + "|1|";
		var e = "";
		var b = f.linkType;
		var a = f.vendorCode;
		if (b && b != "1") {
			if (b == "2") {
				e = "4|"
			} else {
				if (b == "3") {
					e = "5|"
				} else {
					if (b == "4") {
						e = "6|"
					} else {
						if (b == "5") {
							e = "7|"
						} else {
							if (b == "6") {
								e = "8|"
							} else {
								if (b == "7") {
									e = "9|"
								}
							}
						}
					}
				}
			}
		} else {
			if (a && a != "") {
				if (a == "0000000000") {
					e = "3|"
				} else {
					e = "2|" + f.vendorCode
				}
			} else {
				e = "|"
			}
		}
		return 'data-sku="' + c + e + '"'
	}
};
Util.getRandomNum = function() {
	return parseInt(Math.random() * 5) + 1
};
Util.isLocalStorageSupported = function() {
	var c = "test",
		b = window.localStorage;
	if (Util.ieVersion(7) || Util.ieVersion(6) || typeof JSON == "undefined") {
		return false
	}
	try {
		b.setItem(c, "testValue");
		b.removeItem(c);
		return true
	} catch (a) {
		return false
	}
};
Util.baoguangFun = function(a) {
	if (typeof _analyseExpoTags == "function") {
		_analyseExpoTags("a", a)
	} else {
		setTimeout(function() {
			Util.baoguangFun(a)
		}, 2000)
	}
};
Util.listloop = function(b) {
	var e = {
		wrap: "",
		loopBox: "",
		loopChild: "",
		triggerLeft: ".switch-prev",
		triggerRight: ".switch-next",
		curCount: "",
		totalCount: "",
		hasCount: false,
		isLoop: true,
		isLazyImg: false,
		isLazyDom: false,
		delay: 0,
		hasLabel: true,
		hasLabelObj: null,
		labelObj: null,
		isRandom: false
	};
	$.extend(e, b);
	var m = $(e.wrap),
		u = m.find(e.triggerLeft),
		a = m.find(e.triggerRight),
		w = m.find(e.loopBox),
		k = w.find(e.loopChild),
		h = e.step.wide,
		p = e.scrollWidth.wide,
		z = Math.ceil(k.length / h),
		j = k.length,
		n = m.find(e.curCount),
		B = m.find(e.totalCount),
		A = $(e.hasLabelObj),
		y = 0,
		C;
	if (!bigscreen) {
		h = e.step.narrow;
		p = e.scrollWidth.narrow;
		C = k.length % h;
		z = Math.ceil(k.length / h);
		j = k.length - C
	}
	m.hover(function() {
		u.show();
		a.show()
	}, function() {
		u.hide();
		a.hide()
	});
	e.hasCount && B.html(z);
	u.unbind().click(function() {
		s()
	});
	a.unbind().click(function() {
		t()
	});
	$(document).keyup(function(i) {
		if (index.isInScreen(a)) {
			if (i.which == 37 || i.which == 75) {
				s()
			}
			if (i.which == 39 || i.which == 74) {
				t()
			}
		}
	});
	var q = b.labelObj,
		c = "",
		l;
	if (q) {
		if (z <= 1) {
			q.hide()
		}
		q.find(".prev").unbind().click(function() {
			s()
		});
		q.find(".next").unbind().click(function() {
			t()
		});
		for (l = 0; l < z; l++) {
			c += "<li></li>"
		}
		q.find("ul").html(c).find("li").click(function() {
			y = $(this).index();
			v(false, y)
		}).first().addClass("current")
	}

	function t() {
		if (z == 1 || w.is(":animated")) {
			return false
		}
		if (!e.isLoop) {
			y++;
			if (y >= z) {
				y = z - 1
			}
			v(false, y);
			return
		}
		if (y == z - 1) {
			for (var i = 0; i < h; i++) {
				k.eq(i).css({
					position: "relative",
					left: z * p + "px"
				})
			}
		}
		y++;
		v(function() {
			if (y == z) {
				y = 0;
				k.removeAttr("style");
				w.css("left", y * p)
			}
		}, y)
	}

	function s() {
		if (z == 1 || w.is(":animated")) {
			return false
		}
		if (!e.isLoop) {
			y--;
			if (y <= 0) {
				y = 0
			}
			v(false, y);
			return
		}
		if (y == 0) {
			for (var i = 1; i <= h; i++) {
				k.eq(j - i).css({
					position: "relative",
					left: -z * p + "px"
				})
			}
		}
		y--;
		v(function() {
			if (y == -1) {
				y = z - 1;
				k.removeAttr("style");
				w.css("left", -y * p)
			}
		}, y)
	}

	function v(F, E) {
		if (e.hasCount) {
			if (E > z - 1) {
				E = 0
			}
			if (E < 0) {
				E = z - 1
			}
			n.html(E + 1)
		}
		if (!F) {
			F = function() {}
		}
		w.stop(true).animate({
			left: -y * p
		}, 300, F);
		f();
		o();
		for (var i = (y * h); i < ((y + 1) * h); i++) {
			if (k.eq(i).attr("cptId")) {
				pid = k.eq(i).attr("cptId");
				if (pid) {
					try {
						apsAdboardCptPvObj.aps_adboard_loadAdCptPv(pid, index.cptTime)
					} catch (D) {}
				}
			}
		}
		r(y == z ? 0 : y);
		if (q) {
			q.find("li").removeClass("current").eq(y == z ? 0 : y).addClass("current")
		}
	}

	function f() {
		if (!e.isLazyDom) {
			return
		}
		var I = k.eq(y).find(".lazy-dom"),
			D = I.text(),
			H = D.length;
		if (H == 0) {
			return
		}
		var K = /\n+/g,
			G = /<!--.*?-->/ig,
			M = /\/\*.*?\*\//ig,
			E = /[ ]+</ig,
			J = D.replace(K, ""),
			L = J.replace(G, ""),
			F = L.replace(M, ""),
			i = F.replace(E, "<");
		I.before(i).remove();
		o()
	}

	function o() {
		lazyelem.detect()
	}

	function x() {
		var E = [],
			D, F;
		E.push('<div class="banner-pager"><div class="black"></div><div class="pager">');
		for (D = 1; D <= z; D++) {
			E.push("<a" + (D == 1 ? ' class="current"' : "") + ' href="javascript:;"></a>')
		}
		E.push("</div></div>");
		var i = $(E.join("")).appendTo(A);
		i.find("a").hover(function() {
			var G = $(this).index(),
				H = G * h,
				I = (G + 1) * h;
			F = setTimeout(function() {
				w.stop(true).animate({
					left: -G * p
				}, 300);
				r(G);
				if (e.hasCount) {
					n.html(G + 1)
				}
				y = G;
				if (e.isLazyDom) {
					var Q = k.eq(y).find(".lazy-dom"),
						K = Q.text(),
						P = K.length;
					if (P == 0) {
						return
					}
					var S = /\n+/g,
						O = /<!--.*?-->/ig,
						U = /\/\*.*?\*\//ig,
						L = /[ ]+</ig,
						R = K.replace(S, ""),
						T = R.replace(O, ""),
						N = T.replace(U, ""),
						J = N.replace(L, "<");
					Q.before(J).remove()
				}
				if (e.isLazyImg) {
					for (var M = H; M < I; M++) {
						k.eq(M).find("img[src3]").each(function() {
							var V = $(this);
							V.attr("src", V.attr("src3")).removeAttr("src3").addClass("err-product")
						})
					}
				}
			}, 100)
		}, function() {
			clearTimeout(F)
		})
	}

	function r(D) {
		m.find(".pager a").removeClass("current").eq(D).addClass("current")
	}
	if (e.hasLabel && z > 1) {
		x()
	}
	if (e.delay) {
		var g = setInterval(function() {
			t()
		}, e.delay);
		m.hover(function() {
			clearInterval(g)
		}, function() {
			g = setInterval(function() {
				t()
			}, e.delay)
		})
	}
};
Util.getCurrentTime = function() {
	var c = $.Deferred(),
		b, a = this;
	if (this.serverOffset) {
		b = new Date().getTime() + this.serverOffset;
		c.resolve(b)
	} else {
		$.ajax({
			url: "https://f.m.suning.com/api/ct.do",
			dataType: "jsonp",
			timeout: 3000,
			success: function(e) {
				b = parseInt(e.currentTime);
				a.serverOffset = b - new Date().getTime();
				c.resolve(b)
			},
			error: function() {
				b = new Date().getTime();
				c.resolve(b)
			}
		})
	}
	return c.promise()
};
var index = index || {};
index.cmsBgDom = [];   
index.toutiaoloop = function() {
	var a = new Util.verticalLoop(".first-right .toutiao", {
		mouseOverDelay: 200,
		duration: 500,
		delay: 5000
	})
};
index.banner = function() {
	var a = new Util.Slide(".banner", {
		mouseOverDelay: 200,
		duration: 500,
		delay: 5000
	}),
		e = $(".banner-wrapper"),
		c = e.find(".btn-left"),
		b = e.find(".btn-right");
	c.click(function() {
		a.prev()
	});
	b.click(function() {
		a.next()
	});
	e.hover(function() {
		c.show();
		b.show()
	}, function() {
		c.hide();
		b.hide()
	})
};
index.getwebp = function(b) {
if ($.isWebp) {
		var a = $(b).find("img");
		a.each(function() {
			var c = $(this),
				e = "";
			if (c.attr("lazy-src") != "") {
				e = c.attr("lazy-src")
			} else {
				if (c.attr("src") != "") {
					e = c.attr("src")
				}
			}
			if (e && e.indexOf("?") == -1) {
				e = e + "?from=mobile"
			} else {
				if (e) {
					e = e + "&from=mobile"
				}
			}
			if (c.attr("lazy-src") != "") {
				c.attr("lazy-src", e)
			} else {
				if (c.attr("src") != "") {
					e = c.attr("src", e)
				}
			}
		})
	}
};
index.priceDOM = [];
index.cmsBgFunc = function(b) {
	var c = "";
	for (var a = 0; a < 10; a++) {
		if (b.length == 0) {
			break
		}
		if (a != 0) {
			c += ","
		}
		c += $(b.shift()).attr("cms-name")
	}
	saExportUtil.sendCustomExpoData(c, 1);
	if (b.length > 0) {
		index.cmsBgFunc(b)
	} else {
		index.cmsBgFlag = false
	}
};

index.getCMSHtml = function(f, g, h, b, a) {
	var e = window.location.host;
	var c = "",
		i;
	i = "lazyload" + g + a;
	if (sn.isBack && ("true" == sn.isBack)) {
		c = "https://" + e + "/cms-admin-web/page/previewModel/" + f + "_" + g + "_" + previewTimes + "_" + i + ".htm"
	} else {
		c = "https:"+sn.cmsLibDomain + "/homepage/model/" + f + "_" + g + "_" + i + ".json"
	}
	$.ajax({
		url: c,
		cache: false,
		dataType: "jsonp",
		jsonpCallback: i,
		success: function(j) {
			h(j)
		},
		error: function() {
			b()
		}
	})
};  


index.getenv = function() {
	switch (Util.getEnv(_hostName)) {
	case "pre":
		zsqDomain = "//jupre.m.cnsuning.com";
		codeDomain = "//codepre.cnsuning.com";
		middleDomain = "//cpre.m.cnsuning.com/channelwap.htm";
		esDomain = "//2.suning.com/";
		tryDomain = "//tpssit.cnsuning.com/tps/";
		zbDomain = "//slv.suning.com/slv-web/pc/list.jsonp";
		cmsApiDomain = "//libpre.cnsuning.com";
		msiDomain = "//mypre.cnsuning.com/";
		custHeadUrl = "//uimgpre.cnsuning.com/uimg/cmf/cust_headpic/";
		scriptDomianDir = "//presslres.suning.com/";
		httpsDomain = "https://sslpre.cnsuning.com/";
		ysDomain = "//nmpspre.cnsuning.com";
		tuijianDomain = "//tuijianxgpre.cnsuning.com";
		hwgDomain = "//gpre.cnsuning.com/index_pc.html";
		zhiboDomain = "//videopre.cnsuning.com";
		pgDomain = "//pin.m.suning.com/";
		nmqsDomain = "//nmqspre.cnsuning.com";
		fmDomain = "//fprexg.m.cnsuning.com";
		passportLogonUrl = "https://passportpre.cnsuning.com/ids/login";
		superVip = "https://supervippre.cnsuning.com/snprime-web/toIndex.do";
		vipDomain = "https://vippre.cnsuning.com/";
		newsDomain = "//crdnode-xgpre.cnsuning.com/";
		break;
	case "sit":
		zsqDomain = "//jusit.m.cnsuning.com";
		codeDomain = "//codesit.cnsuning.com";
		middleDomain = "//csit.m.cnsuning.com/channelwap.htm";
		esDomain = "//2.suning.com/";
		tryDomain = "//try.suning.com/tps/";
		zbDomain = "//slvsit.cnsuning.com/slv-web/pc/list.jsonp";
		cmsApiDomain = "//libpre.cnsuning.com";
		msiDomain = "//mysit.cnsuning.com/msi-web/";
		custHeadUrl = "//uimgpre.cnsuning.com/uimg/cmf/cust_headpic/";
		scriptDomianDir = "//sitsslres.suning.com/";
		httpsDomain = "https://sslsit.cnsuning.com/";
		ysDomain = "//nmpssit.cnsuning.com";
		tuijianDomain = "//10.19.90.232:9080";
		hwgDomain = "//gpre.cnsuning.com/index_pc.html";
		zhiboDomain = "//videosit.cnsuning.com";
		pgDomain = "//pin.m.suning.com/";
		nmqsDomain = "//nmqssit.cnsuning.com";
		fmDomain = "//f.msit.cnsuning.com";
		passportLogonUrl = "https://passportsit.cnsuning.com/ids/login";
		superVip = "https://supervippre.cnsuning.com/snprime-web/toIndex.do";
		vipDomain = "https://vippre.cnsuning.com/";
		newsDomain = "//crdnode-pre.cnsuning.com/";
		break;
	case "prd":
		codeDomain = "//code.suning.cn";
		zsqDomain = "//ju.m.suning.com";
		middleDomain = "//c.m.suning.com/channelwap.htm";
		esDomain = "//2.suning.com/";
		tryDomain = "//try.suning.com/tps/";
		zbDomain = "//slv.suning.com/slv-web/pc/list.jsonp";
		cmsApiDomain = "//lib.suning.com";
		msiDomain = "//my.suning.com/";
		custHeadUrl = "//image.suning.cn/uimg/cmf/cust_headpic/";
		scriptDomianDir = "//res.suning.cn/";
		httpsDomain = "https://ssl.suning.com/";
		ysDomain = "//ju.suning.com";
		tuijianDomain = "//tuijian.suning.com";
		hwgDomain = "//g.suning.com";
		zhiboDomain = "//video.suning.com";
		pgDomain = "//pin.m.suning.com/";
		nmqsDomain = "//nmqs.suning.com";
		fmDomain = "//f.m.suning.com";
		passportLogonUrl = "https://passport.suning.com/ids/login";
		superVip = "//supervip.suning.com/snprime-web/toIndex.do";
		vipDomain = "https://vip.suning.com/";
		newsDomain = "//news.suning.com/";
		break;
	default:
		codeDomain = "//code.suning.cn";
		zsqDomain = "//ju.m.suning.com";
		middleDomain = "//c.m.suning.com/channelwap.htm";
		esDomain = "//2.suning.com/";
		tryDomain = "//try.suning.com/tps/";
		zbDomain = "//slv.suning.com/slv-web/pc/list.jsonp";
		cmsApiDomain = "//lib.suning.com";
		msiDomain = "//my.suning.com/";
		custHeadUrl = "//image.suning.cn/uimg/cmf/cust_headpic/";
		scriptDomianDir = "//res.suning.cn/";
		httpsDomain = "https://ssl.suning.com/";
		ysDomain = "//ju.suning.com";
		tuijianDomain = "//tuijian.suning.com";
		hwgDomain = "//g.suning.com";
		zhiboDomain = "//video.suning.com";
		pgDomain = "//pin.m.suning.com/";
		nmqsDomain = "//nmqs.suning.com";
		fmDomain = "//f.m.suning.com";
		passportLogonUrl = "https://passport.suning.com/ids/login";
		superVip = "//supervip.suning.com/snprime-web/toIndex.do";
		vipDomain = "https://vip.suning.com/";
		newsDomain = "//news.suning.com/"
	}
	window.passport_config = window.passport_config || {
		base: httpsDomain + "webapp/wcs/stores/",
		loginTheme: "b2c_pop",
		successCallbackUrl: httpsDomain + "/webapp/wcs/stores/servlet/popupLoginSuccess?storeId=10052&catalogId=10051&"
	}
};
index.floorCode = function(a) {
	var b;
	$(a).find(".code-wrapper").hover(function() {
		clearTimeout(b);
		$(this).find(".code").show();
		lazyelem.detect()
	}, function() {
		var c = $(this);
		b = setTimeout(function() {
			c.find(".code").hide()
		}, 200)
	})
};
function isLocalStorageSupported() {
	var c = "test",
		b = window.localStorage;
	if (Util.ieVersion(7) || Util.ieVersion(6) || typeof JSON == "undefined") {
		return false
	}
	try {
		b.setItem(c, "testValue");
		b.removeItem(c);
		return true
	} catch (a) {
		return false
	}
};
index.lazyFloor = function() {
	lazyelem.listen(".com-floor", "fn", function(f) {
		var i = $("body").attr("data-pageCode"),
			k = $(f).attr("data-fullId"),
			l = "lazyload" + k;
		var c = window.location.host;
		var a = "";
		if (sn.isBack && ("true" == sn.isBack)) {
			a = "http://" + c + "/cms-admin-web/page/previewModel/" + i + "_" + k + "_" + previewTimes + "_" + l + ".htm"
		} else {
          
			a ="https:"+sn.cmsLibDomain + "/homepage/model/" + i + "_" + k + "_" + l + ".json"
		}
		var b = isLocalStorageSupported(),
			h, e;
		k = "floorId" + k;
		if (b && localStorage.getItem(k) && !sn.isBack) {
			h = JSON.parse(localStorage.getItem(k));
			storeTime = parseInt(h.time) + 10 * 60 * 1000;
			var j = new Date().getTime();
			if (j > storeTime) {
				$.ajax({
					url: a,
					cache: false,
					dataType: "jsonp",
					jsonpCallback: l,
					success: function(n) {
						var m = new Date().getTime();
						e = n;
						if (b) {
							localStorage.setItem(k, JSON.stringify({
								time: m,
								floorContent: e
							}))
						}
						g(f, e)
					}
				})
			} else {
				e = h.floorContent;
				g(f, e)
			}
		} else {
			$.ajax({
				url: a,
				cache: false,
				dataType: "jsonp",
				jsonpCallback: l,
				success: function(n) {
					var m = new Date().getTime();
					e = n;
					if (b) {
						localStorage.setItem(k, JSON.stringify({
							time: m,
							floorContent: e
						}))
					}
					g(f, e)
				}
			})
		}

		function g(q, o) {
       
			if (!o || !o.data) {
				if (b && localStorage.getItem(k)) {
					h = JSON.parse(localStorage.getItem(k));
					o = h.floorContent;
					$(q).html(o.data)
				} else {
					return
				}
			} else {
				$(q).html(o.data)
			}
			var p = $(q).hasClass("g-floor") ? $(q) : $(q).find(".g-floor"),
				n;
			index.floorCode(q);

			function m(s) {
				$(s).find("li").show();
				lazyelem.listen($(s).find("img[lazy-src]"), "img");
				lazyelem.detect();
				var r = $(s);
				r.find("a").each(function(u) {
					if (r.find("a").eq(u).attr("cptId")) {
						var t = r.find("a").eq(u).attr("cptId");
						if (t) {
							try {
								apsAdboardCptPvObj.aps_adboard_loadAdCptPv(t, index.cptTime)
							} catch (v) {}
						}
					}
				});
				lazyelem.listen($(s).find("[cms-name]"), "fn", function(t) {
					index.cmsBgDom.push(t);
					if (index.cmsBgFlag) {
						return
					}
					index.cmsBgFlag = true;
					setTimeout(function() {
						index.cmsBgFunc(index.cmsBgDom)
					}, 100)
				});
				cpmRequire($(s));
				lazyelem.detect()
			}
			p.each(function() {
				var u = $(this),
					t, r, s, v = u.attr("data-kg");
				if (u.hasClass("g-floor1")) {
					n = 8;
					t = u.index(".com-floor");
					s = "recdpllc"
				} else {
					if (u.hasClass("g-floor2")) {
						n = 7;
						t = u.parent(".com-floor").index(".com-floor");
						r = u.index();
						s = "recspllc"
					} else {
						if (u.hasClass("g-floor3")) {
							n = 4;
							t = u.parent(".com-floor").index(".com-floor");
							r = u.index();
							s = "recsanpllc"
						}
					}
				}
				if (!v) {
					m(this);
					return true
				}
				 
					
					var y = "https://tuijian.suning.com/recommend-portal/recommend/paramsBiz.jsonp?u=&c=&parameter=plhd&parameterCode=" + v + "&sceneIds=19-9&count=" + n;
                 
					$.ajax({
						url: y,
						dataType: "jsonp",
						timeout: 10000,
						jsonpCallback: "floorRec" + v,
						success: function(D) {
                          
							if (D.sugGoods[0]["resCode"] == "01" || D.sugGoods[0]["resCode"] == "03") {
								if (D.sugGoods[0]["skus"].length < n) {
									m(u)
								} else {
									B(D.sugGoods[0]["skus"])
								}
							} else {
								m(u)
							}
						},
						error: function() {
							m(u)
						}
					});

					function B(L) {
                     
						var I = u.find(".img-list").eq(0),
							G = u.find(".img-list").eq(1),
							F = u.find(".bottom-list"),
							H, J;
						var K;
						for (var E = 0; E < n; E++) {
							name = "index3_none_" + s;
							id = "baoguang_" + s;
							H = L[E].sugGoodsCode ? L[E].sugGoodsCode : "none";
							J = L[E].vendorId ? L[E].vendorId : "none";
							if (u.hasClass("g-floor1")) {
								if (E < 4) {
									K = I.find("li").eq(E)
								} else {
									K = G.find("li").eq(E - 4)
								}
								name += "_" + (t + 1) + "-" + (E + 1) + "_p_" + J + "_" + H + "_" + L[E].handwork;
								id += "_" + (t + 1) + "-" + (E + 1) + "_" + J + "_" + H + "_" + L[E].handwork;
							} else {
								if (u.hasClass("g-floor2")) {
									if (E < 4) {
										K = I.find("li").eq(E)
									} else {
										K = F.find("li").eq(E - 4)
									}
									name += "_" + (t + 1) + "-" + (E + 1 + r * 7) + "_p_" + J + "_" + H + "_" + L[E].handwork;
									id += "_" + (t + 1) + "-" + (E + 1 + r * 7) + "_" + J + "_" + H + "_" + L[E].handwork
								} 
                                else {
									if (E < 2) {
										K = I.find("li").eq(E)
									} else {
										K = F.find("li").eq(E - 2)
									}
									name += "_" + (t + 1) + "-" + (E + 1 + r * 4) + "_p_" + J + "_" + H + "_" + L[E].handwork;
									id += "_" + (t + 1) + "-" + (E + 1 + r * 4) + "_" + J + "_" + H + "_" + L[E].handwork
								}
							}
                          
							if (L[E].labelPic.indexOf("http:") == 0) {
								L[E].labelPic = L[E].labelPic.split("http:")[1]
							}
                          
							K.find("a").attr({
								href: L[E].jumpUrl,
								name: name,
								id: id
							}).end().find(".img-name").html(L[E].labelName).end().find(".img-desc").html(L[E].labelDesc).end().find("img").attr("lazy-src", L[E].labelPic);
							var D;
							if (u.hasClass("g-floor1")) {
								D = E + 1
							} else {
								if (u.hasClass("g-floor2")) {
									D = (E + 1 + r * 7)
								} else {
									D = (E + 1 + r * 4)
								}
							}
						}
						Util.baoguangFun("baoguang_" + s + "_" + (t + 1));
						u.find("li").show();
						lazyelem.listen($(q).find("img[lazy-src]"), "img");
						index.getwebp(q);
						lazyelem.detect()
					}
				
			})
		}
	})
};

index.isInScreen = function(b) {
	var a = b;
	if (a.length > 0) {
		return ($(window).scrollTop() + $(window).height() > a.offset().top) && a.offset().top + a.height() > $(window).scrollTop()
	}
};

 $(function() {
	lazyelem.listen();
	 index.banner();
     index.toutiaoloop();
     index.lazyFloor();
     
}); 
    
});


