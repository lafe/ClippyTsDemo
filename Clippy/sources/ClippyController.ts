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
        this.agent.animate();
        var animations = this.agent.animations();
        alert(animations);
        this.agent.play(animations[2]);
        this.agent.speak("Hello World");
        
    }
}

//Invoke controller
(() => { 
    var clippyController = new ClippyController();
})();