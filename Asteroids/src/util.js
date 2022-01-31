const Util = {
    inherits(childClass, parentClass) {
        //...
        // childClass.prototype = Object.create(parentClass.prototype);
        // childClass.prototype.constructor = childClass;

        function Surrogate(){};
        Surrogate.prototype = parentClass.prototype;
        childClass.prototype = new Surrogate();
        childClass.prototype.constructor = childClass;
    }
};

module.exports = Util;