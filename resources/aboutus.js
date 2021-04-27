
//----------------------------------------Slide--------------------------------------------------------------------------------------
let dots= 4;
var interval;
var time_val = 3000;
let data=0;

let sliderElem    = document.querySelector('.slider')
let dotElems      = sliderElem.querySelectorAll('.slider__dot')
let indicatorElem = sliderElem.querySelector('.slider__indicator')

Array.prototype.forEach.call(dotElems, (dotElem) => {
		
interval = setInterval(function() {
		let currentPos = data
		let newPos     = data

		let newDirection     = (newPos > currentPos ? 'right' : 'left')
		let currentDirection = (newPos < currentPos ? 'right' : 'left')

		indicatorElem.classList.remove(`slider__indicator--${ currentDirection }`)
		indicatorElem.classList.add(`slider__indicator--${ newDirection }`)		
		sliderElem.setAttribute('data-pos', newPos)
		if (++data === dots-1) {
        data=0
      }
	
}, time_val);	
})