function Header({ onToggleSideBar }) {
    return (
        <div>
            <button onClick={onToggleSideBar} className="menu-btn">
              Menu
            </button>
        </div>
    );
}
export default Header;