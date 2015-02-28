/// <reference path="types/clippy.d.ts" />

class ClippyController {
    private agent: clippy.IAgent;

    constructor() {
        clippy.BASE_PATH = "agents/";
        clippy.load("Clippy", agent => {
            this.agent = agent;
            this.agentLoaded();
        });
    }

    agentLoaded() {
        this.agent.show();
        this.agent.Play("Searching");
    }
}

//Invoke controller
(() => { 
    var clippyController = new ClippyController();
})();