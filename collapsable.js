var scale = 0.25
,	distns = parseInt($('.item img').css("height") )* (1 - 0.25);

$('.list').mouseenter(function (e) {
	var a = list();
	if(a[1].parent().parent().css("top") == "55px") {
		expand(a, distns);
	}
});

$('.list').mouseleave(function (e) {
	var a = list();
	collapse(a, distns);
});

function list() {
	var a = [];
	a.push($('.select img'));
	a.push($('.add img'));
	a.push($('.edit img'));
	a.push($('.share img'));
	return a;
}

function move(a, distns, scale) {
	var len = a.length
	,	toTop;
	for(var i = 0; i < len; i++) {
		a[i].css("-webkit-transform","scale(1," + scale +")");
		a[i].css("-moz-transform","scale(1," + scale +")");
		a[i].css("-ms-transform","scale(1," + scale +")");
		if(a[i + 1]) {
			for(var j = i + 1; j < len; j++) {
				toTop = a[j].parent().parent().css("top");
				a[j].parent().parent().css("top",parseInt(toTop) + distns);
			}
		}
	}
}

function expand(a, distns) {
	move(a,distns,1);
};

function collapse(a, distns) {
	move(a, -1*distns, scale)};