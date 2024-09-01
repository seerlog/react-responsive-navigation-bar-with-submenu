import React, { useState } from 'react';
import PcNavigationBar from './PcNavigationBar';
import MobileNavigationBar from './MobileNavigationBar';
import { menuItems, getFirstMenuItem, getFirstSubMenuItem } from './static/constants';
import './static/navBar.css';

export const NavBar = ({ ...props }) => {
    const [focusedMenu, setFocusedMenu] = useState(getFirstMenuItem().en);
    const [focusedSubMenu, setFocusedSubMenu] = useState(getFirstSubMenuItem().en);
    const [isFoldSideBar, setIsFoldSideBar] = useState(false);

    return (
        <>
            <PcNavigationBar
                props={props}
                menuItems={menuItems}
                focusedMenu={focusedMenu}
                setFocusedMenu={setFocusedMenu}
                focusedSubMenu={focusedSubMenu}
                setFocusedSubMenu={setFocusedSubMenu}
            />
            <MobileNavigationBar
                props={props}
                menuItems={menuItems}
                focusedMenu={focusedMenu}
                setFocusedMenu={setFocusedMenu}
                focusedSubMenu={focusedSubMenu}
                setFocusedSubMenu={setFocusedSubMenu}
                isFoldSideBar={isFoldSideBar}
                setIsFoldSideBar={setIsFoldSideBar}
            />
        </>
    );
};