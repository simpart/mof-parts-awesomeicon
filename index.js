/**
 * @file mofron-comp-aweicon/index.js
 * @brief fontawesome icon component
 * @attention it needs link tag that has a path to font-awesome
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');

mf.comp.AweIcon = class extends Text {
    /**
     * initialize component
     * 
     * @param (string) same as mofron-comp-text
     * @type private
     */
    constructor (po) {
        try {
            super();
            this.name("AweIcon");
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
            super.initDomConts('i');
            this.size("0.8rem");
            this.mainColor([220,220,220]);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * same as icon
     *
     * @param (string) icon simbol, class value [same as 'icon' parameter]
     * @return (string) icon simbol, class value
     * @type parameter
     */
    text (prm) {
        try { return this.icon(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * icon value
     *
     * @param (string) icon simbol, class value
     * @return (string) icon simbol, class value
     * @type parameter
     */
    icon (prm) {
        try {
           if (undefined === prm) {
               /* getter */
               return this.member('icon', 'string');
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
     * add link tag
     *
     * @param (string) css path for font-awesome
     * @return (string) css path for font-awesome
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
}
module.exports = mf.comp.AweIcon;
/* end of file */
