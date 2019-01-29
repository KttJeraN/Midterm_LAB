function loadJSONData(){

	let xhttp = new XMLHttpRequest();

	let mylist = document.getElementById('list');

	xhttp.onreadystatechange = function(){
		if(xhttp.readyState == 4 && xhttp.status == 200){
			let data = JSON.parse(xhttp.response);
			let html = "";
			for(let i = 0; i < data.length; i++){
				html += "<li>"+data[i].name+"</li>";
			}
			mylist.innerHTML = html;
		}
	}
	xhttp.open('GET', 'https://jsonplaceholder.typicode.com/todos' , true);
	xhttp.send();
}
function loadStringJSONData(){
	
}
