const fs = require('fs');
const path = require('path');


const JSON_STORE = [];

const linereader = require('readline').createInterface({
    input: require('fs').createReadStream(path.join(__dirname, 'customer-data.csv'))
});

linereader.on('line', (line) => {
    let stringArray = line.split(",");
    // console.log(stringArray);
    let object = {'id': stringArray[0], 'first_name' : stringArray[1], 'last_name' : stringArray[2], 'email' : stringArray[3], 'gender' : stringArray[4], 'ip_address':stringArray[5], 'ssn':stringArray[6], 'credit_card':stringArray[7], 'bitcoin':stringArray[8], 'street_address':stringArray[9]};
    JSON_STORE.push(object);
})

linereader.on('close', (error) => {
    if(error) {
        console.log('Error occurred while converting to JSON > ', error);
        return;
    }
    console.log('Conversion completed successfully');
    fs.writeFileSync('output.json', JSON.stringify(JSON_STORE, null, 2));
})
