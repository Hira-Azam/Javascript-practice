var studentName = prompt("Enter your name:")
var eng = +prompt("Enter english number :")
var urdu = +prompt("Enter urdu number :")
var maths = +prompt("Enter maths number :")
var science = +prompt("Enter science number :")
var islamiat = +prompt("Enter islamiat number :")
var obtainedMarks = eng + urdu + maths + science + islamiat
var average = obtainedMarks / 500
var perc = (obtainedMarks / 500) * 100
document.writeln(`
                <table border="1">
                <th><b>Subject</b></th>
                <th><b>Marks</b></th>
                <tr>
                <td>English</td>
                <td>${eng}</td>
                </tr>
                <tr>
                <td>Urdu</td>
                <td>${urdu}</td>
                </tr>
                <tr>
                <td>Maths</td>
                <td>${maths}</td>
                </tr>
                <tr>
                <td>Science</td>
                <td>${science}</td>
                </tr>
                <tr>
                <td>Islamiat</td>
                <td>${islamiat}</td>
                </tr>
                <tr>
                <td><b>Obtained Marks</b></td>
                <td>${obtainedMarks} out of 500</td>
                </tr>
                <tr>
                <td><b>Average Marks</b></td>
                <td>${average}</td>
                </tr>
                <tr>
                <td><b>Percentage<b></td>
                <td>${perc}</td>
                </tr>
                </table>`)
if (perc >=90 || perc >=80 ){
       document.writeln(`${studentName} got A1 grade`)
}else if (perc >=70){
     document.writeln(`${studentName} got A grade`)
}else if(perc >=60){
            document.writeln(`${studentName} got B grade`)
}else if(perc >=50){
            document.writeln(`${studentName} got C grade`)
}else {
            document.writeln(`${studentName} got F`)
         }

