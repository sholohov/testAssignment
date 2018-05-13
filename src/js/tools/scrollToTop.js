export function scrollPageToTop() {
	function getScroll() {
		return document.documentElement.scrollTop;
	}
	function run() {
		if (getScroll() > 0) {
			requestAnimationFrame(run);
			window.scrollBy(0, -Math.max((getScroll() / 6), 1));
		}
	}
	run();
	console.warn("warn");
}