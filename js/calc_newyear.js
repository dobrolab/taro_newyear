function calculateSum() {

		// Получаем значение даты рождения
		var birthdate = document.getElementById('birthdate').value;
		var birthmonth = document.getElementById('birthmonth').value;
		var birthyear = document.getElementById('birthyear').value;
		var calcyear = document.getElementById('calcyear').value;

		let pimg = [];
		pimg[0]  = '//dobrolab.github.io/tarocalc/img/card.jpg';
		pimg[1] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ac02e69e842635e8936';
		pimg[2] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166abf8472c0c434223d1f';
		pimg[3] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ab7fa32f36305f3c9fc';
		pimg[4] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ab3a520addf486e9ae9';
		pimg[5] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166ab02e69e842635e88c9';
		pimg[6] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166aaea520addf486e9ab7';
		pimg[7] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9dfa32f36305f3c976';
		pimg[8] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9bfa32f36305f3c946';
		pimg[9] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9979127363c5ec325c';
		pimg[10] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a9779127363c5ec3246';
		pimg[11] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a958472c0c434223c40';
		pimg[12] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a7ea520addf486e9987';
		pimg[13] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a7c2e69e842635e87bf';
		pimg[14] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a7a79127363c5ec31de';
		pimg[15] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a78fa32f36305f3c859';
		pimg[16] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a77fa32f36305f3c83f';
		pimg[17] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a4f79127363c5ec3137';
		pimg[18] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a4d2e69e842635e8704';
		pimg[19] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a4aa520addf486e989d';
		pimg[20] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a488472c0c434223b09';
		pimg[21] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a43fa32f36305f3c760';
		pimg[22] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/67166a412e69e842635e86ce';


		// =========== CHOOSEN

		// [ЧГ]
		var yearnum = 0;
		for (var i = 0; i < calcyear.length; i++) {
			yearnum += parseInt(calcyear[i]);
		}
		while ( yearnum > 22 ) { yearnum = yearnum - 22 };

		// [1] [2] Получаем значения
		result01 = parseInt(birthdate);
		while ( result01 > 22 ) { result01 = result01 - 22 };

		result02 = parseInt(birthmonth);
		while ( result02 > 22 ) { result02 = result02 - 22 };

		// [3]
		var yearsum = 0;
		for (var i = 0; i < birthyear.length; i++) {
			yearsum += parseInt(birthyear[i]);
		}
		result03 = yearsum;
		while ( result03 > 22 ) { result03 = result03 - 22 };

		// [4]
		result04 = result01 + result02;
		if ( result04 == 0 ) { result04 = 22 };
		while ( result04 > 22 ) { result04 = result04 - 22 };

		// [5]
		result05 = result02 + result03;
		if ( result05 > 22 ) { result05 = result05 - 22 };
		if ( result05 == 0 ) { result05 = 22 };
		while ( result05 > 22 ) { result05 = result05 - 22 };

		// [6]
		result06 = result04 + result05;
		if ( result06 == 0 ) { result06 = 22 };
		while ( result06 > 22 ) { result06 = result06 - 22 };

		// [7]
		result07 = result01 + result05;
		if ( result07 == 0 ) { result07 = 22 };
		while ( result07 > 22 ) { result07 = result07 - 22 };

		// [8]
		result08 = result02 + result06;
		if ( result08 == 0 ) { result08 = 22 };
		while ( result08 > 22 ) { result08 = result08 - 22 };

		// [9]
		result09 = result07 + result08;
		if ( result09 == 0 ) { result09 = 22 };
		while ( result09 > 22 ) { result09 = result09 - 22 };

		// [10]
		result10 = result01 + result04 + result06;
		if ( result10 == 0 ) { result10 = 22 };
		while ( result10 > 22 ) { result10 = result10 - 22 };

		// [11]
		result11 = result03 + result05 + result06;
		if ( result11 == 0 ) { result11 = 22 };
		while ( result11 > 22 ) { result11 = result11 - 22 };

		// [12]
		result12 = result01 + result02 + result03 + result04 + result05 + result06;
		if ( result12 == 0 ) { result12 = 22 };
		while ( result12 > 22 ) { result12 = result12 - 22 };

		result01 = result01 + yearnum;
		while ( result01 > 22 ) { result01 = result01 - 22 };
		result02 = result02 + yearnum;
		while ( result02 > 22 ) { result02 = result02 - 22 };
		result03 = result03 + yearnum;
		while ( result03 > 22 ) { result03 = result03 - 22 };
		result04 = result04 + yearnum;
		while ( result04 > 22 ) { result04 = result04 - 22 };
		result05 = result05 + yearnum;
		while ( result05 > 22 ) { result05 = result05 - 22 };
		result06 = result06 + yearnum;
		while ( result06 > 22 ) { result06 = result06 - 22 };
		result07 = result07 + yearnum;
		while ( result07 > 22 ) { result07 = result07 - 22 };
		result08 = result08 + yearnum;
		while ( result08 > 22 ) { result08 = result08 - 22 };
		result09 = result09 + yearnum;
		while ( result09 > 22 ) { result09 = result09 - 22 };
		result10 = result10 + yearnum;
		while ( result10 > 22 ) { result10 = result10 - 22 };
		result11 = result11 + yearnum;
		while ( result11 > 22 ) { result11 = result11 - 22 };
		result12 = result12 + yearnum;
		while ( result12 > 22 ) { result12 = result12 - 22 };

		// Выводим результат на экран
		document.getElementById('rr01').textContent = convertToRoman(result01);
			document.getElementById('rs01').textContent = convertToSub(result01);
			document.getElementById('ri01').src = pimg[result01];
		document.getElementById('rr02').textContent = convertToRoman(result02);
			document.getElementById('rs02').textContent = convertToSub(result02);
			document.getElementById('ri02').src = pimg[result02];
		document.getElementById('rr03').textContent = convertToRoman(result03);
			document.getElementById('rs03').textContent = convertToSub(result03);
			document.getElementById('ri03').src = pimg[result03];
		document.getElementById('rr04').textContent = convertToRoman(result04);
			document.getElementById('rs04').textContent = convertToSub(result04);
			document.getElementById('ri04').src = pimg[result04];
		document.getElementById('rr05').textContent = convertToRoman(result05);
			document.getElementById('rs05').textContent = convertToSub(result05);
			document.getElementById('ri05').src = pimg[result05];
		document.getElementById('rr06').textContent = convertToRoman(result06);
			document.getElementById('rs06').textContent = convertToSub(result06);
			document.getElementById('ri06').src = pimg[result06];
		document.getElementById('rr07').textContent = convertToRoman(result07);
			document.getElementById('rs07').textContent = convertToSub(result07);
			document.getElementById('ri07').src = pimg[result07];
		document.getElementById('rr08').textContent = convertToRoman(result08);
			document.getElementById('rs08').textContent = convertToSub(result08);
			document.getElementById('ri08').src = pimg[result08];
		document.getElementById('rr09').textContent = convertToRoman(result09);
			document.getElementById('rs09').textContent = convertToSub(result09);
			document.getElementById('ri09').src = pimg[result09];
		document.getElementById('rr10').textContent = convertToRoman(result10);
			document.getElementById('rs10').textContent = convertToSub(result10);
			document.getElementById('ri10').src = pimg[result10];
		document.getElementById('rr11').textContent = convertToRoman(result11);
			document.getElementById('rs11').textContent = convertToSub(result11);
			document.getElementById('ri11').src = pimg[result11];
		document.getElementById('rr12').textContent = convertToRoman(result12);
			document.getElementById('rs12').textContent = convertToSub(result12);
			document.getElementById('ri12').src = pimg[result12];

}

function convertToRoman(num) {
	const romanNumerals = {
		M: 1000,
		CM: 900,
		D: 500,
		CD: 400,
		C: 100,
		XC: 90,
		L: 50,
		XL: 40,
		X: 10,
		IX: 9,
		V: 5,
		IV: 4,
		I: 1
	};
	let roman = '';

	for (let key in romanNumerals) {
		while (num >= romanNumerals[key]) {
			roman += key;
			num -= romanNumerals[key];
		}
	}

	return roman;
}


function convertToSub(card) {
	const SubNumerals = {
		1: 'M ☿ 🧘',
		2: 'Ж ☾ 🧘',
		3: 'Ж ♀ 🌳',
		4: 'М ♈️ 🌳',
		5: 'М ♉️ 🧘',
		6: 'Н ♊️ 🌳',
		7: 'М ♋️ 🧘',
		8: 'Ж ♎️ 🌳',
		9: 'Н ♍ 🧘',
		10: 'Н ♃ 🌳',
		11: 'М ♌️ 🌳',
		12: 'Н ♆ 🧘',
		13: 'Ж ♏️ 🧘',
		14: 'Н ♐️ 🧘',
		15: 'М ♑️ 🌳',
		16: 'Н ♂ 🌳',
		17: 'Ж ♒️ 🧘',
		18: 'Ж ♓️ 🌳',
		19: 'М ☉ 🧘',
		20: 'Н ♇ 🌳',
		21: 'Н ♄ 🧘',
		22: 'Н ♅ 🌳',
	};

	return SubNumerals[card];
}

