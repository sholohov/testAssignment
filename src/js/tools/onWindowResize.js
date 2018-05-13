/**
 * Олеживает изменение размеров окна браузера и вызывает cb если привысело время указанное в duration
 * @param {function} cb каллбэк
 * @param {number} [duration=300] интервал в миллисикундах
 */
function onWindowResize(cb, duration = 300) {
	let timeout;
	let fuList = onWindowResize.fu;

	function warnText(fu) {
		console.warn(
			`Ошибка: \n\tвторым аргументом должна быть каллбэк-функция, у вас это -`,
			typeof fu
		);
	}

	if (!fuList) {
		onWindowResize.fu = fuList = [];
	}

	if (typeof cb == 'function') {
		fuList.push(cb);
	} else {
		warnText(cb);
	}

	window.addEventListener('resize', function() {
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			fuList.forEach(item => {
				item();
			});
		}, duration);
	});
}

export default onWindowResize;