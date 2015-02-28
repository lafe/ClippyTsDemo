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
    /**
     * Handler that performs the necessary operations after the agent has been loaded
     */
    ClippyController.prototype.agentLoaded = function () {
        this.createIdleTimer();
        this.agent.show();
        this.agent.speak("Clippy is back!");
    };
    /**
     * Creates a timer that plays random animations after the timeout without action has been elapsed
     */
    ClippyController.prototype.createIdleTimer = function () {
        var _this = this;
        var randomTimeout = this.getRandomNumber(10, 120);
        this.timerIntervalId = window.setTimeout(function () {
            _this.agent.animate();
            _this.createIdleTimer();
        }, randomTimeout * 1000);
    };
    ClippyController.prototype.getRandomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    return ClippyController;
})();
//Invoke controller
(function () {
    var clippyController = new ClippyController();
})();
//# sourceMappingURL=ClippyController.js.map