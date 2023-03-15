$("#products-button").click(function () {

    $('html,body').animate({
        scrollTop: $("#section-products").offset().top
    },
        'slow');
});



$("#products-button-menu").click(function () {

    $('html,body').animate({
        scrollTop: $("#section-products").offset().top
    },
        'slow');
});




$("#signup-button").click(function () {

    $('html,body').animate({
        scrollTop: $(".footer-signup").offset().top
    },
        'slow');
});



$("#to-top").click(function () {

    $('html,body').animate({
        scrollTop: $("#hero").offset().top
    },
        'slow');
});



$(".down-arrow").click(function () {

    $('html,body').animate({
        scrollTop: $("#section-intro").offset().top
    },
        'slow');
});


const productsArr = [

    {
        'name': 'nrp',
        'id': document.getElementById('nrp'),
        'class': document.getElementById('nrp-class')
    },
    {
        'name': 'tnf',
        'id': document.getElementById('tnf'),
        'class': document.getElementById('tnf-class')
    },
    {
        'name': 'nra',
        'id': document.getElementById('nra'),
        'class': document.getElementById('nra-class')
    },
    {
        'name': 'tpl',
        'id': document.getElementById('tpl'),
        'class': document.getElementById('tpl-class')
    },
    {
        'name': 'ccd',
        'id': document.getElementById('ccd'),
        'class': document.getElementById('ccd-class')
    },
    {
        'name': 'dnl',
        'id': document.getElementById('dnl'),
        'class': document.getElementById('dnl-class')
    },
    {
        'name': 'mpnl',
        'id': document.getElementById('mpnl'),
        'class': document.getElementById('mpnl-class')
    },
    {
        'name': 'hmsl',
        'id': document.getElementById('hmsl'),
        'class': document.getElementById('hmsl-class')
    },
    {
        'name': 'opd',
        'id': document.getElementById('opd'),
        'class': document.getElementById('opd-class')
    },
    {
        'name': 'fd',
        'id': document.getElementById('fd'),
        'class': document.getElementById('fd-class')
    },
    {
        'name': 'prd',
        'id': document.getElementById('prd'),
        'class': document.getElementById('prd-class')
    },
    {
        'name': 'dba',
        'id': document.getElementById('dba'),
        'class': document.getElementById('dba-class')
    },
    {
        'name': 'ina',
        'id': document.getElementById('ina'),
        'class': document.getElementById('ina-class')
    },
    {
        'name': 'dnc',
        'id': document.getElementById('dnc'),
        'class': document.getElementById('dnc-class')
    },
    {
        'name': 'dno',
        'id': document.getElementById('dno'),
        'class': document.getElementById('dno-class')
    },
    {
        'name': 'ntd',
        'id': document.getElementById('ntd'),
        'class': document.getElementById('ntd-class')
    },
    {
        'name': 'ss',
        'id': document.getElementById('ss'),
        'class': document.getElementById('ss-class')
    }


];


productSwitch = (name) => {


    for (let i in productsArr) {

        productsArr[i].id.style.display = 'none';
        productsArr[i].class.className = "null";

    }

    const product = productsArr.find(product => product.name === name);

    product.id.style.display = 'block';
    product.class.className = "on";


}







selectOnChange = () => {

    const sel = document.getElementById('mob-menu').value;

    for (let i in productsArr) {

        productsArr[i].id.style.display = 'none';
        productsArr[i].class.className = "null";

    }

    const product = productsArr.find(product => product.name === sel);

    product.id.style.display = 'block';
    product.class.className = "on";


    $([document.documentElement, document.body]).animate({
        scrollTop: $(".products").offset().top
    }, 1000);



}



const slider = document.querySelector('.prod-menu');
let isDown = false;
let startX;
let scrollLeft;



slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if(!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
    console.log(walk);
  });