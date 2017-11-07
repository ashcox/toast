(function($) {


    $.fn.toast = function(opts) {

        var settings = $.extend({
            action: "show",
            content: "Hi, I'm a toast!",
            delay: 5000,    
            id: "jquery-toast",
            position: "bottom-right",
            type: "log"            
        }, opts);



        // Show a toast
        if (settings.action == "show") {
            
            var tElement;
            var tContent;
            

            // Remove current toast if already exists, as it will be replaced
            if ($('div.t-element#'+settings.id).length > 0) {
                $("div.t-element#"+settings.id).remove();
            }


            tElement = $(document.createElement("div"));
            tElement.addClass("t-element")
                    .attr("id", settings.id)
                    .attr("data-t-delay", settings.delay);
            tContent = $(document.createElement("div"));
            tContent.addClass("t-content");


            // Configure toast with passed options (or defaults)
            tElement.addClass(settings.position);      // Position (bottom-right, bottom-left)
            tElement.addClass(settings.type);          // Type (error, warning, notify, log)


            // Update the HTML
            tContent.html(settings.content);           // String or HTML
            tElement.html(tContent);   

            // Append the toast to the body
            $("body").append(tElement);
            tElement.show();

            // Determine the current number of toasts, and move each one up if more than one
            if ($(".t-element").length > 0) reorder();

            // If there's a delay, set a timeout to remove it after the given tiome has lapsed.
            if (settings.delay > 0) {
                setTimeout(function() {
                    tElement.addClass("t-remove");
                    remove(tElement);
                }, settings.delay);
            }

        }


        // Re-order the toasts
        if (settings.action == 'reorder') {
            reorder();
        }



        // Remove toasts
        if (settings.action == 'remove') {
            remove(settings.id);
        }

    };


    // Re-order the toasts based on the order they came in - bottom newest, top oldest
    function reorder() {
        var fromBottom;
        var tElements = $($("div.t-element").get().reverse());
            tElements.each(function(index, element) {
                if (!fromBottom) fromBottom = $(element).outerHeight();
                $(element).css("bottom", fromBottom + "px");
                fromBottom += $(element).outerHeight() + 10;
            });

    };




    // Remove toasts that have a class of removed
    function remove(id) {

        // Toast hasn't been specified - therefore check for any .t-remove
        if (!id) {
            var tElements = $("div.t-element");
            tElements.each(function(index, element) {
                var tDelay = $(element).attr("data-t-delay");
                if (tDelay > 0 && $(element).hasClass("t-remove")) {
                    $(element).hide(0, function() {
                        $(element).remove();
                        reorder();
                    });
                }
            });            
        }

        // Toast element HAS been specified, so remove that
        // Argument id can be either an object or string
        else {
            var tElement = (typeof id === "object")
                         ? id
                         : (typeof id === "string")
                         ? $("div.t-element#"+id)
                         : undefined;
                tElement.hide(0, function() {
                    tElement.remove();
                    reorder();
                });
        }

    }


}(jQuery));
