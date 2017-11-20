// load function and styles article span
window.addEventListener( "load", function() {
	var cssRef = ".jigsawAnim > *";
	var nodes = document.querySelectorAll(cssRef);
	for( var i=0; i<nodes.length; i++ ) {
		nodes[i].style.top = 0;
		nodes[i].setAttribute( "data-spead", Math.floor(Math.random()*10)+2 );
	}
	//scrollinteraction that updates positon, opacity and rotation
	window.addEventListener( "scroll", function() {
		var nodes = document.querySelectorAll(cssRef);
		for( var i=0; i<nodes.length; i++ ) {
			var speed = window.scrollY/parseInt(nodes[i].getAttribute( "data-spead" ));
			nodes[i].style.transform = "rotate( "+speed+" deg )";
			nodes[i].style.top = speed+"px";
			nodes[i].style.opacity = 1-(speed/100);
			if(i >= (nodes.length-2)/2)nodes[i].style.left = speed+"px";
			else nodes[i].style.left ="-"+speed+"px";
		}
	});
});