import {AiOutlineMenuFold} from "react-icons/ai";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {siteName} from "./static/constants";

const MobileNavigationBar = ({
                                 props,
                                 menuItems,
                                 focusedMenu,
                                 setFocusedMenu,
                                 focusedSubMenu,
                                 setFocusedSubMenu,
                                 isFoldSideBar,
                                 setIsFoldSideBar
                             }) => {

    return (
        <div className={['mobile-nav-bar', isFoldSideBar ? 'mobile-nav-bar-fold' : undefined].join(' ')} {...props} >
            <div className={['mobile-nav-bar-head', isFoldSideBar ? 'mobile-nav-bar-head-fold' : undefined].join(' ')}>
                <div className={['mobile-nav-bar-logo', isFoldSideBar ? 'mobile-nav-bar-logo-fold' : undefined].join(' ')}
                     onClick={() => {
                         setFocusedMenu(menuItems[0].en);
                         setFocusedSubMenu(menuItems[0].subMenuItems[0].en);
                     }}>{siteName}</div>
                <div className={'mobile-nav-bar-fold-button'}
                     onClick={() => {
                         setIsFoldSideBar(!isFoldSideBar)
                     }}>
                    {
                        isFoldSideBar ? <AiOutlineMenuUnfold/> : <AiOutlineMenuFold/>
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
                        isFoldSideBar={isFoldSideBar}/>
                )
            }
        </div>
    );
}

const MobileNavigationBarItem = ({
                                     menuItem,
                                     focusedMenu,
                                     setFocusedMenu,
                                     focusedSubMenu,
                                     setFocusedSubMenu,
                                     isFoldSideBar
                                 }) => {
    const isMenuFocused = focusedMenu === `${menuItem.en}`;

    return (
        <div data-key={menuItem.en}
             className={['mobile-nav-bar-item', isFoldSideBar ? 'mobile-nav-bar-item-fold' : undefined].join(' ')}>
            <div data-key={menuItem.en}
                 className={['mobile-nav-bar-menu'
                     , isFoldSideBar ? 'mobile-nav-bar-menu-fold' : 'mobile-nav-bar-menu-unfold'
                     , isMenuFocused ? 'mobile-nav-bar-menu-focused' : undefined].join(' ')}
                 onClick={() => {
                     const [firstSubMenuItem] = menuItem.subMenuItems;
                     setFocusedMenu(`${menuItem.en}`);
                     setFocusedSubMenu(`${firstSubMenuItem.en}`);
                 }}>
                <div data-key={menuItem.en} className={'mobile-nav-bar-menu-icon'}>
                    {menuItem.icon}
                </div>
                <div data-key={menuItem.en}
                     className={['mobile-nav-bar-menu-label', isFoldSideBar ? 'mobile-nav-bar-menu-label-fold' : undefined].join(' ')}>
                    {menuItem.ko}
                </div>
            </div>
            <ul className={['mobile-nav-bar-submenu'
                , isFoldSideBar ? 'mobile-nav-bar-submenu-hide' : undefined
                , (!isFoldSideBar && isMenuFocused) ? 'mobile-nav-bar-submenu-show' : undefined].join(' ')}>
                {
                    menuItem.subMenuItems.map((subMenuItem, key) => {
                        const isSubMenuFocused = focusedSubMenu === `${subMenuItem.en}`;

                        return <li key={key}
                                   className={(isMenuFocused && isSubMenuFocused) ? 'mobile-nav-bar-submenu-label-focused' : undefined}
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

export default MobileNavigationBar;
