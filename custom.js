const dialog = document.querySelector(".loginDialog");
const dialogCloseBtn = document.querySelector(".dialogCloseBtn");
const dialogOpenBtn = document.querySelector(".loginBtn");
dialogCloseBtn.addEventListener('click', function(){
    dialog.close();
});

dialogOpenBtn.addEventListener('click', function(){

     validateInputs();

});

const setError = (element, message) => {
    const input_group = element.parentElement;
    const errorDisplay = input_group.querySelector('.error');

    errorDisplay.innerText = message;
    input_group.classList.add('error');
    input_group.classList.remove('success')
}

const setSuccess = element => {
    const input_group = element.parentElement;
    const errorDisplay = input_group.querySelector('.error');

    errorDisplay.innerText = '';
    input_group.classList.add('success');
    input_group.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
const validateInputs = () => {
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();

    if(emailValue === 'balasubramanian9413@gmail.com') {
        setSuccess(email);
        if(passwordValue === 'bala1234') {
            setSuccess(password);
            dialog.showModal();// Opens a modal
        }
        else {
            setError(password, 'Incorrect Password');
        } 
    } 
    
    else {
        setError(email, 'Provide a valid email address');
    } 
}