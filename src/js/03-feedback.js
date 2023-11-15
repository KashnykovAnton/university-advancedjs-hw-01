import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const LS_KEY = 'feedback-form-state';

const { email, message } = form.elements;
const savedData = JSON.parse(localStorage.getItem(LS_KEY));

const formData = {
  email: savedData ? savedData.email : '',
  message: savedData ? savedData.message : '',
};

email.value = formData.email;
message.value = formData.message;

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSubmit);

function onFormInput(e) {
  e.preventDefault();
  const { name, value } = e.target;

  if (name === 'email') {
    formData.email = value;
  }
  if (name === 'message') {
    formData.message = value;
  }

  localStorage.setItem(LS_KEY, JSON.stringify(formData));
}

function onFormSubmit(e) {
  e.preventDefault();
  localStorage.removeItem(LS_KEY);
  form.reset();
  console.log(formData);
}
