const PcNavigationBar = ({ props, menuItems, focusedMenu, setFocusedMenu, focusedSubMenu, setFocusedSubMenu }) => {
    return (
        <div>
            <div className={['pc-nav-bar'].join(' ')} {...props}>
                <div className={['pc-nav-bar-logo'].join(' ')}
                    onClick={() => {
                        setFocusedMenu(menuItems[0].en);
                        setFocusedSubMenu(menuItems[0].subMenuItems[0].en);
                    }}>
                    RIDION
                </div>
                {
                    menuItems.map((menuItem, key) =>
                        <PcNavigationBarItem
                            key={key}
                            menuItem={menuItem}
                            focusedMenu={focusedMenu}
                            setFocusedMenu={setFocusedMenu}
                            focusedSubMenu={focusedSubMenu}
                            setFocusedSubMenu={setFocusedSubMenu} />
                    )
                }
            </div>
        </div>
    )
}

const PcNavigationBarItem = ({ menuItem, focusedMenu, setFocusedMenu, focusedSubMenu, setFocusedSubMenu }) => {
    return (
        <div data-key={menuItem.en}
            className={['pc-nav-bar-item']}>
            <div data-key={menuItem.en}
                className={['pc-nav-bar-menu', focusedMenu === `${menuItem.en}` && 'pc-nav-bar-menu-focused'].join(' ')}
                onClick={() => {
                    setFocusedMenu(`${menuItem.en}`);
                    setFocusedSubMenu(`${menuItem.subMenuItems[0].en}`);
                }}>
                {menuItem.ko}
            </div>
            <ul className={['pc-nav-bar-submenu']}>
                {
                    menuItem.subMenuItems.map((subMenuItem, key) =>
                        <li key={key} 
                            className={[focusedMenu === `${menuItem.en}` && focusedSubMenu === `${subMenuItem.en}` && 'pc-nav-bar-submenu-label-focused']}
                            onClick={() => { setFocusedMenu(`${menuItem.en}`); setFocusedSubMenu(`${subMenuItem.en}`); console.log(subMenuItem.en); }}>
                            {subMenuItem.ko}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default PcNavigationBar;