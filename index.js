
function addPriceProducts(price1, price2, price3) {
    return price1 + price2 + price3;
}

function addTotal(price1, price2) {
    return price1 + price2;
}


//* Start Remove Product from the list of products

const closeButtons = document.querySelectorAll('.fa-solid');

closeButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
        switch(index) {
            case 1:
                $('#product-1').fadeOut(1000);
                break;
            case 2:
                // Action for second button
                $('#product-2').fadeOut(1000);
                break;
            // Add more cases as needed
            default:
                $('#product-3').fadeOut(1000);
        }
    });
});

//* Changer le text de code Coupon 

$('#couponcode').on('click', function () {
    $(this).attr('placeholder', 'Enter...');
});

//* Fonctionner Button Apply Coupon 

const couponCondition = /^.{6,}$/;

$('#applycoupon').on('click', function() {
     let couponCodeValue = document.getElementById('couponcode').value;
     if (couponCondition.test(couponCodeValue)) {
        $('#entercouponcode').text('$50 USD discount');
        $('#entercouponcode').css('color', 'green');
        $('#totalcost').text(` $ ${redudCtion}`);
     }else {
        $('#entercouponcode').text('Your coupon code is incorrect. Please try again.');
        $('#entercouponcode').css('color', 'red');
     }
})

/**
 * TODO: The Global price of products
 * */

let firstPrice = $('#price-1').text('$' + 999.99);
let secondPrice = $('#price-2').text('$' + 399.85);
let thirdPrice = $('#price-3').text('$' + 1199.95);

firstPrice = 999.99;
secondPrice = 399.85;
thirdPrice = 1199.95;

const subTotal = addPriceProducts(firstPrice, secondPrice, thirdPrice);

const formatted = subTotal.toFixed(2); 

$('#subcost').text(`$ ${formatted}`);

/**
 * TODO: The Sub Total + Tax for last price 
 * */

let tax = $('#taxcost').text(`$ ${623.28}`);

tax = 623.28;

let total = addTotal(subTotal, tax);

const lastPrice = total.toFixed(2);

$('#totalcost').text(` $ ${lastPrice}`);

/**
 * TODO: reduction 50% de last price
 * */

const reductionPrice = total - 50;

const redudCtion = reductionPrice.toFixed(2);

//* Changer la valeur de input contcat information

let firstName = document.getElementById('name');

$(firstName).on('click', function() {
    $(this).attr('placeholder', 'Enter...');
})

let userEmail = document.getElementById('email');

$(userEmail).on('click', function() {
    $(this).attr('placeholder', 'Enter...');
})

let postalCode = document.getElementById('postalcode');

$(postalCode).on('click', function() {
    $(this).attr('placeholder', 'Enter...');
})

let country = document.getElementById('country');

$(country).on('click', function() {
    $(this).attr('placeholder', 'Enter...');
})

//* La verification des informations de l'utilisateur 

const usernameRegex = /^[a-zA-Z\s]{6,}$/;

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const counrtyRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ'’\- ]{2,50}$/;

const postalCodeRegex = /^[A-Za-z0-9\s\-]{3,10}$/;




$('#continue').on('click', function() {
    let nameValue = document.getElementById('name').value;

    let emailValue = document.getElementById('email').value;

    let countryValue = document.getElementById('country').value;

    let postalCodeValue = document.getElementById('postalcode').value;


    if(usernameRegex.test(nameValue)) { 
        if(emailRegex.test(emailValue)) {
            if(counrtyRegex.test(countryValue)) {
                if(postalCodeRegex.test(postalCodeValue)) {
                    $('.parent-page .backfunction').css('display', 'block');
                    $('.parent-page .backfunction').css('display', 'flex');
                    setTimeout( function () {
                        $('.parent-page .backfunction').css('opacity', '0');
                        $('.parent-page .backfunction').css('transition', '0.8s');
                    }, 3000);
                } else {
        $('#enterpostal').text('Your postal code is incorrect. Please try again.');
        $('#enterpostal').css('color', 'red');
    }
            } else {
        $('#entercountry').text('Your country is incorrect. Please try again.');
        $('#entercountry').css('color', 'red');
    }
        } else {
        $('#enteremail').text('Your email is incorrect. Please try again.');
        $('#enteremail').css('color', 'red');
    }
    } else {
        $('#entercountry').text('Your country is incorrect. Please try again.');
        $('#entercountry').css('color', 'red');
        $('#enterpostal').text('Your postal code is incorrect. Please try again.');
        $('#enterpostal').css('color', 'red');
        $('#enternameinfo').text('Your First & Last name is incorrect. Please try again.');
        $('#enternameinfo').css('color', 'red');
        $('#enteremail').text('Your email is incorrect. Please try again.');
        $('#enteremail').css('color', 'red');
    }

})

//* fonctionner down icon et country value 

let downIcon = document.getElementById('down');

$(downIcon).on('click', function() {
    $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'block');
})

$('#maroc').on('click', function() {
    $('#country').val('Morocco');

    if($('#country').val() == 'Morocco') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#usa').on('click', function() {
    $('#country').val('United States');

    if($('#country').val() == 'United States') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#canada').on('click', function() {
    $('#country').val('Canada');

    if($('#country').val() == 'Canada') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#france').on('click', function() {
    $('#country').val('French');

    if($('#country').val() == 'French') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#espagne').on('click', function() {
    $('#country').val('Espagne');

    if($('#country').val() == 'Espagne') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#suisse').on('click', function() {
    $('#country').val('Suisse');

    if($('#country').val() == 'Suisse') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#portugal').on('click', function() {
    $('#country').val('Portugal');

    if($('#country').val() == 'Portugal') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#algérie').on('click', function() {
    $('#country').val('Algérie');

    if($('#country').val() == 'Algérie') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})

$('#tunisie').on('click', function() {
    $('#country').val('Tunisie');

    if($('#country').val() == 'Tunisie') {
        $('.contact-info .con-content .position-info .countryinfo .links .list').css('display', 'none');
    }
})