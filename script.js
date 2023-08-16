const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Check email is valid
function isValidEmail(email) {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, '아이디를 입력해주세요');
    } else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, '이메일을 입력해주세요');
    } else if (!isValidEmail(email.value)) {
        showError(email, '올바른 이메일이 아닙니다' )
    } else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, '비밀번호를 입력해주세요');
    } else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, '비밀번호 확인을 입력해주세요');
    } else {
        showSuccess(password2);
    }
    
});