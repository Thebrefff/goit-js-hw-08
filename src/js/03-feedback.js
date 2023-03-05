import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const storageData = {};

function storageInputData(e) {
  storageData[e.target.name] = e.target.value;
  const stringifyData = JSON.stringify(storageData);
  localStorage.setItem(STORAGE_KEY, stringifyData);
}

function restoreInput() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedData === null) {
    return;
  }
  email.value = savedData.email || '';
  message.value = savedData.message || '';
}

function clearStorageData(e) {
  e.preventDefault();
  e.currentTarget.reset();
  const storageData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  console.log(storageData);
  localStorage.removeItem(STORAGE_KEY);
}

form.addEventListener('input', throttle(storageInputData, 500));

restoreInput();

form.addEventListener('submit', clearStorageData);

