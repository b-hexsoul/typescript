import { NumbersCollection } from "./NumbersCollection"
import BubbleSort from "./BubbleSort"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbers = new NumbersCollection([10,3,-5,0])
const sorter = new BubbleSort(numbers)
sorter.sort()
console.log(sorter.collection)

const characters = new CharactersCollection('branDoN')
const sorter2 = new BubbleSort(characters)
sorter2.sort()
console.log(sorter2.collection);

const list = new LinkedList()
list.add(4)
list.add(44)
list.add(43)
list.add(400)
list.add(124)
list.add(344)
list.print()
const sorter3 = new BubbleSort(list);
sorter3.sort()
console.log(sorter3.collection)
list.print()
