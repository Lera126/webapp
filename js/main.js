
var pageUpdate= function(data) {
	
}
function init () {
	UTILS.ajax("data/config.json",{done: pageUpdate});
}

window.onLoad = init();