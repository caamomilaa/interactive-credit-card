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
const buttonElement = document.getElementById('confirm-button');

//CONSTANTES DE ERROR

const nameErrorElement = document.getElementById('card-name-error');

const changeCardholderName = () => {
	const validateLetters =
		'ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnñopqrstuvwxyz';
	const newName = inputNameElement.value;
	let value = '';
	for (const letters of newName) {
		if (validateLetters.includes(letters.charAt(0))) {
			value += letters;
		} else {
			const activateError = inputNameElement.classList.add('form-input-error');
			return activateError;
			//se queda en true y hay que pasrlo a false
		}
	}
	cardholderElement.textContent = newName;
};
inputNameElement.addEventListener('input', changeCardholderName);

//validación del formulario con botón:

const validateForm = () => {
	nameErrorElement.classList.remove('hide');
};
buttonElement.addEventListener('click', validateForm);

// El formulario se validará al darle al botón de confirm.
// El nombre no puede contener dígitos
// El card number no puede tener letras
// El mes tiene que ser válido, el año no (no sabéis validarlo aún)
// Ningún campo puede estar vacío
// Los textos de la tarjeta cambiarán según escribamos en la tarjeta, y si borramos el contenido del formulario la tarjeta volverá a tener su texto por defecto
