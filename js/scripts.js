document.addEventListener('DOMContentLoaded', function () {
    const ownerDeliveryCheckbox = document.getElementById('ownerDelivery');
    const thirdPartyDeliveryCheckbox = document.getElementById('thirdPartyDelivery');
    const submitBtn = document.getElementById('submitBtn');
    const confidentialInfoForm = document.getElementById('confidentialInfoForm');

    ownerDeliveryCheckbox.addEventListener('change', function () {
        if (ownerDeliveryCheckbox.checked) {
            submitBtn.disabled = false;
            thirdPartyDeliveryCheckbox.checked = false;
            confidentialInfoForm.style.display = 'none';
        } else {
            submitBtn.disabled = true;
        }
    });

    thirdPartyDeliveryCheckbox.addEventListener('change', function () {
        if (thirdPartyDeliveryCheckbox.checked) {
            confidentialInfoForm.style.display = 'block';
            ownerDeliveryCheckbox.checked = false;
            submitBtn.disabled = true;
        } else {
            confidentialInfoForm.style.display = 'none';
        }
    });
});

function validar() {
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var expresionCorreo = /^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i;

    if (!expresionCorreo.test(correo)) {
        alert("Correo electrónico inválido.");
        return false;
    }

    if (telefono.length !== 10 || isNaN(telefono)) {
        alert("Teléfono inválido. Debe contener exactamente 10 dígitos.");
        return false;
    }

    return true;
}

function deshabilitarBoton(boton) {
    if (validar()) {
        boton.disabled = true;
        boton.value = "Enviando datos ……...."; 
        this.form.submit();
    }
}

