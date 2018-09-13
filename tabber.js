/**
 * @quantal
 * ilker YILMAZ
 * Miny Tab Plugin
 * 2018
 */
/* USAGE :  $(".pager-block").tabs({
            actCls: "active",
            tabsBtn: "#pager-tab",
            tabClass: "#pager-contents",
            actSekmeCls: "active",
            nav:true, 
            onchange : function (settings) {
                 $('html, body').animate({ scrollTop: $(".pager-block").offset().top -60 }, 300);
            }
        }); 
 <div class="pager-block">
     <ul id="pager-tab">
         <li class="active">Tab 1</li>
         <li>Tab 2</li>
     </ul>
     <div class="pager-container">
          <a href="#" class="previus-page">&#171;</a>
         <ul id="pager-contents">
             <li class="active">Tab Content 1</li>
             <li>Tab Content 2</li>
         </ul>
         <a href="#" class="next-page">&#187;</a>
      </div>
 </div>
 */

(function ($) {

    jQuery.fn.tabs = function (o) {
        // Default Settings
        var d = {
            target: this, // Target Element
            actCls: "actTabCls", // Active tab Class
            tabsBtn: "#mBtns",
            tabClass: "#mTabs", // Tabs Id Or Class,
            actSekmeCls: "visibleElement", // Active Tab visibil Class
            nav: false,
            navPreviusClass: ".previus-page",
            navNextClass: ".next-page",
            onchange: function () {}, // Callback
            onPrevius: function () {},
            onNext: function () {}
        };
        // change default option with user 
        var s = $.extend({}, d, o);
        var tabsBtn = $(s.target)
            .find(s.tabsBtn)
            .children("li");
        var tabs    = $(s.target)
            .find(s.tabClass)
            .children("li");
        // Navigate with tabs buttons
        tabsBtn.click(function () {
            tabsBtn.removeClass(s.actCls);
            $(this).addClass(s.actCls);
            tabs.removeClass(s.actSekmeCls)
                .eq($(this)
                    .index())
                .addClass(s.actSekmeCls);
            s.onchange(s);
        });
        // Navigate with arrows
        if (s.nav) {
            $(document).on('click', 
                                    s.target.selector + " " + s.navPreviusClass + ", " +
                                    s.target.selector + " " +  s.navNextClass,
                                    function (e) {
                e.preventDefault();
                var side = $(this).hasClass(s.navPreviusClass.replace(".", "")) ? -1 : 1;
                navToTab(side);
                if (side) {
                    s.onNext(s);
                } else {
                    s.onPrevius(s);
                }
            });
        }
        function navToTab (side) {
            var index = $(s.target).find(s.tabsBtn + " ." + s.actCls).index() + side;

            if (index < 0) index = $(s.target).find(s.tabsBtn + " li").length - 1;
            if (index > $(s.target).find(s.tabsBtn + " li").length - 1) index = 0;

            tabsBtn
                .removeClass(s.actCls)
                .eq(index)
                .addClass(s.actCls);
            
            tabs
                .removeClass(s.actSekmeCls)
                .eq(index)
                .addClass(s.actSekmeCls);
            
            s.onchange(s);
        }
    }
})(jQuery);
