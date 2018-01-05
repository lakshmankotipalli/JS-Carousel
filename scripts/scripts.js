var __imgsSrc = ['images/Handsholdingsnowflakes_Thumbnail.jpg', 'images/SnowatOgdenTemple_Thumbnail.jpg', 'images/StGeorgeTempleinWinter_Thumbnail.jpg'];
var i = __imgsSrc.length - 1;

function init () {
	document.getElementById('carousel-trip').src = __imgsSrc[0];
}

function rotateImages () {
	__imgsSrc.forEach(function (img) {
		console.log(img);
	})
};

init();