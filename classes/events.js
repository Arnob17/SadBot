class Events {
    isready (sad) {
        sad.on('ready', () => {
            console.log('ready');
        })
    }
    register (sad) {
        this.isready(sad);
    }
}

module.exports = Events;