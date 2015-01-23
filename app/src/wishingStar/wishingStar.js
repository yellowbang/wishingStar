define(function(require, exports, module) {

    var Engine = require('famous/core/Engine');
    var View = require('famous/core/View');
    var Modifier = require('famous/core/Modifier');
    var Transform = require('famous/core/Transform');
    var ImageSurface = require('famous/surfaces/ImageSurface');

    function WishingStar(){

        View.call(this);
        _init.call(this);

    }

    WishingStar.prototype = Object.create(View.prototype);
    WishingStar.prototype.constructor = WishingStar;
    
    function _init(){
        var logo = new ImageSurface({
            size: [200, 200],
            content: 'http://code.famo.us/assets/famous_logo.png',
            classes: ['double-sided']
        });

        var initialTime = Date.now();
        var centerSpinModifier = new Modifier({
            origin: [0.5, 0.5],
            align: [0.5, 0.5],
            transform : function () {
                return Transform.rotateY(.002 * (Date.now() - initialTime));
            }
        });

        this.add(centerSpinModifier).add(logo);
    }

    module.exports = WishingStar;

});
