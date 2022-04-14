
// --------------Problem 1----------------------

const set = new Set();
function duplicate(str,n){
    for(let i=0;i<str.length;i++){
        set.add(str[i]);
    }
    let str1 = " ";
    for(let val of set.values()){
        str1 = str1+val;
    }
    console.log(str1);
}
duplicate("aabbccddeeff");


// -----------------Problem 2------------------

let str = "abcadeecfb";
let newStr = str.split("");
let newMap = new Map();

for (let i = 0; i < newStr.length; i++) {
    let count = 1;
    for (let b = i + 1; b < newStr.length; b++) {
        if (newStr[i] === newStr[b]) {
            count++;
            newStr.splice(b, 1);
            b--;
        }
    }
    newMap.set(newStr[i], count);
}
for (let [key, value] of newMap.entries()) {
    console.log(key + "=" + value);
}