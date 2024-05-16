class HeroElement extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="hero"></section>
    `;
  }
}

customElements.define("hero-element", HeroElement);
