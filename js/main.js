(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 45) {
            $('.navbar').addClass('sticky-top shadow-sm');
        } else {
            $('.navbar').removeClass('sticky-top shadow-sm');
        }
    });
    
    
    // Dropdown on mouse hover
    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $(window).on("load resize", function() {
        if (this.matchMedia("(min-width: 992px)").matches) {
            $dropdown.hover(
            function() {
                const $this = $(this);
                $this.addClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "true");
                $this.find($dropdownMenu).addClass(showClass);
            },
            function() {
                const $this = $(this);
                $this.removeClass(showClass);
                $this.find($dropdownToggle).attr("aria-expanded", "false");
                $this.find($dropdownMenu).removeClass(showClass);
            }
            );
        } else {
            $dropdown.off("mouseenter mouseleave");
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        margin: 24,
        dots: true,
        loop: true,
        nav : false,
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);


// Função validar formulário
function validarFormulario(event) {
    event.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const review = document.getElementById('avaliacao').value;
    const botao = document.getElementById('btn-submit');

    const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 3500,
        timerProgressBar: true
    });

    // Validação
    if (nome.trim() === "" || email.trim() === "" || review.trim().length < 10) {
        Toast.fire({
            icon: 'error',
            title: 'Ops! Verifique se preencheu tudo corretamente.',
            showClass: { popup: 'animate__animated animate__headShake' }
        });
        return;
    }

    // --- SUCESSO ---
    
    // 1. Força a cor VERDE e desabilita para evitar cliques duplos
    botao.style.setProperty('background-color', '#28a745', 'important');
    botao.style.setProperty('color', '#fff', 'important');
    botao.innerHTML = 'ENVIADO COM SUCESSO! <i class="fa fa-check"></i>';
    botao.disabled = true;

    // 2. Alerta com animação de "Pulo Elástico" (RubberBand)
    Toast.fire({
        icon: 'success',
        title: `Obrigado, ${nome}! Sua avaliação foi enviada.`,
        showClass: {
            // Sobe e depois dá o efeito elástico
            popup: 'animate__animated animate__backInUp animate__rubberBand' 
        },
        hideClass: {
            popup: 'animate__animated animate__backOutDown'
        }
    });
}


// Modo Escuro
function alternarTema() {
    const corpo = document.body;
    const icone = document.getElementById('tema-icone');
    
    corpo.classList.toggle("dark-mode");
    
    if (corpo.classList.contains("dark-mode")) {
        icone.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem("tema-preferido", "dark");
    } else {
        icone.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem("tema-preferido", "light"); 
    }
}

window.addEventListener('DOMContentLoaded', () => {
    const temaSalvo = localStorage.getItem("tema-preferido");
    const corpo = document.body;
    const icone = document.getElementById('tema-icone');

    if (temaSalvo === "dark") {
        corpo.classList.add("dark-mode");
        if (icone) icone.classList.replace('fa-moon', 'fa-sun');
    }
});

let labelStar1 = document.getElementById("1")

const Stars = document.getElementsByClassName("star")

for (let i = 0; i < (Stars.length); i++) {
    let item = Stars[i]
    item.addEventListener('click', () => {
  
        for (let y = 0; y < item.id; y++) {
            Stars[y].style.color = 'gold'
        }
        for (let y = item.id; y <= 5; y++) {
            Stars[y].style.color = 'var(--bs-gray-dark)'
        }

    })
    item.addEventListener('mousedown', () => {
        item.style.color = 'goldenrod'
    })
}