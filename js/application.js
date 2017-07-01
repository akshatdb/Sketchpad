var col="black";
var f=0;
$(document).ready(function(){
	Grid(16);
	$("#grid").on('mouseenter','.pixel',function(){
		if(f===0)
		$(this).css({"background-color":col,"opacity":'1.0'});
		else
		{
			op = +$(this).css("opacity");
			if(op==1)
				$(this).css({"background-color":col,"opacity":0.1});
			else
				$(this).css({"background-color":col,"opacity":op+0.1});

		}
	});
	$("input").on('click',function(){
		col = $(this).val();
		if(col == "random")
		{
			col = getRandomColor();
			f=1;
		}
		else{
			f=0;
			$('pixel').css("opacity","1.0");
		}
	});
});

function Grid(s)
{
	var h = 640/s;
	var w = 640/s;
	for(var i=0;i<s;i++)
		for(var j=0;j<s;j++)
			$('#grid').append('<div class="pixel"></div>');
	$('.pixel').css({'height':h,'width':w});
}

function clearGrid()
{
	$('.pixel').css("background-color","white");
	$('.pixel').css('opacity','1.0');
}

function changeGrid()
{
	var num;
	while(1)
	{
		num = prompt("Enter the number of pixels on each side -\n NOTE: Value must be less than 90.","16");
		if(num<=90)
			break;
	}
	removeGrid();
	Grid(num);
	$("#grid").on('mouseenter','.pixel',function(){
		if(f===0)
		$(this).css("background-color",col);
		else
		{
			op = +$(this).css("opacity");
			if(op>=1.0)
				$(this).css({"background-color":col,"opacity":0.1});
			else
				$(this).css({"background-color":col,"opacity":op+0.1});
		}
	});
}

function removeGrid()
{
	$('#grid').remove();
	$('#heading').after('<div id="grid"></div>');
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
