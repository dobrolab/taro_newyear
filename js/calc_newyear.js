function calculateSum() {

		// Получаем значение даты рождения
		var birthdate = document.getElementById('birthdate').value;
		var birthmonth = document.getElementById('birthmonth').value;
		var birthyear = document.getElementById('birthyear').value;
		var calcyear = document.getElementById('calcyear').value;

		let pimg = [];
		pimg[0]  = '//dobrolab.github.io/tarocalc/img/card.jpg';
		pimg[1] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266903dc8ff1c73776b4f_optimized.webp';
		pimg[2] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668b9c327343ef95bf8d_optimized.webp';
		pimg[3] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226692cbcc01377cb1f9aa_optimized.webp';
		pimg[4] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266923dc8ff1c73776b6e_optimized.webp';
		pimg[5] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226699cbcc01377cb1f9e2_optimized.webp';
		pimg[6] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266939c327343ef95bfc8_optimized.webp';
		pimg[7] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266958b4abbcdca113a0b_optimized.webp';
		pimg[8] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226694cbcc01377cb1f9ca_optimized.webp';
		pimg[9] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266953dc8ff1c73776b84_optimized.webp';
		pimg[10] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266953dc8ff1c73776b8c_optimized.webp';
		pimg[11] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266869c327343ef95bf5b_optimized.webp';
		pimg[12] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266878b4abbcdca113999_optimized.webp';
		pimg[13] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226687cbcc01377cb1f957_optimized.webp';
		pimg[14] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266879c327343ef95bf61_optimized.webp';
		pimg[15] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/68226687cbcc01377cb1f94b_optimized.webp';
		pimg[16] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266862dc243710eb3466e_optimized.webp';
		pimg[17] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266872dc243710eb34681_optimized.webp';
		pimg[18] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/682266928b4abbcdca1139ef_optimized.webp';
		pimg[19] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668ccbcc01377cb1f980_optimized.webp';
		pimg[20] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668d3dc8ff1c73776b22_optimized.webp';
		pimg[21] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668b8b4abbcdca1139b6_optimized.webp';
		pimg[22] =	'//res2.weblium.site/res/64cb8ed4c14740000f01a652/6822668e2dc243710eb346aa_optimized.webp';


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

