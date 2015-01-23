/*globals define*/
define(function(require, exports, module) {
    // import dependencies
    var Engine = require('famous/core/Engine');
    var mainContext = Engine.createContext();
    mainContext.setPerspective(2000);

    var WishingStar = require('wishingStar/wishingStar');

    var wishingStar = new WishingStar();

    mainContext.add(wishingStar);

});
