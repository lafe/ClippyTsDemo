/// <reference path="types/clippy.d.ts" />
var ClippyController = (function () {
    function ClippyController() {
        var _this = this;
        clippy.BASE_PATH = "agents/";
        clippy.load("Clippy", function (agent) {
            _this.agent = agent;
            _this.agentLoaded();
        });
    }
    ClippyController.prototype.agentLoaded = function () {
        this.agent.show();
        this.agent.Play("Searching");
    };
    return ClippyController;
})();
//Invoke controller
(function () {
    var clippyController = new ClippyController();
})();
//# sourceMappingURL=ClippyController.js.map