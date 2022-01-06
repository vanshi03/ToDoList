let  inputelement = document.querySelector('input');
let  formelement = document.querySelector('form');
let  listelement = document.querySelector('ul');
let  totaltaskselement = document.querySelector('#total-tasks');

let tasklist = [
	'Buy Groceries',
	'Car Service'
];

function deleteitem(e){
	let task = e.target.parentElement.previousElementSibling.innerHTML;
	let index = tasklist.indexOf(task);
	if(index!==-1){
		tasklist.splice(index,1);

		/*let months = ["January", "February", "Monday", "Tuesday"];
		let days = months.splice(2, 1);

		console.log(days); // ["Monday"]
		console.log(months); // ["January", "February", "Tuesday"]*/
	}
	populatelist();
}
function populatelist(){
	listelement.innerHTML='';
	tasklist.forEach(function(item){
		let newitem = document.createElement('li');

		//adding enew span for text
		let span = document.createElement('span');
		span.innerHTML = item;
		newitem.appendChild(span);

		//add delete button
		let anchorelement = document.createElement('a');
		anchorelement.classList.add('delete');
		anchorelement.innerHTML='<i class="fas fa-trash-alt"></i>';
		newitem.appendChild(anchorelement);

		anchorelement.addEventListener('click',(e)=> deleteitem(e));

		//add Li to ul

		listelement.appendChild(newitem);		// Ul->Li->span->anchor
												// span and anchor-> i


	});

	totaltaskselement.innerHTML=tasklist.length;
	inputelement.value='';
}

populatelist();

function addtask(){
	if(inputelement.value){
		tasklist.push(inputelement.value);
		populatelist();
	}

}
formelement.addEventListener('submit',function(e){
	e.preventDefault();
	addtask();
});