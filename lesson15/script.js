
var btn1 = document.getElementById("btn1");  
var btn2 = document.getElementById("btn2");	
var main = document.getElementById("main");		
var myList = document.getElementById("list");	
var ul = document.getElementsByTagName("ul");	
var story = myList.getElementsByClassName("item");
var popup = document.getElementsByClassName("popup")[0]; 
var close = document.querySelector(".close"); 
var age;
var result=confirm("Вы старшке 18?");



if(result == true) { 
    console.log("Пользователь старше 18");
    var result1=confirm("Вы подписаны на рассылку?");
    if(result1 == true){
    	console.log("Пользователь подписан на рассылку");
    	console.log("Пользователь допущен");
    } else  {
    alert("Доступ к сайту ограничен");
}
    
} else  {
    alert("Доступ к сайту ограничен");
}

function addItem(){
	var newLi = document.createElement("li"); 
	newLi.innerHTML = "Новая задача";
	newLi.className = "item"; 
	myList.appendChild(newLi); 
	popup.style.display = "none";
}
function delItem(){
	myList.removeChild(story[0]);

	if(story.length == 0){
		popup.style.display = "block";
	}
}

function closePopup(){
	popup.style.display = "none";
}

btn1.addEventListener("click", addItem);
btn2.addEventListener("click", delItem);
close.addEventListener("click", closePopup)
