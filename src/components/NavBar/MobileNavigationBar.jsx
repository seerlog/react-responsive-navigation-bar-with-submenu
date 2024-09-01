import { AiOutlineMenuFold } from "react-icons/ai";
import { AiOutlineMenuUnfold } from "react-icons/ai";

const MobileNavigationBar = ({ props, menuItems, focusedMenu, setFocusedMenu, focusedSubMenu, setFocusedSubMenu, isFoldSideBar, setIsFoldSideBar }) => {
    return (
        <div className={['mobile-nav-bar', isFoldSideBar && 'mobile-nav-bar-fold'].join(' ')} {...props} >
            <div className={['mobile-nav-bar-head', isFoldSideBar && 'mobile-nav-bar-head-fold'].join(' ')}>
                <div className={['mobile-nav-bar-logo', isFoldSideBar && 'mobile-nav-bar-logo-fold'].join(' ')}
                    onClick={() => {
                        setFocusedMenu(menuItems[0].en);
                        setFocusedSubMenu(menuItems[0].subMenuItems[0].en);
                    }}>
                    RIDION
                </div>
                <div className={['mobile-nav-bar-fold-button', isFoldSideBar && 'mobile-nav-bar-fold-button-fold'].join(' ')} onClick={() => { setIsFoldSideBar(!isFoldSideBar) }}>
                    {
                        isFoldSideBar ? <AiOutlineMenuUnfold /> : <AiOutlineMenuFold />
                    }
                </div>
            </div>
            {
                menuItems.map((menuItem, key) =>
                    <MobileNavigationBarItem
                        key={key}
                        menuItem={menuItem}
                        focusedMenu={focusedMenu}
                        setFocusedMenu={setFocusedMenu}
                        focusedSubMenu={focusedSubMenu}
                        setFocusedSubMenu={setFocusedSubMenu}
                        isFoldSideBar={isFoldSideBar} />
                )
            }
        </div>
    );
}

const MobileNavigationBarItem = ({ menuItem, focusedMenu, setFocusedMenu, focusedSubMenu, setFocusedSubMenu, isFoldSideBar }) => {
    return (
        <div data-key={menuItem.en}
            className={['mobile-nav-bar-item', isFoldSideBar && 'mobile-nav-bar-item-fold'].join(' ')}>
            <div data-key={menuItem.en}
                className={['mobile-nav-bar-menu'
                    , isFoldSideBar ? 'mobile-nav-bar-menu-fold' : 'mobile-nav-bar-menu-unfold'
                    , focusedMenu === `${menuItem.en}` && 'mobile-nav-bar-menu-focused'].join(' ')}
                onClick={() => {
                    setFocusedMenu(`${menuItem.en}`);
                    setFocusedSubMenu(`${menuItem.subMenuItems[0].en}`);
                }}>
                <div data-key={menuItem.en} className={['mobile-nav-bar-menu-icon'].join(' ')}>
                    {menuItem.icon}
                </div>
                <div data-key={menuItem.en} className={['mobile-nav-bar-menu-label', isFoldSideBar && 'mobile-nav-bar-menu-label-fold'].join(' ')}>
                    {menuItem.ko}
                </div>
            </div>
            <ul className={['mobile-nav-bar-submenu'
                , !isFoldSideBar && focusedMenu === `${menuItem.en}` && 'mobile-nav-bar-submenu-show'].join(' ')}>
                {
                    menuItem.subMenuItems.map((subMenuItem, key) =>
                        <li key={key}
                            className={[focusedMenu === `${menuItem.en}` && focusedSubMenu === `${subMenuItem.en}` && 'mobile-nav-bar-submenu-label-focused']}
                            onClick={() => { 
                                setFocusedMenu(`${menuItem.en}`); 
                                setFocusedSubMenu(`${subMenuItem.en}`);
                                console.log(menuItem.en);
                                console.log(subMenuItem.en); }}>
                            {subMenuItem.ko}
                        </li>)
                }
            </ul>
        </div>
    )
}

export default MobileNavigationBar;