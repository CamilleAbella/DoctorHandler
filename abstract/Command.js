
/**
 * Create a new command
 *
 * @class
 */

module.exports = class Command {

    /**
     * The SubCommand constructor
     *
     * @param {Object}          options
     * @param {String|Array}    options.aliases     The aliases to call this command
     * @param {Function}        options.call        The callback that contains the operation
     * @param {?Array}          options.subs        The sub commands of this command
     * @param {?String}         options.name        The name of this command
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
        this.name = typeof options.name == "string" ? options.name : this.aliases[0]

        // If not name, error.
        if(!this.name)
            throw Error("Command.constructor.options.name | the argument must be a String or options.alias[0]")

    }

    /**
     * Call this._call( message, croppedContent ) if no sub is called.
     * Else, call sub.call( message, croppedContent ).
     *
     * @param {Message} message         The message that triggered the command
     * @param {?String} croppedContent  The contents of the message without the name of the command and the prefix
     */

    call( message, croppedContent ){
        // TODO:
    }

}