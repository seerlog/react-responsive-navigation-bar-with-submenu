import {AiOutlineMenuFold} from "react-icons/ai";
import {AiOutlineMenuUnfold} from "react-icons/ai";
import {siteName} from "./static/constants";
import {getFirstMenuItem, getFirstSubMenuItem, ifTrue} from "./static/utils";

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
        <div className={['mobile-nav-bar', ifTrue(isFoldSideBar, 'mobile-nav-bar-fold')].join(' ')} {...props} >
            <div className={['mobile-nav-bar-head', ifTrue(isFoldSideBar, 'mobile-nav-bar-head-fold')].join(' ')}>
                <div
                    className={['mobile-nav-bar-logo', ifTrue(isFoldSideBar, 'mobile-nav-bar-logo-fold')].join(' ')}
                    onClick={() => {
                        setFocusedMenu(getFirstMenuItem().en);
                        setFocusedSubMenu(getFirstSubMenuItem().en);
                    }}>{siteName}</div>
                <div className={'mobile-nav-bar-fold-button'}
                     onClick={() => { setIsFoldSideBar(!isFoldSideBar) }}>
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
             className={['mobile-nav-bar-item', ifTrue(isFoldSideBar, 'mobile-nav-bar-item-fold')].join(' ')}>
            <div data-key={menuItem.en}
                 className={['mobile-nav-bar-menu'
                     , ifTrue(isFoldSideBar, 'mobile-nav-bar-menu-fold', 'mobile-nav-bar-menu-unfold')
                     , ifTrue(isMenuFocused, 'mobile-nav-bar-menu-focused')].join(' ')}
                 onClick={() => {
                     const [firstSubMenuItem] = menuItem.subMenuItems;
                     setFocusedMenu(`${menuItem.en}`);
                     setFocusedSubMenu(`${firstSubMenuItem.en}`);
                 }}>
                <div data-key={menuItem.en} className={'mobile-nav-bar-menu-icon'}>
                    {menuItem.icon}
                </div>
                <div data-key={menuItem.en}
                     className={['mobile-nav-bar-menu-label', ifTrue(isFoldSideBar, 'mobile-nav-bar-menu-label-fold')].join(' ')}>
                    {menuItem.ko}
                </div>
            </div>
            <ul className={['mobile-nav-bar-submenu'
                , ifTrue(isFoldSideBar, 'mobile-nav-bar-submenu-hide')
                , ifTrue((!isFoldSideBar && isMenuFocused), 'mobile-nav-bar-submenu-show')].join(' ')}>
                {
                    menuItem.subMenuItems.map((subMenuItem, key) => {
                        const isSubMenuFocused = focusedSubMenu === `${subMenuItem.en}`;

                        return <li key={key}
                                   className={ifTrue((isMenuFocused && isSubMenuFocused), 'mobile-nav-bar-submenu-label-focused')}
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
