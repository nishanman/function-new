// function calculateMoney(ticketSale) {
//     return (ticketSale * 120) - (500 + (8 * 50));
// }

// console.log(calculateMoney(1055))


// function checkName(name) {
//     const lastChar = name[name.length - 1].toLowerCase();
//     if(lastChar === 'a' || lastChar === 'y' || lastChar === 'i' || lastChar === 'e' || lastChar === 'o' || lastChar === 'u' || lastChar === 'w') {
//         return "Good Name";
//     }
//     else {
//         return "Bad Name";
//     }

// }

// console.log(checkName("RAFEE"))

// function deleteInavalids(arr) {
//     const newArr = [];

//     for(let i = 0; i < arr.length; i++) {
//         if(typeof arr[i] == "number" && Number.isNaN(arr[i]) === false) {
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }
// console.log(deleteInavalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }]));


function password(obj) {
    return obj.siteName.charAt(0).toUpperCase() + "#" + obj.name + "@" + obj.birthYear; 
}

console.log(password({name: "rahat", birthYear: 2002, sitename: "Facebook"}))