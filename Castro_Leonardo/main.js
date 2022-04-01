document.getElementById('email').addEventListener('input', function() {
    campo = event.target;
    valido = document.getElementById('emailOk');
        
    emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (emailRegex.test(campo.value)) {
      valido.innerText = "valid";
    } else {
      valido.innerText = "Please insert a valid email";
    }
});