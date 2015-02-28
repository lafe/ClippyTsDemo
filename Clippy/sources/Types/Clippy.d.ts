// Type definitions for Clippy.js
// Project: https://www.smore.com/clippy-js, https://github.com/smore-inc/clippy.js
// Definitions by: Lars Fernhomberg <https://github.com/lafe>
// Definitions: https://github.com/lafe/ClippyTsDemo

declare module clippy {
    /**
     * Stores the base location of the Agents (trailing slash is required)
     */ 
    var BASE_PATH: string;

    interface IAgent {
        /**
         * Shows the agent
         */
        show();

        /**
         * Plays a given animation
         *
         * @param animationName The name of the animation to be played
         */
        Play(animationName: string);


    }

    /**
     * Loads the Agent with the given agent name
     *
     * @param agentName The name of the Agent as definied in the correspondening agent.js (e.g. for the default Clippy, it would be "Clippy")
     * @param successCallback Returns the loaded agent if it could be loaded successfully
     * @param failureCallback Signals a failure while loading the agent
     */
    function load(agentName: string, successCallback: (agent: IAgent) => void, failureCallback?: () => void);
} 