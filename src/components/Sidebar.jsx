
function Sidebar({activePage, onPageChange, onLogout}){
    const navItems = [
        {id:'dashboard', label: "DashBoard"},
        {id:'products', label: "Products"},
        {id:'orders', label: "Orders"},
        {id:'users', label: "Users"},
        {id:'appsearch', label: "App Search"}
        
       
    ];

    return (
    <aside>
        
    <h2 className="brand">Teching  </h2>
    <nav>
        <ul className="nav-list">
            {navItems.map((item) => (
                
             <li
              key={item.id}
              className={activePage===item.id ? "nav-item active" : "nav-title"}
              onClick={() => onPageChange(item.id)}
              >

                {item.label}
              </li>
            ))}
            <button className="menu-btn" onClick={onLogout}>Log out</button>
            
        </ul>
    </nav>
    </aside>
    );
}

export default Sidebar;