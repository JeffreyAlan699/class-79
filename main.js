name_of_the_student_array=[];

function submit(){
    var name1=document.getElementById("text_input_1").value;
    var name2=document.getElementById("text_input_2").value;
    var name3=document.getElementById("text_input_3").value;
    var name4=document.getElementById("text_input_4").value;

    name_of_the_student_array.push(name1);
    name_of_the_student_array.push(name2);
    name_of_the_student_array.push(name3);
    name_of_the_student_array.push(name4);
    
    console.log(name_of_the_student_array)

    document.getElementById("div1").innerHTML = name_of_the_student_array;
    document.getElementById("button1").style.display = "none";
    document.getElementById("button2").style.display = "inline-block";
}
function sort(){
    name_of_the_student_array.sort();
    document.getElementById("div1").innerHTML = name_of_the_student_array;
}