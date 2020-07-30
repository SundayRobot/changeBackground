const buttonup = document.getElementById('thebutton');
const input = document.getElementById('theinput');
const message = document.getElementById("message");
const reset = document.getElementById("reset");

buttonup.addEventListener('click', ()=>{
		if(input.value === '' || input.value.length < 1){
			message.textContent = 'please type something into the input field'
   }else{
			document.body.style.backgroundColor = input.value;
	  	message.style.display = 'none';
	 }											
 }); 

reset.addEventListener('click', ()=>{ document.body.style.background = 'transparent' })

input.addEventListener("keyup", (e)=>{
	if(e.keyCode === 13){
		e.preventDefault();
		buttonup.click();
	}
});