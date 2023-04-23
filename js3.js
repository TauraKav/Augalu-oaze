const button = document.getElementById("submit-button");

const fetchPlants = (newPlant) => {
    fetch(`https://643d8759f0ec48ce905e9986.mockapi.io/plant/plants`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlant),
    })
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            let allInputs = document.querySelectorAll('input');
        allInputs.forEach(singleInput => singleInput.value = '');

        });
};
   

function createNewPlant() {
    button.addEventListener("click", () => {
   
        const name = document.getElementById("name").value;
        const price = document.getElementById("price").value;
        const description = document.getElementById("description").value;
        const place = document.getElementById("place").value;
        const img_url = document.getElementById("img_url").value;
        const errorMessage = document.getElementById ("error-message");
        const successMessage = document.getElementById("success-message");
        const removePlantForm = document.getElementById ("plant-form");

        if (name && price && description && place && img_url) {
           successMessage.innerHTML = "Prekė sėkmingai pridėta";
           errorMessage.innerHTML= "";

           const newPlant = {
            name: name,
            price: price,
            description: description,
            place: place,
            img_url: img_url,
        };

        fetchPlants(newPlant);

              } else {
                removePlantForm.remove();
          errorMessage.innerHTML= "Prašome įvesti reikiamus duomenis";
          successMessage.innerHTML = "";

          {const backButton = document.getElementById("back");
          backButton.addEventListener("click", () => {
              window.location.replace("./add.html");})}}
    });
}

 createNewPlant()

 
 const backButton = document.getElementById("back");
 backButton.addEventListener("click", () => {
     window.location.replace("./index.html");})


const hamburger = document.getElementById ("hamburger-menu");
const navMenu = document.getElementById ("nav-menu");

hamburger.addEventListener ("click", () => {
hamburger.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}))