class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <footer class="footer" id="footer">
        <p class="footer__title">Mail<span>Restaurant<span></p>
    
        <div class="footer__social">
          <a href="https://github.com/ismailAmz" class="footer__icon"><i class="fa-brands fa-github"></i></a>
          <a href="https://instagram.com/ismailAmz_" class="footer__icon"><i class="fa-brands fa-instagram"></i></a>
          <a href="https://twitter.com/ismailAmz_" class="footer__icon"><i class="fa-brands fa-twitter"></i></a>
    
          <p>&#169; 2024 copyright all right reserved</p>
        </div>
      </footer>
        `;
  }
}

customElements.define("my-footer", Footer);
