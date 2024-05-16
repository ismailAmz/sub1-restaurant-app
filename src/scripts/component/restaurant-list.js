class RestaurantCard extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const name = this.getAttribute("name");
    const pictureId = this.getAttribute("pictureId");
    const city = this.getAttribute("city");
    const rating = this.getAttribute("rating");
    const description = this.getAttribute("description");

    this.innerHTML = `
        <div class="card" tabindex="0">
          <h2 tabindex="0">${name}</h2>
          <img src="${pictureId}" alt="Gambar ${name}" tabindex="0">
          <p tabindex="0">Kota: ${city}</p>
          <p tabindex="0">Rating: ${rating}</p>
        </div>
      `;
  }
}

customElements.define("restaurant-card", RestaurantCard);

class RestaurantList extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    fetch("../data/DATA.json")
      .then((response) => response.json())
      .then((data) => {
        data.restaurants.forEach((restaurant) => {
          const card = document.createElement("restaurant-card");
          card.setAttribute("name", restaurant.name);
          card.setAttribute("pictureId", restaurant.pictureId);
          card.setAttribute("city", restaurant.city);
          card.setAttribute("rating", restaurant.rating);
          this.appendChild(card);
        });
      })
      .catch((error) => console.error("Error:", error));
  }
}

customElements.define("restaurant-list", RestaurantList);
