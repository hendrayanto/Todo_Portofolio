function Header() {
    return (
        <header>
            <div>
          <img src="../src/assets/image/logo.jpg" alt="logo" style={{width: '50px', height: '50px'}} />
        </div>
        <nav>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="/aboutme.html">About Me</a></li>
                <li><a href="/testimonials.html">Testimonials</a></li>
                <li><a href="/contact.html">Contact</a></li>
            </ul>
            <ul>
                <li><button>Login</button></li>
                <li><button>Register</button></li>
            </ul>
        </nav>
        </header>
    )
}

export default Header