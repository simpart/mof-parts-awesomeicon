/**
 * @file BandText.js
 */

mofron.comp.FontAwesome = class extends mofron.comp.Text {
    
    constructor (prm,opt) {
        try {
            super(prm);
            this.name('FontAwesome');
            
            this.m_path = null;
            
            if (null !== opt) {
                this.option(opt);
            }
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
            this.target().addClname('fa ' + prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    path (pth) {
        try {
            if (undefined === pth) {
                return this.m_path;
            }
            if ('string' !== (typeof pth)) {
                throw new Error('invalid parameter');
            }
            this.m_path = pth;
            var link = new mofron.util.HeadConts('link');
            link.setAttr('rel'  , 'stylesheet');
            link.setAttr('href' , pth);
            link.pushTag();
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
