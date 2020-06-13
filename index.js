/**
 * @file mofron-comp-aweicon/index.js
 * @brief component for fontawesome icon
 * @license MIT
 */
const Text = require('mofron-comp-text');
const Link = require('mofron-event-link');

module.exports = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) icon parameter
     *                dict: component option
     * @short icon,path
     * @type private
     */
    constructor (p1) {
        try {
            super();
            this.name('AweIcon');
            this.shortForm('icon');
            
            this.confmng().add("icon", { type: "string" });
            
	    if (0 < arguments.length) {
                this.config(p1);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }

    /**
     * initialize dom contents
     * 
     * @type private
     */
    initDomConts() {
        try {
	    super.initDomConts();
	    this.style(
	        { 'font-family' : null },
		{ lock :true }
	    );
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * icon config
     * 
     * @param (string) icon config
     * @return (string) icon config
     * @type parameter
     */
    text (prm) {
        try {
	    return this.icon(prm);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * awesome icon config
     * 
     * @param (string) icon config
     * @return (string) icon config
     * @type parameter
     */
    icon (prm) {
        try {
            if (undefined !== prm) {
                this.childDom().class(prm);
	    }
	    return this.confmng("icon", prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * link path
     * 
     * @param (string) link path 
     * @param (boolean) true: open link with new tab
     *                  false: jump to link
     * @type parameter
     */
    link (prm, tab) {
        try {
	    this.event(new Link(prm, tab));
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
/* end of file */
