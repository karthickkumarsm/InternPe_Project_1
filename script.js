function clearscreen(){
    document.getElementById("result").value="";
}
function display(value){
    document.getElementById("result").value+=value;
}
function back() {
    let value = document.getElementById("result").value;
    document.getElementById("result").value = value.substr(0, value.length - 1);
}
function calculate(value){
    let p=document.getElementById("result").value;
    let q=eval(p);
    document.getElementById("result").value=q;
}