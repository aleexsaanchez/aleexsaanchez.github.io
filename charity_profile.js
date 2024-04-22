//JS file to modify the website

//creating a constant for the button form
const form = document.querySelector(".volunteer-button-form");

//hidding the form
form.style.display = 'none';

//adding an event listener so whenever you click the button the form apperars

const button = document.querySelector(".volunteer-button");

button.addEventListener("click", () => {
    button.classList.toggle("clicked");
  });

  button.addEventListener("click", function() {
    form.style.display = 'block';
    button.style.backgroundColor = '#FFE787';

})

//Adding charity details

const charityDetailedInfo = document.querySelector(".charity-detailed-info");

charityDetailedInfo.style.display = 'none';

    //adding an event listener to the main info div

const charityInfo = document.getElementById("charityInfo");

charityInfo.addEventListener("mouseover", () => {
    charityDetailedInfo.style.display = 'flex';
})

charityInfo.addEventListener('mouseout', () => {
    charityDetailedInfo.style.display = 'none';
})


// Add event listener to the form



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email");
    const name = document.getElementById("name");

    const data = JSON.stringify({
        ishtml: 'false',
        sendto: email.value,
        name: name.value,
        replyTo: 'sanchezsayes200278@students.reinhardt.edu',
        title: 'HelpHub Community',
        body: 'Thank you for volunteering, you are now one step closer to helping the community'
    });
    
    const xhr = new XMLHttpRequest();
    xhr.withCredentials = true;
    
    xhr.addEventListener('readystatechange', function () {
        if (this.readyState === this.DONE) {
            console.log(this.responseText);
            form.reset();
            form.style.display = 'none';
            button.style.backgroundColor = '#D9D9D9';
        }
    });
    
    xhr.open('POST', 'https://rapidmail.p.rapidapi.com/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.setRequestHeader('X-RapidAPI-Key', '9b0dc88043mshf9355fd177b5c49p12e807jsn9c0bce47561e');
    xhr.setRequestHeader('X-RapidAPI-Host', 'rapidmail.p.rapidapi.com');
    
    xhr.send(data);
})
