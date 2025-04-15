function togglePassword() {
    const passwordInput = document.getElementById("password");
    const toggleIcon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleIcon.textContent = "👁️"; //changer l'icône 
    } else {
        passwordInput.type = "password";
        toggleIcon.textContent = "👁️";
    }
}

function login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    //Vérification 
    if (email && password) {
        //Enregistrement des données dans le localStorage
        localStorage.setItem('email',email);
        localStorage.setItem('password', password);

        //Fermer la fenêtre actuelle 
        window.close();
    } 
}