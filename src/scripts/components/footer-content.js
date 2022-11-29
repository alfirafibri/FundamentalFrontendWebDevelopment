class FooterContent extends HTMLElement{
    connectedCallback(){
        this.render();
    }

    render(){
        this.innerHTML = `<div class="container text-center mt-4">
        <p class="footer">&copy;2022 Alfira Fibri Nurningtyas</p>
        </div>`;
    }
}

customElements.define('footer-content', FooterContent);