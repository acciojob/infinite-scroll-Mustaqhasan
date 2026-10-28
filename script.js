//your code here!
let ol=document.getElementById("infi-list");
let count=1;
ol.addEventListener("scroll",()=>{
	let newLi=document.createElement("li");
	if(count < 3){
		newLi.textContent=`added item ${count}`;
		ol.appendChild(newLi);
		count++;
	}
	return;
	
})
