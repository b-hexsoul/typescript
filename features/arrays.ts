// always annotate if initializing a blank array
const carMakers: string[] = [];
const dates = [new Date(), new Date()];

const carsByMake = [['f150'], ['corolla'], ['camaro']];

// Why typed arrays?

// Help with inference when extracting values
const car = carMakers[0];
const mycar = carMakers.pop();

// Prevent incompatible values being added to array
carMakers.push(100);

// Help with 'map', 'forEach', 'reduce'
carMakers.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible - arrays can contain multiple types
const importantDates: (string | Date)[] = [new Date(), '2030-10-10'];

export = {};
