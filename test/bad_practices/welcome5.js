
iris.screen(
    function (self) {
        self.create = function () {
            window.console.log("Welcome Screen Created");
            self.tmpl("test/bad_practices/welcome.html");

            self.screens("home_screen", [[
                "home", "test/bad_practices/home.js"
            ]]);
            window.ok(true, "Correct Format");
            window.start();
        };

    },
    "test/bad_practices/welcome5.js");