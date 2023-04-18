const setId = (id) => {
    localStorage.setItem("itemId", id);
  };

  const plantsWrapper = document.getElementById("plants-wrapper");

function plantsOptionsCreation (plant) {

    const wrapper = document.createElement("div");
    wrapper.setAttribute("class", "plant-wrapper");

    const borderWrapper = document.createElement ("div");
    borderWrapper.setAttribute ("class", "border-wrapper");

    const image = document.createElement("img");
    image.setAttribute("src", plant.img_url);

    const textWrapper = document.createElement ("div");
    textWrapper.setAttribute("class", "text-wrapper");
  
    const title = document.createElement("span");
    title.setAttribute("class", "title");
    title.innerHTML = plant.name;
  
    const price = document.createElement("span");
    price.setAttribute("class", "price");
    price.innerHTML = `Kaina: ${plant.price}€`;
  
    textWrapper.append(title);
    textWrapper.append(price);

    wrapper.append(image);
    wrapper.append(textWrapper);

    borderWrapper.append (wrapper)
  
   plantsWrapper.append(borderWrapper);

wrapper.addEventListener("click", () => {
setId(plant.id);
    window.location.href = "./plant.html";
});
  };

  fetch(
    "https://643d8759f0ec48ce905e9986.mockapi.io/plant/plants")

    .then((res) => {
      return res.json();
    })
    .then((data) => {
data.sort((a, b) => Number(a.price) - Number(b.price)).forEach((plant) => {

        plantsOptionsCreation(plant);
      });
    });