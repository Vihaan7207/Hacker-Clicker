const button = document.querySelector('#button');
const moneyEl = document.querySelector('#money');
const mpcEl = document.querySelector('#mpc');
const cpsEl = document.querySelector('#cps');
let money = parseInt(localStorage.getItem('hackerclicker:money')) || 0;
let mpc = parseInt(localStorage.getItem('hackerclicker:mpc')) || 1;
let cps = parseInt(localStorage.getItem('hackerclicker:cps')) || 0;

const reset = () => {
	money = 0;
	mpc = 1;
	cps = 0;
	console.log('progress reset')
}

button.addEventListener('click', () => {
	money += mpc;
});
const doStuff = () => {
	console.log('hi')
}
const mpcPlus = (amount, cost) => {
	if(money >= cost){
		money -= cost;
		mpc += amount;
		// console.log(`MPC changed by +${amount} $${cost} deducted you have $${money} left`)
	}
}

const cpsPlus = (amount, cost) => {
	if(money >= cost){
		money -= cost;
		cps += amount;
	}
}

setInterval(() => {
	money += cps;
}, 1000);
setInterval(() => {
	moneyEl.innerHTML = money;
	mpcEl.innerHTML = mpc;
	cpsEl.innerHTML = cps;
}, 100)

setInterval(() => {
	localStorage.setItem('hackerclicker:money', money);
	localStorage.setItem('hackerclicker:mpc', mpc);
	localStorage.setItem('hackerclicker:cps', cps);
	console.log('progress saved')
}, 1000);