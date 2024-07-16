//1.Array Creation
let arr = [1, 2, 3, 4, 5, 6];
console.log("Creation:",arr);

//2.Array Manipulation
//Adding an element to the end of the array
arr.push(7);
arr.push(8);
console.log("Push:",arr);

//Removing the last element
arr.pop();
console.log("Pop:",arr);

//3.Searching the array using indexOf,find,includes
console.log("Indexof:",arr.indexOf(3));
console.log("Find:",arr.find((x)=>x%2!=0));
console.log("Includes:",arr.includes(3));

//4.Filtering an array based on conditions using filter()
console.log("Filter:",arr.filter((x)=>x>3));

//5.Array mapping using map()
console.log("Map:",arr.map((x)=>x*2));

//6.Array sorting
console.log("Sort:",arr.sort());
console.log("Reverse:",arr.reverse());

//7.Array Joining
let arr2 = [1, 2, 3, 4, 5,];
console.log("Join:",arr.concat(arr2).join(","));

//8.Array destructing
let [a,b,c,d,e,f] = arr;
console.log("Destructing:",a,b,c,d,e,f);

//9.Array spreading
console.log("Spread:",[...arr,7,8,9,10,11,12]);

//10.Finding Max and Min in array
console.log("Max:",Math.max(...arr));
console.log("Min:",Math.min(...arr));