$(".footer-menu-items").click(function () {
    $(".footer-menu-items").removeClass("active");
    if ($(this)[0].classList.contains('bi-bank')) {
        $('.parent').addClass('expanded');
        $('.children-2').addClass('show1');
        $(this).addClass("active-2");
    } else {
        $('.parent').removeClass('expanded');
        $('.bi-bank').removeClass('active-2');
        $('.children-2').removeClass('show1');
    }
    $(this).addClass("active");
});