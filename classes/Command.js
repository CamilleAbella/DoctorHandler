
const { Collection } = require("discord.js")
const SubCommand = require("./SubCommand.js")
const commands = new Collection()

/**
 * Create a new command
 * 
 * @extends SubCommand
 * @class
 */

module.exports = class Command extends SubCommand {

    /**
     * The Command constructor
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

        // Add root command to command list (for help menu command)
        commands.set( this.name, this )
    }

    /**
     * Returns a Discord.Collection of commands
     * 
     * @static
     * @returns {Collection} Commands Discord.Collection
     */

    static collection(){
        return commands
    }

    /**
     * Returns an Array of commands
     * 
     * @static
     * @returns {Array} Commands Array
     */

    static array(){
        return commands.array()
    }
}