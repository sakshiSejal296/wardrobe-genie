const outfits = {
    casual: [
      "Blue jeans + White T-shirt + Converse",
      "Oversized shirt + Leggings + Sneakers",
      "Denim dress + Sandals"
    ],
    formal: [
      "Black trousers + White blouse + Heels",
      "Blazer set + Pumps",
      "Kurta + Palazzo + Juti"
    ],
    date: [
      "Floral dress + White shoes",
      "Pink Nayra cut + Earrings + Flats",
      "Wine red kurti + Black heels"
    ],
    chill: [
      "Joggers + Hoodie + Crocs",
      "Loose T-shirt + Shorts",
      "Oversized shuffle + Leggings"
    ],
    sunny: [
      "White crop top + Palazzo + Shades",
      "Light blue fit + Beige flats",
      "Yellow striped tee + Blue jeans"
    ],
    rainy: [
      "Black jeans + Shrug + Boots",
      "Blue jeggings + Raincoat + Juti",
      "Full-sleeve top + Trousers + Waterproof shoes"
    ]
  };
  
  function generateOutfit() {
    const vibe = document.getElementById("vibe").value;
    const recommendation = document.getElementById("recommendation");
    const outfitText = document.getElementById("outfit-text");
    const choice = outfits[vibe][Math.floor(Math.random() * outfits[vibe].length)];
  
    outfitText.textContent = choice;
    recommendation.classList.remove("hidden");
  }
  
  function saveFavorite() {
    const outfit = document.getElementById("outfit-text").textContent;
    if (outfit) {
      let favs = JSON.parse(localStorage.getItem("favorites") || "[]");
      favs.push(outfit);
      localStorage.setItem("favorites", JSON.stringify(favs));
      loadFavorites();
    }
  }
  
  function loadFavorites() {
    const list = document.getElementById("fav-list");
    list.innerHTML = "";
    const favs = JSON.parse(localStorage.getItem("favorites") || "[]");
    favs.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });
  }
  
  function updateClock() {
    const now = new Date();
    document.getElementById("clock").textContent = now.toLocaleTimeString();
    setTimeout(updateClock, 1000);
  }
  
  document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("dark");
  };
  
  window.onload = () => {
    loadFavorites();
    updateClock();
  };
  