
const { Collection } = require("discord.js")
const commands = new Collection()

/**
 * Create a new command
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
     * @param {?Number}         options.cooldown    The automatical cooldown of this command
     */

    constructor( options ){
        
        // Call SubCommand constructor
        super( options )

        // Add root command to command list (for help menu command)
        commands.set( this.name, this )
    }

}

/**
 * Create a new sub-command
 * @class
 */

class SubCommand {

    /**
     * The SubCommand constructor
     * 
     * @param {Object}          options 
     * @param {String|Array}    options.aliases     The aliases to call this command
     * @param {Function}        options.call        The callback that contains the operation
     * @param {?Array}          options.subs        The sub commands of this command
     * @param {?Number}         options.cooldown    The automatical cooldown of this command
     */

    constructor(options){

        // Mandatory arguments
        if(typeof options.aliases == "string"){
            this.aliases = [options.aliases]
        }else if(Array.isArray(options.aliases)){
            this.aliases = options.aliases
        }else{
            throw Error('Command.constructor.options.aliases | the argument must be an Array or a String')
        }
        if(
            typeof options.call == "function" || 
            typeof options.call == "asyncFunction"
        ){
            this._call = options.call
        }else{
            throw Error("Command.constructor.options.call | the argument must be a Function or an AsyncFunction")
        }

        // Optional arguments
        this.subs = Array.isArray(options.subs) ? options.subs : []
        this.cooldown = !isNaN(options.cooldown) ? options.cooldown : 0

        // Aliases
        this.name = this.aliases[0]

        // Check & convert sub commands
        this.subs = this.subs.map(sub => new SubCommand(sub))

    }

    /**
     * Call this._call( message, cropedContent ) if no sub is called.
     * Else, call sub.call( message, cropedContent ).
     * 
     * @param {Message} message         The message that triggered the command
     * @param {?String} cropedContent    The contents of the message without the name of the command and the prefix
     */

    call( message, cropedContent ){
        // TODO:
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