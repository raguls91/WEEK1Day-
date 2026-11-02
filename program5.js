//declaring the array
let marks = [10, 20, 40, 30, 50, 10, 30];

//empty array need to create
let uniqueMarks = [];

//for loop with the length of mark
for (let i = 0; i < marks.length; i++) {

//- includes() → Already irukka nu check pannum.
//- ! → Illa nu check pannum.
//- push() → Array-kulla value add pannum.


    if (!uniqueMarks.includes(marks[i])) {
        uniqueMarks.push(marks[i]);
    }

}

console.log(uniqueMarks);