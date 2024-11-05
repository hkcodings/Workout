//Store Multiple Values in one Variable using JavaScript Arrays
const sandwich = ["peanut butter","jelly","bread"];
console.log(sandwich);


//Nest one Array within Another Array
const teams = [["Bulls", 23], ["White Sox", 45]];
console.log(teams);


//Access Array Data with Indexes
const array = [50, 60, 70];
console.log(array[0]);
const data = array[1];
console.log(data);


//Modify Array Data With Indexes
const ourArray2 = [50, 40, 30];
ourArray2[0] = 15;
console.log(ourArray2);


//Access Multi-Dimensional Arrays With Indexes
const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14]
  ];
  
  const subarray = arr[3];
  const nestedSubarray = arr[3][0];
  const element = arr[3][0][1];
  console.log(subarray,nestedSubarray,element);



//Manipulate Arrays with Push methods
const arr1 = [1, 2, 3];
arr1.push(4, 5);

const arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
console.log(arr1,arr2);


//Manipulate Arrays With pop Methods
const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);


//Manipulate Arrays With shift Method
const ourArray = ["Stimpson", "J", ["cat"]];
const removedFromOurArray = ourArray.shift();
console.log(ourArray);

//Manipulate Arrays With unshift Method
const ourArray1 = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");
console.log(ourArray1);