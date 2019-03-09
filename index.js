/**
 * @file fontawesome/index.js
 * @brief fontawesome icon component
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');

mf.comp.FontAwesome = class extends Text {
    
    constructor (po) {
        try {
            super();
            this.name('FontAwesome');
            this.prmMap('icon', 'path');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts() {
        try { super.initDomConts('i'); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    text (prm) {
        try { return this.icon(prm); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
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
module.exports = mf.comp.FontAwesome;
