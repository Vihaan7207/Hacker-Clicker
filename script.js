const button = document.querySelector('#button');
const moneyEl = document.querySelector('#money');
const mpcEl = document.querySelector('#mpc');
const cpsEl = document.querySelector('#cps');
let money = parseInt(localStorage.getItem('clicker:money')) || 0;
let mpc = parseInt(localStorage.getItem('clicker:mpc')) || 1;
let cps = parseInt(localStorage.getItem('clicker:cps')) || 0;

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
		console.log(`MPC changed by +${amount} $${cost} deducted you have $${money} left`)
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
	localStorage.setItem('clicker:money', money);
	localStorage.setItem('clicker:mpc', mpc);
	localStorage.setItem('clicker:cps', cps);
	console.log('progress saved')
}, 5000);