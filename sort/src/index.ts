import { NumbersCollection } from "./NumbersCollection"
import { CharactersCollection } from "./CharactersCollection"
import { LinkedList } from "./LinkedList"

const numbersCollection = new NumbersCollection([10,3,-5,0])
numbersCollection.bubbleSort()
console.log(numbersCollection)

const charactersCollection = new CharactersCollection('branDoN')
charactersCollection.bubbleSort()
console.log(charactersCollection);

const list = new LinkedList()
list.add(4)
list.add(44)
list.add(43)
list.add(400)
list.add(124)
list.add(344)
list.print()
list.bubbleSort()
list.print()
