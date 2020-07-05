import WDIOReporter from '@wdio/reporter'

module.exports = class CustomReporter extends WDIOReporter {
    constructor(options) {
        options = Object.assign(options, { stdout: true })
        super(options)
    }

    onTestPass(test) {

        this.write(`Congratulations! Your test "${test.title}" passed 👏`)
    }
};