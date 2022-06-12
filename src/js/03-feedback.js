
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
 form: document.querySelector('.feedback-form'),
 email: document.querySelector('[name="email"]'),
 message:  document.querySelector('[name="message"]'),

}
  refs.form.addEventListener('input', throttle(onInputWtiteLocalStorage, 500));
  refs.form.addEventListener('submit', onFormSumbit);
  
 
function onFormSumbit(e) {
  e.preventDefault();

  const {
   elements: { email, message }
 } = e.currentTarget;


 

  if (email.value === "" || message.value === "")
   {
     alert("Внимание! Все поля должны быть заполнены!");
   
   } else {
     
    saveMessage.email = email.value;
    saveMessage.message = message.value;
    console.log(saveMessage);
  
   }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

}


function onInputWtiteLocalStorage(e) {
  
  saveMessage[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(saveMessage));
}


   let saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));
 

if(saveMessage === null){
  saveMessage = {
    email: '',
    message: '',
  };
}
   
saveMessageLocalStorage(saveMessage);

    function saveMessageLocalStorage(e) {
     refs.email.value = e.email;
     refs.message.value = e.message;
     
   }

   
  