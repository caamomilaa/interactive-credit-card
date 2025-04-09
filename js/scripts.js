//CONSTANTES DEL CARD

const cardholderElement = document.getElementById('cardholder');
const cardNumberElement = document.getElementById('card-number');
const monthElement = document.getElementById('month');
const yearElement = document.getElementById('year');
const cvcElement = document.getElementById('cvc');

//CONSTANTES DEL FORMULARIO

const inputNameElement = document.getElementById('input-name');
const inputNumberElement = document.getElementById('input-number');
const inputMonthElement = document.getElementById('input-month');
const inputYearElement = document.getElementById('input-year');
const inputCvcElement = document.getElementById('input-cvc');
const formElement = document.getElementById('form');

//CONSTANTES DE ERROR

const nameErrorElement = document.getElementById('card-name-error');
const numberErrorElement = document.getElementById('card-number-error');
const dateErrorElement = document.getElementById('card-date-error');
const cvcErrorElement = document.getElementById('card-cvc-error');

//LÓGICA
const onlyLetters = /^[a-zA-Z\s]+$/; //Expresión Regular para validar letras y espacios.
const onlyNumbers = /^\d+$/; //Expresión Regular que valida solo números.
const onlyMonths = /^(0[1-9]|1[0-2])$/; //va de 01 a 12
const onlyYears = /^(0[1-9]|[1-9][0-9])$/; // va de 01 a 99
const onlyThreeDigits = /^\d{3}$/;

const changeCardholderName = () => {
  const name = inputNameElement.value;
  cardholderElement.textContent = name;
  if (name === '') {
    cardholderElement.textContent = `Perro Sanche`;
  }
};
inputNameElement.addEventListener('input', changeCardholderName);

const validateCardholderName = () => {
  const name = inputNameElement.value;

  if (onlyLetters.test(name)) {
    nameErrorElement.classList.remove('error');
    nameErrorElement.classList.add('hide');
  } else if (name === '') {
    cardholderElement.textContent = `Perro Sanche`;
    nameErrorElement.classList.remove('hide');
    nameErrorElement.classList.add('error');
    nameErrorElement.textContent = `Can't be blank`;
  } else {
    nameErrorElement.classList.remove('hide');
    nameErrorElement.classList.add('error');
    nameErrorElement.textContent = `Wrong format`;
  }
};

const changeCardNumber = () => {
  const number = inputNumberElement.value;
  cardNumberElement.textContent = number;
  if (number === '') {
    cardNumberElement.textContent = `0000 0000 0000 0000`;
  }
};
inputNumberElement.addEventListener('input', changeCardNumber);

const validateCardNumber = () => {
  const number = inputNumberElement.value;

  if (onlyNumbers.test(number) && number.length === 16) {
    inputNumberElement.classList.remove('error');
    inputNumberElement.classList.add('hide');
  } else if (number === '') {
    inputNumberElement.textContent = `0000 0000 0000 0000`;
    inputNumberElement.classList.remove('hide');
    inputNumberElement.classList.add('error');
    inputNumberElement.textContent = `Can't be blank`;
  } else {
    inputNumberElement.classList.remove('hide');
    inputNumberElement.classList.add('error');
    inputNumberElement.textContent = `Wrong format`;
  }
};

const changeMonth = () => {
  const month = inputMonthElement.value;
  monthElement.textContent = month;
  if (month === '') {
    cardNumberElement.textContent = `MM`;
  }
};
inputMonthElement.addEventListener('input', changeMonth);

const validateMonth = () => {
  const month = inputMonthElement.value;
  monthElement.textContent = month;

  if (onlyMonths.test(month) || month === '') {
    inputMonthElement.classList.remove('error');
    inputMonthElement.classList.add('hide');
  } else if (month === '') {
    inputMonthElement.textContent = `MM`;
    inputMonthElement.classList.remove('hide');
    inputMonthElement.classList.add('error');
    inputMonthElement.textContent = `Can't be blank`;
  } else {
    inputMonthElement.classList.remove('hide');
    inputMonthElement.classList.add('error');
    inputMonthElement.textContent = `Wrong format`;
  }
};

const validateYear = () => {
  const year = inputYearElement.value;
  yearElement.textContent = year;
  if (onlyYears.test(year) || year === '') {
    inputYearElement.classList.remove('error');
    console.log('ta bien');
  } else {
    console.log('fatal');
    inputYearElement.classList.remove('hide');
    inputYearElement.classList.add('error');
  }
};
inputYearElement.addEventListener('input', validateYear);

const validateCvc = () => {
  const cvc = inputCvcElement.value;
  cvcElement.textContent = cvc;
  if (onlyThreeDigits.test(cvc) || cvc === '') {
    inputCvcElement.classList.remove('error');
    console.log('ta bien');
  } else {
    console.log('fatal');
    inputCvcElement.classList.remove('hide');
    inputCvcElement.classList.add('error');
  }
};
inputCvcElement.addEventListener('input', validateCvc);

//validación del formulario con botón:

const validateForm = event => {
  event.preventDefault();
  validateCardholderName();
  validateCardNumber();
  validateMonth();
};
formElement.addEventListener('submit', validateForm);

// El formulario se validará al darle al botón de confirm.
// El nombre no puede contener dígitos
// El card number no puede tener letras
// El mes tiene que ser válido, el año no (no sabéis validarlo aún)
// Ningún campo puede estar vacío
// Los textos de la tarjeta cambiarán según escribamos en la tarjeta, y si borramos el contenido del formulario la tarjeta volverá a tener su texto por defecto

//UPDATED
