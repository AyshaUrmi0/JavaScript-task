function sendNotification(email) {
    
    if (email.indexOf('@') === -1) {
        return "Invalid Email";
    }

    
    let parts = email.split('@');

    
    if (parts.length !== 2 || parts[0].length === 0 || parts[1].length === 0) {
        return "Invalid Email";
    }

    let username = parts[0];
    let domain = parts[1];

    return username + " sent you an email from " + domain;

}

console.log(sendNotification("ayshaismail021@gmail.com")); // ayshaismail021 sent you an email from gmail.com






