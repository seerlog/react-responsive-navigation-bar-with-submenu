import {getFirstMenuItem, getFirstSubMenuItem, siteName} from "./static/constants";

const PcNavigationBar = ({props, menuItems, focusedMenu, setFocusedMenu, focusedSubMenu, setFocusedSubMenu}) => {
    return (
        <div>
            <div className={'pc-nav-bar'} {...props}>
                <div className={'pc-nav-bar-logo'}
                     onClick={() => {
                         setFocusedMenu(getFirstMenuItem().en);
                         setFocusedSubMenu(getFirstSubMenuItem().en);
                     }}>{siteName}</div>
                {
                    menuItems.map((menuItem, key) =>
                        <PcNavigationBarItem
                            key={key}
                            menuItem={menuItem}
                            focusedMenu={focusedMenu}
                            setFocusedMenu={setFocusedMenu}
                            focusedSubMenu={focusedSubMenu}
                            setFocusedSubMenu={setFocusedSubMenu}/>
                    )
                }
            </div>
        </div>
    )
}

const PcNavigationBarItem = ({menuItem, focusedMenu, setFocusedMenu, focusedSubMenu, setFocusedSubMenu}) => {
    const isMenuFocused = focusedMenu === `${menuItem.en}`;

    return (
        <div data-key={menuItem.en}
             className={['pc-nav-bar-item', isMenuFocused ? 'pc-nav-bar-menu-focused' : undefined].join(' ')}>
            <div data-key={menuItem.en}
                 className={['pc-nav-bar-menu'].join(' ')}
                 onClick={() => {
                     const [firstSubMenuItem] = menuItem.subMenuItems;
                     setFocusedMenu(`${menuItem.en}`);
                     setFocusedSubMenu(`${firstSubMenuItem.en}`);
                 }}>
                {menuItem.ko}
            </div>
            <ul className={'pc-nav-bar-submenu'}>
                {
                    menuItem.subMenuItems.map((subMenuItem, key) => {
                        const isSubMenuFocused = focusedSubMenu === `${subMenuItem.en}`;

                        return <li key={key}
                                   className={(isMenuFocused && isSubMenuFocused) ? 'pc-nav-bar-submenu-label-focused' : undefined}
                                   onClick={() => {
                                       setFocusedMenu(`${menuItem.en}`);
                                       setFocusedSubMenu(`${subMenuItem.en}`);
                                   }}>{subMenuItem.ko}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default PcNavigationBar;
