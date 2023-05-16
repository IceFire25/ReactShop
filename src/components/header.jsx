function Header() {
  return   <nav>
  <div className="nav-wrapper lime">
    <div className="container">
        <a href="#!" className="brand-logo center">React Shop</a>
        <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">Sass</a></li>
        <li><a href="badges.html">Components</a></li>
        <li><a href="collapsible.html">JavaScript</a></li>
        </ul>
    </div>
  </div>
</nav>
}

export { Header };
