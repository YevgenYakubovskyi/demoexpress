function sendEmail(){
    let params = {
        from_name: document.getElementById('from_name').value,
        email:document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        from_cod: document.getElementById('from_cod').value,
        to_cod: document.getElementById('to_cod').value,
        message: document.getElementById('message').value,
    };

    emailjs.send("service_lww2olu","template_rw9a1s7", params).then(
        (response) => {
            alert('SUCCESS!', response.status, response.text);
            document.getElementById('from_name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('phone').value = '';
            document.getElementById('from_cod').value = '';
            document.getElementById('to_cod').value = '';
            document.getElementById('message').value = '';
        },
        (error) => {
            alert('FAILED...', error);
        },
    );

}