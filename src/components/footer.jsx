function Footer() {

    return <footer className="page-footer lime darken-2">
      <div className="footer-copyright">
        <div className="container">
            © {new Date().getFullYear()}
            _Alina Shop
          <a className="grey-text text-lighten-4 right"
           href="!#">Repository</a>
        </div>
      </div>
    </footer> 
}
    
export { Footer };