/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("menu").style.width = "200px";
	document.getElementById("main").style.marginLeft = "250px";
	var x = document.getElementById("menu");
	var i;
	for(i = 0; i < 5; i++){
		x.getElementsByTagName("A")[i].style.filter= "blur(0px)"
	}
}
/* Set the width of the side navigation to 0 */
function closeNav() {
	var x = document.getElementById("menu");
	var i;
	for(i = 0; i < 5; i++){
		x.getElementsByTagName("A")[i].style.filter= "blur(30px)"
	}
    document.getElementById("menu").style.width = "0";
	document.getElementById("main").style.marginLeft = "0px";

}