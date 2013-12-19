
iris.screen(
    function (self) {
        self.create = function () {
            iris.log("Welcome Screen Created");

            self.tmpl("test/bad_practices/welcome.html");

            self.screens("home_screen", [[
                "home", "test/bad_practices/home.js"
            ]]);

            window.throws(function () {
                self.screens("help_screen", [
                    ["help", "test/bad_practices/help.js"]
                ]);
            }, "Thrown an exception when multiple calls happen");
            window.start();
        };

    },
    iris.path.welcome_screens_calls);