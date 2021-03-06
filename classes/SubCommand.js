
const Command = require("../abstract/Command")

/**
 * Create a new sub command
 *
 * @extends Command
 * @class
 */

module.exports = class SubCommand extends Command {

    /**
     * The OwnCommand constructor
     *
     * @param {Object}          options
     * @param {String|Array}    options.aliases     The aliases to call this command
     * @param {Function}        options.call        The callback that contains the operation : callback( message, cropedContent )
     * @param {?Array}          options.subs        The sub commands of this command
     * @param {?String}         options.name        The name of this command
     * @param {?Number}         options.cooldown    The automatical cooldown of this command
     */

    constructor( options ){

        // Call SubCommand constructor
        super( options )

        // Check & convert sub commands
        this.subs = this.subs.map(sub => new SubCommand(sub))
    }
}