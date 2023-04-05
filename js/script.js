var sound = new Howl({
    src: ['mosey.mp3'],
    loop: true,
    volume: 0.1
});

function playSound() {
    sound.play();
}

// Play sound immediately on page load
playSound();

if(document.addEventListener){
	document.addEventListener("DOMContentLoaded", function(){
		loaded();
	});
} else if(document.attachEvent){
	document.attachEvent("onreadystatechange", function(){
		loaded();
	});
}

function loaded(){
	setInterval(loop, 350);
}

var x = 0;

var titleText = [ "🖤 xan", "🖤 xa", "🖤 x", "🖤", "🖤 x", "🖤 xa", "🖤 xan"];

function loop(){
	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];
}

