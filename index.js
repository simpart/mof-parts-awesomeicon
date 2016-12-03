/**
 * @file BandText.js
 */
mofron.parts.AwesomeIcon = class extends mofron.parts.Text {
    constructor (ico) {
        try {
 console.log(ico);
            super(ico);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    initContents(vd, prm) {
        try {
            super.initContents(vd, '');
            var tgt = this.getTarget();
            tgt.chgTag('i');
            tgt.addClname('fa ' + prm);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
