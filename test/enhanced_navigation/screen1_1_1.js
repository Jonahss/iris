iris.screen(function (self) {

	self.create = function() {
		var msg = "[create] " + self.id;
		iris.log(msg);
		window.ok(true, msg);
		window.navigations.push(msg);

		self.tmpl(iris.path.empty_tmpl);

	};

	self.awake = function () {
		var msg = "[awake] " + self.id;
		iris.log(msg);
		window.ok(true, msg);
		window.navigations.push(msg);
	};

	self.sleep = function () {
		var msg = "[sleep] " + self.id;
		iris.log(msg);
		window.ok(true, msg);
		window.navigations.push(msg);
	};

	self.canSleep = function () {
		var msg = "[canSleep] " + self.id;
		iris.log(msg);
		window.ok(true, msg);
		window.navigations.push(msg);
	};

	self.destroy = function () {
		var msg = "[destroy] " + self.id;
		iris.log(msg);
		window.ok(true, msg);
		window.navigations.push(msg);
	};

}, iris.path.screen1_1_1);