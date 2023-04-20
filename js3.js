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

        if (name && price && description && place && img_url) {
            const deleteErrorMessage = document.getElementById ("error-message");
            deleteErrorMessage.remove();
            const successMessage = document.getElementById("success-message");
           successMessage.innerHTML = "Prekė sėkmingai pridėta";

           const newPlant = {
            name: name,
            price: price,
            description: description,
            place: place,
            img_url: img_url,
        };

        fetchPlants(newPlant);

        const backButton = document.getElementById("back");
        backButton.addEventListener("click", () => {
            window.location.replace("./index.html");})

              } else {
            const deleteElement = document.getElementById ("plant-form");
        deleteElement.remove();
        const deleteSuccessMessage = document.getElementById ("success-message");
        deleteSuccessMessage.remove();
        const errorMessage = document.getElementById("error-message");
          errorMessage.textContent= "Prašome įvesti reikiamus duomenis";

          {const backButton = document.getElementById("back");
          backButton.addEventListener("click", () => {
              window.location.replace("./add.html");})}}
    });
}

 createNewPlant()

