import '../css/common.css';
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const { email, message } = form.elements;

const onInput = event => {
  event.preventDefault();
  let dataForm = { email: email.value, message: message.value };
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(dataForm));
};
form.addEventListener('input', throttle(onInput, 500));

const onFormSubmit = event => {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
};
form.addEventListener('submit', onFormSubmit);

let storageData = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));
const reloadPage = event => {
  if (storageData) {
    email.value = storageData.email || '';
    message.value = storageData.message || '';
  }
};
