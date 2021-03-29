let reg;
// reg = /Javascript/g; // g means global. When you have to find more then one results 

// reg = /javascript/i; // i means case-insensitive

/*
// ^ means string starts with letter.
EXAMPLE 1 => "javascript is lit" return true bcz the given string starts with "ja";
*/
// reg = /^ja/; 

/*
// ^ means string starts with letter.
EXAMPLE 2 => "javascript is lit" return false bcz the given string does NOT starts with "ja";
*/
// reg = /^hey/; 


// reg = /t$/; // $ means string ends with letter , EXAMPLE => "javascript is lit" return true bcz the given string ends with "t" 
// reg = /java.cript/; // . means any one character between string
// reg = /j*script/g; // * means one or more letters;
// reg = /th?is/; // ? means optional EXAMPLE: 'h' is optional


// CHARACTER SETS - []:

// reg = /st[a-z]ing/ // [a-z] means can be "a" to "z"
// reg = /st[a-zA-z]ing/                 // [a-zA-z] means can be small or capital "a" to "z"
// reg = /s[a-z]ring[100]/;              // means "p", "a" to "z", "acticing" and [0-100]
// reg = /java[^a-r]cript/;              //[^] means NOT, Example -> can NOT be between "a" to "r"; 


// Quantifiers - {}
// reg = /string{2}/;                    // means "g" will be exactly 2 times;
// reg = /stri{0,3}ng{2}/               // means "i" will be 0 to 3 times and "g" will be exactly 0 to 2 times;


// Grouping - ()

// reg = /(java){2}/;                  // same as quantifiers but quantifiers works with singal character but it works with group of character(word)
// reg = /(java){2}script[0-9]/          // means "java" will be 2 times then "script" then number between 0 - 9 


// Character Classes

// reg = /\whis/;                          // \w means word character ( _ , alphatbet, number);
// reg = /\w+his/;                         // \w means one or more word character ( _ , alphatbet, number);
// reg = /\WJavascript/;                   // \W means NONE word character ( _ , alphatbet, number);
// reg = /\W+Javascript/;                  // \W means one or more NONE word character ( _ , alphatbet, number);
// reg = /\djavascript/;                       // \d means digit
// reg = /\d+javascript/;                       // \d+ means one or more  digit
// reg = /\Djavascript/;                       // \D means NONE digit
// reg = /\D+javascript/;                       // \D means one or more NONE digit
// reg = /\sjavascript/;                       // \s means whitespace
// reg = /\s+javascript/;                       // \s+ means more then one whitespace
// reg = /\S+javascript/;                       // \S means NONE whitespace
// reg = /\S+javascript/;                       // \s+ means more then one whitespace

// Assertion
reg = /t(?=his)/; // means "his" after "t"
reg = /t(?!his)/; // means NOT "his" after "t"

let str = 'sshis is striiingg for practicing the regex in javascript, is javascript lit ? javajavascript javajavascript5s $%%#%Javascript 5908javascript';//"javascript is cool";

let result;

result = reg.exec(str)

if(reg.test(str)) console.log('string matched with regex', result);
else console.log('String does NOT matched with regex', result)











/*
 * funcations for regex
*/
// result = reg.exec(str); // regex.excute function will return an ARRAY or NULL;
// console.log(result);

// result = reg.test(str); //regex.test function will return TRUE or FALSE;
// console.log(result);

// result = str.match(reg); // string.match(regex) will return TRUE or FALSE;
// console.log(result);

// result = str.search(reg); // string.match(regex) will return the INDEX of matched or "-1";
// console.log(result);

// result = str.replace(reg, "NEW_VALUE"); // if result found it will return new string with replaced value;
// console.log(result);
