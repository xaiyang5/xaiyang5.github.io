function textIncrease(){
    document.getElementById("text").style.fontSize = "24px";
}

function textChange(){
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
}

function textNormal(){
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
}

function textMoo(){
    document.getElementById("text").style.textTransform = "uppercase";
    var str = document.getElementById("text").value;
    var parts = str.split(".");
    str = parts.join("Moo");
    alert(str.toUpperCase());

}


