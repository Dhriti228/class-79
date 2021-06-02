student_name_array=[];
function submit()
{
    var name_1= document.getElementById("student_name1").value;
    var name_2= document.getElementById("student_name2").value;
    var name_3= document.getElementById("student_name3").value;
    var name_4= document.getElementById("student_name4").value;
student_name_array.push(name_1);
student_name_array.push(name_2);
student_name_array.push(name_3);
student_name_array.push(name_4);
console.log(student_name_array);
document.getElementById("display_name").innerHTML=student_name_array;
document.getElementById("button_submit").style.display="none";
document.getElementById("button_sort").style.display="inline-block";
}
function sorting()
{
    student_name_array.sort();
    console.log(student_name_array);
    document.getElementById("display_name").innerHTML=student_name_array;
}