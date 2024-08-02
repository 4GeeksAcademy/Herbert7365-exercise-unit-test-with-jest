// Import the function sum from the app.js file
const { sum } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

// fromEuroToDollar test
test("One euro should be 1.07 dollars", function() {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})

// fromDollarToYen test
test("One Dollar should be 146.261682242991 yenes", function() {
    // Import the function from app.js
    const { fromDollarToYen } = require('./app.js');

    // Use the function like its supposed to be used
    const yenes = fromDollarToYen(3.5);

    // If 1 dollar is 146.261682242991 yenes, then 3.5 dollars should be (3.5 * 146.261682242991)
    const expected = 3.5 * 146.261682242991; 
    
    // This is the comparison for the unit test
     expect(fromDollarToYen(3.5)).toBe(511.91588785046844); // 1 dollar is 146.261682242991 yenes, then 3.5 dollars should be = (3.5 * 146.261682242991)
})

// fromYenToPound test

test("One yen should be 0.0055591054313099 pounds", function() {
    // Import the function from app.js
    const { fromYenToPound } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromYenToPound(3.5);

    // If 1 yen is 1.07 0.0055591054313099 pounds, then 3.5 yenes should be (3.5 * 0.0055591054313099)
    const expected = 3.5 * 0.0055591054313099; 
    
    // This is the comparison for the unit test
     expect(fromYenToPound(3.5)).toBe(0.01945686900958465); // 1 yen is 0.0055591054313099 pounds, then 3.5 yenes should be = (3.5 * 0.0055591054313099)
})