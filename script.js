const $dotOne = document.querySelector('.dot1');
const $dotTwo = document.querySelector('.dot2');
const $dotThree = document.querySelector('.dot3');
const $dotFour = document.querySelector('.dot4');
const $backgroundBanner = document.querySelector('.background-banner');
const $text1 = document.querySelector('.background-banner__text1');
const $text2 = document.querySelector('.background-banner__text2');
const $text3 = document.querySelector('.background-banner__text3');
const $text4 = document.querySelector('.background-banner__text4');
const $springy = document.querySelector('.springy');
const $soft = document.querySelector('.soft');
const $knitted = document.querySelector('.knitted');
const $go = document.querySelector('.go');
var mql = window.matchMedia('(max-width: 749px)');

checkMedia(mql);
mql.addListener(checkMedia);

function checkMedia(mql) {
	if (mql.matches) {
		$backgroundBanner.classList.remove('banner1', 'banner2', 'banner3', 'banner4');
		$dotOne.addEventListener('click', () => {
			$springy.classList.add('green');
			$soft.classList.remove('green');
			$knitted.classList.remove('green');
			$go.classList.remove('green');
			$backgroundBanner.classList.remove('banner1', 'banner2', 'banner3', 'banner4');
			$text1.style = 'display: block';
			$text2.style = 'display: none';
			$text3.style = 'display: none';
			$text4.style = 'display: none';
		});

		$dotTwo.addEventListener('click', () => {
			$soft.classList.add('green');
			$springy.classList.remove('green');
			$knitted.classList.remove('green');
			$go.classList.remove('green');
			$backgroundBanner.classList.remove('banner1', 'banner2', 'banner3', 'banner4');
			$text2.style = 'display: block';
			$text1.style = 'display: none';
			$text3.style = 'display: none';
			$text4.style = 'display: none';
		});

		$dotThree.addEventListener('click', () => {
			$knitted.classList.add('green');
			$soft.classList.remove('green');
			$springy.classList.remove('green');
			$go.classList.remove('green');
			$backgroundBanner.classList.remove('banner1', 'banner2', 'banner3', 'banner4');
			$text3.style = 'display: block';
			$text1.style = 'display: none';
			$text2.style = 'display: none';
			$text4.style = 'display: none';
		});

		$dotFour.addEventListener('click', () => {
			$go.classList.add('green');
			$soft.classList.remove('green');
			$knitted.classList.remove('green');
			$springy.classList.remove('green');
			$backgroundBanner.classList.remove('banner1', 'banner2', 'banner3', 'banner4');
			$text4.style = 'display: block';
			$text1.style = 'display: none';
			$text3.style = 'display: none';
			$text2.style = 'display: none';
		});

	} else {
		$dotOne.addEventListener('click', () => {
			$backgroundBanner.classList.remove('banner2', 'banner3', 'banner4');
			$backgroundBanner.classList.add('banner1');
			$text1.style = 'display: block';
			$text2.style = 'display: none';
			$text3.style = 'display: none';
			$text4.style = 'display: none';
		});

		$dotTwo.addEventListener('click', () => {
			$backgroundBanner.classList.remove('banner1', 'banner3', 'banner4');
			$backgroundBanner.classList.add('banner2');
			$text2.style = 'display: block';
			$text1.style = 'display: none';
			$text3.style = 'display: none';
			$text4.style = 'display: none';
		});

		$dotThree.addEventListener('click', () => {
			$backgroundBanner.classList.remove('banner1', 'banner2', 'banner4');
			$backgroundBanner.classList.add('banner3');
			$text3.style = 'display: block';
			$text1.style = 'display: none';
			$text2.style = 'display: none';
			$text4.style = 'display: none';
		});

		$dotFour.addEventListener('click', () => {
			$backgroundBanner.classList.remove('banner1', 'banner2', 'banner3');
			$backgroundBanner.classList.add('banner4');
			$text4.style = 'display: block';
			$text1.style = 'display: none';
			$text3.style = 'display: none';
			$text2.style = 'display: none';
		});
	}
}
