/// <reference path="types/clippy.d.ts" />

class ClippyController {
    private agent: clippy.IAgent;
    private timerIntervalId : number;

    constructor() {
        clippy.BASE_PATH = "agents/";
        clippy.load("Clippy", agent => {
            this.agent = agent;
            this.agentLoaded();
        });
    }

    /**
     * Handler that performs the necessary operations after the agent has been loaded
     */
    private agentLoaded() {
        this.createIdleTimer();
        this.agent.show();
        this.agent.speak("Clippy is back!");
    }

    /**
     * Creates a timer that plays random animations after the timeout without action has been elapsed
     */
    private createIdleTimer() {
        var randomTimeout = this.getRandomNumber(10, 120);
        this.timerIntervalId = window.setTimeout(() => {
            this.agent.animate();
            this.createIdleTimer();
        }, randomTimeout * 1000);
    }

    private getRandomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}

//Invoke controller
(() => { 
    var clippyController = new ClippyController();
})();