window.onload=function(){
	var windowH = document.body.clientHeight;
	document.querySelector(".Mask").style.height=windowH+"px";
	// alert(windowH)
}
function HideFun(obj) {
   document.getElementById(obj).style.display= "none";
    document.querySelector(".Mask").style.display= "none";
}

function ShowFun(obj) {
    document.getElementById(obj).style.display= "block";
   document.querySelector(".Mask").style.display= "block";
}
