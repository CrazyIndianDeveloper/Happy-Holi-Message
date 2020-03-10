var elements = document.getElementsByTagName("div");
window.setInterval(function(){
  setUp();
}, 300);
for(var i = 0; i<elements.length; i++)
	{
		elements[i].addEventListener("click", function(){
		setUp();
		});
	}

function setUp(){

for(var i = 0, length = elements.length; i < length; i++) {
       if( elements[i].textContent == ''){
          elements[i].style.backgroundColor = randomColor();
       } 
    }
}
function randomColor() 
{
	var r, g,b;
	r = Math.floor(Math.random() * 256);
	g = Math.floor(Math.random() * 256);
	b = Math.floor(Math.random() * 256);
	var rgb = "rgb("+r+", "+g+", "+b+")";
	return rgb;
}