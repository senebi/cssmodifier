let cssProp=document.getElementsByName("cssProp");
let div=document.getElementById("modify");

function set(){
	for(let i=0; i<cssProp.length; i++){
		let cssAttribute=cssProp[i].getAttribute("id");
		let cssValue=cssProp[i].value;

		div.style[cssAttribute]=cssValue;
	}
}

set();
document.getElementById("set").addEventListener("click", set);