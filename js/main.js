// var a = 10;
// var b = 20;

// var c = a+b;

// alert("a+b="+c)
// console.log("Сумма a+b="+c);

$('.menu-open').on('click', function(e) {
    e.preventDefault();
    $('.menu').toggleClass('menu_active');
});

// $(function () {
//     $('.menu-open').click(function() {
//         $('.menu').toggleClass('menu_active')
//     })
// });


// $(document).ready(function(){
//     $('#menu_open').on('click', function(){
//         alert('Hello, it is JQuery!)')
//     })
// }) 