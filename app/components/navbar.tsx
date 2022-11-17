export default function Navbar() {
    return (
        <nav className="navbar is-dark is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item" href="#">
                    <img src="./logo.png"/>
                </a>
            </div>
            <div id="menu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item">貯金推移</a>
                </div>
            </div>
        </nav>
    )
}
