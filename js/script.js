var sound = new Howl({
    src: ['backgroundmusic.mp3'],
    loop: true,
    volume: 0.1
});

function playSound() {
    sound.play();
    document.removeEventListener('click', playSound);
}

document.addEventListener('click', playSound);

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

var titleText = [ "🖤 soft", "🖤 sof", "🖤 so", "🖤 s", "🖤 so", "🖤 sof", "🖤 soft"];

function loop(){

	document.getElementsByTagName("title")[0].innerHTML = titleText[x++%titleText.length];

}