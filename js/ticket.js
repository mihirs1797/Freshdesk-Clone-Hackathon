function getTicketsFromAPI() {
    var getData = fetch('https://newaccount1608048203527.freshdesk.com/api/v2/tickets', {
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

    return getData;
}

function getTicketInfoFromAPI(id) {
    var getInfo = fetch('https://newaccount1608048203527.freshdesk.com/api/v2/tickets/' + String(id), {
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

    getInfo.then(e => {
        document.getElementById("ticketSubject").innerHTML = e.subject;
        document.getElementById("descriptionOfTicket").innerHTML = e.description;
        switch (e.status) {
            case 2:
                document.getElementById("modalStatus").innerHTML = "Status: Open";
                break;
            case 3:
                document.getElementById("modalStatus").innerHTML = "Status: Pending";
                break;
            case 4:
                document.getElementById("modalStatus").innerHTML = "Status: Resolved";
                break;
            case 5:
                document.getElementById("modalStatus").innerHTML = "Status: Closed";
                break;
        }
        switch (e.priority) {
            case 1:
                document.getElementById("modalPriority").innerHTML = "Priority: Low";
                break;
            case 2:
                document.getElementById("modalPriority").innerHTML = "Priority: Medium";
                break;
            case 3:
                document.getElementById("modalPriority").innerHTML = "Priority: High";
                break;
            case 4:
                document.getElementById("modalPriority").innerHTML = "Priority: Urgent";
                break;
        }
    })
}

//ticket cards generated here. Modal shows incorrect data
function createCard() {
    var response = getTicketsFromAPI();
    response.then(e => {
        e.forEach(data => {
            var row = document.createElement("div");
            row.setAttribute("class", "row");
            var card = document.createElement("div");
            card.setAttribute("class", "card mt-3");
            card.style.width = "100%";
            var cardBody = document.createElement("div");
            cardBody.setAttribute("class", "card-body");
            var cardRow = document.createElement("div");
            cardRow.setAttribute("class", "row mt-3");
            var cardCol1 = document.createElement("div");
            cardCol1.setAttribute("class", "col-lg-1");
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("id", "ticketCheck");
            var cardCol2 = document.createElement("div");
            cardCol2.setAttribute("class", "col-lg-7");
            var ticketHeader = document.createElement("h5");
            ticketHeader.innerHTML = data.subject;
            var openButton = document.createElement("button");
            openButton.setAttribute("class", "btn btn-sm btn-outline-dark float-left");
            openButton.setAttribute("id", "viewTicket");
            openButton.setAttribute("data-toggle", "modal");
            openButton.setAttribute("data-target", "#ticketDescription");
            openButton.setAttribute("value", data.id);
            openButton.innerHTML = "View";
            openButton.addEventListener("click", getTicketInfoFromAPI(data.id));
            var cardCol3 = document.createElement("div");
            cardCol3.setAttribute("class", "col-lg-2");
            switch (data.status) {
                case 2:
                    cardCol3.innerHTML = "Status: Open"
                    break;
                case 3:
                    cardCol3.innerHTML = "Status: Pending"
                    break;
                case 4:
                    cardCol3.innerHTML = "Status: Resolved"
                    break;
                case 5:
                    cardCol3.innerHTML = "Status: Closed"
                    break;
            }
            
            var cardCol4 = document.createElement("div");
            switch (data.priority) {
                case 1:
                    cardCol4.innerHTML = "Priority: Low"
                    break;
                case 2:
                    cardCol4.innerHTML = "Priority: Medium"
                    break;
                case 3:
                    cardCol4.innerHTML = "Priority: High"
                    break;
                case 4:
                    cardCol4.innerHTML = "Priority: Urgent"
                    break;
            }
            cardCol4.setAttribute("class", "col-lg-2");
            cardCol2.append(ticketHeader, openButton);
            cardCol1.append(checkbox);
            cardRow.append(cardCol1, cardCol2, cardCol3, cardCol4);
            cardBody.append(cardRow);
            card.append(cardBody);
            row.append(card);
            document.getElementById("ticketHolder").append(row);
        })
    });
}

getTicketsFromAPI();

//implementation keeps returning error
function createTicket() {
    var description = document.getElementById("descriptionText").value;
    var subject = document.getElementById("newTicketSubject").value;
    var mail = document.getElementById("newTicketContact").value;
    var priority = document.getElementById("newTicketPriority").value;
    var status = document.getElementById("newTicketStatus").value;

    var dataToBeSent = {
        description,
        subject,
        mail,
        priority,
        status
    };
    fetch('https://newaccount1608048203527.freshdesk.com/api/v2/tickets', {
        method: "POST",
        body: JSON.stringify(dataToBeSent),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      })
      .then(response => response.json()) 
      .then(json => console.log(json))
      .catch(err => console.log(err));
}