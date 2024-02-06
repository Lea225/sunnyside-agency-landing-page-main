window.addEventListener('DOMContentLoaded', function () {
    // Sélection de l'icône hamburger
    var iconHamburger = document.getElementById('icon-hamburger');
    
    // Sélection de la navigation mobile
    var mobileNav = document.querySelector('.mobile-nav');

    // Fonction pour afficher la navigation mobile pendant 10 secondes
    function showMobileNav() {
        mobileNav.style.display = 'flex';
        // Masquer la navigation mobile après 10 secondes
        setTimeout(function () {
            mobileNav.style.display = 'none';
        }, 10000); // 10 secondes en millisecondes
    }

    // Ajout d'un écouteur d'événement de clic à l'icône hamburger
    iconHamburger.addEventListener('click', function () {
        // Vérifier si la largeur de l'écran est inférieure ou égale à 1000px
        if (window.innerWidth <= 1000) {
            // Afficher la navigation mobile
            showMobileNav();
        }
    });
});
