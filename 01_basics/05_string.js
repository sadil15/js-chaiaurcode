const str = new String("Adil-as-com");
console.log(str.__proto__);

const str2 = "Shaikh";
console.log(str2.__proto__);

console.log(str.length);
console.log(str.length);

console.log(str2.toUpperCase());

console.log(str.charAt(2));
console.log(str2.indexOf("h"));

const newStr = str.substring(0, 4);
console.log(newStr);

const anotherStr = str.slice(-6, 3);
console.log(anotherStr);

const newStringOne = "   Adil   Shaikh   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://adil.com/adil%20shaikh";
const newUrl = url.replace("%20", "-");
console.log(newUrl);

console.log(url.includes("ad"));

console.log(str.split("-"));