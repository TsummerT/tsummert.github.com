function myfuntion11() {
	var a=document.getElementById("t11");
	a.style.backgroundColor='red';
}
function myfuntion12() {
	var b=document.getElementById("t12");
	var data=new Date();
	var year=data.getFullYear();
	var month=data.getMonth() + 1;
	var day=data.getDate();
	if(month>=1&&month<=9){
		month="0"+month;
	}
	if(day>=0&&day<=9){
		day="0"+day;
	}
	b.innerHTML=year+"-"+month+"-"+day;
}
function myfuntion21() {
	var c=document.getElementById("tb1");
	var r=c.insertRow(2);
	var c1=r.insertCell(0);
	var c2=r.insertCell(1);
}
function myfuntion22() {
	var d=document.getElementById("tb1");
	var r=d.deleteRow(1);
}
function myfuntion31(event) {
	var e=document.getElementById("t31");
	var x=event.clientX;
	var y=event.clientY;
	e.innerHTML="("+x+","+y+")";
}
function myfuntion32() {
	window.open("https://www.taobao.com");
}