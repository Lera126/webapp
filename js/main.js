
var tabs = document.querySelectorAll(".tab");
var currentTab = 0;


function clickTab(someTab, index)
{
	someTab.addEventListener('click', function(e){
	if (index !== currentTab && index >= 0 && index <= tabs.length) {
	    tabs[currentTab].classList.remove('active-tab');
	    tabs[index].classList.add('active-tab');
	    currentTab = index;
  	};
  });
};
function tabHandle()
{

	for (var i = tabs.length - 1; i >= 0; i--) {
		
			clickTab(tabs[i], i);

		};
	};

function btnHandle()
{
	alert("PAGE here");
	$('.cancel-btn').click(function(){
		alert("cancel Button");
		$('.fill-in').addClass('hidden');
		$('.quick-reports-container').removeClass('hidden');
	});
	$('.settings-btn').click(function(){
		alert("settings-btn Button");
		$('.fill-in').removeClass('hidden');
		/*$('.quick-reports-container').addClass('hidden');*/
	});

	var saveButton = document.querySelectorAll(".save-btn");
};
var pageUpdate= function(data) {
	if (data.notifications !== undefined) {
        document.getElementByClass("notifications").innerHTML = "<p>" + data.notifications + "</p>";
    }
};
var updateTabs= function(data) {
	
};

function init () {
	
	 UTILS.ajax("data/config.json",{done: pageUpdate});
	 btnHandle();
	 tabHandle();
};
window.onLoad = init();
