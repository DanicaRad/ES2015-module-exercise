import React from 'react';
import { choice, remove } from './helpers.js';
import foods from './foods.js';

const fruit = choice(foods);
const removed = remove(fruit, foods);
console.log(`I'd like one ${fruit}, please.`);
console.log(`Here you go: ${fruit}.`)
console.log(`Delicious! May I have another?`);
console.log(`I'm sorry, we're all out. We have ${foods.length} left.`);
