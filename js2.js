const itemId = localStorage.getItem("itemId");

function addElementsToScreen (data) {

    const img = document.getElementById("photo");
img.style.backgroundImage = `url(${data.img_url})`;

const name = document.getElementById("plant-name");
  name.innerHTML = data.name;

  const place = document.getElementById("plant-place");
 place.innerHTML = data.place;

 const price = document.getElementById("plant-price");
 price.innerHTML = ` ${data.price} €`;

 const description= document.getElementById("plant-description");
description.innerHTML = data.description;

};

fetch("https://643d8759f0ec48ce905e9986.mockapi.io/plant/plants/" + itemId)

  .then((res) => {
    return res.json();
  })
  .then((data) => {
    addElementsToScreen (data);
  });


const button = document.getElementById("delete");
  
  const fetchPlant = (id)  => {
    fetch ('https://643d8759f0ec48ce905e9986.mockapi.io/plant//plants/' + id, {
    method: 'DELETE',
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })

    .then (res => {
        return res.json()
      }) 
      .then((data) => { 
        const deleteElement = document.getElementById ("one-plant-wrapper");
        deleteElement.remove();
        const removeDeleteButton = document.getElementById ("delete");
        removeDeleteButton.remove();
const messageElement = document.createElement ("div");
messageElement.setAttribute ("class","delete-message");
messageElement.textContent= "Prekė pašalinta iš katalogo";
let section = document.querySelector('#plant-section');
section.prepend(messageElement);
    });
}
    
button.addEventListener ("click", () => {
    fetchPlant(itemId);
});

const backButton  = document.getElementById ("back");

backButton.addEventListener ("click", () => {
    window.location.replace ("./index.html");
})



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