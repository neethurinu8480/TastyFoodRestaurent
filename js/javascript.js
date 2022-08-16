function selectOption(){

if(document.getElementById("excellent").checked==true){
   var element= document.getElementById("feedbackOptionSelect");
   element.style.display='none';
   document.getElementById("feedbackOptionMsg").style.display= 'block';
}else if(document.getElementById("good").checked==true){
    var element= document.getElementById("feedbackOptionSelect");
    element.style.display='none';
    document.getElementById("feedbackOptionMsg").style.display= 'block';
}else if(document.getElementById("fine").checked==true){
    var element= document.getElementById("feedbackOptionSelect");
    element.style.display='none';
    document.getElementById("feedbackOptionMsg").style.display= 'block';
}else if(document.getElementById("average").checked==true){
    var element= document.getElementById("feedbackOptionSelect");
    element.style.display='none';
    document.getElementById("feedbackOptionMsg").style.display= 'block';
}else if(document.getElementById("poor").checked==true){
    document.getElementById("feedbackPoorMsg").style.display= 'block';
    document.getElementById("feedbackSuggestionMsg").style.display= 'block';
    document.getElementById("btnSubmit").style.display= 'none';

}
}

function selectPoorOption(){
    var txtMsg =document.getElementById("floatingTextarea");
    if(txtMsg.value !=""){
    var element= document.getElementById("feedbackOptionSelect");
    element.style.display='none';
    document.getElementById("feedbackOptionMsg").style.display= 'block';
}
}