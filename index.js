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
    
    basePrefix (prm) {
        try { return this.member('basePrefix', 'string', prm, 'fas'); } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    icon (prm) {
        try {
           let ret = this.member('icon', 'string', prm);
           if (undefined === prm) {
               /* getter */
               return (null !== ret) ? this.basePrefix() + ' fa-' + ret : null;
           }
           /* setter */
           this.target().className(this.basePrefix() + ' fa-' + prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    path (pth) {
        try {
            if (undefined === pth) {
                /* getter */
                return (undefined === this.m_path) ? null : this.m_path;
            }
            /* setter */
            if ('string' !== (typeof pth)) {
                throw new Error('invalid parameter');
            }
            this.m_path = pth;
            if (false === mofron.comp.FontAwesome_link) {
                mofron.func.addHeadConts({
                    tag  : 'link',
                    attr : { 'rel'  : 'stylesheet',
                             'href' : pth }
                });
            }
            mofron.comp.FontAwesome_link = true;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
mf.comp.FontAwesome_link = false;
module.exports = mf.comp.FontAwesome;
