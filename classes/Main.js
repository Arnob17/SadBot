const Events = require("./events.js");
const handler = require("../cmd_handler.js");
const events = new Events();
class Sad {
    constructor(token, sad) {
        this.token = token;

        this.sad = sad;
    }

    start() {
        handler(this.sad)
        events.register(this.sad)
        this.sad.login(this.token);
    }
}

module.exports = Sad;