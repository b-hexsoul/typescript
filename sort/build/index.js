"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var NumbersCollection_1 = require("./NumbersCollection");
var BubbleSort_1 = __importDefault(require("./BubbleSort"));
var collection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var sorter = new BubbleSort_1.default(collection);
sorter.sort();
console.log(sorter.collection);
