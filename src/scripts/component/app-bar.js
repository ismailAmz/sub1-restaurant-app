class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header class="header" id="header">
      <button class="nav__toggle" id="nav-toggle" >
        <i class="fa-solid fa-bars" tabindex="0"></i>
      </button>
        <nav class="nav">
          <div>
            <a href="#" class="nav__logo">Mail<span>Restaurant</span></a>
          </div>
          <div class="nav__menu" id="nav-menu">
            <ul class="nav__list">
              <li>
                <a href="/" class="nav__item">Home</a>
                <a href="#" class="nav__item">Favorite</a>
                <a href="https://4904ec5c-b57d-45ef-8366-2eebdc3402d5-00-2jc88zdyyhzh.worf.replit.dev/" class="nav__item">About Us</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      `;
  }
}

customElements.define("app-bar", AppBar);
