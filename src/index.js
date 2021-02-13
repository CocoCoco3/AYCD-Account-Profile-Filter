const fs = require('fs');

try {
    require('../aycd.json');
} catch {
    console.log('Error: Could not locate aycd.json, I\'ve made an example file for you.');
    const exampleProfiles = [
        {
            "name": "Fake",
            "size": "",
            "profileGroup": "",
            "billingAddress": {
                "name": "Fake Fake",
                "email": "fake@gmail.com",
                "phone": "1234567890",
                "line1": "1600 Pennsylvania Avenue NW",
                "line2": "",
                "line3": "",
                "postCode": "12345",
                "city": "Washington",
                "country": "United States",
                "state": "District of Columbia"
            },
            "shippingAddress": {
                "name": "Fake Fake",
                "email": "fake@gmail.com",
                "phone": "1234567890",
                "line1": "1600 Pennsylvania Avenue NW",
                "line2": "",
                "line3": "",
                "postCode": "12345",
                "city": "Washington",
                "country": "United States",
                "state": "District of Columbia"
            },
            "paymentDetails": {
                "nameOnCard": "Fake Fake",
                "cardType": "Visa",
                "cardNumber": "4242424242424242",
                "cardExpMonth": "01",
                "cardExpYear": "2023",
                "cardCvv": "123"
            },
            "sameBillingAndShippingAddress": true,
            "onlyCheckoutOnce": false,
            "matchNameOnCardAndAddress": false
        }
    ];
    fs.writeFileSync('aycd.json', JSON.stringify(exampleProfiles, null, 4));
    process.exit();
};

try {
    fs.readFileSync('nikeaccounts.txt', 'utf-8').split(/[\r\n]+/g).map(acc => acc.split(':')[0].toLowerCase());
} catch {
    console.log('Error: Could not locate nikeaccounts.txt, I\'ve made an example file for you.');
    const exampleNikeAcc = `
username1@email.com:password1
username2@email.com:password2
username3@email.com:password3
username4@email.com:password4
username5@email.com:password5
username6@email.com:password6
username7@email.com:password7
username8@email.com:password8
username9@email.com:password9
username10@email.com:password10`;
    fs.writeFileSync('nikeaccounts.txt', exampleNikeAcc);
    process.exit();
}


const aycdProfiles = require('../aycd.json');
const accounts = fs.readFileSync('nikeaccounts.txt', 'utf-8').split(/[\r\n]+/g).map(acc => acc.split(':')[0].toLowerCase());
const newProfiles = aycdProfiles.filter(acc => accounts.includes(acc.billingAddress.email.toLowerCase()));

try {
    fs.writeFileSync('output.json', JSON.stringify(newProfiles, null, 4));
    console.log('Success: Check output.json');
} catch {
    console.log('Error writing file...');
};