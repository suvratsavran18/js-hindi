// console.log(2>1);
// console.log(2>=3);
// console.log(2==2);
// console.log(3<5);
// console.log(3<=3);
 
// let x = 4;
// x += 5;
// console.log(x)

// let y = 4;
// y -= 5;
// console.log(y)

// let z = 4;
// z *= 5;
// console.log(z)

console.log(null>0);
console.log(null==0);
console.log(null>=0);

// Note: The reason is that an equality == check  and comparisons > >= < <= work differently.
// Comparisons convert null to a number,tretaing it as 0 
// That's why (3) null>=0 is true and (1) null>0 is false.

console.log(undefined >=null);
console.log(undefined == null);
console.log(undefined>null);
  console.log(+undefined);
console.log(undefined==0);

// Note: Diferrence between === and == :-
// Strict Equality (===)
// The === operator compares two values for equality without performing any type coercion.
// It returns true only if both the value and the data type of the operands are identical.
// This provides a more predictable and reliable comparison.
 console.log(5 === "5");  
  // false (number and string are different types)
console.log(0 === false); 
// false (number and boolean are different types)
console.log(null === undefined); 
// false (null and undefined are different types)



// Loose Equality (==)
// The == operator compares two values for equality after performing type coercion if the operands are of different types.
// This means JavaScript attempts to convert one or both operands to a common type before the comparison.
// This can sometimes lead to unexpected results, as the type conversion might not always align with the developer's intent.
 console.log(5 == "5");  
  // true (string "5" is coerced to number 5)
console.log(0 == false);
 // true (false is coerced to number 0)
console.log(null == undefined);
 // true
// coerced mean convert