import React from 'react';
function Discount(instance) {
    var normalPrice = 8.0;

    var discounts = {
        2: 0.05,
        3: 0.10,
        4: 0.20,
        5: 0.25
    };

    this.hello = function () {
        console.log("Hello!");
    }

    //Test Value from example
    var currentOrder1 = {
        1: 2, //First Book x 2
        2: 2, //Second Book x 2
        3: 2, //Third Book x 2
        4: 1, //Fourth Book x 1            
        5: 1  //Fifth Book x 1
    };

    //Test Case
    var currentOrder2 = {
        1: 1,
    };

    //Test Case
    var currentOrder3 = {
        1: 2
    };

    //Test Case
    var currentOrder4 = {
        1: 1,
        2: 1
    };

    //Test Case
    var currentOrder5 = {
        1: 1,
        2: 1,
        3: 1
    };

    //Test Case
    var currentOrder6 = {
        1: 1,
        2: 1,
        3: 1,
        4: 1
    };

    // //Test Case
    var currentOrder7 = {
        1: 1,
        2: 1,
        3: 1,
        4: 1,
        5: 1
    };

    //Test Case
    var currentOrder8 = {
        1: 1,
        2: 1,
        3: 2
    };

    this.getDiscount = function (count) {
        if (discounts.hasOwnProperty(count)) {
            return discounts[count];
        }

        return 0.0;
    }

    this.getSubTotal = function (count) {
        var ret = 0;

        ret = count * (8 * (1 - this.getDiscount(count)))

        return ret;
    }
    this.GetOrderDeductor = function (theOrder) {
        var ret = {};
        for (var i = 0; i < theOrder.length; i++) {
            var key = theOrder[i]["titleIndex"];
            var value = theOrder[i]["count"];
            ret[key] = value;
        }
        return ret;
    }
    this.Checkout = function (theOrder, forUI) {
        var _this = this;
        console.log("CHECKING OUT ===============================")
        // var orderDeductor = JSON.parse(JSON.stringify(theOrder));        
        var orderDeductor =
            forUI
                ? this.GetOrderDeductor(theOrder)
                : JSON.parse(JSON.stringify(theOrder));
        var total = 0;
        var subTotal = 0;
        while (true) {
            var counter = 0;
            for (var k in orderDeductor) {
                if (orderDeductor.hasOwnProperty(k)) {
                    var val = orderDeductor[k];
                    if (val > 0) {
                        counter++;
                    }
                    else {
                        continue;
                    }
                    orderDeductor[k]--;
                }
            }

            subTotal = _this.getSubTotal(counter);
            total += subTotal;
            if (counter == 0) break;
            console.log(counter + "x\t" + subTotal + "\t");
        }
        total = Math.round(total * 100) / 100;
        console.log("------------------------");
        console.log(total);
        return total;
    }
    this.RunUnitTests = function () {
        this.Checkout(currentOrder1);
        this.Checkout(currentOrder2);
        this.Checkout(currentOrder3);
        this.Checkout(currentOrder4);
        this.Checkout(currentOrder5);
        this.Checkout(currentOrder6);
        this.Checkout(currentOrder7);
        this.Checkout(currentOrder8);
    }
};


export default Discount;
