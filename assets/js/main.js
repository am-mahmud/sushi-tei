document.getElementById('btn-submit').addEventListener('click', validEmailAddress, validPhoneNumber);

// Email validation 

let email = document.getElementById('email-address').value;

function validEmailAddress(email){
    if (typeof contact !== 'string') {
        return false;
    }
    if(email.includes('@')){
        return true;
    }else{
        return false;
    }
}

console.log('validEmailAddress');

// Phone number validation

let contact = document.getElementById('phone-number').value;


function validPhoneNumber(contact) {
    if (typeof contact !== 'string') {
        return false;
    }
    if (
        contact.length === 11 && 
        contact.startsWith('01') && 
        !contact.includes(" ")
    ) {
        return true;
    } else {
        return false;
    }
}

console.log('validPhoneNumber');
