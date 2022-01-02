class Match {

    /**
     * @constructor 
     * @param {(value:string|any[]|Object) => boolean} value 
     */
    constructor(value) {
        this.internal = value
    }

    /**
     * Create a match from t
     * @param {string|any[]} t 
     * @param {'include'|'equal'} type
     */
    static of(t, type='equal') {
        if(type=='include') {
            return new Match((value) => value.includes(t))
        }
        else if(type == 'equal') {
            return new Match((value) => value == t)
        }

        return new Match((value) => false)
    }
}

/**
 * 
 * @param {string|any[]} rep 
 * @param {any} value
 * @param {any} value2
 */
function replacer(rep, value, value2, matcher) {
    
    // call the string replacer if rep is a string
    if(typeof rep === 'string') {
        return stringReplacer(rep, value, value2)
    }
    // check for array
    else if(Array.isArray(rep)) {
        return arrayReplacer(rep, value, value2)
    }
    // check for object after Array check because an array is an object
    else if(typeof rep === 'object') {

    }
}

/**
 * 
 * @param {string} rep 
 * @param {any} value
 * @param {any} value2
 */
function stringReplacer(rep, value, value2) {
    // yes i'm not using rep.replace(value, value2)
    return rep.split(value).join(value2)
}

/**
 * 
 * @param {any[]} rep 
 * @param {any} value
 * @param {any} value2
 */
function arrayReplacer(rep, value, value2) {
    for(let i = 0; i<rep.length; i++) {
        if(rep[i] == value) {
            rep[i] = value2
        }
    }
    return null
}

/**
 * 
 * @param {Object} rep 
 * @param {any} value
 * @param {any} value2
 */
function objectReplacer(rep, value, value2) {

}

module.exports = replacer