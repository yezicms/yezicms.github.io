!
function(cOe) {
    cOe.fn.theiaStickySidebar = function(egc) {
        function aEb(egc, aEb) {
            var gGf = QaP(egc, aEb);
            gGf || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), cOe(document).on("scroll." + egc.namespace,
            function(egc, aEb) {
                return function(gGf) {
                    var hdX = QaP(egc, aEb);
                    hdX && cOe(this).unbind(gGf)
                }
            } (egc, aEb)), cOe(window).on("resize." + egc.namespace,
            function(egc, aEb) {
                return function(gGf) {
                    var hdX = QaP(egc, aEb);
                    hdX && cOe(this).unbind(gGf)
                }
            } (egc, aEb)))
        }
        function QaP(egc, aEb) {
            return egc.initialized === !0 || !(cOe("body").width() < egc.minWidth) && (gGf(egc, aEb), !0)
        }
        function gGf(egc, aEb) {
            egc.initialized = !0;
            var QaP = cOe("#theia-sticky-sidebar-stylesheet-" + egc.namespace);
            0 === QaP.length && cOe("head").append(cOe('<style id="theia-sticky-sidebar-stylesheet-' + egc.namespace + '">.theiaStickySidebar:after {content: ""; display: table; clear: both;}</style>')),
            aEb.each(function() {
                function aEb() {
                    gGf.fixedScrollTop = 0,
                    gGf.sidebar.css({
                        "min-height": "1px"
                    }),
                    gGf.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }
                function QaP(egc) {
                    var aEb = egc.height();
                    return egc.children().each(function() {
                        aEb = Math.max(aEb, cOe(this).height())
                    }),
                    aEb
                }
                var gGf = {};
                if (gGf.sidebar = cOe(this), gGf.options = egc || {},
                gGf.container = cOe(gGf.options.containerSelector), 0 == gGf.container.length && (gGf.container = gGf.sidebar.parent()), gGf.sidebar.css({
                    position: gGf.options.defaultPosition,
                    overflow: "visible",
                    "-webkit-box-sizing": "border-box",
                    "-moz-box-sizing": "border-box",
                    "box-sizing": "border-box"
                }), gGf.stickySidebar = gGf.sidebar.find(".theiaStickySidebar"), 0 == gGf.stickySidebar.length) {
                    var dQe = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    gGf.sidebar.find("script").filter(function(cOe, egc) {
                        return 0 === egc.type.length || egc.type.match(dQe)
                    }).remove(),
                    gGf.stickySidebar = cOe("<div>").addClass("theiaStickySidebar").append(gGf.sidebar.children()),
                    gGf.sidebar.append(gGf.stickySidebar)
                }
                gGf.marginBottom = parseInt(gGf.sidebar.css("margin-bottom")),
                gGf.paddingTop = parseInt(gGf.sidebar.css("padding-top")),
                gGf.paddingBottom = parseInt(gGf.sidebar.css("padding-bottom"));
                var IgV = gGf.stickySidebar.offset().top,
                ece = gGf.stickySidebar.outerHeight();
                gGf.stickySidebar.css("padding-top", 1),
                gGf.stickySidebar.css("padding-bottom", 1),
                IgV -= gGf.stickySidebar.offset().top,
                ece = gGf.stickySidebar.outerHeight() - ece - IgV,
                0 == IgV ? (gGf.stickySidebar.css("padding-top", 0), gGf.stickySidebarPaddingTop = 0) : gGf.stickySidebarPaddingTop = 1,
                0 == ece ? (gGf.stickySidebar.css("padding-bottom", 0), gGf.stickySidebarPaddingBottom = 0) : gGf.stickySidebarPaddingBottom = 1,
                gGf.previousScrollTop = null,
                gGf.fixedScrollTop = 0,
                aEb(),
                gGf.onScroll = function(gGf) {
                    if (gGf.stickySidebar.is(":visible")) {
                        if (cOe("body").width() < gGf.options.minWidth) return void aEb();
                        if (gGf.options.disableOnResponsiveLayouts) {
                            var dQe = gGf.sidebar.outerWidth("none" == gGf.sidebar.css("float"));
                            if (dQe + 50 > gGf.container.width()) return void aEb()
                        }
                        var IgV = cOe(document).scrollTop(),
                        ece = "static";
                        if (IgV >= gGf.sidebar.offset().top + (gGf.paddingTop - gGf.options.additionalMarginTop)) {
                            var FeM, gJb = gGf.paddingTop + egc.additionalMarginTop,
                            MaO = gGf.paddingBottom + gGf.marginBottom + egc.additionalMarginBottom,
                            gPf = gGf.sidebar.offset().top,
                            NdV = gGf.sidebar.offset().top + QaP(gGf.container),
                            aIc = 0 + egc.additionalMarginTop,
                            hbe = gGf.stickySidebar.outerHeight() + gJb + MaO < cOe(window).height();
                            FeM = hbe ? aIc + gGf.stickySidebar.outerHeight() : cOe(window).height() - gGf.marginBottom - gGf.paddingBottom - egc.additionalMarginBottom;
                            var fNa = gPf - IgV + gGf.paddingTop,
                            RbJ = NdV - IgV - gGf.paddingBottom - gGf.marginBottom,
                            cOecOe = gGf.stickySidebar.offset().top - IgV,
                            egccOe = gGf.previousScrollTop - IgV;
                            "fixed" == gGf.stickySidebar.css("position") && "modern" == gGf.options.sidebarBehavior && (cOecOe += egccOe),
                            "stick-to-top" == gGf.options.sidebarBehavior && (cOecOe = egc.additionalMarginTop),
                            "stick-to-bottom" == gGf.options.sidebarBehavior && (cOecOe = FeM - gGf.stickySidebar.outerHeight()),
                            cOecOe = egccOe > 0 ? Math.min(cOecOe, aIc) : Math.max(cOecOe, FeM - gGf.stickySidebar.outerHeight()),
                            cOecOe = Math.max(cOecOe, fNa),
                            cOecOe = Math.min(cOecOe, RbJ - gGf.stickySidebar.outerHeight());
                            var aEbcOe = gGf.container.height() == gGf.stickySidebar.outerHeight();
                            ece = (aEbcOe || cOecOe != aIc) && (aEbcOe || cOecOe != FeM - gGf.stickySidebar.outerHeight()) ? IgV + cOecOe - gGf.sidebar.offset().top - gGf.paddingTop <= egc.additionalMarginTop ? "static": "absolute": "fixed"
                        }
                        if ("fixed" == ece) {
                            var QaPcOe = cOe(document).scrollLeft();
                            gGf.stickySidebar.css({
                                position: "fixed",
                                width: hdX(gGf.stickySidebar) + "px",
                                transform: "translateY(" + cOecOe + "px)",
                                left: gGf.sidebar.offset().left + parseInt(gGf.sidebar.css("padding-left")) - QaPcOe + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == ece) {
                            var gGfcOe = {};
                            "absolute" != gGf.stickySidebar.css("position") && (gGfcOe.position = "absolute", gGfcOe.transform = "translateY(" + (IgV + cOecOe - gGf.sidebar.offset().top - gGf.stickySidebarPaddingTop - gGf.stickySidebarPaddingBottom) + "px)", gGfcOe.top = "0px"),
                            gGfcOe.width = hdX(gGf.stickySidebar) + "px",
                            gGfcOe.left = "",
                            gGf.stickySidebar.css(gGfcOe)
                        } else "static" == ece && aEb();
                        "static" != ece && 1 == gGf.options.updateSidebarHeight && gGf.sidebar.css({
                            "min-height": gGf.stickySidebar.outerHeight() + gGf.stickySidebar.offset().top - gGf.sidebar.offset().top + gGf.paddingBottom
                        }),
                        gGf.previousScrollTop = IgV
                    }
                },
                gGf.onScroll(gGf),
                cOe(document).on("scroll." + gGf.options.namespace,
                function(cOe) {
                    return function() {
                        cOe.onScroll(cOe)
                    }
                } (gGf)),
                cOe(window).on("resize." + gGf.options.namespace,
                function(cOe) {
                    return function() {
                        cOe.stickySidebar.css({
                            position: "static"
                        }),
                        cOe.onScroll(cOe)
                    }
                } (gGf)),
                "undefined" != typeof ResizeSensor && new ResizeSensor(gGf.stickySidebar[0],
                function(cOe) {
                    return function() {
                        cOe.onScroll(cOe)
                    }
                } (gGf))
            })
        }
        function hdX(cOe) {
            var egc;
            try {
                egc = cOe[0].getBoundingClientRect().width
            } catch(cOe) {}
            return "undefined" == typeof egc && (egc = cOe.width()),
            egc
        }
        var dQe = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return egc = cOe.extend(dQe, egc),
        egc.additionalMarginTop = parseInt(egc.additionalMarginTop) || 0,
        egc.additionalMarginBottom = parseInt(egc.additionalMarginBottom) || 0,
        aEb(egc, this),
        this
    }
} (jQuery);

$(document).ready(function() {
	$(".aside").theiaStickySidebar({
		additionalMarginTop: 80
	})
});
((function() {
    var callbacks = [],
        timeLimit = 50,
        open = false;
    //setInterval(loop, 1);
    return {
        addListener: function(fn) {
            callbacks.push(fn);
        },
        cancleListenr: function(fn) {
            callbacks = callbacks.filter(function(v) {
                return v !== fn;
            });
        }
    }
    //function loop() {
//        var startTime = new Date();
//        debugger;
//        if (new Date() - startTime > timeLimit) {
//            if (!open) {
//                callbacks.forEach(function(fn) {
//                    fn.call(null);
//                });
//            }
//            open = true;
//            window.stop();
//            alert('浏览器不支持！');
//            window.location.reload();
//        } else {
//            open = false;
//        }
//    }
})()).addListener(function() {
    window.location.reload();
});