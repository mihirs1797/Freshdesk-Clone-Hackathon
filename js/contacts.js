function getContactsFromApi() {
    var getContacts = fetch('https://newaccount1608048203527.freshdesk.com/api/v2/contacts', {
            method: 'GET',
            headers: {
                'Authorization': 'Basic ' + window.btoa('QB0BTaDbty9UC93WW2QO' + ":" + 'QB0BTaDbty9UC93WW2QO')
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            return data;
        });

    return getContacts;
}

function loadContacts() {
    var contacts = getContactsFromApi();
    contacts.then(e => {
        e.forEach(data => {
            var tableRow = document.createElement("tr");
            var td1 = document.createElement("td");
            td1.setAttribute("class", "block");
            td1.setAttribute("id", "nameInfo");
            td1.innerHTML = data.name;
            var td2 = document.createElement("td");
            td2.setAttribute("class", "block");
            td2.setAttribute("id", "phoneInfo");
            td2.innerHTML = data.phone;
            var td3 = document.createElement("td");
            td3.setAttribute("class", "block");
            td3.setAttribute("id", "mailInfo");
            td3.innerHTML = data.email;
            var td4 = document.createElement("td");
            td4.setAttribute("class", "block");
            td4.setAttribute("id", "jobInfo");
            td4.innerHTML = data.job_title;
            var td5 = document.createElement("td");
            td5.setAttribute("class", "block");
            td5.setAttribute("id", "companyInfo");
            td5.innerHTML = data.company_id;
            var td6 = document.createElement("td");
            td6.setAttribute("class", "block");
            td6.setAttribute("id", "addressInfo");
            td6.innerHTML = data.address;
            tableRow.append(td1,td2,td3,td4,td5,td6);
            document.getElementById("tableContent").append(tableRow);
        })
    })
}

//window.reload... 