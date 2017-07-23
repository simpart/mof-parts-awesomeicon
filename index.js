/**
 * @file fontawesome/index.js
 */
require('mofron-comp-text');

mofron.comp.FontAwesome = class extends mofron.comp.Text {
    
    constructor (prm_opt) {
        try {
            super();
            this.name('FontAwesome');
            this.prmOpt(prm_opt);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initDomConts(prm) {
        try {
            if ('string' !== (typeof prm)) {
                throw new Error('invalid parameter');
            }
            super.initDomConts('');
            this.target().tag('i');
            this.target().className('fa ' + 'fa-' + prm)
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
