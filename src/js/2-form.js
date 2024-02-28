const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('form');

function inputHandler() {
  const data = {
    email: form.email.value.trim(),
    message: form.message.value.trim(),
  };

  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);
}

function submitHandler(event) {
  event.preventDefault();

  const data = {
    email: event.target.email.value.trim(),
    message: event.target.message.value.trim(),
  };

  if (event.target.email.value === '' || event.target.message.value === '') {
    alert('All form fields must be filled in');
  } else {
    console.log(data);
  }

  const jsonData = JSON.stringify(data);
  localStorage.setItem(STORAGE_KEY, jsonData);

  form.reset();
}

const rawData = localStorage.getItem(STORAGE_KEY);
if (rawData) {
  const data = JSON.parse(rawData);
  form.email.value = data.email;
  form.message.value = data.message;
}

form.addEventListener('submit', submitHandler);
form.addEventListener('input', inputHandler);
