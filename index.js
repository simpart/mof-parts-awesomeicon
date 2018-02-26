/**
 * @file fontawesome/index.js
 */
require('mofron-comp-text');

mofron.comp.FontAwesome = class extends mofron.comp.Text {
    
    constructor (po) {
        try {
            super();
            this.name('FontAwesome');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            super.initDomConts('');
            this.target().tag('i');
            if (null !== prm) {
                this.icon(prm);
            }
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    basePrefix (val) {
        try {
            if (undefined === val) {
                /* getter */
                return (undefined === this.m_basepfx) ? 'fa' : this.m_basepfx;
            }
            /* setter */
            if ('string' !== typeof val) {
                throw new Error('invalid parameter');
            }
            this.m_basepfx = val;
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    icon (nm) {
        try {
           if (undefined === nm) {
               /* getter */
               return (undefined === this.m_icon_nm) ? null : this.m_icon_nm;
           }
           /* setter */
           if ('string' !== typeof nm) {
               throw new Error('invalid parameter');
           }
           this.target().className(this.basePrefix() + ' fa-' + nm);
           this.m_icon_nm = nm;
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
mofron.comp.FontAwesome_link = false;
module.exports = mofron.comp.FontAwesome;
