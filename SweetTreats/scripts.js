let $lolliesList = $("#show-lollies");

let lollies = {
    "Assorted Lollipops" : {
        "price" : 10.00.toFixed(2),
        "category" : "candy",
        "image" : "http://cdn.skim.gs/image/upload/v1456337801/msi/lollypop_mfzi9v.jpg",
    },

    "Hard Candy" : {
        "price" : 5.50.toFixed(2),
        "category" : "candy",
        "image" : "https://media.istockphoto.com/photos/picture-of-colorful-candies-with-white-striped-patterns-picture-id167211555?k=6&m=167211555&s=612x612&w=0&h=ub2oAkGhPyGJrUdYQcZfgUYT2fV6tHzVijCjdnhEI-U=",
    },
    "Gummy Bears" : {
        "price" : 4.75.toFixed(2),
        "category" : "candy",
        "image" : "https://img.buzzfeed.com/buzzfeed-static/static/2015-09/2/16/enhanced/webdr02/original-24380-1441224928-7.jpg?downsize=715:*&output-format=auto&output-quality=auto",
    },
    "MnMs" : {
        "price" : 8.50.toFixed(2),
        "category" : "chocolate",
        "image" : "https://content.active.com/Assets/Active.com+Content+Site+Digital+Assets/Nutrition/580/VDAY+Candy/MnMs.jpg",
    },
    "Jaffas" : {
        "price" : 5.00.toFixed(2),
        "category" : "chocolate",
        "image" : "https://generationfood.files.wordpress.com/2010/11/promotional-jaffa-bags1.jpeg",
    },
    "Maltesers" : {
        "price" : 8.50.toFixed(2),
        "category" : "chocolate",
        "image" : "http://entertainment.ie//images_content/rectangle/620x372/Untitled20183261142705.jpg",
    },
}

let events = {
    "wedding" : {
        "transportfee" : 200.00,
        "labourfee" : 70.00,
        "averageattendees" : 100,
    },
    "fair" : {
        "transportfee" : 150.00,
        "labourfee" : 60.00,
        "averageattendees" : 200,
    },
    "festival" : {
        "transportfee" : 300.00,
        "labourfee" : 90.00,
        "averageattendees" : 300,
    },
    "party" : {
        "transportfee" : 200.00,
        "labourfee" : 60.00,
        "averageattendees" : 50,
    },
}

function displayLolliesList() {
    Object.keys(lollies).forEach(function(key) {
        let lolliesItem = `<div class="card" style="width: 40%;">
                                <img class="card-img-top" src="${lollies[key].image}" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">${key}<br><span>$${lollies[key].price}</span></p>
                                </div>
                            </div>`;
        $lolliesList.append(lolliesItem);
    });
}

let candyFilter = $("#candy");
let chocolateFilter = $("#chocolates");
let filterLinks = $(".filter-links");
let filterLinkAll = $(".filter-link");

filterLinkAll.click(function(event) {
    $("#show-lollies").empty();
    displayLolliesList();
});

filterLinks.click(function(event) {
    let category = event.target.getAttribute("id");
    $("#show-lollies").empty();
    Object.keys(lollies).forEach(function(key) {
        let lolliesItem = `<div class="card" style="width: 40%;">
                                <img class="card-img-top" src="${lollies[key].image}" alt="Card image cap">
                                <div class="card-body">
                                    <p class="card-text">${key}<br><span>${lollies[key].price}</span></p>
                                </div>
                            </div>`;  
        if (category == lollies[key].category) {            
            $lolliesList.append(lolliesItem);
        } 
    });
});

let formSubmit = $("#submit-button");

formSubmit.click(function(event) {
    let selectedLolly = $('#dropdown-select-treats :selected').text();
    let selectedEvent = $('#dropdown-select-event :selected').attr('id');
    
    Object.keys(lollies).forEach(function(key) {
        if (selectedLolly in lollies) {
            $("#selected-lolly").html(selectedLolly);
            $("#lolly-price").html("$" + lollies[selectedLolly].price);
        }
    });

    Object.keys(events).forEach(function(key) {
        if (selectedEvent in events){
            $("#selected-event").html(selectedEvent);
            $("#labour-free").html("$" + events[selectedEvent].labourfee + ".00");
            $("#transport-fee").html("$" + events[selectedEvent].transportfee + ".00");
            $("#average-attendees").html(events[selectedEvent].averageattendees);
        }
    });

    let lolliesTotal = lollies[selectedLolly].price * events[selectedEvent].averageattendees;
    $("#lolly-total").html("$" + lolliesTotal.toFixed(2));
    let totalEstimate = lolliesTotal + events[selectedEvent].labourfee + events[selectedEvent].transportfee;
    let gst = totalEstimate * 1.15;
    $("#total-estimate").html("$" + gst.toFixed(2));
});

$(document).ready(function() {
    displayLolliesList(); 
});
   
