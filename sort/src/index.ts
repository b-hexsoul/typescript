import { NumbersCollection } from "./NumbersCollection"
import BubbleSort from "./BubbleSort"

const collection = new NumbersCollection([10,3,-5,0])
const sorter = new BubbleSort(collection)
sorter.sort()
console.log(sorter.collection)