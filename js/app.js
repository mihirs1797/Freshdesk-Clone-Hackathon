//api key = QB0BTaDbty9UC93WW2QO
function getApiData() {
    fetch('https://newaccount1608048203527.freshdesk.com/api/v2/tickets', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa('QB0BTaDbty9UC93WW2QO' + ":" + 'QB0BTaDbty9UC93WW2QO')
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
}

function getContactsList(){
    fetch('https://newaccount1608048203527.freshdesk.com/api/v2/contacts', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa('QB0BTaDbty9UC93WW2QO' + ":" + 'QB0BTaDbty9UC93WW2QO')
            }
        })
        .then(response => response.json())
        .then(json => console.log(json));
}
getContactsList();
getApiData();
