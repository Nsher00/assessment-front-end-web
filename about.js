console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submit');
}

const imgCompliment=()=>{
	alert('Such swag!');
}


let form = document.querySelector('#contact');
let img = document.querySelector('img');

form.addEventListener('submit', handleSubmit);

img.addEventListener('mouseover', imgCompliment);