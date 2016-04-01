// JavaScript Document
window.onload = initlink;
function initlink()
{
	
/*自动跳转功能*/
	var obtn = document.getElementById('btn');
	var clientHeight=document.documentElement.clientHeight;
	var timer = null;
	var isTop = true;
	
	
	window.onscroll = function(){
		var osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (osTop >= clientHeight){
    		     obtn.style.display='block';
		}else {
		     obtn.style.display='none';
		}
		if (!isTop){
			clearInterval(timer);
		}
		isTop = false;
	}
		
	obtn.onclick = function(){
		
		timer = setInterval(function(){
			var osTop = document.documentElement.scrollTop || document.body.scrollTop;
			var ispeed = Math.floor(-osTop / 6);
			document.documentElement.scrollTop = document.body.scrollTop = osTop +ispeed;
			
			isTop = true;
			console.log(osTop -ispeed);
			if (osTop == 0){
				clearInterval(timer);
			}
		},30);
	}
	/*自动跳转功能*/

/*登陆界面*/
}
$(document).ready(function(){

$(".wrap div").hover(function() {
	$(this).animate({"top": "-300px"}, 400, "swing");
},function() {
	$(this).stop(true,false).animate({"top": "0px"}, 400, "swing");
});

});
