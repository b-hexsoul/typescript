import {Sorter} from "./Sorter";

export class NumbersCollection extends Sorter{
  constructor(public data: number[]) {
    super();
  }

  // with keyword get you do not have to call it as method
  get length(): number {
    return this.data.length
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex]
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rightIndex]
    this.data[rightIndex] = leftHand
  }
}