function showAlert() {
    alert("Ваша заявка обрабатывается, но, так как у Бугра дела, вам ответит его шнырь Аркадий");
}

document.addEventListener('DOMContentLoaded', () => { 
    const burgerMenu = document.getElementById('burgerMenu'); 
    const navLinks = document.getElementById('navLinks');

    burgerMenu.addEventListener('click', () => { 
        navLinks.classList.toggle('active'); 
    });
});
