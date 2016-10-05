function TimeSpan(seed) {
    //"00:00:00"
    var self = this;

    self.addSecond = function () {
        self.second++;
        if (self.second >= 60) {
            self.second = 0;
            self.minute++;
        }

        if (self.minute >= 60) {
            self.minute = 0;
            self.hour++;
        }
    };

    self.getMinutes = function () {
        return self.minute;
    };

    self.getSeconds = function () {
        return self.second;
    };

    self.getHours = function () {
        return self.hour;
    };

    self.toString = function () {
        return ("0" + self.hour).slice(-2) + ":" + ("0" + self.minute).slice(-2) + ":" + ("0" + self.second).slice(-2);
    };

    self.init = function () {
        if (!/[0-9][0-9]:[0-5][0-9]:[0-5][0-9]/.test(seed)) {
            seed = "00:00:00";
        }

        self.hour = seed.substr(0, 2);
        self.minute = seed.substr(3, 2);
        self.second = seed.substr(6, 2);
    };
    self.init();
}