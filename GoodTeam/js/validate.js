




let selectContent = '';
// благодяря этой переменной мы будем проводить валидацию форму - был ли произведен выбор вакансии
document.querySelector('.custom-select-wrapper').addEventListener('click', function () {
  this.querySelector('.custom-select').classList.toggle('open');
})

for (const option of document.querySelectorAll(".custom-option")) {
  option.addEventListener('click', function () {
    if (!this.classList.contains('selected')) {
      this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
      this.classList.add('selected');
      this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
      selectContent = this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
    }
  })
}
window.addEventListener('click', function (e) {
  const select = document.querySelector('.custom-select');
  if (!select.contains(e.target)) {
    select.classList.remove('open');
  }
});


const form = document.querySelector('.form');
const profession = document.querySelector('.custom-select__trigger span').textContent;
const username = document.querySelector('.username');
const date = document.querySelector('.form-date');
const gender = document.querySelector('.gender');
const phone = document.querySelector('.form-phone');
const email = document.querySelector('.form-email');


let submitBtn = document.querySelector('.btn__submit');
let formSubmit = document.querySelector('.form');


submitBtn.onclick = function(e) {
  checkInputs();
  validateSubmit();
  if (erorreArray < 1) {
    formSubmit.submit('отправка');
    console.log('отправляем JSON файл');
    form.addEventListener('submit', e => {
      e.preventDefault();
      erorreArray = 1;
      document.location.href = "submit.html";
    });
  } else {
    e.preventDefault();
    console.log('валидация не пройдена');
  }
}

function checkInputs() {
  // const profession = ();
  const usernameValue = username.value;
  const dateValue = date.value.trim();
  const phoneValue = phone.value.trim();
  const emailValue = email.value.trim();

  // проверка поля Профессия

  if (selectContent === '') {
    setErrorFor(profession, 'выберите профессию');
  } else {
    setSuccessFor(profession);
  }

  // проверка поля ФИО

  if (usernameValue === '') {
    setErrorFor(username, 'Это поле не может быть пустым');
  } else if (!isName(usernameValue)) {
    setErrorFor(username, 'Введите корректные данные');
  } else {
    setSuccessFor(username);
  }

  // проверка поля Дата рождения

  if (dateValue === '') {
    setErrorFor(date, 'Укажите дату рождения');
  } else if (!validDate(dateValue)) {
    setErrorFor(date, 'введите формат дд.мм.гггг ');
  } else {
    setSuccessFor(date);
  }

  // проверка поля Пол

  if (!validateGender(gender)) {
    setErrorFor(gender, 'укажите пол');
  } else {
    setSuccessFor(gender);
  }

  // проверка Номера телефона

  if (phoneValue === '') {
    setErrorFor(phone, 'укажите телефон');

  } else {
    setSuccessFor(phone);
  }

  // проверка поля Email

  if (emailValue === '') {
    setErrorFor(email, 'введите email');
  } else if (!validateEmail(emailValue)) {
    setErrorFor(email, 'поле заполнено не корректно');
  } else {
    setSuccessFor(email);
  }
}

let erorreArray = 1;

// отрисовываем ошибки 

function setErrorFor(input, message) {
  if (input === 'вакансия') {
    if (erorreArray >= 6) {
      erorreArray = 6;
    }
    erorreArray++;
    const formControl = document.querySelector('.custom-select-wrapper').parentElement;
    const small = document.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
  } else {

    const formControl = input.parentElement;
    const small = input.parentElement.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
    erorreArray++;
    if (erorreArray >= 6) {
      erorreArray = 6;
    }
  }
}


// проверяем нажатие обоих chtcbjx и активируем  кнопку submit

let chbox;

chbox1 = document.getElementById('forn-agreement');
chbox2 = document.getElementById('forn-captcha');

chbox1.onclick = function () {
  chbox = chbox1;
  validateSubmit();
};

chbox2.onclick = function () {
  chbox = chbox1;
  validateSubmit();
};

let captcha = document.querySelector('.forn-captcha');
let agree = document.querySelector('.forn-agreement');
let submit = document.querySelector('.btn__submit');


validateSubmit = function () {
  if (captcha.querySelector('input[name="captcha"]:checked') && agree.querySelector('input[name="agreement"]:checked')) {
      submit.classList.add('active');
      submit.disabled = false;
    } else {
      submit.disabled = true;
  }
}






    // ------------- ВАЛИДАЦИЯ ---------------- //

    // валидация Select

    function setSuccessFor(input) {
      if (input == profession) {
        const formControl = document.querySelector('.custom-select-wrapper').parentElement;
        formControl.className = 'form-control success';
        erorreArray = erorreArray -2;
      } else {
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
        erorreArray--;
      }
    }






    // валидация ФИО

    function isName(username) {
      return /^[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{0,}\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,}(\s[А-ЯA-Z][а-яa-zА-ЯA-Z\-]{1,})?$/.test(username);
    }

    // валидация Даты

    function validDate(date) { // date в формате 31.12.2014
      var d_arr = date.split('.');
      var d = new Date(d_arr[2] + '/' + d_arr[1] + '/' + d_arr[0] + ''); // дата в формате 2014/12/31
      if (d_arr[2] != d.getFullYear() || d_arr[1] != (d.getMonth() + 1) || d_arr[0] != d.getDate()) {
        return false; // неккоректная дата
      };
      return true;
    }

    // валидация Gender

    validateGender = function (gender) {
      if (gender.querySelector('input[name="gender"]:checked')) {
        return true;
      }
      return false;
    }

    function validateEmail(email) {
      var regular = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      return regular.test(String(email).toLowerCase());
    }