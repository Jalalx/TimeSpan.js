(function ($) {
    $.fn.timeSpan = function () {
        var self = this;
        self.isArray = false;
        if(Array.isArray(this)){
            self.isArray = true;
        }

        
        self.init = function(container){
            var seed = $(container).text();
            var ts = new TimeSpan(seed);
            ts.addSecond();
            $(container).text(ts.toString());
        };

        setInterval(function () {
            if(self.isArray){
                $(self).each(function(i, e){
                    self.init(e);
                });
            }else{
                self.init(self);
            }
        }, 1000);

        return self;
    };
})(jQuery);