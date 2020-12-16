function getTicketsFromAPI() {
    try {
        var getData = fetch('https://newaccount1608048203527.freshdesk.com/api/v2/tickets', {
                method: 'GET',
                headers: {
                    'Authorization': 'Basic ' + window.btoa('QB0BTaDbty9UC93WW2QO' + ":" + 'QB0BTaDbty9UC93WW2QO')
                }
            })
            .then(response => response.json())
            .then(json => console.log(json));

    } catch (error) {
        console.error(error);
    }
}

function createCard(response) {
    let t = getTicketsFromAPI();
    var row = document.createElement("div");
    row.setAttribute("class", "row");
    var card = document.createElement("div");
    card.setAttribute("class", "card");
    card.style.width = "100%";
    var cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");
    var cardRow = document.createElement("div");
    cardRow.setAttribute("class", "row");
    var cardCol1 = document.createElement("div");
    cardCol1.setAttribute("class", "col-lg-1");
    var checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    checkbox.setAttribute("id", "ticketCheck");
    var cardCol2 = document.createElement("div");
    cardCol2.setAttribute("class", "col-lg-7");
    var ticketHeader = document.createElement("h3");

    var cardCol3 = document.createElement("div");
    cardCol3.setAttribute("class", "col-lg-2");
    var cardCol4 = document.createElement("div");
    cardCol4.setAttribute("class", "col-lg-2");

    cardCol2.append(ticketHeader);
    cardCol1.append(checkbox);
    cardRow.append(cardCol1, cardCol2, cardCol3, cardCol4);
    cardBody.append(cardRow);
    card.append(cardBody);
    row.append(card);

    document.getElementById("ticketHolder").append(row);
}

getTicketsFromAPI();