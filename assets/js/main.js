document.getElementById('phone-number').addEventListener('keypress', validPhoneNumber);


function validPhoneNumber(contact){
    if(typeof contact !=- 'string'){
        return false;
    }
    if(contact.length == 11 && number.startsWith('01') && contact.includes(" ") !== true){
        return true;
    }else{
        return false;
    }
}