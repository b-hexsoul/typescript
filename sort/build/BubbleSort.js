"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var BubbleSort = /** @class */ (function () {
    // collection: number[];
    // constructor(collection: number[]) {
    //   this.collection = collection;
    // }
    function BubbleSort(collection) {
        this.collection = collection;
    }
    BubbleSort.prototype.sort = function () {
        var length = this.collection.length;
        for (var i = 0; i < length; i++) {
            for (var j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
    };
    return BubbleSort;
}());
exports.default = BubbleSort;
