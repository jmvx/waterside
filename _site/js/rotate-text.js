var i = 0;
var items = new Array();

$(document).ready(function () {
  items = $("li.quote").hide();
  cycle();
});

function cycle() { 
  items.eq(i).fadeIn(400)
            .delay(10000)
            .fadeOut(400, cycle);
  i = (i+1) % items.length;
}

cycle();


    