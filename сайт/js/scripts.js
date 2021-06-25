var imgs = ['images/Vector 299.svg',
'images/Vector 296.svg',
'images/Vector 307.svg'];
var j=1;
var cnt = imgs.length-1;
//сразу при загрузке показваем первую картинку
$('#photo1').attr('src', imgs[1]);
//подгружаем вторую в скрытый див
$('#photo2').attr('src', imgs[2]);
//тут начинается бесконечное слайдшоу
setInterval("photos()", 3000);

function photos() {
$('#photo1').fadeOut("slow", function() {
$(this).attr('src', imgs[j]).fadeIn("slow");
});
j++;
if(j>cnt) {
j=0;
}
$('#photo2').attr('src', imgs[j]);
}



	$(window).load(function () {

		$("#content").endlessScroll({
			width: "100%", // Ширина строки
			height: "100%", // Высота строки
			steps: -3, // Шаг анимации в пикселях. Если число отрицательное - движение влево, положительное - вправо
			speed: 40, // Скорость анимации (0 - максимальная)
			mousestop: true // Останавливать ли полосу при наведении мыши (да - true, нет - false)
		});

	});

	
