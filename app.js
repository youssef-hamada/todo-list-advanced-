var arr = document.getElementsByTagName("li");
for(i = 0 ; i < arr.length; i++){
    var span = document.createElement("span");
    var close_btn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(close_btn);
    arr[i].appendChild(span)
}


var close_arr = document.getElementsByClassName("close");
for(j = 0; j < close_arr.length; j++){
    close_arr[j].addEventListener('click', function (){
        var parent = this.parentElement;
        parent.style.display = "none";
    })
}

var check = document.querySelector("ul");
check.addEventListener('click', function (e){
    if(e.target.tagName == 'LI'){
        e.target.classList.toggle("checked");
    }
    // console.log(e.target.tagName)
})


function newElement(){
    var bar = document.getElementsByTagName("input")[0];
    var value = bar.value;
    var newel = document.createElement("li")
    var valEL = document.createTextNode(value);
    newel.appendChild(valEL);
    if(value == " "){
        alert("it is empty!")
    } else {
        document.getElementById("myUL").appendChild(newel);
    }
    document.getElementsByTagName("input")[0].value = ' ';
    var arr = document.getElementsByTagName("li");
    for(i = 0 ; i < arr.length; i++){
    var span = document.createElement("span");
    var close_btn = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(close_btn);
    arr[i].appendChild(span)
    var close_arr = document.getElementsByClassName("close");
    for(j = 0; j < close_arr.length; j++){
    close_arr[j].addEventListener('click', function (){
        var parent = this.parentElement;
        parent.style.display = "none";
    })
}

}

    
}