function onload(){
	openNav();

}

(function() {
    document.onmousemove = handleMouseMove;
    function handleMouseMove(event) {
        var dot, eventDoc, doc, body, pageX, pageY;

        event = event || window.event; // IE-ism

        // If pageX/Y aren't available and clientX/Y are,
        // calculate pageX/Y - logic taken from jQuery.
        // (This is to support old IE)
        if (event.pageX == null && event.clientX != null) {
            eventDoc = (event.target && event.target.ownerDocument) || document;
            doc = eventDoc.documentElement;
            body = eventDoc.body;

            event.pageX = event.clientX +
              (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
              (doc && doc.clientLeft || body && body.clientLeft || 0);
            event.pageY = event.clientY +
              (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
              (doc && doc.clientTop  || body && body.clientTop  || 0 );
        }
		
		window.ev = false;
		document.getElementById('menu').onmouseover = function () {
			window.ev = true;
			console.log(window.ev);
		}
		document.getElementById('menu').onmouseout = function () {
			window.ev = false;
			console.log(window.ev);
		}
		
        // Use event.pageX / event.pageY here
		if(event.pageX<10 || window.ev==true){
			openNav();
		}
		else if(event.pageX>250 && window.ev==false){
			closeNav();
		}
    }
})();

/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("menu").style.width = "250px";
	document.getElementById("main-content").style.marginLeft = "250px";
	document.getElementById("main-content").style.filter ="brightness(50%)"
}
/* Set the width of the side navigation to 0 */
function closeNav() {
    document.getElementById("menu").style.width = "0";
	document.getElementById("main-content").style.marginLeft = "0px";
		document.getElementById("main-content").style.filter ="brightness(100%)"

}
