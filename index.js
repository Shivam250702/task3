function handleButtonClick() {
    var body = document.body;
    var inputField = document.getElementById('loading-input');
    var submitBtn = document.getElementById('submit-btn');

    body.classList.add('loading');
    submitBtn.disabled = true;
    inputField.disabled = true;

  
    setTimeout(function () {
        body.classList.remove('loading');
        submitBtn.disabled = false;
        inputField.disabled = false;
    }, 2000);
}