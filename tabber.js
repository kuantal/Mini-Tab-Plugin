/// MINI TAB PLUGIN
// @quantal
// ilker YILMAZ
/* USAGE :  $("selector).ihtabs();

 <div id="adaylar">
     <ul id="mBtns">
         <li>Tab 1</li>
         <li>Tab 2</li>
     </ul>

     <ul id="mTabs">
         <li class="visibleElement">Tab Content 1</li>
         <li>Tab Content 2</li>
     </ul>
 </div>
 */

(function ($) {

    jQuery.fn.iytabs = function (options) {
        //Varsayılan Ayarlar
        var defaults = {
            target: this, // Target Element
            actCls: "actTabCls", // Active tab Class
            tabsBtn: "#mBtns",
            tabClass: "#mTabs", // Tabs Id Or Class
            actSekmeCls: "visibleElement" // Active Tab visibil Class
        };

        var settings = $.extend({}, defaults, options);
        var tabsBtn = $(settings.target).children(settings.tabsBtn).children("li");
        var tabs = $(settings.target).children(settings.tabClass).children("li");

        tabsBtn.click(function () {
            tabsBtn.removeClass("actTabCls");
            $(this).addClass(settings.actCls);
            tabs.removeClass(settings.actSekmeCls).eq($(this).index()).addClass(settings.actSekmeCls);
        });
    }

})(jQuery);