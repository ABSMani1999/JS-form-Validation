
	var btn = document.querySelector('button');
	var input = document.querySelectorAll('.form-name');
	var phone = document.querySelector('#phone-no');
	var person = [];
	
	
	//console.log(phone);
	
	btn.addEventListener('click', function(e){
		e.preventDefault();
		//console.log(input);
		let flag=true;
		var exist = document.querySelectorAll('.exist');
		for(let i=0; i<input.length; i++){
			
		
			
			if(input[i].value==""){
				input[i].parentNode.getElementsByTagName('p')[0].classList.add("error-show");
				flag=false;
			}
			else{
				input[i].parentNode.getElementsByTagName('p')[0].classList.remove('error-show');
			}
			
			if(phone.value.length != 10 && flag==true){
				document.querySelector('.error-incorrect').classList.add('error-show');
				flag=false;
			}
			else{ 
				document.querySelector('.error-incorrect').classList.remove('error-show');
	}
}
	
		if(flag){
			let data={
			fisrtName:`${input[0].value}`,
			lastName:`${input[1].value}`,
			gender:`${input[2].value}`,
			email:`${input[3].value}`,
			phone:`${input[4].value}`
		}
		person.push(data);
		}
		console.log(person);		
		
	});