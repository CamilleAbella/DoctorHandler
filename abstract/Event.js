
/**
 * Create a new event
 * 
 * @class
 */

module.exports = class Event {

    constructor( options ){

        // Mandatory arguments
        if(typeof options.name == "string" && !!options.name){
            this.name = options.name
        }else{
            throw Error("Event.constructor.options.name | the argument must be a filed String")
        }
        if(
            typeof options.call == "function" || 
            typeof options.call == "asyncFunction"
        ){
            this._call = options.call
        }else{
            throw Error("Event.constructor.options.call | the argument must be a Function or an AsyncFunction")
        }

        // Optional arguments
        this.once = !!options.once
    }

}