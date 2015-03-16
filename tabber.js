/// MINI TAB PLUGIN
// @quantal
/* USAGE :  $("selector).ihtabs();

 <div id="adaylar">
 <ul id="mBtns">
 <li>GÜNCEL</li>
 <li>BELDELERE GÖRE</li>
 </ul>

 <ul id="mTabs">
 <li class="visibleElement">GÜNCEL TAB</li>
 <li>BELDELERE GÖRE TAB</li>
 </ul>
 </div>
 */

(function ($) {

    jQuery.fn.ihtabs = function (options) {
        //Varsayılan Ayarlar
        var defaults = {
            target: this, // Hedef Tab Grubu
            actCls: "actTabCls", // Aktif tab için Class
            tabsBtn: "#mBtns",
            tabClass: "#mTabs", // Tablar icin classlar
            actSekmeCls: "visibleElement" // Aktif tab için Class
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