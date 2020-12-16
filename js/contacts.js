async function getContactsFromApi() {
    var getContacts = await fetch('https://newaccount1608048203527.freshdesk.com/api/v2/contacts', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa('QB0BTaDbty9UC93WW2QO' + ":" + 'QB0BTaDbty9UC93WW2QO')
            }
        });
    var contacts = await getTickets.json();
    console.log(contacts);
    return contacts;         
}
let responseObject = null;


function loadContacts(){
    var contactsList = await getContactsFromApi();
    console.log(contactsList);
    responseObject = contactsList;
}

