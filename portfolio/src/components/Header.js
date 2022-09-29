import '../css/Header.css'

export const Header = (props) => {

    return (
        <div>
            <nav id="navbar" class="section">
                <div class="navbar__logo">
                    <p>seonggyu<span id="last__name">A</span>n</p>
                </div>
                <ul class="navbar__menu">
                    <li class="navbar__menu__item active" data-link="#home">Home</li>
                    <li class="navbar__menu__item" data-link="#about">About</li>
                    <li class="navbar__menu__item" data-link="#skill">Skills</li>
                    <li class="navbar__menu__item" data-link="#projects">Projects</li>
                    <li class="navbar__menu__item" data-link="#contact">Contact</li>
                </ul>
            </nav>
        </div>
          
    )
}

export default Header;