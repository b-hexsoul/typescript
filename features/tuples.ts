const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

type Drink = [string, boolean, number];

// always a specific order!
const pepsi: Drink = ['brown', true, 40];
const sprite: Drink = ['clear', true, 40];
