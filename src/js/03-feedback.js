
import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
 form: document.querySelector('.feedback-form'),
 email: document.querySelector('[name="email"]'),
 message:  document.querySelector('[name="message"]'),

}

  refs.form.addEventListener('submit', onFormSumbit);
  refs.form.addEventListener('input', throttle(onInputWtiteLocalStorage, 500));

const users = {
  email: '',
  message: '',

}
saveMessageLocalStorage()

function onInputWtiteLocalStorage(e) {
  if (e.target === refs.email) {
    users.email = e.target.value;
  }
  
  if (e.target === refs.message) {
    users.message = e.target.value;
  }

   localStorage.setItem(STORAGE_KEY, 
    JSON.stringify(users));
}

function onFormSumbit(e) {
  e.preventDefault();

  const {
   elements: { email, message }
 } = e.currentTarget;


 

  if (email.value === "" || message.value === "")
   {
     alert("Внимание! Все поля должны быть заполнены!");
   
   } else {
     
       users.email = email.value;
       users.message = message.value;
       
  
   }

  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);

  console.log(users);
   
}

function saveMessageLocalStorage() {
  const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY
  ));

  if(saveMessage){

    refs.email.value = saveMessage.email;
    refs.message.value = saveMessage.message;
    console.log(saveMessage);
  }
}