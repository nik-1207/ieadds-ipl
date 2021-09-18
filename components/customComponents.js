const template=document.createElement('template')
template.innerHTML=`
<style>

nav {
    background-color: #122a77;
    display: flex;
    box-shadow: 0px 4px 8px hsla(0, 0%, 7%, .5);
    color: white;
    width: 100%;
}

nav img {
    width: 1cm;
    padding: 10px;
}

nav h1 {
    padding: 5px;
    margin: 5px 0 0 0;
    width: min-content;
    font-size: 1em;
}

</style>
<nav>
<img />
<h1></h1>
</nav>`

class NavBar extends HTMLElement
{
    constructor()
    {
        super()    
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('img').src=this.getAttribute('logo')
        this.shadowRoot.querySelector('h1').innerText=this.getAttribute('title')
    }
}
window.customElements.define('nav-bar', NavBar);