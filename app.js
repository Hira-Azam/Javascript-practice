//---------------------------Assignment 14-16---------------------
//chapter 14-16 (Arrays)
//Question 01
// var array = []
// array[0] = `Nida`
// array[1] = `Hira`
// array[2] = `Zainab`
// document.writeln(array)

//----------------X-------------------------

//Question 02
// var arr = []
// arr[0] = "Nida"
// arr[1] = "Hira"
// arr[2] = "Zainab"
// document.writeln(arr)

//----------------X-------------------------

//Question 03
// var arr = ["Nida","Hira","Zainab"]

//----------------X-------------------------

//Question 04
// var arr = [1,2,3,4,5,6]

//----------------X-------------------------

//Question 05
// var arr = [0,1,1,0,0]

//----------------X-------------------------

//Question 06
// var arr = [1,"Hira",2,0,"1234"]

//----------------X-------------------------

//Question 07
// var education = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","Ph.D"]
// document.writeln("<h1> Qualifications:</h1>")
// document.writeln(`<br> 1) ${education[0]} <br> 2) ${education[1]} <br> 3) ${education[2]} <br> 4) ${education[3]} <br> 5) ${education[4]} <br> 6) ${education[5]} <br> 7) ${education[6]}<br> 8) ${education[7]}`)

//----------------X-------------------------

//Question 08
// var arr1 = ["Micheal","John","Tony"]
// var arr2 = [320,230,480]
// var totalMarks = 500
// var perc1 = arr2[0] / totalMarks *100
// var perc2 = arr2[1] / totalMarks *100
// var perc3 = arr2[2] / totalMarks *100
// document.writeln(`Score of ${arr1[0]} is ${arr2[0]}. Percentage: ${perc1}%`)
// document.writeln(`<br>Score of ${arr1[1]} is ${arr2[1]}. Percentage: ${perc2}%`)
// document.writeln(`<br>Score of ${arr1[2]} is ${arr2[2]}. Percentage: ${perc3}%`)

//----------------X-------------------------

//Question 09
// var colors = ["Red","Green","Blue","Brown"]
// document.writeln(colors)              
// var c = prompt("Enter any color:")     (a)
// colors.unshift(c)
// document.writeln(colors)
// var c = prompt("Enter any color:")       (b)
// colors.push(c)
// document.writeln(colors)
// colors.unshift(c)                   (c)
// colors.unshift(c1)
// document.writeln(colors)
// colors.pop(c)                     (d)
// colors.pop(c1)
// document.writeln(colors)
// colors.pop()                    (e)
// document.writeln(colors)
// colors.splice(2,0,"Yellow")        (f)
// document.writeln(colors)
// colors.splice(2,2)                    (e)
// document.writeln(colors)

//----------------X-------------------------

//Question 10
// var scores = [320,230,480,120]
// scores.sort()
// document.writeln(scores)

//----------------X-------------------------

//Question 11
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"]
// document.writeln("<h1> Cities List:</h1>")
// document.writeln(cities)
// document.writeln("<h1><br> Selected Cities List:</h1>")
//  var c = cities.slice(2,4)
// document.writeln(c)

//----------------X-------------------------

//Question 12
// var arr = ["<br>This","is","my","cat"]
// document.writeln("<br><h1> Array:<h1>")
// document.writeln(arr)
// var result = arr.join(" ")
// document.writeln("<br><br> <h1>String:<h1>")
// document.writeln(result)

//----------------X-------------------------

//Question 13
// var devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.writeln("<h1>Devices:</h1>")
// document.writeln(devices)
// document.writeln("<br><br>Out:")
// document.writeln("<br>",devices[0])
// document.writeln(" <br>Out:")
// document.writeln("<br>",devices[1])
// document.writeln("<br>Out:")
// document.writeln("<br>",devices[2])
// document.writeln("<br>Out:")
// document.writeln("<br>",devices[3])

//----------------X-------------------------

//Question 14
// var devices = ["Keyboard","Mouse","Printer","Monitor"]
// document.writeln("<h1>Devices:</h1>")
// document.writeln(devices)
// document.writeln("<br><br>Out:")
// document.writeln("<br>",devices[3])
// document.writeln(" <br>Out:")
// document.writeln("<br>",devices[2])
// document.writeln("<br>Out:")
// document.writeln("<br>",devices[1])
// document.writeln("<br>Out:")
// document.writeln("<br>",devices[0])

//----------------X-------------------------
//Question 15
// var phones = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"]
// document.writeln("<br>",phones[0])
// document.writeln("<br>",phones[1])
// document.writeln("<br>",phones[2])
// document.writeln("<br>",phones[3])
// document.writeln("<br>",phones[4])
// document.writeln("<br>",phones[5])

//----------------X-------------------------

//---------------------------Assignment 17-20---------------------
//chapter 17-20 (Arrays and Loops)
//Question 01
// var arr1 = []
// var arr2 = []

//Question 02
// var arr1 = [[0,1,2,3],
//             [1,0,1,2],
//             [2,1,0,1]];
// for(var  i = 0 ; i<arr1.length ; i++){
//     console.log(arr1[i].join(" "))   
// }

//Question 03
// for( var i = 1 ; i <=10 ; i++){
//     document.writeln(i +"<br>")
// }

//Question 04
// var num1 =+prompt("Enter a number to show its multiplication table")
// var num2 = +prompt("Enter length multiplication table")
// for(var i=1  ; i<num2 ; i++){
//     console.log(`${num1} X ${i} = ${num1 * i }`)
// }

//Question 05
// var arr = ["Apple","Banana","Mango","Orange","Strawberry"]
// for(var i = 0 ; i<arr.length ; i++){
//     console.log(arr[i])
// }
// console.log(`Element at index 0 is ${arr[0]}
// Element at index 1 is ${arr[1]}
// Element at index 2 is ${arr[2]}
// Element at index 3 is ${arr[3]}
// Element at index 4 is ${arr[4]}`)

//Question 06
// for (var i=1 ; i<15 ;i++){
//     console.log(i)
// }
// for (var i=10 ; i>=1 ;i--){
//     console.log(i)
// }
// for(var i = 0 ; i<= 20 ; i ++){ 
//     if( i % 2==0){
//        console.log(i)
//     }
// }
// for(var i = 0 ; i<= 20 ; i ++){ 
//     if( i  % 2 !==0){
//        console.log(i)
//     }
// }
// for(var i = 0 ; i<= 20 ; i++){ 
//    if(i % 2 == 0 ){
//        console.log(i +"k")
//     }}

//Question 07
// var arr = ["cake","applepie","cookie","chips","patties"]
// var user = prompt("Enter searching item:")
// var found = false
// for (var i = 0; i < arr.length; i++) {
//     if (user == arr[i]) {
//         found = true
//         break
//     }
// }
// if (found) {
//     document.writeln("Found in the list")
// } else {
//     document.writeln("Not Found")
// }

//Question 08
//  var largest = Math.max(24, 53, 78, 91, 12)
// document.writeln(`The largest number is ${largest}`)

//Question 09
// var smallest = Math.min(24, 53, 78, 91, 12)
// document.writeln(`The smallest number is ${smallest}`)

//Question 10
// var num1 = 5
// for(var i=0 ; i<21 ; i++){
//     console.log(`${num1 * i }`)
// }

//----------------X-------------------------
//---------------------------Assignment 21-25---------------------
//chapter 21-25 (STRING METHODS)
//Question 01
// var firstName = prompt("Enter your first name:")
// var lastName = prompt("Enter your Last name:")
// var fullName = firstName + lastName
// document.writeln("Welcome to the world:" +fullName)

//Question 02
// var user = prompt("My favourite mobile is:")
// var input2 = user.length
// document.writeln("My favourite mobile is:" +user)
// document.writeln("length of string:" +input2)

//Question 03
// var str = "Pakistani"
// document.writeln(`Index of n is ${str.indexOf("n")}`)

//Question 04
// var str = "Hello World"
// document.writeln(` Last Index of n is ${str.lastIndexOf("l")}`)

//Question 05
// var str = "Pakistani"
// document.writeln(` Character at index 3 is ${str.charAt(3)}`)

//Question 06
// var firstName = prompt("Enter your first name:")
// var lastName = prompt("Enter your Last name:")
// var fullName = firstName.concat(lastName)
// document.writeln("Welcome to the world:" +fullName)

//Question 07
// var str1 = "Hyderabad"
// var str2 = str1.replace("Hyderabad","Islamabad")
// document.writeln("City: Hyderabad <br>")
// document.writeln("After replacement:"+str2)

//Question 08
// var message = "Ali and Sami are best friends.They play cricket and football together."
// var str2 = message.replaceAll("and","&")
// document.writeln("Previous message:"+message,"<br>")
// document.writeln("After replacement Message is:"+str2)

//Question 09
// var str1 = "472"
// document.writeln("Value:" +str1 +"<br>")
// document.writeln("Type:" +typeof(str1) +"<Br>")
// var str2 = Number(str1)
// document.writeln("Value:" +str2 +"<br>")
// document.writeln("Type:" +typeof(str2))

//Question 10
// var str1 = "peanuts"
// var str2 = str1.toUpperCase()
// document.writeln("User Input:"+str1 +"<br>")
// document.writeln("Upper Case:"+str2)

//Question 11
// var str1 = "javascript"
// var str2 = str1.slice(0, 1).toUpperCase() + str1.slice(1)
// document.writeln("User Input: " + str1 + "<br>")
// document.writeln("Title Case: " + str2)

//Question 12
// var num = 35.36 
// var num2 = num.toString()
// var result = num2.replace(".","")
// document.writeln("Number:",num ,"<br>")
// document.writeln("Result:",result)

//Question 13
// var userInput = prompt("Enter your name:")
// if (userInput.indexOf("@") || userInput.indexOf(".")  || userInput.indexOf("," )|| userInputindexOf( "!")){
//     alert("Please enter a valid name")
// } else {
//     document.writeln("The user name is" +userInput)
// }

//Question 14
// var arr = ["cake","applepie","cookie","chips","patties"]
// var user = prompt("Enter searching item:")
// var found = false
// for (var i = 0; i < arr.length; i++) {
//     if (user == arr[i]) {
//         found = true
//         break
//     }
// }
// if (found) {
//     document.writeln("Found in the list")
// } else {
//     document.writeln("Not Found")
// }

//Question 15
// var user = prompt("Enter valid password")
// if (user.length < 6) {
//     alert("Password must be at least 6 characters")
// }
// else if (user[0] >= "0" && user[0] <= "9") {
//     alert("Password should not start with a number")
// }else{
//     document.writeln("Valid Password")
// }

//Question 16
// var  university = "University of Karachi"
// var str = university.split("")
// for (var i = 0 ; i<str.length ; i++){
//     document.writeln(str[i]+"<br>")
// }

//Question 17
// var input = "Pakistan"
// var input1 = input.charAt(7)
// document.writeln("Last character of input:" +input1)

//Question 18
// var count = 0;
// var str = "The quick brown fox jumps over the lazy dog"
// var str1 = str.toLowerCase()
// var words = str1.split(" ")
// for (var i = 0; i < words.length; i++) {
//     if (words[i] == "the") {
//         count++
// }}
// document.writeln("The word 'the' appears " + count + " times")

//----------------X-------------------------

//---------------------------Assignment 26-30---------------------
//chapter 26-30 (MATH METHODS)
//Question 01
