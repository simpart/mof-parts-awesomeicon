/**
 * @file mofron-comp-aweicon/index.js
 * @brief awesome icon component
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');
const Link = require('mofron-event-link');

mf.comp.AweIcon = class extends Text {
    /**
     * initialize component
     * 
     * @param (mixed) icon parameter
     *                object: component option
     * @param (prm) path parameter
     * @pmap icon,path
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name('AweIcon');
            this.prmMap('icon', 'path');
            this.prmOpt(po);
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
		{ locked :true }
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
        try { return this.icon(prm); } catch (e) {
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
           if (undefined === prm) {
               /* getter */
               return this.member('icon');
           }
           /* setter */
           this.target().className(prm, (null !== this.icon()) ? true : false);
           this.member('icon', 'string', prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * icon path
     * 
     * @param (string) icon path
     * @return (string) icon path
     * @type parameter
     */
    path (prm) {
        try {
            let ret = this.member('path', 'string', prm);
            if (undefined !== prm) {
                mofron.func.addHeadConts({
                    tag  : 'link',
                    attr : { 'rel'  : 'stylesheet',
                             'href' : pth }
                });
            }
            return this.member('path', 'string', prm);
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
     * @return (array) [link path, tab flag]
     * @type parameter
     */
    link (prm, tab) {
        try {
	    let link = this.event(["Link", "FontAwesome"]);
            if (undefined === prm) {
                /* getter */
		return (null === link) ? null : link.url();
	    }
	    /* setter */
	    if (null === link) {
	        link = new Link({ tag: "FontAwesome" });
                this.event(link);
	    }
	    link.url(prm, tab);
	} catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.AweIcon;
/* end of file */
